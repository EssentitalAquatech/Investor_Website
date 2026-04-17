

// import React, { useState, useEffect, useRef } from "react";
// import "./Victory.css";

// /* ================= VIDEO IMPORTS ================= */
// import video1 from "../assets/images/ShedualDemo.mp4";
// import video2 from "../assets/images/ShedualDemo2.mp4";
// import video3 from "../assets/images/mainVideo.mp4";

// /* ================= DATA ================= */
// const testimonials = [
//   {
//     id: 1,
//     video: video1,
//     name: "Arjun Mehta",
//     address: "Dharavi, Mumbai",
//     intro: "From a small room to global tech lead.",
//     journey:
//       "Arjun grew up sharing a 10x10 room with five family members Arjun grew up sharing a 10x10 room with five family members..."
//   },
//   {
//     id: 2,
//     video: video2,
//     name: "Ravi Kumar",
//     address: "Patna, Bihar",
//     intro: "Tea stall to IAS officer.",
//     journey:
//       "Arjun grew up sharing a 10x10 room with five family members..."
//   },
//   {
//     id: 3,
//     video: video3,
//     name: "Neha Singh",
//     address: "Lucknow",
//     intro: "NASA intern journey.",
//     journey:
//       "Arjun grew up sharing a 10x10 room with five family members..."
//   }
// ];

// export default function Victory() {
//   const [index, setIndex] = useState(0);
//   const containerRef = useRef(null);

//   /* ================= AUTO SLIDER ================= */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % testimonials.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, []);

//   /* ================= SCROLL ANIMATION ================= */
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("in-view");
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     const elements = containerRef.current.querySelectorAll(".reveal");
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const current = testimonials[index];

//   return (
//     <div className="stories-section" ref={containerRef}>

//       {/* HEADER */}
//       <div className="header reveal from-bottom">
//         <div className="accent-line"></div>
//         <h2 className="section-title">
//           Stories that <span className="inspire">Inspire</span>
//         </h2>
//         <p className="section-subtitle">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit...
//         </p>
//       </div>

//       {/* MAIN CONTAINER */}
//       <div className="victory-container">

//         {/* LEFT VIDEO */}
//         <div className="left-video reveal from-left">
//           <video
//             key={current.id}
//             src={current.video}
//             controls
//             autoPlay
//             muted
//           />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="right-content">

//           <h3 className="name reveal from-right">{current.name}</h3>

//           <p className="address reveal from-left">
//             📍 {current.address}
//           </p>

//           <p className="intro reveal from-bottom">
//             {current.intro}
//           </p>

//           <p className="journey reveal from-bottom">
//             {current.journey}
//           </p>

//           <div className="dots reveal from-bottom">
//             {testimonials.map((_, i) => (
//               <span
//                 key={i}
//                 className={`dot ${i === index ? "active" : ""}`}
//                 onClick={() => setIndex(i)}
//               />
//             ))}
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }





















// import { useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Victory.css";
// import mainVideo from "../assets/images/mainVideo.mp4";
// import lifeFarmer from "../assets/images/LifeFarmer.mp4";



// import HomeMain from "../assets/images/HomeMain.png";


