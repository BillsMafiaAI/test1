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
              <div className="bg-gray-900 text-white rounded-2xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(44,93,207,0.1),transparent_70%)]" />
                
                <div className="relative z-10">
                  <div className="flex justify-center items-center mb-12">
                    <div className="relative w-[600px] h-[300px]">
                      {/* Central Hub */}
                      <motion.div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#2c5dcf] rounded-full flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
                          <span className="text-2xl">🔮</span>
                        </div>
                      </motion.div>

                      {/* Orbiting Elements */}
                      {[0, 72, 144, 216, 288].map((degree, index) => (
                        <motion.div
                          key={degree}
                          className="absolute left-1/2 top-1/2 w-12 h-12 -ml-6 -mt-6"
                          initial={{ rotate: degree }}
                          animate={{ 
                            rotate: [degree, degree + 360],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{ 
                            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                          }}
                        >
                          <div 
                            className="relative w-full h-full"
                            style={{ transform: `rotate(${-degree}deg)` }}
                          >
                            <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-lg shadow-lg flex items-center justify-center">
                              {index === 0 && <span>🎙️</span>}
                              {index === 1 && <span>✅</span>}
                              {index === 2 && <span>🎨</span>}
                              {index === 3 && <span>🔍</span>}
                              {index === 4 && <span>📱</span>}
                            </div>
                          </div>
                        </motion.div>
                      ))}

                      {/* Connecting Lines */}
                      <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(0deg)' }}>
                        {[0, 72, 144, 216, 288].map((degree) => (
                          <motion.path
                            key={degree}
                            d={`M ${300} ${150} L ${300 + Math.cos(degree * Math.PI / 180) * 120} ${150 + Math.sin(degree * Math.PI / 180) * 120}`}
                            stroke="rgba(44,93,207,0.2)"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: [0, 1, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: degree / 360 }}
                          />
                        ))}
                      </svg>

                      {/* Particle Effects */}
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute left-1/2 top-1/2 w-1 h-1 bg-[#2c5dcf] rounded-full"
                          initial={{ 
                            x: 0, 
                            y: 0, 
                            opacity: 0 
                          }}
                          animate={{ 
                            x: [0, (Math.random() - 0.5) * 200],
                            y: [0, (Math.random() - 0.5) * 200],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto text-center">
                    Our suite of tools work seamlessly together, creating a powerful ecosystem 
                    that enhances your productivity and creativity.
                  </p>
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
