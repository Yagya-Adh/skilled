"use client";
import Image from "next/image";

const OurMission = () => {
  return (
    <section className="bg-white my-40">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-10 items-center">
        <div className="h-full col-span-2">
          <Image
            src="/assets/about/ourmission.webp"
            width={500}
            height={500}
            className="rounded-xl object-cover"
            alt="mission_"
          />
        </div>

        <div className="grid grid-cols-1 col-span-4 items-center mx-20 h-full">
          <article>
            <h4 className="text-black text-5xl my-4">Our mission</h4>
            <p className="text-skilled-gary-10 max-w-screen-sm">
              We believe that education is a transformative force that can
              empower individuals, foster innovation, and drive positive change
              in communities around the world. Our goal is to provide flexible,
              engaging, and practical courses that enable learners to achieve
              their personal and professional aspirations.
            </p>
          </article>

          <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {data?.slice(0, 2).map((list) => (
              <div key={list.id}>
                <h5 className="font-bold flex items-center py-1 my-1 max-w-screen-xl">
                  <Image
                    src={list.icon}
                    className=""
                    alt="icons_"
                    width={28}
                    height={28}
                  />
                  <span className="mx-1">{list.title}</span>
                </h5>
                <p className="text-skilled-gary-10 text-sm">{list.slug}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;

const data = [
  {
    id: 1,
    title: "Excellence in Learning",
    slug: "We work with expert instructors who bring a wealth of experience and knowledge to our courses, ensuring that our content is accurate, relevant, and up-to-date.",

    icon: "/assets/icons/earth.svg",
  },

  {
    id: 2,
    title: "Innovation and Adaptability",
    slug: "By leveraging the latest technologies and teaching methodologies, we create dynamic and engaging learning experiences.",

    icon: "/assets/icons/cube.svg",
  },
];
