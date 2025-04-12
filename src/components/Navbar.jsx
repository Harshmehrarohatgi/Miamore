import React, { useState, useEffect } from 'react'

const Navbar = ({ activeSection, darkMode }) => {
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
          {/* Logo - using the same design as footer */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className={`text-wine dark:text-wine/90 
              ${scrolled ? 'p-1.5' : 'p-2'} 
              bg-white dark:bg-gray-800 rounded-full shadow-md 
              transition-all duration-300 group-hover:shadow-lg 
              border border-wine/10 dark:border-wine/20
              group-hover:border-wine/30 dark:group-hover:border-wine/40`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className={`${scrolled ? 'h-6 w-6' : 'h-8 w-8'} transition-all duration-300`} 
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            </div>

            <div className="ml-2">
              <span className={`font-dancing font-bold transition-all duration-300
                ${scrolled ? 'text-xl' : 'text-2xl'} 
                text-wine dark:text-wine/90 relative group-hover:text-wine/80 dark:group-hover:text-wine/80`}
              >
                Mi Amore
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-wine/30 dark:bg-wine/20 
                  transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
              <span className={`block text-xs font-serif tracking-wider 
                ${darkMode ? 'text-gray-400' : 'text-gray-500'} 
                transition-all duration-300
                ${scrolled ? 'text-[10px]' : 'text-xs'}`}
              >
                RISTORANTE ITALIANO
              </span>
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

            {/* Italian flag separator */}
            <div className="h-8 mx-4 flex space-x-0.5">
              <div className="w-1 bg-green-600 rounded-l-full"></div>
              <div className="w-1 bg-white dark:bg-gray-300"></div>
              <div className="w-1 bg-red-600 rounded-r-full"></div>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-wine hover:bg-wine/90 text-white px-5 py-2 rounded-lg 
                transition-all duration-300 transform hover:scale-105 font-medium shadow-sm 
                hover:shadow-md flex items-center gap-1.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Reservations
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
              
              {/* Mobile CTA with improved tap area */}
              <button 
                onClick={() => scrollToSection('contact')}
                className="mt-2 bg-wine hover:bg-wine/90 text-white py-3.5 px-4 rounded-lg 
                  transition-colors duration-300 font-medium shadow-md flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Make a Reservation
              </button>
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