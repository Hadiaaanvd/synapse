import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50">
        <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        </section>

        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        </section>

        <section id="product" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        </section>

        <section id="team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        </section>

        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        </section>
      </main>
    </>
  );
}
