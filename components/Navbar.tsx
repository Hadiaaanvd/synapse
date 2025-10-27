"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navSections } from "@/lib/sections";
import NavbarToggle from "./ui/navbar-toggle";

function NavLinksDesktop() {
  return (
    <nav className="hidden md:flex items-center gap-8 lg:gap-14">
      {navSections.map((section) => (
        <Link
          key={section.name}
          href={section.href}
          className={cn(
            "text-sm transition-colors duration-200 text-foreground",
            section.active ? "font-semibold" : "hover:text-primary"
          )}
        >
          {section.name}
        </Link>
      ))}

      <Button variant="primary">Get Started</Button>
    </nav>
  );
}

function MobileMenu({
  open,
  onSelect,
}: {
  open: boolean;
  onSelect: () => void;
}) {
  if (!open) return null;

  return (
    <div className="md:hidden w-full bg-background/80 backdrop-blur-md border-t border-border">
      <nav className="flex flex-col px-6 py-4 space-y-4">
        {navSections.map((section) => (
          <Link
            key={section.name}
            href={section.href}
            className={cn(
              "text-sm text-foreground transition-colors duration-200",
              section.active ? "font-bold" : "text-foreground/80"
            )}
            onClick={onSelect}
          >
            {section.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background/10 backdrop-blur-md">
      <div className="lg:container mx-auto flex h-15 sm:h-20 items-center justify-between px-4 sm:px-8 md:px-8 lg:px-16 xl:px-20">
        <Link href="/" className="flex items-center ml-[-3]">
          <Image
            src="/logo.svg"
            alt="Synapse Logo"
            width={160}
            height={32}
            priority
          />
        </Link>

        <NavLinksDesktop />

        <div className="md:hidden">
          <NavbarToggle open={open} setOpen={setOpen} />
        </div>
      </div>

      <MobileMenu open={open} onSelect={() => setOpen(false)} />
    </header>
  );
}
