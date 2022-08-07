import React from "react";

import nlp from "../images/nlp.svg";
const Ann = () => {
  return (
    <div className="  py-40 max-w-3xl mx-auto">
      <div className=" flex items-center justify-center">
        <img className=" max-w-xl mr-10 " src={nlp} alt="" />
        <div>
          <h1 className=" text-xl font-bold text-slate-900 dark:text-slate-600 uppercase tracking-wide">
            DRUG DISCOVERY
          </h1>
          <h2 className=" text-5xl font-bold text-sky-800 pt-5">
            Artificial Neural Network
          </h2>
          <p className=" font-semibold pt-5 text-justify w-10/12 pl-2 dark:text-slate-300">
            This Artificial Neural Network support to drug discovery research.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Ann;
