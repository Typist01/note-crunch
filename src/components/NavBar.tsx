import Link from "next/link";
import { FC } from "react";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const buttonClass =
    " text-gray-700 px-3 py-2 border-orange-600 rounded rounded-lg min-w-16 h-10 font-extrabold text-md";
  return (
    <div className="2xl:m-10 m-6 flex justify-between items-center 2xl:mx-[25%] sm:mx-[15%]">
      <div className="flex">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold">Note Crush</h1>
        </Link>
        <div className=""></div>
      </div>
      <div className="">
        <button className={buttonClass + " !text-gray-400"}>Home</button>
        <button className={buttonClass}>Features</button>
        <button className={buttonClass + " hidden xl:inline-block"}>
          How it works
        </button>
        <button className={buttonClass + " hidden xl:inline-block"}>
          Pricing
        </button>
        <button className={buttonClass + " hidden xl:inline-block"}>
          About Us
        </button>
        <button className={buttonClass + " hidden xl:inline-block"}>
          Contact Us
        </button>

        <button className={buttonClass}>Sign Up</button>
        {/* <button className={buttonClass}>Log In</button> */}
      </div>
    </div>
  );
};

export default NavBar;
