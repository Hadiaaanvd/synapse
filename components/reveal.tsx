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
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => { if (isInView) controls.start("visible"); }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20, filter: "blur(3px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: .45, ease: [0.25, 0.46, 0.45, 0.94], delay } }
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
