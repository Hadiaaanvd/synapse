"use client";
import { motion } from "framer-motion";
import Reveal from "../reveal";

export default function Vision() {
  return (
    <section
      id="vision"
      className="section-gradient section-spotlight noise section-spacing"
      data-variant="c"
    >
      <p className="eyebrow lg:container page-gutters mb-3">Our Vision</p>
      <div className="lg:container page-gutters flex flex-col md:flex-row gap-12 md:gap-16 relative z-1">
     
        <Reveal className="w-full md:w-1/2 max-w-[680px] flex flex-col gap-8">
     
          <h2>
            Breaking borders in higher
            <span className="text-primary"> education.</span>
          </h2>
          <div className="text-sm flex flex-col gap-4  text-foreground lg:text-xl leading-relaxed">
            <p>
              We aim to establish the standard for how university alliances
              operate digitally. Students and staff will experience their
              alliance as one interconnected campus, where discovering and
              participating in cross border activities requires no more effort
              than engaging with their home institution. Users can focus on
              academic work instead of administrative tasks.
            </p>
          </div>
        </Reveal>
        <div className="w-full md:w-1/2 max-w-[680px] flex flex-col justify-end" />
      </div>
      <div className="flex justify-end">
        <div className="vision-pill-gradient w-[70vw] mt-20 md:w-[50vw] lg:w-[40vw] md:block max-w-full h-30 md:h-42 lg:h-68" />
      </div>
    </section>
  );
}
