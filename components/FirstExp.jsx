import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { PiCaretRightThin, PiCaretDownThin } from "react-icons/pi";
import Image from "next/image";
import { FiPaperclip } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi";
import Link from "next/link";

const FirstExp = ({
  index,
  logo,
  company,
  role,
  date,
  tech,
  description,
  attachment,
  attachment2,
}) => {
  const [toggle, setToggle] = useState(true);

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
                <div className="flex flex-col w-10/12 ml-5">
                  <div className="text-black text-sm font-extralight whitespace-pre-line ">
                    {description}
                  </div>
                  <div className="flex justify-between mt-4 ">
                    <Row className="w-9/12 flex  items-center  h-full">
                      {tech.map((entry, index) => (
                        <Col
                          key={index}
                          className="uppercase whitespace-nowrap font-outfit text-xs font-light rounded-full m-1 py-1 px-3 border !max-w-fit "
                        >
                          {entry}
                        </Col>
                      ))}
                    </Row>
                    <div className="w-3/12 flex justify-end items-center space-x-2">
                      {attachment !== "" && (
                        <Link target="_blank" href={attachment}>
                          <div className="text-black duration-300 hover:-translate-y-1">
                            <FiPaperclip />
                          </div>
                        </Link>
                      )}
                      {attachment2 !== "" && (
                        <Link target="_blank" href={attachment2}>
                          <div className="text-black text-xl duration-300 hover:-translate-y-1">
                            <HiOutlineNewspaper />
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
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

export default FirstExp;
