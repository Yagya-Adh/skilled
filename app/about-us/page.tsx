import CustomBanner from "../components/card/CustomBanner";
import OurMission from "../components/about/OurMission";
import OurVision from "../components/about/OurVision";
import MostPopular from "@/public/assets/about/MostPopular";

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
      <OurVision />
      <OurMission />
      <MostPopular />
    </>
  );
};

export default AboutUs;
