/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import RParts from "../public/rparts.png";
import RPartsLogo from "../public/rpartsLogo.png";
import beatdropLogo from "../public/beatdropLogo.png";
import novoLogo from "../public/novoLogo.png";
import ProjectLeft from "./ProjectLeft";
import novo from "../public/novo.png";
import beatdrop from "../public/beatdrop.png";
import ProjectRight from "./ProjectRight";
import Image from "next/image";
import Overtime from "../public/overtime2.png";
import Vr from "../public/vr2.png";
import Link from "next/link";

const Projects = () => {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  return (
    <>
      <div id="projects" className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full pb-[5%]">
            <div className="w-5/12">
              <div className="font-montserrat font-medium text-black text-lg">
                PROJECTS
              </div>
              <div className="font-outfit font-extralight text-bob-borderGray text-xs">
                fun projects ive done in my time where ive held the roles of
                software engineer, ui/ux designer, and product manager.
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-[5%]">
            <ProjectLeft
              logo={novoLogo}
              screenshot={novo}
              description="a dating web application focused on fostering connections with individuals seeking new experiences. Share what you’ve been wanting to experience and connect with others who want to do the same."
              github="https://github.com/bobbyyy57/NOVO"
              figma="https://www.figma.com/file/lvAoZ2MpsxWq7zUQ1TSaMk/NOVO?type=design&node-id=0%3A1&mode=design&t=6xgQuQln9pu6vojn-1"
              dev=""
              nextjs={true}
              fig={true}
              mongo={true}
              role="Developer, Designer, Product Manager"
            />
            <ProjectRight
              logo={RPartsLogo}
              screenshot={RParts}
              description="a student-based second-hand marketplace for engineering students at UC Riverside. Actively decreasing student fees and assisting those who are aiming to learn, grow, and push limits."
              github="https://github.com/shahdivyank/r-parts"
              figma="https://www.figma.com/file/wecb185mWk9vv38hyGGbDF/R'Parts?type=design&node-id=0%3A1&mode=design&t=yHlFI64EB79R1hvM-1"
              dev=""
              nextjs={true}
              fig={true}
              mongo={false}
              role="Developer & Designer"
            />
            <ProjectLeft
              logo={beatdropLogo}
              screenshot={beatdrop}
              description="a geographic-based music-sharing web application that allows users to hear the world from another’s perspective
              "
              // Catalog special moments by linking current location to a song and sharing with world in the form of a BeatDrop
              github="https://github.com/shahdivyank/beatdrop/blob/dev/components/View.jsx"
              figma="https://www.figma.com/file/Hwiv8KHufaQZnrn2YiJQ1y/BeatDrop?type=design&node-id=0%3A1&mode=design&t=BMWy7fTlkpNOIfjs-1"
              dev=""
              nextjs={true}
              fig={true}
              mongo={false}
              role="Developer & Designer"
            />
            <div className="w-full border-t pt-[5%] flex justify-center">
              <div className="w-5/12">
                {/* <div className="font-montserrat font-medium text-black">
                  GAMES
                </div> */}
                <div className="font-outfit font-extralight text-bob-borderGray text-xs text-center">
                  a few side projects that ive done for fun that include some
                  video games. held roles as a developer and artist.
                </div>
              </div>
            </div>

            <div className="flex w-full space-x-[2%]">
              <Link
                href=""
                className="relative w-full duration-300 hover:-translate-y-1"
                onMouseEnter={() => setIsHover1(true)}
                onMouseLeave={() => setIsHover1(false)}
              >
                {isHover1 && (
                  <div className="w-full h-full absolute z-[5] p-6 rounded-2xl flex flex-col justify-end bg-gray-700 bg-opacity-70 transition-all ease-in-out">
                    <div className="">
                      <p className="text-xl text-white font-semibold">
                        Overtime
                      </p>
                      <p className="text-xs text-white font-light">
                        entering the workforce as an intern is tough. take on
                        the challenge of fighting off coworkers to help Andy the
                        Intern get home.
                      </p>
                      <p className="text-xs text-white font-medium">
                        Role: Artist
                      </p>
                      {/* <p className="text-xs text-white">{project.description}</p> */}
                    </div>
                  </div>
                )}
                <Image
                  src={Overtime}
                  alt="Landing"
                  layout="responsive"
                  className="rounded-2xl"
                />
              </Link>

              <Link
                href="https://bobbyyy57.itch.io/bobrods"
                target="_blank"
                className="relative w-full duration-300 hover:-translate-y-1"
                onMouseEnter={() => setIsHover2(true)}
                onMouseLeave={() => setIsHover2(false)}
              >
                {isHover2 && (
                  <div className="w-full h-full absolute z-[5] p-6 rounded-2xl flex flex-col justify-end bg-gray-700 bg-opacity-70 transition-all ease-in-out">
                    <div className="">
                      <p className="text-xl text-white font-semibold">
                        Bob&Rod's
                      </p>
                      <p className="text-xs text-white font-light">
                        experience a fun-filled carnival in a VR environment.
                        Rank up in points to test and perfect your carnival
                        skills. Go now and have fun!
                      </p>
                      <p className="text-xs text-white font-medium">
                        Role: Developer and Designer
                      </p>
                      {/* <p className="text-xs text-white">{project.description}</p> */}
                    </div>
                  </div>
                )}
                <Image
                  src={Vr}
                  alt="Landing"
                  layout="responsive"
                  className="rounded-2xl"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
