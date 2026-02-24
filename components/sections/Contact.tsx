"use client";
import { motion } from "framer-motion";
import ContactForm from "../ContactForm";

const CAL_URL = "https://calendly.com/hadiaaanvd/30min";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden bg-brand-black">
      {/* Gradient background - Right to Left */}
      <div className="absolute inset-0 bg-linear-to-l from-violet-950/15 via-purple-950/8 to-cyan-950/12 pointer-events-none" />
      
      {/* Animated background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(88,0,255,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Let's{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-violet-600">
              Connect
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Schedule a demo or send us a message. We're here to help transform your alliance experience.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          {/* Calendar Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-3">Schedule a Live Demo</h3>
              <p className="text-white/60 mb-6">
                Book a 30-minute walkthrough and see the platform in action
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                {[
                  "See one connected campus for students and staff",
                  "Coordinate courses without administrative friction",
                  "Get a tailored recommendation for next steps",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/70 text-sm">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* Calendly Link Button */}
              <motion.a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full btn-secondary-gradient btn-lg text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="inner">Schedule Your Demo</span>
              </motion.a>

              <p className="mt-4 text-xs text-white/40 text-center">
                Opens in a new window
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient transition to footer */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(88, 0, 255, 0.05) 30%, rgba(1, 215, 255, 0.08) 100%)"
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </section>
  );
}
