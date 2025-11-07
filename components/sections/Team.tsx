import Reveal from "../reveal";
import TeamMemberCard, { TeamMember } from "../TeamMemberCard";

const team: TeamMember[] = [
  { name: "Nandor Krizbai", imageSource: "/team/nandor.jpg", description: "Nandor builds robust, scalable systems that keep Synapse running smoothly. His expertise in distributed architectures and performance optimization brings reliability to every project.", githubUrl: "https://github.com/nandor23" },
  { name: "Hadia Naveed", imageSource: "/team/hadia.jpeg", description: "Hadia blends creativity with clean engineering. She crafts interfaces that not only work beautifully but feel effortless, bringing a fresh, user-focused energy to Synapse.", linkedinUrl: "https://linkedin.com/in/hadia-naveed-b316911b5", githubUrl: "https://github.com/Hadiaaanvd" },
  { name: "Ricky Francis Rozario", imageSource: "/team/ricky.jpg", description: "Ricky turns complex ideas into elegant, reliable software. His wide-ranging experience from university systems to modern web apps keeps the team aligned and delivery sharp.", linkedinUrl: "https://www.linkedin.com/in/ricky-francis/", githubUrl: "https://github.com/rickyfrancis" },
  { name: "A F M Soyeb Chowdhury", imageSource: "/team/soyeb.jpg", description: "Soyeb's balanced approach to academic insight and professional expertise to guide Synapse with clarity, precision, and purpose.", linkedinUrl: "https://www.linkedin.com/in/a-f-m-soyeb-chowdhury-972a5099/", githubUrl: "https://github.com/ifrat" },
  { name: "Dinesh Prabhakaran", imageSource: "/team/dinesh.jpg", description: "Curious and inventive, Dinesh builds modern, high-impact web experiences. His enthusiasm for learning and experimenting helps Synapse stay ahead of the curve.", linkedinUrl: "https://www.linkedin.com/in/dinesh-prabhakaran-827690229", githubUrl: "https://github.com/DineshPrabhakaran22" },
];

export default function TeamSection() {
  return (
    <section id="team" className="section-gradient text-center noise py-24 sm:py-48" data-variant="b">
      <p className="text-center mb-3 eyebrow">Core Members</p>
      <Reveal>
        <h2 className="text-center">Meet our <span className="text-primary">Team</span></h2>
      </Reveal>

      <div className="mt-20 mx-auto max-w-[1400px] px-4">
        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 xl:gap-x-6 gap-y-10">
          {team.map((m, i) => <TeamMemberCard key={i} member={m} />)}
        </div>
      </div>
    </section>
  );
}