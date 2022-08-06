import React from "react";

import Sidebar2 from "../components/Sidebar2";
import SidebarRight from "../components/Sidebar-right";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { RiHome3Fill } from "react-icons/ri";
import "./mystyle.css";
import Section from "./Section";
import Icon from "../images/pharm-icon.svg";
const Home3 = () => {
  return (
    <div className="dark">
      <div className=" border border-black px-4 sm:px-6 md:px-8 bg-white dark:bg-[#0B1120]">
        {/* image bg */}
        <div className="absolute inset-0  bg-cover bg-img overflow-y-scroll "></div>

        {/* Nav bar */}
        <div className=" border pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
          <div className="flex items-center space-x-2">
            <img
              src={Icon}
              alt="pharm-icon"
              className="text-slate-900 dark:text-white w-auto h-8"
            />
            <span className=" text-xl font-bold text-slate-700 dark:text-slate-200 tracking-widest hover:text-sky-500 dark:hover:text-sky-400">
              PHARM
            </span>
          </div>

          {/* sm: search */}
          <div className="flex items-center">
            <button
              type="button"
              className="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center md:hidden dark:hover:text-slate-300"
            >
              <span className="sr-only">Search</span>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="m19 19-3.5-3.5"></path>
                <circle cx="11" cy="11" r="6"></circle>
              </svg>
            </button>
            <div className="-my-1 ml-2 -mr-1 md:hidden">
              <button
                type="button"
                className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span className="sr-only">Navigation</span>
                <svg width="24" height="24" fill="none" aria-hidden="true">
                  <path
                    d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center">
              <nav>
                <ul className="flex items-center space-x-8">
                  <li>
                    <a
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/docs/installation"
                    >
                      Thai Herb
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com"
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                      href="/blog"
                    >
                      ANN
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <label className="sr-only" id="headlessui-listbox-label-10">
                  Theme
                </label>
                <button
                  type="button"
                  id="headlessui-listbox-button-11"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-labelledby="headlessui-listbox-label-10 headlessui-listbox-button-11"
                >
                  <span className="dark:hidden">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-6 h-6"
                    >
                      <path
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        className="fill-sky-400/20 stroke-sky-500"
                      ></path>
                      <path
                        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                        className="stroke-sky-500"
                      ></path>
                    </svg>
                  </span>
                  <span className="hidden dark:inline">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                        className="fill-sky-400/20"
                      ></path>
                      <path
                        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                        className="fill-sky-500"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                        className="fill-sky-500"
                      ></path>
                    </svg>
                  </span>
                </button>
                <a
                  href="https://github.com/tailwindlabs/tailwindcss"
                  className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                >
                  <span className="sr-only">Tailwind CSS on GitHub</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero section */}
        <div className=" border max-w-5xl mx-auto py-20 sm:pt-24 lg:pt-32">
          <h1 className="text-slate-900 font-extrabold text-2xl sm:text-4xl lg:text-5xl text-center dark:text-white">
            Herbal Information Services
          </h1>
          <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            This website provides informational plant data including medicinal
            reports and research articles.{" "}
          </p>

          {/* SearchBox */}
          <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
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
                className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-72 h-12 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                type="text"
                aria-label="Search"
                placeholder="Search"
              />
            </form>

            {/* CheckBox */}
            <div className="absolute mt-20 space-x-4 flex justify-center w-full text-base font-bold ">
              <div>
                <input
                  className="  appearance-none rounded-full ring-2 h-4 w-4 border ring-slate-700 dark:ring-slate-400 hover:ring-sky-500 dark:hover:ring-sky-400 bg-white checked:bg-neutral-700 dark:checked:bg-sky-700  focus:outline-none transition duration-200 mt-1 float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label
                  className="inline-block text-slate-600  dark:text-slate-400"
                  htmlFor="inlineRadio1"
                >
                  Herbs
                </label>
              </div>
              <div>
                <input
                  className="appearance-none rounded-full ring-2 h-4 w-4 border ring-slate-700 dark:ring-slate-400 hover:ring-sky-500 dark:hover:ring-sky-400 bg-white checked:bg-neutral-700 dark:checked:bg-sky-700  focus:outline-none transition duration-200 mt-1 float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label
                  className="inline-block text-slate-600  dark:text-slate-400"
                  htmlFor="inlineRadio2"
                >
                  Substances
                </label>
              </div>
              <div>
                <input
                  className="appearance-none rounded-full ring-2 h-4 w-4 border ring-slate-700 dark:ring-slate-400 hover:ring-sky-500 dark:hover:ring-sky-400 bg-white checked:bg-neutral-700 dark:checked:bg-sky-700  focus:outline-none transition duration-200 mt-1 float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label
                  className="form-check-label inline-block text-slate-600  dark:text-slate-400"
                  htmlFor="inlineRadio3"
                >
                  Diseases
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Sevice section */}
        {/* ThaiHerb DB */}
        {/* NLP */}
        {/* Contact us */}
        <Section />
      </div>
    </div>
  );
};
export default Home3;
