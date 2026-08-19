


// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// // ☁️ Cloudinary Images
// const aquaImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/aqua.png";

// const meenammaImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/meenamma.png";

// const aquaSenseImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/Sense.png";

// const aquaRiskImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/Risk.png";


// function ProductSection({
//   imageSrc,
//   number,
//   title,
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

//   // Product URL slug
//   const productSlug = title
//     .toLowerCase()
//     .replace(/\s+/g, "-");

//   const handleLearnMore = () => {
//     navigate(`/products/${productSlug}`);
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

//             {/* Eyebrow */}
//             <div className="product-eyebrow">

//               <span className="product-number">
//                 {number}
//               </span>

//               <span className="product-line"></span>

//               <span className="product-label">
//                 PRODUCT
//               </span>

//             </div>


//             {/* Title */}
//             <h3 className="product-title">
//               {title}
//             </h3>


//             {/* Tagline */}
//             <h4 className="product-tagline">
//               {tagline}
//             </h4>


//             {/* Description */}
//             <p className="product-text">
//               {description}
//             </p>


//             {/* Learn More */}
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


// export default function Products() {

//   const sections = [

//     /* =====================================
//        01 — FISHOS
//     ===================================== */
//     {
//       imageSrc: aquaImage,

//       number: "01",

//       title: "FishOS",

//       tagline:
//         "The intelligence operating system for aquaculture.",

//       description:
//         "FishOS brings together farm data, pond intelligence, operational history and AI-driven insights into one connected intelligence layer. It helps transform fragmented aquaculture data into actionable intelligence for smarter farm management."
//     },


//     /* =====================================
//        02 — MEENAMMA AI
//     ===================================== */
//     {
//       imageSrc: meenammaImage,

//       number: "02",

//       title: "Meenamma AI",

//       tagline:
//         "Your AI companion for smarter aquaculture.",

//       description:
//         "Meenamma AI brings intelligent, conversational support directly to farmers. It turns complex farm data and aquaculture intelligence into simple, practical guidance that helps farmers make better decisions at the right time."
//     },


//     /* =====================================
//        03 — AQUASENSE
//     ===================================== */
//     {
//       imageSrc: aquaSenseImage,

//       number: "03",

//       title: "AquaSense",

//       tagline:
//         "See beyond the pond with environmental intelligence.",

//       description:
//         "AquaSense combines satellite, weather, geospatial and environmental signals to build a deeper understanding of pond and farm conditions. It helps reveal risks, patterns and changes that may not be visible from the ground."
//     },


//     /* =====================================
//        04 — AQUARISK
//     ===================================== */
//     {
//       imageSrc: aquaRiskImage,

//       number: "04",

//       title: "AquaRisk",

//       tagline:
//         "Farm intelligence for smarter credit, insurance and risk.",

//       description:
//         "AquaRisk transforms farm-level intelligence into actionable risk insights for financial institutions, insurers and enterprise partners. It enables more informed decisions around credit, insurance and aquaculture risk."
//     }

//   ];


//   /* =====================================
//      FISHHAAT
//   ===================================== */
//   const handleExploreClick = () => {
//     window.open(
//       "https://fishhaat.com/",
//       "_blank"
//     );
//   };


//   return (
//     <section className="products-main">

//       <div className="container">

//         {/* ================= HEADING ================= */}

//         <h2 className="products-heading">
//           Our <span>Products</span>
//         </h2>


//         {/* ================= MAIN PRODUCTS ================= */}

//         {sections.map((item, index) => (

//           <ProductSection
//             key={item.title}

//             index={index}

//             number={item.number}

//             imageSrc={item.imageSrc}

//             title={item.title}

//             tagline={item.tagline}

//             description={item.description}
//           />

//         ))}


//         {/* ==========================================
//             SECONDARY PRODUCTS
//         ========================================== */}

//         <div className="secondary-products-section">

//           <div className="secondary-products-content">

//             {/* Eyebrow */}
//             <div className="secondary-products-eyebrow">

//               <span className="secondary-products-line"></span>

//               <span>
//                 SECONDARY PRODUCTS
//               </span>

//             </div>


//             {/* Heading */}
//             <h2 className="secondary-products-title">
//               Another <span>Secondary Products</span>
//             </h2>


//             {/* Description */}
//             <p className="secondary-products-text">
//               Looking for products and solutions related to
//               fish farming? Explore FishHaat for a wide range
//               of fish farming products designed to support
//               farmers in their everyday aquaculture needs.
//             </p>


//             <p className="secondary-products-subtext">
//               Visit FishHaat.com to explore more fish farming
//               products and find the right solutions for your farm.
//             </p>


//             {/* Explore Button */}
//             <button
//               className="explore-btn secondary-explore-btn"
//               onClick={handleExploreClick}
//             >

//               <span>
//                 Explore More Products
//               </span>


//               <svg
//                 className="explore-icon"
//                 width="20"
//                 height="20"
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

//     </section>
//   );
// }
























