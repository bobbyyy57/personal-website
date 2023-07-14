import React from "react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { PiRocketLaunch } from "react-icons/pi";
import Link from "next/link";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
// import {LiaToolsSolid} from "react-icons/lia"

const ProjectLeft = ({
  logo,
  description,
  screenshot,
  github,
  figma,
  dev,
  nextjs,
  fig,
  mongo,
}) => {
  return (
    <div className="flex space-x-[2%] duration-300 hover:-translate-y-1">
      <div className="w-6/12">
        <Image
          src={screenshot}
          alt="Landing"
          layout="responsive"
          className="rounded-l-xl"
        />
      </div>
      <div className="w-1/2 border rounded-r-xl flex flex-col justify-center items-center">
        <div className="px-[8%] space-y-[2%]">
          <div className="w-5/12">
            <Image src={logo} alt="Landing" layout="responsive" className="" />
          </div>
          <div className="font-outfit font-extralight text-bob-borderGray text-xs">
            {description}
          </div>
          <div className="flex justify-between text-xl pt-4 ">
            <div className=" w-fit space-x-2 flex ">
              <Link
                target="_blank"
                href={github}
                className="no-underline text-black"
              >
                <BsGithub className="duration-300 hover:-translate-y-1 text-black" />
                {/* <div className="duration-300 hover:-translate-y-1 hover:bg-black hover:text-white text-xs  hover:border-none border rounded-full font-outfit px-2 py-1">GITHUB</div> */}
              </Link>
              <Link
                target="_blank"
                href={figma}
                className="no-underline text-black"
              >
                <FaFigma className="duration-300 hover:-translate-y-1 text-black" />

                {/* <div className="duration-300 hover:-translate-y-1 text-xs border hover:bg-black hover:text-white hover:border-none rounded-full font-outfit px-2 py-1">FIGMA</div> */}
              </Link>
              {dev !== "" && (
                <Link target="_blank" href={dev}>
                  <PiRocketLaunch className="duration-300 hover:-translate-y-1 text-black" />
                </Link>
              )}
            </div>
            <div className="flex items-center space-x-2">
              {/* <div className="text-xs font-outfit text-bob-boldGray">
              </div> */}
              {nextjs && <TbBrandNextjs />}
              {fig && <FaFigma />}
              {mongo && <SiMongodb />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLeft;
