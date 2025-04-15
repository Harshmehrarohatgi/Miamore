import React, { useEffect, useRef } from 'react'

const About = ({ id }) => {
  const sectionRef = useRef(null);
  const textContentRef = useRef(null);
  const imageGroupRef = useRef(null);
  const headingRef = useRef(null);
  
  useEffect(() => {
    // Create intersection observers for scroll-triggered animations
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // trigger when 10% of element is visible
    };
    
    // Heading animation
    const headingObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-down');
          headingObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Text content animation
    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger the paragraph animations
          const paragraphs = entry.target.querySelectorAll('p, h3, .mb-8');
          paragraphs.forEach((paragraph, index) => {
            setTimeout(() => {
              paragraph.classList.add('animate-fade-right');
            }, index * 200); // 200ms delay between each paragraph
          });
          textObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Image animation
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const images = entry.target.querySelectorAll('img');
          images.forEach((img, index) => {
            setTimeout(() => {
              img.classList.add('animate-fade-left');
            }, index * 300); // 300ms delay between each image
          });
          imageObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Apply observers to elements
    if (headingRef.current) headingObserver.observe(headingRef.current);
    if (textContentRef.current) textObserver.observe(textContentRef.current);
    if (imageGroupRef.current) imageObserver.observe(imageGroupRef.current);
    
    // Cleanup
    return () => {
      if (headingRef.current) headingObserver.unobserve(headingRef.current);
      if (textContentRef.current) textObserver.unobserve(textContentRef.current);
      if (imageGroupRef.current) imageObserver.unobserve(imageGroupRef.current);
    };
  }, []);
  
  return (
    <section 
      id={id} 
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-cream to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto">
        <h2 
          ref={headingRef}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 sm:mb-16 text-center opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
        >
          <span className="text-wine dark:text-wine/90">Our</span> <span className="text-olive dark:text-cream">Story</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          <div 
            ref={textContentRef}
            className="w-full lg:w-1/2 order-2 lg:order-1 space-y-5 sm:space-y-6 px-1 sm:px-0"
          >
            <h3 className="text-2xl font-bold text-olive dark:text-cream opacity-0 transform translate-x-8 transition-all duration-700 ease-out">
              The Heart of Mi Amore
            </h3>
            <p className="text-gray-700 dark:text-gray-300 opacity-0 transform translate-x-8 transition-all duration-700 ease-out">
            At Mi Amore Pizzaria, our journey began with a simple love for authentic Italian cuisine — rich flavors, hand-tossed dough, and the comforting aroma of freshly baked pizzas. What started as a passion for crafting perfect slices turned into a cloud kitchen dedicated to delivering the heart of Italy right to your doorstep.
            </p>
            <p className="text-gray-700 dark:text-gray-300 opacity-0 transform translate-x-8 transition-all duration-700 ease-out">
            We believe that great food doesn’t need a grand dining hall — it just needs genuine ingredients, a touch of love, and a commitment to quality. Every dish we prepare is a celebration of tradition and taste, made fresh to order with carefully selected ingredients and a deep respect for Italian culinary roots.
            </p>
            <p className="text-gray-700 dark:text-gray-300 opacity-0 transform translate-x-8 transition-all duration-700 ease-out">
            Whether you're craving a classic Margherita or a gourmet twist on a traditional favorite, Mi Amore Pizzaria is here to bring you a slice of Italy, wherever you are.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 opacity-0 transform translate-x-8 transition-all duration-700 ease-out">
            Buon appetito!
            </p>
            
            <div className="pt-6 opacity-0 transform translate-x-8 transition-all duration-700 ease-out">
              <h3 className="text-2xl font-bold mb-4 text-olive dark:text-cream">Meet Our Chef</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Chef Alessandro brings over 25 years of culinary expertise to Mi Amore. Trained in Florence and having worked in Michelin-starred restaurants across Europe, he combines traditional techniques with innovative approaches to create dishes that are both authentic and unique.
              </p>
            </div>
            
            <div className="pt-6 flex flex-wrap gap-4 opacity-0 transform translate-x-8 transition-all duration-700 ease-out">
              <div className="px-6 py-3 bg-wine/10 dark:bg-wine/20 rounded-full text-wine dark:text-cream font-medium">
                Family Recipes
              </div>
              <div className="px-6 py-3 bg-olive/10 dark:bg-olive/20 rounded-full text-olive dark:text-cream font-medium">
                Locally Sourced
              </div>
              <div className="px-6 py-3 bg-amber-500/10 dark:bg-amber-500/20 rounded-full text-amber-700 dark:text-amber-200 font-medium">
                Italian Imports
              </div>
            </div>
          </div>
          
          <div 
            ref={imageGroupRef}
            className="w-full lg:w-1/2 order-1 lg:order-2 px-4 sm:px-0 -mx-4 sm:mx-0"
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-wine/30 dark:border-wine/50 rounded-full opacity-0 transform translate-x-8 transition-all duration-700 ease-out"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border-2 border-olive/30 dark:border-olive/50 rounded-full opacity-0 transform translate-x-8 transition-all duration-700 ease-out"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Restaurant interior" 
                className="w-full h-auto rounded-lg shadow-xl mb-3 sm:mb-6 opacity-0 transform translate-x-8 transition-all duration-700 ease-out"
              />
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Chef preparing food" 
                className="w-3/4 h-auto rounded-lg shadow-xl ml-auto -mt-8 sm:-mt-16 relative z-10 opacity-0 transform translate-x-8 transition-all duration-700 ease-out border-4 border-white dark:border-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        .animate-fade-down {
          animation: fadeDown 0.8s ease forwards;
        }
        
        .animate-fade-right {
          animation: fadeRight 0.8s ease forwards;
        }
        
        .animate-fade-left {
          animation: fadeLeft 0.8s ease forwards;
        }
        
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}

export default About