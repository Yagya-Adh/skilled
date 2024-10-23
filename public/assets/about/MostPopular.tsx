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

      <div className="flex flex-row items-center">
        {data.map((list) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full h-full"
            key={list.id}
          >
            <div className="flex flex-col p-4 justify-center">
              <Image
                src={list.image}
                alt="popular_courses_"
                height={800}
                width={800}
                className="rounded-xl"
              />{" "}
              <h2 className="text-4xl font-bold text-black hover:text-skilled-green-30 py-1">
                {list.title}
              </h2>
              <p className="flex justify-between items-center text-xl">
                <span className="font-bold">
                  {" "}
                  {list.startRating.toFixed(2)} STATS{" "}
                </span>
                <span className="text-skilled-gary-10">{`(${list.ratingGiver})`}</span>
              </p>
              <div className="flex items-center">
                <h4 className="font-bold flex items-center">
                  {list.currenyTag}
                  {list.price}
                  {list.currency}{" "}
                </h4>
                <h3 className="line-through text-skilled-gary-10 mx-4">
                  {list.fullPrice && (
                    <>
                      {list.currenyTag}
                      <span className="line-through ">{list.fullPrice}</span>
                    </>
                  )}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostPopular;
