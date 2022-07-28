import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Li = ({ txt }: { txt: string }) => {
  return (
    <li className="pt-1.5  hover:underline hover:text-sky-300">
      <a href="#">{txt}</a>
    </li>
  );
};
const Navbar = () => {
  return (
    <nav className={`flex  p-4 shadow sticky top-0 `}>
      {/* Hide side bar or something */}
      <div className=" py-1 text-lg font-bold uppercase tracking-wide  hover:text-sky-600">
        <a href="#">pharm</a>
      </div>

      <ul className="flex flex-grow space-x-8 ml-4 mr-4 font-medium">
        <Li txt="Service" />
        <Li txt="Database" />
        <Li txt="ANN" />
        <Li txt="About" />

        <li className="pt-1.5 flex-grow text-right  hover:underline hover:text-sky-300">
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
