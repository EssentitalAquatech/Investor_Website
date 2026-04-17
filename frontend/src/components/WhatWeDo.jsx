



// import React, { useEffect, useRef } from 'react';
// import "./WhatWeDo.css";

// function WhatWeDo() {
//   const sectionRefs = useRef([]);

//   const sections = [
//     {
//       id: 1,
//       imageSrc: "/src/assets/images/HomeMain.png",
//       title: "Here we Write about images",
//       description: "Lorem ipsum style writing is often used when content is needed but meaning is not important Traditional fish farming data often remains scattered at ground level — stored in notebooks, isolated systems, or individual experiences of farmers. Through our VLE model..."
//     },
//     {
//       id: 2,
//       imageSrc: "/src/assets/images/HomeMain2.png",
//       title: "Here we Write about images",
//       description: "Lorem ipsum style writing is often used when content is needed but meaning is not important Traditional fish farming data often remains scattered at ground level — stored in notebooks, isolated systems, or individual experiences of farmers. Through our VLE model..."
//     },
//     {
//       id: 3,
//       imageSrc: "/src/assets/images/HomeMain.png",
//       title: "Here we Write about images",
//       description: "Lorem ipsum style writing is often used when content is needed but meaning is not important Traditional fish farming data often remains scattered at ground level — stored in notebooks, isolated systems, or individual experiences of farmers. Through our VLE model..."
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     sectionRefs.current.forEach(ref => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="what-we-do">
//       <div className="container">

//         <h2 className="section-heading">
//           What We <span>Do</span>
//         </h2>

//         {sections.map((section, index) => (
//           <div
//             key={section.id}
//             ref={el => sectionRefs.current[index] = el}
//             className={`row align-items-center section-container ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
//           >

//             {/* Image */}
//             <div className="col-lg-6 col-md-12 mb-4">
//               <div className="image-wrapper">
//                 <img src={section.imageSrc} alt={section.title} />
//               </div>
//             </div>

//             {/* Content */}
//             <div className="col-lg-6 col-md-12">
//               <div className="content-wrapper">
//                 <h3 className="content-title">{section.title}</h3>
//                 <p className="content-text">{section.description}</p>
//               </div>
//             </div>

//           </div>
//         ))}

//       </div>
//     </section>
//   );
// }

// export default WhatWeDo;













import React, { useEffect, useRef } from 'react';
import "./WhatWeDo.css";

// ✅ Images import (Vercel-safe)
import HomeMain from "../assets/images/HomeMain.png";
import HomeMain2 from "../assets/images/HomeMain2.png";

function WhatWeDo() {
  const sectionRefs = useRef([]);

  const sections = [
    {
      id: 1,
      imageSrc: HomeMain,
      title: "Here we Write about images",
      description: "Lorem ipsum style writing is often used when content is needed but meaning is not important Traditional fish farming data often remains scattered at ground level — stored in notebooks, isolated systems, or individual experiences of farmers. Through our VLE model..."
    },
    {
      id: 2,
      imageSrc: HomeMain2,
      title: "Here we Write about images",
      description: "Lorem ipsum style writing is often used when content is needed but meaning is not important Traditional fish farming data often remains scattered at ground level — stored in notebooks, isolated systems, or individual experiences of farmers. Through our VLE model..."
    },
    {
      id: 3,
      imageSrc: HomeMain,
      title: "Here we Write about images",
      description: "Lorem ipsum style writing is often used when content is needed but meaning is not important Traditional fish farming data often remains scattered at ground level — stored in notebooks, isolated systems, or individual experiences of farmers. Through our VLE model..."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="what-we-do">
      <div className="container">

        <h2 className="section-heading">
          What We <span>Do</span>
        </h2>

        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={el => sectionRefs.current[index] = el}
            className={`row align-items-center section-container ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
          >

            {/* Image */}
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="image-wrapper">
                <img src={section.imageSrc} alt={section.title} />
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6 col-md-12">
              <div className="content-wrapper">
                <h3 className="content-title">{section.title}</h3>
                <p className="content-text">{section.description}</p>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default WhatWeDo;