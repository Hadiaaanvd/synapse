import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface NavSection {
	name: string;
	href: string;
	active?: boolean;
}

const navSections: NavSection[] = [
	{ name: "Home", href: "#home", active: true },
	{ name: "About", href: "#about" },
	{ name: "Product", href: "#product" },
	{ name: "Team", href: "#team" },
	{ name: "Contact", href: "#contact" },
];


export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link href="/" className="font-bold text-xl">
						<Image
							src="/logo-full.svg"
							alt="Synapse Logo"
							width={140}
							height={32}
						/>
					</Link>

					<NavigationMenu>
						<NavigationMenuList>
							{navSections.map((section) => (
								<NavigationMenuItem key={section.name}>
									<NavigationMenuLink asChild>
										<a href={section.href} className={section.active ? "text-primary" : ""}>{section.name}</a>
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>

					<div className="flex items-center gap-2">
						<Button>Get started</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
