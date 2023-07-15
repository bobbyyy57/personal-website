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
        className="flex flex-col justify-center items-center w-6/12"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-between items-center w-full pb-[5%]">
            <div className="w-5/12">
              <div className="font-montserrat font-medium text-black text-lg">
                CONTACT ME
              </div>
              <div className="font-outfit font-extralight text-bob-borderGray text-xs">
                a few fun projects made fra few fun projects made fn project
                made era few fun projects made f
              </div>
            </div>
            <div>
              <div className="flex text-2xl space-x-4">
                <Link
                  target="_blank"
                  href="mailto:robertjlerias@gmail.com"
                  className="no-underline text-black"
                >
                  <LuMail className="duration-300 hover:-translate-y-1" />
                </Link>

                <Link
                  target="_blank"
                  href={"tel:9513488149"}
                  className="no-underline text-black"
                >
                  <PiPhoneBold className="duration-300 hover:-translate-y-1" />
                </Link>

                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/robertlerias/"
                  className="no-underline text-black"
                >
                  <BsLinkedin className="duration-300 hover:-translate-y-1" />
                </Link>

                <Link
                  target="_blank"
                  href="resume.pdf"
                  className="no-underline text-black"
                >
                  <GrDocumentText className="duration-300 hover:-translate-y-1" />
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
                    <FaFigma className="duration-300 hover:-translate-y-1" />
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
