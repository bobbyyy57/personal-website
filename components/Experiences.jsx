import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Col, Row } from "react-bootstrap";
// import { useState } from "react";
import Experience from "./Experience";
import { motion } from "framer-motion";

const info = [
  {
    logo: "/kaboLogo2.png",
    company: "KABO! Studio",
    date: "AUGUST 2023 - PRESENT",
    role: "CO-FOUNDER | WEB DEVELOPER & UI/UX DESIGNER",
    description:
      "Managed 2+ freelance projects from client communication and project estimation to delivery, maintaining a high level of client satisfaction while boosting business’ online presence by 50% \n\n Created wireframes, prototypes, and mockups using Figma to visualize design concepts and workflow \n\n Collaborated with clients to understand their specific requirements, translating them into functional website designs and features using Next.js and TailwindCSS",
    tech: ["NEXT.JS", "TAILWINDCSS", "FIGMA"],
    attachment: "https://kabostudio.vercel.app",
    attachment2: "",
  },
  {
    logo: "/citruslogo.png",
    company: "CITRUS HACK 2023",
    date: "SPRING 2023",
    role: "SOFTWARE ENGINEER & UI/UX COMMITTEE",
    description:
      "Developed custom Next.js components in accordance with the design specifications provided by the UI/UX team, resulting in visually appealing and user-friendly interfaces \n\nEnsured design feasibility and responsiveness across desktop, tablet, and mobile screen as a designer and developer",
    tech: ["TYPESCRIPT", "TAILWINDCSS", "FIGMA"],
    attachment: "",
    attachment2: "",
  },
  {
    logo: "/acmlogo.png",
    company: "ACM  -  UC RIVERSIDE",
    date: "Winter 2023",
    role: "ACM Project Developer",
    description:
      "Held the role as a Software Engineer in the ACM Membership Portal team\n\nReconfigured and implemented responsive design elements to enhance user experience on various front-end platforms \n\n Maintained and improved front-end functionality of multiple websites through regular updates and bug fixing",
    tech: ["Next.js", "TAILWINDCSS", "FIGMA"],
    attachment: "",
    attachment2: "",
  },
  {
    logo: "/ablogo.png",
    company: "ANHEUSER-BUSCH",
    date: "SUMMER 2022",
    role: "TECHNOLOGY TRAINEE PROGRAM INTERN",
    description:
      "Assisted wholesalers in the North American Zone through Anheuser-Busch’s transition from Salesforce to BeerTech’s new OnePortal software by creating 3 standard operating procedures that covered Forecasting, Ordering, and Appointments \n \nOrganized user data in PowerBI, MixPanel, HotJar, and DataDog dashboards that aided both developer and functional teams in proceeding with production rollout\n \nDeveloped and designed a Support Tab using React, TailwindCSS, and Figma that centralized user experience on OnePortal",
    tech: ["REACT", "TAILWINDCSS", "FIGMA", "POWERBI"],
    attachment: "https://youtu.be/t6rrBEcykrc",
    attachment2: "",
  },
  {
    logo: "/NSF-1.png",
    company: "UC RIVERSIDE - MACREU RESEARCH",
    date: "SUMMER 2021",
    role: "UNDERGRADUATE RESEARCHER & INTERN",
    description:
      " Focused on performance efficiency by optimizing existing matrix-multiplication operations on GPUs and CPUs using a Directed Acyclic Graph, or DAG, based implementation of Strassen-Winograd’s Algorithm \n\nIncreased matrix-multiplication runtime by 8.0x by using the DAG Strassen-Winograd Algorithm on GPUs\n\nContributed to research presented at The International Conference for High Performance Computing, Networking, Storage, and Analysis in St. Louis, Missouri",
    tech: ["C++", "ROCm ", "HIP"],
    // (Heterogenous-Compute Interface for Portability)
    // (Radeon Open Ecosystem)
    attachment:
      "https://drive.google.com/file/d/1GNEpPl7LUM315xv7WR7d6qwo9bJdr-ww/view?usp=sharing",
    attachment2:
      "https://drive.google.com/file/d/13mvH3dPVl_tbB6bN0vU4uEMbbEfamtaE/view?usp=sharing",
  },
];

const Experiences = () => {
  // const [activeKey, setActiveKey] = useState("0");

  // const handleAccordionToggle = (index) => {
  //   setActiveKey((prevKey) => (prevKey === index ? null : index));
  // };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 7, transition: { delay: 1.5 } }}
      exit={{ opacity: 0, y: 0 }}
      id="experiences"
      className="flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="w-full pb-[5%] max-sm:flex max-sm:justify-center">
          <div className="w-5/12 max-sm:w-8/12 max-sm:pb-2">
            <div className="max-sm:text-center font-montserrat font-medium text-black text-lg">
              EXPERIENCES
            </div>
            <div className="max-sm:text-center font-outfit font-extralight text-bob-borderGray text-xs">
              opportunities in which ive learned so much — ranging from industry
              experience to school involvement
            </div>
          </div>
        </div>
        <Row className="w-full ">
          <Col className="m-0 p-0 w-full">
            <div className="flex justify-center">
              <Row className="w-full flex m-0 p-0 ">
                <Accordion
                  className="w-full !p-0"
                  // activeKey={activeKey}
                  // onSelect={handleAccordionToggle}
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
                      attachment={exp.attachment}
                      attachment2={exp.attachment2}
                      index={index.toString()}
                      key={index}
                    />
                  ))}
                </Accordion>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </motion.div>
  );
};

export default Experiences;
