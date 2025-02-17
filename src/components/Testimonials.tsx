import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      content: "The AI voice writing tool has completely transformed my content creation process. I can now produce high-quality articles in half the time.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Project Manager",
      content: "The smart task management system has revolutionized how our team works. The AI-powered prioritization is like having a personal assistant.",
      rating: 5,
    },
    {
      name: "Emily Thompson",
      role: "Digital Artist",
      content: "As an artist, I was skeptical about AI generation, but this tool understands and enhances my creative vision instead of replacing it.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-[#D3E4FD] rounded-2xl p-12 relative overflow-hidden">
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

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Loved by <span className="text-[#2c5dcf]">Creative Professionals</span>
              </h2>
              <p className="text-lg text-gray-600">
                See what our users have to say about their experience with our tools.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 relative"
                >
                  <Quote className="w-10 h-10 text-[#2c5dcf]/20 absolute top-6 right-6" />
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#2c5dcf] text-[#2c5dcf]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
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