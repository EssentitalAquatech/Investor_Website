


import React, { useEffect, useRef } from "react";
import "./WhatWeDo.css";

/* ==========================================================
   CLOUDINARY IMAGE OPTIMIZATION
   ========================================================== */

const CLOUDINARY_IMAGE_BASE =
  "https://res.cloudinary.com/p8fs2e1n/image/upload";

const getOptimizedImage = (imageName) =>
  `${CLOUDINARY_IMAGE_BASE}/f_auto,q_auto,dpr_auto/${imageName}`;

const sections = [
  {
    id: 1,
    number: "01",
    kicker: "THE ENGINE",
    title: "THE ENGINE",
    imageSrc:
  "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto,dpr_auto/En.png",
    imageAlt:
      "Aquaculture intelligence engine combining satellite, astronomical and pond-level data",

    description:
      "Satellite Imagery • Astronomical Data • Pond-Level Inputs • Disease Prediction • Harvest Forecasting • Action Intelligence",
  },

  {
    id: 2,
    number: "02",
    kicker: "THE INTELLIGENCE",
    title: "THE INTELLIGENCE",
   imageSrc:
  "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto,dpr_auto/Int.png",
    imageAlt:
      "Aquaculture intelligence platform transforming data into predictive decisions",

    description:
      "15-Day Forward Action Plan • Disease Outbreak Prediction • Water Quality Intelligence • Climate Risk Scoring • Harvest Forecasting • Farm Risk Scoring",
  },

  {
    id: 3,
    number: "03",
    kicker: "THE ECOSYSTEM",
    title: "THE ECOSYSTEM",
 imageSrc: "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto,dpr_auto/Eco.png",
    imageAlt:
      "Connected aquaculture ecosystem linking farmers, input dealers, companies, lenders, governments and research institutions",

    description:
      "Farmers • Input Dealers • Input Companies • Rural Lenders & NBFCs • Governments • R&D Institutions",
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
   REVEAL DIRECTION HELPERS
   ========================================================== */

/* Block-level (image + content) alternating directions */
const getRevealDirections = (blockIndex) => {
  const patterns = [
    { media: "left", content: "right" },   // 01 → image L, text R
    { media: "right", content: "left" },   // 02 → image R, text L
    { media: "left", content: "right" },   // 03 → image L, text R
  ];

  return patterns[blockIndex % patterns.length];
};

/* Chip-level alternating directions.
   Each chip slides in from a different side based on its index.
   Patterns repeat but always start from a different axis so that
   adjacent chips never feel identical. */
const CHIP_DIRECTIONS = [
  "left",    // index 0
  "top",     // index 1
  "right",   // index 2
  "bottom",  // index 3
  "left",    // index 4
  "top",     // index 5
];

const getChipOffset = (direction) => {
  switch (direction) {
    case "left":
      return { x: "-40px", y: "0px" };
    case "right":
      return { x: "40px", y: "0px" };
    case "top":
      return { x: "0px", y: "-30px" };
    case "bottom":
      return { x: "0px", y: "30px" };
    default:
      return { x: "0px", y: "30px" };
  }
};

/* ==========================================================
   COMPONENT
   ========================================================== */

export default function WhatWeDo() {
  const rootRef = useRef(null);

  /* ==========================================================
     SCROLL REVEAL
     ========================================================== */

  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const targets = root.querySelectorAll(
      ".wwd__reveal, .wwd__chip--reveal"
    );

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
     JSX
     ========================================================== */

  return (
    <section
      className="wwd"
      ref={rootRef}
      aria-labelledby="what-we-do-title"
    >
      <div className="wwd__shell">

        {/* HEADER */}
        <header className="wwd__head wwd__reveal wwd__reveal--bottom">
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

        {/* DIVIDER */}
        <div
          className="wwd__rule wwd__reveal wwd__reveal--bottom"
          aria-hidden="true"
        />

        {/* SECTIONS */}
        {sections.map((section, index) => {
          const imageFirst = index % 2 === 0;
          const items = toItems(section.description);
          const reveal = getRevealDirections(index);

          return (
            <article
              className={`wwd__block${
                imageFirst
                  ? ""
                  : " wwd__block--reverse"
              }`}
              key={section.id}
            >

              {/* IMAGE */}
              <div
                className={`wwd__media-col wwd__reveal wwd__reveal--${reveal.media}`}
              >
                <figure
                  className="wwd__media"
                  style={{ margin: 0 }}
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

              {/* CONTENT */}
              <div
                className={`wwd__content-col wwd__reveal wwd__reveal--${reveal.content}`}
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

                  {items.map((item, itemIndex) => {
                    const chipDir =
                      CHIP_DIRECTIONS[
                        itemIndex % CHIP_DIRECTIONS.length
                      ];

                    const { x, y } = getChipOffset(chipDir);

                    return (
                      <li
                        className="wwd__chip wwd__chip--reveal"
                        key={`${section.id}-${item}`}
                        style={{
                          "--chip-x": x,
                          "--chip-y": y,
                        }}
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
                    );
                  })}

                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}