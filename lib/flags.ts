// Feature flags. Static so builds are deterministic; flip by editing this file.
export const FLAGS = {
  /** "Fidura is not a bank…" line under TrustRow. Keep false until counsel signs off. */
  notABankDisclosure: false,
  /** Identity checks live? While false, TrustRow says "Every sender's ID verified at launch". */
  identityChecksLive: false,
} as const;
