// // src/components/pages/Life.js
// import React from 'react';
// // import LifeVideo from '../LifeVideo';
// import LifeImages from '../LifeImages';
// import LifeChallanges from '../LifeChallanges';

// function Life() {
//   return (
//     <>
//     {/* <LifeVideo/> */}
//       <LifeChallanges/>
//     <LifeImages/>
  

//     </>

 
//   );
// }

// export default Life;



































// src/components/pages/Life.js
import React from 'react';
import SEO from "../SEO";
// import LifeVideo from '../LifeVideo';
import LifeImages from '../LifeImages';
import LifeChallanges from '../LifeChallanges';

function Life() {
  return (
    <>
      <SEO
        title="Life at Essential Aquatech | Careers"
        description="Explore careers and opportunities at Essential Aquatech and join us in building the future of intelligent aquaculture."
        canonical="https://www.essentialaquatech.in/life"
      />
    {/* <LifeVideo/> */}
      <LifeChallanges/>
    <LifeImages/>
  

    </>

 
  );
}

export default Life;