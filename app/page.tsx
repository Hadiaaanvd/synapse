import Home from "@/components/sections/Home";
import Navbar from "@/components/Navbar";
import Team from "@/components/sections/Team";
import About from "@/components/sections/About";
import Vision from "@/components/sections/Vision";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <main className="relative">

      <Navbar />
      <Home />
      <About />
      <Vision />
      <Team />
      <Footer />

    </main>
  );
}
