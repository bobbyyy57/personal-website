import React from "react";

const Landing = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center  w-6/12 space-y-[3%]">
          <div className="grid grid-cols-9">
            <div className="col-start-1 col-end-5 text-9xl font-outfit font-medium -tracking-[0.08em] -space-y-6 text-bob-orange">
              <div>BOBBY</div>
              <div>LERIAS</div>
            </div>
            <div className="col-start-6 col-end-10 border-l-[1px]">
              <div className="ml-[10%] font-montserrat text-bob-borderGray font-thin text-xl flex justify-center items-start flex-col  h-full">
                <div className="">
                  <div>GAMER</div>
                  <div>FOODIE</div>
                  <div>RUNNER</div>
                  <div>THEATER NERD</div>
                  <div className="font-semibold text-bob-boldGray ">
                    UI/UX DESIGNER
                  </div>
                  <div className="font-semibold text-bob-boldGray ">
                    SOFTWARE ENGINEER
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded w-full font-outfit font-extralight text-xs text-bob-borderGray  px-[5%] py-[3%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
