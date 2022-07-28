import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Li = ({ txt }: { txt: string }) => {
  return (
    <li className="pt-1.5  hover:underline hover:text-sky-300">
      <a href="#">{txt}</a>
    </li>
  );
};
const Hero = () => {
  return (
    <div className="relative h-screen bg-gradient-to-t from-cyan-200 to-blue-500 border-1 border-red-500 flex items-center justify-center">
      <div className="absolute top-0 w-full bg-blue-400">
        <Navbar />
      </div>
      <div className="p-4 max-w-xl shadow rounded  font-bold text-center">
        <div className="p-2 text-3xl">Herbal Information Services</div>
        <div className="p-2 ">
          This website provides informational plant data including medicinal
          reports and research articles.
        </div>
        <form className="group relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Filter projects"
            placeholder="Filter projects..."
          />
        </form>
      </div>
    </div>
  );
};

export default Hero;
