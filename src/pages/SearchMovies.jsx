// React imports
import React, { useContext } from "react";

// React Router imports
import { Link } from "react-router-dom";

// Custom component imports
import Input from "../components/Input";
import CardComponent from "../components/Card";

// Context imports
import { MovieContext } from "../context/MovieContext";

const SearchMovies = () => {
  const { setSearch, movies, favoriteHandler } = useContext(MovieContext);
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center">
        <Input handleSearch={handleSearch} />
      </div>

      <div className="flex">
        {/* conditional rendering */}
        {movies?.length > 0 ? (
          <div className="flex flex-wrap justify-center md:justify-around mt-5">
            {movies?.sort((a, b) => b.imdb - a.imdb)
        .sort((a, b) => b.name - a.name).map((movie) => {
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
