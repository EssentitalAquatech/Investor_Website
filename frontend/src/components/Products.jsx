



// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// import "./Products.css";

// // ☁️ Cloudinary Images
// const aquaImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/VachaOS.png";

// const meenammaImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/meenamma.png";

// const aquaSenseImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/KechoSense.png";

// const aquaRiskImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/Goonch.png";


// /* =========================================================
//    PRODUCT SECTION
// ========================================================= */

// function ProductSection({
//   imageSrc,
//   number,
//   title,
//   slug,
//   tagline,
//   description,
//   index
// }) {
//   const sectionRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           }
//         });
//       },
//       {
//         threshold: 0.2
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   /* =========================================================
//      LEARN MORE
//   ========================================================= */

//   const handleLearnMore = () => {
//     navigate(`/products/${slug}`);
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div
//       ref={sectionRef}
//       className={`product-section ${
//         index % 2 !== 0 ? "reverse" : ""
//       }`}
//     >

//       <div className="row align-items-center">

//         {/* ================= IMAGE ================= */}

//         <div className="col-lg-6 col-md-12 mb-4">

//           <div className="product-image-wrapper">

//             <img
//               src={imageSrc}
//               alt={`${title} - Aquaculture Intelligence`}
//               loading="lazy"
//             />

//           </div>

//         </div>


//         {/* ================= CONTENT ================= */}

//         <div className="col-lg-6 col-md-12">

//           <div className="product-content-wrapper">

//             {/* ================= EYEBROW ================= */}

//             <div className="product-eyebrow">

//               <span className="product-number">
//                 {number}
//               </span>

//               <span className="product-line"></span>

//               <span className="product-label">
//                 PRODUCT
//               </span>

//             </div>


//             {/* ================= TITLE ================= */}

//             <h3 className="product-title">
//               {title}
//             </h3>


//             {/* ================= TAGLINE ================= */}

//             <h4 className="product-tagline">
//               {tagline}
//             </h4>


//             {/* ================= DESCRIPTION ================= */}

//             <p className="product-text">
//               {description}
//             </p>


//             {/* ================= LEARN MORE ================= */}

//             <button
//               className="learn-more-btn"
//               onClick={handleLearnMore}
//             >

//               <span>
//                 Learn More
//               </span>

//               <svg
//                 className="learn-more-icon"
//                 width="18"
//                 height="18"
//                 viewBox="0 0 20 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >

//                 <path
//                   d="M4 10H16"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />

//                 <path
//                   d="M11 5L16 10L11 15"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />

//               </svg>

//             </button>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }


// /* =========================================================
//    SECONDARY PRODUCTS SECTION
// ========================================================= */

// function SecondaryProducts() {

//   const sectionRef = useRef(null);

//   useEffect(() => {

//     const observer = new IntersectionObserver(
//       (entries) => {

//         entries.forEach((entry) => {

//           if (entry.isIntersecting) {

//             entry.target.classList.add("visible");

//             observer.disconnect();

//           }

//         });

//       },
//       {
//         threshold: 0.2
//       }
//     );


//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }


//     return () => observer.disconnect();

//   }, []);


//   /* ================================
//      FISHHAAT BUTTON
//   ================================= */

//   const handleExploreClick = () => {

//     window.open(
//       "https://fishhaat.com/",
//       "_blank"
//     );

//   };


//   return (

//     <div
//       ref={sectionRef}
//       className="secondary-products-section"
//     >

//       <div className="secondary-products-content">


//         {/* ================================
//            HEADING
//         ================================= */}

//         <h2 className="secondary-products-title">

//           <span className="fishhaat-highlight">
//             FishHaat
//           </span>{" "}
//           — India's Freshwater Aquaculture Marketplace

//         </h2>


//         {/* ================================
//            DESCRIPTION
//         ================================= */}

//         <p className="secondary-products-text">

