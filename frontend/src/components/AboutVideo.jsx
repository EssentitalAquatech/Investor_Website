// import React from "react";
// import "./AboutVideo.css";

// function AboutVideo() {
//     return (
//         <div className="about-video-container">
//             {/* Video Container - Full Screen */}
//             <div className="video-fullscreen">
//                 <video 
//                     className="hero-video" 
//                     autoPlay 
//                     muted 
//                     loop
//                     playsInline
//                 >
//                     <source 
//                         src="/src/assets/images/ShedualDemo4.mp4" 
//                         type="video/mp4"
//                     />
//                     Your browser does not support the video tag.
//                 </video>
                
//                 {/* Optional: Loading overlay */}
//                 <div className="video-loading-overlay">
//                     <div className="spinner-border text-light" role="status">
//                         <span className="visually-hidden">Loading video...</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AboutVideo;









import React from "react";
import "./AboutVideo.css";

// ✅ Video import (Vercel-safe)
import scheduleVideo from "../assets/images/ShedualDemo4.mp4";

function AboutVideo() {
    return (
        <div className="about-video-container">
            {/* Video Container - Full Screen */}
            <div className="video-fullscreen">
                <video 
                    className="hero-video" 
                    autoPlay 
                    muted 
                    loop
                    playsInline
                >
                    <source 
                        src={scheduleVideo} 
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                
                {/* Optional: Loading overlay */}
                <div className="video-loading-overlay">
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading video...</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutVideo;