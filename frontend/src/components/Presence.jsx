



// import React, { useEffect, useState } from 'react';
// import './Presence.css';

// // Cloudinary image URL for Asia map
// const indiaMap =
//   'https://res.cloudinary.com/p8fs2e1n/image/upload/World1.png';

// // ANIMATED NUMBER COMPONENT - Premium smooth version
// function AnimatedNumber({ value, start }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!start) return;

//     const match = value.match(/^(\d+)(.*)$/);

//     if (!match) return;

//     const target = Number(match[1]);
//     const suffix = match[2];

//     let startTime = null;

//     // Thoda slow = more premium/smooth feel
//     const duration = 3000;

//     const animate = (currentTime) => {
//       if (!startTime) startTime = currentTime;

//       const elapsed = currentTime - startTime;
//       const progress = Math.min(elapsed / duration, 1);

//       // Very smooth ease-out
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
//       {value.replace(/^\d+/, '')}
//     </>
//   );
// }

// function Presence() {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [statsVisible, setStatsVisible] = useState(false);

//   // IMPACT STATS
//   const impactStats = [
//     {
//       value: '5 Lakh+',
//       label: 'Farmer conversations monthly'
//     },
//     {
//       value: '30%',
//       label: 'Yield improvement'
//     },
//     {
//       value: '25%',
//       label: 'Income increase '
//     },
//     {
//       value: ' 50,000 Litres+',
//       label: ' Water saved per acre per season'
//     },
//     {
//       value: ' 82%',
//       label: ' Farmers with improved production '
//     }
//   ];

//   // CLOUDINARY CARDS
//   const cardsData = [
//     {
//       id: 'livelihood',
//       bgImage:
//         'https://res.cloudinary.com/p8fs2e1n/image/upload/live.png',
//       description:
//         'We empower farmers with actionable intelligence that helps them make better decisions, improve farm productivity, reduce uncertainty, and build more resilient livelihoods.'
//     },
//     {
//       id: 'impact',
//       bgImage:
//         'https://res.cloudinary.com/p8fs2e1n/image/upload/impact.png',
//       description:
//         'By combining AI, satellite, weather, water, and farm data, we turn complex information into measurable outcomes for more productive, sustainable, and resilient aquaculture.'
//     },
//     {
//       id: 'finance',
//       bgImage:
//         'https://res.cloudinary.com/p8fs2e1n/image/upload/finance.png',
//       description:
//         'We help farmers and aquaculture businesses make smarter financial decisions by improving profitability, optimizing resources, and reducing avoidable risks across the farm.'
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     document
//       .querySelectorAll('.animate')
//       .forEach((el) => observer.observe(el));

//     // Stats counter observer
//     const statsSection = document.querySelector(
//       '.presence-impact-stats'
//     );

//     const statsObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setStatsVisible(true);
//             statsObserver.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.35
//       }
//     );

//     if (statsSection) {
//       statsObserver.observe(statsSection);
//     }

//     return () => {
//       observer.disconnect();
//       statsObserver.disconnect();
//     };
//   }, []);

//   return (
//     <section className="presence-section-unique">
//       <div className="presence-container-unique">

//         {/* TOP HEADING */}
//         <h2 className="presence-top-title animate fade-down">
//           Our Impact Across <span>World</span>
//         </h2>

//         {/* IMPACT STATS */}
//         <div className="presence-impact-stats">
//           {impactStats.map((stat, index) => (
//             <div
//               className={`presence-stat-item animate fade-up delay-${index}`}
//               key={index}
//             >
//               <div className="presence-stat-line"></div>

//               <div className="presence-stat-value">
//                 <AnimatedNumber
//                   value={stat.value}
//                   start={statsVisible}
//                 />
//               </div>

//               <div className="presence-stat-label">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ASIA MAP */}
//         <div className="presence-main-box">
//           <div className="presence-image-center animate fade-up">
//             <img
//               src={indiaMap}
//               alt="Asia Map"
//               className="presence-simple-image"
//             />
//           </div>
//         </div>

//         {/* CARDS */}
//         <div className="presence-cards-section">
//           <div className="presence-new-cards-container">

//             {cardsData.map((card, index) => {
//               const directions = [
//                 'fade-left',
//                 'fade-up',
//                 'fade-right'
//               ];

