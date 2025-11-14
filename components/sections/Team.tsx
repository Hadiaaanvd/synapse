"use client";
import { motion } from "framer-motion";
import Reveal from "../reveal";
import TeamMemberCard, { TeamMember } from "../TeamMemberCard";

const team: TeamMember[] = [
  { name: "Nandor Krizbai", imageSource: "/team/nandor.jpg", description: "Nandor builds robust, scalable systems that keep Synapse running smoothly. His expertise in distributed architectures and performance optimization brings reliability to every project.", githubUrl: "https://github.com/nandor23" },
  { name: "Hadia Naveed", imageSource: "/team/hadia.jpeg", description: "Hadia blends creativity with clean engineering. She crafts interfaces that not only work beautifully but feel effortless, bringing a fresh, user-focused energy to Synapse.", linkedinUrl: "https://linkedin.com/in/hadia-naveed-b316911b5", githubUrl: "https://github.com/Hadiaaanvd" },
  { name: "Ricky Francis Rozario", imageSource: "/team/ricky.jpg", description: "Ricky turns complex ideas into elegant, reliable software. His wide-ranging experience from university systems to modern web apps keeps the team aligned and delivery sharp.", linkedinUrl: "https://www.linkedin.com/in/ricky-francis/", githubUrl: "https://github.com/rickyfrancis" },
  { name: "A F M Soyeb Chowdhury", imageSource: "/team/soyeb.jpg", description: "Soyeb's balanced approach to academic insight and professional expertise to guide Synapse with clarity, precision, and purpose.", linkedinUrl: "https://www.linkedin.com/in/a-f-m-soyeb-chowdhury-972a5099/", githubUrl: "https://github.com/ifrat" },
  { name: "Dinesh Prabhakaran", imageSource: "/team/dinesh.jpg", description: "Curious and inventive, Dinesh builds modern, high-impact web experiences. His enthusiasm for learning and experimenting helps Synapse stay ahead of the curve.", linkedinUrl: "https://www.linkedin.com/in/dinesh-prabhakaran-827690229", githubUrl: "https://github.com/DineshPrabhakaran22" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  }
};

export default function TeamSection() {
  return (
    <section id="team" className="section-gradient text-center noise py-24 sm:py-48 relative overflow-hidden" data-variant="b">
      {/* Background animated accent */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-violet/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.p
        className="text-center mb-3 eyebrow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Core Members
      </motion.p>

      <Reveal>
        <h2 className="text-center">Meet our <span className="text-primary">Team</span></h2>
      </Reveal>

      <div className="mt-20 mx-auto max-w-[1400px] px-4">
        <motion.div
          className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 xl:gap-x-6 gap-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {team.map((m, i) => (
            <motion.div key={i} variants={itemVariants}>
              <TeamMemberCard member={m} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}