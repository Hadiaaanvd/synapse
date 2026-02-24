"use client";
import { motion } from "framer-motion";
import Reveal from "../reveal";

const dashboardFeatures = [
  {
    icon: "👤",
    title: "Personalized Dashboard",
    description: "Tailored views for students, academic staff, and administrators. Each role gets a customized interface showing relevant courses, events, and notifications specific to their needs."
  },
  {
    icon: "📚",
    title: "Course Management",
    description: "Comprehensive tracking of registered courses, personalized recommendations, and intelligent notifications to keep students engaged and informed about their academic journey."
  },
  {
    icon: "🎓",
    title: "Staff Portal",
    description: "Dedicated workspace for academic staff to manage their offered courses, track events, access recommended content, and receive system-wide notifications."
  },
  {
    icon: "🔔",
    title: "Smart Notifications",
    description: "Stay updated with real-time alerts for system maintenance, new platform features, course updates, and direct messages from instructors—all in one place."
  },
  {
    icon: "📅",
    title: "Event Calendar",
    description: "Integrated scheduling system for managing courses, academic events, thesis milestones, and important deadlines across the entire alliance network."
  },
  {
    icon: "🌍",
    title: "Multi-Language Support",
    description: "Break down language barriers with AI-powered automatic translation, enabling seamless collaboration and content access across international partners."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  }
};

export default function Product() {
  return (
    <section
      id="product"
      className="section-gradient section-spacing relative overflow-hidden bg-brand-black"
      data-variant="a"
    >
      {/* Gradient background - Right to Left */}
      <div className="absolute inset-0 bg-linear-to-l from-violet-950/15 via-purple-950/8 to-cyan-950/12 pointer-events-none" />
      
      {/* Background effects */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-brand-blue-light/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Reveal>
            <h2 className="mb-6">
              Across Alliance{" "}
              <span className="gradient-text">Dashboard Platform</span>
            </h2>
          </Reveal>
          
          <motion.p
            className="text-lg text-foreground/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A highly intuitive and personalized dashboard serving as the central entry point 
            for all activities within the alliance, designed for students, academic staff, and administrators.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {dashboardFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="group feature-card h-full flex flex-col"
              variants={itemVariants}
            >
              <div className="icon-container mb-5">
                <span className="text-4xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-foreground/75 text-sm leading-relaxed grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="#contact"
            className="btn-secondary-gradient btn-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="inner">Get Started Today</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
