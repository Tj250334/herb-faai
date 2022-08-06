import React from "react";
import { BsTelephone } from "react-icons/bs";
import image1 from "../images/img1.svg";
const Section = () => {
  return (
    <div className=" border py-40 max-w-3xl mx-auto">
      <div className="flex items-center justify-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900 uppercase tracking-wide">
            Contact us
          </h1>
          <h2 className="text-5xl font-bold text-sky-800 pt-5">
            Mahidol University
          </h2>
          <p className="font-semibold pt-5 text-justify w-10/12 pl-2">
            Faculty of pharmacy 447 Thanon Si Ayutthaya, Thung Phaya Thai,
            Ratchathewi, Bangkok 10400
          </p>
          <div className="flex item-center font-semibold pt-2 text-justify w-4/5 pl-2 space-x-1">
            <span className=" pt-1">
              <BsTelephone />
            </span>{" "}
            <p>0-2354-4327, 0-2644-8677-91 ext. 5305</p>
            {/* <p className="border-1 border-sky-500">
              0-2354-4327, 0-2644-8677-91 ext. 5305
            </p> */}
          </div>
        </div>
        <img src={image1} alt="" />
      </div>
    </div>
  );
};
export default Section;
