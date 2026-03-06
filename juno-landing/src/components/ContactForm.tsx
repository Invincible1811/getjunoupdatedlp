"use client";

import Image from "next/image";

const colorfulTape = "/assets/juno/colorful-tape-24.png";
const maskingTape = "/assets/juno/masking-tape-64.png";
const arrowRight = "/assets/juno/icon-arrow-right.svg";

const cards = [
  {
    title: "For the Beta Testers",
    subtitle:
      "For the Early Adopters. Be the first to use the Juno platform in your daily practice and help us iron out the kinks.",
    details: [
      {
        label: "Commitment",
        text: "Use the app with your patients and report bugs or usability issues.",
      },
      {
        label: "Perks",
        text: "Free access during the beta period\n50% discount on your first year\u2019s subscription.",
      },
    ],
    cta: "Apply as Beta Tester",
    btnClass: "bg-gradient-to-b from-[#9db496] to-[#899e82] hover:from-[#899e82] hover:to-[#768f6e]",
  },
  {
    title: "For the Strategists",
    subtitle:
      "Join an exclusive circle of midwives providing deep-dive feedback on features, ethics, and workflow.",
    details: [
      {
        label: "Commitment",
        text: "Monthly 30-minute feedback calls and early access to conceptual designs.",
      },
      {
        label: "Perks",
        text: "Lifetime \u201cFounding Member\u201d status\nDirect influence on the roadmap\nPremium features free for life.",
      },
    ],
    cta: "Apply as Strategist",
    btnClass: "bg-[#394835] hover:bg-[#2d3a29]",
  },
];

const inputCls =
  "w-full h-10 border border-[#CFD9E0] rounded-md px-3 py-2.5 text-[14px] text-[#67728a] bg-white placeholder:text-[#A8A6AC] focus:shadow-[0px_0px_0px_3px_#98CBFF] focus:outline-none transition-shadow";

export default function ContactForm() {
  return (
    <section id="contact" className="relative w-full py-10 md:py-15 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1290px] px-6 md:px-10 lg:px-0 flex flex-col gap-5">
        {/* Section Header */}
        <h2 className="text-[36px] md:text-[48px] lg:text-[66px] font-semibold text-text-dark leading-normal tracking-[0.64px]">
          Get Contact
        </h2>

        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-10">
          {/* Form */}
          <form
            className="flex flex-col gap-5 w-full lg:w-[500px] shrink-0 items-end"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Contact form"
          >
            {/* Role Autocomplete/Select */}
            <div className="flex flex-col gap-2 w-full px-0.5">
              <label htmlFor="role" className="text-[14px] font-medium text-[#111b2b]">
                What describes you best?
              </label>
              <select
                id="role"
                className={`${inputCls} appearance-none`}
                defaultValue=""
              >
                <option value="" disabled>
                  Search
                </option>
                <option value="beta-tester">Beta Tester</option>
                <option value="strategist">Strategist</option>
              </select>
            </div>

            {/* Name */}
            <input
              id="name"
              type="text"
              placeholder="Name"
              aria-label="Name"
              className={inputCls}
            />

            {/* Surname */}
            <input
              id="surname"
              type="text"
              placeholder="Surname"
              aria-label="Surname"
              className={inputCls}
            />

            {/* Email */}
            <input
              id="email"
              type="email"
              placeholder="Email"
              aria-label="Email"
              className={inputCls}
            />

            {/* Message */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="message" className="text-[14px] font-medium text-[#111b2b]">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="Say something..."
                className="w-full border border-[#CFD9E0] rounded-md px-3 py-2.5 text-[14px] text-[#67728a] bg-white resize-vertical placeholder:text-[#A8A6AC] focus:shadow-[0px_0px_0px_3px_#98CBFF] focus:outline-none transition-shadow"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary rounded-2xl px-5 py-2.5 h-[50px] text-[14px] font-medium text-white transition-all focus-visible:shadow-[0px_0px_0px_3px_#98CBFF]"
            >
              Get Contact With Us!
            </button>
          </form>

          {/* Cards */}
          <div className="relative flex flex-col sm:flex-row gap-4 flex-1 lg:flex-initial">
            {/* Tape 1: Colorful — straddles top-left edge of first card */}
            <div className="hidden lg:block absolute left-[-45px] top-[-42px] w-[77px] h-[77px] z-20 rotate-[135deg] pointer-events-none" aria-hidden="true">
              <Image src={colorfulTape} alt="" width={47} height={62} className="object-contain opacity-80" />
            </div>
            {/* Tape 2: Colorful — straddles bottom-right edge of first card */}
            <div className="hidden lg:block absolute left-[320px] bottom-[-35px] w-[86px] h-[86px] z-20 rotate-[-43deg] pointer-events-none" aria-hidden="true">
              <Image src={colorfulTape} alt="" width={59} height={62} className="object-contain opacity-90" />
            </div>
            {/* Tape 3: Masking — top-right above Strategists card */}
            <div className="hidden lg:block absolute left-[499px] top-[-36px] w-[75px] h-[75px] z-20 pointer-events-none" aria-hidden="true">
              <Image src={maskingTape} alt="" width={75} height={75} className="object-contain opacity-70" />
            </div>
            {cards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col w-full sm:w-[360px] overflow-hidden"
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
