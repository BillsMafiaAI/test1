
import { motion } from "framer-motion";

export const Hero = () => {
  return (
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
  );
};
