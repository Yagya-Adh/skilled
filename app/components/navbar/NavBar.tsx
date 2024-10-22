"use client";

import Image from "next/image";
import React from "react";
import Buttons from "../buttons/Buttons";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="sticky top-0 left-0 bg-white/80 z-20">
      <div className="max-w-screen-2xl mx-auto px-10 ">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={"/assets/SkilledLogo.svg"}
              alt="main_logo"
              width={120}
              height={120}
              className=""
            />
          </Link>
          <ul className="flex items-center justify-between px-10 py-10 ">
            {navData?.map((list) => (
              <Link href={list.path} key={list.id}>
                <li className="font-bold mx-4 hover:text-skilled-green-30 transition-all ease-in-out duration-300">
                  {list.name}
                </li>
              </Link>
            ))}
          </ul>

          <div className="flex items-center justify-between px-10">
            <div>
              <Buttons text="Contact Us" varriant="default-dark-button" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

const navData = [
  { id: 1, name: "About Us", path: "/about-us" },
  { id: 1, name: "Courses", path: "/courses" },
  { id: 1, name: "Teachers", path: "/teachers" },
  { id: 1, name: "All Pages", path: "/teachers" },
];
