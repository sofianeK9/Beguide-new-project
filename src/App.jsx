import React from "react";
// import "./App.css";
import SidePanel from "./components/SidePanel/SidePanel.jsx";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<SidePanel />} />
      </Routes>
    </Router>
  );
}

export default App;
