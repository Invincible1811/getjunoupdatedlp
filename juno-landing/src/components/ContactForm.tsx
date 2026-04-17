"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const colorfulTape = "/assets/juno/colorful-tape-24.png";
const maskingTape = "/assets/juno/masking-tape-64.png";
const arrowRight = "/assets/juno/icon-arrow-right.svg";


const inputCls =
  "w-full h-10 border border-[#CFD9E0] rounded-md px-3 py-2.5 text-[14px] text-[#67728a] bg-white placeholder:text-[#A8A6AC] focus:shadow-[0px_0px_0px_3px_#98CBFF] focus:outline-none transition-shadow";

export default function ContactForm() {
  const { t } = useLanguage();

  const cards = [
    {
      title: t(translations.contactForm.cardTitle),
      subtitle: t(translations.contactForm.cardSubtitle),
      details: [
        {
          label: t(translations.contactForm.engagementLabel),
          text: t(translations.contactForm.engagementText),
        },
        {
          label: t(translations.contactForm.benefitsLabel),
          text: t(translations.contactForm.benefitsText),
        },
      ],
      cta: t(translations.contactForm.cardCta),
      btnClass: "bg-[#899e82] hover:bg-[#768f6e]",
    },
  ];

  return (
    <section id="contact" className="relative w-full py-10 md:py-15 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1290px] px-6 md:px-10 lg:px-0 flex flex-col gap-5">
        {/* Section Header */}
        <h2 className="text-[36px] md:text-[48px] lg:text-[66px] font-semibold text-text-dark leading-normal tracking-[0.64px]">
          {t(translations.contactForm.heading)}
        </h2>

        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-10">
          {/* Form */}
          <form
            className="flex flex-col gap-5 w-full lg:w-[500px] shrink-0 items-end"
            action="https://formsubmit.co/info@getjuno.de"
            method="POST"
            aria-label="Contact form"
          >
            <input type="hidden" name="_subject" value="Neue Kontaktanfrage von getJUNO.de" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://getjuno.de/#contact" />
            {/* Role Autocomplete/Select */}
            <div className="flex flex-col gap-2 w-full px-0.5">
              <label htmlFor="role" className="text-[14px] font-medium text-[#111b2b]">
                {t(translations.contactForm.roleLabel)}
              </label>
              <select
                id="role"
                className={`${inputCls} appearance-none`}
                defaultValue=""
              >
                <option value="" disabled>
                  {t(translations.contactForm.rolePlaceholder)}
                </option>
                <option value="hebamme">{t(translations.contactForm.roleOption1)}</option>
                <option value="interessiert">{t(translations.contactForm.roleOption2)}</option>
              </select>
            </div>

            {/* Name */}
            <input
              id="name"
              type="text"
              name="name"
              placeholder={t(translations.contactForm.namePlaceholder)}
              aria-label={t(translations.contactForm.namePlaceholder)}
              className={inputCls}
            />

            {/* Surname */}
            <input
              id="surname"
              type="text"
              name="surname"
              placeholder={t(translations.contactForm.surnamePlaceholder)}
              aria-label={t(translations.contactForm.surnamePlaceholder)}
              className={inputCls}
            />

            {/* Email */}
            <input
              id="email"
              type="email"
              name="email"
              placeholder={t(translations.contactForm.emailPlaceholder)}
              aria-label={t(translations.contactForm.emailPlaceholder)}
              className={inputCls}
            />

            {/* Message */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="message" className="text-[14px] font-medium text-[#111b2b]">
                {t(translations.contactForm.messageLabel)}
              </label>
              <textarea
                id="message"
                rows={3}
                name="message"
                placeholder={t(translations.contactForm.messagePlaceholder)}
                className="w-full border border-[#CFD9E0] rounded-md px-3 py-2.5 text-[14px] text-[#67728a] bg-white resize-vertical placeholder:text-[#A8A6AC] focus:shadow-[0px_0px_0px_3px_#98CBFF] focus:outline-none transition-shadow"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary rounded-2xl px-5 py-2.5 h-[50px] text-[14px] font-medium text-white transition-all focus-visible:shadow-[0px_0px_0px_3px_#98CBFF]"
            >
              {t(translations.contactForm.submit)}
            </button>
          </form>

          {/* Cards */}
          <div className="relative flex flex-col sm:flex-row gap-4 flex-1">
            {/* Tape 1: Colorful — top-left corner of card */}
            <div className="hidden lg:block absolute left-[-53px] top-[-30px] w-[77px] h-[77px] z-20 rotate-[135deg] pointer-events-none" aria-hidden="true">
              <Image src={colorfulTape} alt="" width={47} height={62} className="object-contain opacity-80" />
            </div>
            {/* Tape 2: Colorful — bottom-right corner of card */}
            <div className="hidden lg:block absolute right-[-53px] bottom-[-44px] w-[86px] h-[86px] z-20 rotate-[-43deg] pointer-events-none" aria-hidden="true">
              <Image src={colorfulTape} alt="" width={59} height={62} className="object-contain opacity-90" />
            </div>
            {cards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col w-full overflow-hidden"
              >
                {/* Content */}
                <div className="flex-1 flex flex-col gap-4 p-4 bg-[rgba(255,255,255,0.7)] border border-[#d9d9d9] rounded-t-xl">
                  <h3 className="text-[24px] font-semibold text-primary tracking-[-0.96px] leading-normal italic">
                    {card.title}
                  </h3>
                  <p className="text-[16px] font-normal text-[#625f68] tracking-[-0.64px] leading-normal">
                    {card.subtitle}
                  </p>
                  <div className="text-[14px] tracking-[-0.56px]">
                    {card.details.map((detail) => (
                      <div key={detail.label} className="mb-3 last:mb-0">
                        <p className="font-semibold text-primary">
                          {detail.label}
                        </p>
                        <p className="font-normal text-[#625f68] whitespace-pre-line">
                          {detail.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* CTA Button */}
                <button
                  type="button"
                  className={`flex items-center gap-2 w-full p-4 rounded-b-xl border-t-[0.5px] border-[#e2dee9] text-[16px] font-semibold text-white tracking-[-0.64px] transition-colors focus-visible:shadow-[0px_0px_0px_3px_#98CBFF] focus-visible:outline-none ${card.btnClass}`}
                >
                  <span className="flex-1 text-left">{card.cta}</span>
                  <div className="relative w-[24px] h-[24px] shrink-0">
                    <Image src={arrowRight} alt="" width={24} height={24} />
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
