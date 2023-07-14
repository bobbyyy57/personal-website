import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-center font-outfit font-light pt-[1%]">
        <div className="flex justify-between w-8/12">
          <div className="w-2/12 flex justify-start">bobbylerias</div>
          <div className="flex justify-center space-x-[7%] w-full">
            <div>projects</div>
            <div>experiences</div>
            <div>about</div>
            <div>contact</div>
          </div>
          <div className="w-2/12 flex justify-end">resume</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
