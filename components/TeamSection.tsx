import TeamMemberCard, { TeamMember } from "./TeamMemberCard";

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

	}
]


export default function TeamSection() {
	return (
		<section id="team" className="py-24 sm:py-32">
			<h2 className="text-center">
				Meet the Team
			</h2>

			<div className="pt-20">
				<div className="flex flex-wrap justify-center gap-8">
					{teamMembers.map((member, index) => (
						<TeamMemberCard
							key={index}
							member={member}
						/>
					))}
				</div>
			</div>
		</section>

	);
}
