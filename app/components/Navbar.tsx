import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link href="/" className="font-bold text-xl">
						<Image
							src="/logo-full.svg"
							alt="YourLogo"
							width={140}
							height={32}
						/>
					</Link>

					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link href="#home" className={navigationMenuTriggerStyle()}>
										Home
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link href="#about" className={navigationMenuTriggerStyle()}>
										About
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link href="#product" className={navigationMenuTriggerStyle()}>
										Product
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link href="#team" className={navigationMenuTriggerStyle()}>
										Team
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link href="#contact" className={navigationMenuTriggerStyle()}>
										Contact
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>

						</NavigationMenuList>
					</NavigationMenu>

					<div className="flex items-center gap-2">
						<Button variant="ghost">Log in</Button>
						<Button>Get Started</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
