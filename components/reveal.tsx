// components/Reveal.tsx
"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Reveal({
  children,
  className,
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  useEffect(() => { if (isInView) controls.start("visible"); }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: .6, ease: [0.22, 1, 0.36, 1], delay } }
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
