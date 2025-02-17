
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EcosystemDisplay } from "@/components/EcosystemDisplay";
import { FeatureGrid } from "@/components/FeatureGrid";

const features = [
  {
    name: "VibeWrite",
    title: "AI Voice Writing Tool",
    description: "Transform your thoughts into eloquent text with AI-powered voice recognition.",
    icon: "microphone",
  },
  {
    name: "VibeList",
    title: "To-Do List App",
    description: "Organize your tasks with a modern, intuitive to-do list application.",
    icon: "check-square",
  },
  {
    name: "VibeJourney",
    title: "AI Image Generation",
    description: "Create stunning visuals with our AI-powered image generation tool.",
    icon: "image",
  },
  {
    name: "VibeSearch",
    title: "AI-Powered Search",
    description: "Find exactly what you're looking for with our intelligent search technology.",
    icon: "search",
  },
  {
    name: "VibeRiley",
    title: "Portfolio Experience",
    description: "Explore a curated collection of work and experiences.",
    icon: "layout-grid",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f4] font-inter">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Hero />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <FeatureGrid 
              features={features}
              startIndex={0}
              endIndex={3}
              className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            />
            
            <EcosystemDisplay />
            
            <FeatureGrid 
              features={features}
              startIndex={3}
              endIndex={5}
              className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