//               return (
//                 <div
//                   key={card.id}
//                   className={`presence-new-card-wrapper card-${card.id} animate ${directions[index]} delay-${index}`}
//                   onMouseEnter={() => setHoveredCard(card.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                 >
//                   <div className="presence-card-container">

//                     <div
//                       className={`presence-pure-image ${
//                         hoveredCard === card.id ? 'hovered' : ''
//                       }`}
//                       style={{
//                         backgroundImage: `url(${card.bgImage})`
//                       }}
//                     >

//                       {/* Bottom text */}
//                       {hoveredCard !== card.id && (
//                         <div className="presence-card-title">
//                           {card.title}
//                         </div>
//                       )}

//                       {/* HOVER CONTENT */}
//                       <div className="presence-hover-content">

//                         <span className="presence-hover-kicker">
//                           {card.id === 'livelihood'
//                             ? 'FARMER EMPOWERMENT'
//                             : card.id === 'impact'
//                             ? 'INTELLIGENCE IN ACTION'
//                             : 'SMARTER FARM ECONOMICS'}
//                         </span>

//                         <h3>{card.title}</h3>

//                         <div className="presence-hover-line"></div>

//                         <p>{card.description}</p>

//                       </div>

//                     </div>

//                   </div>
//                 </div>
//               );
//             })}

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Presence;





import React, { useEffect, useState } from "react";
import "./Presence.css";

// =====================================================
// CLOUDINARY IMAGE
// =====================================================

const indiaMap =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/world1.png";


// =====================================================
// ANIMATED NUMBER COMPONENT
// =====================================================

