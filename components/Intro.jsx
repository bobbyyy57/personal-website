import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Face from "../public/introFace.png";
import Image from "next/image";

const Intro = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col w-1/6 space-y-5 font-extralight pb-[10%] font-outfit text-sm">
          <div className="flex justify-center">
            <div className="flex w-2/12 items-center">
              <Image
                src={Face}
                alt="Landing"
                layout="responsive"
                className=""
              />
            </div>
          </div>
          <div>hey hey hey, welcome to my little spot on the internet. </div>
          <div>my name is robert, but feel free to call me bobby :) </div>
          <div>
            i appreciate those who are bold, genuine, and unapologetic.{" "}
          </div>
          <div>let’s get to know who i am.</div>
          <HiOutlineArrowRight />
        </div>
      </div>
    </>
  );
};

export default Intro;
