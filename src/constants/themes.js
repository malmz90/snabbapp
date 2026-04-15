/**
 * Tema-system för SnabbApp.
 *
 * Byt aktivt tema i src/constants/index.js:
 *   import { THEME } from "./themes";
 *   export const COLORS = THEME.dimma;   ← ändra här
 *
 * Tillgängliga teman: natt | dimma | ocean
 */

export const THEME = {
  /** ─── Natt ─────────────────────────────────────────────────────────────────
   * Djupsvart bakgrund med klarblå accent. Stilren och teknisk känsla.
   */
  natt: {
    shadowBase: "rgba(0,0,0,0.55)",
    navbarBackground: "rgba(10,10,10,0.85)",
    background: "#0a0a0a",
    backgroundSecondary: "#0f0f0f",
    backgroundTertiary: "#161616",
    backgroundCard: "#111111",

    primary: "#1a7fe8",
    primaryPressed: "#1568c5",
    primaryLight: "#3b9aff",

    secondary: "#2d3748",
    secondaryPressed: "#1a202c",

    accent: "#00d4ff",
    accentPressed: "#00b8d9",

    overlayBackground: "rgba(255,255,255,0.08)",
    overlayPressed: "rgba(255,255,255,0.14)",
    overlayBorderSubtle: "rgba(255,255,255,0.12)",
    backgroundPrimaryPressed: "rgba(0,0,0,0.05)",

    textPrimary: "#ffffff",
    textSecondary: "#a0aec0",
    textTertiary: "#718096",
    textInverse: "#ffffff",
    textMuted: "#4a5568",

    borderFocus: "rgba(255,255,255,0.25)",
    border: "rgba(255,255,255,0.08)",
    borderSubtle: "rgba(255,255,255,0.05)",

    gradientBrand: "linear-gradient(135deg, #1a7fe8 0%, #00d4ff 100%)",
    gradientHero: "linear-gradient(135deg, #1a7fe8 0%, #a855f7 50%, #00d4ff 100%)",

    success: "#48bb78",
    warning: "#ed8936",
    error: "#fc8181",
  },

  /** ─── Dimma ─────────────────────────────────────────────────────────────────
   * Ljus och luftig. Rent vitt med blå-grå toner. Passar en professionell
   * och tillgänglig känsla — liknar moderna SaaS-sajter.
   */
  dimma: {
    shadowBase: "rgba(15,23,42,0.12)",
    navbarBackground: "rgba(248,250,252,0.88)",
    background: "#f8fafc",
    backgroundSecondary: "#f1f5f9",
    backgroundTertiary: "#e8f0fe",
    backgroundCard: "#ffffff",

    primary: "#1a7fe8",
    primaryPressed: "#1568c5",
    primaryLight: "#3b9aff",

    secondary: "#e2e8f0",
    secondaryPressed: "#cbd5e0",

    accent: "#0ea5e9",
    accentPressed: "#0284c7",

    overlayBackground: "rgba(0,0,0,0.05)",
    overlayPressed: "rgba(0,0,0,0.09)",
    overlayBorderSubtle: "rgba(0,0,0,0.1)",
    backgroundPrimaryPressed: "rgba(26,127,232,0.08)",

    textPrimary: "#0f172a",
    textSecondary: "#475569",
    textTertiary: "#94a3b8",
    textInverse: "#ffffff",
    textMuted: "#cbd5e0",

    borderFocus: "rgba(26,127,232,0.5)",
    border: "rgba(0,0,0,0.08)",
    borderSubtle: "rgba(0,0,0,0.04)",

    gradientBrand: "linear-gradient(135deg, #1a7fe8 0%, #0ea5e9 100%)",
    gradientHero: "linear-gradient(135deg, #1a7fe8 0%, #6366f1 50%, #0ea5e9 100%)",

    success: "#16a34a",
    warning: "#d97706",
    error: "#dc2626",
  },

  /** ─── Ocean ─────────────────────────────────────────────────────────────────
   * Mörkt men varmare — djupblå navy istället för svart. Mer omfamnande och
   * premium. Inspirerat av GitHub och Linear.
   */
  ocean: {
    shadowBase: "rgba(0,0,0,0.6)",
    navbarBackground: "rgba(6,13,24,0.88)",
    background: "#060d18",
    backgroundSecondary: "#0a1628",
    backgroundTertiary: "#0e1e35",
    backgroundCard: "#0d1829",

    primary: "#3b82f6",
    primaryPressed: "#2563eb",
    primaryLight: "#60a5fa",

    secondary: "#1e3a5f",
    secondaryPressed: "#163058",

    accent: "#06b6d4",
    accentPressed: "#0891b2",

    overlayBackground: "rgba(255,255,255,0.06)",
    overlayPressed: "rgba(255,255,255,0.12)",
    overlayBorderSubtle: "rgba(100,170,255,0.15)",
    backgroundPrimaryPressed: "rgba(0,0,0,0.05)",

    textPrimary: "#e8f4ff",
    textSecondary: "#94afc8",
    textTertiary: "#5b7a9a",
    textInverse: "#ffffff",
    textMuted: "#2d4a6a",

    borderFocus: "rgba(59,130,246,0.6)",
    border: "rgba(100,160,255,0.1)",
    borderSubtle: "rgba(100,160,255,0.05)",

    gradientBrand: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    gradientHero: "linear-gradient(135deg, #3b82f6 0%, #818cf8 50%, #06b6d4 100%)",

    success: "#34d399",
    warning: "#fbbf24",
    error: "#f87171",
  },

  /** ─── Ember ─────────────────────────────────────────────────────────────────
   * Mörkt med varma bärnstens- och orangeaccenter. Energifyllt och distinkt —
   * bryter mot blå-normen och syns direkt.
   */
  ember: {
    shadowBase: "rgba(0,0,0,0.6)",
    navbarBackground: "rgba(10,7,4,0.88)",

    background: "#0a0704",
    backgroundSecondary: "#100c05",
    backgroundTertiary: "#1a1108",
    backgroundCard: "#130e06",

    primary: "#f59e0b",
    primaryPressed: "#d97706",
    primaryLight: "#fbbf24",

    secondary: "#3d2c0a",
    secondaryPressed: "#2d1f05",

    accent: "#fb923c",
    accentPressed: "#ea7a28",

    overlayBackground: "rgba(255,255,255,0.07)",
    overlayPressed: "rgba(255,255,255,0.12)",
    overlayBorderSubtle: "rgba(255,200,100,0.12)",
    backgroundPrimaryPressed: "rgba(245,158,11,0.08)",

    textPrimary: "#fef9f0",
    textSecondary: "#c4a46b",
    textTertiary: "#7a6035",
    textInverse: "#0a0704",
    textMuted: "#3d2c0a",

    borderFocus: "rgba(245,158,11,0.5)",
    border: "rgba(255,180,60,0.1)",
    borderSubtle: "rgba(255,180,60,0.05)",

    gradientBrand: "linear-gradient(135deg, #f59e0b 0%, #fb923c 100%)",
    gradientHero: "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #fb923c 100%)",

    success: "#4ade80",
    warning: "#facc15",
    error: "#f87171",
  },

  /** ─── Violett ────────────────────────────────────────────────────────────────
   * Djupt lila mörker med elektrisk violett och rosa accent. Kreativt,
   * modernt och omedelbart igenkännbart — passar tech och AI-produkter.
   */
  violett: {
    shadowBase: "rgba(0,0,0,0.65)",
    navbarBackground: "rgba(8,4,16,0.88)",

    background: "#080410",
    backgroundSecondary: "#0e0720",
    backgroundTertiary: "#160b2e",
    backgroundCard: "#100620",

    primary: "#a855f7",
    primaryPressed: "#9333ea",
    primaryLight: "#c084fc",

    secondary: "#2e1065",
    secondaryPressed: "#1e0a4a",

    accent: "#ec4899",
    accentPressed: "#db2777",

    overlayBackground: "rgba(255,255,255,0.07)",
    overlayPressed: "rgba(255,255,255,0.13)",
    overlayBorderSubtle: "rgba(200,130,255,0.15)",
    backgroundPrimaryPressed: "rgba(168,85,247,0.08)",

    textPrimary: "#faf5ff",
    textSecondary: "#c4b5fd",
    textTertiary: "#7c3aed",
    textInverse: "#ffffff",
    textMuted: "#3b0764",

    borderFocus: "rgba(168,85,247,0.6)",
    border: "rgba(180,100,255,0.12)",
    borderSubtle: "rgba(180,100,255,0.06)",

    gradientBrand: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
    gradientHero: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #ec4899 100%)",

    success: "#34d399",
    warning: "#fbbf24",
    error: "#f87171",
  },
};
