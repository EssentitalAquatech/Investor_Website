









// // src/components/Navbar.js

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import "./Navbar.css";
// import logoImage from "../assets/images/EssentitalLogo.png";

// const navItems = [
//   { label: "Home", id: "home" },
//   { label: "Product", id: "products" },
//    { label: "About Us", id: "aboutus" },
//   { label: "Life", id: "life" },
 
//   { label: "Contact", id: "contact" },
// ];

// function Navbar() {
//   const location = useLocation();

//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   // ==========================================
//   // NAVBAR SCROLL EFFECT
//   // ==========================================
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // ==========================================
//   // ACTIVE SECTION DETECTION
//   // ==========================================
//   useEffect(() => {
//     // Ye section navigation sirf Home page par chalega
//     if (location.pathname !== "/") {
//       return;
//     }

//     const handleSectionScroll = () => {
//       const scrollPosition = window.scrollY + 150;

//       let currentSection = "home";

//       navItems.forEach((item) => {
//         const section = document.getElementById(item.id);

//         if (section) {
//           const sectionTop = section.offsetTop;

//           if (scrollPosition >= sectionTop) {
//             currentSection = item.id;
//           }
//         }
//       });

//       setActiveSection(currentSection);
//     };

//     handleSectionScroll();

//     window.addEventListener("scroll", handleSectionScroll);

//     return () => {
//       window.removeEventListener("scroll", handleSectionScroll);
//     };
//   }, [location.pathname]);

//   // ==========================================
//   // CLOSE MOBILE MENU
//   // ==========================================
//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location.pathname]);

//   // ==========================================
//   // SECTION CLICK
//   // ==========================================
//   const handleSectionClick = (sectionId) => {
//     setMenuOpen(false);

//     // Agar Home page par hain
//     if (location.pathname === "/") {
//       const section = document.getElementById(sectionId);

//       if (section) {
//         section.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }

//       return;
//     }

//     // Agar kisi aur route/page par hain
//     // Pehle Home par jao
//     window.location.href = `/#${sectionId}`;
//   };

//   // ==========================================
//   // ACTIVE STATE
//   // ==========================================
//   const isActive = (item) => {
//     if (location.pathname === "/") {
//       return activeSection === item.id;
//     }

//     return false;
//   };

//   return (
//     <header
//       className={`navbar-custom ${
//         scrolled ? "scrolled" : ""
//       }`}
//     >
//       <div className="nav-container">

//         {/* =========================
//             LOGO
//         ========================= */}
//         <Link to="/" className="logo-section">
//           <img
//             src={logoImage}
//             alt="Essential Aquatech"
//             className="logo-img"
//           />

//           <span className="logo-text">
//             Essential{" "}
//             <span className="brand">
//               Aquatech
//               <span className="tm">TM</span>
//             </span>
//           </span>
//         </Link>

//         {/* =========================
//             DESKTOP MENU
//         ========================= */}
//         <div className="nav-links">

//           {navItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => handleSectionClick(item.id)}
//               className={`nav-link nav-button ${
//                 isActive(item) ? "active" : ""
//               }`}
//             >
//               {item.label}
//             </button>
//           ))}

//         </div>

//         {/* =========================
//             MOBILE MENU BUTTON
//         ========================= */}
//         <button
//           className="menu-btn"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? (
//             <X size={26} />
//           ) : (
//             <Menu size={26} />
//           )}
//         </button>
//       </div>

//       {/* =========================
//           MOBILE MENU
//       ========================= */}
//       <div
//         className={`mobile-menu ${
//           menuOpen ? "show" : ""
//         }`}
//       >
//         {navItems.map((item, i) => (
//           <button
//             key={item.id}
//             onClick={() => handleSectionClick(item.id)}
//             className={`mobile-link mobile-button ${
//               isActive(item) ? "active" : ""
//             }`}
//             style={{
//               transitionDelay: `${i * 80}ms`,
//             }}
//           >
//             {item.label}
//           </button>
//         ))}
//       </div>
//     </header>
//   );
// }

// export default Navbar;


















// src/components/Navbar.js

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Product", id: "products" },
  { label: "About Us", id: "aboutus" },
  { label: "Life", id: "life" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ==========================================
  // NAVBAR SCROLL EFFECT
  // ==========================================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==========================================
  // ACTIVE SECTION DETECTION
  // ==========================================
  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const handleSectionScroll = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const sectionTop = section.offsetTop;

          if (scrollPosition >= sectionTop) {
            currentSection = item.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleSectionScroll();

    window.addEventListener("scroll", handleSectionScroll);

    return () => {
      window.removeEventListener("scroll", handleSectionScroll);
    };
  }, [location.pathname]);

  // ==========================================
  // CLOSE MOBILE MENU
  // ==========================================
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // ==========================================
  // SECTION CLICK
  // ==========================================
  const handleSectionClick = (sectionId) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    window.location.href = `/#${sectionId}`;
  };

  // ==========================================
  // ACTIVE STATE
  // ==========================================
  const isActive = (item) => {
    if (location.pathname === "/") {
      return activeSection === item.id;
    }

    return false;
  };

  return (
    <header
      className={`navbar-custom ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="nav-container">

        {/* =========================
            LOGO
        ========================= */}
        <Link to="/" className="logo-section">

          <img
            src="https://res.cloudinary.com/p8fs2e1n/image/upload/Logo1.png"
            alt="Essential Aquatech"
            className="logo-img"
          />

          <span className="logo-text">
            Essential{" "}
            <span className="brand">
              Aquatech
              <span className="tm">TM</span>
            </span>
          </span>

        </Link>

        {/* =========================
            DESKTOP MENU
        ========================= */}
        <div className="nav-links">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSectionClick(item.id)}
              className={`nav-link nav-button ${
                isActive(item) ? "active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}

        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>

      </div>

      {/* =========================
          MOBILE MENU
      ========================= */}
      <div
        className={`mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >
        {navItems.map((item, i) => (
          <button
            key={item.id}
            onClick={() => handleSectionClick(item.id)}
            className={`mobile-link mobile-button ${
              isActive(item) ? "active" : ""
            }`}
            style={{
              transitionDelay: `${i * 80}ms`,
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

    </header>
  );
}

export default Navbar;