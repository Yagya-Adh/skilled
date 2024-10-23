import CustomSubscribeCard from "../components/faq/CustomeSubscribeCard";
import CustomBanner from "../components/card/CustomBanner";
import VideoSection from "../components/video/VideoSection";
import FrequentlyAsked from "../components/faq/FrequentlyAsked";

const Teachers = () => {
  return (
    <>
      <CustomBanner
        headingPre="Meet our "
        headingItalic="team"
        describe="Lorem ipsum dolor sit amet consectetur. Pulvinar interdum proin cras lacinia sodales cras lectus fames aliquet. Aliquam pellentesque turpis pretium dictumst convallis id."
        varriant="default"
      />
      <VideoSection />
      <CustomBanner
        headingPre="Frequently asked "
        headingItalic="questions"
        describe="You will find answers to frequently asked questions about our courses and services. We are here to help you every step of the way in your studies."
        varriant="default"
      />
      <FrequentlyAsked />
      <CustomSubscribeCard />
    </>
  );
};

export default Teachers;
