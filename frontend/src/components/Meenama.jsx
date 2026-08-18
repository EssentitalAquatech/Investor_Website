// import React from "react";
// import "./Meenama.css";

// const Meenama = () => {
//   const handleAskMeenamma = () => {
//     window.open(
//       "https://wa.me/919046226703",
//       "_blank",
//       "noopener,noreferrer"
//     );
//   };

//   return (
//     <section className="menamma">
//       <div className="menamma-overlay"></div>

//       <div className="menamma-content">
//         <span className="menamma-label">MEENAMMA AI</span>

//         <h1>
//           Ask <span>Meenamma AI</span>
//           <br />
//           on WhatsApp
//         </h1>

//         <p className="menamma-subtitle">
//           Get answers in your
//           <br />
//           favourite language.
//         </p>

//         <p className="menamma-description">
//           Your intelligent aquaculture assistant,
//           <br />
//           available whenever you need it.
//         </p>

//         <div className="menamma-stats">
//           <div className="menamma-stat">
//             <strong>4+</strong>
//             <span>
//               Months of
//               <br />
//               Live Service
//             </span>
//           </div>

//           <div className="menamma-divider"></div>

//           <div className="menamma-stat">
//             <strong>3+</strong>
//             <span>
//               Countries
//               <br />
//               Served
//             </span>
//           </div>
//         </div>

//         <button className="menamma-btn" onClick={handleAskMeenamma}>
//           Ask Meenamma AI
//           <span>↗</span>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Meenama;

















import React, { useEffect, useRef } from "react";
import "./Meenama.css";

const Meenama = () => {
  const handleAskMeenamma = () => {
    window.open(
      "https://wa.me/919046226703",
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Refs for animation
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const statsRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = [
      labelRef.current,
      headingRef.current,
      subtitleRef.current,
      descriptionRef.current,
      statsRef.current,
      btnRef.current,
    ];

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="menamma" ref={sectionRef}>
      <div className="menamma-overlay"></div>

      <div className="menamma-content">
        <span className="menamma-label animate-from-left" ref={labelRef}>
          MEENAMMA AI
        </span>

        <h1 className="animate-from-left" ref={headingRef}>
          Ask <span>Meenamma AI</span>
          <br />
          on WhatsApp
        </h1>

        <p className="menamma-subtitle animate-from-right" ref={subtitleRef}>
          Get answers in your
          <br />
          favourite language.
        </p>

        <p className="menamma-description animate-from-left" ref={descriptionRef}>
          Your intelligent aquaculture assistant,
          <br />
          available whenever you need it.
        </p>

            {/* <div className="menamma-stats animate-from-right" ref={statsRef}>
            <div className="menamma-stat">
                <strong>4+</strong>
                <span>
                Months of
                <br />
                Live Service
                </span>
            </div>

            <div className="menamma-divider"></div>

            <div className="menamma-stat">
                <strong>3+</strong>
                <span>
                Countries
                <br />
                Served
                </span>
            </div>
            </div> */}

        <button className="menamma-btn animate-from-left" ref={btnRef} onClick={handleAskMeenamma}>
          Ask Meenamma AI
          <span>↗</span>
        </button>
      </div>
    </section>
  );
};

export default Meenama;