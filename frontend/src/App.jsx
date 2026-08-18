






// import React, { useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";

// import "./App.css";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import FloatingDemoButton from "./components/FloatingDemoButton";

// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Life from "./components/pages/Life";
// import Contact from "./components/pages/Contact";
// import PrivacyPolicy from "./components/pages/PrivacyPolciy";
// import ReturnPolicy from "./components/pages/ReturnPolicy";
// import ScheduleDemoModal from "./components/ScheduleDemoModal";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// function AppContent() {
//   const location = useLocation();

//   // Page change hone par top par scroll
//   useEffect(() => {
//     // Home ke #products section par ja rahe hain
//     if (location.hash === "#products") {
//       setTimeout(() => {
//         const productSection = document.getElementById("products");

//         if (productSection) {
//           productSection.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }
//       }, 100);

//       return;
//     }

//     // Normal pages ke liye top par
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "instant",
//     });
//   }, [location.pathname, location.hash]);

//   // Contact page par Navbar/Footer/Floating button hide
//   const hideLayout = location.pathname === "/contact";

//   return (
//     <div className="App">
//       {!hideLayout && <Navbar />}

//       {!hideLayout && <FloatingDemoButton />}

//       <Routes>
//         {/* Home */}
//         <Route path="/" element={<Home />} />

//         {/* Other Pages */}
//         <Route path="/about" element={<About />} />

//         <Route path="/life" element={<Life />} />

//         <Route path="/contact" element={<Contact />} />

//         {/* Policies */}
//         <Route
//           path="/privacy-policy"
//           element={<PrivacyPolicy />}
//         />

//         <Route
//           path="/return"
//           element={<ReturnPolicy />}
//         />

//         {/* Schedule Demo */}
//         <Route
//           path="/scheduleDemo"
//           element={<ScheduleDemoModal />}
//         />
//       </Routes>

//       {!hideLayout && <Footer />}
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;
















import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingDemoButton from "./components/FloatingDemoButton";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Life from "./components/pages/Life";
import Contact from "./components/pages/Contact";
import PrivacyPolicy from "./components/pages/PrivacyPolciy";
import ReturnPolicy from "./components/pages/ReturnPolicy";
import ScheduleDemoModal from "./components/ScheduleDemoModal";

// ✅ Product Detail Page
import ProductDetails from "./components/ProductDetails";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function AppContent() {
  const location = useLocation();

  // Page change hone par top par scroll
  useEffect(() => {
    // Home ke #products section par ja rahe hain
    if (location.hash === "#products") {
      setTimeout(() => {
        const productSection = document.getElementById("products");

        if (productSection) {
          productSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return;
    }

    // Normal pages ke liye top par
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname, location.hash]);

  // Contact page par Navbar/Footer/Floating button hide
  const hideLayout = location.pathname === "/contact";

  return (
    <div className="App">

      {!hideLayout && <Navbar />}

      {!hideLayout && <FloatingDemoButton />}

      <Routes>

        {/* =========================
            HOME
        ========================= */}
        <Route
          path="/"
          element={<Home />}
        />


        {/* =========================
            OTHER PAGES
        ========================= */}
        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/life"
          element={<Life />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* =========================
            PRODUCT DETAILS
        ========================= */}

        <Route
          path="/products/:productSlug"
          element={<ProductDetails />}
        />


        {/* =========================
            POLICIES
        ========================= */}

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/return"
          element={<ReturnPolicy />}
        />


        {/* =========================
            SCHEDULE DEMO
        ========================= */}

        <Route
          path="/scheduleDemo"
          element={<ScheduleDemoModal />}
        />

      </Routes>

      {!hideLayout && <Footer />}

    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;