/* eslint-disable react/no-unescaped-entities */
import React from "react";
import RParts from "../public/rparts.png";
import RPartsLogo from "../public/rpartsLogo.png";
import BelowZero from "../public/belowzero.png";
import beatdropLogo from "../public/beatdropLogo.png";
import novoLogo from "../public/novoLogo.png";
import belowzeroLogo from "../public/belowzerologo.png";
// import kaboLogo from "../public/kaboLogo.png";
import ProjectLeft from "./ProjectLeft";
import novo from "../public/novo.png";
// import kabo from "../public/kabo.png";
import beatdrop from "../public/beatdrop.png";
import ProjectRight from "./ProjectRight";
import Overtime from "../public/overtime2.png";
import Vr from "../public/vr2.png";
import SideProject from "./SideProject";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <motion.div
        // ref={homeRef}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 7, transition: { delay: 1.25 } }}
        exit={{ opacity: 0, y: 0 }}
        id="projects"
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-full pb-[5%] max-md:flex max-md:justify-center max-md:items-center">
            <div className="w-5/12 max-md:w-8/12 max-md:pb-2">
              <div className="font-montserrat font-medium text-black text-lg max-md:flex max-md:justify-center max-md:items-center  ">
                PROJECTS
              </div>
              <div className="font-outfit font-extralight text-bob-borderGray text-xs max-md:text-center">
                fun projects ive done in my time where ive held the roles as a
                software engineer, ui/ux designer, and product manager.
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-[5%]">
            <ProjectLeft
              logo={RPartsLogo}
              screenshot={RParts}
              description="a student-based second-hand marketplace for engineering students at UC Riverside. Actively decreasing student fees and assisting those who are aiming to learn, grow, and push limits."
              github="https://github.com/shahdivyank/r-parts"
              figma="https://www.figma.com/file/wecb185mWk9vv38hyGGbDF/R'Parts?type=design&node-id=1238%3A67377&mode=design&t=eDfLCm7jDnS4mu0U-1"
              dev=""
              nextjs={true}
              fig={true}
              mongo={false}
              role="Developer & Designer"
            />
            <ProjectRight
              logo={belowzeroLogo}
              screenshot={BelowZero}
              description="Below Zero: Shaved Ice stands for quality, values and the charm that only a family business can provide for 12 years. Freelance Client.  "
              github=""
              figma="https://www.figma.com/proto/mZ3EwlKtkKfNLlq4I83yHe/BelowZero?page-id=0%3A1&type=design&node-id=255-1737&viewport=1056%2C-12407%2C0.49&t=c6xhWxUHiGpgenwf-1&scaling=min-zoom&starting-point-node-id=255%3A1737&show-proto-sidebar=1&mode=design"
              dev=""
              nextjs={true}
              fig={true}
              mongo={false}
              role="Developer & Designer"
            />
            {/* <ProjectLeft
              logo={kaboLogo}
              screenshot={kabo}
              description="a web design and development studio based in California that values the importance of creativity, innovation, and community"
              github="https://github.com/msclal/KABO"
              figma="https://www.figma.com/file/xgqfSJOR6IuCUSpHQSDY9x/KABO-Website?type=design&node-id=0-1&mode=design&t=cQm7tqVKDvm38T4K-0"
              dev=""
              nextjs={true}
              fig={true}
              mongo={false}
              role="Co-Founder, Developer, Designer"
            /> */}
            <ProjectLeft
              logo={novoLogo}
              screenshot={novo}
              description="a dating app focused on fostering connections with individuals seeking new experiences."
              github="https://github.com/bobbyyy57/NOVO"
              figma="https://www.figma.com/file/xgqfSJOR6IuCUSpHQSDY9x/KABO-Website?type=design&node-id=0-1&mode=design&t=cQm7tqVKDvm38T4K-0"
              dev=""
              nextjs={true}
              fig={true}
              mongo={false}
              role="Developer, Designer, Product Manager"
            />
            <ProjectRight
              logo={beatdropLogo}
              screenshot={beatdrop}
              description="a geographic-based music-sharing web application that allows users to hear the world from another’s perspective
              "
              // Catalog special moments by linking current location to a song and sharing with world in the form of a BeatDrop
              github="https://github.com/shahdivyank/beatdrop"
              figma="https://www.figma.com/file/Hwiv8KHufaQZnrn2YiJQ1y/BeatDrop?type=design&node-id=0%3A1&mode=design&t=BMWy7fTlkpNOIfjs-1"
              dev=""
              nextjs={true}
              fig={true}
              mongo={false}
              role="Developer & Designer"
            />
            <div className="w-full border-t pt-[5%] flex justify-center">
              <div className="w-5/12 max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
                {/* <div className="font-montserrat font-medium text-black">
                  GAMES
                </div> */}
                <div className="font-outfit font-extralight  max-md:pb-2 max-md:w-8/12 text-bob-borderGray text-xs text-center">
                  a few side projects that ive done for fun that include some
                  video games. held roles as a developer and artist.
                </div>
              </div>
            </div>

            <div className="flex w-full space-x-[2%]">
              <SideProject
                name="Overtime"
                description="entering the workforce as an intern is tough. take on
              the challenge of fighting off coworkers to help Andy the
              Intern get home."
                role="Artist"
                image={Overtime}
                link="https://bobbyyy57.itch.io/overtime"
              />
              <SideProject
                name="Bob&Rod's"
                description="experience a fun-filled carnival in a VR environment.
              Rank up in points to test and perfect your carnival
              skills. Go now and have fun!"
                role="Developer & Designer"
                image={Vr}
                link="https://bobbyyy57.itch.io/bobrods"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
