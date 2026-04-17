



// import React, { useEffect, useState } from 'react';
// import './Presence.css';

// // Import images
// import indiaMap from '../assets/images/IndiaMap.png';
// import likelihoodBg from '../assets/images/Likelihood.png';
// import impactBg from '../assets/images/impact.png';
// import carbonBg from '../assets/images/carbon.png';

// function Presence() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   // 3 cards with background images
//   const cardsData = [
//     { 
//       id: 'likelihood', 
//       title: 'Livelihood',
//       bgImage: likelihoodBg
//     },
//     { 
//       id: 'impact', 
//       title: 'Impact',
//       bgImage: impactBg
//     },
//     { 
//       id: 'carbon', 
//       title: 'Carbon',
//       bgImage: carbonBg
//     }
//   ];

//   // Animation effect for scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//       }
//     );

//     document.querySelectorAll('.presence-new-card-wrapper').forEach(el => {
//       observer.observe(el);
//     });

//     document.querySelectorAll('.presence-animate-on-scroll').forEach(el => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="presence-section-unique">
//       <div className="presence-container-unique">
//         {/* Simple Layout: Image Left, Heading Right */}
//         <div className="presence-main-layout">
//           {/* Image on Left Side */}
//           <div className="presence-image-left">
//             <div className="presence-simple-image-wrapper presence-animate-on-scroll">
//               <img 
//                 src={indiaMap} 
//                 alt="India Map showing our sustainable impact" 
//                 className="presence-simple-image"
//               />
//             </div>
//           </div>
          
//           {/* Heading on Right Side */}
//           <div className="presence-heading-right">
//             <div className="presence-heading-content presence-animate-on-scroll presence-delay-200">
//               <h2 className="presence-main-title">
//                 Our Sustainable Impact Across India
//               </h2>
//               <p className="presence-subtitle">
//                 Strengthening our Presence in 3 States & Counting…
//               </p>
//             </div>
//           </div>
//         </div>
        
//         {/* Cards Section - Images with Headings Below */}
//         <div className="presence-cards-section">
//           <div className="presence-new-cards-wrapper">
//             <div className="presence-new-cards-container">
//               {cardsData.map((card) => (
//                 <div 
//                   key={card.id} 
//                   className="presence-new-card-wrapper"
//                   data-card={card.id}
//                   onMouseEnter={() => setHoveredCard(card.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                 >
//                   <div className="presence-card-container">
//                     {/* Pure Image */}
//                     <div 
//                       className={`presence-pure-image ${hoveredCard === card.id ? 'hovered' : ''}`}
//                       style={{ backgroundImage: `url(${card.bgImage})` }}
//                     >
//                       {/* Hover Content - Only visible on hover */}
//                       <div className="presence-hover-content">
//                         <h3 className="presence-hover-title">{card.title}</h3>
//                         <p className="presence-hover-description">
//                           {card.id === 'likelihood' ? 'Our innovative solutions demonstrate high probability of success across diverse agricultural landscapes.' :
//                            card.id === 'impact' ? 'Creating substantial positive change in rural economies through technology-driven interventions.' :
//                            'Reducing carbon footprint through sustainable agricultural practices and green technologies.'}
//                         </p>
//                       </div>
//                     </div>
                    
//                     {/* Heading Below Image - Black Color */}
//                     <div className="presence-image-heading">
//                       {card.title}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Presence;













// import React, { useEffect, useState } from 'react';
// import './Presence.css';

// import indiaMap from '../assets/images/IndiaMap.png';
// import likelihoodBg from '../assets/images/HomeMain.png';
// import impactBg from '../assets/images/HomeMain2.png';
// import carbonBg from '../assets/images/HomeMain.png';

// function Presence() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const cardsData = [
//     { id: 'likelihood', title: 'Livelihood', bgImage: likelihoodBg },
//     { id: 'impact', title: 'Impact', bgImage: impactBg },
//     { id: 'carbon', title: 'Carbon', bgImage: carbonBg }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) entry.target.classList.add('visible');
//       });
//     });

//     document.querySelectorAll('.presence-new-card-wrapper').forEach(el => observer.observe(el));
//     document.querySelectorAll('.presence-animate-on-scroll').forEach(el => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="presence-section-unique">
//       <div className="presence-container-unique">

//         {/* TOP CENTER HEADING */}
//         <h2 className="presence-top-title">
//           Our Impact Across <span>India</span>
//         </h2>

//         {/* MAIN BOX (image + text) */}
//         <div className="presence-main-box">

