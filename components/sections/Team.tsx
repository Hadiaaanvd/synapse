import Reveal from "../reveal";
import TeamMemberCard, { TeamMember } from "../TeamMemberCard";

const team: TeamMember[] = [
  { name: "Nandor Krizbai", imageSource: "/team/nandor.jpg", description: "Ships fast React features with a bias for clarity and performance.", githubUrl: "https://github.com/nandor23" },
  { name: "Hadia Naveed", imageSource: "/team/hadia.jpeg", description: "Turns complex flows into simple choices and designs that feel obvious.", linkedinUrl: "https://linkedin.com/in/hadia-naveed-b316911b5", githubUrl: "https://github.com/Hadiaaanvd" },
  { name: "Ricky Francis Rozario", imageSource: "/team/ricky.jpg", description: "Bridges product to infra and keeps the pipeline green end to end.", linkedinUrl: "https://www.linkedin.com/in/ricky-francis/", githubUrl: "https://github.com/rickyfrancis" },
  { name: "A F M Soyeb Chowdhury", imageSource: "/team/soyeb.jpg", description: "Builds reliable data paths and models that answer real questions.", linkedinUrl: "https://www.linkedin.com/in/a-f-m-soyeb-chowdhury-972a5099/", githubUrl: "https://github.com/ifrat" },
  { name: "Dinesh Prabhakaran", imageSource: "/team/dinesh.jpg", description: "Delivers smooth native apps and trims every extra touch from flows.", linkedinUrl: "https://www.linkedin.com/in/dinesh-prabhakaran-827690229", githubUrl: "https://github.com/DineshPrabhakaran22" },
];

export default function TeamSection() {
  const top = team.slice(0, 3);
  const bottom = team.slice(3);

  return (
    <section id="team" className="section-gradient text-center noise py-24 sm:py-48" data-variant="b">
      <p className="text-center mb-3 eyebrow">Core Members</p>
      <Reveal>
        <h2 className="text-center">Meet our <span className="text-primary">Team</span></h2>
      </Reveal>

      <div className="mt-20 mx-auto max-w-[1160px] px-4 flex flex-col items-center gap-14 z-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-10 gap-y-16">
          {top.map((m, i) => <TeamMemberCard key={i} member={m} />)}
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 place-content-center gap-x-10 gap-y-16">
          {bottom.map((m, i) => <TeamMemberCard key={`b-${i}`} member={m} />)}
        </div>
      </div>
    </section>
  );
}
