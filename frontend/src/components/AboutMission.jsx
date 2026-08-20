







// import React, { useRef, useEffect } from "react";
// import "./AboutMission.css";

// // Cloudinary — Vision Image
// const visionImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/vision.png";

// // Cloudinary — Mission Image
// const missionImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/mission.png";

// // Cloudinary — Our Values image
// const valuesImage =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/Value.png";

// function MissionSection({
//   imageSrc,
//   heading,
//   subheading,
//   text,
//   imageOnLeft = true,
//   id,
// }) {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const items = entry.target.querySelectorAll(
//               ".mission-image, .mission-heading, .mission-subheading, .mission-description p"
//             );

//             items.forEach((item, index) => {
//               setTimeout(() => {
//                 item.style.opacity = "1";
//                 item.style.transform = "translateY(0)";
//               }, index * 180);
//             });
//           }
//         });
//       },
//       { threshold: 0.25 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const words = heading.split(" ");

//   return (
//     <div ref={sectionRef} className="mission-section" id={id}>
//       <div className="container">

//         {/* =========================
//             WHO WE ARE + TOP HEADING
//         ========================= */}
//         <div className="mission-heading-area">

//           <div className="who-we-are">
//             <span className="who-line"></span>
//             <span>What does Essential Aquatech do?</span>
//           </div>

//           <h2 className="mission-top-heading mission-heading">
//             <span className="black-word">
//               {words[0]}
//             </span>{" "}
//             <span className="blue-word">
//               {words.slice(1).join(" ")}
//             </span>
//           </h2>

//         </div>

//         <div className="row align-items-center g-0">

//           {/* =========================
//               IMAGE LEFT
//           ========================= */}
//           {imageOnLeft && (
//             <div className="col-lg-6 col-md-12 mb-4">
//               <img
//                 src={imageSrc}
//                 alt={heading}
//                 className="mission-image"
//               />
//             </div>
//           )}

//           {/* =========================
//               CONTENT
//           ========================= */}
//           <div className="col-lg-6 col-md-12">
//             <div className="mission-content">
//               <div className="mission-text">

//                 <h3 className="mission-subheading">
//                   {subheading}
//                 </h3>

//                 <div className="mission-description">
//                   <p>{text}</p>
//                 </div>

//               </div>
//             </div>
//           </div>

//           {/* =========================
//               IMAGE RIGHT
//           ========================= */}
//           {!imageOnLeft && (
//             <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
//               <img
//                 src={imageSrc}
//                 alt={heading}
//                 className="mission-image"
//               />
//             </div>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// }

// function AboutMission() {
//   return (
//     <div className="about-mission-container">

//       {/* =========================
//           SECTION 1 — OUR VISION
//       ========================= */}
//       <MissionSection
//         id="mission-section-1"
//         imageSrc={visionImage}
//         heading="Our Vision"
//         subheading="A Resilient, Intelligent and Dignified Future for Aquaculture"
//         text="A future where freshwater aquaculture becomes a resilient, intelligent, and dignified livelihood for every smallholder farmer where no pond is too small to matter, no farmer too remote to reach, and no climate shock powerful enough to break a family that farms fish."
//         imageOnLeft={true}
//       />

//       {/* =========================
//           SECTION 2 — OUR MISSION
//       ========================= */}
//       <MissionSection
//         id="mission-section-2"
//         imageSrc={missionImage}
//         heading="Our Mission"
//         subheading="Building the Intelligence Infrastructure for Freshwater Aquaculture"
//         text="To build the intelligence infrastructure for freshwater aquaculture connecting every smallholder carp farmer to the data, advice, inputs, and finance they need to make better decisions, protect their ponds from climate and disease, and build a livelihood that sustains their family and feeds their community."
//         imageOnLeft={false}
//       />

//       {/* =========================
//           SECTION 3 — OUR VALUES
//       ========================= */}
//      <MissionSection 
//   id="mission-section-3" 
//   imageSrc={valuesImage} 
//   heading="Our Values" 
//   subheading={
//     <>
//       Innovation With Purpose, Intelligence With Impact,
//       <br />
//       We build on truth.
//     </>
//   } 
//   text="We put farmers first, act responsibly toward the planet, take ownership of every outcome, think boldly about the future, and hold ourselves to a high standard of execution. These values guide how we build technology, work with our ecosystem, and create lasting impact across aquaculture." 
//   imageOnLeft={true} 
// />

//     </div>
//   );
// }

// export default AboutMission;
















import React, { useEffect, useRef } from "react";
import "./AboutMission.css";

