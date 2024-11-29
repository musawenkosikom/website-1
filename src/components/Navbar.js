import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-black to-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent hover:from-blue-500 hover:to-teal-500 transition-all duration-300">
              Portfolio
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a href="#about" className="hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a href="#portfolio" className="hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group">
                Portfolio
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300"
            >
              <span className="text-2xl">{isOpen ? '×' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="hover:bg-gray-700 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="hover:bg-gray-700 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              About
            </a>
            <a href="#portfolio" className="hover:bg-gray-700 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Portfolio
            </a>
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 mt-4 mx-2">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

