// React imports
import React, { useContext, useState, useEffect } from "react";

// React Router imports
import { Link } from "react-router-dom";

// Custom component imports
import Input from "../components/Input";
import CardComponent from "../components/Card";

// Context imports
import { MovieContext } from "../context/MovieContext";

const SearchMovies = () => {
  const { setSearch, movies, favoriteHandler } = useContext(MovieContext);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    if (e.target.name === "title") {
      setFilterTitle(e.target.value);
    } else if (e.target.name === "year") {
      setFilterYear(e.target.value);
    } else if (e.target.name === "type") {
      setFilterType(e.target.value);
    }
  };

  useEffect(() => {
    if (movies && movies.length > 0) {
      const filteredMovies = movies
        .filter((movie) =>
          movie?.Title.toLowerCase().includes(filterTitle.toLowerCase())
        )
        .filter((movie) => movie?.Year.toString().includes(filterYear))
        .filter((movie) =>
          movie?.Type.toLowerCase().includes(filterType.toLowerCase())
        );
      setFilteredMovies(filteredMovies);
    }
  }, [filterTitle, filterYear, filterType, movies]);

  return (
    <div>
      <div className="flex flex-col justify-center">
        <div className="mx-auto"><Input handleSearch={handleSearch} /></div>
        

        <div className="">
          <select
            name="title"
            value={filterTitle}
            onChange={handleFilterChange}
            className="p-2 rounded-lg mt-4"
          >
            <option value="">Title</option>
            {[...new Set(movies && movies?.length > 0 && movies.map((movie) => movie.Title))].map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>

          <select name="year" value={filterYear} onChange={handleFilterChange} className="p-2 rounded-lg mt-4 mx-2">
            <option value="">Year</option>
            {[...new Set(movies && movies?.length > 0 && movies.map((movie) => movie.Year))].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select name="type" value={filterType} onChange={handleFilterChange} className="p-2 mt-4 rounded-lg">
            <option value="">Type</option>
            {[...new Set(movies && movies?.length > 0 && movies.map((movie) => movie.Type))].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex">
        {movies && movies?.length > 0 ? (
          <div className="flex flex-wrap justify-center md:justify-around mt-5">
            {filteredMovies.map((movie) => {
                return (
                  <Link
                    to={`movies/${movie.imdbID}`}
                    className="text-link"
                    key={movie.imdbID}
                  >
                    <CardComponent
                      key={movie.imdbID}
                      image={movie.Poster}
                      title={movie.Title}
                      year={movie.Year}
                      type={movie.Type}
                      addFavorite={(e) => favoriteHandler(movie, e)}
                      isFavorite={movie.isFavorite}
                    />
                  </Link>
                );
              })}
          </div>
        ) : (
          <div className="flex flex-col justify-center mx-auto mt-4">
            <p>Search a movie!</p>
            <p>e.g. Harry Potter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMovies;
