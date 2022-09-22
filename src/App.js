import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, TvShows } from "./pages";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TvShows />} />
      </Routes>
    </div>
  );
}