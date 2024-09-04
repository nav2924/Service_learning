import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Contact, Approach } from "./pages/index";
import { SmoothScreen } from "./components/index";

function App() {
  return (
    <SmoothScreen>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/approach" element={<Approach />} />
        </Routes>
      </Router>
    </SmoothScreen>
  );
}

export default App;
