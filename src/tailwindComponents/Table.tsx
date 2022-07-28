import React, { useState } from "react";

import {
  BsChevronBarLeft,
  BsChevronBarRight,
  BsChevronRight,
  BsChevronLeft,
} from "react-icons/bs";
import {
  AiOutlineVerticalLeft,
  AiOutlineVerticalRight,
  AiOutlineRight,
  AiOutlineLeft,
} from "react-icons/ai";
// AiOutlineVerticalLeft
// AiOutlineVerticalRight
// AiOutlineRight
// AiOutlineLeft

const tableHeader = ["Names", "CAS", "MF", "MW", "References"];
const data = [
  {
    id: 1,
    name: "Andrographolide",
    cas: "5508-58-7",
    mf: "",
    mw: "",
    xref: "",
  },
  { id: 2, name: "Andrograpanin", cas: "5508-58-7", mf: "", mw: "", xref: "" },
  {
    id: 3,
    name: "14-deoxy-12-hydroxyandrographolide",
    cas: "219721-33-2",
    mf: "",
    mw: "",
    xref: "",
  },
];

import { chem } from "../data/dummy";
import { ContentControlProperties } from "@syncfusion/ej2/documenteditor";
type Chem = typeof data;

const TD = ({ children }: { children: React.ReactNode }) => {
  return (
    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{children}</td>
  );
};

const Icon = ({
  children,
  handler,
}: {
  children: React.ReactNode;
  handler: () => void;
}) => {
  return (
    <button onClick={handler} className="hover:bg-slate-300 rounded-full p-1">
      {children}
    </button>
  );
};



// <a className="font-bold text-blue-500 hover:underline" href="#">1002</a>
// <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>

const Table = () => {

  const [page, setPage] = useState(10);
  const [pth, setPth] = useState(1);
  const maxPth = Math.ceil(chem.length / page);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPage(Number(e.target.value));
    setPth(1);
    console.log(e.target.value);
  };
  const handlePageForward = () => {
    setPth((pth) => (pth + 1 <= maxPth ? pth + 1 : maxPth));
  };
  const handlePageBackward = () => {
    setPth((pth) => (pth - 1 > 1 ? pth - 1 : 1));
  };
  const handlePageEnd = () => {
    setPth(maxPth);
  };
  const handlePageStart = () => {
    setPth(1);
  };

  return (
    <div className="border-1 p-5 bg-gray-100">
      <h1 className="text-xl mb-2">Chemical Composition</h1>

      
      <div className="overflow-auto shadow">

        {/* Table Top */}
        <div className="flex justify-between items-center">

          {/* Filter Input */}
          <form className="group relative p-2">
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
              className="md:w-96 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
              type="text"
              aria-label="Filter names"
              placeholder="Filter names..."
            />
          </form>

          {/* Add Edit Delete */}
          <div className="space-x-2 mr-2">
            <button className="border-1 p-1 rounded bg-green-300 hover:bg-gray-300">
              Add
            </button>
            <button className="border-1 p-1 rounded bg-violet-300 hover:bg-gray-300">
              Edit
            </button>
          </div>
        </div>

        {/* Table */}
        <table className="border-1 w-full">
          {/* Table Header */}
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              {tableHeader.map((e, i) => (
                <th
                  key={i}
                  className="p-3 text-sm font-semibold tracking-wide text-left"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-100">
            {chem
              .filter((e, i) => i >= pth * page - page && i < pth * page)
              .map((e) => (
                <tr className="odd:bg-white hover:bg-teal-100 duration-300">
                  <TD>{e.name}</TD>
                  <TD>{e.cas}</TD>
                  <TD>{e.mf}</TD>
                  <TD>{e.mw}</TD>
                  <TD>{e.xref}</TD>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-end mt-2 space-x-4">
          <select className="border-1 rounded text-sm bg-gray-100" onChange={handleSelect}>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>

          <p className="text-sm">{`${pth * page - page + 1} - ${
            pth * page < chem.length ? pth * page : chem.length
          } of ${chem.length}`}</p>

          <Icon handler={handlePageStart}>
            <AiOutlineVerticalRight className="text-gray-500 h-6 w-4" />
          </Icon>
          <Icon handler={handlePageBackward}>
            <AiOutlineLeft className="text-gray-500 h-6 w-4" />
          </Icon>
          <Icon handler={handlePageForward}>
            <AiOutlineRight className="text-gray-500 h-6 w-4" />
          </Icon>
          <Icon handler={handlePageEnd}>
            <AiOutlineVerticalLeft className="text-gray-500 h-6 w-4" />
          </Icon>
        </div>
      </div>
    </div>
  );
};
export default Table;
