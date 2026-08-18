

// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./ProductDetails.css";

// import HomeMain from "../assets/images/HomeMain.png";
// import HomeMain2 from "../assets/images/HomeMain2.png";

// const productData = {
//   "aquaos": {
//     number: "01",
//     title: "AquaOS",
//     tagline: "The intelligence operating system for aquaculture.",
//     image: HomeMain,

//     intro:
//       "AquaOS is the intelligence layer that brings the aquaculture ecosystem together.",

//     description:
//       "Aquaculture generates enormous amounts of information across ponds, farmers, weather, water quality, production history and farm operations. AquaOS brings these fragmented signals together into one connected intelligence platform.",

//     features: [
//       "Unified farm and pond data",
//       "AI-powered farm intelligence",
//       "Real-time operational insights",
//       "Pond and production monitoring",
//       "Weather and environmental intelligence",
//       "Actionable recommendations"
//     ],

//     bottomText:
//       "By connecting data, intelligence and operations, AquaOS helps aquaculture move from fragmented information to smarter, data-driven decisions."
//   },

//   "meenamma-ai": {
//     number: "02",
//     title: "Meenamma AI",
//     tagline: "Your AI companion for smarter aquaculture.",
//     image: HomeMain2,

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

//   "aquasense": {
//     number: "03",
//     title: "AquaSense",
//     tagline: "See beyond the pond with environmental intelligence.",
//     image: HomeMain,

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

//   "aquarisk": {
//     number: "04",
//     title: "AquaRisk",
//     tagline: "Farm intelligence for smarter credit, insurance and risk.",
//     image: HomeMain2,

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

//   if (!product) {
//     return (
//       <section className="product-not-found">
//         <h1>Product Not Found</h1>
//         <button onClick={() => navigate("/#products")}>
//           Back to Products
//         </button>
//       </section>
//     );
//   }

//   return (
//     <section className="product-details-page">

//       {/* Hero */}
//       <div className="product-details-hero">

//         <div className="container">

//           <div className="product-details-eyebrow">
//             <span>{product.number}</span>
//             <span className="details-line"></span>
//             <span>PRODUCT</span>
//           </div>

//           <h1 className="product-details-title">
//             {product.title}
//           </h1>

//           <p className="product-details-tagline">
//             {product.tagline}
//           </p>

//         </div>

//       </div>

//       {/* Main Content */}
//       <div className="container">

//         <div className="product-details-grid">

//           {/* Image */}
//           <div className="product-details-image">
//             <img
//               src={product.image}
//               alt={product.title}
//             />
//           </div>

//           {/* Intro */}
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

//         {/* Features */}
//         <div className="product-features">

//           <div className="features-heading">
//             <span className="details-small-label">
//               CAPABILITIES
//             </span>

//             <h2>
//               Built for smarter aquaculture.
//             </h2>
//           </div>

//           <div className="features-grid">

//             {product.features.map((feature, index) => (
//               <div
//                 className="feature-card"
//                 key={index}
//               >
//                 <span className="feature-number">
//                   0{index + 1}
//                 </span>

//                 <h3>
//                   {feature}
//                 </h3>

//                 <span className="feature-arrow">
//                   →
//                 </span>
//               </div>
//             ))}

//           </div>

//         </div>

//         {/* Bottom */}
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

import HomeMain from "../assets/images/HomeMain.png";
import HomeMain2 from "../assets/images/HomeMain2.png";

