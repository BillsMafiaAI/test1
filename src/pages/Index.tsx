import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EcosystemDisplay } from "@/components/EcosystemDisplay";
import { ToolsDeepDive } from "@/components/ToolsDeepDive";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f4] font-inter">
      <Navbar />
      
      <main>
        <div className="container mx-auto px-6">
          <Hero />
          <EcosystemDisplay />
        </div>
        
        <ToolsDeepDive />
        <Testimonials />
        <Features />
      </main>
    </div>
  );
};

export default Index;
