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
              <div className="bg-[#0B0E18] text-white rounded-2xl p-12 relative overflow-hidden min-h-[600px] flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(44,93,207,0.05),transparent_70%)]" />
                
                <div className="relative z-10 w-full h-[400px]">
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-[#2c5dcf] p-1">
                        <div className="w-full h-full rounded-full bg-[#0B0E18] flex items-center justify-center">
                          <motion.span 
                            className="text-2xl"
                            animate={{ 
                              rotate: [0, 360],
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            ✨
                          </motion.span>
                        </div>
                      </div>
                      <div className="absolute -inset-4 border border-[#2c5dcf]/20 rounded-full" />
                    </div>
                  </motion.div>

                  {[
                    { x: -120, y: -80, delay: 0, icon: "🎙️" },
                    { x: 120, y: -80, delay: 1, icon: "✅" },
                    { x: -160, y: 60, delay: 0.5, icon: "🎨" },
                    { x: 160, y: 60, delay: 1.5, icon: "🔍" },
                    { x: 0, y: 120, delay: 2, icon: "📱" }
                  ].map((app, index) => (
                    <motion.div
                      key={index}
                      className="absolute left-1/2 top-1/2"
                      initial={{ x: app.x, y: app.y }}
                      animate={{ 
                        x: [app.x - 10, app.x + 10, app.x],
                        y: [app.y - 10, app.y + 10, app.y],
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: app.delay 
                      }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-xl">{app.icon}</span>
                      </motion.div>
                    </motion.div>
                  ))}

                  <svg className="absolute inset-0 w-full h-full">
                    {[
                      { x1: "50%", y1: "50%", x2: "35%", y2: "35%" },
                      { x1: "50%", y1: "50%", x2: "65%", y2: "35%" },
                      { x1: "50%", y1: "50%", x2: "30%", y2: "65%" },
                      { x1: "50%", y1: "50%", x2: "70%", y2: "65%" },
                      { x1: "50%", y1: "50%", x2: "50%", y2: "80%" }
                    ].map((line, index) => (
                      <motion.line
                        key={index}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="rgba(44,93,207,0.2)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1] }}
                        transition={{ duration: 2, delay: index * 0.5 }}
                      />
                    ))}
                  </svg>
                </div>

                <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto text-center mt-8">
                  Our suite of tools work seamlessly together, creating a powerful ecosystem 
                  that enhances your productivity and creativity.
                </p>
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
