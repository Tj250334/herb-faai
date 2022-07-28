import React from "react";
import Navbar3 from "../tailwindComponents/Navbar3";

import Sidebar2 from "../components/Sidebar2";
import SidebarRight from "../components/Sidebar-right";

const Home = () => {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      <Navbar3 />

      {/* <div className="border-1 border-red-600 h-full p-5 dark:bg-main-dark-bg">
        Hello
      </div> */}

      <div className="flex flex-row">
        {/* content-left */}
        <div className="basis-2/12 border-1 rounded sha mx-3 mt-3">
          <Sidebar2 />
        </div>

        {/* content-center */}
        <div className="basis-8/12 border-1 border-red-600 mx-1.5 mt-3">
          aaa
        </div>

        {/* content-right */}
        <SidebarRight />
      </div>
    </div>
  );
};
export default Home;
