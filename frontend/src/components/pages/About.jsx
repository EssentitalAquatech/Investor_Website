// src/components/pages/Home.js
import React from 'react';


import AboutVideo from '../AboutVideo';
import AboutTeam from '../AboutTeam';
import Award from '../Awards';
import AboutMission from '../AboutMission';
import AboutInvestors from '../AboutInvestors';


function About() {
  return (
    <>
      <AboutVideo />
      <AboutMission/>
      <AboutTeam/>
      <AboutInvestors/>
      <Award/>
      
    </>
  );
}

export default About;