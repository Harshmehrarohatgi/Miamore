import React, { useState, useEffect } from 'react'

const Gallery = ({ id }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loaded, setLoaded] = useState([]);

  const galleryImages = [
    {
      src: "/home.jpg",
      alt: "Veg Tomato basil pene pasta with garlic bread",
      height: "tall" // Taller image
    },
    {
      src: "WalnutBrownies.jpg",
      alt: "Walnut Brownies",
      height: "medium"
    },
    {
      src: "VegArrabiataPennePastaWithGarlicBread.jpg",
      alt: "Veg Arrabiata Penne Pasta With Garlic Bread",
      height: "medium"
    },
    {
      src: "VirginMojito.jpg",
      alt: "Virgin Mojito",
      height: "tall"
    },
    {
      src: "SmokedChickenPizza.jpg",
      alt: "Smoked Chicken Pizza",
      height: "medium"
    },
    {
      src: "StuffedCheeseGarlicBread.jpg",
      alt: "Stuffed Cheese Garlic Bread",
      height: "medium"
    },
    {
      src: "ChickenAuthenticMixSaucePennePastaWithGarlicBread.jpg",
      alt: "Chicken Authentic Mix Sauce Penne Pasta With Garlic Bread",
      height: "medium"
    },
    {
      src: "VegetableCaesarSalad.jpg",
      alt: "Vegetable Caesar Salad",
      height: "tall"
    },
    {
      src: "NutellaTiramisu.jpg",
      alt: "Dessert plate with tiramisu",
      height: "medium"
    }
  ];

  // Track loaded images for animation
  useEffect(() => {
    const loadImages = () => {
      // Start loading images with delay for staggered effect
      galleryImages.forEach((_, index) => {
        setTimeout(() => {
          setLoaded(prev => [...prev, index]);
        }, index * 150); // 150ms delay between each image
      });
    };
    
    loadImages();
    
    // Add scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1 });
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => observer.observe(item));
    
    return () => {
      galleryItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  const openLightbox = (index) => {
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    document.body.style.overflow = ''; // Restore scrolling
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = (selectedImage + direction + galleryImages.length) % galleryImages.length;
    setSelectedImage(newIndex);
  };

  return (
    <section id={id} className="py-20 px-4 bg-cream dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-wine dark:text-white">
            Our Gallery
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Immerse yourself in the essence of Mi Amore — where every plate tells a story and every moment becomes a memory.
          </p>
        </div>
        
        {/* Pinterest-style masonry grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`gallery-item break-inside-avoid mb-4 opacity-0 transform translate-y-4 transition-all duration-700 ease-out ${
                loaded.includes(index) ? 'opacity-100 translate-y-0' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                onClick={() => openLightbox(index)}
                className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-500 group"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className={`w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${
                    image.height === 'tall' ? 'h-[500px]' : 
                    image.height === 'short' ? 'h-[250px]' : 'h-[350px]'
                  }`}
                  loading="lazy"
                />
                
                {/* Overlay with description */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-end p-4 transition-opacity duration-300">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm mb-1">{image.alt}</p>
                    <div className="h-0.5 w-10 bg-wine"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-5xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryImages[selectedImage].src} 
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded shadow-2xl" 
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <p className="font-medium">{galleryImages[selectedImage].alt}</p>
            </div>
            
            <button 
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors duration-300"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-4">
              {galleryImages.map((_, index) => (
                <button 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedImage === index ? 'bg-wine w-4' : 'bg-white/50 hover:bg-white/80'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(index);
                  }}
                />
              ))}
            </div>
            
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(-1);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(1);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Add this to the end of your tailwind CSS file or in a style tag */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.4s ease forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.95); 
          }
          to { 
            opacity: 1;
            transform: scale(1); 
          }
        }
      `}</style>
    </section>
  )
}

export default Gallery