// components/ui/spotlight-cursor.tsx
"use client";

import { useEffect } from "react";

export default function SpotlightCursor() {
  useEffect(() => {
    let raf = 0;
    const root = document.documentElement;

    const set = (xPerc: number, yPerc: number) => {
      root.style.setProperty("--spot-x", `${xPerc}%`);
      root.style.setProperty("--spot-y", `${yPerc}%`);
    };

    const onMove = (e: PointerEvent | MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = window.innerWidth || 1;
        const h = window.innerHeight || 1;
        const x = (("clientX" in e ? e.clientX : 0) / w) * 100;
        const y = (("clientY" in e ? e.clientY : 0) / h) * 100;
        set(x, y);
      });
    };

    const onLeave = () => set(50, 40);

    // defaults at load
    set(50, 40);

    // pointer for desktop
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave, { passive: true });

    // touch fallback
    window.addEventListener("touchmove", (te) => {
      const t = te.touches[0];
      if (!t) return;
      onMove({ clientX: t.clientX, clientY: t.clientY } as any);
    }, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove as any);
      window.removeEventListener("mouseout", onLeave as any);
      window.removeEventListener("touchmove", onMove as any);
    };
  }, []);

  return null;
}
