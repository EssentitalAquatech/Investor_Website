





// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import FloatingDemoButton from './components/FloatingDemoButton'; // Add this
// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Products from './components/Products';
// import Life from './components/pages/Life';
// import Contact from './components/pages/Contact';
// import PrivacyPolicy from './components/pages/PrivacyPolciy';
// import ReturnPolicy from './components/pages/ReturnPolicy';
// import Carriers from './components/pages/Carriers';
// import SchedualDemoModel from './components/ScheduleDemoModal';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         {/* Add Floating Demo Button */}
//         <FloatingDemoButton />
        
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/life" element={<Life />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/return" element={<ReturnPolicy />} />
//           <Route path="/carriers" element={<Carriers />} />
//           <Route path="/scheduleDemo" element={<SchedualDemoModel/>} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;











// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingDemoButton from './components/FloatingDemoButton';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/Products';
import Life from './components/pages/Life';
import Contact from './components/pages/Contact';
import PrivacyPolicy from './components/pages/PrivacyPolciy';
import ReturnPolicy from './components/pages/ReturnPolicy';

import ScheduleDemoModal from './components/ScheduleDemoModal';
import AnotherProduct from './components/AnotherProduct';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <FloatingDemoButton />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/life" element={<Life />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/return" element={<ReturnPolicy />} />
          
          <Route path="/scheduleDemo" element={<ScheduleDemoModal />} />

          <Route path="/another-product" element={<AnotherProduct />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;