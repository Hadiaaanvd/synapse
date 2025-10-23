import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50">
        <section id="home">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
