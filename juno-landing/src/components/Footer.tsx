"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";
import ImpressumModal from "./ImpressumModal";
import DatenschutzModal from "./DatenschutzModal";

const footerBg = "/assets/juno/footer-bg.webp";


export default function Footer() {
  const { t } = useLanguage();
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [datenschutzOpen, setDatenschutzOpen] = useState(false);

  const footerLinks = [
    { label: t(translations.footer.features), href: "#features" },
    { label: t(translations.footer.access), href: "#contact" },
    { label: t(translations.footer.contact), href: "#contact" },
    { label: t(translations.footer.impressum), href: "#impressum", isModal: "impressum" },
    { label: t(translations.footer.datenschutz), href: "#datenschutz", isModal: "datenschutz" },
  ];

  return (
    <footer className="relative w-full min-h-[500px] lg:min-h-[600px] flex flex-col items-start justify-between overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[rgba(57,72,53,0.9)]" />
        <div className="absolute inset-0 opacity-40 overflow-hidden">
          <Image
            src={footerBg}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-10 lg:px-[315px] py-5 w-full">
        <div className="flex flex-1 flex-col items-center justify-center gap-10">
          {/* Brand */}
          <p className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-white text-center">
            getJUNO.de
          </p>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  {(link as { isModal?: string }).isModal ? (
                    <button
                      onClick={() =>
                        (link as { isModal?: string }).isModal === "impressum"
                          ? setImpressumOpen(true)
                          : setDatenschutzOpen(true)
                      }
                      className="text-[18px] md:text-[24px] font-medium text-white hover:text-white/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98CBFF]"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[18px] md:text-[24px] font-medium text-white hover:text-white/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98CBFF]"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative z-10 w-full flex items-center justify-center px-[45px] py-[19px]">
        <p className="text-[16px] md:text-[24px] font-medium text-white text-center">
          {t(translations.footer.copyright)}
        </p>
      </div>
      <ImpressumModal isOpen={impressumOpen} onClose={() => setImpressumOpen(false)} />
      <DatenschutzModal isOpen={datenschutzOpen} onClose={() => setDatenschutzOpen(false)} />
    </footer>
  );
}
