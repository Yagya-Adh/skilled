"use clinet";
import Image from "next/image";
import navData from "@/navBar.json";
const Footer = () => {
  return (
    <footer className="">
      <div className="flex flex-col justify-between items-center  py-40">
        <Image
          src="/assets/SkilledLogo.svg"
          alt="footer_nav_"
          className="mb-10"
          width={120}
          height={120}
        />
        <section className="flex items-center">
          {navDatas?.map((list) => (
            <ul className="flex flex-row items-center" key={list.id}>
              <li className="mx-5 font-bold text-black hover:text-skilled-green-30">
                {list.name}
              </li>
            </ul>
          ))}
        </section>
      </div>
    </footer>
  );
};

export default Footer;

const navDatas: InavData[] = navData;

interface InavData {
  id: number;
  path: string;
  name: string;
}
