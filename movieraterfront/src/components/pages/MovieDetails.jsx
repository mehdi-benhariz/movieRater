import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  var movie;

  useEffect(async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/movies/${id} `, {
      method: "GET",
      headers: {
        Authorization: "Token 7e520a6d17b034046aaba9cea47f7e2f11d7fc03",
      },
    });
    const data = await res.json();
    movie = data;
  }, []);

  return (
    <React.Fragment>
      <h3 class="text-2xl font-normal">
        <span
          class="py-1 hover:border-gray-500 border-b-4 border-white px-4 hover:border-bottom  
      transition ease-linear duration-500 m-8"
        >
          Details
        </span>
      </h3>
      <div class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div class="max-w-md w-full lg:flex">
            <div
              class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center
   overflow-hidden"
              style="background-image: url('https://tailwindcss.com/img/card-left.jpg')"
              title="a movie poster"
            ></div>
            <div
              class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light
   bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
            >
              <div class="mb-8">
                <p class="text-sm text-grey-dark flex items-center">
                  <svg
                    class="text-grey w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <div class="text-black font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>
                <p class="text-grey-darker text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="flex items-center">
                <div class="text-sm">
                  <p class="text-black leading-none">Jonathan Reinink</p>
                  <p class="text-grey-dark">Aug 18</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </React.Fragment>
  );
};

export default MovieDetails;
