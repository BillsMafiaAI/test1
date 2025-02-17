
import { motion } from "framer-motion";
import { FeatureCard } from "@/components/FeatureCard";

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
      <nav className="fixed top-0 w-full z-50 border-b border-gray-100/50 backdrop-blur-[2px]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-light text-[#2c5dcf]">OpenVibe</span>
            <button className="px-4 py-2 bg-[#2c5dcf] text-white rounded-lg hover:bg-[#2c5dcf]/90 transition-colors font-light">
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
            <h1 className="text-5xl md:text-6xl font-extralight text-gray-900 leading-tight tracking-tight">
              Amplify Your <span className="text-[#2c5dcf]">Vibes</span> with Modern Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              The premier suite of tools designed to enhance your creative flow and productivity. Express yourself freely and explore ideas effortlessly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <motion.div
              className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="lg:col-span-3 my-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
                <h2 className="text-4xl font-extralight mb-6">A Complete Ecosystem of Tools</h2>
                <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
                  Our suite of tools work seamlessly together, creating a powerful ecosystem 
                  that enhances your productivity and creativity. From voice-to-text to AI-powered 
                  search, every tool is designed to work in harmony.
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                  <motion.div 
                    className="w-2 h-2 bg-[#2c5dcf] rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-[#2c5dcf] rounded-full"
                    animate={{ scale: [1.5, 1, 1.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-[#2c5dcf] rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full"
            >
              {features.slice(3).map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
