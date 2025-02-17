
import { Mic, CheckSquare, Palette, Search, Smartphone } from "lucide-react";

export const EcosystemDisplay = () => {
  return (
    <div className="lg:col-span-3 my-20">
      <div className="bg-[#0B0E18] text-white rounded-2xl p-12 relative overflow-hidden min-h-[600px]">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(44,93,207,0.03),transparent_70%)]" />
        
        <div className="relative z-10 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* First Row */}
          <div className="col-span-3 flex justify-center mb-8">
            <div className="bg-[#1A1F2C] p-6 rounded-2xl flex items-center gap-6 w-64">
              <div className="bg-[#2c5dcf]/10 p-3 rounded-xl">
                <Mic className="w-6 h-6 text-[#2c5dcf]" />
              </div>
              <div>
                <h3 className="font-medium">Voice Writing</h3>
                <p className="text-sm text-gray-400">AI-powered dictation</p>
              </div>
            </div>
          </div>

          {/* Middle Row */}
          <div className="bg-[#1A1F2C] p-6 rounded-2xl flex items-center gap-6">
            <div className="bg-[#2c5dcf]/10 p-3 rounded-xl">
              <CheckSquare className="w-6 h-6 text-[#2c5dcf]" />
            </div>
            <div>
              <h3 className="font-medium">Tasks</h3>
              <p className="text-sm text-gray-400">Smart lists</p>
            </div>
          </div>

          <div className="bg-[#1A1F2C] p-6 rounded-2xl flex items-center gap-6">
            <div className="bg-[#2c5dcf]/10 p-3 rounded-xl">
              <Palette className="w-6 h-6 text-[#2c5dcf]" />
            </div>
            <div>
              <h3 className="font-medium">AI Art</h3>
              <p className="text-sm text-gray-400">Image gen</p>
            </div>
          </div>

          <div className="bg-[#1A1F2C] p-6 rounded-2xl flex items-center gap-6">
            <div className="bg-[#2c5dcf]/10 p-3 rounded-xl">
              <Search className="w-6 h-6 text-[#2c5dcf]" />
            </div>
            <div>
              <h3 className="font-medium">Search</h3>
              <p className="text-sm text-gray-400">AI-powered</p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="col-span-3 flex justify-center mt-8">
            <div className="bg-[#1A1F2C] p-6 rounded-2xl flex items-center gap-6 w-64">
              <div className="bg-[#2c5dcf]/10 p-3 rounded-xl">
                <Smartphone className="w-6 h-6 text-[#2c5dcf]" />
              </div>
              <div>
                <h3 className="font-medium">Mobile Apps</h3>
                <p className="text-sm text-gray-400">Cross-platform</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto text-center mt-16">
          Our suite of tools work seamlessly together, creating a powerful ecosystem 
          that enhances your productivity and creativity.
        </p>
      </div>
    </div>
  );
};
