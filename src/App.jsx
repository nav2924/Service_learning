import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Approach } from "./pages/index";
import { SmoothScreen } from "./components/index";

function App() {
  return (
    <SmoothScreen>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/approach" element={<Approach />} />
      </Routes>
    </SmoothScreen>
  );
}

export default App;
