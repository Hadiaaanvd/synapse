"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
  <section id="about" className="section-gradient relative w-full overflow-hidden section-spotlight section-spacing"  data-variant="c">
      <div className="absolute inset-0 pointer-events-none bg-surface-gradient opacity-[.35]" />
       <div className="relative lg:container mx-auto page-gutters flex flex-col md:flex-row gap-12 md:gap-16">
        <div className="w-full flex  md:flex-col gap-8">
         
          <h2>
            ONE PLATFORM FOR <br /> UNIVERSITY ALLIANCES&nbsp;
            <span className="block text-primary">
              CONNECTING STUDENTS AND INSTITUTIONS.
            </span>
          </h2>
        </div>

        <div className="w-full text-sm flex flex-col gap-2 text-foreground lg:text-xl leading-relaxed">
          <p className="eyebrow">Our Mission</p>
          <p>
            We simplify cross-border collaboration in higher education. Our
            platform centralizes information from multiple institutions into one
            intuitive dashboard, so students discover opportunities and staff
            coordinate courses without administrative friction.
          </p>
        </div>
      </div>
       <div className="about-pill-gradient w-[70vw] mt-30 md:w-[50vw] lg:w-[40vw] h-30 md:h-42 lg:h-68 rounded-r-[14rem]" />
    
    </section>
  );
}
