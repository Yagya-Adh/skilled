import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

interface IExploreProps {
  headingPre: string;
  headingItalic: string;
  headingPost: string;
  describe: string;
  buttonName?: string;
}
const ExploreSection = ({
  headingPre,
  headingItalic,
  headingPost,
  describe,
}: IExploreProps) => {
  return (
    <section className=" ">
      <div className="bg-gradient-to-r from-[#ebfeda] to-[#afebf4] py-20">
        <div className=" flex flex-col items-center justify-center text-center  py-20">
          <h1 className="text-5xl text-black max-w-2xl">
            <span> {headingPre} </span>
            <span className="font-skillItalic italic"> {headingItalic} </span>
            <span> {headingPost} </span>
          </h1>
          <p className="text-xm my-4 px-60 max-w-screen-xl text-skilled-gary-10">
            {describe}
          </p>
        </div>

        <div className="max-w-screen-2xl mx-auto px-20">
          <CustomSmallCard />
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;

const cardData = [
  { id: 1, path: "", title: "IT", slug: "120+ Courses", isUnique: false },
  {
    id: 2,
    path: "",
    title: "Graphic design",
    slug: "318+ Courses",
    isUnique: false,
  },
  { id: 3, path: "", title: "Business", slug: "73+ Courses", isUnique: false },
  { id: 4, path: "", title: "Art", slug: "123+ Courses", isUnique: false },
  {
    id: 5,
    path: "",
    title: "Digital marketing",
    slug: "230+ Courses",
    isUnique: false,
  },
  {
    id: 6,
    path: "",
    title: "Development",
    slug: "63+ Courses",
    isUnique: false,
  },
  { id: 7, path: "", title: "Language", slug: "310+ Courses", isUnique: false },
  { id: 8, path: "", title: "All courses", slug: "", isUnique: true },
];

const CustomSmallCard = () => {
  return (
    <div className="grid grid-cols-4 gap-10">
      {cardData?.map((list) => (
        <Link href={list.path} key={list.id}>
          <div
            className={`              
              hover:shadow-xl
              flex flex-col
              justify-center 
              items-center 
              p-20 
              rounded-2xl
               ${
                 list.isUnique
                   ? "bg-black text-white hover:bg-skilled-green-30"
                   : "bg-white text-black"
               }`}
          >
            <h1 className="font-bold">{list.title}</h1>
            {list.isUnique ? (
              <span className="text-skilled-gary-10">
                <ArrowLongRightIcon className="w-96 h-10" />
              </span>
            ) : (
              <span className="text-skilled-gary-10">{list.slug}</span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};