// =====================================================
// CLOUDINARY IMAGE URLs
// f_auto  = automatic best format (WebP/AVIF when supported)
// q_auto  = automatic quality optimization
// =====================================================

const visionImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/vision.png";

const missionImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/mission.png";

const valuesImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/Value.png";


// =====================================================
// MISSION SECTION
// =====================================================

function MissionSection({
  imageSrc,
  heading,
  subheading,
  text,
  imageOnLeft = true,
  id,
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const items = section.querySelectorAll(
      ".mission-image, .mission-heading, .mission-subheading, .mission-description p"
    );

    // -----------------------------------------------
    // Reduced motion
    // -----------------------------------------------
    if (prefersReducedMotion) {
      items.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      });

      return;
    }

    // -----------------------------------------------
    // Intersection Observer
    // -----------------------------------------------
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        items.forEach((item, index) => {
          const delay = index * 180;

          window.setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          }, delay);
        });

        // Section only needs to be animated once
        observer.unobserve(section);
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const words = heading.split(" ");

  return (
    <div ref={sectionRef} className="mission-section" id={id}>
      <div className="container">

        {/* =========================
            WHO WE ARE + TOP HEADING
        ========================= */}
        <div className="mission-heading-area">

          <div className="who-we-are">
            <span className="who-line"></span>
            <span>What does Essential Aquatech do?</span>
          </div>

          <h2 className="mission-top-heading mission-heading">
            <span className="black-word">
              {words[0]}
            </span>{" "}

            <span className="blue-word">
              {words.slice(1).join(" ")}
            </span>
          </h2>

        </div>


        <div className="row align-items-center g-0">

          {/* =========================
              IMAGE LEFT
          ========================= */}
          {imageOnLeft && (
            <div className="col-lg-6 col-md-12 mb-4">

              <img
                src={imageSrc}
                alt={heading}
                className="mission-image"
                loading={id === "mission-section-1" ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={
                  id === "mission-section-1"
                    ? "high"
                    : "low"
                }
              />

            </div>
          )}


          {/* =========================
              CONTENT
          ========================= */}
          <div className="col-lg-6 col-md-12">

            <div className="mission-content">

              <div className="mission-text">

                <h3 className="mission-subheading">
                  {subheading}
                </h3>

                <div className="mission-description">
                  <p>{text}</p>
                </div>

              </div>

            </div>

          </div>


          {/* =========================
              IMAGE RIGHT
          ========================= */}
          {!imageOnLeft && (
            <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">

              <img
                src={imageSrc}
                alt={heading}
                className="mission-image"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />

            </div>
          )}

        </div>

      </div>
    </div>
  );
}


// =====================================================
// ABOUT MISSION
// =====================================================

function AboutMission() {
  return (
    <div className="about-mission-container">

      {/* =========================
          SECTION 1 — OUR VISION
      ========================= */}
      <MissionSection
        id="mission-section-1"
        imageSrc={visionImage}
        heading="Our Vision"
        subheading="A Resilient, Intelligent and Dignified Future for Aquaculture"
        text="A future where freshwater aquaculture becomes a resilient, intelligent, and dignified livelihood for every smallholder farmer where no pond is too small to matter, no farmer too remote to reach, and no climate shock powerful enough to break a family that farms fish."
        imageOnLeft={true}
      />


      {/* =========================
          SECTION 2 — OUR MISSION
      ========================= */}
      <MissionSection
        id="mission-section-2"
        imageSrc={missionImage}
        heading="Our Mission"
        subheading="Building the Intelligence Infrastructure for Freshwater Aquaculture"
        text="To build the intelligence infrastructure for freshwater aquaculture connecting every smallholder carp farmer to the data, advice, inputs, and finance they need to make better decisions, protect their ponds from climate and disease, and build a livelihood that sustains their family and feeds their community."
        imageOnLeft={false}
      />


      {/* =========================
          SECTION 3 — OUR VALUES
      ========================= */}
      <MissionSection
        id="mission-section-3"
        imageSrc={valuesImage}
        heading="Our Values"
        subheading={
          <>
            Innovation With Purpose, Intelligence With Impact,
            <br />
            We build on truth.
          </>
        }
        text="We put farmers first, act responsibly toward the planet, take ownership of every outcome, think boldly about the future, and hold ourselves to a high standard of execution. These values guide how we build technology, work with our ecosystem, and create lasting impact across aquaculture."
        imageOnLeft={true}
      />

    </div>
  );
}

export default AboutMission;