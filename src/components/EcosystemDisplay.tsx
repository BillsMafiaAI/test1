import { Mic, CheckSquare, Image, Search, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

export const EcosystemDisplay = () => {
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

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "microphone":
        return <Mic className="w-6 h-6 text-[#2c5dcf]" />;
      case "check-square":
        return <CheckSquare className="w-6 h-6 text-[#2c5dcf]" />;
      case "image":
        return <Image className="w-6 h-6 text-[#2c5dcf]" />;
      case "search":
        return <Search className="w-6 h-6 text-[#2c5dcf]" />;
      case "layout-grid":
        return <LayoutGrid className="w-6 h-6 text-[#2c5dcf]" />;
      default:
        return null;
    }
  };

  return (
    <div className="lg:col-span-3 my-12">
      <div className="bg-[#D3E4FD] text-[#221F26] rounded-2xl p-12 relative overflow-hidden min-h-[600px] flex items-center">
        {/* Grid Background */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(44,93,207,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(44,93,207,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} 
        />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#2c5dcf]/10 p-3 rounded-xl">
                    {getIcon(feature.icon)}
                  </div>
                  <span className="text-sm font-light text-[#2c5dcf] py-1 px-3 bg-[#2c5dcf]/5 rounded-full">
                    {feature.name}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-[#221F26]">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
