"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const features = [
  {
    badge: "/assets/juno/feature-badge-calendar.svg",
    icon: "/assets/juno/feature-icon-calendar.svg",
    title: "Hebammen Kalender",
    description:
      "Hausbesuche, Schichten und Pausen – alles in einem Kalender.\nMit deiner Route verknüpft und speziell für den Arbeitsalltag von Hebammen entwickelt.",
    iconSize: 36,
  },
  {
    badge: "/assets/juno/feature-badge-communication.svg",
    icon: "/assets/juno/feature-icon-communication.svg",
    title: "Automatisierte Kommunikation",
    description:
      "Sende Termine, Absagen und Verspätungen direkt aus deiner Terminplanung.\nDeine Patientinnen werden automatisch informiert – ohne zusätzlichen Kommunikationsaufwand.",
    iconSize: 40,
  },
  {
    badge: "/assets/juno/feature-badge-diary.svg",
    icon: "/assets/juno/feature-icon-diary.svg",
    title: "Patientinnenübersicht",
    description:
      "Alle wichtigen Informationen zu jeder Patientin auf einen Blick.\nGeburtstermine, Entlassungen, To-dos und der Fortschritt jeder Mutter sind im digitalen JUNO-Profil übersichtlich gebündelt.",
    iconSize: 36,
  },
  {
    badge: "/assets/juno/feature-badge-routes.svg",
    icon: "/assets/juno/feature-icon-routes.svg",
    title: "Optimiere deine Routen",
    description:
      "Optimierte Routen für deine Hausbesuche. JUNO minimiert deine Fahrtwege und plant die beste Route basierend auf den Verfügbarkeiten deiner Patientinnen – direkt in deiner Terminplanung.",
    iconSize: 32,
  },
  {
    badge: "/assets/juno/feature-badge-practice.svg",
    icon: "/assets/juno/feature-icon-practice.svg",
    title: "Deine Leistungen auf einen Blick",
    description:
      "Hausbesuche und Kapazität in Echtzeit im Blick. Umsatz und gefahrene Kilometer werden automatisch erfasst und lassen sich mit einem Klick für die Abrechnung exportieren.",
    iconSize: 35,
  },
  {
    badge: "/assets/juno/feature-badge-circle.svg",
    icon: "/assets/juno/feature-icon-circle.svg",
    title: "Vertretungsplanung",
    description:
      "Vernetze dich mit Hebammen in deiner Umgebung. Finde schnell Unterstützung bei Vertretungen und tausche dich zu Fragen im Berufsalltag aus.",
    iconSize: 36,
  },
];

const decorativeImg161 = "/assets/juno/decorative-star.png";

export default function Features() {
  const { t } = useLanguage();
  return (
    <section id="features" className="relative w-full py-16 md:py-24 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient-green z-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1290px] px-6 md:px-10 lg:px-0">
        {/* Section Header */}
        <div className="relative mb-8 md:mb-12 flex flex-col gap-2.5">
          <h2 className="text-[36px] md:text-[48px] lg:text-[66px] font-semibold text-text-dark leading-normal tracking-[0.64px]">
            {t(translations.features.heading).slice(0, -1)}<span className="relative inline-block">{t(translations.features.heading).slice(-1)}<span className="hidden lg:block absolute -top-[35px] -left-[20px] w-[90px] h-[90px] pointer-events-none" aria-hidden="true"><Image src={decorativeImg161} alt="" width={90} height={90} className="object-contain rotate-[30deg]" /></span></span>
          </h2>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#101011] leading-[1.4] lg:w-[1114px]">
            {t(translations.features.subtitle)}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 py-5">
          {features.map((feature, i) => (
            <div key={feature.title} className="feature-card-wrapper">
            {/* Icon badge — overlaps top edge of card like a sticker */}
            <div className="absolute left-[36px] top-0 w-[76px] h-[80px] z-10" aria-hidden="true">
              <Image
                src={feature.badge}
                alt=""
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt=""
                  width={feature.iconSize}
                  height={feature.iconSize}
                  className="object-contain"
                />
              </div>
            </div>
            {/* SVG diagonal line for beveled corner border */}
            <svg className="absolute bottom-0 right-0 w-[49px] h-[46px] pointer-events-none z-20" viewBox="0 0 49 46" fill="none" aria-hidden="true">
              <line x1="49" y1="0" x2="0" y2="46" stroke="#E9E9E9" strokeWidth="1"/>
            </svg>
            <article
              className="feature-card relative mt-[41px]"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 45px), calc(100% - 48px) 100%, 0 100%)' }}
            >
              {/* Card body */}
              <div className="pl-[36px] pr-[36px] pb-[30px] pt-[59px]">
                <h3 className="font-[var(--font-manrope)] text-[18px] font-extrabold text-text-dark leading-normal mb-2.5"
                    style={{ fontFamily: "var(--font-manrope)" }}>
                  {t(translations.features.items[i].title)}
                </h3>
                <p className="font-medium text-[16px] text-text-gray leading-[30px] tracking-[-0.32px] w-[293px] max-w-full"
                   style={{ fontFamily: "var(--font-manrope)" }}>
                  {t(translations.features.items[i].desc)}
                </p>
              </div>
            </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
