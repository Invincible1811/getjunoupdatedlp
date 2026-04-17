"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Problem() {
  const { t } = useLanguage();

  return (
    <section id="why" className="relative w-full py-20 md:py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/juno/problem-bg.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="relative z-10 mx-auto max-w-[860px] px-6 md:px-10">
        <span className="block text-[16px] font-bold tracking-[0.14em] uppercase mb-4" style={{ color: "#F2B13E" }}>
          {t(translations.problem.label)}
        </span>
        <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-white leading-[1.15] tracking-tight mb-12">
          {t(translations.problem.heading)}
        </h2>
        <ul className="flex flex-col gap-5 max-w-[600px]" role="list">
          {translations.problem.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-[16px] md:text-[17px] leading-[1.55] text-white/85">
              {/* Warning circle icon */}
              <svg
                className="shrink-0 mt-[2px]"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="9" stroke="#F2B13E" strokeWidth="1.6" />
                <line x1="11" y1="7" x2="11" y2="11.5" stroke="#F2B13E" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="11" cy="14.5" r="0.9" fill="#F2B13E" />
              </svg>
              <span>{t(item)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
