

// import { useNavigate, useParams } from "react-router-dom";
// import "./ProductDetails.css";
// import SEO from "./SEO";

// // ☁️ Cloudinary Product Images
// const aquaImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/VachaOS.png";

// const meenammaImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/meenamma.png";

// const aquaSenseImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/KechoSense.png";

// const aquaRiskImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/Goonch.png";


// /* =========================================================
//    PRODUCT DETAILS DATA
// ========================================================= */

// const productData = {

//   /* =====================================
//      01 — VACHAOS
//   ===================================== */

//   vachaos: {
//     number: "01",

//     title: "VACHA OS",

//     tagline:
//       "The intelligence operating system for aquaculture.",

//     image: aquaImage,

//     intro:
//       "VachaOS — Enterprise Intelligence OS",

//     description:
//       "Named after India's most endangered freshwater catfish, Eutropiichthys vacha — VachaOS gives large farms, cooperatives, governments, and institutions the predictive intelligence to see what is coming before it arrives — pond by pond, season by season, decision by decision.",

//     capabilitiesTitle:
//       "",

//     capabilitiesDescription:
//       "See every pond. Predict every risk. Drive every decision.",

//     features: [

//       {
//         title: "Multi-Pond Intelligence",

//         description:
//           "Monitor every pond in real time. Water health, disease risk, feeding efficiency and biomass — all visible, all actionable."
//       },

//       {
//         title: "Predictive Disease & Risk Alerts",

//         description:
//           "Know which pond needs intervention before mortality begins. AI-driven early warning gives you hours, not hours of loss."
//       },

//       {
//         title: "Harvest & Demand Forecasting",

//         description:
//           "Predict harvest volume and timing across your entire farm or cluster. Forward-contract with buyers before your fish reaches the net."
//       },

//       {
//         title: "Policy & Governance Intelligence ",

//         description:
//           "Governments get a live digital twin of freshwater aquaculture across their jurisdiction. Predict outcomes, target schemes, and monitor implementation in real time."
//       },

//       {
//         title: "Research-Grade Longitudinal Data",

//         description:
//           "Research institutions access structured, time-series pond outcome data across species, geographies, and seasons. Publishable. Fundable. Impossible to collect independently."
//       },

//       {
//         title: "Input Demand Intelligence",

//         description:
//           "Feed companies and input manufacturers receive district-level forward demand signals. Know what farmers will need next season — before they ask."
//       }

//     ],

//     bottomText:
//       "By connecting data, intelligence and operations, VACHAOS helps aquaculture move from fragmented information to smarter, data-driven decisions."
//   },


//   /* =====================================
//      02 — MEENAMMA AI
//   ===================================== */

//   "meenamma-ai": {
//     number: "02",

//     title: "Meenamma AI",

//     tagline:
//       "Your AI companion for smarter aquaculture.",

//     image: meenammaImage,

//     intro:
//       "Meenamma AI brings aquaculture intelligence directly into the farmer's hands.",

//     description:
//       "Farmers often have access to large amounts of information but need simple and timely answers. Meenamma AI understands aquaculture conversations and turns complex farm intelligence into practical guidance.",

//     capabilitiesTitle:
//       "",

//     capabilitiesDescription:
//       "Ask anything. Understand your farm. Act with confidence.",

//     features: [

//       {
//         title: "Natural language conversations",

//         description:
//           "Lets farmers interact with aquaculture intelligence naturally through simple, everyday conversations."
//       },

//       {
//         title: "Farmer-friendly AI assistance",

//         description:
//           "Turns complex aquaculture information into simple, understandable guidance that farmers can act on."
//       },

//       {
//         title: "Pond and fish health guidance",

//         description:
//           "Helps farmers understand pond and fish health conditions and provides guidance for better farm management."
//       },

//       {
//         title: "Feeding recommendations",

//         description:
//           "Provides intelligent feeding guidance based on farm conditions to support efficient feeding and healthier fish growth."
//       },

//       {
//         title: "Water-quality insights",

//         description:
//           "Helps farmers interpret water-quality conditions and understand their potential impact on fish and pond performance."
//       },

//       {
//         title: "Personalized farm recommendations",

