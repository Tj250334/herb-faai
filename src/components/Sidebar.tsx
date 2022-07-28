import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { GiPlantRoots } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "../data/dummy";
import { herbs } from "../data/dummy";

// redux
import { useAppDispatch, useAppSelector } from "../contexts/store";
import { setActiveMenu, setHerbId } from "../contexts/features/term/term-slice";

interface Props {}

const Sidebar: React.FC<Props> = ({}) => {
  const herbId = useAppSelector((state) => state.termStored.herbId);
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");
  const [list, setList] = useState(herbs);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setSearch("");
    setList(herbs);
  };

  const handleList = () => {
    const updateList = herbs.filter(
      (item) => item && item.name.toLowerCase().includes(search.toLowerCase())
    );
    setList(updateList);
  };

  const handleCloseSideBar = () => {
    dispatch(setActiveMenu(false));
  };
  const handleClickHerb = (herbId: number) => {
    dispatch(setHerbId(herbId));
  };

  return (
    <div className="">
      {/* ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 */}
      {/* Logo */}
      <div className="">
        {/* Top Logo  flex justify-between items-center*/}
        <Link
          to="/"
          onClick={handleCloseSideBar}
          className=""
          // items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900
        >
          <GiPlantRoots className="text-3xl" />
          <span>Herb Database</span>
        </Link>

        {/* Close button */}
        <button
          type="button"
          onClick={handleCloseSideBar}
          className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
        >
          <MdOutlineCancel />
        </button>
      </div>

      {/* Filter Field */}
      <div className="mt-10  ">
        <label htmlFor="search-herb" className="text-gray-400 uppercase ">
          Filter
        </label>
        <div className="mt-1">
          <input
            id="search-herb"
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            value={search}
            onKeyUp={handleList}
            className="p-1 border-1 border-gray-500 rounded-md"
          />
          <button
            onClick={handleClearSearch}
            className="ml-1 p-1 border-1 rounded-md hover:bg-gray-200"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Herb List */}
      <div className="mt-5">
        <ul className="">
          {list.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClickHerb(item.id)}
              className={`flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 cursor-pointer hover:bg-light-gray ${
                item.id === herbId ? "bg-gray-200" : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
