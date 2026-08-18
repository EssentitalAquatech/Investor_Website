  // // src/components/pages/Home.js
  // import React from 'react';
  // import Hero from '../Hero';
  // import WhatWeDo from '../WhatWeDo';
  // import Presence from '../Presence';
  // import Meenama from '../Meenama';
  // import Product from "../Products"

  // // import Award from '../Awards';


  // function Home() {
  //   return (
  //     <>
    
  //       <Hero />
  //       <WhatWeDo />
  //       <Meenama/>
  //       <Presence />
  //       <Product/>
  //       {/* <Award/> */}
      
  //     </>
  //   );
  // }

  // export default Home;














  import React from "react";

import Hero from "../Hero";
import WhatWeDo from "../WhatWeDo";
import Meenama from "../Meenama";
import Presence from "../Presence";
import Product from "../Products";
import Life from "./Life";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <>
      {/* HOME */}
      <section
        id="home"
        style={{
          scrollMarginTop: "90px",
        }}
      >
        <Hero />
      </section>

      {/* WHAT WE DO */}
      <WhatWeDo />

      {/* MEENAMMA AI */}
      <Meenama />

      {/* PRESENCE */}
      <Presence />

      {/* PRODUCT */}
      <section
        id="products"
        style={{
          scrollMarginTop: "90px",
        }}
      >
        <Product />
      </section>

        {/* ABOUT US */}
      <section
        id="aboutus"
        style={{
          scrollMarginTop: "90px",
        }}
      >
        <About />
      </section>

      {/* LIFE */}
      <section
        id="life"
        style={{
          scrollMarginTop: "90px",
        }}
      >
        <Life />
      </section>

    

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          scrollMarginTop: "90px",
        }}
      >
        <Contact />
      </section>
    </>
  );
}

export default Home;