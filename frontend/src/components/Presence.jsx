









// import React, { useEffect, useRef, useState } from "react";
// import "./Presence.css";

// // =====================================================
// // CLOUDINARY IMAGES
// // =====================================================

// const CLOUDINARY_BASE =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload";

// const indiaMap = `${CLOUDINARY_BASE}/f_auto,q_auto/world1.png`;


// // =====================================================
// // ANIMATED NUMBER COMPONENT
// // =====================================================

// function AnimatedNumber({ value, start }) {
//   const [count, setCount] = useState(0);

//   const match = value.match(/^([\d,]+)(.*)$/);

//   const target = match
//     ? Number(match[1].replace(/,/g, ""))
//     : 0;

//   const suffix = match ? match[2] : "";

//   useEffect(() => {
//     if (!start || !match) return;

//     let startTime = null;
//     let animationFrame = null;

//     const duration = 3000;

//     const animate = (currentTime) => {
//       if (!startTime) {
//         startTime = currentTime;
//       }

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
//         animationFrame =
//           requestAnimationFrame(animate);
//       } else {
//         setCount(target);
//       }
//     };

//     animationFrame =
//       requestAnimationFrame(animate);

//     return () => {
//       if (animationFrame) {
//         cancelAnimationFrame(animationFrame);
//       }
//     };
//   }, [start, value, target]);

//   return (
//     <>
//       {Math.floor(count).toLocaleString("en-IN")}
//       {suffix}
//     </>
//   );
// }


// // =====================================================
// // PRESENCE COMPONENT
// // =====================================================

// function Presence() {
//   const [hoveredCard, setHoveredCard] =
//     useState(null);

//   const [statsVisible, setStatsVisible] =
//     useState(false);

//   const cardsScrollRef = useRef(null);


//   // =====================================================
//   // IMPACT STATS
//   // =====================================================

//   const impactStats = [
//     {
//       value: "5 Lakh+",
//       label: "Farmer conversations monthly",
//     },
//     {
//       value: "30%",
//       label: "Yield improvement",
//     },
//     {
//       value: "25%",
//       label: "Income increase",
//     },
//     {
//       value: "50,000 Litres+",
//       label: "Water saved per acre per season",
//     },
//     {
//       value: "82%",
//       label: "Farmers with improved production",
//     },
//   ];


//   // =====================================================
//   // IMPACT CARDS
//   // =====================================================

//   const cardsData = [
//     {
//       id: "livelihood",
//       title: "Livelihood",

//       bgImage:
//         `${CLOUDINARY_BASE}/f_auto,q_auto,w_900/Live.png`,

//       description:
//         "Essential Aquatech delivers real-time pond intelligence to smallholder fresh water fish farmers through MeenAmma, a multilingual WhatsApp AI . Farmers on the platform record 30% yield improvement and 25% income increase.",
//     },

//     {
//       id: "impact",
//       title: "Impact",

//       bgImage:
//         `${CLOUDINARY_BASE}/f_auto,q_auto,w_900/Impact.png`,

//       description:
//         "By combining AI, satellite, weather, water, and farm data, we turn complex information into measurable outcomes for more productive, sustainable, and resilient aquaculture.",
//     },

//     {
//       id: "finance",
//       title: "Finance",

//       bgImage:
//         `${CLOUDINARY_BASE}/f_auto,q_auto,w_900/Finance.png`,

//       description:
//         "Every pond conversation with MeenAmma builds a proprietary Farm Health Score, turning real-world farm data into credit profiles and insurance eligibility. EA is making India’s freshwater fish farmers bankable for the first time by enabling access to formal credit and insurance.",
//     },
//   ];


//   // =====================================================
//   // INTERSECTION OBSERVER
//   // =====================================================

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.2,
//       rootMargin: "0px 0px -50px 0px",
//     };

//     const observer =
//       new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               entry.target.classList.add("visible");

//               observer.unobserve(
//                 entry.target
//               );
//             }
//           });
//         },
//         observerOptions
//       );

