import { COLORS, SHADOWS, BORDER_RADIUS } from "@/constants";
import type { Idea } from "@/app/generator/types";

interface Props {
  idea: Idea;
  index: number;
}

function withAlpha(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// Derives 5 gradient variants from the active theme colors
function getCardGradients() {
  return [
    COLORS.gradientBrand,
    COLORS.gradientHero,
    `linear-gradient(135deg, ${COLORS.accent} 0%, ${COLORS.primary} 100%)`,
    `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryLight} 100%)`,
    `linear-gradient(135deg, ${COLORS.primaryLight} 0%, ${COLORS.accent} 100%)`,
  ];
}

export default function IdeaCard({ idea, index }: Props) {
  const gradient = getCardGradients()[index % 5];

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: COLORS.backgroundCard,
        border: `1px solid ${COLORS.border}`,
        boxShadow: SHADOWS.md,
        borderRadius: BORDER_RADIUS["2xl"],
      }}
    >
      {/* Card header */}
      <div
        className="px-6 py-5 flex items-start gap-4"
        style={{ borderBottom: `1px solid ${COLORS.borderSubtle}` }}
      >
        <span
          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold"
          style={{
            background: gradient,
            color: COLORS.textInverse,
            borderRadius: BORDER_RADIUS.xl,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <h3
            className="text-xl font-bold leading-tight"
            style={{ color: COLORS.textPrimary }}
          >
            {idea.name}
          </h3>
          <p
            className="text-sm mt-1 leading-relaxed"
            style={{ color: COLORS.textSecondary }}
          >
            {idea.description}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Features */}
        <div>
          <SectionLabel>Kärnfunktioner</SectionLabel>
          <ul className="space-y-2 mt-3">
            {idea.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm"
                style={{ color: COLORS.textSecondary }}
              >
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why it works */}
        <div>
          <SectionLabel>Varför det fungerar</SectionLabel>
          <p
            className="mt-3 text-sm leading-relaxed"
            style={{ color: COLORS.textSecondary }}
          >
            {idea.why_it_works}
          </p>
        </div>

        {/* MVP scope */}
        <div>
          <SectionLabel>MVP-scope</SectionLabel>
          <p
            className="mt-3 text-sm leading-relaxed"
            style={{ color: COLORS.textSecondary }}
          >
            {idea.mvp_scope}
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-xs font-bold uppercase tracking-wider"
      style={{ color: COLORS.textTertiary }}
    >
      {children}
    </span>
  );
}

function CheckIcon() {
  return (
    <span
      className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
      style={{ background: withAlpha(COLORS.primary, 0.2) }}
    >
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path
          d="M1.5 4l1.5 1.5L6.5 2"
          stroke={COLORS.primary}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
