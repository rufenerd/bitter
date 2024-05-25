import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ doubled, videoPath, handleVideoEnded }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (doubled && videoRef.current) {
            videoRef.current.playbackRate = 2.0;
        }
    }, []);

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
