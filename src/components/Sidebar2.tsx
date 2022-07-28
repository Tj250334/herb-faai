import React from "react";
import { GiPlantRoots } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";

import { herbs } from "../data/dummy";

const Sidebar2 = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <GiPlantRoots className="text-3xl" />
        <span>Herb Database</span>
        <button>
          <MdOutlineCancel />
        </button>
      </div>

      <div className="mt-1">
        <input
          type="text"
          placeholder="Search"
          className="border-1 rounded p-1"
        />
      </div>

      {/* Herb List */}
      <div className="mt-5">
        <ul>
          {herbs.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Sidebar2;
