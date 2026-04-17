// src/components/pages/Home.js
import React from 'react';
import Hero from '../Hero';
import WhatWeDo from '../WhatWeDo';
import Presence from '../Presence';
import Award from '../Awards';


function Home() {
  return (
    <>
   
      <Hero />
      <WhatWeDo />
      <Presence />
      <Award/>
    </>
  );
}

export default Home;