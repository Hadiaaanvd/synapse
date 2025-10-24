import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <main className="lg:container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-16">
      <Navbar />
      <div>
          <HomeSection />

          <section id="about">
            {/* About content */}
          </section>

          <section id="product">
            {/* Product content */}
          </section>

          <TeamSection />

          <section id="contact">
            {/* Contact content */}
          </section>
        </div>
    </main>
  );
}
