

import React from "react";
import "./ScheduleVideo.css";

function ScheduleVideo() {
    return (
        <div className="schedule-video-unique-container">
            {/* Video Background */}
            <div className="schedule-video-unique-wrapper">
                <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="schedule-video-unique-element"
                    preload="auto"
                >
                    <source src="/src/assets/images/ShedualDemo4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
                {/* Dark Overlay */}
                <div className="schedule-video-unique-overlay"></div>
            </div>

            {/* Text Content */}
            <div className="schedule-video-unique-content">
                <h1 className="schedule-video-unique-main-heading">REQUEST A DEMO</h1>
                <p className="schedule-video-unique-sub-heading">
                    Schedule a no-obligation demo on Essential Aquatech solutions!
                </p>
            </div>
        </div>
    );
}

export default ScheduleVideo;