//         description:
//           "Uses farm-specific information to provide recommendations tailored to the farmer's pond, conditions and needs."
//       }

//     ],

//     bottomText:
//       "From everyday questions to critical farm decisions, Meenamma AI helps farmers understand what is happening and what action they can take next."
//   },


//   /* =====================================
//      03 — KECHOSENSE
//   ===================================== */

//   "KechoSense": {
//     number: "03",

//     title: "KechoSense",

//     tagline:
//       "See beyond the pond with environmental intelligence.",

//     image: aquaSenseImage,

//  intro: (
//   <>
//     KechoSense — Environmental Intelligence Layer
//     <br />
//     See beyond the pond.
//     <br />
//     Sense what is coming before it arrives.
//   </>
// ),

// description:
//   "Named after the earthworm — কেঁচো — that senses what is coming from beneath the soil before it is visible above it. KechoSense reads the environment around your pond so you are never caught by what you did not see coming.",
//     capabilitiesTitle:
//       "",

//     capabilitiesDescription:
//       "See beyond the pond. Detect change early. Understand what comes next.",

//     features: [

//       {
//         title: "Climate & Weather Intelligence",

//         description:
//           "Hyperlocal heat stress, cold wave, and rainfall anomaly alerts at pond-cluster level. Not district weather — your pond's weather, your pond's risk."
//       },

//       {
//         title: "Flood & Disaster Early Warning",

//         description:
//           "Pre-flood harvest advisory, inundation risk mapping, and post-flood pond recovery protocols. Act before the water rises, not after."
//       },

//       {
//         title: "GHG & Carbon Intelligence",

//         description:
//           "Pond-level methane and nitrous oxide emission estimation. Carbon sequestration monitoring from biochar and aquatic vegetation. Carbon credit eligibility tracked automatically."
//       },

//       {
//         title: "Water Resource Intelligence",

//         description:
//           "River and canal availability for pond replenishment, groundwater trend monitoring, and upstream pollution discharge alerts before they reach your pond."
//       },

//       {
//         title: "Livelihood & Social Impact Matrix",

//         description:
//           "Farmer income correlated with climate events. Community protein security index. Climate vulnerability scoring per household. Impact data that funders, governments, and ESG investors can act on."
//       },

//       {
//         title: "Biodiversity & Ecosystem Health",

//         description:
//           "Native species presence monitoring, wetland health index, and biodiversity credit alignment — connecting aquaculture to the emerging natural capital economy."
//       }

//     ],

//     bottomText:
//       "Kechosense helps reveal patterns and environmental changes that may not be visible from the ground, enabling better awareness and earlier decisions."
//   },


//   /* =====================================
//      04 — GOONCH
//   ===================================== */

//   goonch: {
//     number: "04",

//     title: "Goonch",

//     tagline:
//       "Farm intelligence for smarter credit, insurance and risk.",

//     image: aquaRiskImage,

//    intro: (
//   <>
//     Goonch
//     <br />
//     Financial Risk Intelligence.
//     <br />
//     In aquaculture, the ability to see risk before it surfaces is the only intelligence that matters.
//   </>
// ),

// description:
//   "Goonch transforms farm intelligence into financial intelligence. By understanding pond health, farm performance and emerging risks, it helps reveal the signals that matter for smarter credit, insurance and financial decisions.",

//     capabilitiesTitle:
//       "",

//     capabilitiesDescription:
//       "In aquaculture, the ability to see risk before it surfaces is the only intelligence that matters.",

//     features: [

//       {
//         title: "Farm Health Score — Aquaculture's First Credit Score",

//         description:
//           "A longitudinal creditworthiness index built from pond health data, disease history, input behaviour and yield outcomes. The underwriting asset no bank or NBFC has ever had access to — until now."
//       },

//       {
//         title: "Crop Cycle Credit Intelligence",

//         description:
//           "Predict repayment capacity per farmer per crop cycle. Match credit products to farm risk profiles. Enable rural NBFCs and cooperative banks to lend with confidence into a market they previously could not read."
//       },

//       {
//         title: "Aquaculture Insurance Underwriting",