//           FishHaat delivers quality fish health medicines,
//           feed supplements, and fingerlings, fish feed
//           directly to farmers — backed by MeenAmma's
//           diagnostic intelligence. The right input, at the
//           right time, for the right pond.

//         </p>


//         {/* ================================
//            VISIT FISHHAAT BUTTON
//         ================================= */}

//         <button
//           className="explore-btn secondary-explore-btn"
//           onClick={handleExploreClick}
//         >

//           <span>
//             Visit FishHaat
//           </span>


//           <svg
//             className="explore-icon"
//             width="20"
//             height="20"
//             viewBox="0 0 20 20"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >

//             <path
//               d="M4 10H16"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//             />

//             <path
//               d="M11 5L16 10L11 15"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//             />

//           </svg>

//         </button>

//       </div>

//     </div>

//   );

// }


// /* =========================================================
//    MAIN PRODUCTS COMPONENT
// ========================================================= */

// export default function Products() {

//   const sections = [

//     /* =====================================
//        01 — VACHAOS
//     ===================================== */

//     {
//       imageSrc: aquaImage,

//       number: "01",

//       title: "VachaOS",

//       // Existing URL slug kept unchanged
//       slug: "vachaos",

//       tagline:
//         "Enterprise Intelligence OS ",

//       description:
//         " VachaOS gives large farms, cooperatives, governments, and institutions the predictive intelligence to see what is coming before it arrives."

//     },


//     /* =====================================
//        02 — MEENAMMA AI
//     ===================================== */

//     {
//       imageSrc: meenammaImage,

//       number: "02",

//       title: "Meenamma AI",

//       // Existing URL slug kept unchanged
//       slug: "meenamma-ai",

//       tagline:
//         "Your AI companion for smarter aquaculture.",

//       description:
//         "Meenamma AI brings intelligent, conversational support directly to farmers. It turns complex farm data and aquaculture intelligence into simple, practical guidance that helps farmers make better decisions at the right time."

//     },


//     /* =====================================
//        03 — KECHOSENSE
//     ===================================== */

//    {
//   imageSrc: aquaSenseImage,

//   number: "03",

//   title: "KechoSense",

//   // Existing URL slug kept unchanged
//   slug: "KechoSense",

//   tagline: (
//     <>
//       Environmental Intelligence Layer
//       <br />
    
//     </>
//   ),

//   description:
//     "  See beyond the pond. Sense what is coming before it arrives."
// },


//     /* =====================================
//        04 — GOONCH
//     ===================================== */

//    {
//   imageSrc: aquaRiskImage,

//   number: "04",

//   title: "Goonch",

//   // Existing URL slug kept unchanged
//   slug: "goonch",

//   tagline: (
//     <>
//       Financial Risk Intelligence.
//       <br />
      
//     </>
//   ),

// description:
//   "In aquaculture, the ability to see risk before it surfaces is the only intelligence that matters.",
// },

//   ];


//   return (

//     <section className="products-main">

//       <div className="container">


//         {/* ================================
//            MAIN HEADING
//         ================================= */}

//         <h2 className="products-heading">

//           Our <span>Products</span>

//         </h2>


//         {/* ================================
//            MAIN PRODUCTS
//         ================================= */}

//         {sections.map((item, index) => (

//           <ProductSection
//             key={item.slug}

//             index={index}

//             number={item.number}

//             imageSrc={item.imageSrc}

//             title={item.title}

//             slug={item.slug}

//             tagline={item.tagline}

//             description={item.description}
//           />

//         ))}


//         {/* ================================
//            FISHHAAT / SECONDARY PRODUCT
//         ================================= */}

//         <SecondaryProducts />

//       </div>

//     </section>

//   );

// }

















import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./Products.css";

// ☁️ Cloudinary Images
const aquaImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/VachaOS.png";

const meenammaImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/meenamma.png";

const aquaSenseImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/KechoSense.png";

const aquaRiskImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/Goonch.png";


