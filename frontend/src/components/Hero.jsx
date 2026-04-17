// // src/components/Hero.js
// import React, { useState, useEffect } from 'react';
// import './Hero.css';
// import heroVideo from '../assets/images/mainVideo.mp4'; // Import your local video

// function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [videoLoaded, setVideoLoaded] = useState(false);

//   const slides = [
//     {
//       heading: "Innovating Water Technology",
//       paragraph: "Pioneering sustainable solutions for global water challenges with cutting-edge aquatech innovations."
//     },
//     {
//       heading: "Sustainable Solutions",
//       paragraph: "Transforming agriculture and industries through eco-friendly water management systems."
//     },
//     {
//       heading: "Future of Water Conservation",
//       paragraph: "Leading the way in smart water technology for a greener, more sustainable tomorrow."
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const handleVideoLoad = () => {
//     setVideoLoaded(true);
//   };

//   const handleVideoError = () => {
//     console.error('Video failed to load. Using fallback.');
//     setVideoLoaded(false);
//   };

//   return (
//     <section className="hero-section position-relative">
//       {/* Background Video */}
//       <div className={`video-background ${videoLoaded ? 'loaded' : 'loading'}`}>
//         <video 
//           autoPlay 
//           loop 
//           muted 
//           playsInline
//           className="background-video"
//           onLoadedData={handleVideoLoad}
//           onError={handleVideoError}
//         >
//           <source src={heroVideo} type="video/mp4" />
//           {/* Fallback for unsupported formats */}
//           <source src={heroVideo.replace('.mp4', '.webm')} type="video/webm" />
//           Your browser does not support the video tag.
//         </video>
        
//         {/* Sky Blue Blur Overlay */}
//         <div className="skyblue-blur-overlay"></div>
        
//         {/* Dark Overlay */}
//         <div className="video-overlay"></div>
        
//         {/* Fallback if video fails to load */}
//         {!videoLoaded && (
//           <div className="video-fallback">
//             <div className="fallback-image"></div>
//           </div>
//         )}
//       </div>

//       {/* Content Container */}
//       <div className="container position-relative z-2">
//         <div className="hero-content text-center">
          
//           {/* Animated Text Carousel - Only Heading & Paragraph */}
//           <div className="carousel-container">
//             <div className="carousel-wrapper">
//               {slides.map((slide, index) => (
//                 <div 
//                   key={index}
//                   className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
//                 >
//                   <h2 className="carousel-heading display-2 fw-bold text-white mb-4">
//                     {slide.heading}
//                   </h2>
//                   <p className="carousel-paragraph fs-4 text-white">
//                     {slide.paragraph}
//                   </p>
//                 </div>
//               ))}
//             </div>
            
//             {/* Carousel Indicators */}
//             <div className="carousel-indicators d-flex justify-content-center mt-4">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`indicator ${index === currentSlide ? 'active' : ''}`}
//                   onClick={() => setCurrentSlide(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                 ></button>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;













// // src/components/Hero.js
// import React, { useState, useEffect } from 'react';
// import './Hero.css';
// import heroImage from '../assets/images/HomeMain.png'; // ✅ Image import

// function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       heading: "Innovating Water Technology",
//       paragraph: "Pioneering sustainable solutions for global water challenges with cutting-edge aquatech innovations."
//     },
//     {
//       heading: "Sustainable Solutions",
//       paragraph: "Transforming agriculture and industries through eco-friendly water management systems."
//     },
//     {
//       heading: "Future of Water Conservation",
//       paragraph: "Leading the way in smart water technology for a greener, more sustainable tomorrow."
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <section className="hero-section position-relative">
      
//       {/* ✅ Background Image */}
//       <div className="image-background">
//         <img src={heroImage} alt="Hero Background" className="background-image" />

//         {/* Sky Blue Blur Overlay */}
//         <div className="skyblue-blur-overlay"></div>

//         {/* Dark Overlay */}
//         <div className="video-overlay"></div>
//       </div>

//       {/* Content Container */}
//       <div className="container position-relative z-2">
//         <div className="hero-content text-center">
          
//           {/* Animated Text Carousel */}
//           <div className="carousel-container">
//             <div className="carousel-wrapper">
//               {slides.map((slide, index) => (
//                 <div 
//                   key={index}
//                   className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
//                 >
//                   <h2 className="carousel-heading display-2 fw-bold text-white mb-4">
//                     {slide.heading}
//                   </h2>
//                   <p className="carousel-paragraph fs-4 text-white">
//                     {slide.paragraph}
//                   </p>
//                 </div>
//               ))}
//             </div>
            
//             {/* Indicators */}
//             <div className="carousel-indicators d-flex justify-content-center mt-4">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`indicator ${index === currentSlide ? 'active' : ''}`}
//                   onClick={() => setCurrentSlide(index)}
//                 ></button>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

















// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroImage from '../assets/images/HomeMain.png';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      heading: <> <span className="black-text">Innovating</span> Water Technology </>,
      paragraph: "Pioneering sustainable solutions for global water challenges with cutting-edge aquatech innovations."
    },
    {
      heading: <> <span className="black-text">Sustainable</span> Solutions </>,
      paragraph: "Transforming agriculture and industries through eco-friendly water management systems."
    },
    {
      heading: <> <span className="black-text">Future of</span> Water Conservation </>,
      paragraph: "Leading the way in smart water technology for a greener, more sustainable tomorrow."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-section position-relative">
      
      <div className="image-background">
        <img src={heroImage} alt="Hero Background" className="background-image" />

        <div className="skyblue-blur-overlay"></div>
        <div className="video-overlay"></div>
      </div>

      <div className="container position-relative z-2">
        <div className="hero-content text-center">
          
          <div className="carousel-container">
            <div className="carousel-wrapper">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <h2 className="carousel-heading display-2 fw-bold mb-4">
                    {slide.heading}
                  </h2>
                  <p className="carousel-paragraph fs-4">
                    {slide.paragraph}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="carousel-indicators d-flex justify-content-center mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;