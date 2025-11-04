"use client";
import { useRef } from "react";

export default function Magnetic({ children, strength=18 }: {children: React.ReactNode; strength?: number}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * strength;
    const y = ((e.clientY - r.top) / r.height - .5) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => { const el = ref.current; if (el) el.style.transform = `translate(0,0)`; };
  return (
    <div className="magnetic-area" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div ref={ref} className="magnetic-target">{children}</div>
    </div>
  );
}
