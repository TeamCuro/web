const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/0419ebb025863ab88db0f5f681c6f88f";

export type FormSubmitResult = { ok: true } | { ok: false; message: string };

/**
 * Shared FormSubmit.co integration used by every lead form on the site
 * (waitlist, contact, partner). FormSubmit's ajax endpoint returns
 * inconsistent JSON shapes across accounts/setups, so success is treated
 * as "2xx and not an explicit failure" rather than requiring a specific
 * payload shape.
 */
export async function submitLead(payload: Record<string, unknown>): Promise<FormSubmitResult> {
  try {
    const response = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const rawResponse = await response.text();
    let result: Record<string, unknown> | null = null;
    if (rawResponse) {
      try {
        result = JSON.parse(rawResponse) as Record<string, unknown>;
      } catch {
        result = null;
      }
    }

    const success = result?.success;
    const explicitFailure = success === false || success === "false";
    const explicitSuccess =
      success === true || success === "true" || success === 1 || success === "1" || success === "success";

    if (!response.ok || explicitFailure) {
      const message =
        typeof result?.message === "string" && result.message.trim()
          ? result.message
          : "Something went wrong. Please try again.";
      return { ok: false, message };
    }

    if (explicitSuccess || response.ok) {
      return { ok: true };
    }

    return { ok: false, message: "Something went wrong. Please try again." };
  } catch (error) {
    console.error("Form submission failed", error);
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}
