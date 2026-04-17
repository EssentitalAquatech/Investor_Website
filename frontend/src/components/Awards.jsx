


// import React, { useEffect, useRef, useState } from "react";
// import "./Award.css";

// function Award() {
//   const [selected, setSelected] = useState(null);
//   const scrollRef = useRef(null);

//   const awards = [
//     {
//       id: 1,
//       image: "/src/assets/images/HomeMain.png",
//       heading: "Enhancing skills in agricultural sciences with AI.",
//       year: "2023",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       id: 2,
//       image: "/src/assets/images/HomeMain2.png",
//       heading: "This is from PM",
//       year: "2022",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       id: 3,
//       image: "/src/assets/images/HomeMain.png",
//       heading: "Digital transformation in farming",
//       year: "2023",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       id: 4,
//       image: "/src/assets/images/HomeMain2.png",
//       heading: "Sustainable agriculture practices",
//       year: "2021",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       id: 5,
//       image: "/src/assets/images/HomeMain.png",
//       heading: "Innovation in crop management",
//       year: "2021",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//     {
//       id: 6,
//       image: "/src/assets/images/HomeMain2.png",
//       heading: "Technology in rural development",
//       year: "2021",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     },
//   ];

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     let animationFrame;

//     const scroll = () => {
//       container.scrollLeft += 0.7;

//       if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
//         container.scrollLeft = 0;
//       }

//       animationFrame = requestAnimationFrame(scroll);
//     };

//     scroll();

//     return () => cancelAnimationFrame(animationFrame);
//   }, []);

//   return (
//     <section className="awardSectionMain">
//       <div className="container">
//         <h2 className="awardMainHeading">
//           Awards & <span>Recognitions</span>
//         </h2>

//         <div className="awardWrapperBox">
//           <div className="awardScrollContainer" ref={scrollRef}>
//             {[...awards, ...awards].map((award, i) => (
//               <div
//                 key={i}
//                 className="awardSingleCard"
//                 onClick={() => setSelected(award)}
//               >
//                 <img src={award.image} alt="" />

//                 <div className="awardOverlay"></div>

//                 <div className="awardTextBox">
//                   <h5>{award.heading}</h5>
//                   <p>{award.year}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {selected && (
//         <div className="awardModal" onClick={() => setSelected(null)}>
//           <div
//             className="awardModalContent"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="awardCloseBtn"
//               onClick={() => setSelected(null)}
//             >
//               ✕
//             </button>

//             <img src={selected.image} alt="" />

//             <h3>{selected.heading}</h3>
//             <p className="awardYear">{selected.year}</p>
//             <p className="awardDesc">{selected.desc}</p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Award;









import React, { useEffect, useRef, useState } from "react";
import "./Award.css";

// ✅ Images import (Vercel-safe)
import HomeMain from "../assets/images/HomeMain.png";
import HomeMain2 from "../assets/images/HomeMain2.png";

function Award() {
  const [selected, setSelected] = useState(null);
  const scrollRef = useRef(null);

  const awards = [
    {
      id: 1,
      image: HomeMain,
      heading: "Enhancing skills in agricultural sciences with AI.",
      year: "2023",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      image: HomeMain2,
      heading: "This is from PM",
      year: "2022",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      image: HomeMain,
      heading: "Digital transformation in farming",
      year: "2023",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      image: HomeMain2,
      heading: "Sustainable agriculture practices",
      year: "2021",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      image: HomeMain,
      heading: "Innovation in crop management",
      year: "2021",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 6,
      image: HomeMain2,
      heading: "Technology in rural development",
      year: "2021",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame;

    const scroll = () => {
      container.scrollLeft += 0.7;

      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="awardSectionMain">
      <div className="container">
        <h2 className="awardMainHeading">
          Awards & <span>Recognitions</span>
        </h2>

        <div className="awardWrapperBox">
          <div className="awardScrollContainer" ref={scrollRef}>
            {[...awards, ...awards].map((award, i) => (
              <div
                key={i}
                className="awardSingleCard"
                onClick={() => setSelected(award)}
              >
                <img src={award.image} alt="" />

                <div className="awardOverlay"></div>

                <div className="awardTextBox">
                  <h5>{award.heading}</h5>
                  <p>{award.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <div className="awardModal" onClick={() => setSelected(null)}>
          <div
            className="awardModalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="awardCloseBtn"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <img src={selected.image} alt="" />

            <h3>{selected.heading}</h3>
            <p className="awardYear">{selected.year}</p>
            <p className="awardDesc">{selected.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Award;