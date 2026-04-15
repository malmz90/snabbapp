export const COLORS = {
  // Backgrounds
  background: "#0a0a0a",
  backgroundSecondary: "#0f0f0f",
  backgroundTertiary: "#161616",
  backgroundCard: "#111111",

  // Primary brand (blue)
  primary: "#1a7fe8",
  primaryPressed: "#1568c5",
  primaryLight: "#3b9aff",

  // Secondary
  secondary: "#2d3748",
  secondaryPressed: "#1a202c",

  // Accent (cyan)
  accent: "#00d4ff",
  accentPressed: "#00b8d9",

  // Overlay / glass
  overlayBackground: "rgba(255,255,255,0.08)",
  overlayPressed: "rgba(255,255,255,0.14)",
  overlayBorderSubtle: "rgba(255,255,255,0.12)",
  backgroundPrimaryPressed: "rgba(0,0,0,0.05)",

  // Text
  textPrimary: "#ffffff",
  textSecondary: "#a0aec0",
  textTertiary: "#718096",
  textInverse: "#ffffff",
  textMuted: "#4a5568",

  // Borders
  borderFocus: "rgba(255,255,255,0.25)",
  border: "rgba(255,255,255,0.08)",
  borderSubtle: "rgba(255,255,255,0.05)",

  // Gradient helpers (used as string in style)
  gradientBrand: "linear-gradient(135deg, #1a7fe8 0%, #00d4ff 100%)",
  gradientHero: "linear-gradient(135deg, #1a7fe8 0%, #a855f7 50%, #00d4ff 100%)",

  // Status
  success: "#48bb78",
  warning: "#ed8936",
  error: "#fc8181",
};

export const FONT_FAMILY = {
  primary: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "var(--font-geist-mono), 'Courier New', monospace",
};

export const FONT_WEIGHT = {
  primary: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
  mono: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

export const FONT_SIZES = {
  xs: 11,
  sm: 13,
  body: 16,
  md: 18,
  lg: 20,
  xl: 24,
  "2xl": 32,
  "3xl": 40,
  "4xl": 56,
  "5xl": 72,
};

export const TYPOGRAPHY_BASE = {
  display: { fontSize: 64, lineHeight: 72, letterSpacing: -1.5 },
  h1: { fontSize: 48, lineHeight: 56, letterSpacing: -1 },
  h2: { fontSize: 36, lineHeight: 44, letterSpacing: -0.5 },
  h3: { fontSize: 28, lineHeight: 36, letterSpacing: -0.3 },
  h4: { fontSize: 22, lineHeight: 30, letterSpacing: 0 },
  h5: { fontSize: 18, lineHeight: 26, letterSpacing: 0 },
  body: { fontSize: 16, lineHeight: 24, letterSpacing: 0 },
  bodyLarge: { fontSize: 18, lineHeight: 28, letterSpacing: 0 },
  bodySmall: { fontSize: 14, lineHeight: 20, letterSpacing: 0.1 },
  caption: { fontSize: 12, lineHeight: 16, letterSpacing: 0.3 },
  label: { fontSize: 13, lineHeight: 18, letterSpacing: 0.2 },
  overline: { fontSize: 11, lineHeight: 16, letterSpacing: 1.5 },
};

export const TYPOGRAPHY = {
  heroDisplay: {
    fontSize: 72,
    lineHeight: 80,
    letterSpacing: -2,
    fontWeight: FONT_WEIGHT.primary.extraBold,
    fontFamily: FONT_FAMILY.primary,
    color: COLORS.textPrimary,
  },
  sectionTitle: {
    fontSize: 40,
    lineHeight: 48,
    letterSpacing: -0.8,
    fontWeight: FONT_WEIGHT.primary.bold,
    fontFamily: FONT_FAMILY.primary,
    color: COLORS.textPrimary,
  },
  cardTitle: {
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.2,
    fontWeight: FONT_WEIGHT.primary.semiBold,
    fontFamily: FONT_FAMILY.primary,
    color: COLORS.textPrimary,
  },
  lead: {
    fontSize: 20,
    lineHeight: 32,
    letterSpacing: 0,
    fontWeight: FONT_WEIGHT.primary.regular,
    fontFamily: FONT_FAMILY.primary,
    color: COLORS.textSecondary,
  },
  badge: {
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 1.2,
    fontWeight: FONT_WEIGHT.primary.bold,
    fontFamily: FONT_FAMILY.primary,
    color: COLORS.textPrimary,
  },
};

export const LINE_HEIGHT = {
  none: 1,
  tight: 1.1,
  snug: 1.25,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
};

export const BORDER_RADIUS = {
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "24px",
  round: "9999px",
};

export const SPACING = {
  x1: "4px",
  x2: "8px",
  x3: "12px",
  x4: "16px",
  x5: "20px",
  x6: "24px",
  x7: "28px",
  x8: "32px",
  x10: "40px",
  x12: "48px",
  x16: "64px",
  x20: "80px",
  x24: "96px",
};

export const OPACITY = {
  disabled: 0.45,
  muted: 0.6,
  subtle: 0.35,
};

export const SHADOWS = {
  sm: "0 1px 3px rgba(0,0,0,0.4)",
  md: "0 4px 12px rgba(0,0,0,0.5)",
  lg: "0 8px 32px rgba(0,0,0,0.6)",
  glow: "0 0 40px rgba(26,127,232,0.3)",
  glowAccent: "0 0 40px rgba(0,212,255,0.25)",
  glowFeatured: "0 0 60px rgba(26,127,232,0.4), 0 0 120px rgba(168,85,247,0.2)",
};

export const TRANSITIONS = {
  fast: "0.1s ease",
  default: "0.2s ease",
  slow: "0.35s ease",
};

export const setSpacing = (n) => `${n * 4}px`;
