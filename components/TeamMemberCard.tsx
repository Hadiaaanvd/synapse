"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Tilt from "./ui/tilt";

export interface TeamMember {
  name: string;
  imageSource: string;
  description?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Tilt max={5}>
      <motion.div
        className="group relative isolate w-full max-w-[360px] my-6 rounded-3xl overflow-visible border bg-background/30 px-6 pt-16 pb-7 backdrop-blur-xl transition-all duration-400 hover:shadow-[0_14px_40px_rgba(1,215,255,.1)]"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-20">
        <div className="relative group/avatar">
          <div className="absolute -inset-2 bg-linear-to-br from-brand-blue-light to-brand-violet rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
          <div className="absolute -inset-[3px] bg-linear-to-br from-brand-blue-light via-brand-violet to-brand-blue-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative rounded-full p-[3px] bg-linear-to-r from-brand-blue-light to-brand-violet transform group-hover:scale-110 transition-transform duration-300">
            <div className="rounded-full p-1 bg-brand-black">
              <Image
                src={member.imageSource}
                alt={member.name}
                width={104}
                height={104}
                className="rounded-full border border-white/5 shadow-md w-[104px] h-[104px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <header className="mt-6 text-center relative z-10">
        <h3 className="text-xl font-bold tracking-wide text-foreground group-hover:text-brand-blue transition-all duration-500">
          {member.name}
        </h3>

        <div className="relative h-0.5 w-12 mx-auto mt-3 mb-1 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-brand-blue-light to-transparent opacity-30" />
          <div className="absolute inset-0 bg-linear-to-r from-brand-blue-light via-brand-violet to-brand-blue-light transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        </div>
      </header>

      <div className="flex-1 flex flex-col">
        {member.description && (
          <p className="mx-auto mt-4 max-w-[20rem] text-[0.9rem] leading-relaxed text-foreground/85 group-hover:text-foreground/90 text-center transition-colors duration-300 relative z-10">
            {member.description}
          </p>
        )}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 relative z-10">
        {member.linkedinUrl && (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
            className="group/social relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue-light/30  bg-white/4 transition-all duration-300 hover:border-brand-blue-light hover:bg-brand-blue-light/8 hover:shadow-[0_0_16px_rgba(1,215,255,0.2)] hover:scale-110 active:scale-95 hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-sm" />
          </a>
        )}
        {member.githubUrl && (
          <a
            href={member.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} GitHub`}
            className="group/social relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue-light/30  bg-white/4 transition-all duration-300 hover:border-brand-blue-light hover:bg-brand-blue-light/8 hover:shadow-[0_0_16px_rgba(1,215,255,0.2)] hover:scale-110 active:scale-95 hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faGithub} className="text-sm" />
          </a>
        )}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(1,215,255,.06), transparent 75%)",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-brand-blue-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      </motion.div>
    </Tilt>
  );
}
