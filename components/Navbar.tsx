
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navSections } from "@/lib/sections";
import NavbarToggle from "./ui/navbar-toggle";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: .3 });

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        isScrolled ? "backdrop-blur-xl bg-background/90 shadow-lg shadow-brand-blue-light/5" : "backdrop-blur-md"
      )}
      style={{ backgroundColor: !isScrolled ? backgroundColor : undefined }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="h-0.5 bg-linear-to-r from-brand-blue-light via-brand-violet to-brand-blue-light origin-left"
        style={{ scaleX: progress }}
      />
      <div className="lg:container mx-auto flex h-15 sm:h-20 items-center justify-between px-4 sm:px-8 md:px-8 lg:px-16 xl:px-20">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Link href="/" className="flex items-center ml-[-3]">
            <Image src="/logo.svg" alt="Synapse Logo" width={160} height={32} priority />
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8 lg:gap-14">
          {navSections.map((section, index) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={section.href}
                className={cn(
                  "text-sm transition-all duration-200 text-foreground link-underline relative",
                  active === section.href 
                    ? "font-semibold gradient-text active" 
                    : "hover:text-primary"
                )}
              >
                {section.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(1, 215, 255, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="primary" 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started
            </Button>
          </motion.div>
        </nav>

        <div className="md:hidden">
          <NavbarToggle open={open} setOpen={setOpen} />
        </div>
      </div>

      {open && (
        <motion.div
          className="md:hidden w-full glass-card border-t border-brand-blue-light/20 shadow-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav className="flex flex-col px-6 py-6 space-y-4">
            {navSections.map((section, index) => (
              <motion.div
                key={section.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  href={section.href}
                  className={cn(
                    "text-base py-2 block transition-all duration-200",
                    active === section.href 
                      ? "font-bold gradient-text" 
                      : "text-foreground/90 hover:text-primary hover:translate-x-2"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {section.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navSections.length * 0.05 + 0.1 }}
              className="pt-2"
            >
              <Button 
                variant="primary" 
                className="w-full"
                onClick={() => {
                  setOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
