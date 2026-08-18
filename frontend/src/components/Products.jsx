




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

            {/* Eyebrow */}
            <div className="product-eyebrow">

              <span className="product-number">
                {number}
              </span>

              <span className="product-line"></span>

              <span className="product-label">
                PRODUCT
              </span>

            </div>


            {/* Title */}
            <h3 className="product-title">
              {title}
            </h3>


            {/* Tagline */}
            <h4 className="product-tagline">
              {tagline}
            </h4>


            {/* Description */}
            <p className="product-text">
              {description}
            </p>


            {/* Learn More */}
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


export default function Products() {

  const sections = [

    /* =====================================
       01 — AQUAOS
    ===================================== */
    {
      imageSrc: aquaImage,

      number: "01",

      title: "AquaOS",

      tagline:
        "The intelligence operating system for aquaculture.",

      description:
        "AquaOS brings together farm data, pond intelligence, operational history and AI-driven insights into one connected intelligence layer. It helps transform fragmented aquaculture data into actionable intelligence for smarter farm management."
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


  /* =====================================
     EXPLORE MORE
  ===================================== */
  const handleExploreClick = () => {
    window.open(
      "https://fishhaat.com/",
      "_blank"
    );
  };


  return (
    <section className="products-main">

      <div className="container">

        {/* ================= HEADING ================= */}

        <h2 className="products-heading">
          Our <span>Products</span>
        </h2>


        {/* ================= PRODUCTS ================= */}

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


        {/* ================= EXPLORE BUTTON ================= */}

        <div className="explore-btn-container">

          <button
            className="explore-btn"
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

    </section>
  );
}