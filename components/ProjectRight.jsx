import React from "react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { PiRocketLaunch } from "react-icons/pi";
import Link from "next/link";

const ProjectLeft = ({ logo, description, screenshot, github, figma, dev }) => {
  return (
    <div className="flex space-x-[2%] duration-300 hover:-translate-y-1">
      <div className="w-1/2 border bg-bob-background rounded-l-xl flex flex-col justify-center items-center">
        <div className="px-[8%] space-y-[2%] flex flex-col items-end justify-end">
          <div className="w-5/12">
            <Image src={logo} alt="Landing" layout="responsive" className="" />
          </div>
          <div className="font-outfit font-extralight text-bob-borderGray text-xs text-right">
            {description}
          </div>
          <div className="flex text-xl space-x-2 pt-4 ">
            <Link target="_blank" href={github}>
              <BsGithub className="duration-300 hover:-translate-y-1 text-black" />
            </Link>
            <Link target="_blank" href={figma}>
              <FaFigma className="duration-300 hover:-translate-y-1 text-black" />
            </Link>
            {dev !== "" && (
              <Link target="_blank" href={dev}>
                <PiRocketLaunch className="duration-300 hover:-translate-y-1 text-black" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="w-6/12">
        <Image
          src={screenshot}
          alt="Landing"
          layout="responsive"
          className="rounded-r-xl"
        />
      </div>
    </div>
  );
};

export default ProjectLeft;
