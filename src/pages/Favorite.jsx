import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import CardComponent from '../components/Card';

const Favorite = () => {
  const { favorites, favoriteHandler } = useContext(MovieContext);
console.log(favorites);
  return (
    <>
      {favorites?.length ? (
        <div className='flex justify-center flex-wrap'>
          {favorites.map((movie) => (
            <CardComponent
              key={movie.imdbID}
              image={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              addFavorite={(e) => favoriteHandler(movie, e)}
              isFavorite={movie.isFavorite}
            />
          ))}
        </div>
      ) : (
        <div className='mt-6'> There is no favorite movie.</div>
      )}
    </>
  );
};

export default Favorite;
