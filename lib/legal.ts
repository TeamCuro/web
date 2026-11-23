// Legal page switches and dates (FE-120). Static so builds are deterministic.
import { FLAGS } from "@/lib/flags";

/**
 * Identity verification (KYC) live? While false, /terms and /privacy keep their early-access wording.
 * Follows FLAGS.identityChecksLive (lib/flags.ts), the one launch switch also used by TrustRow.
 * When flipping it, ship counsel's updated launch copy and set real dates in TERMS_UPDATED / PRIVACY_UPDATED below.
 */
export const IDENTITY_CHECKS_LIVE: boolean = FLAGS.identityChecksLive;

/** "Last updated" dates shown on /terms and /privacy. */
export const TERMS_UPDATED = "September 3, 2026";
export const PRIVACY_UPDATED = "September 3, 2026";
