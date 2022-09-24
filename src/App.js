import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, TvShows, Movies, Serials } from "./pages";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/serials" element={<Serials />} />
      </Routes>
    </div>
  );
}