/* =========================================================
   DIRECTIONAL REVEAL PATTERN
   ---------------------------------------------------------
   For each product block we pick a pattern that assigns a
   different direction to each inner element. Since blocks
   alternate layout (normal / reverse), we swap the pattern
   for reversed blocks so the animation always feels natural.
========================================================= */

// Pattern for normal (image-left) product sections
const PATTERN_NORMAL = {
  image: "left",
  number: "top",
  label: "top",
  title: "right",
  tagline: "right",
  description: "bottom",
  button: "bottom",
};

// Pattern for reverse (image-right) product sections
const PATTERN_REVERSE = {
  image: "right",
  number: "top",
  label: "top",
  title: "left",
  tagline: "left",
  description: "bottom",
  button: "bottom",
};


/* =========================================================
   PRODUCT SECTION
========================================================= */

function ProductSection({
  imageSrc,
  number,
  title,
  slug,
  tagline,
  description,
  index
}) {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

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
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     LEARN MORE
  ========================================================= */

  const handleLearnMore = () => {
    navigate(`/products/${slug}`);
    window.scrollTo(0, 0);
  };

  const isReverse = index % 2 !== 0;
  const dir = isReverse ? PATTERN_REVERSE : PATTERN_NORMAL;

  return (
    <div
      ref={sectionRef}
      className={`product-section ${
        isReverse ? "reverse" : ""
      }`}
    >

      <div className="row align-items-center">

        {/* ================= IMAGE ================= */}

        <div className="col-lg-6 col-md-12 mb-4">

          <div
            className={`product-image-wrapper p-reveal p-reveal--${dir.image}`}
          >

            <img
              src={imageSrc}
              alt={`${title} - Aquaculture Intelligence`}
              loading="lazy"
            />

          </div>

        </div>


        {/* ================= CONTENT ================= */}

        <div className="col-lg-6 col-md-12">

          <div className="product-content-wrapper">

            {/* ================= EYEBROW ================= */}

            <div
              className={`product-eyebrow p-reveal p-reveal--${dir.number}`}
              data-delay="1"
            >

              <span className="product-number">
                {number}
              </span>

              <span className="product-line"></span>

              <span
                className={`product-label p-reveal p-reveal--${dir.label}`}
                data-delay="2"
              >
                PRODUCT
              </span>

            </div>


            {/* ================= TITLE ================= */}

            <h3
              className={`product-title p-reveal p-reveal--${dir.title}`}
              data-delay="2"
            >
              {title}
            </h3>


            {/* ================= TAGLINE ================= */}

            <h4
              className={`product-tagline p-reveal p-reveal--${dir.tagline}`}
              data-delay="3"
            >
              {tagline}
            </h4>


            {/* ================= DESCRIPTION ================= */}

            <p
              className={`product-text p-reveal p-reveal--${dir.description}`}
              data-delay="4"
            >
              {description}
            </p>


            {/* ================= LEARN MORE ================= */}

            <button
              className={`learn-more-btn p-reveal p-reveal--${dir.button} p-reveal--scale`}
              data-delay="5"
              onClick={handleLearnMore}
            >

              <span>
                Learn More
              </span>

              <svg
                className="learn-more-icon"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >

                <path
                  d="M4 10H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M11 5L16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

              </svg>

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   SECONDARY PRODUCTS SECTION
========================================================= */

function SecondaryProducts() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.disconnect();

          }

        });

      },
      {
        threshold: 0.2
      }
    );


    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }


    return () => observer.disconnect();

  }, []);


  /* ================================
     FISHHAAT BUTTON
  ================================= */

  const handleExploreClick = () => {

    window.open(
      "https://fishhaat.com/",
      "_blank"
    );

  };


  return (

    <div
      ref={sectionRef}
      className="secondary-products-section"
    >

      <div className="secondary-products-content">


        {/* ================================
           HEADING — from TOP
        ================================= */}

        <h2
          className="secondary-products-title p-reveal p-reveal--top"
          data-delay="1"
        >

          <span className="fishhaat-highlight">
            FishHaat
          </span>{" "}
          — India's Freshwater Aquaculture Marketplace

        </h2>


        {/* ================================
           DESCRIPTION — from LEFT
        ================================= */}

        <p
          className="secondary-products-text p-reveal p-reveal--left"
          data-delay="2"
        >

          FishHaat delivers quality fish health medicines,
          feed supplements, and fingerlings, fish feed
          directly to farmers — backed by MeenAmma's
          diagnostic intelligence. The right input, at the
          right time, for the right pond.

        </p>


        {/* ================================
           VISIT FISHHAAT BUTTON — from BOTTOM
        ================================= */}

        <button
          className="explore-btn secondary-explore-btn p-reveal p-reveal--bottom p-reveal--scale"
          data-delay="3"
          onClick={handleExploreClick}
        >

          <span>
            Visit FishHaat
          </span>


          <svg
            className="explore-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >

            <path
              d="M4 10H16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M11 5L16 10L11 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />

          </svg>

        </button>

      </div>

    </div>

  );

}


