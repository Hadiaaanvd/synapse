"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
  <section id="about" className="section-gradient relative w-full overflow-hidden section-spotlight section-spacing"  data-variant="c">
      <div className="absolute inset-0 pointer-events-none bg-surface-gradient opacity-[.35]" />

      {/* Floating particles */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 bg-brand-blue-light rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-40 w-3 h-3 bg-brand-violet rounded-full"
        animate={{
          y: [0, 40, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

       <div className="relative lg:container mx-auto page-gutters flex flex-col md:flex-row gap-12 md:gap-16">
        <motion.div
          className="w-full flex md:flex-col gap-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>
            ONE PLATFORM FOR <br /> UNIVERSITY ALLIANCES&nbsp;
            <motion.span
              className="block text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              CONNECTING STUDENTS AND INSTITUTIONS.
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          className="w-full text-sm flex flex-col gap-2 text-foreground lg:text-xl leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Mission
          </motion.p>
          <p>
            We simplify cross-border collaboration in higher education. Our
            platform centralizes information from multiple institutions into one
            intuitive dashboard, so students discover opportunities and staff
            coordinate courses without administrative friction.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="about-pill-gradient w-[70vw] mt-30 md:w-[50vw] lg:w-[40vw] h-30 md:h-42 lg:h-68 rounded-r-[14rem]"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      />

    </section>
  );
}
