import React from "react";

const AutoPlayVideo = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="w-full h-full object-cover"
        src="/movie.mp4" // Replace with the path to your video file
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AutoPlayVideo;
