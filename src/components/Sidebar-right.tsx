import React, { useState } from "react";

const SidebarRight = () => {
  const [section, setSection] = useState("info");
  const handleClick = (newsection: string) => {
    setSection(newsection);
  };
  return (
    <div className="basis-2/12   p-2 mx-3 mt-3">
      <ul className="">
        <li
          onClick={() => handleClick("info")}
          className={`py-2 border-l-2  pl-2 cursor-pointer ${
            section === "info" ? " bg-green-100 border-green-600" : ""
          }`}
        >
          General information
        </li>
        <li
          onClick={() => handleClick("chem")}
          className={`py-2 border-l-2  pl-2 cursor-pointer ${
            section === "chem" ? "bg-green-100 border-green-600" : ""
          }`}
        >
          Chemical composition
        </li>
        <li
          onClick={() => handleClick("bio")}
          className={`py-2 border-l-2  pl-2 cursor-pointer ${
            section === "bio" ? "bg-green-100 border-green-600" : ""
          }`}
        >
          Bioacitivity
        </li>
      </ul>
    </div>
  );
};
export default SidebarRight;
