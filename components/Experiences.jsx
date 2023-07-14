import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import Experience from "./Experience";

const info = [
  {
    logo: "/ablogo.png",
    company: "ANHEUSER-BUSCH",
    date: "SUMMER 2022",
    role: "TECHNOLOGY TRAINEE PROGRAM INTERN",
    description:
      "Assisted wholesalers in the North American Zone through Anheuser-Busch’s transition from Salesforce to BeerTech’s new OnePortal software by creating 3 standard operating procedures that covered Forecasting, Ordering, and Appointments \n \nOrganized user data in PowerBI, MixPanel, HotJar, and DataDog dashboards that aided both developer and functional teams in proceeding with production rollout\n \nDeveloped and designed a Support Tab using React, TailwindCSS, and Figma that centralized user experience on OnePortal",
    tech: ["REACT", "TAILWINDCSS", "FIGMA", "POWERBI"],
    attachment:
      "https://drive.google.com/file/d/1OULdxSTKVaPPK2LG7CWOYIPn6ZTa6X3b/view?usp=sharing",
    attachment2: "",
  },
  {
    logo: "/NSF-1.png",
    company: "UC RIVERSIDE - MACREU RESEARCH",
    date: "SUMMER 2021",
    role: "UNDERGRADUATE RESEARCHER AND INTERN",
    description:
      " Focused on performance efficiency by optimizing existing matrix-multiplication operations on GPUs and CPUs using a Directed Acyclic Graph, or DAG, based implementation of Strassen-Winograd’s Algorithm \n\nIncreased matrix-multiplication runtime by 8.0x by using the DAG Strassen-Winograd Algorithm on GPUs\n\nContributed to research presented at The International Conference for High Performance Computing, Networking, Storage, and Analysis in St. Louis, Missouri",
    tech: [
      "C++",
      "ROCm (Radeon Open Ecosystem)",
      "HIP (Heterogenous-Compute Interface for Portability)",
    ],
    attachment:
      "https://drive.google.com/file/d/1GNEpPl7LUM315xv7WR7d6qwo9bJdr-ww/view?usp=sharing",
    attachment2:
      "https://drive.google.com/file/d/13mvH3dPVl_tbB6bN0vU4uEMbbEfamtaE/view?usp=sharing",
  },
];

// const Experience = ({
//   index,
//   logo,
//   company,
//   role,
//   date,
//   tech,
//   description,
//   attachment,
//   attachment2,
// }) => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <Col className="pb-2 !m-0 w-full !border-none font-outfit">
//       <Accordion.Item
//         className="!border !rounded !p-0 underlayColor=transparent"
//         eventKey={index}
//       >
//         <Accordion.Button
//           onClick={() => setToggle(!toggle)}
//           className="!bg-bob-background text-black after:hidden p-0 focus:!shadow-none  shadow-none"
//         >
//           <div className="flex justify-between items-center p-3">
//             <div className="flex items-center">
//               <div className="w-2/12">
//                 <Image
//                   src={logo}
//                   alt="Landing"
//                   layout="responsive"
//                   className="p-1"
//                   width="1"
//                   height="1"
//                 />
//               </div>
//               <div className="w-10/12">
//                 <div className="text-black  font-medium text-sm ml-5 ">
//                   {company}
//                 </div>
//                 <div className="text-black  font-extralight text-sm ml-5 ">
//                   {role}
//                 </div>
//                 <div className="text-black pt-1 font-montserrat font-thin text-xs ml-5 ">
//                   {date}
//                 </div>
//               </div>
//             </div>

//             <div className="text-2xl text-black m-2">
//               {toggle ? <PiCaretDownThin /> : <PiCaretRightThin />}
//             </div>
//           </div>
//         </Accordion.Button>

//         <Accordion.Body
//           className="!bg-bob-background p-0 flex justify-left items-center rounded"
//           eventKey={index}
//         >
//           <div className="flex items-start px-3 pb-3 w-full">
//             <div className="flex flex-col justify-start">
//               <div className="flex">
//                 <div className="w-2/12 invisible">
//                   <Image
//                     src={logo}
//                     alt="Landing"
//                     layout="responsive"
//                     className="p-1"
//                     width="1"
//                     height="1"
//                   />
//                 </div>
//                 <div className="flex flex-col w-10/12 ml-5">
//                   <div className="text-black text-sm font-extralight whitespace-pre-line ">
//                     {description}
//                   </div>
//                   <div className="flex justify-between mt-4 ">
//                     <Row className="w-9/12 flex  items-center  h-full">
//                       {tech.map((entry, index) => (
//                         <Col
//                           key={index}
//                           className="uppercase whitespace-nowrap font-outfit text-xs font-light rounded-full m-1 py-1 px-3 border !max-w-fit "
//                         >
//                           {entry}
//                         </Col>
//                       ))}
//                     </Row>
//                     <div className="w-3/12 flex justify-end items-center space-x-2">
//                       {attachment !== "" && (
//                         <Link target="_blank" href={attachment}>
//                           <div className="text-black duration-300 hover:-translate-y-1">
//                             <FiPaperclip />
//                           </div>
//                         </Link>
//                       )}
//                       {attachment2 !== "" && (
//                         <Link target="_blank" href={attachment2}>
//                           <div className="text-black text-xl duration-300 hover:-translate-y-1">
//                             <HiOutlineNewspaper />
//                           </div>
//                         </Link>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="text-2xl m-2 invisible ">
//               {toggle ? <PiCaretDownThin /> : <PiCaretRightThin />}
//             </div>
//           </div>
//         </Accordion.Body>
//       </Accordion.Item>
//     </Col>
//   );
// };

const Experiences = () => {
  const [activeKey, setActiveKey] = useState("0");

  const handleAccordionToggle = (index) => {
    setActiveKey((prevKey) => (prevKey === index ? null : index));
  };

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
                  activeKey={activeKey}
                  onSelect={handleAccordionToggle}
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
    </div>
  );
};

export default Experiences;
