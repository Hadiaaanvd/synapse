"use client"
import { cn } from "@/lib/utils"

export default function NavbarToggle({setOpen, open}: {setOpen: (open: boolean) => void, open: boolean}) {

  return (
  <button
          className="md:hidden flex items-center justify-center rounded-full text-foreground/80 text-sm"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="relative block h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-foreground transition-transform",
                open && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[7px] h-0.5 w-5 bg-foreground transition-opacity",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 bottom-0 h-0.5 w-5 bg-foreground transition-transform",
                open && "-translate-y-[7px] -rotate-45"
              )}
            />
          </span>
        </button>
  )
}
