import React from "react";

import contact from "../images/contact.svg";
const Thaiherb = () => {
  return (
    <div className="  py-40 max-w-3xl mx-auto">
      <div className=" flex items-center justify-center">
        <div>
          <h1 className=" text-2xl font-bold text-slate-900 dark:text-slate-600 uppercase tracking-wide">
            Thai Herbal Plant Database
          </h1>
          <div className=" py-20 grid grid-flow-col auto-cols-max  gap-x-8 gap-y-4 grid-cols-3 ">
            <span className="border rounded bg-white font-blod">Mint</span>
            <div className="border rounded bg-white font-blod">Turmeric</div>
            <div className="border rounded bg-white font-blod">Aloe</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Thaiherb;
