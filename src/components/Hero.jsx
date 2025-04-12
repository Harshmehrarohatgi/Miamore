import React, { useEffect, useState, useRef } from 'react';

const Hero = ({ id }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Set loaded state after a small delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Create a subtle parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const translateY = scrollPosition * 0.4; // Adjust speed of parallax
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id={id} className="relative h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={heroRef} className="w-full h-[120%]">
          <img 
            src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Italian dining ambiance" 
            className="w-full h-full object-cover animate-slow-zoom"
          />
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          
          {/* Additional Italian-themed decorative elements */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h20v20H0V0zm10%2017a7%207%200%201%200%200-14%207%207%200%200%200%200%2014z%22%20fill%3D%22%23fff%22%20fill-opacity%3D%22.05%22%2F%3E%3C%2Fsvg%3E')] opacity-30"></div>
        </div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        {/* Logo accent */}
        <div className={`mb-6 transform transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="text-wine bg-white/90 p-4 rounded-full shadow-xl border-4 border-wine/20 animate-float">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
            </svg>
          </div>
        </div>
        
        {/* Animated heading with hover effect */}
        <h1 
          className={`font-dancing text-5xl sm:text-6xl md:text-8xl mb-2 text-center transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } group cursor-default px-4`}
        >
          <span className="text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.5)] transition-opacity duration-300 group-hover:opacity-90">Mi</span>
          <span className="text-white transition-colors duration-500 group-hover:text-wine"> Amore</span>
        </h1>
        
        {/* Animated separator */}
        <div className={`flex items-center justify-center gap-3 mb-4 transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
          <div className="h-0.5 w-12 bg-green-600 rounded-full"></div>
          <div className="h-1 w-1 bg-white rounded-full animate-pulse"></div>
          <div className="h-0.5 w-12 bg-red-600 rounded-full"></div>
        </div>
        
        {/* Tagline with staggered text reveal */}
        <p className={`text-xl md:text-2xl mb-8 text-center font-light tracking-wider transition-all duration-1000 delay-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="italic">Taste the Romance of</span> <span className="font-semibold">Italy</span>
        </p>
        
        {/* Badge */}
        <div className={`mb-8 transition-all duration-1000 delay-700 ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="bg-wine/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20 animate-pulse-subtle">
            Authentic Italian Cuisine Since 1995
          </div>
        </div>
        
        {/* Order buttons with staggered animation */}
        <div className={`flex flex-col sm:flex-row gap-4 mt-4 px-6 w-full sm:w-auto max-w-md mx-auto sm:max-w-none sm:mx-0 transition-all duration-1000 delay-900 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://www.swiggy.com/city/noida-1/mi-amore-pizzaria-golf-course-rest1046353" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-wine hover:bg-wine/80 text-white px-5 sm:px-7 py-3.5 rounded-xl transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg hover:shadow-wine/30 flex items-center justify-center gap-3 w-full"
          >
            <span>Order on Swiggy</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a 
            href="https://www.zomato.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 sm:px-7 py-3.5 rounded-xl transition-all duration-300 text-center backdrop-blur-sm transform hover:scale-105 hover:shadow-lg hover:shadow-white/10 flex items-center justify-center gap-3 w-full"
          >
            <span>Order on Zomato</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        {/* Floating badges */}
        <div className="absolute top-1/3 -left-6 md:left-10 transform rotate-12 animate-float-delayed">
          <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs shadow-lg">
            ★★★★★ 4.9
          </div>
        </div>
        
        <div className="absolute bottom-1/3 -right-6 md:right-10 transform -rotate-12 animate-float-slow">
          <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs shadow-lg">
            #1 in City
          </div>
        </div>
        
        {/* Scroll indicator with enhanced animation */}
        <div className={`absolute bottom-8 transition-all duration-1000 delay-1200 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/70">Explore Menu</span>
            <button 
              onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
              className="text-white relative group"
              aria-label="Scroll to menu section"
            >
              <div className="h-10 w-6 border-2 border-white/50 rounded-full flex justify-center py-2 group-hover:border-white transition-colors">
                <div className="w-1 h-1 bg-white rounded-full animate-scroll-down"></div>
              </div>
              <div className="w-3 h-3 absolute -bottom-3 left-1.5 border-b-2 border-r-2 border-white/50 transform rotate-45 group-hover:border-white transition-colors"></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Add fancy design elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-black/60"></div>
      
      {/* Italian flag accent on the side */}
      <div className="absolute top-1/4 left-0 h-36 w-1.5 hidden md:block">
        <div className="w-full h-1/3 bg-green-600"></div>
        <div className="w-full h-1/3 bg-white"></div>
        <div className="w-full h-1/3 bg-red-600"></div>
      </div>
      
      <div className="absolute top-1/4 right-0 h-36 w-1.5 hidden md:block">
        <div className="w-full h-1/3 bg-green-600"></div>
        <div className="w-full h-1/3 bg-white"></div>
        <div className="w-full h-1/3 bg-red-600"></div>
      </div>
      
      {/* Curved divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 50" className="w-full h-auto">
          <path 
            fill={`${document.documentElement.classList.contains('dark') ? '#1f2937' : '#fff'}`} 
            fillOpacity="1" 
            d="M0,32L60,32C120,32,240,32,360,26.7C480,21,600,11,720,16C840,21,960,43,1080,42.7C1200,43,1320,21,1380,10.7L1440,0L1440,50L1440,50L1380,50C1320,50,1200,50,1080,50C960,50,840,50,720,50C600,50,480,50,360,50C240,50,120,50,60,50L0,50Z">
          </path>
        </svg>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        .font-dancing {
          font-family: 'Dancing Script', cursive;
        }
        
        @keyframes slow-zoom {
          0% {
            transform: scale(1.01);
          }
          100% {
            transform: scale(1.15);
          }
        }
        
        .animate-slow-zoom {
          animation: slow-zoom 20s forwards ease-in-out;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-float {
          animation: float 5s infinite ease-in-out;
        }
        
        .animate-float-delayed {
          animation: float 7s infinite ease-in-out 1s;
        }
        
        .animate-float-slow {
          animation: float 8s infinite ease-in-out 0.5s;
        }
        
        @keyframes pulse-subtle {
          0% {
            opacity: 0.9;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.9;
          }
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 3s infinite ease-in-out;
        }
        
        @keyframes scroll-down {
          0% {
            transform: translateY(-3px);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translateY(3px);
            opacity: 0;
          }
        }
        
        .animate-scroll-down {
          animation: scroll-down 1.5s infinite ease;
        }
      `}</style>
    </section>
  );
};

export default Hero;