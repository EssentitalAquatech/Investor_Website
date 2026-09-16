// // src/components/pages/Home.js
// import React from 'react';


// // import AboutVideo from '../AboutVideo';
// import AboutTeam from '../AboutTeam';
// import Award from '../Awards';
// import AboutMission from '../AboutMission';
// import AboutInvestors from '../AboutInvestors';


// function About() {
//   return (
//     <>
//       {/* <AboutVideo /> */}
//       <AboutMission/>
//       <AboutTeam/>
//       <AboutInvestors/>
//       <Award/>
      
//     </>
//   );
// }

// export default About;
























// src/components/pages/Home.js
import React from 'react';
import SEO from "../SEO";


// import AboutVideo from '../AboutVideo';
import AboutTeam from '../AboutTeam';
import Award from '../Awards';
import AboutMission from '../AboutMission';
import AboutInvestors from '../AboutInvestors';


function About() {
  return (
    <>
      <SEO
        title="About Essential Aquatech | Intelligent Aquaculture"
        description="Learn about Essential Aquatech and our mission to build the intelligence layer for aquaculture."
        canonical="https://www.essentialaquatech.in/about"
      />
      {/* <AboutVideo /> */}
      <AboutMission/>
      <AboutTeam/>
      <AboutInvestors/>
      <Award/>
      
    </>
  );
}

export default About;