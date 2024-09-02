import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About } from "./pages/index";
import { SmoothScreen } from "./components/index";
function App() {
  return (
    <SmoothScreen>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </SmoothScreen>
  );
}

export default App;