function AnimatedNumber({ value, start }) {
  const [count, setCount] = useState(0);

  // Extract number + suffix
  const match = value.match(/^([\d,]+)(.*)$/);

  const target = match
    ? Number(match[1].replace(/,/g, ""))
    : 0;

  const suffix = match
    ? match[2]
    : "";

  useEffect(() => {
    if (!start || !match) return;

    let startTime = null;
    let animationFrame = null;

    const duration = 3000;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      // Smooth premium ease-out
      const easedProgress =
        1 - Math.pow(1 - progress, 4);

      const currentValue =
        target * easedProgress;

      setCount(currentValue);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [start, value, target]);

  return (
    <>
      {Math.floor(count).toLocaleString("en-IN")}
      {suffix}
    </>
  );
}


// =====================================================
// PRESENCE COMPONENT
// =====================================================

function Presence() {

  const [hoveredCard, setHoveredCard] =
    useState(null);

  const [statsVisible, setStatsVisible] =
    useState(false);


  // =====================================================
  // IMPACT STATS
  // =====================================================

  const impactStats = [
    {
      value: "5 Lakh+",
      label: "Farmer conversations monthly",
    },

    {
      value: "30%",
      label: "Yield improvement",
    },

    {
      value: "25%",
      label: "Income increase",
    },

    {
      value: "50,000 Litres+",
      label: "Water saved per acre per season",
    },

    {
      value: "82%",
      label: "Farmers with improved production",
    },
  ];


  // =====================================================
  // IMPACT CARDS
  // =====================================================

  const cardsData = [
    {
      id: "livelihood",

      title: " Livelihood",

      bgImage:
        "https://res.cloudinary.com/p8fs2e1n/image/upload/Live.png",

      description:
        "Essential Aquatech delivers real-time pond intelligence to smallholder fresh water fish farmers through MeenAmma, a multilingual WhatsApp AI . Farmers on the platform record 30% yield improvement and 25% income increase."
    },

    {
      id: "impact",

      title: " Impact",

      bgImage:
        "https://res.cloudinary.com/p8fs2e1n/image/upload/Impact.png",

      description:
        "By combining AI, satellite, weather, water, and farm data, we turn complex information into measurable outcomes for more productive, sustainable, and resilient aquaculture.",
    },

    {
  id: "finance",

  title: "Finance",

  bgImage:
    "https://res.cloudinary.com/p8fs2e1n/image/upload/Finance.png",

  description:
    "Every pond conversation with MeenAmma builds a proprietary Farm Health Score, turning real-world farm data into credit profiles and insurance eligibility. EA is making India’s freshwater fish farmers bankable for the first time by enabling access to formal credit and insurance."
},
  ];


  // =====================================================
  // INTERSECTION OBSERVER
  // =====================================================

  useEffect(() => {

    // -----------------------------------------------
    // General animations
    // -----------------------------------------------

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

            }

          });

        },
        {
          threshold: 0.2,
        }
      );


    const animatedElements =
      document.querySelectorAll(
        ".presence-section-unique .animate"
      );


    animatedElements.forEach((element) => {
      observer.observe(element);
    });


    // -----------------------------------------------
    // Stats animation observer
    // -----------------------------------------------

    const statsSection =
      document.querySelector(
        ".presence-impact-stats"
      );


    const statsObserver =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              setStatsVisible(true);

              statsObserver.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.25,
        }
      );


    if (statsSection) {

      statsObserver.observe(
        statsSection
      );

    }


    // -----------------------------------------------
    // Cleanup
    // -----------------------------------------------

    return () => {

      observer.disconnect();

      statsObserver.disconnect();

    };

  }, []);


  // =====================================================
  // RENDER
  // =====================================================

  return (

    <section
      className="presence-section-unique"
    >

      <div
        className="presence-container-unique"
      >


        {/* =================================================
            TOP HEADING
        ================================================= */}

        <h2
          className="presence-top-title animate fade-down"
        >
          Our Impact Across{" "}
          <span>World</span>
        </h2>


        {/* =================================================
            IMPACT STATS
        ================================================= */}

        <div
          className="presence-impact-stats"
        >

          {impactStats.map(
            (stat, index) => (

              <div
                key={index}
                className={`presence-stat-item animate fade-up delay-${index}`}
              >


                {/* BLUE LINE */}

                <div
                  className="presence-stat-line"
                />


                {/* NUMBER */}

                <div
                  className="presence-stat-value"
                >

                  <AnimatedNumber
                    value={stat.value}
                    start={statsVisible}
                  />

                </div>


                {/* LABEL */}

                <div
                  className="presence-stat-label"
                >
                  {stat.label}
                </div>


              </div>

            )
          )}

        </div>


        {/* =================================================
            MAP
        ================================================= */}

        <div
          className="presence-main-box"
        >

          <div
            className="presence-image-center animate fade-up"
          >

            <img
              src={indiaMap}
              alt="Essential Aquatech global impact across the world"
              className="presence-simple-image"
              loading="lazy"
            />

          </div>

        </div>


        {/* =================================================
            IMPACT CARDS
        ================================================= */}

        <div
          className="presence-cards-section"
        >

          <div
            className="presence-new-cards-container"
          >

            {cardsData.map(
              (card, index) => {

                const directions = [
                  "fade-left",
                  "fade-up",
                  "fade-right",
                ];


                return (

                  <div
                    key={card.id}
                    className={`presence-new-card-wrapper card-${card.id} animate ${directions[index]} delay-${index}`}
                    onMouseEnter={() =>
                      setHoveredCard(card.id)
                    }
                    onMouseLeave={() =>
                      setHoveredCard(null)
                    }
                  >

                    <div
                      className="presence-card-container"
                    >

                      <div
                        className={`presence-pure-image ${
                          hoveredCard === card.id
                            ? "hovered"
                            : ""
                        }`}
                        style={{
                          backgroundImage:
                            `url(${card.bgImage})`,
                        }}
                      >


                        {/* =================================================
                            NORMAL TITLE
                        ================================================= */}

                        {hoveredCard !==
                          card.id && (

                          <div
                            className="presence-card-title"
                          >
                            {card.title}
                          </div>

                        )}


                        {/* =================================================
                            HOVER CONTENT
                        ================================================= */}

                        <div
                          className="presence-hover-content"
                        >


                          {/* KICKER */}

                          <span
                            className="presence-hover-kicker"
                          >

                            {card.id ===
                            "livelihood"
                              ? "FARMER EMPOWERMENT"
                              : card.id ===
                                "impact"
                              ? "INTELLIGENCE IN ACTION"
                              : "SMARTER FARM ECONOMICS"}

                          </span>


                          {/* TITLE */}

                          <h3>
                            {card.title}
                          </h3>


                          {/* ACCENT LINE */}

                          <div
                            className="presence-hover-line"
                          />


                          {/* DESCRIPTION */}

                          <p>
                            {card.description}
                          </p>


                        </div>

                      </div>

                    </div>

                  </div>

                );

              }
            )}

          </div>

        </div>


      </div>

    </section>

  );
}


export default Presence;