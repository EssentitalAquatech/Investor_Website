

// import React, { useEffect, useRef, useState } from "react";
// import "./WhatWeDo.css";

// const sections = [
//   {
//     id: 1,
//     number: "01",
//     kicker: "Aquaculture Intelligence",
//     title: "Aquaculture Intelligence",
//     imageSrc:
//       "https://res.cloudinary.com/p8fs2e1n/image/upload/2right.png",
//     imageAlt:
//       "Aquaculture intelligence dashboard combining pond, climate and farmer data layers",

//     // UPDATED TAGS
//     description:
//       "15-Day Forward Action Plan • Disease Outbreak Prediction • Water Quality Intelligence • Climate Risk Scoring • Climate Early Warning • Farmer Behaviour Analytics",
//   },

//   {
//     id: 2,
//     number: "02",
//     kicker: "3AI AquaStack",
//     title: "3AI AquaStack",
//     imageSrc:
//       "https://res.cloudinary.com/p8fs2e1n/image/upload/1right.png",
//     imageAlt:
//       "3AI AquaStack combining satellite, astronomical and pond-level intelligence",

//     // UPDATED TAGS
//     description:
//       "Satellite Imagery • Astronomical Data • Pond-Level Inputs • Disease Prediction • Harvest Forecasting • Farm Risk Scoring • Climate Advisory • Action Intelligence",
//   },

//   {
//     id: 3,
//     number: "03",
//     kicker: "Connected Ecosystem",
//     title: "Connected Aquaculture Ecosystem",
//     imageSrc:
//       "https://res.cloudinary.com/p8fs2e1n/image/upload/3right.png",
//     imageAlt:
//       "Connected aquaculture ecosystem linking farmers, dealers, markets, finance and insurance",
//     description:
//       "Farmers • Dealers • Feed Companies • Markets • Finance • Insurance • Industry Partners",
//   },
// ];


// // Convert description string into individual tags
// const toItems = (description) =>
//   description
//     .split("•")
//     .map((item) => item.trim())
//     .filter(Boolean);


// export default function WhatWeDo() {
//   const rootRef = useRef(null);

//   // Lightbox state
//   const [lightboxImage, setLightboxImage] = useState(null);


//   /* =========================================================
//      SCROLL REVEAL ANIMATION
//   ========================================================= */

//   useEffect(() => {
//     const root = rootRef.current;

//     if (!root) return;

//     const targets = Array.from(
//       root.querySelectorAll(".wwd__reveal")
//     );

//     // Fallback for browsers without IntersectionObserver
//     if (typeof IntersectionObserver === "undefined") {
//       targets.forEach((el) =>
//         el.classList.add("is-visible")
//       );

//       return;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(
//               "is-visible"
//             );

//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.15,
//         rootMargin: "0px 0px -10% 0px",
//       }
//     );

//     targets.forEach((el) =>
//       observer.observe(el)
//     );

//     return () => observer.disconnect();
//   }, []);


//   /* =========================================================
//      LIGHTBOX
//   ========================================================= */

//   const openLightbox = (imageSrc, imageAlt) => {
//     setLightboxImage({
//       src: imageSrc,
//       alt: imageAlt || "Enlarged image",
//     });

//     document.body.style.overflow = "hidden";
//   };


//   const closeLightbox = () => {
//     setLightboxImage(null);

//     document.body.style.overflow = "";
//   };