//         description:
//           "Pond-level risk profiles for parametric and indemnity-based aquaculture insurance. Disease history, climate exposure, flood vulnerability and mortality probability — structured for actuarial use."
//       },

//       {
//         title: "Portfolio Risk Monitoring",

//         description:
//           "Real-time risk monitoring across an entire lending or insurance portfolio. Early warning when a cluster faces disease outbreak, climate stress or yield failure — before defaults arrive on the balance sheet."
//       },

//       {
//         title: "Disaster & Climate Loss Estimation",

//         description:
//           "Post-flood, post-drought and post-disease loss estimation at pond and cluster level. Trigger data for parametric insurance payouts. Evidence base for government relief targeting."
//       },

//       {
//         title: "Lender & Insurer API Intelligence Feed",

//         description:
//           "Structured data feeds delivered directly into lender and insurer risk systems. Real-time pond risk scores, cluster-level default probability, and early warning triggers — integrated into your existing credit or underwriting workflow."
//       }

//     ],

//     bottomText:
//       "By making farm intelligence more accessible and measurable, Goonch helps financial institutions and enterprise partners make more informed aquaculture decisions."
//   }

// };


// /* =========================================================
//    PRODUCT DETAILS COMPONENT
// ========================================================= */

// export default function ProductDetails() {

//   const { productSlug } = useParams();

//   const navigate = useNavigate();

//   const product = productData[productSlug];


//   /* =========================================================
//      PRODUCT NOT FOUND
//   ========================================================= */

//   if (!product) {

//     return (

//       <section className="product-not-found">

//         <SEO
//           title="Product Not Found | Essential Aquatech"
//           description="The requested Essential Aquatech product page could not be found."
//           canonical={`https://www.essentialaquatech.in/products/${productSlug || ""}`}
//         />

//         <h1>
//           Product Not Found
//         </h1>

//         <button
//           onClick={() => navigate("/#products")}
//         >
//           Back to Products
//         </button>

//       </section>

//     );

//   }


//   /* =========================================================
//      MAIN PAGE
//   ========================================================= */

//   const productDescription = `${product.intro} ${product.description}`;
//   const productUrl = `https://www.essentialaquatech.in/products/${productSlug}`;

//   return (

//     <section className="product-details-page">

//       <SEO
//         title={`${product.title} | Essential Aquatech`}
//         description={productDescription}
//         canonical={productUrl}
//         image={product.image}
//       />


//       {/* =====================================
//           HERO
//       ===================================== */}

//       <div className="product-details-hero">

//         <div className="container">

//           <div className="product-details-eyebrow">

//             <span>
//               {product.number}
//             </span>

//             <span className="details-line"></span>

//             <span>
//               PRODUCT
//             </span>

//           </div>


//           <h1 className="product-details-title">

//             {product.title}

//           </h1>


//           <p className="product-details-tagline">

//             {product.tagline}

//           </p>

//         </div>

//       </div>


//       {/* =====================================
//           MAIN CONTENT
//       ===================================== */}

//       <div className="container">

//         <div className="product-details-grid">


//           {/* ================= IMAGE ================= */}

//           <div className="product-details-image">

//             <img
//               src={product.image}
//               alt={`${product.title} - Aquaculture Intelligence`}
//               loading="lazy"
//             />

//           </div>


//           {/* ================= INTRO ================= */}

//           <div className="product-details-intro">

//             <span className="details-small-label">

//               ABOUT {product.title.toUpperCase()}

//             </span>


//             <h2>

//               {product.intro}

//             </h2>


//             <p>

//               {product.description}

//             </p>

//           </div>

//         </div>


//         {/* =====================================
//             FEATURES
//         ===================================== */}

//         <div className="product-features">


//           <div className="features-heading">

//             <span className="details-small-label">

//               CAPABILITIES

//             </span>


//             <h2>

//               {product.capabilitiesTitle}

//             </h2>


//             <p className="features-subtitle">

//               {product.capabilitiesDescription}

//             </p>

//           </div>


//           <div className="features-grid">

//             {product.features.map((feature, index) => (

//               <div
//                 className="feature-card"
//                 key={index}
//                 style={{
//                   "--card-delay": `${index * 0.08}s`
//                 }}
//               >


