import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "Advanced English Language Skills",
    image: "/assets/about/advanceEnglish.jpg",
    startRating: 5.0,
    price: 29.99,
    fullPrice: null,
    currency: "USD",
    currenyTag: "$",
    ratingGiver: 385,
  },

  {
    id: 2,
    title: "Digital Art and Illustration",
    image: "/assets/about/DigitalArt.jpg",
    startRating: 5.0,
    price: 19.99,
    fullPrice: 29.99,
    currency: "USD",
    currenyTag: "$",
    ratingGiver: 86,
  },

  {
    id: 3,
    title: "Graphic Design Mastery",
    image: "/assets/about/GraphicDesign.jpg",
    startRating: 5.0,
    price: 29.99,
    fullPrice: null,
    currency: "USD",
    currenyTag: "$",
    ratingGiver: 57,
  },

  {
    id: 4,
    title: "Cybersecurity Essentials",
    image: "/assets/about/CyberSecurity.jpg",
    startRating: 5.0,
    price: 29.99,
    fullPrice: null,
    currency: "USD",
    currenyTag: "$",
    ratingGiver: 149,
  },
];

const MostPopular = () => {
  return (
    <section className="bg-white my-40 max-w-screen-2xl mx-auto px-10">
      <article className="text-center my-10">
        <h2 className="text-6xl">
          Most <span className="font-skillArmia italic">popular</span> courses
        </h2>
      </article>

      <article className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-10">
        {data.map((list) => (
          <div className="flex flex-col" key={list.id}>
            <Image
              src={list.image}
              alt="popular_courses_"
              height={300}
              width={300}
              className="rounded-xl"
            />{" "}
            <h6 className="text-4xl font-bold text-black hover:text-skilled-green-30">
              {list.title}
            </h6>
            <p className="flex justify-between items-center text-xl">
              <span> {list.startRating.toFixed(2)} STATS </span>
              <span>{`(${list.ratingGiver})`}</span>
            </p>
            <h4 className="text-xl mt-4">
              {list.currenyTag}
              {list.price}
              {list.currency}{" "}
            </h4>
          </div>
        ))}
      </article>
    </section>
  );
};

export default MostPopular;
