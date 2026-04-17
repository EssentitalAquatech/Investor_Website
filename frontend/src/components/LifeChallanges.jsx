
// import React, { useEffect, useRef } from "react";
// import "./LifeChallenges.css";
// import Victory from "./Victory";

// function LifeChallenges() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("in-view");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const elements = containerRef.current.querySelectorAll(".reveal");
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={containerRef}>
//       <h1 className="LifeChallenges_heading_text">
//         <span className="black-text reveal from-left">Real People</span>
//         <span className="blue-text reveal from-bottom">Real Challenges</span>
//         <span className="black-text reveal from-right">Real Victories</span>
//       </h1>

//       <p className="LifeChallenges_subtext reveal from-fade">
//         Every journey begins with a single step. Here, we celebrate the <br />
//         extraordinary courage of ordinary people — their struggles,<br />
//         resilience, and their triumphant victories that inspire us all.
//       </p>

//       <Victory />
//     </div>
//   );
// }

// export default LifeChallenges;  





import React, { useEffect, useRef } from "react";
import "./LifeChallenges.css";
import Victory from "./Victory";

function LifeChallenges() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lc-in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = containerRef.current.querySelectorAll(".lc-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <h1 className="lc-heading-text">
        <span className="lc-black-text lc-reveal lc-from-left">Real People</span>
        <span className="lc-blue-text lc-reveal lc-from-bottom">Real Challenges</span>
        <span className="lc-black-text lc-reveal lc-from-right">Real Victories</span>
      </h1>

      <p className="lc-subtext lc-reveal lc-from-fade">
        Every journey begins with a single step. Here, we celebrate the <br />
        extraordinary courage of ordinary people — their struggles,<br />
        resilience, and their triumphant victories that inspire us all.
      </p>

      <Victory />
    </div>
  );
}

export default LifeChallenges;