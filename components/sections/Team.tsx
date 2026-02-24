"use client";
import { motion } from "framer-motion";
import TeamMemberCard, { TeamMember } from "../TeamMemberCard";

const team: TeamMember[] = [
  { name: "Nandor Krizbai", imageSource: "/team/nandor.jpg", description: "Builds robust, scalable systems that keep Synapse running smoothly with expert-level distributed architectures.", githubUrl: "https://github.com/nandor23" },
  { name: "Hadia Naveed", imageSource: "/team/hadia.jpeg", description: "Crafts beautiful interfaces that work effortlessly, bringing fresh user-focused energy to every project.", linkedinUrl: "https://linkedin.com/in/hadia-naveed-b316911b5", githubUrl: "https://github.com/Hadiaaanvd" },
  { name: "Ricky Francis Rozario", imageSource: "/team/ricky.jpg", description: "Transforms complex ideas into elegant software, keeping the team aligned and delivery sharp.", linkedinUrl: "https://www.linkedin.com/in/ricky-francis/", githubUrl: "https://github.com/rickyfrancis" },
  { name: "A F M Soyeb Chowdhury", imageSource: "/team/soyeb.jpg", description: "Guides Synapse with balanced academic insight and professional expertise, clarity and precision.", linkedinUrl: "https://www.linkedin.com/in/a-f-m-soyeb-chowdhury-972a5099/", githubUrl: "https://github.com/ifrat" },
  { name: "Dinesh Prabhakaran", imageSource: "/team/dinesh.jpg", description: "Builds modern, high-impact web experiences with curiosity and experimentation.", linkedinUrl: "https://www.linkedin.com/in/dinesh-prabhakaran-827690229", githubUrl: "https://github.com/DineshPrabhakaran22" },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-20 md:py-32 overflow-hidden bg-brand-black">
      {/* Gradient background - Left to Right */}
      <div className="absolute inset-0 bg-linear-to-r from-violet-950/20 via-purple-950/10 to-cyan-950/15 pointer-events-none" />
      
      {/* Animated background */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(1,215,255,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-cyan-400 mb-4">Core Team</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Meet the{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-violet-600">
              Innovators
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Passionate engineers dedicated to transforming higher education through technology
          </p>
        </motion.div>

        {/* Team Flex Layout */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
