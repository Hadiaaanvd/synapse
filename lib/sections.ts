type NavSection = {
  name: string
  href: string
  active?: boolean
}

export const navSections: NavSection[] = [
  { name: "Home", href: "#home", active: true },
  { name: "About", href: "#about" },
  { name: "Product", href: "#product" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
]
