import React, { useState, useEffect } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Face from "../public/introFace.png";
import Image from "next/image";
import Link from "next/link";

const Intro = () => {
  const text = [
    `hey hey hey, welcome to my little spot on the internet.\n\nmy name is robert, but feel free to call me bobby :)\n\ni appreciate those who are bold, genuine, and unapologetic.\n\nlet me introduce you to who i am.`,
  ];

  const [typedText, setTypedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    let currentText = "";
    let interval;

    const typeText = () => {
      if (currentLineIndex >= text.length) {
        clearInterval(interval);
        setAnimationComplete(true);
        return;
      }

      const currentLine = text[currentLineIndex];

      if (currentText.length < currentLine.length) {
        currentText = currentLine.substring(0, currentText.length + 1);
        setTypedText(currentText);
      } else {
        setCurrentLineIndex((prevIndex) => prevIndex + 1);
        setTimeout(typeText, 2000); // Delay between lines
      }
    };

    if (!animationComplete) {
      interval = setInterval(typeText, 50); // Delay between each character
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentLineIndex, animationComplete]);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col w-1/6 pb-[5%] max-lg:w-2/6 max-md:w-3/6">
          <div className="flex justify-center">
            <div className="flex w-2/12 items-center mb-[10%]">
              <Image
                src={Face}
                alt="Landing"
                layout="responsive"
                className=""
              />
            </div>
          </div>
          <div className="space-y-6 font-extralight font-outfit text-sm">
            <div className="whitespace-pre-line">{typedText}</div>
          </div>
          {animationComplete && (
            <Link
              href="/home"
              className="pt-[15%] duration-300 hover:-translate-y-1 text-black"
            >
              <HiOutlineArrowRight />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Intro;
