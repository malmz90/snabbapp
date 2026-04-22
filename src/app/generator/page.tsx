"use client";

import { useState, useEffect } from "react";
import IdeaCard from "@/components/generator/IdeaCard";
import { COLORS, SHADOWS, BORDER_RADIUS, SPACING } from "@/constants";
import type { Idea, FormValues } from "./types";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function withAlpha(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// ─── Options ──────────────────────────────────────────────────────────────────

const INDUSTRIES = [
  { value: "Health & Fitness", label: "Hälsa & Fitness" },
  { value: "Education", label: "Utbildning" },
  { value: "Finance", label: "Finans" },
  { value: "Gaming", label: "Gaming" },
  { value: "Productivity", label: "Produktivitet" },
  { value: "AI Tools", label: "AI-verktyg" },
  { value: "E-commerce", label: "E-handel" },
  { value: "Social", label: "Sociala medier" },
  { value: "Lifestyle", label: "Livsstil" },
  { value: "Other", label: "Övrigt" },
];

const PLATFORMS = [
  { value: "Mobile App", label: "Mobilapp", icon: "📱" },
  { value: "Web App", label: "Webbapp", icon: "🌐" },
  { value: "Desktop App", label: "Skrivbordsapp", icon: "💻" },
  { value: "Browser Extension", label: "Webbläsar-\ntillägg", icon: "🔌" },
];

const MONETIZATIONS = [
  { value: "Subscription", label: "Prenumeration" },
  { value: "One-time Purchase", label: "Engångsköp" },
  { value: "Freemium", label: "Freemium" },
  { value: "Ads", label: "Annonsering" },
  { value: "Marketplace", label: "Marknadsplats" },
];

const COMPLEXITIES = [
  { value: "MVP (Simple)", label: "MVP", desc: "Enkelt & snabbt" },
  { value: "Medium", label: "Medel", desc: "Balanserat" },
  { value: "Advanced", label: "Avancerat", desc: "Komplex" },
];

// ─── Random fill data ─────────────────────────────────────────────────────────

const RANDOM_AUDIENCES = [
  "Studenter och unga vuxna",
  "Småföretagare och egenföretagare",
  "Frilansare och konsulter",
  "Föräldrar med barn i förskoleåldern",
  "Hälsomedvetna individer 25–40 år",
  "Tech-entusiaster och early adopters",
  "Seniorer 60+ som vill hålla sig aktiva",
  "Gym-besökare och fitnessentusiaster",
  "Hemmalagare som vill planera veckomat",
  "Distansarbetande team",
];

const RANDOM_PROBLEMS = [
  "Svårt att hålla koll på dagliga vanor och rutiner",
  "För tidskrävande och krångligt att hantera fakturor",
  "Brist på motivation att träna regelbundet hemma",
  "Svårt att hitta pålitlig lokal service i närheten",
  "Dålig kommunikation och samordning i team på distans",
  "Komplicerat att spara pengar och nå ekonomiska mål",
  "Svårt att hitta relevanta kurser och lärresurser online",
  "Tidskrävande att planera och handla mat för veckan",
  "Svårt att hitta likasinnade och bygga nätverk",
  "Ingen bra app för att följa upp barns skoluppgifter",
];

const EMPTY_FORM: FormValues = {
  industry: "",
  audience: "",
  problem: "",
  platform: "",
  monetization: "",
  complexity: "",
};

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GeneratorPage() {
  const [form, setForm] = useState<FormValues>(EMPTY_FORM);
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("snabbapp-generator-ideas");
      if (saved) setIdeas(JSON.parse(saved));
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  function setField(key: keyof FormValues, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (error) setError("");
  }

  function fillRandom() {
    setForm({
      industry: randomFrom(INDUSTRIES).value,
      audience: randomFrom(RANDOM_AUDIENCES),
      problem: randomFrom(RANDOM_PROBLEMS),
      platform: randomFrom(PLATFORMS).value,
      monetization: randomFrom(MONETIZATIONS).value,
      complexity: randomFrom(COMPLEXITIES).value,
    });
    setError("");
  }

  function validate(): string {
    if (!form.industry) return "Välj en bransch.";
    if (!form.audience.trim()) return "Fyll i din målgrupp.";
    if (!form.problem.trim()) return "Beskriv problemet du vill lösa.";
    if (!form.platform) return "Välj en plattform.";
    if (!form.monetization) return "Välj en intäktsmodell.";
    if (!form.complexity) return "Välj komplexitetsnivå.";
    return "";
  }

  async function handleGenerate() {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/generate-ideas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.error ?? "Något gick fel. Försök igen.");
      if (!Array.isArray(data)) throw new Error("Oväntat svar från API:et.");

      setIdeas(data);
      localStorage.setItem("snabbapp-generator-ideas", JSON.stringify(data));

      setTimeout(() => {
        document.getElementById("results-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Okänt fel inträffade.");
    } finally {
      setLoading(false);
    }
  }

  const filledCount = Object.values(form).filter((v) => v.trim() !== "").length;
  const totalFields = Object.keys(EMPTY_FORM).length;

  return (
    <div className="min-h-screen" style={{ background: COLORS.background }}>
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5"
            style={{
              background: withAlpha(COLORS.primary, 0.15),
              color: COLORS.primaryLight,
              border: `1px solid ${withAlpha(COLORS.primary, 0.3)}`,
              borderRadius: BORDER_RADIUS.round,
            }}
          >
            AI-driven generator
          </span>
          <h1
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ color: COLORS.textPrimary, letterSpacing: "-1.5px", lineHeight: "1.1" }}
          >
            App Idea Generator
          </h1>
          <p
            className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: COLORS.textSecondary }}
          >
            Fyll i formuläret nedan och låt AI:n generera{" "}
            <span style={{ color: COLORS.textPrimary, fontWeight: 600 }}>5 MVP-klara app-idéer</span>{" "}
            skräddarsydda för din nisch.
          </p>
        </div>

        {/* ── Form card ─────────────────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-6 sm:p-8 mb-8"
          style={{
            background: COLORS.backgroundCard,
            border: `1px solid ${COLORS.border}`,
            boxShadow: SHADOWS.lg,
            borderRadius: BORDER_RADIUS["2xl"],
          }}
        >
          {/* Progress indicator */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold" style={{ color: COLORS.textSecondary }}>
              Formulär
            </span>
            <span className="text-xs" style={{ color: COLORS.textTertiary }}>
              {filledCount}/{totalFields} fält ifyllda
            </span>
          </div>
          <div
            className="w-full h-1 rounded-full mb-8 overflow-hidden"
            style={{ background: withAlpha(COLORS.primary, 0.1) }}
          >
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${(filledCount / totalFields) * 100}%`,
                background: COLORS.gradientBrand,
              }}
            />
          </div>

          {/* Row 1: Industry + Audience */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <FieldWrapper label="Bransch" required>
              <StyledSelect
                value={form.industry}
                onChange={(v) => setField("industry", v)}
                placeholder="Välj bransch..."
              >
                {INDUSTRIES.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </StyledSelect>
            </FieldWrapper>

            <FieldWrapper label="Målgrupp" required hint="Vem är din typiska användare?">
              <StyledInput
                value={form.audience}
                onChange={(v) => setField("audience", v)}
                placeholder="t.ex. studenter, småföretagare..."
              />
            </FieldWrapper>
          </div>

          {/* Problem textarea */}
          <FieldWrapper
            label="Problem att lösa"
            required
            hint="Vad vill du hjälpa folk med?"
            className="mb-5"
          >
            <StyledTextarea
              value={form.problem}
              onChange={(v) => setField("problem", v)}
              placeholder="Beskriv problemet du vill lösa med din app..."
              rows={3}
            />
          </FieldWrapper>

          {/* Platform picker */}
          <FieldWrapper label="Plattform" required className="mb-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-1">
              {PLATFORMS.map((p) => {
                const selected = form.platform === p.value;
                return (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setField("platform", p.value)}
                    className="rounded-xl p-3.5 text-center transition-all duration-150 cursor-pointer"
                    style={{
                      background: selected
                        ? withAlpha(COLORS.primary, 0.18)
                        : COLORS.backgroundSecondary,
                      border: `1px solid ${selected ? COLORS.primary : COLORS.border}`,
                      color: selected ? COLORS.textPrimary : COLORS.textSecondary,
                      boxShadow: selected ? SHADOWS.glow : "none",
                      borderRadius: BORDER_RADIUS.xl,
                    }}
                  >
                    <div className="text-2xl mb-1.5">{p.icon}</div>
                    <div className="text-xs font-semibold leading-tight whitespace-pre-line">
                      {p.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </FieldWrapper>

          {/* Row 3: Monetization + Complexity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-7">
            <FieldWrapper label="Intäktsmodell" required>
              <StyledSelect
                value={form.monetization}
                onChange={(v) => setField("monetization", v)}
                placeholder="Välj modell..."
              >
                {MONETIZATIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </StyledSelect>
            </FieldWrapper>

            <FieldWrapper label="Komplexitet" required hint="Hur avancerad ska appen vara?">
              <div
                className="flex rounded-xl overflow-hidden mt-1"
                style={{ border: `1px solid ${COLORS.border}`, borderRadius: BORDER_RADIUS.xl }}
              >
                {COMPLEXITIES.map((c, idx) => {
                  const selected = form.complexity === c.value;
                  return (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => setField("complexity", c.value)}
                      className="flex-1 py-3 px-2 flex flex-col items-center transition-all duration-150 cursor-pointer"
                      style={{
                        background: selected
                          ? withAlpha(COLORS.primary, 0.2)
                          : COLORS.backgroundSecondary,
                        color: selected ? COLORS.textPrimary : COLORS.textSecondary,
                        borderRight:
                          idx < COMPLEXITIES.length - 1
                            ? `1px solid ${COLORS.border}`
                            : "none",
                      }}
                    >
                      <span className="text-sm font-bold">{c.label}</span>
                      <span
                        className="text-xs mt-0.5"
                        style={{ color: selected ? COLORS.textSecondary : COLORS.textTertiary }}
                      >
                        {c.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </FieldWrapper>
          </div>

          {/* Error message */}
          {error && (
            <div
              className="flex items-center gap-2 mb-5 rounded-xl px-4 py-3 text-sm"
              style={{
                background: withAlpha(COLORS.error, 0.08),
                border: `1px solid ${withAlpha(COLORS.error, 0.3)}`,
                color: COLORS.error,
                borderRadius: BORDER_RADIUS.xl,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  d="M8 5v4M8 11h.01M2 8a6 6 0 1112 0A6 6 0 012 8z"
                  stroke={COLORS.error}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              {error}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={fillRandom}
              disabled={loading}
              className="sm:w-auto rounded-xl py-3 px-5 text-sm font-semibold transition-all duration-150 cursor-pointer"
              style={{
                background: COLORS.backgroundSecondary,
                border: `1px solid ${COLORS.overlayBorderSubtle}`,
                color: COLORS.primaryLight,
                opacity: loading ? 0.5 : 1,
                borderRadius: BORDER_RADIUS.xl,
              }}
            >
              🎲 Slumpa inmatning
            </button>

            <button
              type="button"
              onClick={handleGenerate}
              disabled={loading}
              className="flex-1 py-3 px-6 text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              style={{
                background: loading
                  ? withAlpha(COLORS.primary, 0.35)
                  : COLORS.gradientBrand,
                color: COLORS.textInverse,
                cursor: loading ? "not-allowed" : "pointer",
                boxShadow: loading ? "none" : SHADOWS.glow,
                borderRadius: BORDER_RADIUS.xl,
                border: "none",
              }}
            >
              {loading ? (
                <>
                  <Spinner />
                  <span>Genererar idéer...</span>
                </>
              ) : (
                <>
                  <span>✨</span>
                  <span>Generera idéer</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ── Results ───────────────────────────────────────────────────────── */}
        {ideas.length > 0 && (
          <div id="results-section">
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-2xl font-bold"
                style={{ color: COLORS.textPrimary, letterSpacing: "-0.5px" }}
              >
                Genererade idéer
              </h2>
              <span
                className="text-xs font-bold px-2.5 py-1"
                style={{
                  background: withAlpha(COLORS.primary, 0.15),
                  color: COLORS.primaryLight,
                  border: `1px solid ${withAlpha(COLORS.primary, 0.25)}`,
                  borderRadius: BORDER_RADIUS.round,
                }}
              >
                {ideas.length} idéer
              </span>
            </div>

            <div className="space-y-5">
              {ideas.map((idea, i) => (
                <IdeaCard key={`${idea.name}-${i}`} idea={idea} index={i} />
              ))}
            </div>

            <p
              className="text-center text-xs mt-8"
              style={{ color: COLORS.textMuted }}
            >
              Idéerna är sparade i din webbläsare och laddas nästa gång du besöker sidan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

interface FieldWrapperProps {
  label: string;
  required?: boolean;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}

function FieldWrapper({ label, required, hint, className = "", children }: FieldWrapperProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-1.5 mb-1.5">
        <label className="text-sm font-semibold" style={{ color: COLORS.textPrimary }}>
          {label}
        </label>
        {required && (
          <span style={{ color: COLORS.accent, fontSize: 10 }}>*</span>
        )}
      </div>
      {hint && (
        <p className="text-xs mb-2" style={{ color: COLORS.textTertiary }}>
          {hint}
        </p>
      )}
      {children}
    </div>
  );
}

interface StyledSelectProps {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  children: React.ReactNode;
}

function StyledSelect({ value, onChange, placeholder, children }: StyledSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 text-sm outline-none transition appearance-none cursor-pointer"
      style={{
        background: COLORS.backgroundSecondary,
        border: `1px solid ${COLORS.border}`,
        color: value ? COLORS.textPrimary : COLORS.textTertiary,
        borderRadius: BORDER_RADIUS.xl,
      }}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {children}
    </select>
  );
}

interface StyledInputProps {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}

function StyledInput({ value, onChange, placeholder }: StyledInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 text-sm outline-none transition"
      style={{
        background: COLORS.backgroundSecondary,
        border: `1px solid ${COLORS.border}`,
        color: COLORS.textPrimary,
        borderRadius: BORDER_RADIUS.xl,
      }}
    />
  );
}

interface StyledTextareaProps {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  rows?: number;
}

function StyledTextarea({ value, onChange, placeholder, rows = 3 }: StyledTextareaProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full px-4 py-3 text-sm outline-none transition resize-none"
      style={{
        background: COLORS.backgroundSecondary,
        border: `1px solid ${COLORS.border}`,
        color: COLORS.textPrimary,
        borderRadius: BORDER_RADIUS.xl,
      }}
    />
  );
}

function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}