//                 {/* =========================
//                     Animated Top Line
//                 ========================= */}

//                 <div className="feature-top-line"></div>


//                 {/* =========================
//                     Number
//                 ========================= */}

//                 <div className="feature-number-wrap">

//                   <span className="feature-number">

//                     {String(index + 1).padStart(2, "0")}

//                   </span>


//                   <span className="feature-dot"></span>

//                 </div>


//                 {/* =========================
//                     Feature Content
//                 ========================= */}

//                 <div className="feature-content">

//                   <h3>

//                     {feature.title}

//                   </h3>


//                   <p>

//                     {feature.description}

//                   </p>

//                 </div>


//                 {/* =========================
//                     Arrow
//                 ========================= */}

//                 {/* <div className="feature-arrow-wrap">

//                   <span className="feature-arrow">

//                     →

//                   </span>

//                 </div> */}

//               </div>

//             ))}

//           </div>

//         </div>


//         {/* =====================================
//             BOTTOM
//         ===================================== */}

//         <div className="product-details-bottom">

//           <p>

//             {product.bottomText}

//           </p>


//           <button
//             className="details-back-btn"
//             onClick={() => navigate("/#products")}
//           >

//             ← Back to Products

//           </button>

//         </div>


//       </div>

//     </section>

//   );

// }




























import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import SEO from "./SEO";

// ☁️ Cloudinary Product Images
const aquaImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/VachaOS.png";

const meenammaImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/meenamma.png";

const aquaSenseImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/KechoSense.png";

const aquaRiskImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/Goonch.png";


/* =========================================================
   PRODUCT DETAILS DATA
========================================================= */

