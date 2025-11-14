"use client";
import Image from "next/image";
import {  useScroll, useTransform } from "framer-motion";

import Reveal from "../reveal";
import { useState } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -40]);

  const [spot, setSpot] = useState<{x:number,y:number}>({x:50,y:40});
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setSpot({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <section id="home" className="section-gradient section-spotlight min-h-screen" data-variant="a" onMouseMove={onMove}>
      <div className="lg:container mx-auto md:pt-26 px-4 sm:px-8 md:px-8 lg:px-16 xl:px-20 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12">

        <div className="w-full md:w-1/2 max-w-[640px] flex flex-col gap-10 order-1 md:order-0">
          <Reveal>
            <h1 className="text-center md:text-left mb-2 text-4xl sm:text-5xl md:text-[2.8em] lg:text-[4.6vw] xl:text-[4.4vw] leading-[1.05] tracking-tight">
              INNOVATION<br /><span className="text-brand-gradient drop-shadow-[0_0_30px_rgba(1,215,255,0.3)]">ACROSS</span> BORDERS
            </h1>
          </Reveal>

          <Reveal delay={.08}>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Image src="/icons/bullet.svg" alt="" width={24} height={24} className="mt-0.5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 flex-shrink-0" />
              <p className="text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed md:leading-relaxed max-w-[42ch] text-foreground/90">
                Creating Seamless Pathways for Cross Campus Learning
              </p>
            </div>
          </Reveal>
          <Reveal delay={.12}>
            <div className="flex justify-center md:justify-start">

                <a className="btn-secondary-gradient btn-lg group/cta" href="#contact">
                  <span className="inner">
                    Explore Now
                    <Image src="/icons/arrow.svg" alt="" width={24} height={24} className="-mr-1 transition-transform duration-300 group-hover/cta:translate-x-1" />
                  </span>
                </a>

            </div>
          </Reveal>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-1 relative">
       
            <Image src="/banner.png" alt="Banner" width={650} height={650}
              priority className="h-auto max-w-[320px] sm:max-w-[350px] lg:max-w-[420px] xl:max-w-[580px] drop-shadow-2xl animate-hue" />
     
        </div>
      </div>
    </section>
  );
}
