import React from "react";
import Image from "next/image";
import Bob from "../public/bob.png";
import Cutie from "../public/cutie.png";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { TbBrandNextjs, TbSchool } from "react-icons/tb";
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

const AboutMe = () => {
  return (
    <div>
      <div id="about" className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-6/12">
          <div className="w-full pb-[5%]">
            <div className="w-5/12">
              <div className="font-montserrat font-medium text-black text-lg">
                ABOUT ME
              </div>
              <div className="font-outfit font-extralight text-bob-borderGray text-xs">
                some fun information about myself and what is currently playing
                in my earbuds
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="">
              <div className="grid grid-cols-12">
                <div className="col-span-4 mb-2 mr-2 duration-300 hover:-translate-y-1">
                  <Image
                    src={Bob}
                    alt="Landing"
                    layout="responsive"
                    className="aspect-square rounded-2xl"
                  />
                </div>
                <div className="duration-300 hover:-translate-y-1 col-span-8 border flex justify-center space-y-10 items-center flex-col  rounded-2xl w-full px-5 mb-2">
                  <div className=" font-outfit font-light text-sm">
                    <span className="">
                      software engineer and ui/ux designer in southern
                      california.
                    </span>{" "}
                    catch me shamelessly belting show tunes in the car or
                    playing overwatch.
                  </div>
                  <div className="flex justify-center items-center text-2xl space-x-2 ">
                    <BsGithub />
                    <FaFigma />
                    <TbBrandNextjs />
                    <SiMongodb />
                    <SiCplusplus />
                    <SiPython />
                    <SiUnity />
                    <SiTailwindcss />
                    <SiVisualstudiocode />
                    <SiAdobephotoshop />
                    <SiHtml5 />
                    <SiCss3 />
                    <BiLogoJavascript />
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

                        <div className="text-xs font-outfit font-medium">
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
      </div>
    </div>
  );
};

export default AboutMe;
