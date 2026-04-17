





// import React, { useEffect, useRef } from "react";
// import "./AboutInvestors.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// // If you're using images from src/assets/images/ folder
// // Option 1: Using same image for all (adjust path as needed)
// import investorImage from "../assets/images/third.png";

// // Option 2: If you have different images, import them like this:
// // import investorImage1 from "../assets/images/investor1.jpg";
// // import investorImage2 from "../assets/images/investor2.jpg";
// // import investorImage3 from "../assets/images/investor3.jpg";

// // Option 3: Using public folder (put images in public/images/)
// // const imagePath = "/images/third.png";

// function AboutInvestors() {
//     const headingRef = useRef(null);
//     const subtitleRef = useRef(null);
//     const imageRefs = useRef([]);
//     const descriptionRef = useRef(null);

//     const investors = [
//         {
//             id: 1,
//             name: "John Smith",
//             designation: "Lead Investor",
//             // Option 1: Same image for all
//             image: investorImage,
//             // Option 2: Different images
//             // image: investorImage1,
//             // Option 3: Public folder
//             // image: "/images/investor1.jpg"
//         },
//         {
//             id: 2,
//             name: "Sarah Johnson",
//             designation: "Strategic Partner",
//             image: investorImage, // Change to investorImage2 for different image
//         },
//         {
//             id: 3,
//             name: "Michael Chen",
//             designation: "Angel Investor",
//             image: investorImage, // Change to investorImage3 for different image
//         }
//     ];

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         // Add 'scrolled' class when element is in view
//                         entry.target.classList.add('scrolled');
//                     }
//                 });
//             },
//             {
//                 threshold: 0.1, // Trigger when 10% of element is visible
//                 rootMargin: '0px 0px -50px 0px' // Slightly adjust trigger point
//             }
//         );

//         // Observe all elements
//         if (headingRef.current) observer.observe(headingRef.current);
//         if (subtitleRef.current) observer.observe(subtitleRef.current);
//         if (descriptionRef.current) observer.observe(descriptionRef.current);
        
//         imageRefs.current.forEach((ref) => {
//             if (ref) observer.observe(ref);
//         });

//         // Cleanup
//         return () => {
//             if (headingRef.current) observer.unobserve(headingRef.current);
//             if (subtitleRef.current) observer.unobserve(subtitleRef.current);
//             if (descriptionRef.current) observer.unobserve(descriptionRef.current);
            
//             imageRefs.current.forEach((ref) => {
//                 if (ref) observer.unobserve(ref);
//             });
//         };
//     }, []);

//     // Initialize refs array
//     imageRefs.current = investors.map((_, i) => imageRefs.current[i] || React.createRef());

//     return ( 
//         <section className="about-investors-section">
//             <div className="container">
//                 {/* Heading and Subtitle */}
//                 <div className="row justify-content-center">
//                     <div className="col-12 col-md-10 col-lg-8">
//                         <h1 
//                             ref={headingRef}
//                             className="about-investors-heading"
//                         >
//                             Investors and Partners
//                         </h1>
//                         <p 
//                             ref={subtitleRef}
//                             className="about-investors-subtitle"
//                         >
//                             Meet Our Visionary Backers & Strategic Allies
//                         </p>
//                     </div>
//                 </div>

//                 {/* Images and Names - Horizontal Layout */}
//                 <div className="row justify-content-center">
//                     <div className="col-12">
//                         <div className="about-investors-image-container">
//                             {investors.map((investor, index) => (
//                                 <div 
//                                     key={investor.id} 
//                                     ref={el => imageRefs.current[index] = el}
//                                     className="about-investors-image-wrapper"
//                                 >
//                                     <div className="about-investors-image-circle">
//                                         <img 
//                                             src={investor.image} 
//                                             alt={investor.name}
//                                             className="about-investors-image"
//                                             loading="lazy"
//                                         />
//                                     </div>
//                                     <h3 className="about-investors-name">
//                                         {investor.name}
//                                     </h3>
//                                     <p className="about-investors-designation">
//                                         {investor.designation}
//                                     </p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Additional Information */}
//                 <div className="row justify-content-center mt-5">
//                     <div className="col-12 col-md-10 col-lg-8">
//                         <div className="text-center">
//                             <p 
//                                 ref={descriptionRef}
//                                 className="about-investors-description"
//                             >
//                                 We're proud to be backed by industry-leading investors and 
//                                 strategic partners who share our vision for innovation and growth.
//                                 Together, we're building the future of technology with commitment,
//                                 expertise, and shared success.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default AboutInvestors;





// import { useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./AboutInvestors.css";

// const partners = [
//   { name: "Google",     logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" },
//   { name: "Microsoft",  logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg" },
//   { name: "Amazon",     logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg" },
//   { name: "Infosys",    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/infosys.svg" },
//   { name: "TCS",        logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tatacons[REPLACE].svg" },
//   { name: "IBM",        logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ibm.svg" },
//   { name: "Deloitte",   logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/deloitte.svg" },
//   { name: "Accenture",  logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/accenture.svg" },
//   { name: "Meta",       logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/meta.svg" },
//   { name: "Oracle",     logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/oracle.svg" },
//   { name: "Wipro",      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/wipro.svg" },
//   { name: "Capgemini",  logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/capgemini.svg" },
// ];

