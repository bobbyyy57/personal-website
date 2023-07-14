import React from "react";
import { LuMail } from "react-icons/lu";
import { PiPhoneBold } from "react-icons/pi";
import { FiPaperclip } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const ContactMe = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-6/12">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-between items-center w-full pb-[5%]">
            <div className="w-5/12">
              <div className="font-montserrat font-medium text-bob-boldGray text-lg">
                CONTACT ME
              </div>
              <div className="font-outfit font-extralight text-bob-borderGray text-xs">
                a few fun projects made fra few fun projects made fn projects
                made era few fun projects made f
              </div>
            </div>
            <div>
              <div className="flex text-2xl space-x-4">
                <LuMail className="duration-300 hover:-translate-y-1" />
                <PiPhoneBold className="duration-300 hover:-translate-y-1" />
                <FiPaperclip className="duration-300 hover:-translate-y-1" />
                <div className="border-l pl-5 border-bob-borderGray flex space-x-4">
                  <BsLinkedin className="duration-300 hover:-translate-y-1" />
                  <BsGithub className="duration-300 hover:-translate-y-1" />
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
