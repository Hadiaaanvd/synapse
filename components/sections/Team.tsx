import TeamMemberCard, { TeamMember } from "../TeamMemberCard";

const teamMembers: TeamMember[] = [
	{
		name: "Nandor Krizbai",
		imageSource: "/team/nandor.jpg",
		githubUrl: "https://github.com/nandor23"
	},
	{
		name: "Hadia Naveed",
		imageSource: "/team/hadia.jpeg",
		linkedinUrl: "https://linkedin.com/in/hadia-naveed-b316911b5",
		githubUrl: "https://github.com/Hadiaaanvd"
	},
	{
		name: "Ricky Francis Rozario",
		imageSource: "/team/ricky.jpeg",
		linkedinUrl: "https://www.linkedin.com/in/ricky-francis/",
		githubUrl: "https://github.com/rickyfrancis"
	},
	{
		name: "A F M Soyeb Chowdhury",
		imageSource: "/team/soyeb.jpg",
		linkedinUrl: "https://www.linkedin.com/in/a-f-m-soyeb-chowdhury-972a5099/",
		githubUrl: "https://github.com/ifrat"
	},
  {
    name: "Dinesh Prabhakaran",
    imageSource: "/team/dinesh.jpg",
    linkedinUrl: "www.linkedin.com/in/dinesh-prabhakaran-827690229",
    githubUrl: "https://github.com/DineshPrabhakaran22",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 relative sm:py-48 min-h-screen">
      <h2 className="text-center">
        Meet our <span className="text-primary">Team</span>
      </h2>

      <div className="pt-20">
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
