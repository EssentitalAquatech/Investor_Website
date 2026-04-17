




// import React, { useEffect, useRef, useState } from "react";
// import "./LifeImages.css";

// // Images
// import awardImage from "../assets/images/HomeMain.png";
// import firstImage from "../assets/images/HomeMain2.png";
// import mapImage from "../assets/images/HomeMain.png";
// import secondImage from "../assets/images/HomeMain2.png";
// import thirdImage from "../assets/images/HomeMain.png";

// function LifeImages() {
//   const [selected, setSelected] = useState(null);
//   const scrollRef = useRef(null);

//   const images = [
//     {
//       id: 1,
//       image: awardImage,
//       heading: "Team Collaboration Session",
//       year: "2023",
//       desc: "Working together towards common goals and achieving success.",
//     },
//     {
//       id: 2,
//       image: firstImage,
//       heading: "Office Celebration Event",
//       year: "2022",
//       desc: "Celebrating milestones with our amazing team.",
//     },
//     {
//       id: 3,
//       image: mapImage,
//       heading: "Project Launch Day",
//       year: "2024",
//       desc: "Launching innovative solutions for people.",
//     },
//     {
//       id: 4,
//       image: secondImage,
//       heading: "Team Building Activity",
//       year: "2021",
//       desc: "Building trust through fun team activities.",
//     },
//     {
//       id: 5,
//       image: thirdImage,
//       heading: "Client Meeting",
//       year: "2020",
//       desc: "Understanding needs and delivering solutions.",
//     },
   
//   ];

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     let animationFrame;

//     const scroll = () => {
//       container.scrollLeft += 0.7;

//       if (
//         container.scrollLeft >=
//         container.scrollWidth - container.clientWidth
//       ) {
//         container.scrollLeft = 0;
//       }

//       animationFrame = requestAnimationFrame(scroll);
//     };

//     scroll();

//     return () => cancelAnimationFrame(animationFrame);
//   }, []);

//   return (
//     <section className="lifeImagesSectionMain">
//       <div className="container">
//        <h2 className="lifeImagesMainHeading">
//   <span className="topLine">A Peek Into</span>
//   <span>Our Shared Experiences</span>
// </h2>

//         <div className="lifeImagesWrapperBox">
//           <div className="lifeImagesScrollContainer" ref={scrollRef}>
//             {[...images, ...images].map((item, i) => (
//               <div
//                 key={i}
//                 className="lifeImagesSingleCard"
//                 onClick={() => setSelected(item)}
//               >
//                 <img src={item.image} alt="" />

//                 <div className="lifeImagesOverlay"></div>

//                 <div className="lifeImagesTextBox">
//                   <h5>{item.heading}</h5>
//                   <p>{item.year}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {selected && (
//         <div
//           className="lifeImagesModal"
//           onClick={() => setSelected(null)}
//         >
//           <div
//             className="lifeImagesModalContent"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="lifeImagesCloseBtn"
//               onClick={() => setSelected(null)}
//             >
//               ✕
//             </button>

//             <img src={selected.image} alt="" />

//             <h3>{selected.heading}</h3>
//             <p className="lifeImagesYear">{selected.year}</p>
//             <p className="lifeImagesDesc">{selected.desc}</p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default LifeImages;











import React, { useEffect, useRef, useState } from "react";
import "./LifeImages.css";

// Images
import awardImage from "../assets/images/HomeMain.png";
import firstImage from "../assets/images/HomeMain2.png";
import mapImage from "../assets/images/HomeMain.png";
import secondImage from "../assets/images/HomeMain2.png";
import thirdImage from "../assets/images/HomeMain.png";

function LifeImages() {
  const [selected, setSelected] = useState(null);
  const scrollRef = useRef(null);
  const headingRef = useRef(null);

  const images = [
    {
      id: 1,
      image: awardImage,
      heading: "Team Collaboration Session",
      year: "2023",
      desc: "Working together towards common goals and achieving success.",
    },
    {
      id: 2,
      image: firstImage,
      heading: "Office Celebration Event",
      year: "2022",
      desc: "Celebrating milestones with our amazing team.",
    },
    {
      id: 3,
      image: mapImage,
      heading: "Project Launch Day",
      year: "2024",
      desc: "Launching innovative solutions for people.",
    },
    {
      id: 4,
      image: secondImage,
      heading: "Team Building Activity",
      year: "2021",
      desc: "Building trust through fun team activities.",
    },
    {
      id: 5,
      image: thirdImage,
      heading: "Client Meeting",
      year: "2020",
      desc: "Understanding needs and delivering solutions.",
    },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame;

    const scroll = () => {
      container.scrollLeft += 0.7;

      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Heading Animation on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headingRef.current.classList.add("showHeading");
        }
      },
      { threshold: 0.4 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="lifeImagesSectionMain">
      <div className="container">
        <h2 className="lifeImagesMainHeading" ref={headingRef}>
          <span className="topLine">A Peek Into</span>
          <span className="bottomLine">Our Shared Experiences</span>
        </h2>

        <div className="lifeImagesWrapperBox">
          <div className="lifeImagesScrollContainer" ref={scrollRef}>
            {[...images, ...images].map((item, i) => (
              <div
                key={i}
                className="lifeImagesSingleCard"
                onClick={() => setSelected(item)}
              >
                <img src={item.image} alt="" />

                <div className="lifeImagesOverlay"></div>

                <div className="lifeImagesTextBox">
                  <h5>{item.heading}</h5>
                  <p>{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <div
          className="lifeImagesModal"
          onClick={() => setSelected(null)}
        >
          <div
            className="lifeImagesModalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lifeImagesCloseBtn"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <img src={selected.image} alt="" />

            <h3>{selected.heading}</h3>
            <p className="lifeImagesYear">{selected.year}</p>
            <p className="lifeImagesDesc">{selected.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default LifeImages;