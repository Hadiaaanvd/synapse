import Image from "next/image";

export default function HomeSection() {
	return (
		<section
			id="home"
			className="flex py-24 sm:py-32 flex-col-reverse md:flex-row items-center md:justify-between gap-8"
		>
			<div className="md:w-1/2 text-center md:text-left">
				<h1 className="text-7xl sm:text-7xl font-extrabold">
					Connecting universities{" "}
					<span className="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
						across borders
					</span>
				</h1>
			</div>

			<div className="md:w-1/2 flex justify-center md:justify-end">
				<Image src="/connecting-universities.svg" alt="Education" width={600} height={600} />
			</div>
		</section>
	);
}
