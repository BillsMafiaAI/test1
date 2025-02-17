
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  name: string;
}

export const FeatureCard = ({ title, description, name }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="space-y-3">
        <span className="text-sm font-medium text-vibe-blue py-1 px-3 bg-blue-50 rounded-full">
          {name}
        </span>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};
