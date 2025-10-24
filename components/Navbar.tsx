"use client"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { navSections } from "@/lib/sections"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background/10 backdrop-blur-md mx-auto">
      <div className="mx-auto flex container h-22 items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 xl:px-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Synapse Logo"
            width={150}
            height={32}
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-12">
          {navSections.map((section) => (
            <Link
              key={section.name}
              href={section.href}
              className={cn(
                "text-sm transition-colors duration-200 text-foreground",
                section.active
                  ? "font-semibold"
                  : "hover:text-primary"
              )}
            >
              {section.name}
            </Link>
          ))}
		<div className="flex items-center">
          <Button variant="primary">
            Get Started
          </Button>
        </div>
        </nav>
      
      </div>
    </header>
  )
}
