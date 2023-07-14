import React from "react";
import RParts from "../public/rparts.png";
import RPartsLogo from "../public/rpartsLogo.png";
import beatdropLogo from "../public/beatdropLogo.png";
import novoLogo from "../public/novoLogo.png";
import ProjectLeft from "./ProjectLeft";
import novo from "../public/novo.png";
import beatdrop from "../public/beatdrop.png";
import ProjectRight from "./ProjectRight";

const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="flex flex-col justify-center items-center w-6/12"
      >
        <div className="flex flex-col justify-center items-center ">
          <div className="w-full pb-[5%]">
            <div className="w-5/12">
              <div className="font-montserrat font-medium text-black text-lg">
                PROJECTS
              </div>
              <div className="font-outfit font-extralight text-bob-borderGray text-xs">
                a few fun projects made fra few fun projects made fn projects
                made era few fun projects made f
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-[5%]">
            <ProjectLeft
              logo={novoLogo}
              screenshot={novo}
              description="a dating web application focused on fostering connections with individuals seeking new experiences. Share what you’ve been wanting to experience and connect with others who want to do the same."
            />
            <ProjectRight
              logo={RPartsLogo}
              screenshot={RParts}
              description="a student-based second-hand marketplace for engineering students at UC Riverside. Actively decreasing student fees and assisting those who are aiming to learn, grow, and push limits."
            />
            <ProjectLeft
              logo={beatdropLogo}
              screenshot={beatdrop}
              description="a geographic-based music-sharing web application that allows users to hear the world from another’s perspective 
              Catalog special moments by linking current location to a song and sharing with world in the form of a BeatDrop
              "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
