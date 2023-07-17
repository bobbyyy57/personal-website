import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SideProject = ({ name, description, role, image, link }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <Link
        href={link}
        className="relative w-full duration-300 hover:-translate-y-1 max-sm:hidden"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover && (
          <div className=" max-sm:bg-red-500 w-full h-full absolute z-[5] p-6 rounded-2xl flex flex-col justify-end bg-gray-700 bg-opacity-70 transition-all ease-in-out">
            <div className="">
              <p className="text-xl text-white font-semibold">{name}</p>
              <p className="text-xs text-white font-light">{description}</p>
              <p className="text-xs text-white font-medium">Role: {role}</p>
              {/* <p className="text-xs text-white">{project.description}</p> */}
            </div>
          </div>
        )}
        <Image
          src={image}
          alt="Landing"
          layout="responsive"
          className="rounded-2xl"
        />
      </Link>
    </>
  );
};

export default SideProject;
