"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const annaImage = "/assets/juno/anna-avatar.png";
const decorativeSparkle = "/assets/juno/decorative-sparkle.png";
const decorativeArrow = "/assets/juno/decorative-arrow.png";

export default function OurStory() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full py-[60px] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1290px] px-6 md:px-10 lg:px-0">
        <div className="relative flex flex-col lg:flex-row items-start justify-between">
          {/* Left — Photo + Name */}
          <div className="flex flex-col gap-2.5 items-start pt-[156px] pb-[30px] shrink-0">
            <div className="relative w-[240px] h-[240px] md:w-[276px] md:h-[276px] rounded-2xl overflow-hidden">
              <Image
                src={annaImage}
                alt="Anna — Forschung"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col items-center text-center w-[240px] md:w-[276px]">
              <p className="text-[24px] md:text-[36px] font-medium text-black w-[320px]">
                {t(translations.ourStory.name)}
              </p>
              <p className="text-[16px] md:text-[20px] font-medium text-text-gray w-[320px]">
                {t(translations.ourStory.role)}
              </p>
            </div>
          </div>

          {/* Decorative sparkle — top-left above photo */}
          <div className="hidden lg:block absolute left-[-46px] top-[28px] w-[73px] h-[73px] rotate-[18deg]" aria-hidden="true">
            <Image src={decorativeSparkle} alt="" width={73} height={73} className="object-contain" />
          </div>

          {/* Right — Text content */}
          <div className="relative flex flex-col gap-2.5 items-start w-full lg:w-[931px]">
            <h2 className="text-[32px] md:text-[48px] lg:text-[66px] font-semibold text-text-dark leading-normal tracking-[0.64px] w-full">
              {t(translations.ourStory.heading)}
            </h2>

            {/* Decorative arrow — near heading */}
            <div className="hidden lg:block absolute left-[636px] top-[50px] w-[85px] h-[85px] -rotate-90" aria-hidden="true">
              <Image src={decorativeArrow} alt="" width={85} height={85} className="object-contain" />
            </div>

            <div className="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-text-dark leading-normal">
              <p className="font-bold">{t(translations.ourStory.section1Title)}</p>
              <p>
                {t(translations.ourStory.section1Text)}
              </p>
            </div>

            <div className="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-text-dark leading-normal">
              <p>
                <span className="text-primary font-bold">{t(translations.ourStory.section2Title)}</span>
              </p>
              <p>
                {t(translations.ourStory.section2Text)}
              </p>
            </div>

            <div className="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-text-dark leading-normal">
              <p className="text-primary font-bold">{t(translations.ourStory.section3Title)}</p>
              <p>
                {t(translations.ourStory.section3Text)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
