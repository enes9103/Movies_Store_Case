import React from "react";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Detail from "../pages/Detail";
import AddMovies from "../pages/AddMovies";
import SearchMovies from "../pages/SearchMovies";
import Header from "../components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <div className="relative w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-movies" element={<SearchMovies />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/add-movies" element={<AddMovies />} />
          <Route path="/search-movies/movies/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;
