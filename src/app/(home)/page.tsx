import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Head from "next/head";
import RegisterCard from "./RegisterCard";

export default function Home() {
  return (
    <div className="min-h-screen mx-[5%] mt-[7vh]">
      <div className="absolute z-[-10] w-[20%] min-w-[130px] rotate-[10] top-[5rem] right-[0rem] invisible 2xl:visible">
        <img className="cover" src="/book.png" />
        {/* <img className="cover rotate-[-14deg]" src="/calendar.png" /> */}
      </div>

      <div className="flex flex-col xl:flex-row xl:space-x-20 xl:space-y-0 space-y-20  mx-[10%]">
        <div className="relative rounded rounded-xl bg-gray-100 min-h-[30vh] w-full xl:min-w-[50%] 2xl:minw-[60%] shadow-lg  p-20 overflow-hidden xl:min-w-[650px]">
          <h5 className="font-bold text-2xl">Streamline Your Study Sessions</h5>
          <div className="relative z-10 xl:ml-[40%] 2xl:mt-14 2xl:max-w-xl max-w-xl">
            <p className="text-xl mt-10">
              Transform lecture notes and textbooks into concise study guides,
              making revision more efficient
            </p>
            <p className=" text-xl mt-10">
              Discover insights from{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-400 font-bold">
                millions of unread lines
              </span>{" "}
              and thousands of texts
              <span className="ml-5"> </span>
            </p>
          </div>
          <div className="max-w-[380px] absolute bottom-0 left-0 invisible xl:visible">
            <img className="cover" src="/student-3.png" />
          </div>
          <div className="2xl:mt-40 mt-16 2xl:mt-20 flex justify-end">
            <button className=" self-end gradient-background rounded rounded-lg px-4 py-3 text-md text-gray-800 font-semibold">
              Discover for Students
            </button>
          </div>
        </div>
        <RegisterCard />
      </div>

      <footer className="p-4 bg-white shadow mt-8 relative z-[-11]">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            &copy; 2024 Botan Design. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
