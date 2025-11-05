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
    <div

      className="
        group relative isolate w-full max-w-[340px] my-6 rounded-3xl overflow-visible
        border border-white/
        px-6 pt-14 pb-6
        backdrop-blur-xl
        transition-all duration-300
        shadow-[0_8px_24px_rgba(0,0,0,.35)]
        hover:shadow-[0_14px_40px_rgba(1,215,255,.12)]
      "
    
    >
      <div
        aria-hidden
        className="absolute -inset-px rounded-3xl pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(1,215,255,.005), rgba(88,0,255,.05))",
          opacity: 0.25,
          filter: "blur(10px)",
        }}
      />

      <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
        <div className="rounded-full p-[3px] bg-linear-to-r from-brand-blue-light to-brand-violet ">
          <Image
            src={member.imageSource}
            alt={member.name}
            width={96}
            height={96}
            className="rounded-full border border-white/2 shadow-md"
          />
        </div>
      </div>

      <header className="mt-4 text-center">
        <h3 className="text-lg font-semibold tracking-wide">{member.name}</h3>
      </header>

      {member.description && (
        <p className="mx-auto mt-3 max-w-[18rem] text-sm leading-relaxed text-foreground/75 text-center">
          {member.description}
        </p>
      )}

      <div className="mt-5 flex items-center justify-center gap-3">
        {member.linkedinUrl && (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] transition-transform duration-200 hover:-translate-y-0.5 hover:border-brand-blue-light"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        )}
        {member.githubUrl && (
          <a
            href={member.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} GitHub`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] transition-transform duration-200 hover:-translate-y-0.5 hover:border-brand-blue-light"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(1,215,255,.08), transparent 75%)",
        }}
      />
    </div>
  );
}
