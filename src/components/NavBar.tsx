"use client";

import Link from "next/link";
import { FC } from "react";
import { toast } from "sonner";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const buttonClass =
    " text-gray-700 px-3 py-2 border-orange-600 rounded rounded-lg min-w-16 h-10 font-extrabold text-md";

  const onClick = () => {
    toast.warning("Coming soon");
  };
  return (
    <div className="2xl:m-10 m-6 flex justify-between items-center 2xl:mx-[25%] sm:mx-[15%]">
      <div className="flex">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold text-slate-600">
            Note <span className="font-light">Digest</span>
          </h1>
        </Link>
        <div className=""></div>
      </div>
      <div className="">
        <button className={buttonClass + " !text-gray-400"}>Home</button>
        <button className={buttonClass} onClick={onClick}>
          Features
        </button>
        <button
          className={buttonClass + " hidden xl:inline-block"}
          onClick={onClick}
        >
          How it works
        </button>
        <button
          className={buttonClass + " hidden xl:inline-block"}
          onClick={onClick}
        >
          Pricing
        </button>
        <button
          className={buttonClass + " hidden xl:inline-block"}
          onClick={onClick}
        >
          About Us
        </button>
        <button
          className={buttonClass + " hidden xl:inline-block"}
          onClick={onClick}
        >
          Contact Us
        </button>

        <button className={buttonClass} onClick={onClick}>
          Sign Up
        </button>
        {/* <button className={buttonClass}>Log In</button> */}
      </div>
    </div>
  );
};

export default NavBar;
