
import { Circle, Square } from "lucide-react";

export const EcosystemDisplay = () => {
  return (
    <div className="lg:col-span-3 my-20">
      <div className="bg-[#0B0E18] text-white rounded-2xl p-12 relative overflow-hidden min-h-[600px] flex flex-col items-center justify-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(44,93,207,0.05),transparent_70%)]" />
        
        <div className="relative z-10 w-full h-[400px]">
          {/* Central Element */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-[#2c5dcf] p-1">
                <div className="w-full h-full rounded-full bg-[#0B0E18] flex items-center justify-center">
                  <Circle className="w-8 h-8 text-[#2c5dcf]" />
                </div>
              </div>
              <div className="absolute -inset-4 border border-[#2c5dcf]/20 rounded-full" />
            </div>
          </div>

          {/* Static App Icons */}
          {[
            { x: "-120px", y: "-80px", icon: "🎙️" },
            { x: "120px", y: "-80px", icon: "✅" },
            { x: "-160px", y: "60px", icon: "🎨" },
            { x: "160px", y: "60px", icon: "🔍" },
            { x: "0px", y: "120px", icon: "📱" }
          ].map((app, index) => (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(calc(-50% + ${app.x}), calc(-50% + ${app.y}))`
              }}
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                <span className="text-xl">{app.icon}</span>
              </div>
            </div>
          ))}

          {/* Static Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {[
              { x1: "50%", y1: "50%", x2: "35%", y2: "35%" },
              { x1: "50%", y1: "50%", x2: "65%", y2: "35%" },
              { x1: "50%", y1: "50%", x2: "30%", y2: "65%" },
              { x1: "50%", y1: "50%", x2: "70%", y2: "65%" },
              { x1: "50%", y1: "50%", x2: "50%", y2: "80%" }
            ].map((line, index) => (
              <line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="rgba(44,93,207,0.2)"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto text-center mt-8">
          Our suite of tools work seamlessly together, creating a powerful ecosystem 
          that enhances your productivity and creativity.
        </p>
      </div>
    </div>
  );
};
