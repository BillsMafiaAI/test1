import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Brain, Zap } from "lucide-react";

export const ToolsDeepDive = () => {
  const tools = [
    {
      title: "Voice-Powered Creation",
      description: "Our AI voice recognition system understands context, tone, and nuance, transforming your spoken words into polished written content instantly.",
      icon: <Sparkles className="w-8 h-8 text-[#2c5dcf]" />,
      features: ["Natural language processing", "Multi-language support", "Real-time transcription"],
    },
    {
      title: "Intelligent Task Management",
      description: "More than just a to-do list, our task management system learns from your habits and helps optimize your workflow.",
      icon: <Brain className="w-8 h-8 text-[#2c5dcf]" />,
      features: ["Smart prioritization", "Automated scheduling", "Progress analytics"],
    },
    {
      title: "Advanced AI Generation",
      description: "Create stunning visuals and discover insights with our powerful AI tools that adapt to your creative style.",
      icon: <Zap className="w-8 h-8 text-[#2c5dcf]" />,
      features: ["Style customization", "Batch processing", "High-resolution output"],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-gray-100 rounded-2xl p-12 relative overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(100,100,100,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(100,100,100,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }} 
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Powerful Tools for <span className="text-[#2c5dcf]">Modern Creators</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our suite of AI-powered tools is designed to enhance your creative process and boost productivity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-lg">
                    <div className="bg-[#2c5dcf]/10 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                      {tool.icon}
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-4">{tool.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                    <ul className="space-y-3">
                      {tool.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <ArrowRight className="w-4 h-4 text-[#2c5dcf] mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 