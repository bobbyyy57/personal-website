import React from "react";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-center font-outfit font-light fixed w-full z-10 py-[1%] bg-bob-background">
        <div className="flex justify-between w-8/12">
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
          <div className="w-2/12 flex justify-end">resume</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
