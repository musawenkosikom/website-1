const Footer = () => {
  return (
    <footer className="bg-black py-12 text-blue-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400">
              Building amazing web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">About</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-blue-400">Connect</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://github.com/musawenkosikom/musawenkosikom" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                GitHub
              </a>
              <a href="https://www.instagram.com/naija.boii/profilecard/?igsh=MW9vMnZ6anRnYXd4ag==" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                Instagram
              </a>
              <a href="https://www.facebook.com/share/1ERX52oFmn/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                Facebook
              </a>
              <a href="https://www.tiktok.com/@naija.boiii?_t=8rmAquDt44O&_r=1" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                TikTok
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 