import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import HomePage from "./pages/Home";
import Project_1 from "./pages/projects/Project_1";
import Project_2 from "./pages/projects/Project_2";

function App() {
  const initializing = false;

  if (initializing) return <div>Loading...</div>;

  return (
    <div className="main-content">
      <Navbar/>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project_1" element={<Project_1 />} />
          <Route path="/project_2" element={<Project_2 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;