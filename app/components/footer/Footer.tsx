import Image from "next/image";
import navData from "@/navBar.json";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="max-w-screen-2xl mx-auto px-10">
      <div className="flex flex-col justify-between items-center  py-40">
        <Image
          src="/assets/SkilledLogo.svg"
          alt="footer_nav_"
          className="mb-10"
          width={120}
          height={120}
        />
        <section>
          <ul className="flex flex-row items-center">
            {navDatas?.map((list) => (
              <Link
                href={list.path}
                className="flex flex-row items-center"
                key={list.id}
              >
                <li className="mx-5 font-bold text-black hover:text-skilled-green-30">
                  {list.name}
                </li>
              </Link>
            ))}
          </ul>
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
