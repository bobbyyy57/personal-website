import React from "react";
import RParts from "../public/rparts.png";
import RPartsLogo from "../public/rpartsLogo.png";
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-6/12">
          <div className="w-full pb-[5%]">
            <div className="w-5/12">
              <div className="font-montserrat font-medium text-bob-boldGray text-lg">
                PROJECTS
              </div>
              <div className="font-outfit font-extralight text-bob-borderGray text-xs">
                a few fun projects made fra few fun projects made fn projects
                made era few fun projects made f
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-[3%]">
            <ProjectLeft
              logo={RPartsLogo}
              screenshot={RParts}
              description="a few fun projects made fra few fun projects made fn
                    projects made era few fun projects made f a few fun projects
                    made fra few fun projects made fn projects made era few fun
                    projects made f"
            />
            <ProjectRight
              logo={RPartsLogo}
              screenshot={RParts}
              description="a few fun projects made fra few fun projects made fn
                    projects made era few fun projects made f a few fun projects
                    made fra few fun projects made fn projects made era few fun
                    projects made f"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
