// components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import Reveal from "../reveal";

const CAL_URL ="https://calendly.com/hadiaaanvd/30min";

const chipVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 }
};

export default function Contact() {
  return (
    <section id="contact" className="section-gradient section-compact relative overflow-hidden"  data-variant="c">
      {/* Animated background */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="lg:container mx-auto page-gutters">
        <div className="contact-grid">

          <motion.aside
            className="contact-rail bg-background/30"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            
            <Reveal>
              <p className="eyebrow">Scheduling</p>
              <h2 className="mt-2 headline-balance">
                <span>Let's <span className="text-primary">Talk</span></span>
              </h2>
              <p className="mt-3 text-foreground/85">
                Schedule a live walkthrough and leave with concrete next steps
              </p>
              <motion.div
                className="mt-5 flex flex-wrap gap-2"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              >
                <motion.span className="chip" variants={chipVariants}>Cross campus discovery</motion.span>
                <motion.span className="chip" variants={chipVariants}>Course mapping</motion.span>
                <motion.span className="chip" variants={chipVariants}>Alliance operations</motion.span>
              </motion.div>
            </Reveal>

            <div className="hr-soft my-6" />

            <div className="flex items-center gap-2">
              <span className="stat-badge">Live demo</span>
              <span className="stat-badge">30 minutes</span>
              <span className="stat-badge">Google Meet</span>
            </div>

            <ul className="mt-6 space-y-5">
              <li className="benefit">
                <span className="benefit-dot" />
                <div>
                  <p className="benefit-title">Understand the system</p>
                  <p className="benefit-copy">
                    See one connected campus for students and staff
                  </p>
                </div>
              </li>
              <li className="benefit">
                <span className="benefit-dot" />
                <div>
                  <p className="benefit-title">Cut admin loops</p>
                  <p className="benefit-copy">
                    Coordination centralised without more tools
                  </p>
                </div>
              </li>
              <li className="benefit">
                <span className="benefit-dot" />
                <div>
                  <p className="benefit-title">Outcome first</p>
                  <p className="benefit-copy">
                    Finish with a single recommended next step
                  </p>
                </div>
              </li>
            </ul>

            <motion.a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-gradient btn-md mt-7 text-xs justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="inner">Open Scheduler</span>
            </motion.a>

            <p className="mt-3 text-xs text-foreground/60">
              The embed uses Calendly cookies. Use the button if you prefer the
              standalone page.
            </p>
          </motion.aside>

          <motion.div
            className="contact-embed relative"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div id="cal-skeleton" className="w-full max-h-[600px] md:max-h-[720px] rounded-2xl bg-white/5 animate-pulse" />
            <div className="embed-frame">
              <iframe
                title="Synapse Scheduling"
                src={CAL_URL}
                loading="lazy"
                className="w-full  h-[600px] md:h-[720px]"
                onLoad={() => {
                  const el = document.getElementById("cal-skeleton");
                  if (el) el.style.display = "none";
                }}
              />
            </div>
            <div aria-hidden className="embed-aura" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
