"use client";

import Image from "next/image";
import Link from "next/link";
import AppText from "@/components/AppText";
import AppButton from "@/components/AppButton";
import { COLORS, SHADOWS, BORDER_RADIUS, SPACING } from "@/constants";

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M5.5 2.5H2.5a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V8.5M8.5 1.5h4m0 0v4m0-4L6 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8.5l3.5 3.5L13 4"
        stroke={COLORS.accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill={COLORS.accent}>
      <path d="M6 1l1.545 3.13L11 4.635l-2.5 2.435.59 3.44L6 8.875l-3.09 1.635.59-3.44L1 4.635l3.455-.505L6 1z" />
    </svg>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `${SPACING.x4} ${SPACING.x8}`,
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${COLORS.border}`,
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        <Image
          src="/snabbapplogo.png"
          alt="SnabbApp"
          width={160}
          height={44}
          style={{ objectFit: "contain" }}
          priority
        />
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: SPACING.x6 }}>
        <a href="#projekt" style={{ textDecoration: "none" }}>
          <AppText size="bodySmall" weight="medium" color={COLORS.textSecondary} style={{ transition: "color 0.2s" }}>
            Projekt
          </AppText>
        </a>
        <a href="#hur-det-fungerar" style={{ textDecoration: "none" }}>
          <AppText size="bodySmall" weight="medium" color={COLORS.textSecondary}>
            Hur det fungerar
          </AppText>
        </a>
        <AppButton
          href="mailto:hej@snabbapp.se"
          variant="primary"
          size="small"
          rightIcon={<IconArrow />}
        >
          Boka ett samtal
        </AppButton>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: `120px ${SPACING.x8} ${SPACING.x20}`,
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(26,127,232,0.18) 0%, rgba(168,85,247,0.08) 50%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Pill badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: SPACING.x2,
          background: "rgba(26,127,232,0.12)",
          border: `1px solid rgba(26,127,232,0.3)`,
          borderRadius: BORDER_RADIUS.round,
          padding: `${SPACING.x2} ${SPACING.x4}`,
          marginBottom: SPACING.x6,
        }}
      >
        <IconStar />
        <AppText size="bodySmall" weight="semiBold" color={COLORS.accent}>
          Din idé → Fungerande produkt på veckor
        </AppText>
      </div>

      {/* Headline */}
      <h1 style={{ margin: 0, padding: 0, maxWidth: "800px" }}>
        <AppText
          as="span"
          variant="heroDisplay"
          style={{
            display: "block",
            lineHeight: "1.05",
            fontSize: "clamp(40px, 7vw, 72px)",
          }}
        >
          Bygg din MVP på{" "}
          <span
            style={{
              background: COLORS.gradientBrand,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            veckor
          </span>
          , inte månader
        </AppText>
      </h1>

      {/* Subtext */}
      <div style={{ maxWidth: "560px", marginTop: SPACING.x6 }}>
        <AppText
          as="p"
          variant="lead"
          align="center"
          style={{ margin: 0 }}
        >
          Förvandla din idé till en marknadsredo produkt – snabbt, prisvärt och
          utan krångel. Vi hanterar tekniken, du fokuserar på din vision.
        </AppText>
      </div>

      {/* CTA buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: SPACING.x4,
          marginTop: SPACING.x10,
          justifyContent: "center",
        }}
      >
        <AppButton
          href="mailto:hej@snabbapp.se"
          variant="primary"
          size="medium"
          rightIcon={<IconArrow />}
          style={{ boxShadow: SHADOWS.glow, paddingInline: SPACING.x10 }}
        >
          Kom igång idag
        </AppButton>
        <AppButton
          href="#projekt"
          variant="ghost"
          size="medium"
          style={{ paddingInline: SPACING.x8 }}
        >
          Se tidigare projekt
        </AppButton>
      </div>

      {/* Social proof strip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: SPACING.x6,
          marginTop: SPACING.x12,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {["Snabb leverans", "Inga dolda kostnader", "Äg koden fullt ut"].map(
          (item) => (
            <div
              key={item}
              style={{ display: "flex", alignItems: "center", gap: SPACING.x2 }}
            >
              <IconCheck />
              <AppText size="bodySmall" color={COLORS.textSecondary}>
                {item}
              </AppText>
            </div>
          )
        )}
      </div>
    </section>
  );
}

// ─── How it works ─────────────────────────────────────────────────────────────

const STEPS = [
  {
    number: "01",
    title: "Specifikation",
    description:
      "Vi diskuterar din idé på djupet och skapar en tydlig plan med funktioner, teknikval och tidsplan – allt skräddarsytt för dina behov.",
  },
  {
    number: "02",
    title: "Utveckling",
    description:
      "Se din produkt ta form med regelbundna uppdateringar. Du är alltid uppdaterad och kan ge feedback längs vägen.",
  },
  {
    number: "03",
    title: "Lansering",
    description:
      "Vi driftsätter din produkt och ser till att du är trygg med att köra den på egen hand. Redo att ta emot riktiga användare.",
  },
];

function HowItWorks() {
  return (
    <section
      id="hur-det-fungerar"
      style={{
        padding: `${SPACING.x20} ${SPACING.x8}`,
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: SPACING.x12 }}>
        <AppText
          as="p"
          size="overline"
          weight="bold"
          color={COLORS.accent}
          textTransform="uppercase"
          spacingBottom={3}
        >
          Processen
        </AppText>
        <AppText as="h2" variant="sectionTitle" align="center">
          Hur det fungerar
        </AppText>
        <div style={{ maxWidth: "480px", margin: `${SPACING.x4} auto 0` }}>
          <AppText as="p" variant="lead" align="center" style={{ margin: 0 }}>
            Tre enkla steg från idé till lanserad produkt.
          </AppText>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: SPACING.x6,
        }}
      >
        {STEPS.map((step) => (
          <div
            key={step.number}
            style={{
              background: COLORS.backgroundCard,
              border: `1px solid ${COLORS.border}`,
              borderRadius: BORDER_RADIUS["2xl"],
              padding: SPACING.x8,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Step number watermark */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: "-12px",
                right: SPACING.x6,
                fontSize: "80px",
                fontWeight: 800,
                color: "rgba(255,255,255,0.03)",
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              {step.number}
            </div>

            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: BORDER_RADIUS.lg,
                background: "rgba(26,127,232,0.15)",
                border: `1px solid rgba(26,127,232,0.3)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: SPACING.x5,
              }}
            >
              <AppText size="bodySmall" weight="bold" color={COLORS.accent}>
                {step.number}
              </AppText>
            </div>

            <AppText as="h3" variant="cardTitle" spacingBottom={3}>
              {step.title}
            </AppText>
            <AppText as="p" size="body" color={COLORS.textSecondary} style={{ margin: 0 }}>
              {step.description}
            </AppText>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: "sagokompisen",
    name: "Sagokompisen",
    url: "https://sagokompisen.se",
    domain: "sagokompisen.se",
    tagline: "AI-driven sagoberättare för barn",
    description:
      "En magisk plattform där AI skapar personliga sagor för barn – med rätt karaktärer, rätt nivå och oändlig fantasi. Älskat av föräldrar och barn över hela Sverige.",
    tags: ["AI", "Barn", "Berättande", "Next.js"],
    featured: true,
  },
  {
    id: "twittpal",
    name: "TwittPal",
    url: "https://twittpal.com",
    domain: "twittpal.com",
    tagline: "Din smarta Twitter-kompanjon",
    description:
      "Verktyg som hjälper dig skriva bättre, engagera mer och växa din publik på X (Twitter) med hjälp av AI-drivna insikter.",
    tags: ["Social media", "AI", "Produktivitet"],
    featured: false,
  },
  {
    id: "kratomtaper",
    name: "KratomTaper",
    url: "https://kratomtaper.com",
    domain: "kratomtaper.com",
    tagline: "Nedtrappning gjord enkelt",
    description:
      "En evidensbaserad app som hjälper användare att trappa ner sin kratomanvändning med personliga scheman och progressspårning.",
    tags: ["Hälsa", "Harm reduction", "React Native"],
    featured: false,
  },
];