import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

// ☁️ Cloudinary Images
const aquaImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/aqua.png";

const meenammaImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/meenamma.png";

const aquaSenseImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/Sense.png";

const aquaRiskImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/Risk.png";


/* =========================================================
   PRODUCT SECTION
========================================================= */

function ProductSection({
  imageSrc,
  number,
  title,
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

  // Product URL slug
  const productSlug = title
    .toLowerCase()
    .replace(/\s+/g, "-");

  const handleLearnMore = () => {
    navigate(`/products/${productSlug}`);
    window.scrollTo(0, 0);
  };

  return (
    <div
      ref={sectionRef}
      className={`product-section ${
        index % 2 !== 0 ? "reverse" : ""
      }`}
    >
      <div className="row align-items-center">

        {/* ================= IMAGE ================= */}
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="product-image-wrapper">

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
            <div className="product-eyebrow">

              <span className="product-number">
                {number}
              </span>

              <span className="product-line"></span>

              <span className="product-label">
                PRODUCT
              </span>

            </div>


            {/* ================= TITLE ================= */}
            <h3 className="product-title">
              {title}
            </h3>


            {/* ================= TAGLINE ================= */}
            <h4 className="product-tagline">
              {tagline}
            </h4>


            {/* ================= DESCRIPTION ================= */}
            <p className="product-text">
              {description}
            </p>


            {/* ================= LEARN MORE ================= */}
            <button
              className="learn-more-btn"
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
           EYEBROW
        ================================= */}

        <div className="secondary-products-eyebrow">

          <span className="secondary-products-line"></span>

          <span>
            SECONDARY PRODUCTS
          </span>

          <span className="secondary-products-line"></span>

        </div>


        {/* ================================
           HEADING
        ================================= */}

        <h2 className="secondary-products-title">

          Another{" "}

          <span>
            Secondary Products
          </span>

        </h2>


        {/* ================================
           DESCRIPTION
        ================================= */}

        <p className="secondary-products-text">

          Looking for products and solutions related to
          fish farming? Explore FishHaat for a wide range
          of fish farming products designed to support
          farmers in their everyday aquaculture needs.

        </p>


        {/* ================================
           SUBTEXT
        ================================= */}

        <p className="secondary-products-subtext">

          Visit FishHaat.com to explore more fish farming
          products and find the right solutions for your farm.

        </p>


        {/* ================================
           EXPLORE BUTTON
        ================================= */}

        <button
          className="explore-btn secondary-explore-btn"
          onClick={handleExploreClick}
        >

          <span>
            Explore More Products
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

  const sections = [

    /* =====================================
       01 — FISHOS
    ===================================== */

    {
      imageSrc: aquaImage,

      number: "01",

      title: "FishOS",

      tagline:
        "The intelligence operating system for aquaculture.",

      description:
        "FishOS brings together farm data, pond intelligence, operational history and AI-driven insights into one connected intelligence layer. It helps transform fragmented aquaculture data into actionable intelligence for smarter farm management."
    },


    /* =====================================
       02 — MEENAMMA AI
    ===================================== */

    {
      imageSrc: meenammaImage,

      number: "02",

      title: "Meenamma AI",

      tagline:
        "Your AI companion for smarter aquaculture.",

      description:
        "Meenamma AI brings intelligent, conversational support directly to farmers. It turns complex farm data and aquaculture intelligence into simple, practical guidance that helps farmers make better decisions at the right time."
    },


    /* =====================================
       03 — AQUASENSE
    ===================================== */

    {
      imageSrc: aquaSenseImage,

      number: "03",

      title: "AquaSense",

      tagline:
        "See beyond the pond with environmental intelligence.",

      description:
        "AquaSense combines satellite, weather, geospatial and environmental signals to build a deeper understanding of pond and farm conditions. It helps reveal risks, patterns and changes that may not be visible from the ground."
    },


    /* =====================================
       04 — AQUARISK
    ===================================== */

    {
      imageSrc: aquaRiskImage,

      number: "04",

      title: "AquaRisk",

      tagline:
        "Farm intelligence for smarter credit, insurance and risk.",

      description:
        "AquaRisk transforms farm-level intelligence into actionable risk insights for financial institutions, insurers and enterprise partners. It enables more informed decisions around credit, insurance and aquaculture risk."
    }

  ];


  return (

    <section className="products-main">

      <div className="container">


        {/* ================================
           MAIN HEADING
        ================================= */}

        <h2 className="products-heading">

          Our <span>Products</span>

        </h2>


        {/* ================================
           MAIN PRODUCTS
        ================================= */}

        {sections.map((item, index) => (

          <ProductSection
            key={item.title}

            index={index}

            number={item.number}

            imageSrc={item.imageSrc}

            title={item.title}

            tagline={item.tagline}

            description={item.description}
          />

        ))}


        {/* ================================
           SECONDARY PRODUCTS
        ================================= */}

        <SecondaryProducts />

      </div>

    </section>

  );
}