//     const animatedElements =
//       document.querySelectorAll(
//         ".presence-section-unique .animate"
//       );

//     animatedElements.forEach((element) => {
//       observer.observe(element);
//     });


//     // =====================================================
//     // STATS OBSERVER
//     // =====================================================

//     const statsSection =
//       document.querySelector(
//         ".presence-impact-stats"
//       );

//     let statsObserver;

//     if (statsSection) {
//       statsObserver =
//         new IntersectionObserver(
//           (entries) => {
//             if (entries[0].isIntersecting) {
//               setStatsVisible(true);

//               statsObserver.unobserve(
//                 entries[0].target
//               );
//             }
//           },
//           {
//             threshold: 0.25,
//             rootMargin: "0px 0px -50px 0px",
//           }
//         );

//       statsObserver.observe(statsSection);
//     }


//     return () => {
//       observer.disconnect();

//       if (statsObserver) {
//         statsObserver.disconnect();
//       }
//     };
//   }, []);


//   // =====================================================
//   // AUTO SCROLL + TOUCH SWIPE
//   // =====================================================

//   useEffect(() => {
//     const container =
//       cardsScrollRef.current;

//     if (!container) return;

//     let animationFrame;
//     let resumeTimeout;

//     let isUserInteracting = false;

//     // ---------------------------------------------
//     // START USER INTERACTION
//     // ---------------------------------------------

//     const startInteraction = () => {
//       isUserInteracting = true;

//       clearTimeout(resumeTimeout);
//     };


//     // ---------------------------------------------
//     // END USER INTERACTION
//     // ---------------------------------------------

//     const endInteraction = () => {
//       clearTimeout(resumeTimeout);

//       resumeTimeout = setTimeout(() => {
//         isUserInteracting = false;
//       }, 1500);
//     };


//     // ---------------------------------------------
//     // MOUSE
//     // ---------------------------------------------

//     container.addEventListener(
//       "mouseenter",
//       startInteraction
//     );

//     container.addEventListener(
//       "mouseleave",
//       endInteraction
//     );


//     // ---------------------------------------------
//     // TOUCH
//     // ---------------------------------------------

//     container.addEventListener(
//       "touchstart",
//       startInteraction,
//       { passive: true }
//     );

//     container.addEventListener(
//       "touchend",
//       endInteraction,
//       { passive: true }
//     );

//     container.addEventListener(
//       "touchcancel",
//       endInteraction,
//       { passive: true }
//     );


//     // ---------------------------------------------
//     // AUTO SCROLL
//     // ---------------------------------------------

//     const scroll = () => {
//       if (!isUserInteracting) {
//         container.scrollLeft += 0.6;

//         /*
//          * When reaching the end,
//          * smoothly start again.
//          */
//         if (
//           container.scrollLeft >=
//           container.scrollWidth -
//             container.clientWidth
//         ) {
//           container.scrollLeft = 0;
//         }
//       }

//       animationFrame =
//         requestAnimationFrame(scroll);
//     };

//     animationFrame =
//       requestAnimationFrame(scroll);


//     // ---------------------------------------------
//     // CLEANUP
//     // ---------------------------------------------

//     return () => {
//       cancelAnimationFrame(animationFrame);

//       clearTimeout(resumeTimeout);

//       container.removeEventListener(
//         "mouseenter",
//         startInteraction
//       );

//       container.removeEventListener(
//         "mouseleave",
//         endInteraction
//       );

//       container.removeEventListener(
//         "touchstart",
//         startInteraction
//       );

//       container.removeEventListener(
//         "touchend",
//         endInteraction
//       );

//       container.removeEventListener(
//         "touchcancel",
//         endInteraction
//       );
//     };
//   }, []);


//   // =====================================================
//   // RENDER
//   // =====================================================

//   return (
//     <section className="presence-section-unique">

//       <div className="presence-container-unique">

//         {/* ============================================
//             TOP HEADING
//         ============================================ */}

//         <h2 className="presence-top-title animate fade-down">
//           Our Impact Across{" "}
//           <span>World</span>
//         </h2>