/* =========================================================
   MAIN PRODUCTS COMPONENT
========================================================= */

export default function Products() {

  const headingRef = useRef(null);

  /* Reveal the main "Our Products" heading */
  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.disconnect();

          }

        });

      },
      { threshold: 0.3 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();

  }, []);

  const sections = [

    /* =====================================
       01 — VACHAOS
    ===================================== */

    {
      imageSrc: aquaImage,

      number: "01",

      title: "VachaOS",

      // Existing URL slug kept unchanged
      slug: "vachaos",

      tagline:
        "Enterprise Intelligence OS ",

      description:
        " VachaOS gives large farms, cooperatives, governments, and institutions the predictive intelligence to see what is coming before it arrives."

    },


    /* =====================================
       02 — MEENAMMA AI
    ===================================== */

    {
      imageSrc: meenammaImage,

      number: "02",

      title: "Meenamma AI",

      // Existing URL slug kept unchanged
      slug: "meenamma-ai",

      tagline:
        "Your AI companion for smarter aquaculture.",

      description:
        "Meenamma AI brings intelligent, conversational support directly to farmers. It turns complex farm data and aquaculture intelligence into simple, practical guidance that helps farmers make better decisions at the right time."

    },


    /* =====================================
       03 — KECHOSENSE
    ===================================== */

   {
  imageSrc: aquaSenseImage,

  number: "03",

  title: "KechoSense",

  // Existing URL slug kept unchanged
  slug: "KechoSense",

  tagline: (
    <>
      Environmental Intelligence Layer
      <br />
    
    </>
  ),

  description:
    "  See beyond the pond. Sense what is coming before it arrives."
},


    /* =====================================
       04 — GOONCH
    ===================================== */

   {
  imageSrc: aquaRiskImage,

  number: "04",

  title: "Goonch",

  // Existing URL slug kept unchanged
  slug: "goonch",

  tagline: (
    <>
      Financial Risk Intelligence.
      <br />
      
    </>
  ),

description:
  "In aquaculture, the ability to see risk before it surfaces is the only intelligence that matters.",
},

  ];


  return (

    <section className="products-main">

      <div className="container">


        {/* ================================
           MAIN HEADING — from TOP
        ================================= */}

        <h2
          ref={headingRef}
          className="products-heading"
        >

          Our <span>Products</span>

        </h2>


        {/* ================================
           MAIN PRODUCTS
        ================================= */}

        {sections.map((item, index) => (

          <ProductSection
            key={item.slug}

            index={index}

            number={item.number}

            imageSrc={item.imageSrc}

            title={item.title}

            slug={item.slug}

            tagline={item.tagline}

            description={item.description}
          />

        ))}


        {/* ================================
           FISHHAAT / SECONDARY PRODUCT
        ================================= */}

        <SecondaryProducts />

      </div>

    </section>

  );

}