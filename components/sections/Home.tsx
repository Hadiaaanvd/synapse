"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import Reveal from "../reveal";
import { useState } from "react";
import Magnetic from "../ui/magnetic";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -40]);

  const [spot, setSpot] = useState<{x:number,y:number}>({x:50,y:40});
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setSpot({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <section id="home" className="section-gradient noise section-spotlight min-h-screen"
      style={{ ['--mx' as any]: `${spot.x}%`, ['--my' as any]: `${spot.y}%` }} onMouseMove={onMove}>
      <div className="lg:container mx-auto md:pt-26 px-4 sm:px-8 md:px-8 lg:px-16 xl:px-20 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12">

        <div className="w-full md:w-1/2 max-w-[640px] flex flex-col gap-8 order-1 md:order-0">
          <Reveal>
            <h1 className="text-center md:text-left mb-4 text-4xl sm:text-5xl md:text-[2.5em] lg:text-[4.3vw] xl:text-[4.1vw] leading-[1.05]">
              INNOVATION<br /><span className="text-brand-gradient">ACROSS</span> BORDERS
            </h1>
          </Reveal>

          <Reveal delay={.1}>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Image src="/icons/bullet.svg" alt="" width={22} height={22} className="mt-0.5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              <p className="text-sm sm:text-base md:text-md lg:text-lg leading-relaxed md:leading-snug max-w-[42ch]">
                Creating Seamless Pathways for Cross Campus Learning
              </p>
            </div>
          </Reveal>

          <Reveal delay={.2}>
            <div className="flex justify-center md:justify-start">
              <Magnetic>
                <a className="btn-secondary-gradient">
                  <span className="inner">
                    Explore Now
                    <Image src="/icons/arrow.svg" alt="" width={24} height={24} className="-mr-1" />
                  </span>
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-1 relative">
          <motion.div style={{ y }} className="relative z-10 float-slow">
            <Image src="/banner.png" alt="Banner" width={650} height={650}
              priority className="h-auto max-w-[320px] sm:max-w-[350px] lg:max-w-[420px] xl:max-w-[580px] drop-shadow-2xl animate-hue" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
