import React from "react";
import { AiOutlineMenu } from "react-icons/ai";


const Navbar: React.FC = () => {
  return (
    <div className="">
      <div className="fixed w-full top-0 flex border-1 p-4 space-x-8 shadow bg-gray-400">
        {/* <div className="flex items-center">
            
          </div> */}
        <button className="border-1 rounded p-2 shadow hover:bg-gray-300">
          <AiOutlineMenu className="" />
        </button>
        <div className="py-1">Contact Up</div>
        <div className="py-1">Social</div>
        <div className="py-1 flex-grow text-right">Company Logo</div>
      </div>
    </div>
  );
};
export default Navbar;
