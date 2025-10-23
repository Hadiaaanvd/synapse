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
		<div className="w-56 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
			<div className="relative h-64">
				<div className="absolute inset-0 bg-linear-to-br from-blue-600 to-indigo-700" />
				<div className="absolute bottom-0 left-0 w-full h-2/3 bg-linear-to-b from-blue-50 to-white rounded-t-[3.5rem]" />

				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<div className="rounded-full border-4 border-white shadow-md overflow-hidden">
						<Image
							src={member.imageSource}
							alt={member.name}
							width={128}
							height={128}
							className="rounded-full"
						/>
					</div>

					<p className="text-gray-900 font-semibold mt-4 text-xl text-center">{member.name}</p>

					<div className="mt-4 flex space-x-2">
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
