




import React, { useEffect, useRef } from "react";
import "./WhatWeDo.css";

const sections = [
  {
    id: 1,
    number: "01",
    kicker: "Aquaculture Intelligence",
    title: "Aquaculture Intelligence",
    imageSrc:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/2right.png",
    imageAlt:
      "Aquaculture intelligence dashboard combining pond, weather and satellite data layers",
    description:
      "Pond Data • Weather • Satellite & GIS • Water Quality • Farmer Behaviour • Production History",
  },
  {
    id: 2,
    number: "02",
    kicker: "3AI AquaStack",
    title: "3AI AquaStack",
    imageSrc:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/1right.png",
    imageAlt:
      "The 3AI AquaStack prediction, advisory and action intelligence layers",
    description:
      "Disease Prediction • Water Intelligence • Weather Intelligence • Feed Optimization • Harvest Prediction • Farm Risk • Personalized Advisory • Prediction • Advisory • Action",
  },
  {
    id: 3,
    number: "03",
    kicker: "Connected Ecosystem",
    title: "Connected Aquaculture Ecosystem",
    imageSrc:
      "https://res.cloudinary.com/p8fs2e1n/image/upload/3right.png",
    imageAlt:
      "Connected aquaculture ecosystem linking farmers, dealers, markets, finance and insurance",
    description:
      "Farmers • Dealers • Feed Companies • Markets • Finance • Insurance • Industry Partners",
  },
];

const toItems = (description) =>
  description
    .split("•")
    .map((item) => item.trim())
    .filter(Boolean);

export default function WhatWeDo() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll(".wwd__reveal"));

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lightbox functionality
  useEffect(() => {
    const lightbox = document.getElementById('wwdLightbox');
    const lightboxImage = document.getElementById('wwdLightboxImage');
    const lightboxClose = document.getElementById('wwdLightboxClose');
    const mediaElements = document.querySelectorAll('.wwd__media');

    const openLightbox = (e) => {
      const img = e.currentTarget.querySelector('img');
      if (img) {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt || 'Enlarged image';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    };

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    mediaElements.forEach(media => {
      media.addEventListener('click', openLightbox);
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightbox) {
      lightbox.addEventListener('click', function(e) {
        if (e.target === this) {
          closeLightbox();
        }
      });
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      mediaElements.forEach(media => {
        media.removeEventListener('click', openLightbox);
      });
      if (lightboxClose) {
        lightboxClose.removeEventListener('click', closeLightbox);
      }
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section className="wwd" ref={rootRef} aria-labelledby="what-we-do-title">
      <div className="wwd__shell">
        <header className="wwd__head wwd__reveal">
          <p className="wwd__eyebrow">Aquatech Intelligence</p>
          <h2 className="wwd__title" id="what-we-do-title">
            What We <span className="wwd__title-accent">Do</span>
          </h2>
          <p className="wwd__subtitle">We&rsquo;re not just another Aquatech company</p>
          <p className="wwd__lead">
            We are building the intelligence layer for aquaculture — combining AI,
            satellite, weather, water and farm data to make aquaculture more predictive,
            profitable and sustainable.
          </p>
        </header>

        <div className="wwd__rule wwd__reveal" aria-hidden="true" />

        {sections.map((section, index) => {
          const imageFirst = index % 2 === 0;
          const items = toItems(section.description);

          return (
            <article
              className={`wwd__block${imageFirst ? "" : " wwd__block--reverse"}`}
              key={section.id}
            >
              <div
                className={`wwd__media-col wwd__reveal ${
                  imageFirst ? "wwd__reveal--left" : "wwd__reveal--right"
                }`}
              >
                <figure className="wwd__media" style={{ margin: 0 }}>
                  <img
                    className="wwd__img"
                    src={section.imageSrc}
                    alt={section.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>

              <div
                className={`wwd__content-col wwd__reveal ${
                  imageFirst ? "wwd__reveal--right" : "wwd__reveal--left"
                }`}
              >
                <p className="wwd__num">
                  {section.number}
                  <span aria-hidden="true" />
                </p>
                <p className="wwd__kicker">{section.kicker}</p>
                <h3 className="wwd__heading">{section.title}</h3>

                <ul className="wwd__chain">
                  {items.map((item, itemIndex) => (
                    <li className="wwd__chip" key={`${section.id}-${item}`}>
                      {itemIndex === 0 ? (
                        <span className="wwd__chip-dot"></span>
                      ) : (
                        <span className="wwd__chip-arrow">→</span>
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

      {/* Lightbox */}
      <div className="wwd__lightbox" id="wwdLightbox">
        <button className="wwd__lightbox-close" id="wwdLightboxClose" aria-label="Close lightbox"></button>
        <img src="" alt="Enlarged view" id="wwdLightboxImage" />
      </div>
    </section>
  );
}