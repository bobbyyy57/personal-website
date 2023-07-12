import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const faqs = [
  {
    q: "This is a question is it 1?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
  {
    q: "This is a question is it 2?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
  {
    q: "This is a question is it 3?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
  {
    q: "This is a question is it 4?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
  {
    q: "This is a question is it 5?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
  {
    q: "This is a question is it 6?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
  {
    q: "This is a question is it 7?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
  {
    q: "This is a question is it 8?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
];

const Question = ({ index, question, answer }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Col className="pb-2 !m-0 w-full">
      <Accordion.Item
        className={"!border-none !p-0 underlayColor=transparent"}
        eventKey={index}
      >
        <Accordion.Button
          onClick={() => setToggle(!toggle)}
          className="!bg-bob-background border rounded text-black after:hidden p-0 focus:!shadow-none"
        >
          <div className=" w-full flex justify-between items-center p-3">
            <p className="text-black text-sm m-0 ">{question}</p>
            <div className="text-xl m-2 ">
              {toggle ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
        </Accordion.Button>

        <Accordion.Body
          className="!bg-bob-background flex justify-left items-center border"
          eventKey={index}
        >
          <p className=" text-black text-sm p-3 ">{answer}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Col>
  );
};

const FAQ = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-6/12">
        <div className="w-full pb-[5%]">
          <div className="w-5/12">
            <div className="font-montserrat font-medium text-bob-boldGray text-lg">
              PROJECTS
            </div>
            <div className="font-outfit font-extralight text-bob-borderGray text-xs">
              a few fun projects made fra few fun projects made fn projects made
              era few fun projects made f
            </div>
          </div>
        </div>
        <Row className="w-full">
          <Col className="m-0 p-0 w-full">
            <div className="flex justify-center">
              <Row className="w-full flex m-0 p-0">
                <Accordion
                  className="w-full !p-0"
                  defaultActiveKey="0"
                  alwaysOpen
                >
                  {faqs.slice(0, faqs.length / 2).map((question, index) => (
                    <Question
                      question={question.q}
                      answer={question.a}
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

export default FAQ;
