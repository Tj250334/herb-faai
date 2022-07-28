import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import HerbWiki from "./components/HerbWiki";

// redux
import { useAppDispatch, useAppSelector } from "./contexts/store";
import { setActiveMenu } from "./contexts/features/term/term-slice";

import Card from "./tailwindComponents/Card4";
import Table from "./tailwindComponents/Table";
import Searach from "./tailwindComponents/Searach";

function App() {
  const activeMenu = useAppSelector((state) => state.termStored.activeMenu);
  const dispatch = useAppDispatch();

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Searach />} />
      <Route path="/a" element={<Table />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
