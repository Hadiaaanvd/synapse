import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HomeSection />

          <section id="about" className="py-24 sm:py-32">
            {/* About content */}
          </section>

          <section id="product" className="py-24 sm:py-32">
            {/* Product content */}
          </section>

          <TeamSection />

          <section id="contact" className="py-24 sm:py-32">
            {/* Contact content */}
          </section>
        </div>


      </main>
    </>
  );
}