const productData = {

  /* =====================================
     01 — VACHAOS
  ===================================== */

  vachaos: {
    number: "01",

    title: "VACHA OS",

    tagline:
      "The intelligence operating system for aquaculture.",

    image: aquaImage,

    intro:
      "VachaOS — Enterprise Intelligence OS",

    description:
      "Named after India's most endangered freshwater catfish, Eutropiichthys vacha — VachaOS gives large farms, cooperatives, governments, and institutions the predictive intelligence to see what is coming before it arrives — pond by pond, season by season, decision by decision.",

    capabilitiesTitle:
      "",

    capabilitiesDescription:
      "See every pond. Predict every risk. Drive every decision.",

    features: [

      {
        title: "Multi-Pond Intelligence",

        description:
          "Monitor every pond in real time. Water health, disease risk, feeding efficiency and biomass — all visible, all actionable."
      },

      {
        title: "Predictive Disease & Risk Alerts",

        description:
          "Know which pond needs intervention before mortality begins. AI-driven early warning gives you hours, not hours of loss."
      },

      {
        title: "Harvest & Demand Forecasting",

        description:
          "Predict harvest volume and timing across your entire farm or cluster. Forward-contract with buyers before your fish reaches the net."
      },

      {
        title: "Policy & Governance Intelligence ",

        description:
          "Governments get a live digital twin of freshwater aquaculture across their jurisdiction. Predict outcomes, target schemes, and monitor implementation in real time."
      },

      {
        title: "Research-Grade Longitudinal Data",

        description:
          "Research institutions access structured, time-series pond outcome data across species, geographies, and seasons. Publishable. Fundable. Impossible to collect independently."
      },

      {
        title: "Input Demand Intelligence",

        description:
          "Feed companies and input manufacturers receive district-level forward demand signals. Know what farmers will need next season — before they ask."
      }

    ],

    bottomText:
      "By connecting data, intelligence and operations, VACHAOS helps aquaculture move from fragmented information to smarter, data-driven decisions."
  },


  /* =====================================
     02 — MEENAMMA AI
  ===================================== */

  "meenamma-ai": {
    number: "02",

    title: "Meenamma AI",

    tagline:
      "Your AI companion for smarter aquaculture.",

    image: meenammaImage,

    intro:
      "Meenamma AI brings aquaculture intelligence directly into the farmer's hands.",

    description:
      "Farmers often have access to large amounts of information but need simple and timely answers. Meenamma AI understands aquaculture conversations and turns complex farm intelligence into practical guidance.",

    capabilitiesTitle:
      "",

    capabilitiesDescription:
      "Ask anything. Understand your farm. Act with confidence.",

    features: [

      {
        title: "Natural language conversations",

        description:
          "Lets farmers interact with aquaculture intelligence naturally through simple, everyday conversations."
      },

      {
        title: "Farmer-friendly AI assistance",

        description:
          "Turns complex aquaculture information into simple, understandable guidance that farmers can act on."
      },

      {
        title: "Pond and fish health guidance",

        description:
          "Helps farmers understand pond and fish health conditions and provides guidance for better farm management."
      },

      {
        title: "Feeding recommendations",

        description:
          "Provides intelligent feeding guidance based on farm conditions to support efficient feeding and healthier fish growth."
      },

      {
        title: "Water-quality insights",

        description:
          "Helps farmers interpret water-quality conditions and understand their potential impact on fish and pond performance."
      },

      {
        title: "Personalized farm recommendations",

        description:
          "Uses farm-specific information to provide recommendations tailored to the farmer's pond, conditions and needs."
      }

    ],

    bottomText:
      "From everyday questions to critical farm decisions, Meenamma AI helps farmers understand what is happening and what action they can take next."
  },


  /* =====================================
     03 — KECHOSENSE
  ===================================== */

  "KechoSense": {
    number: "03",

    title: "KechoSense",

    tagline:
      "See beyond the pond with environmental intelligence.",

    image: aquaSenseImage,

 intro: (
  <>
    KechoSense — Environmental Intelligence Layer
    <br />
    See beyond the pond.
    <br />
    Sense what is coming before it arrives.
  </>
),

description:
  "Named after the earthworm — কেঁচো — that senses what is coming from beneath the soil before it is visible above it. KechoSense reads the environment around your pond so you are never caught by what you did not see coming.",
    capabilitiesTitle:
      "",

    capabilitiesDescription:
      "See beyond the pond. Detect change early. Understand what comes next.",

    features: [

      {
        title: "Climate & Weather Intelligence",

        description:
          "Hyperlocal heat stress, cold wave, and rainfall anomaly alerts at pond-cluster level. Not district weather — your pond's weather, your pond's risk."
      },

      {
        title: "Flood & Disaster Early Warning",

        description:
          "Pre-flood harvest advisory, inundation risk mapping, and post-flood pond recovery protocols. Act before the water rises, not after."
      },

      {
        title: "GHG & Carbon Intelligence",

        description:
          "Pond-level methane and nitrous oxide emission estimation. Carbon sequestration monitoring from biochar and aquatic vegetation. Carbon credit eligibility tracked automatically."
      },

      {
        title: "Water Resource Intelligence",

        description:
          "River and canal availability for pond replenishment, groundwater trend monitoring, and upstream pollution discharge alerts before they reach your pond."
      },

      {
        title: "Livelihood & Social Impact Matrix",

        description:
          "Farmer income correlated with climate events. Community protein security index. Climate vulnerability scoring per household. Impact data that funders, governments, and ESG investors can act on."
      },

      {
        title: "Biodiversity & Ecosystem Health",

        description:
          "Native species presence monitoring, wetland health index, and biodiversity credit alignment — connecting aquaculture to the emerging natural capital economy."
      }

    ],

    bottomText:
      "Kechosense helps reveal patterns and environmental changes that may not be visible from the ground, enabling better awareness and earlier decisions."
  },


  /* =====================================
     04 — GOONCH
  ===================================== */

  goonch: {
    number: "04",

    title: "Goonch",

    tagline:
      "Farm intelligence for smarter credit, insurance and risk.",

    image: aquaRiskImage,

   intro: (
  <>
    Goonch
    <br />
    Financial Risk Intelligence.
    <br />
    In aquaculture, the ability to see risk before it surfaces is the only intelligence that matters.
  </>
),

description:
  "Goonch transforms farm intelligence into financial intelligence. By understanding pond health, farm performance and emerging risks, it helps reveal the signals that matter for smarter credit, insurance and financial decisions.",

    capabilitiesTitle:
      "",

    capabilitiesDescription:
      "In aquaculture, the ability to see risk before it surfaces is the only intelligence that matters.",

    features: [

      {
        title: "Farm Health Score — Aquaculture's First Credit Score",

        description:
          "A longitudinal creditworthiness index built from pond health data, disease history, input behaviour and yield outcomes. The underwriting asset no bank or NBFC has ever had access to — until now."
      },

      {
        title: "Crop Cycle Credit Intelligence",

        description:
          "Predict repayment capacity per farmer per crop cycle. Match credit products to farm risk profiles. Enable rural NBFCs and cooperative banks to lend with confidence into a market they previously could not read."
      },

      {
        title: "Aquaculture Insurance Underwriting",

        description:
          "Pond-level risk profiles for parametric and indemnity-based aquaculture insurance. Disease history, climate exposure, flood vulnerability and mortality probability — structured for actuarial use."
      },

      {
        title: "Portfolio Risk Monitoring",

        description:
          "Real-time risk monitoring across an entire lending or insurance portfolio. Early warning when a cluster faces disease outbreak, climate stress or yield failure — before defaults arrive on the balance sheet."
      },

      {
        title: "Disaster & Climate Loss Estimation",

        description:
          "Post-flood, post-drought and post-disease loss estimation at pond and cluster level. Trigger data for parametric insurance payouts. Evidence base for government relief targeting."
      },

      {
        title: "Lender & Insurer API Intelligence Feed",

        description:
          "Structured data feeds delivered directly into lender and insurer risk systems. Real-time pond risk scores, cluster-level default probability, and early warning triggers — integrated into your existing credit or underwriting workflow."
      }

    ],

    bottomText:
      "By making farm intelligence more accessible and measurable, Goonch helps financial institutions and enterprise partners make more informed aquaculture decisions."
  }

};


