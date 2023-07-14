import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { PiCaretRightThin, PiCaretDownThin } from "react-icons/pi";
// import { FaMinus } from "react-icons/fa";
import Image from "next/image";

const info = [
  {
    logo: "/ablogo.png",
    company: "ANHEUSER-BUSCH",
    date: "SUMMER 2022",
    role: "TECHNOLOGY TRAINEE PROGRAM INTERN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
    tech: ["NEXT.JS", "TAILWINDCSS", "FIGMA", "MONGODB"],
  },
  {
    logo: "/ablogo.png",
    company: "ANHEUSER-BUSCH",
    date: "SUMMER 2022",
    role: "TECHNOLOGY TRAINEE PROGRAM INTERN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
    tech: ["NEXT.JS", "TAILWINDCSS", "FIGMA", "MONGODB"],
  },
  {
    logo: "/ablogo.png",
    company: "ANHEUSER-BUSCH",
    date: "SUMMER 2022",
    role: "TECHNOLOGY TRAINEE PROGRAM INTERN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididu sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
    tech: ["NEXT.JS", "TAILWINDCSS", "FIGMA", "MONGODB"],
  },
];

const Experience = ({
  index,
  logo,
  company,
  role,
  date,
  tech,
  description,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Col className="pb-2 !m-0 w-full !border-none font-outfit">
      <Accordion.Item
        className="!border !rounded !p-0 underlayColor=transparent"
        eventKey={index}
      >
        <Accordion.Button
          onClick={() => setToggle(!toggle)}
          className="!bg-bob-background text-black after:hidden p-0 focus:!shadow-none  shadow-none"
        >
          <div className="flex justify-between items-center p-3">
            <div className="flex items-center">
              <div className="w-2/12">
                <Image
                  src={logo}
                  alt="Landing"
                  layout="responsive"
                  className="p-1"
                  width="1"
                  height="1"
                />
              </div>
              <div className="w-10/12">
                <div className="text-black  font-medium text-sm ml-5 ">
                  {company}
                </div>
                <div className="text-black  font-extralight text-sm ml-5 ">
                  {role}
                </div>
                <div className="text-black pt-1 font-montserrat font-thin text-xs ml-5 ">
                  {date}
                </div>
              </div>
            </div>

            <div className="text-2xl text-black m-2">
              {toggle ? <PiCaretDownThin /> : <PiCaretRightThin />}
            </div>
          </div>
        </Accordion.Button>

        <Accordion.Body
          className="!bg-bob-background p-0 flex justify-left items-center rounded"
          eventKey={index}
        >
          <div className="flex items-start px-3 pb-3 w-full">
            <div className="flex flex-col justify-start">
              <div className="flex">
                <div className="w-2/12 invisible">
                  <Image
                    src={logo}
                    alt="Landing"
                    layout="responsive"
                    className="p-1"
                    width="1"
                    height="1"
                  />
                </div>
                <div className="flex flex-col w-10/12 ml-5 ">
                  <div className="text-black text-sm font-extralight ">
                    {description}
                  </div>
                  <Row className="mt-4">
                    {tech.map((entry, index) => (
                      <Col
                        key={index}
                        className="uppercase font-outfit text-xs font-light rounded-full mx-1 py-1 px-3 border !max-w-fit "
                      >
                        {entry}
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </div>

            <div className="text-2xl m-2 invisible ">
              {toggle ? <PiCaretDownThin /> : <PiCaretRightThin />}
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Col>
  );
};

const Experiences = () => {
  return (
    <div
      id="experiences"
      className="flex flex-col justify-center items-center w-6/12"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="w-full pb-[5%]">
          <div className="w-5/12">
            <div className="font-montserrat font-medium text-black text-lg">
              EXPERIENCES
            </div>
            <div className="font-outfit font-extralight text-bob-borderGray text-xs">
              a few fun projects made fra few fun projects made fn projects made
              era few fun projects made f
            </div>
          </div>
        </div>
        <Row className="w-full ">
          <Col className="m-0 p-0 w-full">
            <div className="flex justify-center">
              <Row className="w-full flex m-0 p-0 ">
                <Accordion
                  className="w-full !p-0"
                  defaultActiveKey="0"
                  alwaysOpen
                >
                  {info.map((exp, index) => (
                    <Experience
                      logo={exp.logo}
                      company={exp.company}
                      role={exp.role}
                      date={exp.date}
                      description={exp.description}
                      tech={exp.tech}
                      index={index}
                      key={index}
                    />
                  ))}
                </Accordion>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Experiences;
