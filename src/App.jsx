import React from "react";
import "../src/styles/styles.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Homepage";
import Navbar from "../src/components/Navbar/Navbar";
import Sebastian from "./components/Sebastian/Sebastian";
import Info from "./components/Info/Info";
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<Sebastian />} />
        <Route path="/learn" element={<Info />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
