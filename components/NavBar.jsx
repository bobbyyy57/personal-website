import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <div className="relative">
      <div className="max-sm:hidden flex justify-center font-outfit font-light fixed w-full z-10 py-[1%] bg-bob-background">
        <div className="flex justify-between w-8/12 md:w-11/12 ">
          <div className="w-2/12 flex justify-start">bobbylerias</div>
          <div className="flex justify-center space-x-[7%] w-full">
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-75}
              duration={250}
              className="text-black no-underline cursor-pointer"
            >
              projects
            </ScrollLink>
            <ScrollLink
              to="experiences"
              offset={-75}
              smooth={true}
              duration={250}
              className="text-black no-underline cursor-pointer"
            >
              experiences
            </ScrollLink>
            <ScrollLink
              to="about"
              offset={-75}
              smooth={true}
              duration={250}
              className="text-black no-underline cursor-pointer"
            >
              about
            </ScrollLink>
            <ScrollLink
              to="contact"
              offset={-75}
              smooth={true}
              duration={250}
              className="text-black no-underline cursor-pointer"
            >
              contact
            </ScrollLink>
          </div>
          <div className="w-2/12 flex justify-end">
            <Link
              target="_blank"
              href="resume.pdf"
              className="no-underline text-black"
            >
              resume
            </Link>
          </div>
        </div>
      </div>
      <div
        ref={componentRef}
        className="sm:hidden w-full flex justify-between items-center px-4 py-3 fixed bg-bob-background z-10"
      >
        <div className="font-outfit">bobbylerias</div>
        <div
          ref={componentRef}
          className="text-xl"
          onClick={() => setToggle(!toggle)}
        >
          <RxHamburgerMenu />
        </div>
      </div>
      {toggle && (
        <>
          <div className="sm:hidden z-10 fixed right-0 mt-[10%] mr-[4%]">
            <div>
              <div className="bg-bob-background border rounded-2xl flex font-outfit flex-col justify-center items-center space-x-[7%] w-full px-4 py-3">
                <ScrollLink
                  to="projects"
                  smooth={true}
                  offset={-75}
                  duration={250}
                  className="text-black no-underline cursor-pointer "
                >
                  projects
                </ScrollLink>
                <ScrollLink
                  to="experiences"
                  offset={-75}
                  smooth={true}
                  duration={250}
                  className="text-black no-underline cursor-pointer "
                >
                  experiences
                </ScrollLink>
                <ScrollLink
                  to="about"
                  offset={-75}
                  smooth={true}
                  duration={250}
                  className="text-black no-underline cursor-pointer"
                >
                  about
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  offset={-75}
                  smooth={true}
                  duration={250}
                  className="text-black no-underline cursor-pointer"
                >
                  contact
                </ScrollLink>
                <Link
                  target="_blank"
                  href="resume.pdf"
                  className="no-underline text-black"
                >
                  resume
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