//         {/* ============================================
//             IMPACT STATS
//         ============================================ */}

//         <div className="presence-impact-stats">

//           {impactStats.map(
//             (stat, index) => (
//               <div
//                 key={index}
//                 className={`presence-stat-item animate fade-up delay-${index}`}
//               >

//                 <div className="presence-stat-line" />

//                 <div className="presence-stat-value">
//                   <AnimatedNumber
//                     value={stat.value}
//                     start={statsVisible}
//                   />
//                 </div>

//                 <div className="presence-stat-label">
//                   {stat.label}
//                 </div>

//               </div>
//             )
//           )}

//         </div>


//         {/* ============================================
//             MAP
//         ============================================ */}

//         <div className="presence-main-box">

//           <div className="presence-image-center animate fade-up">

//             <img
//               src={indiaMap}
//               alt="Essential Aquatech global impact across the world"
//               className="presence-simple-image"
//               loading="lazy"
//               decoding="async"
//               fetchPriority="low"
//             />

//           </div>

//         </div>


//         {/* ============================================
//             IMPACT CARDS
//         ============================================ */}

//         <div className="presence-cards-section">

//           <div
//             className="presence-new-cards-container"
//             ref={cardsScrollRef}
//           >

//             {[...cardsData, ...cardsData].map(
//               (card, index) => {

//                 return (
//                   <div
//                     key={`${card.id}-${index}`}
//                     className={`presence-new-card-wrapper card-${card.id} animate ${
//                       index % 3 === 0
//                         ? "fade-left"
//                         : index % 3 === 1
//                         ? "fade-up"
//                         : "fade-right"
//                     }`}
//                     onMouseEnter={() =>
//                       setHoveredCard(card.id)
//                     }
//                     onMouseLeave={() =>
//                       setHoveredCard(null)
//                     }
//                   >

//                     <div className="presence-card-container">

//                       <div
//                         className={`presence-pure-image ${
//                           hoveredCard === card.id
//                             ? "hovered"
//                             : ""
//                         }`}
//                         style={{
//                           backgroundImage:
//                             `url("${card.bgImage}")`,
//                         }}
//                       >

//                         {/* NORMAL TITLE */}

//                         {hoveredCard !== card.id && (
//                           <div className="presence-card-title">
//                             {card.title}
//                           </div>
//                         )}


//                         {/* HOVER CONTENT */}

//                         <div className="presence-hover-content">

//                           <span className="presence-hover-kicker">

//                             {card.id === "livelihood"
//                               ? "FARMER EMPOWERMENT"
//                               : card.id === "impact"
//                               ? "INTELLIGENCE IN ACTION"
//                               : "SMARTER FARM ECONOMICS"}

//                           </span>


//                           <h3>
//                             {card.title}
//                           </h3>


//                           <div className="presence-hover-line" />


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











import React, { useEffect, useState } from "react";
import "./Presence.css";

// =====================================================
// CLOUDINARY IMAGES
// =====================================================

const CLOUDINARY_BASE =
  "https://res.cloudinary.com/p8fs2e1n/image/upload";

const indiaMap = `${CLOUDINARY_BASE}/f_auto,q_auto/world1.png`;


// =====================================================
// ANIMATED NUMBER COMPONENT
// =====================================================

