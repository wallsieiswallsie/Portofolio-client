import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import HomePage from "./pages/Home";

function App() {
  const initializing = false;

  if (initializing) return <div>Loading...</div>;

  return (
    <div className="main-content">
      <Navbar/>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;