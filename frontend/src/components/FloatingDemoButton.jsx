// // src/components/FloatingDemoButton.js
// import React, { useState } from 'react';
// import ScheduleDemoModal from './ScheduleDemoModal';
// import './FloatingDemoButton.css';

// function FloatingDemoButton() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//     document.body.style.overflow = 'hidden'; // Prevent scrolling
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.style.overflow = 'auto'; // Restore scrolling
//   };

//   return (
//     <>
//       <button 
//         className="floating-demo-button"
//         onClick={openModal}
//         aria-label="Schedule a meeting"
//         title="Schedule a meeting"
//       >
//         <div className="button-content">
//           <span className="button-text">Schedule a Demo</span>
//         </div>
//       </button>
      
//       <ScheduleDemoModal 
//         isOpen={isModalOpen} 
//         onClose={closeModal} 
//       />
//     </>
//   );
// }

// export default FloatingDemoButton;


















// src/components/FloatingDemoButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingDemoButton.css';

function FloatingDemoButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Direct /scheduleDemo पेज पर navigate करें
    navigate('/scheduleDemo');
  };

  return (
    <button 
      className="floating-demo-button"
      onClick={handleClick}
      aria-label="Schedule a meeting"
      title="Schedule a meeting"
    >
      <div className="button-content">
        <span className="button-text">Schedule a Demo</span>
      </div>
    </button>
  );
}

export default FloatingDemoButton;