// // Fix TCS slug
// partners[4].logo = "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tcs.svg";

// const AboutInvestors = () => {
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry, i) => {
//           if (entry.isIntersecting) {
//             entry.target.style.transitionDelay = `${(entry.target.dataset.index % 4) * 90}ms`;
//             entry.target.classList.add("ip-in-view");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );
//     cardsRef.current.forEach((el) => el && observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="ip-page">
//       {/* HERO */}
//       <section className="ip-hero">
//         <div className="container text-center">
//           <span className="ip-eyebrow ip-fade-up">Trusted Globally</span>
//           <h1 className="ip-title ip-fade-up ip-delay-1">
//             Investors <span className="ip-amp">&amp;</span>{" "}
//             <span className="ip-title-accent">Partners</span>
//           </h1>
//           <p className="ip-subtitle ip-fade-up ip-delay-2">
//             We are proud to collaborate with visionary investors and trusted
//             partners who empower our innovation, accelerate our growth, and
//             strengthen our long-term mission.
//           </p>
//           <div className="ip-hero-meta ip-fade-up ip-delay-3">
//             <div><strong>50+</strong><span>Global Partners</span></div>
//             <div className="ip-divider" />
//             <div><strong>$120M</strong><span>Funding Raised</span></div>
//             <div className="ip-divider" />
//             <div><strong>20+</strong><span>Countries</span></div>
//           </div>
//         </div>
//       </section>

//       {/* SHOWCASE */}
//       <section className="ip-showcase">
//         <div className="container">
//           <div className="text-center mb-5 ip-section-head">
//             <h2>Backed by the Best</h2>
//             <p>A network of world-class brands fueling our journey forward.</p>
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
//                       onError={(e) => {
//                         e.currentTarget.src =
//                           "data:image/svg+xml;utf8," +
//                           encodeURIComponent(
//                             `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='16' fill='%23e6f4fb'/><text x='50' y='56' text-anchor='middle' font-family='Inter,Arial' font-size='28' fill='%230ea5e9' font-weight='700'>${p.name[0]}</text></svg>`
//                           );
//                       }}
//                     />
//                   </div>
//                   <h3 className="ip-card-title">{p.name}</h3>
//                   <span className="ip-card-tag">Strategic Partner</span>
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
//           <p>Join a network of pioneers shaping the future of technology.</p>
//           <button className="ip-btn">Get in Touch →</button>
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
  { name: "Google", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" },
  { name: "Microsoft", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg" },
  { name: "Amazon", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg" },
  { name: "Infosys", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/infosys.svg" },
  { name: "TCS", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tcs.svg" },
  { name: "IBM", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ibm.svg" },
  { name: "Deloitte", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/deloitte.svg" },
  { name: "Accenture", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/accenture.svg" },
  { name: "Meta", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/meta.svg" },
  { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/oracle.svg" },
  { name: "Wipro", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/wipro.svg" },
  { name: "Capgemini", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/capgemini.svg" },
];

const AboutInvestors = () => {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${(entry.target.dataset.index % 4) * 90}ms`;
            entry.target.classList.add("ip-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ip-page">
      {/* HERO */}
      <section className="ip-hero">
        <div className="container text-center">
          <span className="ip-eyebrow ip-fade-up">Trusted Globally</span>

          <h1 className="ip-title ip-fade-up ip-delay-1">
            Investors <span className="ip-amp">&amp;</span>
            <span className="ip-title-accent"> Partners</span>
          </h1>

          <p className="ip-subtitle ip-fade-up ip-delay-2">
            We are proud to collaborate with visionary investors and trusted
            partners who empower our innovation, accelerate our growth, and
            strengthen our long-term mission.
          </p>

          <div className="ip-hero-meta ip-fade-up ip-delay-3">
            <div><strong>50+</strong><span>Global Partners</span></div>
            <div className="ip-divider" />
            <div><strong>$120M</strong><span>Funding Raised</span></div>
            <div className="ip-divider" />
            <div><strong>20+</strong><span>Countries</span></div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="ip-showcase">
        <div className="container">
          <div className="text-center mb-5 ip-section-head">
            <h2>Backed by the Best</h2>
            <p>A network of world-class brands fueling our journey forward.</p>
          </div>

          <div className="row g-4">
            {partners.map((p, i) => (
              <div key={p.name} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div
                  className="ip-card"
                  data-index={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                >
                  <div className="ip-logo-wrap">
                    <img
                      src={p.logo}
                      alt={`${p.name} logo`}
                      className="ip-logo"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="ip-card-title">{p.name}</h3>
                  <span className="ip-card-tag">Strategic Partner</span>
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
          <p>Join a network of pioneers shaping the future of technology.</p>

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