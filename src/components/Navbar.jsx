import React, { useState, useEffect } from 'react'

const Navbar = ({ activeSection, darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'py-2 shadow-lg' : 'py-4'}
        ${darkMode ? 'bg-gray-900/95 text-white' : 'bg-cream/95 text-gray-900'} 
        backdrop-blur-md border-b ${scrolled ? (darkMode ? 'border-gray-700/50' : 'border-gray-200/50') : 'border-transparent'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with icon */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="flex items-center">
              {/* Icon image */}
              <div className={`ml-2 transition-all duration-300 ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
                <img 
                  src="/icon.png" 
                  alt="Mi Amore Icon" 
                  className={`w-full h-full object-contain ${darkMode ? 'filter invert brightness-90' : ''}`}
                />
              </div>

              {/* Logo image */}
              <div className={`transition-all duration-300 ${scrolled ? 'w-20 h-20' : 'w-20 h-20'}`}>
                <img 
                  src="/logo_Black.png" 
                  alt="Mi Amore Logo" 
                  className={`w-full h-full object-contain ${darkMode ? 'filter invert brightness-90' : ''}`}
                />
              </div>
              
              
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            {/* Navigation Links */}
            <div className="flex space-x-1 lg:space-x-2">
              {['home', 'menu', 'gallery', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize px-3 py-2 rounded-lg font-medium transition-all duration-300
                    ${
                      activeSection === item 
                        ? 'text-wine dark:text-wine/90 bg-white/50 dark:bg-white/5' 
                        : 'text-gray-600 dark:text-gray-300 hover:text-wine dark:hover:text-white hover:bg-white/30 dark:hover:bg-white/5'
                    }`}
                >
                  {item}
                  {activeSection === item && (
                    <div className="h-1 w-1/2 mx-auto bg-wine dark:bg-wine/70 mt-0.5 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle Group */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full transition-all duration-300"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`p-2 rounded-lg ${isMenuOpen ? 'bg-wine/10 text-wine' : 'text-gray-700 dark:text-white'} transition-colors`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-down">
            <div className="flex flex-col space-y-1 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-2">
              {/* Ensure proper padding for touch targets */}
              {['home', 'menu', 'gallery', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize py-3.5 px-4 rounded-lg flex items-center transition-colors duration-300
                    ${
                      activeSection === item 
                        ? 'bg-wine/10 text-wine dark:text-wine/90 font-medium' 
                        : 'text-gray-600 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-white/5'
                    }`}
                >
                  {activeSection === item && (
                    <span className="w-1 h-6 bg-wine dark:bg-wine/90 rounded-full mr-3"></span>
                  )}
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add the Italian flag bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 via-white to-red-600"></div>

      {/* Animations for mobile menu */}
      <style jsx>{`
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-down {
          animation: fadeDown 0.3s ease forwards;
        }
        
        .font-dancing {
          font-family: 'Dancing Script', cursive;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;