import Home from "@/components/sections/Home";
import Navbar from "@/components/Navbar";
import Team from "@/components/sections/Team";

export default function Page() {
  return (
    <main className="relative">

      <Navbar />
      <Home />
      <section id="about"></section>
      <section id="product"></section>
      <Team />
      <section id="contact"></section>
      
    </main>
  );
}