// const stories = [
//   {
//     name: "Ramesh Patel",
//     location: "Anand, Gujarat",
//     tag: "Fish Farmer",
//     // thumb:
//     //   "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=80",
//      thumb: HomeMain,
//     video: mainVideo,
//     desc:
//       "From a small dairy of 4 cows to a thriving 40-cow farm — the platform helped me track yield, sell directly, and double my income in 2 years.",
//   },
//   {
//     name: "Lakshmi Devi",
//     location: "Warangal, Telangana",
//     tag: "Organic Farmer",
//     thumb:
//       "https://images.unsplash.com/photo-1592982537447-7440770faae7?auto=format&fit=crop&w=900&q=80",
//     video: lifeFarmer,
//     desc:
//       "I learned modern organic techniques and connected with buyers across India. My family now earns 3x more from the same land.",
//   },
//   {
//     name: "Arjun Singh",
//     location: "Ludhiana, Punjab",
//     tag: "Wheat Grower",
//     thumb:
//       "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=80",
//     video: mainVideo,
//     desc:
//       "Real-time mandi prices and weather alerts changed how I plan harvests. Last season was the most profitable in 12 years.",
//   },
//   {
//     name: "Meera Joshi",
//     location: "Nashik, Maharashtra",
//     tag: "Grape Cultivator",
//     thumb:
//       "https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=900&q=80",
//     video: mainVideo,
//     desc:
//       "Export-grade certification and direct buyer matchmaking opened global markets. My grapes now reach Europe and the Middle East.",
//   },
//   {
//     name: "Suresh Reddy",
//     location: "Kurnool, Andhra Pradesh",
//     tag: "Cotton Farmer",
//     thumb:
//       "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
//     video: mainVideo,
//     desc:
//       "Soil-health insights helped me reduce fertilizer costs by 35% while improving yield. Truly a life-changing experience.",
//   },
//   {
//     name: "Anita Sharma",
//     location: "Jaipur, Rajasthan",
//     tag: "Spice Producer",
//     thumb:
//       "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80",
//     video: mainVideo,
//     desc:
//       "I built a small spice brand from my home kitchen. Today, my products sell in 14 cities — all because of the seller tools.",
//   },
//   {
//     name: "Vijay Kumar",
//     location: "Hassan, Karnataka",
//     tag: "Coffee Grower",
//     thumb:
//       "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?auto=format&fit=crop&w=900&q=80",
//     video: mainVideo,
//     desc:
//       "Direct-to-roaster sales removed middlemen. I now earn premium pricing for specialty Arabica from my estate.",
//   },
//   {
//     name: "Pooja Rani",
//     location: "Karnal, Haryana",
//     tag: "Poultry Owner",
//     thumb:
//       "https://images.unsplash.com/photo-1612170153139-6f881ff067e0?auto=format&fit=crop&w=900&q=80",
//     video: mainVideo,
//     desc:
//       "From 200 birds to 5,000 — the financing and mentorship I received was unmatched. I employ 8 women from my village now.",
//   },
//   {
//     name: "Karthik Iyer",
//     location: "Coimbatore, Tamil Nadu",
//     tag: "Agri-Tech Adopter",
//     thumb:
//       "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
//     video: mainVideo,
//     desc:
//       "Drone monitoring and AI crop alerts gave me a competitive edge. I save water, time, and money every single season.",
//   },
//   {
//     name: "Geeta Yadav",
//     location: "Patna, Bihar",
//     tag: "Vegetable Grower",
//     thumb:
//       "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
//     video: mainVideo,
//     desc:
//       "I started with one polyhouse — today I run four. The training programs taught me everything from planning to packaging.",
//   },
//   {
//     name: "Mohammed Irfan",
//     location: "Lucknow, Uttar Pradesh",
//     tag: "Mango Exporter",
//     thumb:
//       "https://images.unsplash.com/photo-1605027990121-cbae9e0642db?auto=format&fit=crop&w=900&q=80",
//     video: mainVideo,
//     desc:
//       "My Dasheri mangoes now ship to Dubai and Singapore. The export support team handled everything end-to-end.",
//   },
//   {
//     name: "Sunita Bhosale",
//     location: "Pune, Maharashtra",
//     tag: "Self-Help Group Leader",
//     thumb:
//       "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
//     video: mainVideo,
//     desc:
//       "I lead a women’s collective of 60 members. Together, we built a sustainable supply chain and gained financial independence.",
//   },
// ];

// const Victory = () => {
//    const navigate = useNavigate();
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.style.transitionDelay = `${
//               (entry.target.dataset.index % 3) * 100
//             }ms`;
//             entry.target.classList.add("sp-in-view");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     cardsRef.current.forEach((el) => el && observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const handlePlay = (e, video) => {
//     const wrap = e.currentTarget.closest(".sp-media");

//     if (!wrap) return;

//     wrap.innerHTML = `
//       <video controls autoplay playsinline style="width:100%; height:100%; object-fit:cover;">
//         <source src="${video}" type="video/mp4" />
//       </video>
//     `;
//   };

