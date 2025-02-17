
import { motion } from "framer-motion";
import { FeatureCard } from "@/components/FeatureCard";

const features = [
  {
    name: "VibeWrite",
    title: "AI Voice Writing Tool",
    description: "Transform your thoughts into eloquent text with AI-powered voice recognition.",
  },
  {
    name: "VibeList",
    title: "To-Do List App",
    description: "Organize your tasks with a modern, intuitive to-do list application.",
  },
  {
    name: "VibeJourney",
    title: "AI Image Generation",
    description: "Create stunning visuals with our AI-powered image generation tool.",
  },
  {
    name: "VibeSearch",
    title: "AI-Powered Search",
    description: "Find exactly what you're looking for with our intelligent search technology.",
  },
  {
    name: "VibeRiley",
    title: "Portfolio Experience",
    description: "Explore a curated collection of work and experiences.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-vibe-bg font-inter">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-vibe-blue">OpenVibe</span>
            <button className="px-4 py-2 bg-vibe-blue text-white rounded-lg hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6 mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Amplify Your <span className="text-vibe-blue">Vibes</span> with Modern Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The premier suite of tools designed to enhance your creative flow and productivity. Express yourself freely and explore ideas effortlessly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
