"use client";
import { motion } from "framer-motion";
import Reveal from "../reveal";


export default function Vision() {
  return (
    <section id="vision" className="section-gradient section-spotlight noise section-spacing" data-variant="c">
      <div className="lg:container mx-auto page-gutters flex flex-col md:flex-row gap-12 md:gap-16 relative z-1">
        <Reveal className="w-full md:w-1/2 max-w-[680px] flex flex-col gap-8">
          <h2>
            Breaking borders in higher<span className="text-primary"> education.</span>
          </h2>
          <div className="text-sm flex flex-col gap-4 text-justify text-foreground lg:text-xl leading-relaxed">
            <p className="eyebrow">Our Vision</p>
            <p>
              We aim to establish the standard for how university alliances operate digitally. Students and staff will experience their alliance as one interconnected campus, where discovering and participating in cross border activities requires no more effort than engaging with their home institution. Users can focus on academic work instead of administrative tasks.
            </p>
          </div>
        </Reveal>
        <div className="w-full md:w-1/2 max-w-[680px] flex flex-col justify-end" />
      </div>
      <div className="flex justify-end">
           <motion.div
    className="vision-pill-gradient w-[70vw] mt-20 md:w-[50vw] lg:w-[40vw] md:block max-w-full h-30 md:h-42 lg:h-68 rounded-r-[14rem]"
    initial={{ x: 80, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  />
   </div>
    </section>
  );
}
