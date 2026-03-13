"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const logoSrc = "/assets/juno/logo.png";

export default function Navbar() {
  const { locale, toggleLocale, t } = useLanguage();

  const navLinks = [
    { label: t(translations.nav.about), href: "#about" },
    { label: t(translations.nav.features), href: "#features" },
    { label: t(translations.nav.team), href: "#team" },
    { label: t(translations.nav.contact), href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light backdrop-blur-[6px] bg-white/70">
      <nav
        className="mx-auto flex max-w-[1290px] items-center justify-between px-6 py-6 md:px-10 lg:px-0 lg:py-10"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="relative h-32 w-[380px] shrink-0">
          <Image
            src={logoSrc}
            alt="JUNO Logo"
            fill
            className="object-contain object-left logo-animated"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[18px] font-medium text-text-dark hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98CBFF]"
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
            className="flex items-center gap-1.5 h-[40px] rounded-xl px-3 py-1.5 text-[14px] font-medium text-text-dark border border-border-light hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98CBFF]"
            aria-label={locale === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
          >
            <span className="text-[16px]">{locale === "de" ? "🇬🇧" : "🇩🇪"}</span>
            {locale === "de" ? "EN" : "DE"}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="btn-primary inline-flex items-center justify-center h-[50px] rounded-2xl px-5 py-2.5 text-[14px] font-medium text-white transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98CBFF]"
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
