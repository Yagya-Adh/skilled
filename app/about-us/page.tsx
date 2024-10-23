import Image from "next/image";
import CustomBanner from "../components/card/CustomBanner";

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
        <OurMission />
      </div>
    </>
  );
};

export default AboutUs;

const OurMission = () => {
  return (
    <>
      <section className="bg-white my-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col mx-20">
            <article className=" ">
              <h4 className="text-black text-5xl my-4">Our Vision</h4>
              <p className="text-skilled-gary-10 max-w-screen-sm">
                At Skilled, we envision a world where everyone has the
                opportunity to learn, grow, and succeed, regardless of their
                background or location. We believe that education is a powerful
                tool for transformation, and we are committed to fostering a
                culture of lifelong learning.
              </p>
            </article>
            <div className="my-4">
              {data?.slice(0, 3).map((list) => (
                <div key={list.id}>
                  <article>
                    <h3 className="font-bold text-black ">{list.title}</h3>

                    <p className="py-2 text-skilled-gary-10 max-w-sm">
                      {list.describe}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Image
              src="/assets/vision/vision.webp"
              width={800}
              height={800}
              className="rounded-xl object-cover"
              alt="vision_"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const data = [
  {
    id: 1,
    title: "Empowering Learners Everywhere",
    describe:
      "By providing flexible and engaging learning experiences, we aim to break down barriers to education and create opportunities for individuals to achieve their personal and professional goals.",
  },
  {
    id: 2,
    title: "Fostering Innovation and Creativity",
    describe:
      "We envision a future where innovation and creativity are at the forefront of education. Our goal is to cultivate a learning environment that encourages critical thinking, problem-solving, and the exploration of new ideas.",
  },
  {
    id: 3,
    title: "Building Gloabal Community",
    describe:
      "Community is at the heart of our vision. We are dedicated to building a global network of learners, educators, and professionals who support and inspire each other.",
  },
];
