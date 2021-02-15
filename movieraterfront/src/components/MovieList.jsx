import React, { useState } from "react";
import Card from "./Card";
import { useQuery } from "react-query";
import Loader from "react-loader-spinner";
import {Link} from "react-router-dom"

const MovieList = () => {
  //   const {movies} = React.useContext(MovieContext);

  const { status, data, error } = useQuery("movies", fetchMovies);

  return (
    <React.Fragment>
      <h3 class="text-2xl font-normal" ><span class="py-1 hover:border-gray-500 border-b-4 border-white px-4 hover:border-bottom  
      transition ease-linear duration-500 m-8" 
      > Movie List</span>
        </h3>
      {status == "loading" &&  <div class="container mx-auto">
 <Loader  type="Puff"
        color="#12ff94"
        height={100}
        width={100}
        timeout={3000}  
        />  
      </div>}
      {status == "error" && <p id="no-movies">{error} </p>}
      {status == "success" && data.length === 0 && (
        <p id="no-movies">there are no movies ...</p>
      )}

          <div class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {status == "success" &&
              data.map((m) => {
                return (
                  <React.Fragment key={m.id}>
                    <Card movie={m} />
                  </React.Fragment>
                );
              })}
          </div>
          <Link to="/add" >
          <button class="p-0 w-16 h-16 bg-green-600 rounded-full hover:bg-green-700 active:shadow-lg mouse shadow 
                transition ease-in duration-200 focus:outline-none fixed right-5 bottom-5 animate-pulse">
          <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 inline-block">
            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
          </svg>
        </button>
          </Link>
    </React.Fragment>
  );
};

export default MovieList;
//get all movies
const fetchMovies = async () => {
  const base_url = process.env.REACT_APP_BASE_URL;
  console.log(base_url);
  const res = await fetch(`http://127.0.0.1:8000/api/movies/`, {
    method: "GET",
    headers: {
      Authorization: "Token 7e520a6d17b034046aaba9cea47f7e2f11d7fc03",
    },
  });

  return res.json();
};
