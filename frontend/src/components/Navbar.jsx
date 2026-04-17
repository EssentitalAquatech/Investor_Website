// // src/components/Navbar.js
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.css';
// import logoImage from '../assets/images/EssentitalLogo.png'; // Your logo

// function Navbar() {
//   const location = useLocation();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location]);

//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className={`navbar navbar-expand-lg navbar-white bg-white fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
//       <div className="container-fluid px-4 px-lg-5">
//         {/* Logo and Company Name */}
//         <Link className="navbar-brand d-flex align-items-center" to="/">
//           <img 
//             src={logoImage} 
//             alt="Essential Aquatech Logo" 
//             className="navbar-logo me-3"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = "https://cdn-icons-png.flaticon.com/512/732/732212.png";
//             }}
//           />
//           {/* <span className="company-name">
//             Essential Aquatech
//           </span> */}
//         <span className="company-name">
//   Essential <span className="brand">Aquatech</span>
//   <span className="tm">TM</span>
// </span>
//         </Link>
        
//         {/* Mobile Toggle Button */}
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           onClick={toggleMenu}
//           aria-controls="navbarNav" 
//           aria-expanded={isMenuOpen}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
        
//         {/* Navigation Links - Simple and Clean */}
//         <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link 
//                 className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
//                 to="/"
//               >
//                 <span className="nav-text">Home</span>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link 
//                 className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`} 
//                 to="/products"
//               >
//                 <span className="nav-text">Product</span>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link 
//                 className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
//                 to="/about"
//               >
//                 <span className="nav-text">About Us</span>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link 
//                 className={`nav-link ${location.pathname === '/life' ? 'active' : ''}`} 
//                 to="/life"
//               >
//                 <span className="nav-text">Life!</span>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link 
//                 className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
//                 to="/contact"
//               >
//                 <span className="nav-text">Contact</span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;











// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import logoImage from "../assets/images/EssentitalLogo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Product", path: "/products" },
  { label: "Life", path: "/life" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
      
      {/* NAVBAR */}
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="logo-section">
          <img src={logoImage} alt="logo" className="logo-img" />
          {/* <span className="logo-text">
            Essential<span>Aquatech</span>
          </span> */}
          <span className="logo-text">
  Essential
  <span className="brand">
    Aquatech
    <span className="tm">TM</span>
  </span>
</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        {navItems.map((item, i) => (
          <Link
            key={item.path}
            to={item.path}
            className="mobile-link"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Navbar;

