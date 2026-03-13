"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const heroBgImage = "/assets/juno/hero-bg.webp";
const blobLight = "/assets/juno/blob-light.svg";
const blobBold = "/assets/juno/blob-bold.svg";

const bubbleConfig = [
  { key: "bubble1" as const, top: "-35px", left: "432px", w: 249, h: 252, fontSize: 16, type: "thin", rotate: 4.03 },
  { key: "bubble2" as const, top: "51px", left: "590px", w: 370, h: 348, fontSize: 16, type: "bold", rotate: 4.56 },
  { key: "bubble3" as const, top: "35px", left: "976px", w: 211, h: 252, fontSize: 16, type: "thin", rotate: 0 },
  { key: "bubble4" as const, top: "640px", left: "233px", w: 370, h: 348, fontSize: 16, type: "bold", rotate: 4.03 },
  { key: "bubble5" as const, top: "618px", left: "757px", w: 307, h: 392, fontSize: 14, type: "light", rotate: 4.03 },
];

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden min-h-[600px] lg:min-h-[1000px]"
    >
      {/* Background image with opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBgImage}
          alt=""
          fill
          className="object-cover opacity-20"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] hero-gradient-pink" aria-hidden="true" />
      <div className="absolute inset-0 z-[2] backdrop-blur-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" aria-hidden="true" />

      {/* Floating bubbles — desktop only */}
      <div className="hidden lg:block" aria-hidden="true">
        {bubbleConfig.map((bubble, i) => (
          <div
            key={i}
            className="absolute z-[3] flex items-center justify-center opacity-80"
            style={{
              width: bubble.w,
              height: bubble.h,
              top: bubble.top,
              left: bubble.left,
            }}
          >
            <Image
              src={bubble.type === "bold" ? blobBold : blobLight}
              alt=""
              fill
              className="object-contain"
            />
            <div
              className="relative z-[1] flex items-center justify-center"
              style={{ transform: `rotate(${bubble.rotate}deg)` }}
            >
              <p
                className="font-normal text-[#444] text-center leading-[1.4]"
                style={{ fontSize: bubble.fontSize, maxWidth: bubble.w * 0.65 }}
              >
                {t(translations.hero[bubble.key])}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1290px] px-6 md:px-10 lg:px-0 flex flex-col justify-center min-h-[600px] lg:min-h-[1000px] gap-2.5 pt-20 lg:pt-0">
        <p className="text-[14px] md:text-[16px] font-semibold text-primary-light tracking-[0.64px]">
          {t(translations.hero.badge)}
        </p>
        <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-semibold text-primary leading-normal max-w-[1290px]">
          {t(translations.hero.heading)}
        </h1>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-text-gray leading-[1.4] w-full lg:w-[851px]">
          <span className="text-[#101011]">{t(translations.hero.subtitle1)}</span>{t(translations.hero.subtitle2)}{" "}
          <span className="text-[#101011]">{t(translations.hero.subtitle3)}</span>{t(translations.hero.subtitle4)}
        </p>
        <div className="mt-2">
          <span className="inline-flex items-center justify-center bg-[#899e82] opacity-70 rounded-lg px-2.5 py-2.5 text-[16px] font-semibold text-white tracking-[0.64px]">
            {t(translations.hero.cta)}
          </span>
        </div>
      </div>
    </section>
  );
}
