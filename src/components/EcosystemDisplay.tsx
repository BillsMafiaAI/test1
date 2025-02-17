
import { Mic, CheckSquare, Palette, Search, Smartphone } from "lucide-react";

export const EcosystemDisplay = () => {
  return (
    <div className="lg:col-span-3 my-20">
      <div className="bg-[#D3E4FD] text-[#221F26] rounded-2xl p-12 relative overflow-hidden min-h-[600px]">
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
        
        <div className="relative z-10 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* First Row */}
          <div className="col-span-3 flex justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl flex items-center gap-6 w-64">
              <div className="bg-[#2c5dcf]/10 p-3 rounded-xl">
                <Mic className="w-6 h-6 text-[#2c5dcf]" />
              </div>
              <div>
                <h3 className="font-medium text-[#221F26]">Voice Writing</h3>
                <p className="text-sm text-gray-600">AI-powered dictation</p>
              </div>
            </div>
          </div>

          {/* Middle Row */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl flex items-center gap-6">
            <div className="bg-[#2c5dcf]/10 p-3 rounded-xl">
              <CheckSquare className="w-6 h-6 text-[#2c5dcf]" />
            </div>
            <div>
              <h3 className="font-medium text-[#221F26]">Tasks</h3>
              <p className="text-sm text-gray-600">Smart lists</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl flex items-center gap-6">
            <div className="bg-[#2c5dcf]/10 p-3 rounded-xl">
              <Palette className="w-6 h-6 text-[#2c5dcf]" />
            </div>
            <div>
              <h3 className="font-medium text-[#221F26]">AI Art</h3>
              <p className="text-sm text-gray-600">Image gen</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl flex items-center gap-6">
            <div className="bg-[#2c5dcf]/10 p-3 rounded-xl">
              <Search className="w-6 h-6 text-[#2c5dcf]" />
            </div>
            <div>
              <h3 className="font-medium text-[#221F26]">Search</h3>
              <p className="text-sm text-gray-600">AI-powered</p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="col-span-3 flex justify-center mt-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl flex items-center gap-6 w-64">
              <div className="bg-[#2c5dcf]/10 p-3 rounded-xl">
                <Smartphone className="w-6 h-6 text-[#2c5dcf]" />
              </div>
              <div>
                <h3 className="font-medium text-[#221F26]">Mobile Apps</h3>
                <p className="text-sm text-gray-600">Cross-platform</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[#221F26] font-medium text-lg max-w-2xl mx-auto text-center mt-16">
          Our suite of tools work seamlessly together, creating a powerful ecosystem 
          that enhances your productivity and creativity.
        </p>
      </div>
    </div>
  );
};
