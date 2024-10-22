"use clinet";
import Image from "next/image";
import React from "react";
interface ImainProps {
  headingPre: string;
  headingItalic: string;
  headingPost: string;
  describe: string;
}
const MainBanner = ({
  headingPre,
  headingItalic,
  headingPost,
  describe,
}: ImainProps) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-10">
      <div className="bg-gradient-to-r from-[#ebfeda] to-[#afebf4] p-40 w-full h-full rounded-3xl">
        <div className="grid md:grid-cols-6 gap-4">
          <div className="col-span-4">
            <h1 className="text-5xl text-black">
              <span> {headingPre} </span>
              <span className="font-skillItalic italic"> {headingItalic} </span>
              <span> {headingPost} </span>
            </h1>
            <p className="text-xm my-2">{describe}</p>
          </div>
          <div className="col-span-2">
            <Image
              src="/home3/mainbannerGirl.webp"
              alt="main_banner_"
              className="h-full w-full"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
