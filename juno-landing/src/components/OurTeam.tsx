import Image from "next/image";

const teamMembers: {
  name: string;
  role: string;
  image: string | null;
  objectPos: string;
}[] = [
  {
    name: "Jannik Fuchs",
    role: "Project Owner",
    image: "/assets/juno/Jannik.png",
    objectPos: "center top",
  },
  {
    name: "Anna Holtkamp",
    role: "Head of Research",
    image: "/assets/juno/Anna.png",
    objectPos: "center 10%",
  },
  {
    name: "Sandra Mavunga",
    role: "Scrum Master",
    image: "/assets/juno/Sandra.png",
    objectPos: "center 8%",
  },
  {
    name: "Julian Bartsch",
    role: "Developer",
    image: null,
    objectPos: "center center",
  },
  {
    name: "Murat Can Koçyiğit",
    role: "Developer",
    image: "/assets/juno/Can.png",
    objectPos: "center 2%",
  },
  {
    name: "Daniel Kang",
    role: "Developer",
    image: "/assets/juno/Daniel.png",
    objectPos: "center 15%",
  },
  {
    name: "Bernard Barnieh",
    role: "Developer",
    image: "/assets/juno/Bernard.png",
    objectPos: "center 10%",
  },
  {
    name: "Tarek Bder",
    role: "Developer",
    image: null,
    objectPos: "center center",
  },
];

const decorativeSparkle = "/assets/juno/decorative-sparkle.png";
const decorativeStarLg = "/assets/juno/decorative-star-lg.png";

export default function OurTeam() {
  return (
    <section
      id="team"
      className="relative w-full py-[60px] border-y border-[rgba(160,160,160,0.6)] overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-[1290px] px-6 md:px-10 lg:px-0">
        {/* Section Header */}
        <div className="relative flex flex-col gap-1 items-start w-full mb-2.5">
          <h2 className="text-[32px] md:text-[48px] lg:text-[66px] font-semibold text-text-dark leading-normal tracking-[0.64px] text-center w-full">
            Our Team
          </h2>
          <p className="text-[24px] md:text-[32px] font-bold text-[#899e82] leading-normal text-center w-full">
            Meet the Minds Behind Juno
          </p>
          <p className="text-[16px] md:text-[21px] font-semibold text-text-gray leading-normal text-center w-full">
            Passionate professionals dedicated to transforming midwifery care
          </p>

          {/* Decorative sparkle — near heading */}
          <div className="hidden lg:block absolute left-[calc(50%-231px)] top-[31px] w-[73px] h-[73px] rotate-[18deg]" aria-hidden="true">
            <Image src={decorativeSparkle} alt="" width={73} height={73} className="object-contain" />
          </div>
        </div>

        {/* Decorative star — top right */}
        <div className="hidden lg:block absolute left-[calc(50%+200px)] top-[-10px] w-[134px] h-[134px] rotate-[35deg] z-20" aria-hidden="true">
          <Image src={decorativeStarLg} alt="" width={134} height={134} className="object-contain" />
        </div>

        {/* Team Grid */}
        <div className="flex flex-wrap gap-5 px-2.5 py-[5px]">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="flex flex-col gap-2.5 items-center p-2.5 bg-[#f5f5f5] border border-[#d9d9d9] rounded-2xl shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden w-[calc(50%-10px)] md:w-[302px]"
            >
              {/* Photo */}
              <div className="relative w-full aspect-square max-w-[276px] rounded-2xl overflow-hidden shrink-0">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    sizes="276px"
                    className="object-cover rounded-2xl"
                    style={{ objectPosition: member.objectPos }}
                  />
                ) : (
                  <div className="w-full h-full bg-[#8b8b8b] rounded-2xl">
                    <span className="sr-only">{member.name}</span>
                  </div>
                )}
              </div>

              {/* Text container */}
              <div className="flex flex-col items-center justify-center h-[48px] w-full rounded-b-2xl backdrop-blur-[7px] bg-[rgba(255,255,255,0.2)]">
                <p className="text-[16px] font-medium text-[#2d2d2d] text-center whitespace-nowrap leading-normal">
                  {member.name}
                </p>
                <p className="text-[16px] font-medium text-[#899e82] text-center whitespace-nowrap leading-normal">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
