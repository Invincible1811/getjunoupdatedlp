"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const logoSrc = "/assets/juno/logo.png";

export default function Navbar() {
  const { locale, toggleLocale, t } = useLanguage();

  const navLinks = [
    { label: t(translations.nav.why), href: "#why" },
    { label: t(translations.nav.features), href: "#features" },
    { label: t(translations.nav.earlyAccess), href: "#early-access" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light backdrop-blur-[6px] bg-white/70">
      <nav
        className="mx-auto flex max-w-[1290px] items-center justify-between px-6 py-4 md:px-10 lg:px-0 lg:py-6"
        aria-label="Main navigation"
      >
        {/* Logo — temporarily hidden */}
        <Link href="/" className="shrink-0 flex items-center">
          <span className="text-[22px] font-bold text-primary tracking-tight">JUNO</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-text-dark hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98CBFF]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 h-[38px] rounded-xl px-3 text-[13px] font-medium text-text-dark border border-border-light hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98CBFF]"
            aria-label={locale === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
          >
            <span className="text-[15px]">{locale === "de" ? "🇬🇧" : "🇩🇪"}</span>
            {locale === "de" ? "EN" : "DE"}
          </button>

          {/* CTA Button */}
          <a
            href="https://app.getjuno.de/#auth"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center justify-center h-[42px] rounded-xl px-5 text-[13px] font-semibold text-white transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98CBFF]"
          >
            {t(translations.nav.cta)}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98CBFF]"
          aria-label="Open menu"
          type="button"
        >
          <span className="block h-0.5 w-6 bg-primary" />
          <span className="block h-0.5 w-6 bg-primary" />
          <span className="block h-0.5 w-6 bg-primary" />
        </button>
      </nav>
    </header>
  );
}
