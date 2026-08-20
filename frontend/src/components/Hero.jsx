








// // src/components/Hero.js
// import React, { useState, useEffect } from 'react';
// import './Hero.css';

// function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       heading: (
//         <>
//           <span className="highlight-text">Building the Intelligence Layer</span>
//           <br />
//           <span className="white-text">for Aquaculture</span>
//         </>
//       ),
//       paragraph:
//         "Connecting ponds, farmers, AI, satellite, weather and water intelligence to make aquaculture more predictive, profitable and sustainable."
//     },
//     {
//       heading: (
//         <>
//           <span className="highlight-text">Making Every Pond</span>
//           <br />
//           <span className="white-text">Smarter</span>
//         </>
//       ),
//       paragraph:
//         "AI-powered intelligence that turns farm, water, weather and environmental data into better aquaculture decisions."
//     },
//     {
//       heading: (
//         <>
//           <span className="highlight-text">The Intelligence Layer</span>
//           <br />
//           <span className="white-text">for Aquaculture</span>
//         </>
//       ),
//       paragraph:
//         "One intelligent platform connecting farmers, ponds, AI, environmental data and the aquaculture ecosystem."
//     },
//     {
//       heading: (
//         <>
//           <span className="highlight-text">The Future of Aquaculture</span>
//           <br />
//           <span className="white-text">Runs on Intelligence</span>
//         </>
//       ),
//       paragraph:
//         "Combining AI, satellite, weather, water and farm data to transform how aquaculture is monitored, managed and scaled."
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

//       {/* Video Background */}
//       <div className="image-background">

//         <video
//           className="background-image"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//         >
//           <source
//             src="https://res.cloudinary.com/p8fs2e1n/video/upload/home.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>

//         <div className="skyblue-blur-overlay"></div>
//         <div className="video-overlay"></div>

//       </div>

//       {/* Hero Content */}
//       <div className="container position-relative z-2">
//         <div className="hero-content text-center">

//           <div className="carousel-container">

//             <div className="carousel-wrapper">

//               {slides.map((slide, index) => (
//                 <div
//                   key={index}
//                   className={`carousel-slide ${
//                     index === currentSlide ? 'active' : ''
//                   }`}
//                 >
//                   <h2 className="carousel-heading">
//                     {slide.heading}
//                   </h2>

//                   <p className="carousel-paragraph">
//                     {slide.paragraph}
//                   </p>
//                 </div>
//               ))}

//             </div>

//             <div className="carousel-indicators d-flex justify-content-center mt-4">

//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`indicator ${
//                     index === currentSlide ? 'active' : ''
//                   }`}
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
import React, { useEffect, useState } from "react";
import "./Hero.css";

/*
  Cloudinary automatically optimizes delivery:
  - f_auto  = best supported format
  - q_auto   = automatic quality
  - vc_auto  = automatic video codec
*/
const VIDEO_URL =
  "https://res.cloudinary.com/p8fs2e1n/video/upload/f_auto,q_auto,vc_auto/home.mp4";

const slides = [
  {
    highlight: "Building the Intelligence Layer",
    white: "for Aquaculture",
    paragraph:
      "Connecting ponds, farmers, AI, satellite, weather and water intelligence to make aquaculture more predictive, profitable and sustainable.",
  },
  {
    highlight: "Making Every Pond",
    white: "Smarter",
    paragraph:
      "AI-powered intelligence that turns farm, water, weather and environmental data into better aquaculture decisions.",
  },
  {
    highlight: "The Intelligence Layer",
    white: "for Aquaculture",
    paragraph:
      "One intelligent platform connecting farmers, ponds, AI, environmental data and the aquaculture ecosystem.",
  },
  {
    highlight: "The Future of Aquaculture",
    white: "Runs on Intelligence",
    paragraph:
      "Combining AI, satellite, weather, water and farm data to transform how aquaculture is monitored, managed and scaled.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Respect users who prefer reduced motion
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="hero-section position-relative">
      {/* =========================================
          VIDEO BACKGROUND
      ========================================= */}
      <div className="image-background">
        <video
          className="background-image"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          disablePictureInPicture
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        <div
          className="skyblue-blur-overlay"
          aria-hidden="true"
        />

        <div
          className="video-overlay"
          aria-hidden="true"
        />
      </div>

      {/* =========================================
          HERO CONTENT
      ========================================= */}
      <div className="container position-relative z-2">
        <div className="hero-content text-center">
          <div className="carousel-container">
            <div className="carousel-wrapper">
              {slides.map((slide, index) => {
                const isActive = index === currentSlide;

                return (
                  <div
                    key={index}
                    className={`carousel-slide ${
                      isActive ? "active" : ""
                    }`}
                    aria-hidden={!isActive}
                  >
                    <h1 className="carousel-heading">
                      <span className="highlight-text">
                        {slide.highlight}
                      </span>

                      <br />

                      <span className="white-text">
                        {slide.white}
                      </span>
                    </h1>

                    <p className="carousel-paragraph">
                      {slide.paragraph}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* =========================================
                CAROUSEL INDICATORS
            ========================================= */}
            <div
              className="carousel-indicators d-flex justify-content-center mt-4"
              role="tablist"
              aria-label="Hero slides"
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`indicator ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-selected={index === currentSlide}
                  role="tab"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;






