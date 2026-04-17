"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Solution() {
  const { t } = useLanguage();

  return (
    <section id="features" className="w-full bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[860px] px-6 md:px-10">

        {/* Section header */}
        <span className="block text-[17px] md:text-[18px] font-bold tracking-[0.14em] uppercase text-primary-light mb-4">
          {t(translations.solution.label)}
        </span>
        <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#1A1208] leading-[1.15] tracking-tight mb-6 whitespace-pre-line">
          {t(translations.solution.heading)}
        </h2>
        <p className="text-[17px] md:text-[18px] text-[#6B5F4A] font-light leading-[1.65] max-w-[500px] mb-12 md:mb-14">
          {t(translations.solution.intro)}
        </p>

        {/* Feature blocks */}
        <div className="flex flex-col gap-8 md:gap-10">
          {translations.solution.blocks.map((block, i) => {
            const isFlipped = i % 2 !== 0;
            return (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${isFlipped ? "md:[direction:rtl]" : ""}`}
              >
                {/* Text */}
                <div className={isFlipped ? "md:[direction:ltr]" : ""}>
                  <span className="block text-[17px] md:text-[18px] font-bold tracking-[0.12em] uppercase text-primary-light mb-3.5">
                    {t(block.num)}
                  </span>
                  <h3 className="text-[22px] md:text-[26px] lg:text-[30px] font-bold text-[#1A1208] leading-[1.2] tracking-tight mb-4">
                    {t(block.title)}
                  </h3>
                  <p className="text-[15px] md:text-[16px] font-light text-[#6B5F4A] leading-[1.75] max-w-[380px]">
                    {t(block.desc)}
                  </p>
                  {/* Promise badge */}
                  <span className="inline-flex items-center gap-1.5 mt-6 px-4 py-2 rounded-full text-[13px] font-semibold bg-[#EBF5F0] text-primary">
                    <span aria-hidden="true">✓</span>
                    {t(block.promise)}
                  </span>
                </div>

                {/* Phone mockup */}
                <div className={`flex justify-center items-center ${isFlipped ? "md:[direction:ltr]" : ""}`}>
                  <div className="relative w-[240px] md:w-[300px] aspect-[747/1606]">
                    <Image
                      src={block.image}
                      alt={t(block.alt)}
                      fill
                      className="object-contain rounded-[42px]"
                      style={{
                        boxShadow: "0 2px 4px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.09), 0 28px 64px rgba(0,0,0,.14)",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
