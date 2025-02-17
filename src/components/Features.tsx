import { motion } from "framer-motion";
import { Cpu, Lock, Gauge, Cloud, Workflow, Layers } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Advanced AI Processing",
      description: "Utilizing cutting-edge machine learning models for fast and accurate results.",
      icon: <Cpu className="w-6 h-6 text-[#2c5dcf]" />,
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption and security measures to protect your data.",
      icon: <Lock className="w-6 h-6 text-[#2c5dcf]" />,
    },
    {
      title: "High Performance",
      description: "Optimized for speed with real-time processing capabilities.",
      icon: <Gauge className="w-6 h-6 text-[#2c5dcf]" />,
    },
    {
      title: "Cloud Integration",
      description: "Seamless integration with major cloud service providers.",
      icon: <Cloud className="w-6 h-6 text-[#2c5dcf]" />,
    },
    {
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline your processes.",
      icon: <Workflow className="w-6 h-6 text-[#2c5dcf]" />,
    },
    {
      title: "API Access",
      description: "Full API access for custom integrations and extensions.",
      icon: <Layers className="w-6 h-6 text-[#2c5dcf]" />,
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
                Built with <span className="text-[#2c5dcf]">Advanced Technology</span>
              </h2>
              <p className="text-lg text-gray-600">
                Our platform is powered by the latest advancements in AI and cloud computing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-[#2c5dcf]/10 rounded-xl p-4 w-14 h-14 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 