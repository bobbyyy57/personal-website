import React from "react";

// const Landing = () => {
//   return (
//     <>
//       <div className="flex  justify-center items-center w-6/12 bg-yellow-500">
//         <div className="flex flex-col justify-center items-center space-y-[3%]">
//           <div className="flex bg-green-500 w-full">
//             <div className=" mr-[5%] text-2xl font-outfit font-medium -tracking-[0.08em] -space-y-6 text-black w-full">
//               <div className="hover:text-bob-orange duration-300">BOBBY</div>
//               <div>LERIAS</div>
//             </div>
//             <div className="border-l-[1px] w-full">
//               <div className="ml-[10%] font-montserrat text-bob-borderGray font-thin text-xl flex justify-center items-start flex-col  h-full">
//                 <div className="">
//                   <div>GAMER</div>
//                   <div>FOODIE</div>
//                   <div>RUNNER</div>
//                   <div>THEATER NERD</div>
//                   <div className="font-semibold text-bob-boldGray ">
//                     UI/UX DESIGNER
//                   </div>
//                   <div className="font-semibold text-bob-boldGray ">
//                     SOFTWARE ENGINEER
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="bg-red-500">
//             <div className="border rounded w-full font-outfit font-extralight text-xs text-bob-borderGray  px-[5%] py-[3%]">
//               software engineer and ui/ux designer in southern california. catch
//               me shamelessly belting show tunes in the car or playing overwatch.
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const Landing = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-between items-center space-y-[5%] w-full">
            <div className="flex  w-full">
              <div className=" mr-[5%]  text-9xl font-outfit font-medium -tracking-[0.08em] -space-y-6 text-black w-full">
                <div className="hover:text-bob-orange duration-300">BOBBY</div>
                <div>LERIAS</div>
              </div>
              <div className="border-l-[1px] w-full">
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
            <div className="border rounded w-full font-outfit font-extralight text-sm text-bob-borderGray  px-[5%] py-[3%]">
              software engineer and ui/ux designer in southern california. catch
              me shamelessly belting show tunes in the car or playing overwatch.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
