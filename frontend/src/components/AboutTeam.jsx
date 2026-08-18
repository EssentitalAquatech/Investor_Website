






// import React, { useEffect, useRef } from "react";
// import "./AboutTeam.css";

// // ✅ Images import (Vercel-safe)
// import CEO from "../assets/images/CEO.jpg";
// import CEO2 from "../assets/images/CEO2.jpg";
// import CEO3 from "../assets/images/CEO3.jpg";

// function AboutTeam() {
//   const leftContainerRef = useRef(null);
//   const rightContainerRef = useRef(null);
//   const cardRefs = useRef([]);
//   const scrollContainerRef = useRef(null);

//   const teamMembers = [
//     {
//       id: 1,
//       name: "Matthew Thomas",
//       role: "Whole-Time Director and Chief Financial Officer",
//       image: CEO,
//     },
//     {
//       id: 2,
//       name: "Venu Gopala Krishna Annamaneni",
//       role: "Chief Technology Officer",
//       image: CEO2,
//     },
//     {
//       id: 3,
//       name: "Kumar Saurabh",
//       role: "Chief Information Officer",
//       image: CEO3,
//     },
//     {
//       id: 4,
//       name: "Alex Johnson",
//       role: "CEO & Founder",
//       image: CEO,
//     },
//     {
//       id: 5,
//       name: "Alex Johnson",
//       role: "CEO & Founder",
//       image: CEO2,
//     },
//     {
//       id: 6,
//       name: "Alex Johnson",
//       role: "CEO & Founder",
//       image: CEO3,
//     },
//     {
//       id: 7,
//       name: "Alex Johnson",
//       role: "CEO & Founder",
//       image: CEO,
//     },
//   ];

//   // Scroll left function
//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = 300;
//       scrollContainerRef.current.scrollBy({
//         left: -scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   // Scroll right function
//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = 300;
//       scrollContainerRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             if (entry.target === leftContainerRef.current) {
//               entry.target.classList.add("animate");
//             }

//             if (entry.target === rightContainerRef.current) {
//               entry.target.classList.add("animate");
//             }

//             if (cardRefs.current.includes(entry.target)) {
//               entry.target.classList.add("animate");
//             }
//           }
//         });
//       },
//       {
//         threshold: 0.2,
//         rootMargin: "0px 0px -50px 0px"
//       }
//     );

//     if (leftContainerRef.current) {
//       observer.observe(leftContainerRef.current);
//     }

//     if (rightContainerRef.current) {
//       observer.observe(rightContainerRef.current);
//     }

//     cardRefs.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     return () => {
//       if (leftContainerRef.current) observer.unobserve(leftContainerRef.current);
//       if (rightContainerRef.current) observer.unobserve(rightContainerRef.current);
//       cardRefs.current.forEach((card) => {
//         if (card) observer.unobserve(card);
//       });
//     };
//   }, []);

//   return (
//     <section className="abt-team-section">
//       <div className="abt-team-container" ref={scrollContainerRef}>
//         <div className="abt-team-layout">

//           {/* LEFT SIDE */}
//           <div className="abt-team-text-side" ref={leftContainerRef}>
//             <h2 className="abt-team-title">
//               <span className="abt-team-title-light">Meet Our</span>
//               <span className="abt-team-title-bold">Team</span>
//             </h2>

//             <p className="abt-team-subtitle abt-team-clamp-4">
//               Seasoned professionals <br/>with diverse backgrounds <br/> and expertise, driven by the<br/>  motivation to disrupt.
//             </p>

//             {/* SCROLL BUTTONS */}
//             <div className="abt-team-scroll-buttons">
//               <button 
//                 className="abt-team-scroll-btn"
//                 onClick={scrollRight}
//                 aria-label="Scroll right to see more team members"
//               >
//                 <span>Scroll</span>
//                 <span className="abt-team-btn-icon">→</span>
//               </button>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="abt-team-cards-side" ref={rightContainerRef}>
//             <div className="abt-team-scroll-container">
//               <div className="abt-team-members-row">
//                 {teamMembers.map((member, index) => (
//                   <div 
//                     key={member.id} 
//                     className="abt-team-member-card"
//                     ref={el => cardRefs.current[index] = el}
//                   >
//                     <div className="abt-team-card">
//                       <div className="abt-team-img-container">
//                         <img
//                           src={member.image}
//                           alt={member.name}
//                           className="abt-team-img"
//                         />
//                       </div>

