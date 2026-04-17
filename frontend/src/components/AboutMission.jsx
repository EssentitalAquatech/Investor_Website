import React, { useRef, useEffect } from "react";
import "./AboutMission.css";

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const words = heading.split(" ");

  return (
    <div ref={sectionRef} className="mission-section" id={id}>
      <div className="container">
        {/* Top Heading */}
        <h2 className="mission-top-heading mission-heading">
          <span className="black-word">{words[0]}</span>{" "}
          <span className="blue-word">{words[1]}</span>
        </h2>

        <div className="row align-items-center g-0">
          {/* Image Left */}
          {imageOnLeft && (
            <div className="col-lg-6 col-md-12 mb-4">
              <img src={imageSrc} alt={heading} className="mission-image" />
            </div>
          )}

          {/* Content */}
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

          {/* Image Right */}
          {!imageOnLeft && (
            <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
              <img src={imageSrc} alt={heading} className="mission-image" />
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
      {/* Section 1 */}
      <MissionSection
        id="mission-section-1"
        imageSrc="/src/assets/images/HomeMain.png"
        heading="Our Mission"
        subheading="Connect The Dots Globally Across The Fresh Fish ood Supply Chain"
        text="The billion-dollar global seafood distribution industry faces fragmentation, lacks standardisation, and is operationally complex. We aspire to transform the seafood industry by delivering high-quality, traceable and reliable seafood to our customers at transparent fulfilment terms."
        imageOnLeft={true}
      />

      {/* Section 2 */}
      <MissionSection
        id="mission-section-2"
        imageSrc="/src/assets/images/HomeMain2.png"
        heading="Our Vision"
        subheading="Transforming Fresh Fish Food Supply Chain Through Technology"
        text="We envision a world where seafood supply chains are transparent, efficient, and sustainable. Through cutting-edge technology and innovative solutions, we're building the future of seafood distribution that benefits everyone from fishermen to consumers."
        imageOnLeft={false}
      />
    </div>
  );
}

export default AboutMission;