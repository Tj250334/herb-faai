import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <nav className={`flex border-1 p-4 shadow sticky top-0 bg-white`}>
      
      {/* Hide side bar or something */}
      <button className="border-1 rounded p-2 shadow hover:bg-gray-300">
        <AiOutlineMenu className="" />
      </button>


      <ul className="flex flex-grow space-x-8 ml-4 mr-4">
        <li className="py-1">
          <a href="#">Data</a>
        </li>
        <li className="py-1">
          <a href="#">Learn</a>
        </li>
        <li className="py-1 flex-grow text-right">
          <a href="#">Logo</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
