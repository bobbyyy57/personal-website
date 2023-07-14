import React from "react";
import Image from "next/image";
import Bob from "../public/bob.png";
import Cutie from "../public/cutie.png";

const AboutMe = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-6/12">
          <div className="w-full pb-[5%]">
            <div className="w-5/12">
              <div className="font-montserrat font-medium text-bob-boldGray text-lg">
                ABOUT ME
              </div>
              <div className="font-outfit font-extralight text-bob-borderGray text-xs">
                a few fun projects made fra few fun projects made fn projects
                made era few fun projects made f
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="">
              <div className="grid grid-cols-12">
                <div className="col-span-4 mb-2 mr-2">
                  <Image
                    src={Bob}
                    alt="Landing"
                    layout="responsive"
                    className="aspect-square rounded-2xl"
                  />
                </div>
                <div className="col-span-8 border rounded-2xl w-full">
                  <div className="p-4 font-outfit ">adsfadfasd</div>
                </div>
              </div>
            </div>
            <div className="h-fit">
              <div className="grid grid-cols-12 h-full ">
                <div className="col-span-7">
                  <div className="grid grid-rows-7 h-full">
                    <div className="row-span-3 flex">
                      <div className="rounded-2xl border w-7/12 p-4 mr-2">
                        <div className="text-xs font-outfit">
                          UNIVERSITY OF CALIFORNIA, RIVERSIDE
                        </div>
                      </div>
                      <div className="flex items-center w-5/12 mt-2">
                        <Image
                          src={Cutie}
                          alt="Landing"
                          layout="responsive"
                          className="rounded-2xl"
                        />
                      </div>
                    </div>
                    <div className=" uppercase row-span-4 rounded-2xl text-sm font-outfit font-thin bg-bob-orange text-white p-5 mt-2">
                      the human need to understand who you are, what you believe
                      in and what you stand for is fundamental.{" "}
                      <span className="font-normal">
                        {" "}
                        so too is the need to indicate these things to others
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-5 rounded-2xl bg-red-500 mt-2 ml-2">
                  <iframe
                    // style="border-radius:12px"
                    src="https://open.spotify.com/embed/playlist/7AilqvU8xj4h6Zn5ti9JZt?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