function AnimatedNumber({ value, start }) {
  const [count, setCount] = useState(0);

  const match = value.match(/^([\d,]+)(.*)$/);

  const target = match
    ? Number(match[1].replace(/,/g, ""))
    : 0;

  const suffix = match ? match[2] : "";

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
      title: "Livelihood",

      bgImage:
        `${CLOUDINARY_BASE}/f_auto,q_auto,w_900/Live.png`,

      description:
        "Essential Aquatech delivers real-time pond intelligence to smallholder fresh water fish farmers through MeenAmma, a multilingual WhatsApp AI . Farmers on the platform record 30% yield improvement and 25% income increase.",
    },

    {
      id: "impact",
      title: "Impact",

      bgImage:
        `${CLOUDINARY_BASE}/f_auto,q_auto,w_900/Impact.png`,

      description:
        "By combining AI, satellite, weather, water, and farm data, we turn complex information into measurable outcomes for more productive, sustainable, and resilient aquaculture.",
    },

    {
      id: "finance",
      title: "Finance",

      bgImage:
        `${CLOUDINARY_BASE}/f_auto,q_auto,w_900/Finance.png`,

      description:
        "Every pond conversation with MeenAmma builds a proprietary Farm Health Score, turning real-world farm data into credit profiles and insurance eligibility. EA is making India’s freshwater fish farmers bankable for the first time by enabling access to formal credit and insurance.",
    },
  ];


  // =====================================================
  // INTERSECTION OBSERVER
  // =====================================================

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");

              observer.unobserve(
                entry.target
              );
            }
          });
        },
        observerOptions
      );

    const animatedElements =
      document.querySelectorAll(
        ".presence-section-unique .animate"
      );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });


    // =====================================================
    // STATS OBSERVER
    // =====================================================

    const statsSection =
      document.querySelector(
        ".presence-impact-stats"
      );

    let statsObserver;

    if (statsSection) {
      statsObserver =
        new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setStatsVisible(true);

              statsObserver.unobserve(
                entries[0].target
              );
            }
          },
          {
            threshold: 0.25,
            rootMargin: "0px 0px -50px 0px",
          }
        );

      statsObserver.observe(statsSection);
    }


    return () => {
      observer.disconnect();

      if (statsObserver) {
        statsObserver.disconnect();
      }
    };
  }, []);


  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section className="presence-section-unique">

      <div className="presence-container-unique">

        {/* ============================================
            TOP HEADING
        ============================================ */}

        <h2 className="presence-top-title animate fade-down">
          Our Impact Across{" "}
          <span>World</span>
        </h2>


        {/* ============================================
            IMPACT STATS
        ============================================ */}

        <div className="presence-impact-stats">

          {impactStats.map(
            (stat, index) => (
              <div
                key={index}
                className={`presence-stat-item animate fade-up delay-${index}`}
              >

                <div className="presence-stat-line" />

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
            )
          )}

        </div>


        {/* ============================================
            MAP
        ============================================ */}

        <div className="presence-main-box">

          <div className="presence-image-center animate fade-up">

            <img
              src={indiaMap}
              alt="Essential Aquatech global impact across the world"
              className="presence-simple-image"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />

          </div>

        </div>


        {/* ============================================
            IMPACT CARDS
        ============================================ */}

        <div className="presence-cards-section">

          <div className="presence-new-cards-container">

            {cardsData.map(
              (card, index) => {

                return (
                  <div
                    key={card.id}
                    className={`presence-new-card-wrapper card-${card.id} animate ${
                      index % 3 === 0
                        ? "fade-left"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-right"
                    }`}
                    onMouseEnter={() =>
                      setHoveredCard(card.id)
                    }
                    onMouseLeave={() =>
                      setHoveredCard(null)
                    }
                  >

                    <div className="presence-card-container">

                      <div
                        className={`presence-pure-image ${
                          hoveredCard === card.id
                            ? "hovered"
                            : ""
                        }`}
                        style={{
                          backgroundImage:
                            `url("${card.bgImage}")`,
                        }}
                      >

                        {/* NORMAL TITLE */}

                        {hoveredCard !== card.id && (
                          <div className="presence-card-title">
                            {card.title}
                          </div>
                        )}


                        {/* HOVER CONTENT */}

                        <div className="presence-hover-content">

                          <span className="presence-hover-kicker">

                            {card.id === "livelihood"
                              ? "FARMER EMPOWERMENT"
                              : card.id === "impact"
                              ? "INTELLIGENCE IN ACTION"
                              : "SMARTER FARM ECONOMICS"}

                          </span>


                          <h3>
                            {card.title}
                          </h3>


                          <div className="presence-hover-line" />


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