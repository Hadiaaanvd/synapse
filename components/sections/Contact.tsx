// components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import Reveal from "../reveal";

const CAL_URL =
  "https://calendly.com/hadiaaanvd/30min" +
  "?hide_event_type_details=1" +
  "&hide_gdpr_banner=1" +
  "&background_color=000000" +
  "&text_color=ffffff" +
  "&primary_color=009ddf" +
  "&utm_source=synapse_web&utm_medium=embed&utm_campaign=contact";

export default function Contact() {
  return (
    <section id="contact" className="section-gradient noise section-compact">
      <div className="lg:container mx-auto page-gutters">
        <div className="contact-grid">
          {/* LEFT: pitch rail */}
          <motion.aside
            className="contact-rail"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Reveal>
              <p className="eyebrow">Scheduling</p>
              <h2 className="mt-2 headline-balance">
                <span>Lets Talk</span>
              </h2>
              <p className="mt-3 text-foreground/85">
                Schedule a live walkthrough and leave with concrete next steps
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="chip">Cross campus discovery</span>
                <span className="chip">Course mapping</span>
                <span className="chip">Alliance operations</span>
              </div>
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

            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-gradient btn-md mt-7 text-xs justify-center"
            >
              <span className="inner">Open full page scheduler</span>
            </a>

            <p className="mt-3 text-xs text-foreground/60">
              The embed uses Calendly cookies. Use the button if you prefer the
              standalone page.
            </p>
          </motion.aside>

          {/* RIGHT: scheduler embed */}
          <motion.div
            className="contact-embed accent-ring"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div id="cal-skeleton" className="w-full h-[600px] md:h-[720px] rounded-2xl bg-white/5 animate-pulse" />
            <div className="embed-frame">
              <iframe
                title="Synapse Scheduling"
                src={CAL_URL}
                loading="lazy"
                className="w-full h-[600px] md:h-[720px]"
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
