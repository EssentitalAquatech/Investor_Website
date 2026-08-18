












// import { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./AboutInvestors.css";

// const partners = [
//   {
//     name: "Kharagpur",
//     logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/KHARAGPUR.png",
//      type: "Incubation & Innovation Ecosystem",
//       description:
//       "Research, technology and innovation ecosystem supporting our journey from technology development to real-world impact.",
//   },
//   {
//     name: "Greenr",
//     logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/Greenr.jpg",
//   },
//   {
//     name: "JPAL",
//     logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/JPAL.png",
//   },
//   {
//     name: "STPI",
//     logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/STPI.png",
//   },
//   {
//     name: "AIC",
//     logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/AIC.jpg",
//   },
//   {
//     name: "Earthon",
//     logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/Earthon.png",
//   },
//   {
//     name: "ACTION",
//     logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/ACTION.png",
//   },
// ];

// const AboutInvestors = () => {
//   const cardsRef = useRef([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.style.transitionDelay = `${
//               (entry.target.dataset.index % 4) * 90
//             }ms`;

//             entry.target.classList.add("ip-in-view");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     cardsRef.current.forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="ip-page">

//       {/* HERO */}
//       <section className="ip-hero">
//         <div className="container text-center">

//           <span className="ip-eyebrow ip-fade-up">
//             Trusted Globally
//           </span>

//           <h1 className="ip-title ip-fade-up ip-delay-1">
//             Investors <span className="ip-amp">&amp;</span>
//             <span className="ip-title-accent"> Partners</span>
//           </h1>

//           <p className="ip-subtitle ip-fade-up ip-delay-2">
//             We are proud to collaborate with visionary organizations,
//             institutions, and ecosystem partners who support innovation,
//             accelerate impact, and strengthen our long-term mission.
//           </p>

//         </div>
//       </section>


//       {/* SHOWCASE */}
//       <section className="ip-showcase">
//         <div className="container">

//           <div className="text-center mb-5 ip-section-head">
//             <h2>Backed by the Best</h2>

//             <p>
//               A network of leading organizations and ecosystem partners
//               supporting our journey forward.
//             </p>
//           </div>


//           <div className="row g-4">

//             {partners.map((p, i) => (
//               <div
//                 key={p.name}
//                 className="col-12 col-sm-6 col-md-4 col-lg-3"
//               >

//                 <div
//                   className="ip-card"
//                   data-index={i}
//                   ref={(el) => (cardsRef.current[i] = el)}
//                 >

//                   <div className="ip-logo-wrap">

//                     <img
//                       src={p.logo}
//                       alt={`${p.name} logo`}
//                       className="ip-logo"
//                       loading="lazy"
//                     />

//                   </div>

//                   <h3 className="ip-card-title">
//                     {p.name}
//                   </h3>

//                   <span className="ip-card-tag">
//                     Strategic Partner
//                   </span>

//                   <span className="ip-card-glow" />

//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>
//       </section>


//       {/* CTA */}
//       <section className="ip-cta">
//         <div className="container text-center">

//           <h2>Become a Partner</h2>

//           <p>
//             Join a network of pioneers shaping the future of
//             aquaculture intelligence.
//           </p>

//           <button
//             className="ip-btn"
//             onClick={() => navigate("/contact")}
//           >
//             Get in Touch →
//           </button>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default AboutInvestors;






















import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutInvestors.css";

const partners = [
  {
    name: "IIT Kharagpur",
    logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/KHARAGPUR.png",
    type: "Incubation & Innovation Ecosystem",
    description:
      "Research, technology and innovation ecosystem supporting our journey from technology development to real-world impact.",
  },

  {
    name: "Greenr",
    logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/Greenr.jpg",
    type: "Incubation & Ecosystem",
    description:
      "Sustainability-focused ecosystem support helping us strengthen our innovation and impact journey.",
  },

  {
    name: "J-PAL",
    logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/JPAL.png",
    type: "Strategic Partner",
    description:
      "Strategic collaboration focused on evidence, research and measurable social impact.",
  },

  {
    name: "STPI",
    logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/STPI.png",
    type: "Incubation",
    description:
      "Technology startup ecosystem support through incubation, mentoring, infrastructure and industry connections.",
  },

  {
    name: "AIC",
    logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/AIC.jpg",
    type: "Incubation",
    description:
      "Startup incubation ecosystem providing mentorship, business support, networking and pathways to scale.",
  },

  {
    name: "Earthon",
    logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/Earthon.png",
    type: "Accelerator",
    description:
      "Accelerator support helping us refine, scale and strengthen our impact-driven innovation.",
  },

  {
    name: "Action For India",
    logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/ACTION.png",
    type: "Accelerator",
    description:
      "Accelerator ecosystem supporting technology-led social impact and pathways to scale.",
  },
   {
    name: "IIT Kharagpur",
    logo: "https://res.cloudinary.com/p8fs2e1n/image/upload/IIT.png",
    type: "Strategic Partner ",
    description:
      "Strategic collaboration focused on evidence, research and measurable social impact.",
  },
];

const AboutInvestors = () => {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${
              (entry.target.dataset.index % 4) * 90
            }ms`;

            entry.target.classList.add("ip-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ip-page">

      {/* HERO */}
      <section className="ip-hero">
        <div className="container text-center">

          <span className="ip-eyebrow ip-fade-up">
            Trusted Ecosystem
          </span>

          <h1 className="ip-title ip-fade-up ip-delay-1">
            Investors <span className="ip-amp">&amp;</span>
            <span className="ip-title-accent"> Partners</span>
          </h1>

          <p className="ip-subtitle ip-fade-up ip-delay-2">
            We collaborate with leading institutions, incubators,
            accelerators and strategic partners who help us build,
            validate and scale the intelligence layer for aquaculture.
          </p>

        </div>
      </section>


      {/* SHOWCASE */}
      <section className="ip-showcase">
        <div className="container">

          <div className="text-center mb-5 ip-section-head">

            <h2>Backed by the Best</h2>

            <p>
              A strong ecosystem of institutions, incubators,
              accelerators and strategic partners supporting our journey.
            </p>

          </div>


          <div className="row g-4">

            {partners.map((p, i) => (
              <div
                key={p.name}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
              >

                <div
                  className="ip-card"
                  data-index={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                >

                  {/* LOGO */}
                  <div className="ip-logo-wrap">

                    <img
                      src={p.logo}
                      alt={`${p.name} logo`}
                      className="ip-logo"
                      loading="lazy"
                    />

                  </div>


                  {/* NAME */}
                  <h3 className="ip-card-title">
                    {p.name}
                  </h3>


                  {/* RELATIONSHIP TYPE */}
                  <span className="ip-card-tag">
                    {p.type}
                  </span>


                  {/* DESCRIPTION */}
                  <p className="ip-card-description">
                    {p.description}
                  </p>


                  <span className="ip-card-glow" />

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="ip-cta">

        <div className="container text-center">

          <h2>Become a Partner</h2>

          <p>
            Join a network of pioneers shaping the future of
            aquaculture intelligence.
          </p>

          <button
            className="ip-btn"
            onClick={() => navigate("/contact")}
          >
            Get in Touch →
          </button>

        </div>

      </section>

    </div>
  );
};

export default AboutInvestors;