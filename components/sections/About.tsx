"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
  <section id="about" className="section-gradient relative w-full overflow-hidden section-spotlight section-spacing"  data-variant="c">
      <div className="absolute inset-0 pointer-events-none bg-surface-gradient opacity-[.35]" />
      <p className="eyebrow lg:container page-gutters mb-6">Our Mission</p>
       <div className="relative lg:container mx-auto page-gutters flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        <div className="w-full md:w-[52%] flex md:flex-col gap-8">

          <h2 className="leading-tight">
            ONE PLATFORM FOR <br /> UNIVERSITY ALLIANCES
            <span className="block text-primary mt-2">
              CONNECTING STUDENTS AND INSTITUTIONS.
            </span>
          </h2>
        </div>

        <div className="w-full md:w-[48%] text-base flex flex-col gap-2 text-foreground/90 lg:text-xl leading-relaxed">
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
