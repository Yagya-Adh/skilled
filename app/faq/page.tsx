"use client";
import React from "react";
import CustomBanner from "../components/card/CustomBanner";
import CustomSubscribe from "../components/faq/CustomSubscribe";

const FAQPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#ebfeda] to-[#afebf4] w-full h-full overflow-hidden">
        <CustomBanner
          headingPre="Frequently asked "
          headingItalic="questions"
          describe="You will find answers to frequently asked questions about our courses and services. We are here to help you every step of the way in your studies."
          varriant="default"
        />
      </div>

      <CustomSubscribe />
    </>
  );
};

export default FAQPage;
