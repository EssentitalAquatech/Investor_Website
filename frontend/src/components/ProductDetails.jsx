




// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./ProductDetails.css";

// // ☁️ Cloudinary Product Images
// const aquaImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/aqua.png";

// const meenammaImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/meenamma.png";

// const aquaSenseImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/Sense.png";

// const aquaRiskImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/Risk.png";


// const productData = {

//   /* =====================================
//      01 — FISHOS
//   ===================================== */
//   "fishos": {
//     number: "01",

//     title: "FishOS",

//     tagline:
//       "The intelligence operating system for aquaculture.",

//     image: aquaImage,

//     intro:
//       "FishOS is the intelligence layer that brings the aquaculture ecosystem together.",

//     description:
//       "Aquaculture generates enormous amounts of information across ponds, farmers, weather, water quality, production history and farm operations. FishOS brings these fragmented signals together into one connected intelligence platform.",

//     features: [
//       "Unified farm and pond data",
//       "AI-powered farm intelligence",
//       "Real-time operational insights",
//       "Pond and production monitoring",
//       "Weather and environmental intelligence",
//       "Actionable recommendations"
//     ],

//     bottomText:
//       "By connecting data, intelligence and operations, FishOS helps aquaculture move from fragmented information to smarter, data-driven decisions."
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

//     features: [
//       "Natural language conversations",
//       "Farmer-friendly AI assistance",
//       "Pond and fish health guidance",
//       "Feeding recommendations",
//       "Water-quality insights",
//       "Personalized farm recommendations"
//     ],

//     bottomText:
//       "From everyday questions to critical farm decisions, Meenamma AI helps farmers understand what is happening and what action they can take next."
//   },


//   /* =====================================
//      03 — AQUASENSE
//   ===================================== */
//   "aquasense": {
//     number: "03",

//     title: "AquaSense",

//     tagline:
//       "See beyond the pond with environmental intelligence.",

//     image: aquaSenseImage,

//     intro:
//       "AquaSense connects the pond to the world around it.",

//     description:
//       "Pond conditions are influenced by weather, geography, surrounding land, water conditions and environmental changes. AquaSense brings these signals together using satellite, weather, geospatial and environmental intelligence.",

//     features: [
//       "Satellite-based farm monitoring",
//       "Weather intelligence",
//       "Geospatial farm insights",
//       "Environmental condition monitoring",
//       "Early detection of changing conditions",
//       "Location-based risk signals"
//     ],

//     bottomText:
//       "AquaSense helps reveal patterns and environmental changes that may not be visible from the ground, enabling better awareness and earlier decisions."
//   },


//   /* =====================================
//      04 — AQUARISK
//   ===================================== */
//   "aquarisk": {
//     number: "04",

//     title: "AquaRisk",

//     tagline:
//       "Farm intelligence for smarter credit, insurance and risk.",

//     image: aquaRiskImage,

//     intro:
//       "AquaRisk transforms aquaculture intelligence into decision-ready risk insights.",

//     description:
//       "Traditional financial and insurance decisions can be difficult when farm-level information is limited. AquaRisk uses farm intelligence, production history and environmental signals to create a deeper understanding of aquaculture risk.",

//     features: [
//       "Farm-level risk intelligence",
//       "Credit decision support",
//       "Insurance risk assessment",
//       "Production history insights",
//       "Environmental risk signals",
//       "Portfolio-level aquaculture intelligence"
//     ],

//     bottomText:
//       "By making farm intelligence more accessible and measurable, AquaRisk helps financial institutions and enterprise partners make more informed aquaculture decisions."
//   }

// };


// export default function ProductDetails() {

//   const { productSlug } = useParams();

//   const navigate = useNavigate();

//   const product = productData[productSlug];


//   /* =====================================
//      PRODUCT NOT FOUND
//   ===================================== */
//   if (!product) {

//     return (

//       <section className="product-not-found">

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


//   return (

//     <section className="product-details-page">


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
//               Built for smarter aquaculture.
//             </h2>


//             <p className="features-subtitle">

//               Intelligence designed to turn aquaculture data into
//               meaningful decisions and measurable action.

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


//                 {/* Animated top line */}

//                 <div className="feature-top-line"></div>


//                 {/* Number */}

//                 <div className="feature-number-wrap">

//                   <span className="feature-number">

