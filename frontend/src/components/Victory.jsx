








// import { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Victory.css";

// // import mainVideo from "../assets/images/mainVideo.mp4";
// // import lifeFarmer from "../assets/images/LifeFarmer.mp4";
//   // import HomeMain from "../assets/images/HomeMain.png";

// // ☁️ Cloudinary Farmer Thumbnail Images
// const farmer1 =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/farmer1.png";

// const farmer2 =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/farmer2.png";

// const farmer3 =
//   "https://res.cloudinary.com/p8fs2e1n/image/upload/farmer3.png";


// const stories = [
//   {
//     name: "Ramesh Patel",
//     location: "Anand, Gujarat",
//     // tag: "Fish Farmer",

//     // ☁️ Cloudinary thumbnail
//     thumb: farmer1,

//     video: mainVideo,

//     desc:
//       "With better pond monitoring and timely insights, I improved fish survival, managed feeding more efficiently, and increased my overall farm productivity.",
//   },

//   {
//     name: "Shanti Devi",
//     location: "Gorakhpur, Uttar Pradesh",
//     // tag: "Fish Farmer",

//     // ☁️ Cloudinary thumbnail
//     thumb: farmer2,

//     video: lifeFarmer,

//     desc:
//       "The platform helped me understand my pond conditions, improve fish feeding practices, and make better decisions throughout the farming cycle.",
//   },

//   {
//     name: "Arjun Singh",
//     location: "Ludhiana, Punjab",
//     // tag: "Fish Farmer",

//     // ☁️ Cloudinary thumbnail
//     thumb: farmer3,

//     video: mainVideo,

//     desc:
//       "Weather alerts and farm insights helped me prepare for changing conditions, manage my pond better, and improve fish growth and production.",
//   },
// ];



// const Victory = () => {

//   const navigate = useNavigate();

//   const cardsRef = useRef([]);


//   useEffect(() => {

//     const observer = new IntersectionObserver(
//       (entries) => {

//         entries.forEach((entry) => {

//           if (entry.isIntersecting) {

//             entry.target.style.transitionDelay = `${(
//               (entry.target.dataset.index % 3) * 100
//             )}ms`;

//             entry.target.classList.add("sp-in-view");

//             observer.unobserve(entry.target);
//           }

//         });

//       },
//       {
//         threshold: 0.15,
//       }
//     );


//     cardsRef.current.forEach(
//       (el) => el && observer.observe(el)
//     );


//     return () => observer.disconnect();

//   }, []);


//   const handlePlay = (e, video) => {

//     const wrap =
//       e.currentTarget.closest(".sp-media");


//     if (!wrap) return;


//     wrap.innerHTML = `
//       <video
//         controls
//         autoplay
//         playsinline
//         style="
//           width:100%;
//           height:100%;
//           object-fit:cover;
//         "
//       >
//         <source
//           src="${video}"
//           type="video/mp4"
//         />
//       </video>
//     `;

//   };


//   const handleShareStory = () => {

//     navigate("/");


//     setTimeout(() => {

//       const contactSection =
//         document.getElementById("contact");


//       if (contactSection) {

//         contactSection.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });

//       }

//     }, 100);

//   };


//   return (

//     <div className="sp-page">


//       {/* =====================================
//           HERO
//       ===================================== */}

//       <section className="sp-hero">

//         <div className="container text-center">

//           <span className="sp-eyebrow sp-fade-up">
//             Real People · Real Impact
//           </span>


//           <h1 className="sp-title sp-fade-up sp-delay-1">

//             Stories{" "}

//             <span className="sp-title-accent">
//               That Inspire
//             </span>

//           </h1>


//           <p className="sp-subtitle sp-fade-up sp-delay-2">

//             Discover the inspiring journeys of our farmers and users who
//             transformed their growth, income, and future with our platform.

//           </p>


//           <div className="sp-hero-meta sp-fade-up sp-delay-3">


//             <div>

//               <strong>
//                 10K+
//               </strong>

//               <span>
//                 Lives Changed
//               </span>

//             </div>


//             <div className="sp-divider" />


//             <div>

//               <strong>
//                 3.2x
//               </strong>

//               <span>
//                 Avg. Income Growth
//               </span>

//             </div>


//             <div className="sp-divider" />


//             <div>

//               <strong>
//                 3+
//               </strong>

//               <span>
//                 countries Covered
//               </span>

//             </div>

//           </div>

//         </div>

//       </section>



//       {/* =====================================
//           SHOWCASE
//       ===================================== */}

//       <section className="sp-showcase">

//         <div className="container">


//           <div className="text-center mb-5 sp-section-head">

//             <h2>
//               Voices of Growth
//             </h2>

//             <p>
//               Hear directly from the people whose journeys define our mission.
//             </p>

//           </div>



//           <div className="row g-4">

//             {stories.map((s, i) => (

//               <div
//                 key={s.name}
//                 className="col-12 col-md-6 col-lg-4"
//               >

//                 <div
//                   className="sp-card"
//                   data-index={i}
//                   ref={(el) =>
//                     (cardsRef.current[i] = el)
//                   }
//                 >


//                   {/* =========================
//                       THUMBNAIL / VIDEO
//                   ========================= */}

//                   <div className="sp-media">

//                     <img
//                       src={s.thumb}
//                       alt={`${s.name} - ${s.tag}`}
//                       loading="lazy"
//                     />


//                     <span className="sp-tag">
//                       {s.tag}
//                     </span>


//                     <div
//                       className="sp-play"
//                       onClick={(e) =>
//                         handlePlay(e, s.video)
//                       }
//                     >