//                       <div className="abt-team-card-body">
//                         <h5 className="abt-team-name">{member.name}</h5>
//                         <p className="abt-team-role">{member.role}</p>
//                         <p className="abt-team-desc">{member.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutTeam;























import React, { useEffect, useRef } from "react";
import "./AboutTeam.css";

// ☁️ Cloudinary Images
const teamImages = {
  image18:
    "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/ChatGPT_Image_Aug_14_2026_03_03_18_PM.png",

  image19:
    "https://res.cloudinary.com/p8fs2e1n/image/upload/f_auto,q_auto/ChatGPT_Image_Aug_14_2026_03_00_52_PM.png",
};

function AboutTeam() {
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const scrollContainerRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Arkaprava Das",
      role: "Founder and CEO",
      image: teamImages.image18,
    },
    {
      id: 2,
      name: "Subhadeep Mitra",
      role: "Chief Operating Officer",
      image: teamImages.image19,
    },
    {
      id: 3,
      name: "Kumar Saurabh",
      role: "Chartered Accountant",
      image: teamImages.image18,
    },
    {
      id: 4,
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: teamImages.image19,
    },
    {
      id: 5,
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: teamImages.image18,
    },
    {
      id: 6,
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: teamImages.image19,
    },
    {
      id: 7,
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: teamImages.image18,
    },
  ];

  // Scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;

      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftContainerRef.current) {
              entry.target.classList.add("animate");
            }

            if (entry.target === rightContainerRef.current) {
              entry.target.classList.add("animate");
            }

            if (cardRefs.current.includes(entry.target)) {
              entry.target.classList.add("animate");
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (leftContainerRef.current) {
      observer.observe(leftContainerRef.current);
    }

    if (rightContainerRef.current) {
      observer.observe(rightContainerRef.current);
    }

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      if (leftContainerRef.current) {
        observer.unobserve(leftContainerRef.current);
      }

      if (rightContainerRef.current) {
        observer.unobserve(rightContainerRef.current);
      }

      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section className="abt-team-section">
      <div
        className="abt-team-container"
        ref={scrollContainerRef}
      >
        <div className="abt-team-layout">

          {/* LEFT SIDE */}
          <div
            className="abt-team-text-side"
            ref={leftContainerRef}
          >
            <h2 className="abt-team-title">
              <span className="abt-team-title-light">
                Meet Our
              </span>

              <span className="abt-team-title-bold">
                Team
              </span>
            </h2>

            <p className="abt-team-subtitle abt-team-clamp-4">
              Seasoned professionals <br />
              with diverse backgrounds <br />
              and expertise, driven by the <br />
              motivation to disrupt.
            </p>

            {/* SCROLL BUTTON */}
            <div className="abt-team-scroll-buttons">
              <button
                className="abt-team-scroll-btn"
                onClick={scrollRight}
                aria-label="Scroll right to see more team members"
              >
                <span>Scroll</span>

                <span className="abt-team-btn-icon">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="abt-team-cards-side"
            ref={rightContainerRef}
          >
            <div className="abt-team-scroll-container">
              <div className="abt-team-members-row">

                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className="abt-team-member-card"
                    ref={(el) =>
                      (cardRefs.current[index] = el)
                    }
                  >
                    <div className="abt-team-card">

                      <div className="abt-team-img-container">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="abt-team-img"
                          loading="lazy"
                        />
                      </div>

                      <div className="abt-team-card-body">
                        <h5 className="abt-team-name">
                          {member.name}
                        </h5>

                        <p className="abt-team-role">
                          {member.role}
                        </p>

                        {member.description && (
                          <p className="abt-team-desc">
                            {member.description}
                          </p>
                        )}
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