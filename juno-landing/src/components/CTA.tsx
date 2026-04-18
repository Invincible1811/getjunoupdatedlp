"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section
      id="early-access"
      className="w-full py-20 md:py-28"
      style={{ background: "#394835" }}
    >
      <div className="mx-auto max-w-[860px] px-6 md:px-10 text-center">

        {/* Header */}
        <span className="block text-[11px] font-bold tracking-[0.14em] uppercase mb-4" style={{ color: "#899e82" }}>
          {t(translations.earlyAccess.label)}
        </span>
        <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-white leading-[1.15] tracking-tight max-w-[560px] mx-auto mb-4">
          {t(translations.earlyAccess.heading)}
        </h2>
        <p className="text-[16px] md:text-[17px] font-light max-w-[420px] mx-auto mb-10 leading-[1.65]" style={{ color: "rgba(255,255,255,0.5)" }}>
          {t(translations.earlyAccess.subtitle)}
        </p>

        {/* CTA */}
        <a
          href="https://app.getjuno.de/#auth"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-flex items-center justify-center whitespace-nowrap px-8 py-4 rounded-xl text-[16px] font-bold text-white transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98CBFF]"
        >
          {t(translations.earlyAccess.cta)}
        </a>
        <span className="block mt-3.5 text-[13px] tracking-wide" style={{ color: "rgba(255,255,255,0.28)" }}>
          {t(translations.earlyAccess.ctaSub)}
        </span>

        {/* Phone mockup + testimonials */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-center text-left">

          {/* Phone mockup — Tour Complete UI */}
          <div className="flex justify-center">
            <div
              className="w-[240px] rounded-[36px] overflow-hidden border-[5px]"
              style={{
                background: "#fff",
                borderColor: "rgba(255,255,255,0.12)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 32px 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* Status bar */}
              <div className="bg-white px-4 pt-3 pb-1 flex justify-between items-center text-[11px] font-semibold text-[#1c1917]">
                <span>9:41</span>
                <div
                  className="w-[70px] h-[20px] rounded-xl mx-auto"
                  style={{ background: "#1c1917" }}
                  aria-hidden="true"
                />
                <span>●●●</span>
              </div>
              {/* Body */}
              <div className="bg-white px-4 pt-4 pb-6">
                <div
                  className="w-[52px] h-[52px] rounded-full flex items-center justify-center mx-auto mb-3 text-[24px]"
                  style={{ background: "#dcfce7" }}
                  aria-label="Tour complete"
                >
                  ✓
                </div>
                <p className="text-center text-[17px] font-bold text-[#1c1917] mb-1">
                  {t(translations.earlyAccess.tourTitle)}
                </p>
                <p className="text-center text-[11px] text-[#78716c] mb-4">
                  {t(translations.earlyAccess.tourDate)}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { val: "8", label: t(translations.earlyAccess.tourVisits) },
                    { val: "1:45", label: t(translations.earlyAccess.tourDrive) },
                    { val: "42 km", label: t(translations.earlyAccess.tourDistance) },
                    { val: "7:30", label: t(translations.earlyAccess.tourWork) },
                  ].map(({ val, label }) => (
                    <div
                      key={label}
                      className="rounded-[10px] py-3 px-2 text-center border"
                      style={{ background: "#fafaf9", borderColor: "#e7e5e4" }}
                    >
                      <p className="text-[18px] font-bold text-[#1c1917] leading-none">{val}</p>
                      <p className="text-[9px] text-[#a8a29e] mt-1 font-medium tracking-wider uppercase">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col gap-4 md:gap-5">
            {translations.earlyAccess.testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p className="text-[12px] tracking-[2px] mb-2.5" style={{ color: "#899e82" }}>
                  ★★★★★
                </p>
                <blockquote className="text-[14px] md:text-[15px] italic leading-[1.6] mb-3" style={{ color: "#F2B13E" }}>
                  &bdquo;{t(testimonial.quote)}&ldquo;
                </blockquote>
                <cite className="text-[12px] not-italic" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {t(testimonial.cite)}
                </cite>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
