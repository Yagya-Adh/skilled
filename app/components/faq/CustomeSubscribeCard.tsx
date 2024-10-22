"use client";

import Image from "next/image";

const CustomSubscribeCard = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-10 my-20">
      <div className="bg-black rounded-2xl pt-10">
        <div className="grid  grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center px-10 py-10 transition-all ease-in-out duration-700 text-white">
            <h1 className="text-5xl my-10">
              Subscribe for get update every new courses
            </h1>
            <p className="text-xl my-4">
              20k+ students daily learn with Skilled.
            </p>

            <form onSubmit={() => alert("thank you for submit!")}>
              <div className="flex items-center bg-white rounded-xl overflow-hidden px-1 w-1/2">
                <input
                  type="text"
                  className="py-3 px-4 outline-none text-black"
                  placeholder="Enter your email"
                />
                <button
                  className={`
                   rounded-r-xl
                   py-2 px-3 
                   font-bold                 
                   bg-skilled-green-30
                   text-black 
                   hover:bg-black
                   hover:text-white`}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className=" inline-block overflow-hidden">
            <Image
              src="/assets/subscribe/subscribe.webp"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-xl"
              alt="subscribe_"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSubscribeCard;
