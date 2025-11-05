// components/Navbar.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navSections } from "@/lib/sections";
import NavbarToggle from "./ui/navbar-toggle";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: .3 });

  useEffect(() => {
    const ids = navSections.map(s => s.href);
    const obs = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, .25, .5, .75, 1] }
    );
    ids.forEach(id => { const el = document.querySelector(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background/60 backdrop-blur-md ">
      <motion.div className="h-0.5 bg-primary/70 origin-left" style={{ scaleX: progress }} />
      <div className="lg:container mx-auto flex h-15 sm:h-20 items-center justify-between px-4 sm:px-8 md:px-8 lg:px-16 xl:px-20">
        <Link href="/" className="flex items-center ml-[-3]">
          <Image src="/logo.svg" alt="Synapse Logo" width={160} height={32} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-8 lg:gap-14">
          {navSections.map(section => (
            <Link
              key={section.name}
              href={section.href}
              className={cn("text-sm transition-colors duration-200 text-foreground link-underline",
                active === section.href ? "font-semibold text-primary active" : "hover:text-primary")}
            >
              {section.name}
            </Link>
          ))}
          <Button variant="primary">Get Started</Button>
        </nav>

        <div className="md:hidden">
          <NavbarToggle open={open} setOpen={setOpen} />
        </div>
      </div>

      {open && (
        <div className="md:hidden w-full bg-background/80 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {navSections.map(section => (
              <Link
                key={section.name}
                href={section.href}
                className={cn("text-sm transition-colors duration-200",
                  active === section.href ? "font-bold text-primary" : "text-foreground/80")}
                onClick={() => setOpen(false)}
              >
                {section.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
