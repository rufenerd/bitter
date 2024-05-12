import React, { useRef } from 'react';

const VideoPlayer = ({ videoPath, handleVideoEnded }) => {
    const videoRef = useRef(null);


    return (
        <div className="video-container">
            <video ref={videoRef} className="fullscreen-video" controls autoPlay onEnded={handleVideoEnded}>
                <source src={videoPath} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
