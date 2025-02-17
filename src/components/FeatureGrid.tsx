
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";

interface Feature {
  name: string;
  title: string;
  description: string;
  icon: string;
}

interface FeatureGridProps {
  features: Feature[];
  startIndex: number;
  endIndex: number;
  className?: string;
}

export const FeatureGrid = ({ features, startIndex, endIndex, className = "" }: FeatureGridProps) => {
  return (
    <motion.div className={className}>
      {features.slice(startIndex, endIndex).map((feature, index) => (
        <motion.div
          key={feature.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: (index + startIndex) * 0.1 }}
        >
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </motion.div>
  );
};