//   /* =========================================================
//      ESC KEY FOR LIGHTBOX
//   ========================================================= */

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (
//         e.key === "Escape" &&
//         lightboxImage
//       ) {
//         closeLightbox();
//       }
//     };

//     document.addEventListener(
//       "keydown",
//       handleKeyDown
//     );

//     return () => {
//       document.removeEventListener(
//         "keydown",
//         handleKeyDown
//       );

//       document.body.style.overflow = "";
//     };
//   }, [lightboxImage]);


//   /* =========================================================
//      JSX
//   ========================================================= */

//   return (
//     <section
//       className="wwd"
//       ref={rootRef}
//       aria-labelledby="what-we-do-title"
//     >
//       <div className="wwd__shell">

//         {/* =====================================================
//             HEADER
//         ===================================================== */}

//         <header className="wwd__head wwd__reveal">

//           <p className="wwd__eyebrow">
//             Aquatech Intelligence
//           </p>

//           <h2
//             className="wwd__title"
//             id="what-we-do-title"
//           >
//             What We{" "}
//             <span className="wwd__title-accent">
//               Do
//             </span>
//           </h2>

//           <p className="wwd__subtitle">
//             Intelligence for Livelihood.
//           </p>

//           <p className="wwd__lead">
//             Building the intelligence infrastructure
//             for freshwater aquaculture — combining
//             Climate, Satellite, Astronomical, and
//             Pond-Level data to make fish farming
//             Predictive, Profitable, and Sustainable.
//           </p>

//         </header>


//         {/* =====================================================
//             DIVIDER
//         ===================================================== */}

//         <div
//           className="wwd__rule wwd__reveal"
//           aria-hidden="true"
//         />


//         {/* =====================================================
//             SECTIONS
//         ===================================================== */}

//         {sections.map((section, index) => {

//           const imageFirst =
//             index % 2 === 0;

//           const items =
//             toItems(section.description);

//           return (
//             <article
//               className={`wwd__block${
//                 imageFirst
//                   ? ""
//                   : " wwd__block--reverse"
//               }`}
//               key={section.id}
//             >

//               {/* =================================================
//                   IMAGE
//               ================================================= */}

//               <div
//                 className={`wwd__media-col wwd__reveal ${
//                   imageFirst
//                     ? "wwd__reveal--left"
//                     : "wwd__reveal--right"
//                 }`}
//               >

//                 <figure
//                   className="wwd__media"
//                   style={{ margin: 0 }}
//                   onClick={() =>
//                     openLightbox(
//                       section.imageSrc,
//                       section.imageAlt
//                     )
//                   }
//                   role="button"
//                   tabIndex={0}
//                   aria-label={`View ${section.title} image`}
//                   onKeyDown={(e) => {
//                     if (
//                       e.key === "Enter" ||
//                       e.key === " "
//                     ) {
//                       openLightbox(
//                         section.imageSrc,
//                         section.imageAlt
//                       );
//                     }
//                   }}
//                 >

//                   <img
//                     className="wwd__img"
//                     src={section.imageSrc}
//                     alt={section.imageAlt}
//                     loading="lazy"
//                     decoding="async"
//                   />

//                 </figure>

//               </div>


//               {/* =================================================
//                   CONTENT
//               ================================================= */}

//               <div
//                 className={`wwd__content-col wwd__reveal ${
//                   imageFirst
//                     ? "wwd__reveal--right"
//                     : "wwd__reveal--left"
//                 }`}
//               >

//                 {/* Number */}

//                 <p className="wwd__num">
//                   {section.number}
//                   <span aria-hidden="true" />
//                 </p>


//                 {/* Kicker */}

//                 <p className="wwd__kicker">
//                   {section.kicker}
//                 </p>


//                 {/* Heading */}

//                 <h3 className="wwd__heading">
//                   {section.title}
//                 </h3>


//                 {/* =================================================
//                     TAG / INTELLIGENCE CHAIN
//                 ================================================= */}

//                 <ul className="wwd__chain">

//                   {items.map(
//                     (item, itemIndex) => (
//                       <li
//                         className="wwd__chip"
//                         key={`${section.id}-${item}`}
//                       >

//                         {itemIndex === 0 ? (
//                           <span
//                             className="wwd__chip-dot"
//                             aria-hidden="true"
//                           />
//                         ) : (
//                           <span
//                             className="wwd__chip-arrow"
//                             aria-hidden="true"
//                           >
//                             →
//                           </span>
//                         )}

//                         {item}

//                       </li>
//                     )
//                   )}

//                 </ul>

//               </div>

//             </article>
//           );
//         })}

//       </div>


//       {/* =========================================================
//           LIGHTBOX
//       ========================================================= */}

//       {lightboxImage && (
//         <div
//           className="wwd__lightbox active"
//           id="wwdLightbox"
//           role="dialog"
//           aria-modal="true"
//           aria-label="Enlarged image view"
//           onClick={(e) => {
//             if (
//               e.target === e.currentTarget
//             ) {
//               closeLightbox();
//             }
//           }}
//         >

//           <button
//             className="wwd__lightbox-close"
//             id="wwdLightboxClose"
//             aria-label="Close lightbox"
//             onClick={closeLightbox}
//             type="button"
//           >
//             ×
//           </button>

//           <img
//             src={lightboxImage.src}
//             alt={lightboxImage.alt}
//             id="wwdLightboxImage"
//           />

//         </div>
//       )}

//     </section>
//   );
// }
























import React, { useEffect, useRef, useState } from "react";
import "./WhatWeDo.css";

/* ==========================================================
   CLOUDINARY IMAGE OPTIMIZATION
   ========================================================== */

const CLOUDINARY_IMAGE_BASE =
  "https://res.cloudinary.com/p8fs2e1n/image/upload";

const getOptimizedImage = (imageName) =>
  `${CLOUDINARY_IMAGE_BASE}/f_auto,q_auto,dpr_auto/${imageName}`;

/*
  Original images are kept exactly the same.
  Only Cloudinary delivery is optimized.
*/
const sections = [
  {
    id: 1,
    number: "01",
    kicker: "Aquaculture Intelligence",
    title: "Aquaculture Intelligence",
    imageSrc: getOptimizedImage("2right.png"),
    imageAlt:
      "Aquaculture intelligence dashboard combining pond, climate and farmer data layers",

    description:
      "15-Day Forward Action Plan • Disease Outbreak Prediction • Water Quality Intelligence • Climate Risk Scoring • Climate Early Warning • Farmer Behaviour Analytics",
  },

  {
    id: 2,
    number: "02",
    kicker: "3AI AquaStack",
    title: "3AI AquaStack",
    imageSrc: getOptimizedImage("1right.png"),
    imageAlt:
      "3AI AquaStack combining satellite, astronomical and pond-level intelligence",

    description:
      "Satellite Imagery • Astronomical Data • Pond-Level Inputs • Disease Prediction • Harvest Forecasting • Farm Risk Scoring • Climate Advisory • Action Intelligence",
  },

  {
    id: 3,
    number: "03",
    kicker: "Connected Ecosystem",
    title: "Connected Aquaculture Ecosystem",
    imageSrc: getOptimizedImage("3right.png"),
    imageAlt:
      "Connected aquaculture ecosystem linking farmers, dealers, markets, finance and insurance",

    description:
      "Farmers • Dealers • Feed Companies • Markets • Finance • Insurance • Industry Partners",
  },
];

/* ==========================================================
   DESCRIPTION → TAGS
   ========================================================== */

const toItems = (description) =>
  description
    .split("•")
    .map((item) => item.trim())
    .filter(Boolean);

/* ==========================================================
   COMPONENT
   ========================================================== */

export default function WhatWeDo() {
  const rootRef = useRef(null);

  const [lightboxImage, setLightboxImage] = useState(null);

  /* ==========================================================
     SCROLL REVEAL
     ========================================================== */

  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const targets = root.querySelectorAll(".wwd__reveal");

    /*
      If browser does not support IntersectionObserver,
      immediately show everything.
    */
    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((element) => {
        element.classList.add("is-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");

          /*
            Stop observing after first reveal.
            This avoids unnecessary browser work.
          */
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    targets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  /* ==========================================================
     LIGHTBOX
     ========================================================== */

  const openLightbox = (imageSrc, imageAlt) => {
    setLightboxImage({
      src: imageSrc,
      alt: imageAlt || "Enlarged image",
    });

    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "";
  };

  /* ==========================================================
     ESC KEY
     ========================================================== */

  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxImage]);

  /* ==========================================================
     JSX
     ========================================================== */

  return (
    <section
      className="wwd"
      ref={rootRef}
      aria-labelledby="what-we-do-title"
    >
      <div className="wwd__shell">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="wwd__head wwd__reveal">
          <p className="wwd__eyebrow">
            Aquatech Intelligence
          </p>

          <h2
            className="wwd__title"
            id="what-we-do-title"
          >
            What{" "}
            <span className="wwd__title-accent">
              We Do
            </span>
          </h2>

          <p className="wwd__subtitle">
            Intelligence for Livelihood.
          </p>

          <p className="wwd__lead">
            Building the intelligence infrastructure
            for freshwater aquaculture — combining
            Climate, Satellite, Astronomical, and
            Pond-Level data to make fish farming
            Predictive, Profitable, and Sustainable.
          </p>
        </header>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div
          className="wwd__rule wwd__reveal"
          aria-hidden="true"
        />

        {/* =====================================================
            SECTIONS
        ===================================================== */}

        {sections.map((section, index) => {
          const imageFirst = index % 2 === 0;
          const items = toItems(section.description);

          return (
            <article
              className={`wwd__block${
                imageFirst ? "" : " wwd__block--reverse"
              }`}
              key={section.id}
            >
              {/* =================================================
                  IMAGE
              ================================================= */}

              <div
                className={`wwd__media-col wwd__reveal ${
                  imageFirst
                    ? "wwd__reveal--left"
                    : "wwd__reveal--right"
                }`}
              >
                <figure
                  className="wwd__media"
                  style={{ margin: 0 }}
                  onClick={() =>
                    openLightbox(
                      section.imageSrc,
                      section.imageAlt
                    )
                  }
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${section.title} image`}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      event.preventDefault();

                      openLightbox(
                        section.imageSrc,
                        section.imageAlt
                      );
                    }
                  }}
                >
                  <img
                    className="wwd__img"
                    src={section.imageSrc}
                    alt={section.imageAlt}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    width="1200"
                    height="600"
                  />
                </figure>
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div
                className={`wwd__content-col wwd__reveal ${
                  imageFirst
                    ? "wwd__reveal--right"
                    : "wwd__reveal--left"
                }`}
              >
                <p className="wwd__num">
                  {section.number}
                  <span aria-hidden="true" />
                </p>

                <p className="wwd__kicker">
                  {section.kicker}
                </p>

                <h3 className="wwd__heading">
                  {section.title}
                </h3>

                <ul className="wwd__chain">
                  {items.map((item, itemIndex) => (
                    <li
                      className="wwd__chip"
                      key={`${section.id}-${item}`}
                    >
                      {itemIndex === 0 ? (
                        <span
                          className="wwd__chip-dot"
                          aria-hidden="true"
                        />
                      ) : (
                        <span
                          className="wwd__chip-arrow"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      )}

                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      {/* =========================================================
          LIGHTBOX
      ========================================================= */}

      {lightboxImage && (
        <div
          className="wwd__lightbox active"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image view"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <button
            className="wwd__lightbox-close"
            aria-label="Close lightbox"
            onClick={closeLightbox}
            type="button"
          >
            ×
          </button>

          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            decoding="async"
          />
        </div>
      )}
    </section>
  );
}