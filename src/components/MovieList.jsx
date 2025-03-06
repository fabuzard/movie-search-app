import React from "react";
import { useAtom } from "jotai";
import { moviesAtom } from "../store/atom";
import MovieCard from "./ui/MovieCard";

function MovieList() {
  const [movies] = useAtom(moviesAtom);

  console.log("Movies State:", movies); // Debugging

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Movie List</h2>
      <ul className="space-y-4  gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {movies.length > 0 ? (
          movies.map((movie, index) => {
            console.log(`Movie ${index + 1}:`, movie); // ✅ Debug each movie
            return (
              <li key={movie.imdbID || index} >
                <MovieCard movie={movie}/>
              </li>
            );
          })
        ) : (
          <p className="text-gray-600">No movies found.</p>
        )}
      </ul>
    </div>
  );
}

export default MovieList;