function ProjectCard({ project }) {
  if (project.featured) {
    return (
      <div
        style={{
          position: "relative",
          padding: "2px",
          borderRadius: BORDER_RADIUS["2xl"],
          background: "linear-gradient(135deg, #1a7fe8, #a855f7, #00d4ff)",
          boxShadow: SHADOWS.glowFeatured,
          gridColumn: "1 / -1",
        }}
      >
        {/* Featured badge */}
        <div
          style={{
            position: "absolute",
            top: "-14px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(135deg, #1a7fe8, #a855f7)",
            borderRadius: BORDER_RADIUS.round,
            padding: `${SPACING.x2} ${SPACING.x5}`,
            display: "inline-flex",
            alignItems: "center",
            gap: SPACING.x2,
            zIndex: 1,
            whiteSpace: "nowrap",
          }}
        >
          <IconStar />
          <AppText size="caption" weight="bold" color="#ffffff" textTransform="uppercase" style={{ letterSpacing: "0.8px" }}>
            Bästa projektet
          </AppText>
        </div>

        <div
          style={{
            background: COLORS.backgroundCard,
            borderRadius: "calc(24px - 2px)",
            padding: SPACING.x10,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: SPACING.x10,
            alignItems: "center",
          }}
        >
          {/* Left: content */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: SPACING.x3, marginBottom: SPACING.x4 }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: BORDER_RADIUS.lg,
                  background: "linear-gradient(135deg, rgba(26,127,232,0.3), rgba(168,85,247,0.3))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                📚
              </div>
              <div>
                <AppText as="h3" variant="sectionTitle" style={{ fontSize: "28px", lineHeight: "36px" }}>
                  {project.name}
                </AppText>
                <AppText size="bodySmall" color={COLORS.textTertiary}>
                  {project.domain}
                </AppText>
              </div>
            </div>

            <AppText as="p" size="bodyLarge" weight="medium" color={COLORS.textSecondary} style={{ margin: `0 0 ${SPACING.x5}` }}>
              {project.tagline}
            </AppText>

            <AppText as="p" size="body" color={COLORS.textSecondary} style={{ margin: `0 0 ${SPACING.x6}` }}>
              {project.description}
            </AppText>

            <div style={{ display: "flex", flexWrap: "wrap", gap: SPACING.x2, marginBottom: SPACING.x6 }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "rgba(26,127,232,0.12)",
                    border: "1px solid rgba(26,127,232,0.25)",
                    borderRadius: BORDER_RADIUS.round,
                    padding: `${SPACING.x1} ${SPACING.x3}`,
                  }}
                >
                  <AppText size="caption" weight="semiBold" color={COLORS.accent}>
                    {tag}
                  </AppText>
                </span>
              ))}
            </div>

            <AppButton
              href={project.url}
              variant="primary"
              size="medium"
              rightIcon={<IconExternal />}
              style={{ boxShadow: SHADOWS.glow }}
            >
              Besök sajten
            </AppButton>
          </div>

          {/* Right: preview mock */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(26,127,232,0.08), rgba(168,85,247,0.08))",
              border: `1px solid ${COLORS.border}`,
              borderRadius: BORDER_RADIUS.xl,
              padding: SPACING.x8,
              display: "flex",
              flexDirection: "column",
              gap: SPACING.x4,
              minHeight: "220px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "56px", lineHeight: 1 }}>🧚</div>
            <AppText as="p" size="bodySmall" color={COLORS.textSecondary} align="center" style={{ margin: 0, maxWidth: "260px" }}>
              "Det bästa sättet att få barn att älska berättelser – anpassat just för dem."
            </AppText>
            <AppText size="caption" color={COLORS.textTertiary} align="center">
              — Nöjd förälder
            </AppText>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: COLORS.backgroundCard,
        border: `1px solid ${COLORS.border}`,
        borderRadius: BORDER_RADIUS["2xl"],
        padding: SPACING.x8,
        display: "flex",
        flexDirection: "column",
        gap: SPACING.x4,
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(26,127,232,0.4)";
        e.currentTarget.style.boxShadow = SHADOWS.glow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = COLORS.border;
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: SPACING.x3 }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: BORDER_RADIUS.md,
            background: COLORS.backgroundTertiary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
          }}
        >
          {project.id === "twittpal" ? "🐦" : "🌿"}
        </div>
        <div>
          <AppText as="h3" variant="cardTitle">
            {project.name}
          </AppText>
          <AppText size="caption" color={COLORS.textTertiary}>
            {project.domain}
          </AppText>
        </div>
      </div>

      <AppText as="p" size="body" color={COLORS.textSecondary} style={{ margin: 0, flex: 1 }}>
        {project.description}
      </AppText>

      <div style={{ display: "flex", flexWrap: "wrap", gap: SPACING.x2 }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: COLORS.backgroundTertiary,
              border: `1px solid ${COLORS.border}`,
              borderRadius: BORDER_RADIUS.round,
              padding: `${SPACING.x1} ${SPACING.x3}`,
            }}
          >
            <AppText size="caption" weight="medium" color={COLORS.textTertiary}>
              {tag}
            </AppText>
          </span>
        ))}
      </div>

      <AppButton
        href={project.url}
        variant="ghost"
        size="small"
        rightIcon={<IconExternal />}
      >
        Besök sajten
      </AppButton>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projekt"
      style={{
        padding: `${SPACING.x20} ${SPACING.x8}`,
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: SPACING.x12 }}>
        <AppText
          as="p"
          size="overline"
          weight="bold"
          color={COLORS.accent}
          textTransform="uppercase"
          spacingBottom={3}
        >
          Referensprojekt
        </AppText>
        <AppText as="h2" variant="sectionTitle" align="center">
          Tidigare projekt
        </AppText>
        <div style={{ maxWidth: "480px", margin: `${SPACING.x4} auto 0` }}>
          <AppText as="p" variant="lead" align="center" style={{ margin: 0 }}>
            Riktiga produkter som löser riktiga problem – byggda snabbt och med hög kvalitet.
          </AppText>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: SPACING.x6,
        }}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────

