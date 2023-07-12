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
          className=""
        />
      </div>
      <div className="w-1/2 border rounded-tr-xl rounded-br-xl flex flex-col justify-center items-center">
        <div className="px-[8%] space-y-[2%]">
          <div className="w-5/12">
            <Image src={logo} alt="Landing" layout="responsive" className="" />
          </div>
          <div className="font-outfit font-extralight text-bob-borderGray text-xs">
            {description}
          </div>
          <div className="flex text-xl space-x-[2%] pt-4">
            <BsGithub />
            <FaFigma />
            <PiRocketLaunch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLeft;
