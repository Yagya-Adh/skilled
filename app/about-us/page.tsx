import CustomBanner from "../components/card/CustomBanner";
import OurMission from "../components/about/OurMission";
import OurVision from "../components/about/OurVision";

const AboutUs = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#ebfeda] to-[#afebf4] w-full h-full overflow-hidden">
        <CustomBanner
          headingPre="About"
          headingItalic="Skilled"
          describe="We are dedicated to empowering learners worldwide by providing high-quality, accessible, and engaging courses across various disciplines."
          buttonName="View Courses"
          varriant="default-col"
        />
      </div>
      <div className="max-w-screen-2xl mx-auto px-10">
        <OurVision />
        <OurMission />
      </div>
    </>
  );
};

export default AboutUs;
