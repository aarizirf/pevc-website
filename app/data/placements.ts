export interface Placement {
  name: string;
  slug: string;
  /** Max rendered width in px at the target height, tuned to the logo's
   * natural aspect ratio so very wide single-line wordmarks (e.g. Guggenheim,
   * Citadel Securities) don't get squashed far shorter than compact logos. */
  maxWidth?: number;
}

export const placements: Placement[] = [
  { name: "Apollo Global Management", slug: "apollo", maxWidth: 260 },
  { name: "Ares", slug: "ares", maxWidth: 150 },
  { name: "Bank of America", slug: "bank-of-america", maxWidth: 260 },
  { name: "Blackstone", slug: "blackstone", maxWidth: 260 },
  { name: "CD&R", slug: "cdr", maxWidth: 180 },
  { name: "Centerview Partners", slug: "centerview-partners", maxWidth: 260 },
  { name: "Citadel", slug: "citadel", maxWidth: 260 },
  { name: "Citadel Securities", slug: "citadel-securities", maxWidth: 260 },
  { name: "D1 Capital Partners", slug: "d1-capital", maxWidth: 170 },
  { name: "Davidson Kempner", slug: "davidson-kempner", maxWidth: 260 },
  { name: "EQT", slug: "eqt", maxWidth: 170 },
  { name: "Evercore", slug: "evercore", maxWidth: 260 },
  { name: "Farallon Capital", slug: "farallon", maxWidth: 190 },
  { name: "Fidelity", slug: "fidelity", maxWidth: 220 },
  { name: "General Atlantic", slug: "general-atlantic", maxWidth: 200 },
  { name: "Goldman Sachs", slug: "goldman-sachs", maxWidth: 120 },
  { name: "Greenoaks Capital", slug: "greenoaks", maxWidth: 260 },
  { name: "GTCR", slug: "gtcr", maxWidth: 180 },
  { name: "Gumshoe Capital", slug: "gumshoe-capital", maxWidth: 180 },
  { name: "Guggenheim", slug: "guggenheim", maxWidth: 260 },
  { name: "Harris Associates", slug: "harris-associates", maxWidth: 260 },
  { name: "Hellman & Friedman", slug: "hellman-friedman", maxWidth: 260 },
  { name: "Hound Partners", slug: "hound-partners" },
  { name: "ICONIQ Capital", slug: "iconiq", maxWidth: 200 },
  { name: "Insight Partners", slug: "insight-partners", maxWidth: 140 },
  { name: "J.P. Morgan", slug: "jp-morgan", maxWidth: 240 },
  { name: "KKR", slug: "kkr", maxWidth: 200 },
  { name: "Lazard", slug: "lazard", maxWidth: 250 },
  { name: "Millennium Management", slug: "millennium", maxWidth: 260 },
  { name: "Moelis", slug: "moelis", maxWidth: 190 },
  { name: "Morgan Stanley", slug: "morgan-stanley", maxWidth: 260 },
  { name: "NEA", slug: "nea", maxWidth: 130 },
  { name: "Oaktree Capital", slug: "oaktree", maxWidth: 180 },
  { name: "PJT Partners", slug: "pjt", maxWidth: 90 },
  { name: "Point72", slug: "point72", maxWidth: 140 },
  { name: "Qatalyst Partners", slug: "qatalyst-partners", maxWidth: 130 },
  { name: "Ribbit Capital", slug: "ribbit-capital", maxWidth: 170 },
  { name: "Silver Lake", slug: "silver-lake", maxWidth: 260 },
  { name: "TPG", slug: "tpg", maxWidth: 120 },
  { name: "Warburg Pincus", slug: "warburg-pincus", maxWidth: 260 },
];
