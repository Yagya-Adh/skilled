import { useState } from "react";
import faqData from "@/frequentlyaskquestion.json";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

interface Ifaq {
  id: number;
  question: string;
  answer: string;
}
const data: Ifaq[] = faqData;

const FrequentlyAsked = () => {
  const [open, setOpen] = useState<number | null>(null);

  const handleOpen = (id: number) => {
    setOpen((prevID) => (prevID === id ? null : id));
  };

  return (
    <section className="max-w-screen-2xl mx-auto px-20">
      <div className="py-10 grid grid-cols-2 my-10">
        {data?.map((list) => (
          <div key={list.id} className="flex flex-col px-10 my-5">
            <div
              className="flex items-center justify-between group cursor-pointer"
              onClick={() => handleOpen(list.id)}
            >
              <h3 className="text-xl font-bold group-hover:text-skilled-green-30">
                {list.question}
              </h3>
              <ChevronDownIcon
                className={`w-8 h-8 text-black ${
                  open !== list.id
                    ? "group-hover:text-skilled-green-30 rotate-0 transition-all ease-linear duration-500"
                    : " rotate-180 transition-all ease-linear duration-500"
                } `}
              />
            </div>
            <div className={`my-5 `}>
              {open === list.id && (
                <p
                  className={`
                    max-w-screen-sm
                    pe-8
                 ${
                   open === list.id
                     ? "-translate-y-1 transition-all ease-in-out duration-500"
                     : "translate-y-5 transition-all ease-in-out duration-500"
                 }     
                  `}
                >
                  {list.answer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAsked;
