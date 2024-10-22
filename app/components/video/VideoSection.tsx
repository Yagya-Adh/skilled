"use client";
import Image from "next/image";
import React from "react";

const videoData = [
  { id: 1, title: "Audio classes", image: "/assets/icons/audio.svg" },
  { id: 2, title: "Recorded classes", image: "/assets/icons/video.svg" },
  { id: 3, title: "Live classes", image: "/assets/icons/liveClasses.svg" },
];
const VideoSection = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-10 pb-40">
      <div className=" flex flex-col items-center justify-center">
        <div className="rounded-2xl overflow-hidden w-3/5">
          {/* <iframe
          src="https://skilled-128.webflow.io/home-3"
          //   frameborder="0"
          className=""
          controls
        ></iframe> */}

          {/* <video
            src="https://skilled-128.webflow.io/home-3#"
            controls
            className="w-full h-full"
          ></video> */}

          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID?controls=1"
            title="Embedded Video"
            className="w-full h-full"
            height={500}
            width={600}
            allowFullScreen
            // frameBorder="0"
          ></iframe>

          {/* <video
            src={"https://www.youtube.com/embed/VIDEO_ID?controls=1"}
            controls={true}
            height={500}
            width={1000}
            poster={
              "https://hips.hearstapps.com/hmg-prod/images/ripley-pa-108-011822-01629-r-661067043d66f.jpg?resize=980:*"
            }
          /> */}
        </div>

        <div className="flex justify-between items-center">
          {videoData?.map((list) => (
            <div
              key={list.id}
              className="flex items-center justify-between mx-10 my-10"
            >
              <Image
                src={list.image}
                alt="video_"
                width={50}
                height={50}
                className=""
              />

              <h3 className="font-bold text-xl">{list.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
