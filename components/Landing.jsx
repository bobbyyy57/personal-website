/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Landing = () => {
  return (
    <>
      {/* Desktop */}
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-between items-center space-y-[5%] w-full">
            <div className="flex w-full">
              <div className=" mr-[5%]  text-9xl max-xl:text-8xl  max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:m-0 font-outfit font-medium -tracking-[0.08em] -space-y-6 text-black w-full">
                <div className="hover:text-bob-orange duration-300">BOBBY</div>
                <div>LERIAS</div>
              </div>
              <div className="border-l-[1px] w-full max-md:hidden">
                <div className="ml-[10%] font-montserrat text-bob-borderGray font-thin text-xl flex justify-center items-start flex-col  h-full">
                  <div className="">
                    <div>GAMER</div>
                    <div>FOODIE</div>
                    <div>RUNNER</div>
                    <div>THEATER NERD</div>
                    <div className="font-semibold text-bob-boldGray ">
                      UI/UX DESIGNER
                    </div>
                    <div className="font-semibold text-bob-boldGray ">
                      SOFTWARE ENGINEER
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-lg:hidden border rounded w-full font-outfit font-extralight text-sm text-bob-borderGray  px-[5%] py-[3%]">
              Hello hello, nice to virtually meet you. I'm Bobby! I am a
              Software Engineer and UI/UX Designer based in Southern California.{" "}
              <span className="font-medium">
                I am currently looking for opportunities to learn, experience
                new things, and push limits for myself and others.{" "}
              </span>
              Until then, catch me shamelessly belting show tunes in the car or
              playing Overwatch. Welcome to my page :)
            </div>
            <div className="lg:hidden border text-center rounded w-full font-outfit font-extralight text-sm text-bob-borderGray  px-[7%] py-[7%]">
              Hello hello! I'm a Software Engineer and UI/UX Designer based in
              Southern California.{" "}
              <span className="font-medium">
                I'm currently looking for opportunities to learn, experience new
                things, and push limits for myself and others.{" "}
              </span>
              Until then, catch me shamelessly belting show tunes in the car or
              playing Overwatch. Welcome to my page :)
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
