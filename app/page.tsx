import Home from "@/components/sections/Home";
import Navbar from "@/components/Navbar";
import Team from "@/components/sections/Team";
import About from "@/components/sections/About";
import Vision from "@/components/sections/Vision";

export default function Page() {
  return (
    <main className="relative">

      <Navbar />
      <Home />
      <About />
      <Vision />
      <Team />
      <section id="product"></section>
      <section id="contact"></section>

    </main>
  );
}
