import Image from "next/image";

const heroBgImage = "/assets/juno/hero-bg.webp";
const blobLight = "/assets/juno/blob-light.svg";
const blobBold = "/assets/juno/blob-bold.svg";

const bubbles = [
  { text: "Neue Anfragen\nam Abend", top: "-35px", left: "432px", w: 211, h: 252, fontSize: 16 },
  { text: "Rückfragen zwischen\nHausbesuchen", top: "51px", left: "590px", w: 370, h: 348, fontSize: 16 },
  { text: "Neue Anfragen\nam Abend", top: "35px", left: "976px", w: 211, h: 252, fontSize: 16 },
  { text: "Rückfragen zwischen\nHausbesuchen", top: "640px", left: "233px", w: 370, h: 348, fontSize: 16 },
  { text: "Kurzfristige Änderungen\nim Tagesplan", top: "618px", left: "757px", w: 307, h: 392, fontSize: 14 },
];

export default function Hero() {
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
        {bubbles.map((bubble, i) => (
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
              src={i < 2 || i === 3 ? blobBold : blobLight}
              alt=""
              fill
              className="object-contain"
            />
            <p
              className="relative z-[1] font-normal text-[#444] text-center whitespace-pre-line leading-[1.4]"
              style={{ fontSize: bubble.fontSize }}
            >
              {bubble.text}
            </p>
          </div>
        ))}
      </div>


      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1290px] px-6 md:px-10 lg:px-0 flex flex-col justify-center min-h-[600px] lg:min-h-[1000px] gap-2.5 pt-20 lg:pt-0">
        <p className="text-[14px] md:text-[16px] font-semibold text-primary-light tracking-[0.64px]">
          Built for Midwives
        </p>
        <h1 className="text-[32px] md:text-[48px] lg:text-[60px] font-semibold text-primary leading-normal max-w-[900px]">
          Und, wenn dich jemand dabei unterstützen könnte?
        </h1>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-text-gray leading-[1.4] w-full lg:w-[851px]">
          <span className="text-[#101011]">JUNO</span> ist Deine intelligente
          Assistenz — gemeinsam entwickelt und abgestimmt auf{" "}
          <span className="text-[#101011]">Deinen</span> Betreuungsalltag.
        </p>
      </div>
    </section>
  );
}
