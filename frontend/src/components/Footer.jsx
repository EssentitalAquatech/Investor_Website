// // src/components/Footer.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Footer.css';

// function Footer() {
//   return (
//     <footer className="essential-footer">
//       <div className="footer-main">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
//               <div className="footer-brand-section">
//                 <h3 className="footer-brand-title">Essential Aquatech</h3>
//                 <p className="footer-brand-description">
//                   Providing essential water technology solutions for farmers and communities across multiple states.
//                 </p>
//                 <div className="footer-social-icons">
//                   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
//                     <i className="fab fa-youtube"></i>
//                   </a>
//                   <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
            
//             <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
//               <div className="footer-navigation">
//                 <h5 className="footer-section-title">Navigation</h5>
//                 <ul className="footer-links-list">
//                   <li><Link to="/" className="footer-link">Home</Link></li>
//                   <li><Link to="/about" className="footer-link">About Us</Link></li>
//                   <li><Link to="/products" className="footer-link">Products</Link></li>
//                   <li><Link to="/life" className="footer-link">Life</Link></li>
//                 </ul>
//               </div>
//             </div>
            
//             <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
//               <div className="footer-contact">
//                 <h5 className="footer-section-title">Talk To Us</h5>
//                 <ul className="footer-links-list">
//                   <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
//                   <li><Link to="/carriers" className="footer-link">Carriers</Link></li>
//                 </ul>
//               </div>
//             </div>
            
//             <div className="col-lg-3 col-md-6">
//               <div className="footer-legal">
//                 <h5 className="footer-section-title">Legals</h5>
//                 <ul className="footer-links-list">
//                   <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
//                   <li><Link to="/return" className="footer-link">Return Policy</Link></li>
                    
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="footer-divider"></div>
      
//       <div className="footer-bottom">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 text-center">
//               <p className="footer-copyright">&copy; 2026 Essential Aquatech. All Rights Reserved.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;















import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/EssentitalLogo.png";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

const socials = [
  { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
  { icon: <FaYoutube />, url: "https://youtube.com", label: "YouTube" },
  { icon: <FaLinkedinIn />, url: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
  { icon: <FaXTwitter />, url: "https://x.com", label: "X" },
];

function Footer() {
  return (
    <footer className="ea-footer">
      <div className="container">
        <div className="row gy-4">

          {/* BRAND */}
         {/* BRAND */}
<div className="col-12 col-md-6 col-lg-4">
  <div className="ea-brand">

    {/* LOGO IMAGE (REPLACED EA TEXT) */}
   <img
  src={logo}
  alt="Essential Aquatech Logo"
  className="ea-logo-img"
/>

    <h3 className="ea-title">Essential Aquatech</h3>
  </div>

  <p className="ea-desc">
    Pioneering sustainable water purification solutions — delivering
    safe, clean drinking water across India.
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
            <h6 className="ea-heading">Navigation</h6>
            <ul className="ea-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/life">Life</Link></li>
            </ul>
          </div>

          {/* TALK */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="ea-heading">Talk to Us</h6>
            <ul className="ea-links">
              <li><Link to="/contact">Contact</Link></li>
              
              <li><Link to="/scheduleDemo">Schedule Demo</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="ea-heading">Legal</h6>
            <ul className="ea-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/return">Return Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="ea-bottom">
          <p>© 2026 Essential Aquatech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;