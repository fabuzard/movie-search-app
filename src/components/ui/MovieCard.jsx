import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center text-center min-h-[350px]">
      <img
        src={movie.Poster}
        alt={movie.Title}
        loading="lazy"
        className="w-32 h-48 object-cover rounded-md"
      />
      <div className="mt-3 w-full">
        <h3 className="text-lg font-semibold">{movie.Title}</h3>
        <p className="text-gray-500">{movie.Year} • {movie.Genre}</p>
        <p className="text-gray-700 text-sm line-clamp-3">{movie.Plot}</p>
      </div>
    </div>
  );
}

export default MovieCard;
