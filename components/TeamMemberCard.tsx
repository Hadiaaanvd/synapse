"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export interface TeamMember {
  name: string;
  imageSource: string;
  description?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      className="group relative h-full p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 via-blue-500/0 to-violet-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-violet-500/5 transition-all duration-500" />

      <div className="relative z-10 flex flex-col items-center text-center h-full">
        {/* Avatar with gradient ring */}
        <div className="relative mb-6">
          <div className="absolute -inset-2 bg-linear-to-r from-cyan-500 to-violet-600 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
          <div className="relative w-28 h-28 rounded-full p-1 bg-linear-to-r from-cyan-500 to-violet-600">
            <div className="w-full h-full rounded-full bg-gray-900 p-1.5 flex items-center justify-center">
              <Image
                src={member.imageSource}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {member.name}
        </h3>

        {/* Animated underline */}
        <div className="h-0.5 w-16 mb-5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-linear-to-r from-cyan-400 to-violet-600"
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Description */}
        {member.description && (
          <p className="text-sm text-white/60 leading-relaxed mb-6 group-hover:text-white/75 transition-colors flex-1">
            {member.description}
          </p>
        )}

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3">
          {member.linkedinUrl && (
            <motion.a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} LinkedIn`}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
            </motion.a>
          )}
          {member.githubUrl && (
            <motion.a
              href={member.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} GitHub`}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white/60 hover:bg-violet-500/20 hover:border-violet-500/50 hover:text-violet-400 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faGithub} className="text-lg" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
