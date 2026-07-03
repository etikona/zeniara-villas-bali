import { Concept } from "./Components/Concept";
import { CTA } from "./Components/CTA";
import { Footer } from "./Components/Footer";
import { Gallery } from "./Components/Gallery";
import { Hero } from "./Components/Hero";
import { Invest } from "./Components/Invest";
import { Location } from "./Components/Location";
// import { Navbar } from "./Components/Navbar";
import { Showcase } from "./Components/Showcase";

export default function Home() {
  return (
    <main className="bg-zen-sand">
      <Hero />
      <Concept />
      <Gallery />
      <Invest />
      <Showcase />
      <Location />
      <CTA />
      <Footer />
    </main>
  );
}
