import React from "react";
import "../src/styles/styles.scss";
// import About from "./Pages/About";
import Home from "./Pages/Homepage";
// import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import Models from "./Pages/Models";
// import TestimonialsPage from "./Pages/TestimonialsPage";
// import Team from "./Pages/Team";
// import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;