//   return (
//     <div className="sp-page">
//       {/* HERO */}
//       <section className="sp-hero">
//         <div className="container text-center">
//           <span className="sp-eyebrow sp-fade-up">
//             Real People · Real Impact
//           </span>

//           <h1 className="sp-title sp-fade-up sp-delay-1">
//             Stories <span className="sp-title-accent">That Inspire</span>
//           </h1>

//           <p className="sp-subtitle sp-fade-up sp-delay-2">
//             Discover the inspiring journeys of our farmers and users who
//             transformed their growth, income, and future with our platform.
//             Their success stories reflect trust, progress, and real impact.
//           </p>

//           <div className="sp-hero-meta sp-fade-up sp-delay-3">
//             <div>
//               <strong>10K+</strong>
//               <span>Lives Changed</span>
//             </div>

//             <div className="sp-divider" />

//             <div>
//               <strong>3.2x</strong>
//               <span>Avg. Income Growth</span>
//             </div>

//             <div className="sp-divider" />

//             <div>
//               <strong>28</strong>
//               <span>States Covered</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SHOWCASE */}
//       <section className="sp-showcase">
//         <div className="container">
//           <div className="text-center mb-5 sp-section-head">
//             <h2>Voices of Growth</h2>
//             <p>
//               Hear directly from the people whose journeys define our mission.
//             </p>
//           </div>

//           <div className="row g-4">
//             {stories.map((s, i) => (
//               <div
//                 key={s.name}
//                 className="col-12 col-sm-12 col-md-6 col-lg-4"
//               >
//                 <div
//                   className="sp-card"
//                   data-index={i}
//                   ref={(el) => (cardsRef.current[i] = el)}
//                 >
//                   <div className="sp-media">
//                     <img
//                       src={s.thumb}
//                       alt={`${s.name} - ${s.tag}`}
//                       loading="lazy"
//                     />

//                     <span className="sp-tag">{s.tag}</span>

//                     <div
//                       className="sp-play"
//                       onClick={(e) => handlePlay(e, s.video)}
//                     >
//                       <div className="sp-play-btn" aria-label="Play story">
//                         <svg viewBox="0 0 24 24">
//                           <path d="M8 5v14l11-7z" />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="sp-body">
//                     <h3 className="sp-name">{s.name}</h3>

//                     <span className="sp-loc">
//                       <svg viewBox="0 0 24 24">
//                         <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C12.95 21.5 20 15.4 20 10a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
//                       </svg>
//                       {s.location}
//                     </span>

//                     <p className="sp-desc">{s.desc}</p>

//                     <div className="sp-foot">
//                       <span className="sp-stars">★★★★★</span>

//                       {/* <a
//                         href="#"
//                         className="sp-read"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         Read story →
//                       </a> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="sp-cta">
//         <div className="container">
//           <h2>Share Your Success Story</h2>
//           <p>
//             Be the next inspiration. Tell us how our platform shaped your
//             journey.
//           </p>
// {/* 
//           <button className="sp-btn">Submit Your Story →</button> */}
//             <button
//             className="ip-btn"
//             onClick={() => navigate("/contact")}
//           >
//             Share Your Story →
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Victory;














import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Victory.css";

import mainVideo from "../assets/images/mainVideo.mp4";
import lifeFarmer from "../assets/images/LifeFarmer.mp4";
import HomeMain from "../assets/images/HomeMain.png";

