import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import Sidebar from "./components/Sidebar";
import Sidebar2 from "./components/Sidebar2";
// import Navbar from "./components/Navbar";
import HerbWiki from "./components/HerbWiki";

// redux
import { useAppDispatch, useAppSelector } from "./contexts/store";
import { setActiveMenu } from "./contexts/features/term/term-slice";

import Navbar from "./tailwindComponents/Navbar";
import Navbar3 from "./tailwindComponents/Navbar3";

import { GiPlantRoots } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import Herb from "./pages/Herb";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Database from "./pages/Database";
// import Home from "./pages/Sticky";

function App() {
  const activeMenu = useAppSelector((state) => state.termStored.activeMenu);
  const dispatch = useAppDispatch();

  const currentMode = "Light";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/herb" element={<Herb />} />
        <Route path="/" element={<Home3 />} />
        <Route path="/db" element={<Database />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
