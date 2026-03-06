import Image from "next/image";

const features = [
  {
    badge: "/assets/juno/feature-badge-calendar.svg",
    icon: "/assets/juno/feature-icon-calendar.svg",
    title: "Your Optimized Calendar",
    description:
      "Managing home visits, clinic hours, and birth windows is a logistical puzzle. Juno solves it automatically.",
    iconSize: 36,
  },
  {
    badge: "/assets/juno/feature-badge-communication.svg",
    icon: "/assets/juno/feature-icon-communication.svg",
    title: "Seamless Communication",
    description:
      "Connect without the burnout. Midwifery is personal, but your private life is precious. Juno centralizes all your patient interactions into one professional hub.",
    iconSize: 40,
  },
  {
    badge: "/assets/juno/feature-badge-diary.svg",
    icon: "/assets/juno/feature-icon-diary.svg",
    title: "Digital Diary",
    description:
      "A holistic view of every journey. Every pregnancy is a story. Juno\u2019s digital profile gives you a 360-degree view of the mother\u2019s health and progress.",
    iconSize: 36,
  },
  {
    badge: "/assets/juno/feature-badge-routes.svg",
    icon: "/assets/juno/feature-icon-routes.svg",
    title: "Optimize Your Home Visit Routes",
    description:
      "Juno plans appointments by location to minimize your travel time.",
    iconSize: 32,
  },
  {
    badge: "/assets/juno/feature-badge-practice.svg",
    icon: "/assets/juno/feature-icon-practice.svg",
    title: "Your Practice at a Glance",
    description:
      "Track your visits and patient capacity in real-time to manage your workload without the stress. See your projected revenue and billing status at a glance, replacing messy spreadsheets with instant financial clarity.",
    iconSize: 35,
  },
  {
    badge: "/assets/juno/feature-badge-circle.svg",
    icon: "/assets/juno/feature-icon-circle.svg",
    title: "The Midwife Circle",
    description:
      "Connect with a community of peers to share clinical experiences, solve common practice hurdles, and discuss industry trends. Gain valuable insights from collective wisdom and navigate the challenges of independent midwifery alongside a supportive professional network.",
    iconSize: 36,
  },
];

const decorativeImg161 = "/assets/juno/decorative-star.png";

export default function Features() {
  return (
    <section id="features" className="relative w-full py-16 md:py-24 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient-green z-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1290px] px-6 md:px-10 lg:px-0">
        {/* Section Header */}
        <div className="relative mb-8 md:mb-12 flex flex-col gap-2.5">
          <h2 className="text-[36px] md:text-[48px] lg:text-[66px] font-semibold text-text-dark leading-normal tracking-[0.64px]">
            Features
          </h2>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-text-gray leading-[1.4] lg:w-[1114px]">
            <span className="text-[#101011]">JUNO</span> ist Deine intelligente
            Assistenz — gemeinsam entwickelt und abgestimmt auf{" "}
            <span className="text-[#101011]">Deinen</span> Betreuungsalltag.
          </p>
          {/* Decorative image */}
          <div className="hidden lg:block absolute left-[215px] top-[-52px] w-[110px] h-[110px] rotate-[30deg]" aria-hidden="true">
            <Image src={decorativeImg161} alt="" width={110} height={110} className="object-contain" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 py-5">
          {features.map((feature) => (
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
                  {feature.title}
                </h3>
                <p className="font-medium text-[16px] text-text-gray leading-[30px] tracking-[-0.32px] w-[293px] max-w-full"
                   style={{ fontFamily: "var(--font-manrope)" }}>
                  {feature.description}
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
