"use client";
import { useRef } from "react";

export default function Tilt({ children, max=8 }: {children: React.ReactNode; max?: number}) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - .5) * -max;
    const ry = ((e.clientX - r.left) / r.width - .5) *  max;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  };
  const leave = () => { const el = ref.current; if (el) el.style.transform = "perspective(800px) rotateX(0) rotateY(0)"; };
  return <div ref={ref} onMouseMove={move} onMouseLeave={leave} style={{transition:"transform .18s ease"}}>{children}</div>;
}
