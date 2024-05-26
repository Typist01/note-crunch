"use client";
import { Inter, Quicksand } from "next/font/google";
import RegisterCard from "./RegisterCard";
import { features } from "./data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

const FeatureItem = ({
  title,
  description,
  benefit,
}: {
  title: string;
  description: string;
  benefit: string;
}) => {
  return (
    <>
      <div className="feature-item space-y-3 relative">
        <h3 className="text-2xl font-normal font-semibold text-gray-500">
          {title}
        </h3>
        <p className="text-lg font-normal text-gray-500">{description}</p>
        <p className=" font-medium text-sky-800">
          <strong className="">{benefit}</strong>
        </p>
      </div>
    </>
  );
};
const studentImgPaths = [
  "/student-2.png",
  "/student-2.png",
  "/student-3.png",
  "/student-4.png",
  "/student-5.png",
  "/student-6.png",
  "/student-7.png",
  "/student-8.png",
  "/student-9.png",
];

export default function Home() {
  const val = useMemo(() => {
    return studentImgPaths[Math.floor(Math.random() * 9)];
  }, []);
  const heroImgPath = studentImgPaths[Math.floor(Math.random() * 9)];
  return (
    <>
      <div className="mx-[5%] mt-[7vh]">
        <div className="rotate-[7deg] absolute z-[20] w-[20%] min-w-[130px] rotate-[10] top-[5rem] left-[2rem] visible 2xl:invisible">
          <img className="cover" src="/book.png" />
          {/* <img className="cover rotate-[-14deg]" src="/calendar.png" /> */}
        </div>
        <div className="absolute z-[-10] w-[20%] min-w-[130px] rotate-[10] top-[5rem] right-[5rem] invisible 2xl:visible">
          <img className="cover" src="/book.png" />
          {/* <img className="cover rotate-[-14deg]" src="/calendar.png" /> */}
        </div>

        <div className="flex flex-col xl:flex-row xl:space-x-20 xl:space-y-0 space-y-20  mx-[10%]">
          <div className="relative rounded rounded-xl bg-gray-100 min-h-[30vh] w-full xl:min-w-[50%] 2xl:minw-[60%] shadow-lg  p-20 overflow-hidden xl:min-w-[650px]">
            <div className="absolute z-[1] w-[100px] min-w-[130px] rotate-[-7deg] bottom-5 left-[5%] xl:left-[45%] visible xl:invisible flex sm:visible invisible">
              <img className="cover" src="/rocket-1.png" />
              <img
                className="cover invisible md:visible xl:invisible"
                src="/rocket-2.png"
              />
              <img
                className="cover invisible lg:visible xl:invisible"
                src="/rocket-3.png"
              />
              {/* <img className="cover rotate-[-14deg]" src="/calendar.png" /> */}
            </div>

            <h5 className="font-bold text-3xl">
              Streamline Your Study Sessions
            </h5>
            <div className="relative z-10 xl:ml-[40%] 2xl:mt-14 2xl:max-w-xl max-w-xl">
              <p className="text-2xl mt-5 mb-10">
                Transform lecture notes and textbooks into concise study guides
              </p>
              <p className=" text-xl mt-7">
                Discover insights from{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-400 font-bold">
                  millions of unread lines
                </span>{" "}
                and thousands of texts
              </p>
            </div>
            <div className="max-w-[380px] absolute bottom-0 left-0 invisible xl:visible">
              <img className="cover" src={val} />
              {/* <img className="cover" src="/student-3.png" /> */}
            </div>
            <div className="2xl:mt-16 mt-16 2xl:mt-20 flex justify-end">
              <Link href={"#email-register-input"}>
                <button className="z-[2] relative shadow-lg self-end gradient-background rounded rounded-lg px-4 py-3 text-md text-gray-800 font-semibold">
                  Discover for Students
                </button>
              </Link>
            </div>
          </div>
          <RegisterCard />
        </div>

        <div className={"mt-20 mx-[10%] relative " + inter.className}>
          {/* <h3 className="text-xl">Features</h3> */}
          <h4
            className={
              "text-4xl font-light text-gray-500 " + quicksand.className
            }
          >
            Transform your notes into concise summaries instantly!
          </h4>

          <section className="">
            <motion.div
              animate={{ y: [0, -5, 0, 5, 0] }}
              transition={{ repeat: Infinity, type: "spring", duration: 2 }}
              className="absolute z-[-10] w-[8rem] md:w-[13rem] min-w-[130px] rotate-[10] top-[1rem] right-[-5rem] md:right-[7rem] invisible 2xl:visible"
            >
              <img className="cover" src="/chibi-robot-reading-3.png" />
              {/* <img className="cover rotate-[-14deg]" src="/calendar.png" /> */}
            </motion.div>
            <div className="font-thin text-lg mt-28">
              <h2
                className={
                  "text-3xl mb-5 text-purple-600 " + quicksand.className
                }
              >
                Why Choose SummaNote?
              </h2>
              <div className="features-list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 m-2">
                {features.map((feature, i) => (
                  <FeatureItem
                    key={`feature_${i}`}
                    title={feature.title}
                    description={feature.description}
                    benefit={feature.benefit}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>

        <footer className="p-4 bg-white shadow mt-8 relative z-[-11]">
          <div className="container mx-auto text-center">
            <p className="text-gray-600">
              &copy; 2024 Botan Design. All rights reserved.
            </p>
          </div>
        </footer>
        <div className="absolute rotate-[80deg] z-[-10] w-[30rem] scale-[120%] rotate-[10] left-[-15rem] top-[20vh] visible xl:invisible">
          <img className="cover" src="/vine-2.png" />
          {/* <img className="cover rotate-[-14deg]" src="/calendar.png" /> */}
        </div>
      </div>
    </>
  );
}
