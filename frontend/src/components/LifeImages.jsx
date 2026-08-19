


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
//   const headingRef = useRef(null);

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

//   // Heading Animation on Scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           headingRef.current.classList.add("showHeading");
//         }
//       },
//       { threshold: 0.4 }
//     );

//     if (headingRef.current) {
//       observer.observe(headingRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="lifeImagesSectionMain">
//       <div className="container">
//         <h2 className="lifeImagesMainHeading" ref={headingRef}>
//           <span className="topLine">A Peek Into</span>
//           <span className="bottomLine">Our Shared Experiences</span>
//         </h2>

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

// ☁️ Cloudinary Images
const image145 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/145.jpg";

const image157 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/157.jpg";

const image79 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/79.jpg";

const image1 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/1.jpg";

const image2 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/2.jpg";

const image3 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/3.jpg";

const image4 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/4.jpg";

const image5 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/5.jpg";

const image6 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/6.jpg";

const image48 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/48.jpg";

const image49 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/49.jpg";

const image62 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/62.jpg";

const image86 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/86.jpg";

const image96 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/96.jpg";

const image106 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/106.jpg";

const image109 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/109.jpg";

const image147 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/147.jpg";

const image146 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/146.jpg";

const image156 =
  "https://res.cloudinary.com/p8fs2e1n/image/upload/156.jpg";

function LifeImages() {
  const [selected, setSelected] = useState(null);
  const scrollRef = useRef(null);
  const headingRef = useRef(null);

  const images = [
    {
      id: 1,
      image: image145,
      heading: "Empowering Farmers Through Knowledge",
      year: "Farmer Outreach",
      desc: "Engaging with farmers and communities to share practical knowledge, strengthen connections, and promote better opportunities in aquaculture.",
    },

    {
      id: 2,
      image: image157,
      heading: "Building Stronger Aquaculture Communities",
      year: "Community Engagement",
      desc: "Connecting with farmers, partners, and local communities to understand their needs and build solutions that create meaningful impact.",
    },

    {
      id: 3,
      image: image79,
      heading: "Connecting With the Aquaculture Ecosystem",
      year: "Field Engagement",
      desc: "Working closely with people on the ground to understand real farming challenges and bring technology closer to everyday aquaculture.",
    },

    {
      id: 4,
      image: image1,
      heading: "Celebrating Field-Level Impact",
      year: "Field Visit",
      desc: "Meeting farmers and partners in the field while experiencing the real-world impact of our work across the aquaculture ecosystem.",
    },

    {
      id: 5,
      image: image2,
      heading: "Supporting Farmers With Technology",
      year: "Farmer Interaction",
      desc: "Direct interaction with farmers and stakeholders helps us turn real field experiences into practical and technology-driven solutions.",
    },

    {
      id: 6,
      image: image3,
      heading: "Understanding Aquaculture From the Field",
      year: "Farm Visit",
      desc: "Spending time at the farm to understand day-to-day operations, challenges, and opportunities for improving aquaculture productivity.",
    },

    {
      id: 7,
      image: image4,
      heading: "Innovation Beyond the Farm",
      year: "Innovation & Research",
      desc: "Exploring processes, infrastructure, and technology that can contribute to more efficient and sustainable aquaculture practices.",
    },

    {
      id: 8,
      image: image5,
      heading: "Learning From Real Farm Experiences",
      year: "Field Learning",
      desc: "Observing farming practices and interacting with people on the ground to better understand the realities of aquaculture operations.",
    },

    {
      id: 9,
      image: image6,
      heading: "Collaborating With Farmers",
      year: "Farmer Collaboration",
      desc: "Working alongside farmers and field teams to understand challenges, exchange ideas, and create solutions that work in real conditions.",
    },

    {
      id: 10,
      image: image48,
      heading: "On-Ground Aquaculture Engagement",
      year: "Farm Visit",
      desc: "Visiting aquaculture farms and engaging directly with farmers to understand their operations and identify opportunities for improvement.",
    },

    {
      id: 11,
      image: image49,
      heading: "Understanding the Market Ecosystem",
      year: "Market Visit",
      desc: "Exploring the aquaculture market and observing how products, farmers, and local businesses come together across the value chain.",
    },

    {
      id: 12,
      image: image62,
      heading: "Working Where Aquaculture Happens",
      year: "Field Visit",
      desc: "Being present at the farm level to understand practical challenges and develop technology that is grounded in real-world aquaculture.",
    },

    {
      id: 13,
      image: image86,
      heading: "Learning Directly From Farmers",
      year: "Farmer Interaction",
      desc: "Meeting farmers on their farms and learning directly from their experiences to build more useful and farmer-centric solutions.",
    },

    {
      id: 14,
      image: image96,
      heading: "Bringing Data to the Farm",
      year: "Water & Farm Intelligence",
      desc: "Using practical measurements and field data to better understand farm conditions and support smarter aquaculture decisions.",
    },

    {
      id: 15,
      image: image106,
      heading: "Technology Meets the Farmer",
      year: "Field Engagement",
      desc: "Combining technology with on-ground knowledge to help farmers make better decisions and improve the way they manage their farms.",
    },

    {
      id: 16,
      image: image109,
      heading: "Building Trust Through Field Work",
      year: "Farmer Outreach",
      desc: "Building meaningful relationships with farmers through direct interaction, listening, and a deeper understanding of their everyday challenges.",
    },

    {
      id: 17,
      image: image147,
      heading: "Connecting With the Wider Ecosystem",
      year: "Community Outreach",
      desc: "Engaging with communities and ecosystem partners to create awareness, share knowledge, and strengthen the future of aquaculture.",
    },

    {
      id: 18,
      image: image146,
      heading: "Sharing Knowledge and Innovation",
      year: "Knowledge Session",
      desc: "Bringing people together to share ideas, discuss challenges, and explore innovative approaches for the growth of aquaculture.",
    },

    {
      id: 19,
      image: image156,
      heading: "Building Better Aquaculture Infrastructure",
      year: "Farm Infrastructure",
      desc: "Exploring modern aquaculture infrastructure and farm systems designed to support efficient, scalable, and sustainable fish farming.",
    },

    {
      id: 20,
      image: image157,
      heading: "Together for the Future of Aquaculture",
      year: "Ecosystem Engagement",
      desc: "Bringing together farmers, communities, and partners with a shared vision of making aquaculture more intelligent, productive, and sustainable.",
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
          <div
            className="lifeImagesScrollContainer"
            ref={scrollRef}
          >
            {images.map((item, i) => (
              <div
                key={i}
                className="lifeImagesSingleCard"
                onClick={() => setSelected(item)}
              >
                <img src={item.image} alt={item.heading} />

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

            <img src={selected.image} alt={selected.heading} />

            <h3>{selected.heading}</h3>

            <p className="lifeImagesYear">
              {selected.year}
            </p>

            <p className="lifeImagesDesc">
              {selected.desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default LifeImages;

