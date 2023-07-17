import React from "react";
import Image from "next/image";
import Bob from "../public/bob4.png";
import Cutie from "../public/cutie.png";
import { BsGithub } from "react-icons/bs";
import { FaFigma, FaGit } from "react-icons/fa";
import { TbBrandNextjs, TbSchool } from "react-icons/tb";
import { TypeAnimation } from "react-type-animation";
import { SiMongodb } from "react-icons/si";
import {
  SiCplusplus,
  SiPython,
  SiUnity,
  SiTailwindcss,
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { VscVerifiedFilled } from "react-icons/vsc";

const AboutMe = () => {
  return (
    <>
      <div>
        <div className="w-full pb-5 max-sm:flex max-sm:justify-center">
          <div className="w-5/12 max-sm:w-8/12  max-sm:pb-5 max-sm:justify-center max-sm:flex max-sm:flex-col ">
            <div
              id="about"
              className="font-montserrat font-medium text-black text-lg max-sm:flex max-sm:justify-center"
            >
              ABOUT ME
            </div>
            <div className="max-sm:text-center font-outfit font-extralight text-bob-borderGray text-xs">
              some fun information about myself and what is currently playing in
              my earbuds
            </div>
          </div>
        </div>
        <div className="max-sm:hidden">
          <div className="w-full ">
            <div className="">
              <div className="grid grid-cols-12 ">
                <div className="col-span-4 mb-2 mr-2 duration-300 hover:-translate-y-1">
                  <Image
                    src={Bob}
                    alt="Landing"
                    layout="responsive"
                    className="aspect-square rounded-2xl"
                  />
                </div>
                <div className="col-span-8 flex justify-center items-center flex-col w-full">
                  <div className=" font-outfit font-light text-sm  border rounded-2xl w-full mb-2 h-full p-[5%] duration-300 hover:-translate-y-1">
                    <div className="font-medium font-outift flex items-center">
                      Bobby Lerias{" "}
                      <div className="text-blue-400 mx-1">
                        <VscVerifiedFilled />
                      </div>{" "}
                      <span className="font-light text-bob-boldGray">
                        @bobbyyy • Just Now
                      </span>
                      {/* <span className="font-light">• Just Now</span> */}
                    </div>
                    <div className="font-outfit font-light !text-base mt-1 text-black">
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          "I will fall in love to Fly Love by Jamie Foxx from the movie, Rio",
                          1000, // wait 1s before replacing "Mice" with "Hamsters"
                          "The Marvelous Mrs. Maisal is underrated",
                          1000,
                          "a moment: singing karaoke with 11/10 body and soul with friends on the slow lane",
                          1000,
                          '"I am aware that I am surrounded by people who feel that they can could do the job better. But, for better or worse, the Crown has landed on my head." -The Crown',
                          1000,
                        ]}
                        // wrapper="span"
                        speed={70}
                        repeat={Infinity}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center text-2xl space-x-2 px-4 border rounded-2xl w-full mb-2 h-fit py-[5%] duration-300 hover:-translate-y-1">
                    <BsGithub className="" />
                    <FaGit className="text-[#F1502F]" />
                    <SiVisualstudiocode className="text-[#0078d7]" />
                    <FaFigma className="text-[#A259FF]" />
                    <TbBrandNextjs className="" />
                    <BiLogoJavascript className="text-[#264de4]" />
                    <SiHtml5 className="text-[#e34c26]" />
                    <SiCss3 className="text-[#264de4]" />
                    <SiTailwindcss className="text-[#3490dc]" />
                    <SiMongodb className="text-[#589636]" />
                    <SiCplusplus className="text-[#044F88]" />
                    <SiPython className="text-[#ffde57]" />
                    <SiUnity className="text-[#626262]" />
                    <SiAdobephotoshop className="text-[#001E36]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-fit">
              <div className="grid grid-cols-12 h-full ">
                <div className="col-span-7">
                  <div className="grid grid-rows-7 h-full">
                    <div className="row-span-3 flex">
                      <div className="duration-300 hover:-translate-y-1 flex flex-col justify-center items-center rounded-2xl border w-8/12 px-4 mr-2 ">
                        <div className="text-2xl mb-1 text-gray-black">
                          <TbSchool />
                        </div>

                        <div className="text-center text-xs font-outfit font-medium">
                          UNIVERSITY OF CALIFORNIA, RIVERSIDE
                        </div>
                        <div className="text-xs font-outfit font-light">
                          B.S. COMPUTER SCIENCE
                        </div>
                        <div className="text-xs font-outfit font-light">
                          CUM LAUDE
                        </div>
                        <div className="text-xs font-outfit font-medium mt-2">
                          2019-2023
                        </div>
                      </div>
                      <div className="flex items-center w-4/12  mt-2">
                        <Image
                          src={Cutie}
                          alt="Landing"
                          layout="responsive"
                          className="rounded-2xl"
                        />
                      </div>
                    </div>
                    <div className="duration-300 hover:-translate-y-1 flex flex-col justify-center uppercase row-span-4 rounded-2xl text-sm font-outfit font-thin bg-bob-orange text-white px-5 py-3 mt-2">
                      <div className="">
                        the human need to understand who you are, what you
                        believe in and what you stand for is fundamental.{" "}
                        <span className="font-normal">
                          {" "}
                          so too is the need to indicate these things to others
                        </span>
                      </div>
                      <div className="text-xs flex justify-end mt-3">
                        — Ken Cato, RECOGNISE ME
                      </div>
                    </div>
                  </div>
                </div>
                <div className="duration-300 hover:-translate-y-1 col-span-5 rounded-2xl  ml-2">
                  <iframe
                    src="https://open.spotify.com/embed/playlist/7AilqvU8xj4h6Zn5ti9JZt?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden ">
          <div className="w-full">
            <div className="">
              <div className="">
                <div className="mb-2 duration-300 hover:-translate-y-1">
                  <Image
                    src={Bob}
                    alt="Landing"
                    layout="responsive"
                    className="aspect-square rounded-2xl"
                  />
                </div>
                <div className=" flex justify-center items-center flex-col w-full">
                  <div className=" font-outfit font-light text-sm  border rounded-2xl w-full mb-2 h-full p-[5%] duration-300 hover:-translate-y-1">
                    <div className="font-medium font-outift flex items-center">
                      Bobby Lerias{" "}
                      <div className="text-blue-400 mx-1">
                        <VscVerifiedFilled />
                      </div>{" "}
                      <span className="font-light text-bob-boldGray">
                        @bobbyyy • Just Now
                      </span>
                    </div>
                    <div className="font-outfit font-light !text-base mt-1 text-black">
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed out once, initially
                          "I will fall in love to Fly Love by Jamie Foxx from the movie Rio. I will.",
                          2500, // wait 1s before replacing "Mice" with "Hamsters"
                          "The Marvelous Mrs. Maisal is underrated",
                          2500,
                          "a moment: singing karaoke with 11/10 body and soul with friends on the slow lane",
                          2500,
                          "can i get a pizza pretzel and salted pretzel bites with a side of cheese, please? #wetzelpretzel",
                          2500,
                          "Sabor a Mi - Eydie Gormé and Los Panchos will be my wedding song.",
                          2500,
                        ]}
                        // wrapper="span"
                        speed={70}
                        repeat={Infinity}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="px-3 flex space-y-2 flex-wrap justify-center items-center text-2xl space-x-2  border rounded-2xl w-full mb-2 h-fit py-[5%] duration-300 hover:-translate-y-1">
                    <BsGithub className="" />
                    <FaGit className="text-[#F1502F]" />
                    <SiVisualstudiocode className="text-[#0078d7]" />
                    <FaFigma className="text-[#A259FF]" />
                    <TbBrandNextjs className="" />
                    <BiLogoJavascript className="text-[#264de4]" />
                    <SiHtml5 className="text-[#e34c26]" />
                    <SiCss3 className="text-[#264de4]" />
                    <SiTailwindcss className="text-[#3490dc]" />
                    <SiMongodb className="text-[#589636]" />
                    <SiCplusplus className="text-[#044F88]" />
                    <SiPython className="text-[#ffde57]" />
                    <SiUnity className="text-[#626262]" />
                    <SiAdobephotoshop className="text-[#001E36]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-fit">
              <div className="h-full ">
                <div className=" h-full">
                  <div className=" flex">
                    <div className="py-3 duration-300 hover:-translate-y-1 flex flex-col justify-center items-center rounded-2xl border w-8/12 px-4 mr-2 ">
                      <div className="text-2xl mb-1 text-gray-black">
                        <TbSchool />
                      </div>

                      <div className="text-center text-xs font-outfit font-medium">
                        UNIVERSITY OF CALIFORNIA, RIVERSIDE
                      </div>
                      <div className="text-xs font-outfit font-light">
                        B.S. COMPUTER SCIENCE
                      </div>
                      <div className="text-xs font-outfit font-light">
                        CUM LAUDE
                      </div>
                      <div className="text-xs font-outfit font-medium mt-2">
                        2019-2023
                      </div>
                    </div>
                    <div className="flex items-center w-4/12  mt-2">
                      <Image
                        src={Cutie}
                        alt="Landing"
                        layout="responsive"
                        className="rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="py-3 duration-300 hover:-translate-y-1 flex flex-col justify-center uppercase row-span-4 rounded-2xl text-sm font-outfit font-thin bg-bob-orange text-white px-5 mt-2">
                    <div className="">
                      the human need to understand who you are, what you believe
                      in and what you stand for is fundamental.{" "}
                      <span className="font-normal">
                        {" "}
                        so too is the need to indicate these things to others
                      </span>
                    </div>
                    <div className="text-xs flex justify-end mt-3">
                      — Ken Cato, RECOGNISE ME
                    </div>
                  </div>
                </div>

                <div className="duration-300 hover:-translate-y-1 col-span-5 rounded-2xl mt-2">
                  <iframe
                    src="https://open.spotify.com/embed/playlist/7AilqvU8xj4h6Zn5ti9JZt?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