//                       <div className="sp-play-btn">

//                         <svg
//                           viewBox="0 0 24 24"
//                           aria-hidden="true"
//                         >

//                           <path d="M8 5v14l11-7z" />

//                         </svg>

//                       </div>

//                     </div>

//                   </div>



//                   {/* =========================
//                       CARD BODY
//                   ========================= */}

//                   <div className="sp-body">


//                     <h3 className="sp-name">
//                       {s.name}
//                     </h3>


//                     <span className="sp-loc">

//                       <svg
//                         viewBox="0 0 24 24"
//                         aria-hidden="true"
//                       >

//                         <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C12.95 21.5 20 15.4 20 10a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />

//                       </svg>

//                       {s.location}

//                     </span>


//                     <p className="sp-desc">
//                       {s.desc}
//                     </p>


//                     <div className="sp-foot">

//                       <span className="sp-stars">
//                         ★★★★★
//                       </span>

//                     </div>

//                   </div>

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>



//       {/* =====================================
//           CTA
//       ===================================== */}

//       <section className="sp-cta">

//         <div className="container text-center">


//           <h2>
//             Share Your Success Story
//           </h2>


//           <p>

//             Be the next inspiration. Tell us how our platform shaped your
//             journey.

//           </p>


//           <button
//             type="button"
//             className="ip-btn"
//             onClick={handleShareStory}
//           >

//             Share Your Story →

//           </button>


//         </div>

//       </section>


//     </div>

//   );

// };


// export default Victory;
























import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Victory.css";

// ==========================================
// VIDEO IMPORTS - BAAD ME ADD KARNA
// ==========================================
// import mainVideo from "../assets/images/mainVideo.mp4";
// import lifeFarmer from "../assets/images/LifeFarmer.mp4";

// ==========================================
// CLOUDINARY FARMER THUMBNAIL IMAGES
// ==========================================

const farmer1 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/farmer1.png";

const farmer2 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/farmer2.png";

const farmer3 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/farmer3.png";

// ==========================================
// FARMER STORIES
// ==========================================

const stories = [
  {
    name: "Ramesh Patel",
    location: "Anand, Gujarat",

    thumb: farmer1,

    desc:
      "With better pond monitoring and timely insights, I improved fish survival, managed feeding more efficiently, and increased my overall farm productivity.",
  },

  {
    name: "Shanti Devi",
    location: "Gorakhpur, Uttar Pradesh",

    thumb: farmer2,

    desc:
      "The platform helped me understand my pond conditions, improve fish feeding practices, and make better decisions throughout the farming cycle.",
  },

  {
    name: "Arjun Singh",
    location: "Ludhiana, Punjab",

    thumb: farmer3,

    desc:
      "Weather alerts and farm insights helped me prepare for changing conditions, manage my pond better, and improve fish growth and production.",
  },
];

// ==========================================
// COMPONENT
// ==========================================

const Victory = () => {
  const navigate = useNavigate();

  const cardsRef = useRef([]);

  // ==========================================
  // CARD SCROLL ANIMATION
  // ==========================================

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
      {
        threshold: 0.15,
      }
    );

    cardsRef.current.forEach(
      (el) => el && observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  // ==========================================
  // SHARE STORY
  // ==========================================

  const handleShareStory = () => {
    navigate("/");

    setTimeout(() => {
      const contactSection =
        document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <div className="sp-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="sp-hero">
        <div className="container text-center">

          <span className="sp-eyebrow sp-fade-up">
            Real People · Real Impact
          </span>

          <h1 className="sp-title sp-fade-up sp-delay-1">
            Stories{" "}
            <span className="sp-title-accent">
              That Inspire
            </span>
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
              <strong>3+</strong>
              <span>Countries Covered</span>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================
          SHOWCASE
      ===================================== */}

      <section className="sp-showcase">
        <div className="container">

          <div className="text-center mb-5 sp-section-head">

            <h2>
              Voices of Growth
            </h2>

            <p>
              Hear directly from the people whose journeys define our mission.
            </p>

          </div>

          <div className="row g-4">

            {stories.map((s, i) => (

              <div
                key={s.name}
                className="col-12 col-md-6 col-lg-4"
              >

                <div
                  className="sp-card"
                  data-index={i}
                  ref={(el) => {
                    cardsRef.current[i] = el;
                  }}
                >

                  {/* =================================
                      THUMBNAIL
                  ================================= */}

                  <div className="sp-media">

                    <img
                      src={s.thumb}
                      alt={`${s.name} - Farmer`}
                      loading="lazy"
                      decoding="async"
                    />

                  </div>

                  {/* =================================
                      CARD BODY
                  ================================= */}

                  <div className="sp-body">

                    <h3 className="sp-name">
                      {s.name}
                    </h3>

                    <span className="sp-loc">

                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C12.95 21.5 20 15.4 20 10a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>

                      {s.location}

                    </span>

                    <p className="sp-desc">
                      {s.desc}
                    </p>

                    <div className="sp-foot">

                      <span className="sp-stars">
                        ★★★★★
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================
          CTA
      ===================================== */}

      <section className="sp-cta">

        <div className="container text-center">

          <h2>
            Share Your Success Story
          </h2>

          <p>
            Be the next inspiration. Tell us how our platform shaped your
            journey.
          </p>

          <button
            type="button"
            className="ip-btn"
            onClick={handleShareStory}
          >
            Share Your Story →
          </button>

        </div>

      </section>

    </div>
  );
};

export default Victory;