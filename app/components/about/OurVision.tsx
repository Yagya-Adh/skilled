"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

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
const OurVision = () => {
  const [open, setOpen] = useState<number | null>(null);

  const handleDrop = (id: number) => {
    setOpen((prevID) => (prevID === id ? null : id));
  };

  return (
    <section className="bg-white my-40 max-w-screen-2xl mx-auto px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col mx-20 h-full">
          <article>
            <h4 className="text-black text-5xl my-4">Our Vision</h4>
            <p className="text-skilled-gary-10 max-w-screen-sm">
              At Skilled, we envision a world where everyone has the opportunity
              to learn, grow, and succeed, regardless of their background or
              location. We believe that education is a powerful tool for
              transformation, and we are committed to fostering a culture of
              lifelong learning.
            </p>
          </article>

          <div className="my-1">
            {data?.slice(0, 3).map((list) => (
              <article key={list.id}>
                <div className="flex items-center justify-between py-4 border-b">
                  <h3
                    className="font-bold text-black cursor-pointer "
                    onClick={() => handleDrop(list.id)}
                  >
                    <span className="bg-skilled-green-30 rounded-full px-3 py-2">
                      {list.id}
                    </span>{" "}
                    {list.title}
                  </h3>
                  <ChevronDownIcon
                    className={`w-8 h-8 text-black transition-transform ease-linear duration-500 ${
                      open === list.id ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {open === list.id && (
                  <p className="py-2 text-skilled-gary-10 max-w-sm">
                    {list.describe}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
        <div className="h-full">
          <Image
            src="/assets/vision/vision.webp"
            width={800}
            height={800}
            className="rounded-xl object-cover"
            alt="vision"
          />
        </div>
      </div>
    </section>
  );
};
export default OurVision;