const FEATURES = [
  { icon: "⚡", title: "Snabb leverans", desc: "Din MVP är redo på 2–4 veckor, inte månader." },
  { icon: "🎨", title: "Design ingår", desc: "Modern, responsiv design som dina användare älskar." },
  { icon: "🔗", title: "Viktiga integrationer", desc: "Betalningar, autentisering, databaser och analytics." },
  { icon: "🔍", title: "SEO-optimerad", desc: "Byggs med sökmotoroptimering från grunden." },
  { icon: "☁️", title: "Driftsättning", desc: "Vi sätter upp och driftsätter din produkt åt dig." },
  { icon: "🔑", title: "Du äger koden", desc: "Full äganderätt – källkod, domän och infrastruktur." },
];

function Features() {
  return (
    <section
      style={{
        padding: `${SPACING.x20} ${SPACING.x8}`,
        background: COLORS.backgroundSecondary,
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: SPACING.x12 }}>
          <AppText
            as="p"
            size="overline"
            weight="bold"
            color={COLORS.accent}
            textTransform="uppercase"
            spacingBottom={3}
          >
            Vad du får
          </AppText>
          <AppText as="h2" variant="sectionTitle" align="center">
            Allt du behöver för att lyckas
          </AppText>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: SPACING.x6,
          }}
        >
          {FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                display: "flex",
                gap: SPACING.x4,
                padding: SPACING.x6,
                background: COLORS.backgroundCard,
                border: `1px solid ${COLORS.border}`,
                borderRadius: BORDER_RADIUS.xl,
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </div>
              <div>
                <AppText as="h4" size="h5" weight="semiBold" spacingBottom={2}>
                  {f.title}
                </AppText>
                <AppText as="p" size="body" color={COLORS.textSecondary} style={{ margin: 0 }}>
                  {f.desc}
                </AppText>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section
      style={{
        padding: `${SPACING.x20} ${SPACING.x8}`,
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          position: "relative",
          background: COLORS.backgroundCard,
          border: `1px solid ${COLORS.border}`,
          borderRadius: BORDER_RADIUS["2xl"],
          padding: `${SPACING.x16} ${SPACING.x12}`,
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(26,127,232,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <AppText
          as="h2"
          variant="sectionTitle"
          align="center"
          style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
        >
          Redo att sätta igång?
        </AppText>

        <div style={{ maxWidth: "480px", margin: `${SPACING.x4} auto ${SPACING.x8}` }}>
          <AppText as="p" variant="lead" align="center" style={{ margin: 0 }}>
            Berätta om din idé – vi svarar inom 24 timmar och bokar ett kostnadsfritt samtal.
          </AppText>
        </div>

        <div style={{ display: "flex", gap: SPACING.x4, justifyContent: "center", flexWrap: "wrap" }}>
          <AppButton
            href="mailto:hej@snabbapp.se"
            variant="primary"
            size="medium"
            rightIcon={<IconArrow />}
            style={{ boxShadow: SHADOWS.glow, paddingInline: SPACING.x12 }}
          >
            Boka ett kostnadsfritt samtal
          </AppButton>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${COLORS.border}`,
        padding: `${SPACING.x8} ${SPACING.x8}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: SPACING.x4,
        maxWidth: "1100px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <Image
        src="/snabbapplogo.png"
        alt="SnabbApp"
        width={120}
        height={33}
        style={{ objectFit: "contain", opacity: 0.7 }}
      />
      <AppText size="bodySmall" color={COLORS.textTertiary}>
        © {new Date().getFullYear()} SnabbApp. Alla rättigheter förbehållna.
      </AppText>
      <AppButton href="mailto:hej@snabbapp.se" variant="ghost" size="small">
        hej@snabbapp.se
      </AppButton>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main
      style={{
        background: COLORS.background,
        minHeight: "100vh",
        color: COLORS.textPrimary,
      }}
    >
      <Navbar />
      <Hero />
      <HowItWorks />
      <Projects />
      <Features />
      <CtaSection />
      <Footer />
    </main>
  );
}
