import React, { useState } from "react";

import Sidebar2 from "../components/Sidebar2";
import SidebarRight from "../components/Sidebar-right";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { RiHome3Fill } from "react-icons/ri";

const Database = () => {
  const [isLeftBar, setIsLeftBar] = useState(false);
  return (
    <>
      <div className="w-screen h-12 bg-slate-600">
        <button
          onClick={() => setIsLeftBar((x) => !x)}
          className="hover:bg-red-500"
        >
          hello
        </button>
      </div>

      {/* sidebar */}

      {/* middle */}
      <div className="max-w-7xl mx-auto px-10">
        {/* sidebar */}
        <div
          onClick={() => setIsLeftBar((x) => !x)}
          className={`${
            isLeftBar ? "" : "hidden"
          }  bg-black/20 backdrop-blur-sm inset-0 fixed lg:hidden`}
        ></div>
        <div
          className={`${
            isLeftBar ? "" : "hidden"
          } lg:block inset-0 overflow-y-auto fixed  pb-10 px-8 bg-slate-200 w-[18rem] lg:top-12 lg:left-[max(0px,calc(50%-45rem))] border-red-600 border-1`}
        >
          <div>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
            <p>thai herb</p>
          </div>
        </div>
        <div className="lg:pl-[18rem] border-1 border-red-500">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            quidem quam cum ducimus dicta, nobis exercitationem unde ex
            repudiandae a qui dolorum quis harum delectus hic sed ut at quos.
          </p>
        </div>
      </div>
    </>
  );
};
export default Database;
