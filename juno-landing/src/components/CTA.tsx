import Image from "next/image";
import Link from "next/link";

const junoMascot = "/assets/juno/mascot.webp";
const decorativeSwirl = "/assets/juno/decorative-swirl.png";
const decorativeImg201 = "/assets/juno/decorative-dots.png";

export default function CTA() {
  return (
    <section className="relative w-full backdrop-blur-[5px] bg-[rgba(255,255,255,0.2)] border-y border-[rgba(160,160,160,0.6)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1290px] px-6 md:px-10 lg:px-0 py-10 md:py-15 flex flex-col gap-5 items-start">
        {/* Mascot */}
        <div className="flex flex-col items-center w-full">
          <div className="relative w-[102px] h-[125px]" aria-hidden="true">
            <Image
              src={junoMascot}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Header group */}
        <div className="relative flex flex-col gap-2.5 items-start w-full">
          <p className="text-[16px] font-medium text-text-gray text-center w-full leading-normal">
            We are looking for insightful midwives to help us refine Juno.
          </p>
          <h2 className="text-[32px] md:text-[48px] lg:text-[66px] font-medium text-text-dark text-center w-full leading-normal whitespace-pre-line">
            {"Shape the Future of \nyour Digital assistant."}
          </h2>
          <p className="text-[18px] font-medium text-text-gray text-center w-full leading-normal">
            Join our research phase and ensure the tool is built for your real-world needs.
          </p>

          {/* Decorative swirl scribble — bottom-right of heading */}
          <div className="hidden lg:block absolute right-[180px] top-[160px] w-[76px] h-[76px] rotate-[13deg]" aria-hidden="true">
            <Image src={decorativeSwirl} alt="" width={76} height={76} className="object-contain" />
          </div>
        </div>

        {/* Button */}
        <div className="flex items-center justify-center w-full">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center w-[250px] h-[60px] rounded-bl-2xl rounded-tr-2xl text-[16px] font-semibold text-white shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.25)] transition-all hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#98CBFF]"
            style={{
              backgroundImage:
                "linear-gradient(179.6deg, rgb(110, 126, 105) 2.43%, rgb(137, 158, 130) 185.58%)",
            }}
          >
            Join Waitlist
          </Link>
        </div>

        {/* Decorative element */}
        <div className="hidden lg:block absolute left-[226px] top-[188px] w-[92px] h-[92px] rotate-[-51deg]" aria-hidden="true">
          <Image src={decorativeImg201} alt="" width={92} height={92} className="object-contain opacity-70" />
        </div>
      </div>
    </section>
  );
}
