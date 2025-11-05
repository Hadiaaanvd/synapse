
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const cfg = { stiffness: 420, damping: 36, mass: 0.4 };

export default function AnimatedCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const coreSize = useMotionValue(12);
  const caretH = useMotionValue(0);
  const ringScale = useMotionValue(1.1);
  const alpha = useMotionValue(1);

  const sx = useSpring(x, cfg);
  const sy = useSpring(y, cfg);
  const ssize = useSpring(coreSize, cfg);
  const scaret = useSpring(caretH, cfg);
  const sring = useSpring(ringScale, cfg);
  const salpha = useSpring(alpha, cfg);

  const touch = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer:coarse)").matches) {
      touch.current = true;
      return;
    }
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };

    const press = () => { ringScale.set(0.9); coreSize.set(10); alpha.set(0.95); };
    const release = () => { ringScale.set(1.15); coreSize.set(12); alpha.set(1); };

    const hover = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;

      if (el?.closest("[data-cursor='text'], h1, h2, h3, p, span")) {
        const lh = parseFloat(getComputedStyle(el!).lineHeight || "22");
        caretH.set(Math.max(16, Math.min(lh, 64)));
        coreSize.set(2);
        ringScale.set(0.95);
        return;
      }
      if (el?.closest("[data-cursor='focus'], a, button")) {
        caretH.set(0);
        coreSize.set(6);
        ringScale.set(1.9);
        return;
      }
      caretH.set(0);
      coreSize.set(12);
      ringScale.set(1.15);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", hover);
    window.addEventListener("mousedown", press);
    window.addEventListener("mouseup", release);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", hover);
      window.removeEventListener("mousedown", press);
      window.removeEventListener("mouseup", release);
    };
  }, [x, y, caretH, ringScale, coreSize, alpha]);
const blobRadius = useMotionValue(9999); // percent
const sblob = useSpring(blobRadius, cfg);
  if (touch.current) return null;


  return (
    <>
<motion.div
  className="pointer-events-none fixed z-9998"
  style={{
    x: sx, y: sy, translateX: "-50%", translateY: "-50%",
    width: 36, height: 36, scale: sring,
    borderRadius: sblob as any,
    background:
      "radial-gradient(circle at 30% 30%, rgba(255,255,255,.9), rgba(255,255,255,.2)) padding-box, \
       conic-gradient(var(--brand-gradient-start), var(--brand-violet), var(--brand-blue-light), var(--brand-gradient-end)) border-box",
    WebkitMask:
      "radial-gradient(circle, transparent 62%, black 63%)",
    mask: "radial-gradient(circle, transparent 62%, black 63%)",
    boxShadow: "0 10px 30px rgba(0,0,0,.45), 0 0 24px rgba(1,215,255,.25)"
  }}
/>

    </>
  );
}
