import React from "react";
import { LuMail } from "react-icons/lu";
import { PiPhoneBold } from "react-icons/pi";
import { GrDocumentText } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const ContactMe = () => {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col justify-center items-center w-full"
      >
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex max-sm:flex-col justify-between items-center w-full">
            <div className="w-5/12 max-sm:w-8/12 max-sm:pb-2">
              <div className="max-sm:text-center font-montserrat font-medium text-black text-lg">
                CONTACT ME
              </div>
              <div className="max-sm:text-center font-outfit font-extralight text-bob-borderGray text-xs max-sm:pb-5">
                feel free to contact me by any medium! i am open to talk about
                absolutely anything :)
              </div>
            </div>
            <div>
              <div className="flex text-2xl space-x-4">
                <Link
                  target="_blank"
                  href="mailto:robertjlerias@gmail.com"
                  className="no-underline text-black"
                >
                  <LuMail className="duration-300 hover:-translate-y-1 hover:text-red-600" />
                </Link>

                <Link
                  target="_blank"
                  href={"tel:9513488149"}
                  className="no-underline text-black"
                >
                  <PiPhoneBold className="duration-300 hover:-translate-y-1 hover:text-green-600" />
                </Link>

                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/robertlerias/"
                  className="no-underline text-black "
                >
                  <BsLinkedin className="duration-300 hover:-translate-y-1 hover:text-blue-600" />
                </Link>

                <Link
                  target="_blank"
                  href="resume.pdf"
                  className="no-underline text-black"
                >
                  <GrDocumentText className="duration-300 hover:-translate-y-1 hover:text-yellow-600" />
                </Link>

                <div className="border-l pl-5 border-bob-borderGray flex space-x-4">
                  <Link
                    target="_blank"
                    href="https://github.com/bobbyyy57"
                    className="no-underline text-black"
                  >
                    {" "}
                    <BsGithub className="duration-300 hover:-translate-y-1" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.figma.com/@bobbylerias"
                    className="no-underline text-black"
                  >
                    <FaFigma className="duration-300 hover:-translate-y-1 hover:text-[#A259FF]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
