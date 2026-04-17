




import React, { useEffect, useRef } from "react";
import "./AboutTeam.css";

function AboutTeam() {
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const scrollContainerRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Matthew Thomas",
      role: "Whole-Time Director and Chief Financial Officer",
      image: "src/assets/images/CEO.jpg",
    },
    {
      id: 2,
      name: "Venu Gopala Krishna Annamaneni",
      role: "Chief Technology Officer",
      image: "src/assets/images/CEO2.jpg",
    },
    {
      id: 3,
      name: "Kumar Saurabh",
      role: "Chief Information Officer",
      image: "src/assets/images/CEO3.jpg",
    },
    {
      id: 4,
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "src/assets/images/CEO.jpg",
    },
    {
      id: 5,
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "src/assets/images/CEO2.jpg",
    },
    {
      id: 6,
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "src/assets/images/CEO3.jpg",
    },
    {
      id: 7,
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "src/assets/images/CEO.jpg",
    },
  ];

  // Scroll left function
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Left side animation
            if (entry.target === leftContainerRef.current) {
              entry.target.classList.add("animate");
            }
            
            // Right side animation
            if (entry.target === rightContainerRef.current) {
              entry.target.classList.add("animate");
            }
            
            // Cards animation
            if (cardRefs.current.includes(entry.target)) {
              entry.target.classList.add("animate");
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    // Observe left container
    if (leftContainerRef.current) {
      observer.observe(leftContainerRef.current);
    }

    // Observe right container
    if (rightContainerRef.current) {
      observer.observe(rightContainerRef.current);
    }

    // Observe all cards
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (leftContainerRef.current) observer.unobserve(leftContainerRef.current);
      if (rightContainerRef.current) observer.unobserve(rightContainerRef.current);
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="abt-team-section">
      <div className="abt-team-container" ref={scrollContainerRef}>
        <div className="abt-team-layout">

          {/* LEFT SIDE */}
          <div className="abt-team-text-side" ref={leftContainerRef}>
            <h2 className="abt-team-title">
              <span className="abt-team-title-light">Meet Our</span>
              <span className="abt-team-title-bold">Team</span>
            </h2>

            <p className="abt-team-subtitle abt-team-clamp-4">
              Seasoned professionals <br/>with diverse backgrounds <br/> and expertise, driven by the<br/>  motivation to disrupt.
            </p>

            {/* SCROLL BUTTONS */}
            <div className="abt-team-scroll-buttons">
              {/* <button 
                className="abt-team-scroll-btn"
                onClick={scrollLeft}
                aria-label="Scroll left to see more team members"
              >
                <span className="abt-team-btn-icon">←</span>
                <span>Simple Scroll</span>
              </button> */}
              
              <button 
                className="abt-team-scroll-btn"
                onClick={scrollRight}
                aria-label="Scroll right to see more team members"
              >
                <span>Scroll</span>
                <span className="abt-team-btn-icon">→</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="abt-team-cards-side" ref={rightContainerRef}>
            <div className="abt-team-scroll-container">
              <div className="abt-team-members-row">
                {teamMembers.map((member, index) => (
                  <div 
                    key={member.id} 
                    className="abt-team-member-card"
                    ref={el => cardRefs.current[index] = el}
                  >
                    <div className="abt-team-card">
                      <div className="abt-team-img-container">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="abt-team-img"
                        />
                      </div>

                      <div className="abt-team-card-body">
                        <h5 className="abt-team-name">{member.name}</h5>
                        <p className="abt-team-role">{member.role}</p>
                        <p className="abt-team-desc">{member.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutTeam;












