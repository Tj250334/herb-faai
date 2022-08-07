import React from "react";
import database from "../images/database.svg";
const Database1 = () => {
  return (
    <div className="  py-40 max-w-3xl mx-auto">
      <div className=" flex items-center justify-center">
        <div>
          <h1 className=" text-xl font-bold text-slate-900 dark:text-slate-600 uppercase tracking-wide">
            EXTERNAL DATABASE CONNECTION
          </h1>
          <h2 className=" text-5xl font-bold text-sky-800 pt-5">
            International Biomedical Database
          </h2>
          <p className=" font-semibold pt-5 text-justify w-10/12 pl-2 dark:text-slate-300 ">
            Get access to external biomedical literature citation from PubMed,
            PubChem, Scopus and ScienceDirect
          </p>
        </div>
        <img className=" max-w-xl ml-10" src={database} alt="" />
      </div>
    </div>
  );
};
export default Database1;
