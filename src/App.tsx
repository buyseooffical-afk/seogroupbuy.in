import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogoCloud } from "./components/LogoCloud";
import { PriceComparison } from "./components/PriceComparison";
import { AccessShowcase } from "./components/AccessShowcase";
import { ToolGrid } from "./components/ToolGrid";
import { SystemStatus } from "./components/SystemStatus";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-blue-500/30">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LogoCloud />
        <PriceComparison />
        <AccessShowcase />
        <ToolGrid />
        <SystemStatus />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <ChatWidget whatsappLink="https://wa.me/15205636362" />
    </div>
  );
}
