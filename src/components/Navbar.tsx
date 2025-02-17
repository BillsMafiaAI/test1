
export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gray-100/50 backdrop-blur-[2px] bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-light text-[#2c5dcf]">OpenVibe</span>
          <button className="px-4 py-2 bg-[#2c5dcf] text-white rounded-lg hover:bg-[#2c5dcf]/90 transition-colors font-light">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
