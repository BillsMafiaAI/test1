
import { motion } from "framer-motion";
import { Mic, CheckSquare, Image, Search, LayoutGrid } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  name: string;
  icon: string;
}

export const FeatureCard = ({ title, description, name, icon }: FeatureCardProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "microphone":
        return <Mic className="w-6 h-6" />;
      case "check-square":
        return <CheckSquare className="w-6 h-6" />;
      case "image":
        return <Image className="w-6 h-6" />;
      case "search":
        return <Search className="w-6 h-6" />;
      case "layout-grid":
        return <LayoutGrid className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="space-y-4">
        <span className="text-sm font-light text-[#2c5dcf] py-1 px-3 bg-[#2c5dcf]/5 rounded-full">
          {name}
        </span>
        <h3 className="text-2xl font-light text-gray-900">{title}</h3>
        <p className="text-gray-600 font-light leading-relaxed">{description}</p>
        
        <motion.div 
          className="mt-6 bg-gray-900 rounded-lg p-4 text-white flex items-center justify-between group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center space-x-3">
            {getIcon(icon)}
            <span className="font-light">Try {name}</span>
          </div>
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ x: -10 }}
            animate={{ x: 0 }}
          >
            →
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
