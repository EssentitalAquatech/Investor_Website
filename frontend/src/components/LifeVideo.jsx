// import React from "react";
// import "./LifeVideo.css";

// function LifeVideo() {
//     return (
//         <div className="life-video-container">
//             <video 
//                 className="life-main-video" 
//                 autoPlay 
//                 loop 
//                 muted 
//                 playsInline
//                 // Agar video show nahi ho raha to yeh attributes try karein
//                 preload="auto"
//                 webkit-playsinline="true"
//             >
//                 <source 
//                     src="/src/assets/images/mainVideo.mp4" 
//                     type="video/mp4" 
//                 />
//                 {/* Alternative sources agar mp4 kaam na kare */}
//                 {/* <source src="/src/assets/images/mainVideo.webm" type="video/webm" /> */}
//                 Your browser does not support HTML5 video.
//             </video>
//         </div>
//     );
// }

// export default LifeVideo;














import React from "react";
import "./LifeVideo.css";

// ✅ Video import (Vercel-safe)
import mainVideo from "../assets/images/mainVideo.mp4";

function LifeVideo() {
    return (
        <div className="life-video-container">
            <video 
                className="life-main-video" 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
                webkit-playsinline="true"
            >
                <source 
                    src={mainVideo} 
                    type="video/mp4" 
                />

                Your browser does not support HTML5 video.
            </video>
        </div>
    );
}

export default LifeVideo;