/**
 * Aktivt färgtema.
 * Byt tema genom att ändra: THEME.natt | THEME.dimma | THEME.ocean | THEME.ember | THEME.violett
 */
import { THEME } from "./themes";
export const COLORS = THEME.ocean;

export const FONT_FAMILY = {
  primary:
    "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
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
  sm: `0 1px 3px ${COLORS.shadowBase}`,
  md: `0 4px 12px ${COLORS.shadowBase}`,
  lg: `0 8px 32px ${COLORS.shadowBase}`,
  glow: `0 0 40px ${COLORS.primary}4d`,
  glowAccent: `0 0 40px ${COLORS.accent}40`,
  glowFeatured: `0 0 60px ${COLORS.primary}66, 0 0 120px ${COLORS.accent}33`,
};

export const TRANSITIONS = {
  fast: "0.1s ease",
  default: "0.2s ease",
  slow: "0.35s ease",
};

export const setSpacing = (n) => `${n * 4}px`;