const stories = [
  {
    name: "Ramesh Patel",
    location: "Anand, Gujarat",
    tag: "Fish Farmer",
    thumb: HomeMain,
    video: mainVideo,
    desc:
      "From a small dairy of 4 cows to a thriving 40-cow farm — the platform helped me track yield, sell directly, and double my income in 2 years.",
  },
  {
    name: "Lakshmi Devi",
    location: "Warangal, Telangana",
    tag: "Organic Farmer",
    thumb: HomeMain,
    video: lifeFarmer,
    desc:
      "I learned modern organic techniques and connected with buyers across India. My family now earns 3x more from the same land.",
  },
  {
    name: "Arjun Singh",
    location: "Ludhiana, Punjab",
    tag: "Wheat Grower",
    thumb: HomeMain,
    video: mainVideo,
    desc:
      "Real-time mandi prices and weather alerts changed how I plan harvests. Last season was the most profitable in 12 years.",
  },
  {
    name: "Meera Joshi",
    location: "Nashik, Maharashtra",
    tag: "Grape Cultivator",
    thumb: HomeMain,
    video: mainVideo,
    desc:
      "Export-grade certification and direct buyer matchmaking opened global markets. My grapes now reach Europe and the Middle East.",
  },
  {
    name: "Suresh Reddy",
    location: "Kurnool, Andhra Pradesh",
    tag: "Cotton Farmer",
    thumb: HomeMain,
    video: mainVideo,
    desc:
      "Soil-health insights helped me reduce fertilizer costs by 35% while improving yield. Truly a life-changing experience.",
  },
  {
    name: "Anita Sharma",
    location: "Jaipur, Rajasthan",
    tag: "Spice Producer",
    thumb: HomeMain,
    video: mainVideo,
    desc:
      "I built a small spice brand from my home kitchen. Today, my products sell in 14 cities — all because of the seller tools.",
  },
];

const Victory = () => {
  const navigate = useNavigate();
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${
              (entry.target.dataset.index % 3) * 100
            }ms`;
            entry.target.classList.add("sp-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handlePlay = (e, video) => {
    const wrap = e.currentTarget.closest(".sp-media");

    if (!wrap) return;

    wrap.innerHTML = `
      <video controls autoplay playsinline style="width:100%; height:100%; object-fit:cover;">
        <source src="${video}" type="video/mp4" />
      </video>
    `;
  };

  return (
    <div className="sp-page">
      {/* HERO */}
      <section className="sp-hero">
        <div className="container text-center">
          <span className="sp-eyebrow sp-fade-up">
            Real People · Real Impact
          </span>

          <h1 className="sp-title sp-fade-up sp-delay-1">
            Stories <span className="sp-title-accent">That Inspire</span>
          </h1>

          <p className="sp-subtitle sp-fade-up sp-delay-2">
            Discover the inspiring journeys of our farmers and users who
            transformed their growth, income, and future with our platform.
          </p>

          <div className="sp-hero-meta sp-fade-up sp-delay-3">
            <div>
              <strong>10K+</strong>
              <span>Lives Changed</span>
            </div>

            <div className="sp-divider" />

            <div>
              <strong>3.2x</strong>
              <span>Avg. Income Growth</span>
            </div>

            <div className="sp-divider" />

            <div>
              <strong>28</strong>
              <span>States Covered</span>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="sp-showcase">
        <div className="container">
          <div className="text-center mb-5 sp-section-head">
            <h2>Voices of Growth</h2>
            <p>
              Hear directly from the people whose journeys define our mission.
            </p>
          </div>

          <div className="row g-4">
            {stories.map((s, i) => (
              <div key={s.name} className="col-12 col-md-6 col-lg-4">
                <div
                  className="sp-card"
                  data-index={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                >
                  <div className="sp-media">
                    <img
                      src={s.thumb}
                      alt={`${s.name} - ${s.tag}`}
                      loading="lazy"
                    />

                    <span className="sp-tag">{s.tag}</span>

                    <div
                      className="sp-play"
                      onClick={(e) => handlePlay(e, s.video)}
                    >
                      <div className="sp-play-btn">
                        <svg viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="sp-body">
                    <h3 className="sp-name">{s.name}</h3>

                    <span className="sp-loc">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C12.95 21.5 20 15.4 20 10a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                      {s.location}
                    </span>

                    <p className="sp-desc">{s.desc}</p>

                    <div className="sp-foot">
                      <span className="sp-stars">★★★★★</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta">
        <div className="container text-center">
          <h2>Share Your Success Story</h2>

          <p>
            Be the next inspiration. Tell us how our platform shaped your
            journey.
          </p>

          <button
            className="ip-btn"
            onClick={() => navigate("/contact")}
          >
            Share Your Story →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Victory;