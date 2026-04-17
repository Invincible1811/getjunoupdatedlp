"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(90deg, #6E7E69 0%, #899E82 100%)" }}
    >

      {/* Womb overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
        <Image
          src="/assets/juno/womb.png"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.2 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-[2] flex flex-col justify-between min-h-screen px-6 md:px-12 lg:px-16 py-12 md:py-16">

        {/* Hero copy — bottom-left aligned */}
        <div className="flex-1 flex flex-col justify-end pb-12 md:pb-16 max-w-2xl">
          <h1 className="text-[38px] md:text-[50px] lg:text-[60px] font-bold text-white leading-[1.1] tracking-tight mb-6">
            {t(translations.hero.heading).split("–").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}–
                  <br className="hidden md:block" />
                </span>
              ) : (
                <span key={i}>
                  <em style={{ color: "#F2B13E", fontStyle: "italic" }}>
                    {part.trimStart().split(" ")[0]}
                  </em>
                  {" " + part.trimStart().split(" ").slice(1).join(" ")}
                </span>
              )
            )}
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white/80 font-light leading-relaxed max-w-[500px] mb-10">
            {t(translations.hero.subtitle)}
          </p>
          <div className="flex flex-col items-start">
            <a
              href="https://app.getjuno.de/#auth"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold self-start inline-flex w-fit items-center justify-center whitespace-nowrap px-8 py-4 rounded-xl text-[16px] font-bold text-white transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98CBFF]"
            >
              {t(translations.hero.cta)}
            </a>
            <span className="mt-3 text-[13px] text-white/40 tracking-wide">
              {t(translations.hero.ctaSub)}
            </span>
          </div>
        </div>

        {/* Quote — bottom center */}
        <div className="text-center pb-2">
          <span className="text-[20px]" style={{ color: "#F2B13E" }}>★</span>
          <blockquote className="text-[30px] md:text-[34px] italic font-semibold mt-1.5" style={{ color: "#ffffff" }}>
            {t(translations.hero.quote)}
          </blockquote>
          <cite className="block mt-1.5 text-[13px] text-white/40 not-italic">
            {t(translations.hero.quoteCite)}
          </cite>
        </div>
      </div>
    </section>
  );
}
