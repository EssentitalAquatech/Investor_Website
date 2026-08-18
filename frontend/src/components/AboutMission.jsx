







// import React, { useRef, useEffect } from "react";
// import "./AboutMission.css";

// // Images
// import HomeMain from "../assets/images/HomeMain.png";
// import HomeMain2 from "../assets/images/HomeMain2.png";

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
//             <span>WHO WE ARE</span>
//           </div>

//           <h2 className="mission-top-heading mission-heading">
//             <span className="black-word">
//               {words[0]}
//             </span>{" "}
//             <span className="blue-word">
//               {words.slice(1).join(" ")}
//             </span>
//           </h2>

//           {/* Vertical AI statement only on first section */}
//           {id === "mission-section-1" && (
//             <div className="vertical-ai-statement">
//               Building the world's largest{" "}
//               <span>Vertical AI for Fish Farming</span>{" "}
//               to power intelligent aquaculture globally.
//             </div>
//           )}

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
//         imageSrc={HomeMain}
//         heading="Our Vision"
//         subheading="Building the Intelligence Layer for Aquaculture"
//         text="We envision a world where every fish farmer can make smarter, faster and more confident decisions. By bringing together AI, satellite, weather, water and farm data, we are building the intelligence layer that makes aquaculture more predictive, profitable and sustainable."
//         imageOnLeft={true}
//       />


//       {/* =========================
//           SECTION 2 — OUR MISSION
//       ========================= */}
//       <MissionSection
//         id="mission-section-2"
//         imageSrc={HomeMain2}
//         heading="Our Mission"
//         subheading="Transforming Aquaculture Through Intelligence and Technology"
//         text="Our mission is to empower the aquaculture ecosystem with intelligent technology that turns complex farm data into clear, actionable insights. We connect farmers, agents and the wider aquaculture value chain through AI-driven intelligence to improve productivity, reduce risk and create more sustainable outcomes."
//         imageOnLeft={false}
//       />


//       {/* =========================
//           SECTION 3 — OUR VALUES
//       ========================= */}
//       <MissionSection
//         id="mission-section-3"
//         imageSrc={HomeMain}
//         heading="Our Values"
//         subheading="Innovation With Purpose, Intelligence With Impact"
//         text="We believe technology should create meaningful impact on the ground. We value innovation, transparency, sustainability and farmer-first thinking. Every solution we build is designed to turn intelligence into action, strengthen livelihoods and help shape a smarter, more resilient future for aquaculture."
//         imageOnLeft={true}
//       />

//     </div>
//   );
// }

// export default AboutMission;




















import React, { useRef, useEffect } from "react";
import "./AboutMission.css";

// Images
import HomeMain from "../assets/images/HomeMain.png";
import HomeMain2 from "../assets/images/HomeMain2.png";

// Cloudinary — Our Values image
const valuesImage =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/Value.png";

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(
              ".mission-image, .mission-heading, .mission-subheading, .mission-description p"
            );

            items.forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
              }, index * 180);
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
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
            <span>WHO WE ARE</span>
          </div>

          <h2 className="mission-top-heading mission-heading">
            <span className="black-word">
              {words[0]}
            </span>{" "}
            <span className="blue-word">
              {words.slice(1).join(" ")}
            </span>
          </h2>

          {/* Vertical AI statement only on first section */}
          {id === "mission-section-1" && (
            <div className="vertical-ai-statement">
              Building the world's largest{" "}
              <span>Vertical AI for Fish Farming</span>{" "}
              to power intelligent aquaculture globally.
            </div>
          )}

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
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

function AboutMission() {
  return (
    <div className="about-mission-container">

      {/* =========================
          SECTION 1 — OUR VISION
      ========================= */}
      <MissionSection
        id="mission-section-1"
        imageSrc={HomeMain}
        heading="Our Vision"
        subheading="Building the Intelligence Layer for Aquaculture"
        text="We envision a world where every fish farmer can make smarter, faster and more confident decisions. By bringing together AI, satellite, weather, water and farm data, we are building the intelligence layer that makes aquaculture more predictive, profitable and sustainable."
        imageOnLeft={true}
      />


      {/* =========================
          SECTION 2 — OUR MISSION
      ========================= */}
      <MissionSection
        id="mission-section-2"
        imageSrc={HomeMain2}
        heading="Our Mission"
        subheading="Transforming Aquaculture Through Intelligence and Technology"
        text="Our mission is to empower the aquaculture ecosystem with intelligent technology that turns complex farm data into clear, actionable insights. We connect farmers, agents and the wider aquaculture value chain through AI-driven intelligence to improve productivity, reduce risk and create more sustainable outcomes."
        imageOnLeft={false}
      />


      {/* =========================
          SECTION 3 — OUR VALUES
      ========================= */}
      <MissionSection
        id="mission-section-3"
        imageSrc={valuesImage}
        heading="Our Values"
        subheading="Innovation With Purpose, Intelligence With Impact"
        text="We put farmers first, act responsibly toward the planet, take ownership of every outcome, think boldly about the future, and hold ourselves to a high standard of execution. These values guide how we build technology, work with our ecosystem, and create lasting impact across aquaculture."
        imageOnLeft={true}
      />

    </div>
  );
}

export default AboutMission;