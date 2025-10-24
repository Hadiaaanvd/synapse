import Image from "next/image";

export default function HomeSection() {
	return (
		<section
			id="home"
			className="h-screen flex items-center justify-between gap-8"
		>
			<div className="md:w-1/2 text-center md:text-left">
				<h1 className="">
					Connecting universities <br />
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
