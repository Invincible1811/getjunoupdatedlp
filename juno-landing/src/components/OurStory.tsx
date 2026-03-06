import Image from "next/image";

const annaImage = "/assets/juno/anna-holtkamp-photo.png";
const decorativeSparkle = "/assets/juno/decorative-sparkle.png";
const decorativeArrow = "/assets/juno/decorative-arrow.png";

export default function OurStory() {
  return (
    <section className="relative w-full py-[60px] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1290px] px-6 md:px-10 lg:px-0">
        <div className="relative flex flex-col lg:flex-row items-start justify-between">
          {/* Left — Photo + Name */}
          <div className="flex flex-col gap-2.5 items-start py-[30px] shrink-0">
            <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-[8px] overflow-hidden">
              <Image
                src={annaImage}
                alt="Anna Holtkamp — Head of Research"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-[5px] items-start text-center w-[240px] md:w-[320px]">
              <p className="text-[24px] md:text-[36px] font-medium text-black w-full">
                Anna Holtkamp
              </p>
              <p className="text-[16px] md:text-[18px] font-medium text-text-gray w-full">
                Head of Research
              </p>
            </div>
          </div>

          {/* Decorative sparkle — top-left above photo */}
          <div className="hidden lg:block absolute left-[-46px] top-[28px] w-[73px] h-[73px] rotate-[18deg]" aria-hidden="true">
            <Image src={decorativeSparkle} alt="" width={73} height={73} className="object-contain" />
          </div>

          {/* Right — Text content */}
          <div className="relative flex flex-col gap-2.5 items-start w-full lg:w-[931px]">
            <h2 className="text-[32px] md:text-[48px] lg:text-[66px] font-semibold text-text-dark leading-normal tracking-[0.64px]">
              Our Story
            </h2>

            {/* Decorative arrow — near heading */}
            <div className="hidden lg:block absolute left-[283px] top-[3px] w-[74px] h-[74px] -rotate-90" aria-hidden="true">
              <Image src={decorativeArrow} alt="" width={74} height={74} className="object-contain" />
            </div>

            <p className="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-text-dark leading-normal">
              &ldquo;Built for the way you work.&rdquo; Juno isn&apos;t an &lsquo;office&rsquo; tool it&apos;s a &lsquo;field&rsquo; tool. Whether
              you are in a living room, a birth center,
              or on the road, Juno keeps your practice organized, compliant,
              and human.
            </p>

            <div className="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-text-dark leading-normal">
              <p>
                <span className="text-primary font-bold">Privacy First:</span>{" "}
                Built with the highest data protection standards to keep
                sensitive health information safe.
              </p>
              <p>
                <span className="text-primary font-bold">Time Savings:</span>{" "}
                Reduce administrative &quot;phone tag&quot; and paperwork by up
                to 30%.
              </p>
            </div>

            <p className="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-text-dark leading-normal">
              <span className="text-primary font-bold">Better Outcomes:</span>{" "}
              Stay proactive with easy access to patient trends and symptom
              logs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