//           {/* LEFT IMAGE */}
//           <div className="presence-image-left">
//             <img src={indiaMap} alt="India Map" className="presence-simple-image" />
//           </div>

//           {/* RIGHT TEXT */}
//           <div className="presence-text-right">

//             <h3 className="presence-inner-heading">
//               Reaching Communities That Need It Most
//             </h3>

//             <p>
//               Essential Aquatech operates across five key states in India, bringing safe drinking
//               water solutions to communities that face acute water scarcity and contamination challenges.
//             </p>

//             <p>
//               From the arsenic-affected regions of West Bengal and Bihar to the fluoride-prone areas
//               of Gujarat, our technology-driven water purification plants are transforming lives.
//             </p>

//           </div>
//         </div>

//         {/* CARDS */}
//         <div className="presence-cards-section">
//           <div className="presence-new-cards-container">

//             {cardsData.map((card) => (
//               <div
//                 key={card.id}
//                 className="presence-new-card-wrapper"
//                 onMouseEnter={() => setHoveredCard(card.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <div className="presence-card-container">

//                   <div
//                     className={`presence-pure-image ${hoveredCard === card.id ? 'hovered' : ''}`}
//                     style={{ backgroundImage: `url(${card.bgImage})` }}
//                   >

//                     {/* TEXT LEFT BOTTOM */}
//                     <div className="presence-card-title">
//                       {card.title}
//                     </div>

//                     {/* HOVER */}
//                     <div className="presence-hover-content">
//                       <h3>{card.title}</h3>
//                       <p>
//                         {card.id === 'likelihood'
//                           ? 'Our innovative solutions demonstrate high success across agricultural landscapes.'
//                           : card.id === 'impact'
//                           ? 'Creating strong positive change through technology-driven interventions.'
//                           : 'Reducing carbon footprint using sustainable and green technologies.'}
//                       </p>
//                     </div>

//                   </div>

//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Presence;

















import React, { useEffect, useState } from 'react';
import './Presence.css';

import indiaMap from '../assets/images/IndiaMap.png';
import likelihoodBg from '../assets/images/HomeMain.png';
import impactBg from '../assets/images/HomeMain2.png';
import carbonBg from '../assets/images/HomeMain.png';

function Presence() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardsData = [
    { id: 'likelihood', title: 'Livelihood', bgImage: likelihoodBg },
    { id: 'impact', title: 'Impact', bgImage: impactBg },
    { id: 'carbon', title: 'Carbon', bgImage: carbonBg }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.animate').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="presence-section-unique">
      <div className="presence-container-unique">

        {/* TOP HEADING */}
        <h2 className="presence-top-title animate fade-down">
          Our Impact Across <span>India</span>
        </h2>

        {/* MAIN BOX */}
        <div className="presence-main-box">

          <div className="presence-image-left animate fade-left">
            <img src={indiaMap} alt="India Map" className="presence-simple-image" />
          </div>

          <div className="presence-text-right animate fade-right">
            <h3 className="presence-inner-heading">
              Reaching Communities That Need It Most
            </h3>

            <p>
              Essential Aquatech operates across five key states in India, bringing safe drinking
              water solutions to communities that face acute water scarcity and contamination challenges.
            </p>

            <p>
              From the arsenic-affected regions of West Bengal and Bihar to the fluoride-prone areas
              of Gujarat, our technology-driven water purification plants are transforming lives.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="presence-cards-section">
          <div className="presence-new-cards-container">

           {cardsData.map((card, index) => {
  const directions = ["fade-left", "fade-up", "fade-right"]; // 👈 different directions

  return (
    <div
      key={card.id}
      className={`presence-new-card-wrapper animate ${directions[index]} delay-${index}`}
      onMouseEnter={() => setHoveredCard(card.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="presence-card-container">

        <div
          className={`presence-pure-image ${hoveredCard === card.id ? 'hovered' : ''}`}
          style={{ backgroundImage: `url(${card.bgImage})` }}
        >

          {/* Bottom text (hide on hover) */}
          {hoveredCard !== card.id && (
            <div className="presence-card-title">
              {card.title}
            </div>
          )}

          {/* Hover */}
          <div className="presence-hover-content">
            <h3>{card.title}</h3>
            <p>
              {card.id === 'likelihood'
                ? 'Our innovative solutions demonstrate high success across agricultural landscapes.'
                : card.id === 'impact'
                ? 'Creating strong positive change through technology-driven interventions.'
                : 'Reducing carbon footprint using sustainable and green technologies.'}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
})}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Presence;