//                     0{index + 1}

//                   </span>


//                   <span className="feature-dot"></span>

//                 </div>


//                 {/* Text */}

//                 <div className="feature-content">

//                   <h3>
//                     {feature}
//                   </h3>


//                   <p>

//                     Aquaculture intelligence designed for
//                     better decisions and smarter outcomes.

//                   </p>

//                 </div>


//                 {/* Arrow */}

//                 <div className="feature-arrow-wrap">

//                   <span className="feature-arrow">
//                     →
//                   </span>

//                 </div>

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
//             onClick={() => {
//               navigate("/#products");
//             }}
//           >
//             ← Back to Products
//           </button>

//         </div>

//       </div>

//     </section>

//   );

// }























import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

// ☁️ Cloudinary Product Images
const aquaImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/aqua.png";

const meenammaImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/meenamma.png";

const aquaSenseImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/Sense.png";

const aquaRiskImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/Risk.png";


const productData = {

  /* =====================================
     01 — FISHOS
  ===================================== */
  "fishos": {
    number: "01",

    title: "FishOS",

    tagline:
      "The intelligence operating system for aquaculture.",

    image: aquaImage,

    intro:
      "FishOS is the intelligence layer that brings the aquaculture ecosystem together.",

    description:
      "Aquaculture generates enormous amounts of information across ponds, farmers, weather, water quality, production history and farm operations. FishOS brings these fragmented signals together into one connected intelligence platform.",

    features: [

      {
        title: "Unified farm and pond data",
        description:
          "Brings farm, pond, production and operational data together into one connected intelligence system."
      },

      {
        title: "AI-powered farm intelligence",
        description:
          "Uses AI to transform complex aquaculture data into clear insights that support faster and smarter farm decisions."
      },

      {
        title: "Real-time operational insights",
        description:
          "Provides timely visibility into farm operations, helping teams understand changing conditions and respond quickly."
      },

      {
        title: "Pond and production monitoring",
        description:
          "Tracks key pond and production signals to help farmers monitor performance and identify important changes."
      },

      {
        title: "Weather and environmental intelligence",
        description:
          "Combines weather and environmental data to reveal conditions that can influence pond health and farm productivity."
      },

      {
        title: "Actionable recommendations",
        description:
          "Converts farm intelligence into practical recommendations that help farmers decide what to do next."
      }

    ],

    bottomText:
      "By connecting data, intelligence and operations, FishOS helps aquaculture move from fragmented information to smarter, data-driven decisions."
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
     03 — AQUASENSE
  ===================================== */
  "aquasense": {
    number: "03",

    title: "AquaSense",

    tagline:
      "See beyond the pond with environmental intelligence.",

    image: aquaSenseImage,

    intro:
      "AquaSense connects the pond to the world around it.",

    description:
      "Pond conditions are influenced by weather, geography, surrounding land, water conditions and environmental changes. AquaSense brings these signals together using satellite, weather, geospatial and environmental intelligence.",

    features: [

      {
        title: "Satellite-based farm monitoring",
        description:
          "Uses satellite imagery to monitor aquaculture farms and identify changes across ponds and surrounding areas."
      },

      {
        title: "Weather intelligence",
        description:
          "Delivers weather insights that help farmers understand upcoming conditions and prepare for their potential impact."
      },

      {
        title: "Geospatial farm insights",
        description:
          "Analyzes location and geographic information to reveal patterns and conditions influencing aquaculture farms."
      },

      {
        title: "Environmental condition monitoring",
        description:
          "Monitors environmental signals around farms to provide a broader understanding of pond and farm conditions."
      },

      {
        title: "Early detection of changing conditions",
        description:
          "Identifies emerging environmental and farm-level changes early, helping farmers respond before risks become bigger problems."
      },

      {
        title: "Location-based risk signals",
        description:
          "Generates location-specific risk signals by combining geographic, environmental and weather information."
      }

    ],

    bottomText:
      "AquaSense helps reveal patterns and environmental changes that may not be visible from the ground, enabling better awareness and earlier decisions."
  },


  /* =====================================
     04 — AQUARISK
  ===================================== */
  "aquarisk": {
    number: "04",

    title: "AquaRisk",

    tagline:
      "Farm intelligence for smarter credit, insurance and risk.",

    image: aquaRiskImage,

    intro:
      "AquaRisk transforms aquaculture intelligence into decision-ready risk insights.",

    description:
      "Traditional financial and insurance decisions can be difficult when farm-level information is limited. AquaRisk uses farm intelligence, production history and environmental signals to create a deeper understanding of aquaculture risk.",

    features: [

      {
        title: "Farm-level risk intelligence",
        description:
          "Builds a deeper understanding of individual farm risk using operational, production and environmental intelligence."
      },

      {
        title: "Credit decision support",
        description:
          "Provides data-driven farm insights that can help financial institutions make more informed aquaculture credit decisions."
      },

      {
        title: "Insurance risk assessment",
        description:
          "Combines farm and environmental intelligence to support more informed assessment of aquaculture insurance risk."
      },

      {
        title: "Production history insights",
        description:
          "Uses historical production information to reveal farm performance patterns and support better risk evaluation."
      },

      {
        title: "Environmental risk signals",
        description:
          "Identifies environmental factors that may increase farm risk and provides signals for closer monitoring."
      },

      {
        title: "Portfolio-level aquaculture intelligence",
        description:
          "Aggregates farm-level intelligence to help enterprise and financial partners understand risk across aquaculture portfolios."
      }

    ],

    bottomText:
      "By making farm intelligence more accessible and measurable, AquaRisk helps financial institutions and enterprise partners make more informed aquaculture decisions."
  }

};


export default function ProductDetails() {

  const { productSlug } = useParams();

  const navigate = useNavigate();

  const product = productData[productSlug];


  /* =====================================
     PRODUCT NOT FOUND
  ===================================== */
  if (!product) {

    return (

      <section className="product-not-found">

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


  return (

    <section className="product-details-page">


      {/* =====================================
          HERO
      ===================================== */}

      <div className="product-details-hero">

        <div className="container">

          <div className="product-details-eyebrow">

            <span>
              {product.number}
            </span>

            <span className="details-line"></span>

            <span>
              PRODUCT
            </span>

          </div>


          <h1 className="product-details-title">
            {product.title}
          </h1>


          <p className="product-details-tagline">
            {product.tagline}
          </p>

        </div>

      </div>


      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <div className="container">

        <div className="product-details-grid">


          {/* ================= IMAGE ================= */}

          <div className="product-details-image">

            <img
              src={product.image}
              alt={`${product.title} - Aquaculture Intelligence`}
              loading="lazy"
            />

          </div>


          {/* ================= INTRO ================= */}

          <div className="product-details-intro">

            <span className="details-small-label">

              ABOUT {product.title.toUpperCase()}

            </span>


            <h2>
              {product.intro}
            </h2>


            <p>
              {product.description}
            </p>

          </div>

        </div>


        {/* =====================================
            FEATURES
        ===================================== */}

        <div className="product-features">


          <div className="features-heading">

            <span className="details-small-label">
              CAPABILITIES
            </span>


            <h2>
              Built for smarter aquaculture.
            </h2>


            <p className="features-subtitle">

              Intelligence designed to turn aquaculture data into
              meaningful decisions and measurable action.

            </p>

          </div>


          <div className="features-grid">

            {product.features.map((feature, index) => (

              <div
                className="feature-card"
                key={index}
                style={{
                  "--card-delay": `${index * 0.08}s`
                }}
              >


                {/* =========================
                    Animated Top Line
                ========================= */}

                <div className="feature-top-line"></div>


                {/* =========================
                    Number
                ========================= */}

                <div className="feature-number-wrap">

                  <span className="feature-number">

                    {String(index + 1).padStart(2, "0")}

                  </span>


                  <span className="feature-dot"></span>

                </div>


                {/* =========================
                    Feature Content
                ========================= */}

                <div className="feature-content">

                  <h3>
                    {feature.title}
                  </h3>


                  <p>
                    {feature.description}
                  </p>

                </div>


                {/* =========================
                    Arrow
                ========================= */}

                <div className="feature-arrow-wrap">

                  <span className="feature-arrow">
                    →
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =====================================
            BOTTOM
        ===================================== */}

        <div className="product-details-bottom">

          <p>
            {product.bottomText}
          </p>


          <button
            className="details-back-btn"
            onClick={() => {
              navigate("/#products");
            }}
          >
            ← Back to Products
          </button>

        </div>

      </div>

    </section>

  );

}