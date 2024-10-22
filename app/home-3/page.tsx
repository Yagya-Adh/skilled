"use client";
import React from "react";
import CustomBanner from "../components/card/CustomBanner";

const HomeThree = () => {
  return (
    <>
      <CustomBanner
        headingPre="Acquiring"
        headingItalic="skills"
        headingPost="for a brighter career"
        describe="Our platform offers a wide range of courses and resources designed to help you acquire new competencies, stay current with industry trends, and improve your employability."
        varriant="grid-image-card"
      />

      <CustomBanner
        headingPre="Enjoy"
        headingItalic="learning"
        headingPost="with video, audio and live classes"
        describe="Our platform offers high-quality video tutorials, on-the-go audio lessons, and interactive live classes to suit your learning style and schedule. Experience flexible and engaging education tailored to your needs."
        varriant="default-col"
        buttonName="Visit Courses"
      />

      <VideoSection />
    </>
  );
};

export default HomeThree;
