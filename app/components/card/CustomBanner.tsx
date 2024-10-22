"use clinet";
import Image from "next/image";
import React from "react";
import Buttons from "../buttons/Buttons";
import SearchBox from "../search/SearchBox";

interface ImainProps {
  headingPre: string;
  headingItalic?: string;
  headingPost?: string;
  describe: string;
  varriant: "default" | "default-col" | "grid-image-card";
  buttonName?: string;
}
const CustomBanner = ({
  headingPre,
  headingItalic,
  headingPost,
  describe,
  varriant,
  buttonName,
}: ImainProps) =>
  varriant === "grid-image-card" ? (
    <div className="max-w-screen-2xl mx-auto px-10">
      <div className="bg-gradient-to-r from-[#ebfeda] to-[#afebf4] w-full h-full overflow-hidden rounded-3xl">
        <div className="grid md:grid-cols-6 gap-4">
          <div className="col-span-4 flex flex-col justify-center ms-40 p-4">
            <h1 className="text-6xl text-black max-w-xl">
              <span> {headingPre} </span>
              <span className="font-skillItalic italic"> {headingItalic} </span>
              <span> {headingPost} </span>
            </h1>
            <p className="text-xm my-2 max-w-sm text-skilled-gary-10">
              {describe}
            </p>

            <div className=" flex flex-col">
              {/* search */}
              <SearchBox />

              <div className="flex items-center">
                <h4 className="text-5xl flex items-center mx-4">
                  15k+
                  <span className="text-sm text-skilled-gary-10 max-w-14 ms-1">
                    Fresh graduates
                  </span>{" "}
                </h4>
                <h3 className="text-5xl flex items-center mx-4">
                  6+
                  <span className="text-sm text-skilled-gary-10 max-w-14 ms-1">
                    Years of experience
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <Image
              src="/home3/mainbannerGirl.webp"
              alt="main_banner_"
              className="h-full w-full object-fill"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  ) : varriant === "default-col" ? (
    <section className="max-w-screen-2xl mx-auto px-10">
      <div className=" flex flex-col items-center justify-center text-center  py-20">
        <h1 className="text-5xl text-black max-w-2xl">
          <span> {headingPre} </span>
          <span className="font-skillItalic italic"> {headingItalic} </span>
          <span> {headingPost} </span>
        </h1>
        <p className="text-xm my-4 px-60 max-w-screen-xl text-skilled-gary-10">
          {describe}
        </p>
        <div>
          <Buttons
            varriant="default-dark-button"
            text={buttonName ? buttonName : ""}
          />
        </div>
      </div>
    </section>
  ) : varriant === "default" ? (
    <section className="max-w-screen-2xl mx-auto px-10">
      <div className=" flex flex-col items-center justify-center text-center  py-20">
        <h1 className="text-5xl text-black max-w-sm">
          <span> {headingPre} </span>
          <span className="font-skillItalic italic"> {headingItalic} </span>
          <span> {headingPost ? headingPost : ""} </span>
        </h1>
        <p className="text-xm my-4 py-1 max-w-screen-sm text-skilled-gary-10">
          {describe}
        </p>
      </div>
    </section>
  ) : null;
export default CustomBanner;
