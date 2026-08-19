



import React, { useEffect, useState } from 'react';
import './Presence.css';

// Cloudinary image URL for Asia map
const indiaMap =
  'https://res.cloudinary.com/p8fs2e1n/image/upload/World1.png';

// ANIMATED NUMBER COMPONENT - Premium smooth version
function AnimatedNumber({ value, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const match = value.match(/^(\d+)(.*)$/);

    if (!match) return;

    const target = Number(match[1]);
    const suffix = match[2];

    let startTime = null;

    // Thoda slow = more premium/smooth feel
    const duration = 3000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Very smooth ease-out
      const easedProgress =
        1 - Math.pow(1 - progress, 4);

      const currentValue =
        target * easedProgress;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTime = null;
    };
  }, [start, value]);

  return (
    <>
      {count < 10 && count % 1 !== 0
        ? count.toFixed(1)
        : Math.floor(count)}
      {value.replace(/^\d+/, '')}
    </>
  );
}

function Presence() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // IMPACT STATS
  const impactStats = [
    {
      value: '7M+',
      label: 'Farmers empowered through intelligent aquaculture solutions'
    },
    {
      value: '30M+',
      label: 'Acres of aquaculture ecosystems analyzed'
    },
    {
      value: '25%',
      label: 'Improvement in farm productivity through data-driven insights'
    },
    {
      value: '30%',
      label: 'Potential increase in farmer income through smarter decisions'
    }
  ];

  // CLOUDINARY CARDS
  const cardsData = [
    {
      id: 'livelihood',
      bgImage:
        'https://res.cloudinary.com/p8fs2e1n/image/upload/live.png',
      description:
        'We empower farmers with actionable intelligence that helps them make better decisions, improve farm productivity, reduce uncertainty, and build more resilient livelihoods.'
    },
    {
      id: 'impact',
      bgImage:
        'https://res.cloudinary.com/p8fs2e1n/image/upload/impact.png',
      description:
        'By combining AI, satellite, weather, water, and farm data, we turn complex information into measurable outcomes for more productive, sustainable, and resilient aquaculture.'
    },
    {
      id: 'finance',
      bgImage:
        'https://res.cloudinary.com/p8fs2e1n/image/upload/finance.png',
      description:
        'We help farmers and aquaculture businesses make smarter financial decisions by improving profitability, optimizing resources, and reducing avoidable risks across the farm.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll('.animate')
      .forEach((el) => observer.observe(el));

    // Stats counter observer
    const statsSection = document.querySelector(
      '.presence-impact-stats'
    );

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
            statsObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.35
      }
    );

    if (statsSection) {
      statsObserver.observe(statsSection);
    }

    return () => {
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  return (
    <section className="presence-section-unique">
      <div className="presence-container-unique">

        {/* TOP HEADING */}
        <h2 className="presence-top-title animate fade-down">
          Our Impact Across <span>World</span>
        </h2>

        {/* IMPACT STATS */}
        <div className="presence-impact-stats">
          {impactStats.map((stat, index) => (
            <div
              className={`presence-stat-item animate fade-up delay-${index}`}
              key={index}
            >
              <div className="presence-stat-line"></div>

              <div className="presence-stat-value">
                <AnimatedNumber
                  value={stat.value}
                  start={statsVisible}
                />
              </div>

              <div className="presence-stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ASIA MAP */}
        <div className="presence-main-box">
          <div className="presence-image-center animate fade-up">
            <img
              src={indiaMap}
              alt="Asia Map"
              className="presence-simple-image"
            />
          </div>
        </div>

        {/* CARDS */}
        <div className="presence-cards-section">
          <div className="presence-new-cards-container">

            {cardsData.map((card, index) => {
              const directions = [
                'fade-left',
                'fade-up',
                'fade-right'
              ];

              return (
                <div
                  key={card.id}
                  className={`presence-new-card-wrapper card-${card.id} animate ${directions[index]} delay-${index}`}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="presence-card-container">

                    <div
                      className={`presence-pure-image ${
                        hoveredCard === card.id ? 'hovered' : ''
                      }`}
                      style={{
                        backgroundImage: `url(${card.bgImage})`
                      }}
                    >

                      {/* Bottom text */}
                      {hoveredCard !== card.id && (
                        <div className="presence-card-title">
                          {card.title}
                        </div>
                      )}

                      {/* HOVER CONTENT */}
                      <div className="presence-hover-content">

                        <span className="presence-hover-kicker">
                          {card.id === 'livelihood'
                            ? 'FARMER EMPOWERMENT'
                            : card.id === 'impact'
                            ? 'INTELLIGENCE IN ACTION'
                            : 'SMARTER FARM ECONOMICS'}
                        </span>

                        <h3>{card.title}</h3>

                        <div className="presence-hover-line"></div>

                        <p>{card.description}</p>

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































// import React, { useEffect, useState } from "react";
// import { SVGMap } from "react-svg-map";
// import World from "@svg-maps/world";
// import "./Presence.css";


// // =====================================================
// // COUNTRIES / REGIONS THAT SHOULD SHOW TOOLTIP
// // =====================================================

// const interactiveCountries = {
//   in: "India",
//   bd: "Bangladesh",
//   np: "Nepal",
//   af: "Afghanistan",

//   // Gulf Countries
//   sa: "Gulf Countries",
//   ae: "Gulf Countries",
//   qa: "Gulf Countries",
//   kw: "Gulf Countries",
//   bh: "Gulf Countries",
//   om: "Gulf Countries"
// };


// // =====================================================
// // ANIMATED NUMBER COMPONENT
// // =====================================================

// function AnimatedNumber({ value, start }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!start) return;

//     const match = value.match(/^(\d+)(.*)$/);

//     if (!match) return;

//     const target = Number(match[1]);
//     const suffix = match[2];

//     let startTime = null;

//     const duration = 3000;

//     const animate = (currentTime) => {
//       if (!startTime) startTime = currentTime;

//       const elapsed = currentTime - startTime;

//       const progress = Math.min(
//         elapsed / duration,
//         1
//       );

//       const easedProgress =
//         1 - Math.pow(1 - progress, 4);

//       const currentValue =
//         target * easedProgress;

//       setCount(currentValue);

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       } else {
//         setCount(target);
//       }
//     };

//     requestAnimationFrame(animate);

//     return () => {
//       startTime = null;
//     };
//   }, [start, value]);

//   return (
//     <>
//       {count < 10 && count % 1 !== 0
//         ? count.toFixed(1)
//         : Math.floor(count)}

//       {value.replace(/^\d+/, "")}
//     </>
//   );
// }


// // =====================================================
// // PRESENCE
// // =====================================================

// function Presence() {

//   const [hoveredCard, setHoveredCard] =
//     useState(null);

//   const [statsVisible, setStatsVisible] =
//     useState(false);

//   const [hoveredCountry, setHoveredCountry] =
//     useState(null);

//   const [tooltipPosition, setTooltipPosition] =
//     useState({
//       x: 0,
//       y: 0
//     });


//   // =====================================================
//   // IMPACT STATS
//   // =====================================================

//   const impactStats = [

//     {
//       value: "7M+",
//       label:
//         "Farmers empowered through intelligent aquaculture solutions"
//     },

//     {
//       value: "30M+",
//       label:
//         "Acres of aquaculture ecosystems analyzed"
//     },

//     {
//       value: "25%",
//       label:
//         "Improvement in farm productivity through data-driven insights"
//     },

//     {
//       value: "30%",
//       label:
//         "Potential increase in farmer income through smarter decisions"
//     }

//   ];


//   // =====================================================
//   // CLOUDINARY CARDS
//   // =====================================================

//   const cardsData = [

//     {
//       id: "livelihood",

//       bgImage:
//         "https://res.cloudinary.com/p8fs2e1n/image/upload/live.png",

//       title:
//         "Empowering Livelihoods",

//       description:
//         "We empower farmers with actionable intelligence that helps them make better decisions, improve farm productivity, reduce uncertainty, and build more resilient livelihoods."
//     },

//     {
//       id: "impact",

//       bgImage:
//         "https://res.cloudinary.com/p8fs2e1n/image/upload/impact.png",

//       title:
//         "Intelligence in Action",

//       description:
//         "By combining AI, satellite, weather, water, and farm data, we turn complex information into measurable outcomes for more productive, sustainable, and resilient aquaculture."
//     },

//     {
//       id: "finance",

//       bgImage:
//         "https://res.cloudinary.com/p8fs2e1n/image/upload/finance.png",

//       title:
//         "Smarter Farm Economics",

//       description:
//         "We help farmers and aquaculture businesses make smarter financial decisions by improving profitability, optimizing resources, and reducing avoidable risks across the farm."
//     }

//   ];


//   // =====================================================
//   // ANIMATIONS + STATS OBSERVER
//   // =====================================================

//   useEffect(() => {

//     const observer =
//       new IntersectionObserver(
//         (entries) => {

//           entries.forEach((entry) => {

//             if (entry.isIntersecting) {

//               entry.target.classList.add(
//                 "visible"
//               );

//             }

//           });

//         },
//         {
//           threshold: 0.2
//         }
//       );


//     document
//       .querySelectorAll(".animate")
//       .forEach((el) => {

//         observer.observe(el);

//       });


//     const statsSection =
//       document.querySelector(
//         ".presence-impact-stats"
//       );


//     const statsObserver =
//       new IntersectionObserver(
//         (entries) => {

//           entries.forEach((entry) => {

//             if (entry.isIntersecting) {

//               setStatsVisible(true);

//               statsObserver.unobserve(
//                 entry.target
//               );

//             }

//           });

//         },
//         {
//           threshold: 0.35
//         }
//       );


//     if (statsSection) {

//       statsObserver.observe(
//         statsSection
//       );

//     }


//     return () => {

//       observer.disconnect();

//       statsObserver.disconnect();

//     };

//   }, []);


//   // =====================================================
//   // MAP HOVER
//   // =====================================================

//   const handleMapHover = (event) => {

//     const countryId =
//       event.target.getAttribute("id");

//     if (
//       !countryId ||
//       !interactiveCountries[countryId]
//     ) {

//       setHoveredCountry(null);

//       return;

//     }


//     const rect =
//       event.currentTarget
//         .closest(".presence-map-wrapper")
//         ?.getBoundingClientRect();


//     if (!rect) return;


//     setHoveredCountry(
//       interactiveCountries[countryId]
//     );


//     setTooltipPosition({

//       x:
//         event.clientX -
//         rect.left,

//       y:
//         event.clientY -
//         rect.top -
//         15

//     });

//   };


//   const handleMapLeave = () => {

//     setHoveredCountry(null);

//   };


//   // =====================================================
//   // MAP COUNTRY CLASS
//   // =====================================================

//   const getLocationClassName =
//     (location) => {

//       if (
//         interactiveCountries[
//           location.id
//         ]
//       ) {

//         return "presence-map-country interactive-country";

//       }

//       return "presence-map-country";

//     };


//   // =====================================================
//   // RETURN
//   // =====================================================

//   return (

//     <section
//       className="presence-section-unique"
//     >

//       <div
//         className="presence-container-unique"
//       >


//         {/* =================================================
//             TOP HEADING
//         ================================================= */}

//         <h2
//           className="presence-top-title animate fade-down"
//         >
//           Our Impact Across{" "}
//           <span>World</span>
//         </h2>


//         {/* =================================================
//             IMPACT STATS
//         ================================================= */}

//         <div
//           className="presence-impact-stats"
//         >

//           {impactStats.map(
//             (stat, index) => (

//               <div
//                 className={`presence-stat-item animate fade-up delay-${index}`}
//                 key={index}
//               >

//                 <div
//                   className="presence-stat-line"
//                 />


//                 <div
//                   className="presence-stat-value"
//                 >

//                   <AnimatedNumber
//                     value={stat.value}
//                     start={statsVisible}
//                   />

//                 </div>


//                 <div
//                   className="presence-stat-label"
//                 >

//                   {stat.label}

//                 </div>

//               </div>

//             )
//           )}

//         </div>


//         {/* =================================================
//             INTERACTIVE WORLD MAP
//         ================================================= */}

//         <div
//           className="presence-main-box"
//         >

//           <div
//             className="presence-map-wrapper animate fade-up"
//             onMouseMove={handleMapHover}
//             onMouseLeave={handleMapLeave}
//           >

//             <SVGMap
//               map={World}
//               className="presence-world-map"
//               locationClassName={
//                 getLocationClassName
//               }
//               locationAriaLabel={(location) =>
//                 interactiveCountries[
//                   location.id
//                 ]
//                   ? interactiveCountries[
//                       location.id
//                     ]
//                   : ""
//               }
//             />


//             {/* =================================================
//                 TOOLTIP
//             ================================================= */}

//             {hoveredCountry && (

//               <div
//                 className="presence-map-tooltip"
//                 style={{
//                   left:
//                     tooltipPosition.x,
//                   top:
//                     tooltipPosition.y
//                 }}
//               >

//                 <span className="tooltip-dot"></span>

//                 {hoveredCountry}

//               </div>

//             )}

//           </div>

//         </div>


//         {/* =================================================
//             CARDS
//         ================================================= */}

//         <div
//           className="presence-cards-section"
//         >

//           <div
//             className="presence-new-cards-container"
//           >

//             {cardsData.map(
//               (card, index) => {

//                 const directions = [
//                   "fade-left",
//                   "fade-up",
//                   "fade-right"
//                 ];


//                 return (

//                   <div
//                     key={card.id}
//                     className={`presence-new-card-wrapper card-${card.id} animate ${directions[index]} delay-${index}`}
//                     onMouseEnter={() =>
//                       setHoveredCard(card.id)
//                     }
//                     onMouseLeave={() =>
//                       setHoveredCard(null)
//                     }
//                   >

//                     <div
//                       className="presence-card-container"
//                     >

//                       <div
//                         className={`presence-pure-image ${
//                           hoveredCard ===
//                           card.id
//                             ? "hovered"
//                             : ""
//                         }`}
//                         style={{
//                           backgroundImage:
//                             `url(${card.bgImage})`
//                         }}
//                       >

//                         {/* Bottom text */}

//                         {hoveredCard !==
//                           card.id && (

//                           <div
//                             className="presence-card-title"
//                           >
//                             {card.title}
//                           </div>

//                         )}


//                         {/* Hover content */}

//                         <div
//                           className="presence-hover-content"
//                         >

//                           <span
//                             className="presence-hover-kicker"
//                           >

//                             {card.id ===
//                             "livelihood"
//                               ? "FARMER EMPOWERMENT"
//                               : card.id ===
//                                 "impact"
//                               ? "INTELLIGENCE IN ACTION"
//                               : "SMARTER FARM ECONOMICS"}

//                           </span>


//                           <h3>
//                             {card.title}
//                           </h3>


//                           <div
//                             className="presence-hover-line"
//                           />


//                           <p>
//                             {card.description}
//                           </p>

//                         </div>

//                       </div>

//                     </div>

//                   </div>

//                 );

//               }
//             )}

//           </div>

//         </div>

//       </div>

//     </section>

//   );

// }


// export default Presence;