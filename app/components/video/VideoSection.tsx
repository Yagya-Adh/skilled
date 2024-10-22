"use client";
import React from "react";

const VideoSection = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-10 py-40">
      <div className=" flex items-center justify-center">
        <div className="rounded-2xl overflow-hidden w-4/5">
          {/* <iframe
          src="https://skilled-128.webflow.io/home-3"
          //   frameborder="0"
          className=""
          controls
        ></iframe> */}

          <video
            src="https://skilled-128.webflow.io/home-3#"
            controls
            className="w-full h-full"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
