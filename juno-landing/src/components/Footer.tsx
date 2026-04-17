"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import ImpressumModal from "./ImpressumModal";
import DatenschutzModal from "./DatenschutzModal";

export default function Footer() {
  const { t } = useLanguage();
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [datenschutzOpen, setDatenschutzOpen] = useState(false);

  return (
    <footer style={{ background: "#394835" }}>
      <div className="mx-auto max-w-[1290px] px-6 md:px-10 lg:px-0 py-5 flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Copyright */}
        <p className="text-[13px] text-white/50 text-center md:text-left">
          {t(translations.footer.copyright)}
        </p>

        {/* Links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            {[
              { label: t(translations.footer.features), href: "#features" },
              { label: t(translations.footer.access), href: "#early-access" },
              { label: t(translations.footer.contact), href: "#early-access" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[13px] text-white/50 hover:text-white/80 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => setImpressumOpen(true)}
                className="text-[13px] text-white/50 hover:text-white/80 transition-colors"
              >
                {t(translations.footer.impressum)}
              </button>
            </li>
            <li>
              <button
                onClick={() => setDatenschutzOpen(true)}
                className="text-[13px] text-white/50 hover:text-white/80 transition-colors"
              >
                {t(translations.footer.datenschutz)}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <ImpressumModal isOpen={impressumOpen} onClose={() => setImpressumOpen(false)} />
      <DatenschutzModal isOpen={datenschutzOpen} onClose={() => setDatenschutzOpen(false)} />
    </footer>
  );
}
