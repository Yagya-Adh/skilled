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
          variant="default-col"
        />
      </div>
      <OurVision />
      <OurMission />
      <MostPopular />

      <CustomBanner
        headingPre="10K+"
        headingItalic="students"
        headingPost="takes this courses. What are you waiting for?"
        buttonName="Get Started Now"
        buttonTextSize="text-sm"
        variant="default-col"
      />
    </>
  );
};

export default AboutUs;
