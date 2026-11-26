// Submit URLs to IndexNow (Bing, Yandex, Seznam, Naver, ...).
// Run only after a production deploy is live:
//   npm run indexnow                      -> every URL in the live sitemap
//   npm run indexnow -- /pricing /contact -> only these (paths or full URLs)
// KEY must match the file public/<KEY>.txt, which is served at KEY_LOCATION.

const SITE = "https://www.fidurapay.com";
const KEY = "7d67411e89b35db2e0eaa92b7546ad80";
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const HOST = new URL(SITE).host;
const MAX_URLS = 10000;

function fail(msg) {
  console.error(`indexnow: ${msg}`);
  process.exit(1);
}

// 1. Key file must be live, or IndexNow will reject the submission.
const keyRes = await fetch(KEY_LOCATION);
const keyBody = (await keyRes.text()).trim();
if (keyRes.status !== 200 || keyBody !== KEY) {
  fail(`key file check failed at ${KEY_LOCATION} (status ${keyRes.status}). Is the deploy live?`);
}

// 2. URL list: CLI args, or every <loc> in the live sitemap.
const args = process.argv.slice(2);
let urls;
if (args.length) {
  urls = args.map((a) => (a.startsWith("/") ? SITE + a : a));
} else {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) fail(`could not fetch sitemap (status ${res.status})`);
  const xml = await res.text();
  urls = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) => m[1]);
  if (!urls.length) fail("no <loc> entries found in sitemap");
}

// 3. Every URL must be on the www host.
const bad = urls.filter((u) => {
  try { return new URL(u).host !== HOST; } catch { return true; }
});
if (bad.length) {
  fail(`URLs not on ${HOST} (a stale deploy whose sitemap still lists non-www URLs?):\n  ${bad.join("\n  ")}`);
}

// 4. Submit in chunks of MAX_URLS.
for (let i = 0; i < urls.length; i += MAX_URLS) {
  const urlList = urls.slice(i, i + MAX_URLS);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  if (res.status !== 200 && res.status !== 202) {
    fail(`submission failed: ${res.status}\n${await res.text()}`);
  }
  console.log(`indexnow: submitted ${urlList.length} URL(s), status ${res.status}`);
}