/* =========================================================
   FEATURE CARD DIRECTION PATTERN
   ---------------------------------------------------------
   Each feature card slides in from a different direction so
   the grid feels alive and organic while scrolling.
========================================================= */

const FEATURE_DIRECTIONS = [
  "left",
  "top",
  "right",
  "bottom",
  "left",
  "top",
];

const getFeatureOffset = (direction) => {
  switch (direction) {
    case "left":
      return { x: "-60px", y: "0px" };
    case "right":
      return { x: "60px", y: "0px" };
    case "top":
      return { x: "0px", y: "-50px" };
    case "bottom":
      return { x: "0px", y: "50px" };
    default:
      return { x: "0px", y: "50px" };
  }
};


/* =========================================================
   PRODUCT DETAILS COMPONENT
========================================================= */

export default function ProductDetails() {

  const { productSlug } = useParams();

  const navigate = useNavigate();

  const product = productData[productSlug];

  /* Refs for scroll-triggered reveals */
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const featuresRef = useRef(null);
  const bottomRef = useRef(null);


  /* =========================================================
     SCROLL REVEAL — one observer per trigger zone
  ========================================================= */

  useEffect(() => {

    if (!product) return;

    const zones = [
      heroRef.current,
      gridRef.current,
      featuresRef.current,
      bottomRef.current,
    ].filter(Boolean);

    if (!zones.length) return;

    if (typeof IntersectionObserver === "undefined") {
      zones.forEach((z) => z.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    zones.forEach((z) => observer.observe(z));

    return () => observer.disconnect();

  }, [product]);


  /* Feature cards — individually observed so each enters
     from its own direction independently */
  useEffect(() => {

    if (!product) return;

    const cards = document.querySelectorAll(".feature-card");
    if (!cards.length) return;

    if (typeof IntersectionObserver === "undefined") {
      cards.forEach((c) => c.classList.add("is-visible"));
      return;
    }

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          cardObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    cards.forEach((c) => cardObserver.observe(c));

    return () => cardObserver.disconnect();

  }, [product]);


  /* =========================================================
     PRODUCT NOT FOUND
  ========================================================= */

  if (!product) {

    return (

      <section className="product-not-found">

        <SEO
          title="Product Not Found | Essential Aquatech"
          description="The requested Essential Aquatech product page could not be found."
          canonical={`https://www.essentialaquatech.in/products/${productSlug || ""}`}
        />

        <h1>
          Product Not Found
        </h1>

        <button
          onClick={() => navigate("/#products")}
        >
          Back to Products
        </button>

      </section>

    );

  }


  /* =========================================================
     MAIN PAGE
  ========================================================= */

  const productDescription = `${product.intro} ${product.description}`;
  const productUrl = `https://www.essentialaquatech.in/products/${productSlug}`;

  return (

    <section className="product-details-page">

      <SEO
        title={`${product.title} | Essential Aquatech`}
        description={productDescription}
        canonical={productUrl}
        image={product.image}
      />


      {/* =====================================
          HERO — every element from a different direction
      ===================================== */}

      <div
        className="product-details-hero"
        ref={heroRef}
      >

        <div className="container">

          <div className="product-details-eyebrow pd-reveal pd-reveal--top" data-delay="1">

            <span>
              {product.number}
            </span>

            <span className="details-line"></span>

            <span>
              PRODUCT
            </span>

          </div>


          <h1
            className="product-details-title pd-reveal pd-reveal--left"
            data-delay="2"
          >

            {product.title}

          </h1>


          <p
            className="product-details-tagline pd-reveal pd-reveal--right"
            data-delay="3"
          >

            {product.tagline}

          </p>

        </div>

      </div>


      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <div className="container">

        <div
          className="product-details-grid"
          ref={gridRef}
        >


          {/* ================= IMAGE — from LEFT ================= */}

          <div className="product-details-image pd-reveal pd-reveal--left" data-delay="1">

            <img
              src={product.image}
              alt={`${product.title} - Aquaculture Intelligence`}
              loading="lazy"
            />

          </div>


          {/* ================= INTRO — pieces from different directions ================= */}

          <div className="product-details-intro">

            <span
              className="details-small-label pd-reveal pd-reveal--top"
              data-delay="2"
            >

              ABOUT {product.title.toUpperCase()}

            </span>


            <h2
              className="pd-reveal pd-reveal--right"
              data-delay="3"
            >

              {product.intro}

            </h2>


            <p
              className="pd-reveal pd-reveal--bottom"
              data-delay="4"
            >

              {product.description}

            </p>

          </div>

        </div>


        {/* =====================================
            FEATURES
        ===================================== */}

        <div
          className="product-features"
          ref={featuresRef}
        >


          <div className="features-heading">

            <span
              className="details-small-label pd-reveal pd-reveal--top"
              data-delay="1"
            >

              CAPABILITIES

            </span>


            <h2
              className="pd-reveal pd-reveal--left"
              data-delay="2"
            >

              {product.capabilitiesTitle}

            </h2>


            <p
              className="features-subtitle pd-reveal pd-reveal--right"
              data-delay="3"
            >

              {product.capabilitiesDescription}

            </p>

          </div>


          <div className="features-grid">

            {product.features.map((feature, index) => {

              const dir =
                FEATURE_DIRECTIONS[
                  index % FEATURE_DIRECTIONS.length
                ];

              const { x, y } = getFeatureOffset(dir);

              return (

                <div
                  className="feature-card"
                  key={index}
                  style={{
                    "--card-x": x,
                    "--card-y": y,
                    "--card-delay": `${index * 0.08}s`
                  }}
                >


                  {/* Animated Top Line */}

                  <div className="feature-top-line"></div>


                  {/* Number */}

                  <div className="feature-number-wrap">

                    <span className="feature-number">

                      {String(index + 1).padStart(2, "0")}

                    </span>


                    <span className="feature-dot"></span>

                  </div>


                  {/* Feature Content */}

                  <div className="feature-content">

                    <h3>

                      {feature.title}

                    </h3>


                    <p>

                      {feature.description}

                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>


        {/* =====================================
            BOTTOM — text from LEFT, button from RIGHT
        ===================================== */}

        <div
          className="product-details-bottom"
          ref={bottomRef}
        >

          <p className="pd-reveal pd-reveal--left" data-delay="1">

            {product.bottomText}

          </p>


          <button
            className="details-back-btn pd-reveal pd-reveal--right pd-reveal--scale"
            data-delay="2"
            onClick={() => navigate("/#products")}
          >

            ← Back to Products

          </button>

        </div>


      </div>

    </section>

  );

}