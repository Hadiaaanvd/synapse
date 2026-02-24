"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden bg-linear-to-b from-brand-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.2]">
            One Platform for{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-violet-600">
              University Alliances
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            We simplify cross-border collaboration in higher education. Our platform centralizes information from multiple institutions into one intuitive dashboard.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Unified Dashboard</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Access all alliance resources, courses, and opportunities from one central hub
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Real-time Sync</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Instant updates across all institutions keeping everyone connected and informed
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Smart Discovery</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              AI-powered course recommendations tailored to your academic goals and interests
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gradient element - outside container to stick to left edge */}
      <div className="flex justify-start mt-16">
        <motion.div
          className="about-pill-gradient w-[70vw] md:w-[50vw] lg:w-[40vw] md:block max-w-full h-30 md:h-42 lg:h-68"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
      </div>
    </section>
  );
}
