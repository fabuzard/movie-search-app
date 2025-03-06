import React, { useState } from "react";
import logo from "../assets/logo.png";
import SearchBar from "./ui/SearchBar";
import { searchMovies } from "../apis/api";
import { useAtom } from "jotai";
import { moviesAtom,queryAtom } from "../store/atom";

function Navbar() {

  const [query, setQuery] = useAtom(queryAtom);
  const [movies, setMovies] = useAtom(moviesAtom);


  const handleSearch = async () => {
    const results = await searchMovies(query);
    setMovies(results);
    console.log(movies)
    setQuery("")
  };

  return (
    <div className="py-5 flex flex-col space-y-4 lg:flex-row items-center justify-between w-full px-4 lg:px-0">

      <div className="flex items-center gap-3.5">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <p className="font-logo text-lg font-bold text-[#111155]">Movie</p>
      </div>
    
  
      <div className=" ">
        <SearchBar setQuery={setQuery} query={query} onSearch={handleSearch}/>
      </div>


    
    </div>
  );
}

export default Navbar;
