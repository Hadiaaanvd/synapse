// components/TeamMemberCard.tsx
"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export interface TeamMember {
  name: string;
  imageSource: string;
  linkedinUrl?: string;
  githubUrl?: string;
}
export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: .4, ease: [0.22, 1, 0.36, 1] }}
      className="group w-58 overflow-hidden rounded-[3.5rem] bg-white shadow-md"
    >
      <div className="relative h-72">
        <div className="absolute inset-0 bg-brand-gradient" />
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-white/70 backdrop-blur-md rounded-t-[3.5rem]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="rounded-full border-4 border-primary shadow-md overflow-hidden">
            <Image src={member.imageSource} alt={member.name} width={110} height={110} className="rounded-full" />
          </div>
          <p className="font-semibold text-black mt-4 text-md text-center px-4">{member.name}</p>
          <div className="mt-4 flex space-x-3 text-black text-xs">
            {member.linkedinUrl && (
              <a className="opacity-80 transition-opacity group-hover:opacity-100" href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
            )}
            {member.githubUrl && (
              <a className="opacity-80 transition-opacity group-hover:opacity-100" href={member.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
