

  // import React from "react";
  // import { Link } from "react-router-dom";
  // import logo from "../assets/images/EssentitalLogo.png";
  // import {
  //   FaFacebookF,
  //   FaYoutube,
  //   FaLinkedinIn,
  //   FaInstagram,
  // } from "react-icons/fa";
  // import { FaXTwitter } from "react-icons/fa6";
  // import "./Footer.css";

  // const socials = [
  //   { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
  //   { icon: <FaYoutube />, url: "https://youtube.com", label: "YouTube" },
  //   { icon: <FaLinkedinIn />, url: "https://linkedin.com", label: "LinkedIn" },
  //   { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
  //   { icon: <FaXTwitter />, url: "https://x.com", label: "X" },
  // ];

  // function Footer() {
  //   return (
  //     <footer className="ea-footer">
  //       <div className="container">
  //         <div className="row gy-4">

  //           {/* BRAND */}
  //          {/* BRAND */}
  // <div className="col-12 col-md-6 col-lg-4">
  //   <div className="ea-brand">

  //     {/* LOGO IMAGE (REPLACED EA TEXT) */}
  //    <img
  //   src={logo}
  //   alt="Essential Aquatech Logo"
  //   className="ea-logo-img"
  // />

  //     <h3 className="ea-title">Essential Aquatech</h3>
  //   </div>

  //   <p className="ea-desc">
  //     Pioneering sustainable water purification solutions — delivering
  //     safe, clean drinking water across India.
  //   </p>

  //   <div className="ea-socials">
  //     {socials.map((s) => (
  //       <a
  //         key={s.label}
  //         href={s.url}
  //         target="_blank"
  //         rel="noreferrer"
  //         className="ea-social"
  //         aria-label={s.label}
  //       >
  //         {s.icon}
  //       </a>
  //     ))}
  //   </div>
  // </div>

  //           {/* NAV */}
  //           <div className="col-6 col-md-3 col-lg-2">
  //             <h6 className="ea-heading">Navigation</h6>
  //             <ul className="ea-links">
  //               <li><Link to="/">Home</Link></li>
  //               <li><Link to="/about">About</Link></li>
  //               <li><Link to="/products">Products</Link></li>
  //               <li><Link to="/life">Life</Link></li>
  //             </ul>
  //           </div>

  //           {/* TALK */}
  //           <div className="col-6 col-md-3 col-lg-2">
  //             <h6 className="ea-heading">Talk to Us</h6>
  //             <ul className="ea-links">
  //               <li><Link to="/contact">Contact</Link></li>
                
  //               <li><Link to="/scheduleDemo">Schedule Demo</Link></li>
  //             </ul>
  //           </div>

  //           {/* LEGAL */}
  //           <div className="col-6 col-md-3 col-lg-2">
  //             <h6 className="ea-heading">Legal</h6>
  //             <ul className="ea-links">
  //               <li><Link to="/privacy-policy">Privacy Policy</Link></li>
  //               <li><Link to="/return">Return Policy</Link></li>
  //             </ul>
  //           </div>
  //         </div>

  //         {/* COPYRIGHT */}
  //         <div className="ea-bottom">
  //           <p>© 2026 Essential Aquatech. All Rights Reserved.</p>
  //         </div>
  //       </div>
  //     </footer>
  //   );
  // }

  // export default Footer;













import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import "./Footer.css";


const socials = [
  {
    icon: <FaFacebookF />,
    url: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: <FaYoutube />,
    url: "https://youtube.com",
    label: "YouTube",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    url: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: <FaXTwitter />,
    url: "https://x.com",
    label: "X",
  },
];


function Footer() {

  const navigate = useNavigate();


  /* =====================================
     HOME SECTION NAVIGATION
  ===================================== */

  const goToSection = (sectionId) => {

    // Already on Home page
    if (window.location.pathname === "/") {

      const section = document.getElementById(sectionId);

      if (section) {

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

      return;
    }


    // If on another page, first go to Home
    navigate("/");


    // Wait for Home component to render
    setTimeout(() => {

      const section = document.getElementById(sectionId);

      if (section) {

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    }, 150);

  };


  return (

    <footer className="ea-footer">

      <div className="container">

        <div className="row gy-4">


          {/* BRAND */}

          <div className="col-12 col-md-6 col-lg-4">

            <div className="ea-brand">

              {/* LOGO IMAGE */}

              <img
                src={logo}
                alt="Essential Aquatech Logo"
                className="ea-logo-img"
              />

              <h3 className="ea-title">
                Essential Aquatech
              </h3>

            </div>


            <p className="ea-desc">

              Pioneering sustainable water purification solutions —
              delivering safe, clean drinking water across India.

            </p>


            <div className="ea-socials">

              {socials.map((s) => (

                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ea-social"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>

              ))}

            </div>

          </div>



          {/* NAV */}

          <div className="col-6 col-md-3 col-lg-2">

            <h6 className="ea-heading">
              Navigation
            </h6>

            <ul className="ea-links">

              <li>

                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection("home");
                  }}
                >
                  Home
                </a>

              </li>


              <li>

                <a
                  href="#aboutus"
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection("aboutus");
                  }}
                >
                  About
                </a>

              </li>


              <li>

                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection("products");
                  }}
                >
                  Products
                </a>

              </li>


              <li>

                <a
                  href="#life"
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection("life");
                  }}
                >
                  Life
                </a>

              </li>

            </ul>

          </div>



          {/* TALK */}

          <div className="col-6 col-md-3 col-lg-2">

            <h6 className="ea-heading">
              Talk to Us
            </h6>

            <ul className="ea-links">

              <li>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection("contact");
                  }}
                >
                  Contact
                </a>

              </li>


              <li>

                <a
                  href="/scheduleDemo"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/scheduleDemo");
                  }}
                >
                  Schedule Demo
                </a>

              </li>

            </ul>

          </div>



          {/* LEGAL */}

          <div className="col-6 col-md-3 col-lg-2">

            <h6 className="ea-heading">
              Legal
            </h6>

            <ul className="ea-links">

              <li>

                <a href="/privacy-policy">
                  Privacy Policy
                </a>

              </li>


              <li>

                <a href="/return">
                  Return Policy
                </a>

              </li>

            </ul>

          </div>

        </div>



        {/* COPYRIGHT */}

        <div className="ea-bottom">

          <p>
            © 2026 Essential Aquatech. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>

  );

}


export default Footer;