# BE-102: Search Console, Bing Webmaster Tools, Cloudflare setup

Owner: PM / site admin. Property: `https://www.fidurapay.com` (apex `fidurapay.com` 308-redirects to www).
Public contact email: `info@fidurapay.com`. No getcuro domains or addresses anywhere.

## State found on 2026-11-26

- DNS for `fidurapay.com` is on Cloudflare. `www` is **DNS only** (grey cloud, CNAME to Vercel). Responses carry `server: Vercel` and no `cf-ray`.
  That means Cloudflare Email Obfuscation, Cloudflare managed robots.txt, and Cloudflare bot blocking do **not** currently apply to fidurapay.com. The issues in the ticket were seen on the old getcuro zone.
- Live `robots.txt` is the site's own (`User-Agent: * / Allow: /`). Nothing is blocked, AI crawlers included.
- **The live deploy is stale.** `/robots.txt` and `/sitemap.xml` still list non-www URLs (`https://fidurapay.com/...`). The repo already uses www (FE-122). Deploy `main` before you submit the sitemap. If you don't, Search Console will report URLs that redirect.

## 0. Deploy and check

After the deploy:

```sh
curl -s https://www.fidurapay.com/robots.txt        # Sitemap: https://www.fidurapay.com/sitemap.xml
curl -s https://www.fidurapay.com/sitemap.xml | grep -c "<loc>https://www.fidurapay.com"   # every URL is www
curl -s https://www.fidurapay.com/7d67411e89b35db2e0eaa92b7546ad80.txt   # IndexNow key file
curl -s https://www.fidurapay.com/contact | grep -o "[a-z]*@fidurapay.com" | sort -u   # info@fidurapay.com, no "[email protected]"
```

## 1. Cloudflare (keep crawlers and email readable)

Most of these settings only take effect when a record is proxied (orange cloud). Keep `www` and the apex **DNS only**, which is Vercel's recommendation. If anyone later switches proxying on, set these first:

- Security / Bots: AI Crawl Control, "Block AI bots", and the managed robots.txt toggle all **off**. This follows the PM decision of Nov 11, 2026 to unblock GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, PerplexityBot, Baiduspider, PetalBot and the rest. Bot Fight Mode **off**, because it can block bots that robots.txt allows.
- Scrape Shield: Email Address Obfuscation **off**.
- Re-run the step 0 checks. In `robots.txt`, check for any `Disallow` or `Content-Signal: ai-train=no` lines that Cloudflare injected.

Also look at the old getcuro zone. Wherever it still serves or redirects, point it at `https://www.fidurapay.com` with a 301, path preserved.

## 2. Google Search Console

1. Add property, choose **Domain**, enter `fidurapay.com`. Copy the `google-site-verification=...` TXT value.
2. In Cloudflare DNS, add a record: type TXT, name `@`, content as copied, proxy n/a. Leave the existing SPF TXT record in place. Click **Verify** (DNS can take minutes to hours).
3. Also add a **URL-prefix** property for `https://www.fidurapay.com/`, so there is an explicit "www property" for the acceptance check. It should verify automatically through the domain property. If it doesn't, verify it with the same DNS TXT method.
4. Sitemaps: submit `https://www.fidurapay.com/sitemap.xml` and wait for status **Success**.
5. Pages / URL Inspection: confirm the 9 routes (home, caregivers, seniors, compare, partners, pricing, contact, terms, privacy) are discovered. Request indexing for the home page.
6. Settings: set the generative AI / AI features setting to **Include**. If the property doesn't show the control yet, write that down and check again during the monthly review.
7. Settings, then Users and permissions: add the outside SEO help as **Restricted** (read-only). Never give them Owner.

## 3. Bing Webmaster Tools

1. Add site, then **Import from Google Search Console**. This is the fastest route and brings the sitemap over. You can also add `https://www.fidurapay.com` by hand and verify with the CNAME/TXT record that Bing gives you, added in Cloudflare DNS (DNS only).
2. Sitemaps: submit `https://www.fidurapay.com/sitemap.xml` and wait for status **Success**.
3. IndexNow is built into the repo:
   - Key file: `public/7d67411e89b35db2e0eaa92b7546ad80.txt` (public by design, not a secret).
   - After each production deploy that changes content, run `npm run indexnow`, which submits every sitemap URL. To submit specific pages: `npm run indexnow -- /pricing /contact`.
   - The script refuses to run if the key file isn't live, or if the sitemap still lists non-www URLs (a stale deploy).
   - Confirm the submissions under Bing Webmaster Tools, IndexNow.
   - Cloudflare Crawler Hints (automatic IndexNow) is **not** an option while `www` is DNS only.
4. Settings, then User management: add the outside SEO help with the **Read-only** role.

## 4. Monthly review (first week of each month)

- Search Console: Performance, including the Generative AI / AI features report; Pages (indexing) errors; Sitemaps status.
- Bing Webmaster Tools: AI Performance, Search Performance, IndexNow, Site Explorer errors.
- Re-run the step 0 curl checks to catch a crawler block or email obfuscation that has crept back in.

## Acceptance (Scenario 1)

Open both tools. Done when the www property shows Verified and the sitemap `https://www.fidurapay.com/sitemap.xml` shows **Success** in each.