const productData = {
  "aquaos": {
    number: "01",
    title: "AquaOS",
    tagline: "The intelligence operating system for aquaculture.",
    image: HomeMain,

    intro:
      "AquaOS is the intelligence layer that brings the aquaculture ecosystem together.",

    description:
      "Aquaculture generates enormous amounts of information across ponds, farmers, weather, water quality, production history and farm operations. AquaOS brings these fragmented signals together into one connected intelligence platform.",

    features: [
      "Unified farm and pond data",
      "AI-powered farm intelligence",
      "Real-time operational insights",
      "Pond and production monitoring",
      "Weather and environmental intelligence",
      "Actionable recommendations"
    ],

    bottomText:
      "By connecting data, intelligence and operations, AquaOS helps aquaculture move from fragmented information to smarter, data-driven decisions."
  },

  "meenamma-ai": {
    number: "02",
    title: "Meenamma AI",
    tagline: "Your AI companion for smarter aquaculture.",
    image: HomeMain2,

    intro:
      "Meenamma AI brings aquaculture intelligence directly into the farmer's hands.",

    description:
      "Farmers often have access to large amounts of information but need simple and timely answers. Meenamma AI understands aquaculture conversations and turns complex farm intelligence into practical guidance.",

    features: [
      "Natural language conversations",
      "Farmer-friendly AI assistance",
      "Pond and fish health guidance",
      "Feeding recommendations",
      "Water-quality insights",
      "Personalized farm recommendations"
    ],

    bottomText:
      "From everyday questions to critical farm decisions, Meenamma AI helps farmers understand what is happening and what action they can take next."
  },

  "aquasense": {
    number: "03",
    title: "AquaSense",
    tagline: "See beyond the pond with environmental intelligence.",
    image: HomeMain,

    intro:
      "AquaSense connects the pond to the world around it.",

    description:
      "Pond conditions are influenced by weather, geography, surrounding land, water conditions and environmental changes. AquaSense brings these signals together using satellite, weather, geospatial and environmental intelligence.",

    features: [
      "Satellite-based farm monitoring",
      "Weather intelligence",
      "Geospatial farm insights",
      "Environmental condition monitoring",
      "Early detection of changing conditions",
      "Location-based risk signals"
    ],

    bottomText:
      "AquaSense helps reveal patterns and environmental changes that may not be visible from the ground, enabling better awareness and earlier decisions."
  },

  "aquarisk": {
    number: "04",
    title: "AquaRisk",
    tagline: "Farm intelligence for smarter credit, insurance and risk.",
    image: HomeMain2,

    intro:
      "AquaRisk transforms aquaculture intelligence into decision-ready risk insights.",

    description:
      "Traditional financial and insurance decisions can be difficult when farm-level information is limited. AquaRisk uses farm intelligence, production history and environmental signals to create a deeper understanding of aquaculture risk.",

    features: [
      "Farm-level risk intelligence",
      "Credit decision support",
      "Insurance risk assessment",
      "Production history insights",
      "Environmental risk signals",
      "Portfolio-level aquaculture intelligence"
    ],

    bottomText:
      "By making farm intelligence more accessible and measurable, AquaRisk helps financial institutions and enterprise partners make more informed aquaculture decisions."
  }
};

export default function ProductDetails() {

  const { productSlug } = useParams();
  const navigate = useNavigate();

  const product = productData[productSlug];

  if (!product) {
    return (
      <section className="product-not-found">
        <h1>Product Not Found</h1>
        <button onClick={() => navigate("/#products")}>
          Back to Products
        </button>
      </section>
    );
  }

  return (
    <section className="product-details-page">

      {/* Hero */}
      <div className="product-details-hero">

        <div className="container">

          <div className="product-details-eyebrow">
            <span>{product.number}</span>
            <span className="details-line"></span>
            <span>PRODUCT</span>
          </div>

          <h1 className="product-details-title">
            {product.title}
          </h1>

          <p className="product-details-tagline">
            {product.tagline}
          </p>

        </div>

      </div>

      {/* Main Content */}
      <div className="container">

        <div className="product-details-grid">

          {/* Image */}
          <div className="product-details-image">
            <img
              src={product.image}
              alt={product.title}
            />
          </div>

          {/* Intro */}
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

        {/* Features */}
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

                {/* Animated top line */}
                <div className="feature-top-line"></div>

                {/* Number */}
                <div className="feature-number-wrap">
                  <span className="feature-number">
                    0{index + 1}
                  </span>

                  <span className="feature-dot"></span>
                </div>

                {/* Text */}
                <div className="feature-content">
                  <h3>
                    {feature}
                  </h3>

                  <p>
                    Aquaculture intelligence designed for
                    better decisions and smarter outcomes.
                  </p>
                </div>

                {/* Arrow */}
                <div className="feature-arrow-wrap">
                  <span className="feature-arrow">
                    →
                  </span>
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom */}
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