// "use client";

// import { motion, useMotionValue, useSpring } from "framer-motion";
// import { useEffect, useRef } from "react";

// const cfg = { stiffness: 420, damping: 36, mass: 0.4 };

// export default function AnimatedCursor() {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const ringScale = useMotionValue(1);
//   const coreSize = useMotionValue(6);

//   const sx = useSpring(x, cfg);
//   const sy = useSpring(y, cfg);
//   const sring = useSpring(ringScale, cfg);
//   const score = useSpring(coreSize, cfg);

//   const touch = useRef(false);

//   useEffect(() => {
//     if (window.matchMedia("(pointer:coarse)").matches) {
//       touch.current = true;
//       return;
//     }

//     const move = (e: MouseEvent) => {
//       x.set(e.clientX);
//       y.set(e.clientY);
//     };

//     const press = () => {
//       ringScale.set(0.85);
//       coreSize.set(6);
//     };

//     const release = () => {
//       ringScale.set(1);
//       coreSize.set(8);
//     };

//     const hover = (e: MouseEvent) => {
//       const el = e.target as HTMLElement | null;

//       if (el?.closest("[data-cursor='focus'], a, button")) {
//         ringScale.set(1.6);
//         coreSize.set(5);
//         return;
//       }
//       ringScale.set(1);
//       coreSize.set(8);
//     };

//     window.addEventListener("mousemove", move);
//     window.addEventListener("mousemove", hover);
//     window.addEventListener("mousedown", press);
//     window.addEventListener("mouseup", release);

//     return () => {
//       window.removeEventListener("mousemove", move);
//       window.removeEventListener("mousemove", hover);
//       window.removeEventListener("mousedown", press);
//       window.removeEventListener("mouseup", release);
//     };
//   }, [x, y, ringScale, coreSize]);

//   if (touch.current) return null;

//   return (
//     <>
//       <motion.div
//         className="pointer-events-none fixed z-9998 hidden lg:block"
//         style={{
//           x: sx,
//           y: sy,
//           translateX: "-50%",
//           translateY: "-50%",
//           width: 32,
//           height: 32,
//           scale: sring,
//           borderRadius: "50%",
//           border: "2px solid #01d7ff",
//           boxShadow: "0 0 16px rgba(1, 215, 255, 0.9), inset 0 0 8px rgba(1, 215, 255, 0.2)",
//           opacity: 0.5,
//         }}
//       />
//       <motion.div
//         className="pointer-events-none fixed z-9998 hidden lg:block"
//         style={{
//           x: sx,
//           y: sy,
//           translateX: "-50%",
//           translateY: "-50%",
//           width: score,
//           height: score,
//           borderRadius: "50%",
//           background: "radial-gradient(circle at 30% 30%, rgba(1, 215, 255, 0.9), rgba(88, 0, 255, 0.6))",
//           boxShadow: "0 0 12px rgba(1, 215, 255, 0.8), 0 0 24px rgba(88, 0, 255, 0.4)",
//         }}
//       />
//     </>
//   );
// }