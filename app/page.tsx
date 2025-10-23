import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 space-y-20">
        <section id="home" className="pt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col-reverse md:flex-row items-center md:justify-between gap-8">
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

          </div>
        </section>

        <section id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          </div>
        </section>

        <section id="product">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          </div>
        </section>

        <TeamSection />

        <section id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          </div>
        </section>
      </main>
    </>
  );
}
