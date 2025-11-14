"use client";
import { motion } from "framer-motion";
import Reveal from "../reveal";

export default function Vision() {
  return (
    <section
      id="vision"
      className="section-gradient section-spotlight section-spacing relative overflow-hidden"
      data-variant="c"
    >
      {/* Animated background orb */}
      <motion.div
        className="absolute top-1/2 right-20 w-80 h-80 bg-brand-blue-light/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.p
        className="eyebrow lg:container page-gutters mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Vision
      </motion.p>

      <div className="lg:container page-gutters flex flex-col md:flex-row gap-12 md:gap-16 relative z-1">
        <Reveal className="w-full md:w-1/2 max-w-[680px] flex flex-col gap-8">
          <h2>
            Breaking borders in higher
            <motion.span
              className="text-primary"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {" "}education.
            </motion.span>
          </h2>
          <motion.div
            className="text-sm flex flex-col gap-4 text-foreground lg:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p>
              We aim to establish the standard for how university alliances
              operate digitally. Students and staff will experience their
              alliance as one interconnected campus, where discovering and
              participating in cross border activities requires no more effort
              than engaging with their home institution. Users can focus on
              academic work instead of administrative tasks.
            </p>
          </motion.div>
        </Reveal>
      </div>

      <div className="flex justify-end">
        <motion.div
          className="vision-pill-gradient w-[70vw] mt-20 md:w-[50vw] lg:w-[40vw] md:block max-w-full h-30 md:h-42 lg:h-68"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
      </div>
    </section>
  );
}
