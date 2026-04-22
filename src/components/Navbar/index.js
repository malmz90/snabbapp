"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppButton from "@/components/AppButton";
import { COLORS, SPACING, BORDER_RADIUS } from "@/constants";

const NAV_LINKS = [
  { href: "/#projekt", label: "Projekt" },
  { href: "/#hur-det-fungerar", label: "Hur det fungerar" },
  { href: "/generator", label: "Idea Generator" },
];

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

function IconHamburger() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);


  return (
    <>
      <nav
        style={{
          width: "100%",
          background: COLORS.navbarBackground,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: `${SPACING.x4} ${SPACING.x6}`,
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <Image
              src="/snabbapplogo.png"
              alt="SnabbApp"
              width={140}
              height={40}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Desktop links — hidden below sm via Tailwind (no inline display) */}
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: SPACING.x6 }}>
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} active={pathname === link.href}>
                {link.label}
              </NavLink>
            ))}
            <AppButton
              href="mailto:hej@snabbapp.se"
              variant="primary"
              size="small"
              rightIcon={<IconArrow />}
            >
              Boka ett samtal
            </AppButton>
          </div>

          {/* Hamburger — visible only below sm, NO inline display property */}
          <button
            className="sm:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={isOpen}
            style={{
              background: isOpen ? COLORS.overlayBackground : "transparent",
              border: `1px solid ${isOpen ? COLORS.border : "transparent"}`,
              cursor: "pointer",
              color: COLORS.textSecondary,
              padding: SPACING.x2,
              borderRadius: BORDER_RADIUS.md,
              lineHeight: 0,
              transition: "background 0.15s, border-color 0.15s",
            }}
          >
            {isOpen ? <IconClose /> : <IconHamburger />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className="sm:hidden"
          style={{
            overflow: "hidden",
            maxHeight: isOpen ? "360px" : "0px",
            opacity: isOpen ? 1 : 0,
            transition: "max-height 0.28s ease, opacity 0.2s ease",
            borderTop: isOpen ? `1px solid ${COLORS.borderSubtle}` : "none",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: SPACING.x1,
              padding: `${SPACING.x3} ${SPACING.x4} ${SPACING.x5}`,
            }}
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    textDecoration: "none",
                    padding: `${SPACING.x3} ${SPACING.x4}`,
                    borderRadius: BORDER_RADIUS.lg,
                    fontSize: "15px",
                    fontWeight: active ? 600 : 400,
                    color: active ? COLORS.textPrimary : COLORS.textSecondary,
                    background: active ? COLORS.overlayBackground : "transparent",
                    borderLeft: active ? `2px solid ${COLORS.primary}` : "2px solid transparent",
                    transition: "background 0.15s",
                    display: "block",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            <div style={{ marginTop: SPACING.x3, paddingInline: SPACING.x2 }}>
              <AppButton
                href="mailto:hej@snabbapp.se"
                variant="primary"
                size="medium"
                rightIcon={<IconArrow />}
              >
                Boka ett samtal
              </AppButton>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}

function NavLink({ href, active, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: active ? 600 : 500,
        color: active || hovered ? COLORS.textPrimary : COLORS.textSecondary,
        transition: "color 0.15s",
        position: "relative",
        paddingBottom: "2px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1.5px",
          background: COLORS.primary,
          borderRadius: "99px",
          opacity: active ? 1 : 0,
          transform: active ? "scaleX(1)" : "scaleX(0)",
          transition: "opacity 0.15s, transform 0.15s",
        }}
      />
    </Link>
  );
}
