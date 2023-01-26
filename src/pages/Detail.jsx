// React imports
import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// Context imports
import { MovieContext } from "../context/MovieContext";

// Asset imports
import noImage from "../assets/no-image-available.png";

const Detail = () => {
  const { id } = useParams();
  const { showDetail, selectedMovie } = useContext(MovieContext);
  useEffect(() => {
    showDetail(id);
  }, [id, showDetail]);

  return (
    <div className="mt-10 mx-auto items-center">
      <div className="mx-auto flex flex-col lg:flex-row border border-gray-400 rounded-lg p-4 w-[80%] sm:w-[50%] md:w-[60%] lg:w-[70%] gap-5">
        <div className="flex justify-center">
          {selectedMovie.Poster === "N/A" ? (
            <img
              src={noImage}
              alt={selectedMovie.Title}
              className="rounded-lg"
            />
          ) : (
            <img
              src={selectedMovie.Poster}
              alt={selectedMovie.Title}
              className="rounded-lg mr-auto"
            />
          )}
        </div>

        <div className="flex flex-col justify-start items-start text-start">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-lg font-medium text-blue-800">Title :</div>
            <div>{selectedMovie.Title}</div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="text-lg font-medium text-blue-800">Released:</div>
            <div>{selectedMovie.Released}</div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="text-lg font-medium text-blue-800">Runtime:</div>
            <div>{selectedMovie.Runtime}</div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="text-lg font-medium text-blue-800">Genre:</div>
            <div>{selectedMovie.Genre}</div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="text-lg font-medium text-blue-800">
              IMDB Rating:
            </div>
            <div>{selectedMovie.imdbRating}</div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="text-lg font-medium text-blue-800">Director:</div>
            <div>{selectedMovie.Director}</div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div>{selectedMovie.Plot}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
