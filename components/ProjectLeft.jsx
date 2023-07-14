import React from "react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { PiRocketLaunch } from "react-icons/pi";

const ProjectLeft = ({ logo, description, screenshot }) => {
  return (
    <div className="flex space-x-[2%]">
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
          <div className="flex text-xl space-x-2 pt-4">
            <BsGithub className="duration-300 hover:-translate-y-1" />
            <FaFigma className="duration-300 hover:-translate-y-1" />
            <PiRocketLaunch className="duration-300 hover:-translate-y-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLeft;
