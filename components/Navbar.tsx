import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
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
									<a href="#home">Home</a>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<a href="#about">About</a>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<a href="#product">Product</a>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<a href="#team">Team</a>
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<a href="#contact">Contact</a>
								</NavigationMenuLink>
							</NavigationMenuItem>

						</NavigationMenuList>
					</NavigationMenu>

					<div className="flex items-center gap-2">
						<Button variant="ghost">Log in</Button>
						<Button className="bg-linear-to-br from-blue-600 to-indigo-700">Get started</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
