import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


export interface TeamMember {
	name: string;
	imageSource: string;
	linkedinUrl?: string;
	githubUrl?: string;
}

interface TeamMemberCardProps {
	member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
	return (
		<div className="w-58 overflow-hidden rounded-[3.5rem] bg-white shadow-md">
			<div className="relative h-72">
				<div className="absolute inset-0 bg-brand-gradient" />
				<div className="absolute bottom-0 left-0 w-full h-2/3 bg-white/70 backdrop-blur-md rounded-t-[3.5rem]" />


				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<div className="rounded-full border-4 border-primary shadow-md overflow-hidden">
						<Image
							src={member.imageSource}
							alt={member.name}
							width={110}
							height={110}
							className="rounded-full"
						/>
					</div>

					<p className="font-semibold text-black mt-4 text-md text-center px-4">{member.name}</p>

					<div className="mt-4 flex space-x-2 text-black text-xs">
						{member.linkedinUrl && (
							<a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faLinkedin} size="xl" />
							</a>
						)}
						{member.githubUrl && (
							<a href={member.githubUrl} target="_blank" rel="noopener noreferrer">
								<FontAwesomeIcon icon={faGithub} size="xl" />
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
