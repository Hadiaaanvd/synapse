"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "../reveal";
import { useState } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const [spot, setSpot] = useState<{x:number,y:number}>({x:50,y:40});
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setSpot({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <section id="home" className="section-gradient section-spotlight min-h-screen relative overflow-hidden" onMouseMove={onMove}>
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-brand-blue-light/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-brand-violet/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="lg:container mx-auto md:pt-26 px-4 sm:px-8 md:px-8 lg:px-16 xl:px-20 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12 relative z-10">

        <motion.div
          className="w-full md:w-1/2 max-w-[640px] flex flex-col gap-8 order-1 md:order-0"
          style={{ opacity }}
        >
          <Reveal>
            <h1 className="text-center md:text-left mb-4 text-4xl sm:text-5xl md:text-[2.5em] lg:text-[4.3vw] xl:text-[4.1vw] leading-[1.05]">
              INNOVATION<br /><span className="text-brand-gradient">ACROSS</span> BORDERS
            </h1>
          </Reveal>

          <Reveal delay={.15}>
            <motion.div
              className="flex items-center justify-center md:justify-start gap-3"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Image src="/icons/bullet.svg" alt="" width={22} height={22} className="mt-0.5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              </motion.div>
              <p className="text-sm sm:text-base md:text-md lg:text-lg leading-relaxed md:leading-snug max-w-[42ch]">
                Creating Seamless Pathways for Cross Campus Learning
              </p>
            </motion.div>
          </Reveal>

          <Reveal delay={.3}>
            <div className="flex justify-center md:justify-start">
              <motion.a
                className="btn-secondary-gradient"
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="inner">
                  Explore Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Image src="/icons/arrow.svg" alt="" width={24} height={24} className="-mr-1" />
                  </motion.div>
                </span>
              </motion.a>
            </div>
          </Reveal>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-1 relative"
          style={{ y, scale }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2
            }}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image src="/banner.png" alt="Banner" width={650} height={650}
                priority className="h-auto max-w-[320px] sm:max-w-[350px] lg:max-w-[420px] xl:max-w-[580px] drop-shadow-2xl animate-hue" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
