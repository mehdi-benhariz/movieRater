import React, { useState } from "react";
import Card from "./Card";
import { MDBRow, MDBContainer, MDBBtn } from "mdbreact";
import MovieAdd from "./pages/MovieAdd";
import { useQuery } from "react-query";
import Loader from "react-loader-spinner";

const MovieList = () => {
  //   const {movies} = React.useContext(MovieContext);
  const movies = [];
  const [modal, setmodal] = useState(false);

  const { status, data, error } = useQuery("movies", fetchMovies);

  return (
    <React.Fragment>
      <h3>Movie List </h3>
      {status == "loading" && <Loader  type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} />  }
      {status == "error" && <p id="no-movies">{error} </p>}
      {status == "success" && data.length === 0 && (
        <p id="no-movies">there are no movies ...</p>
      )}
      <MDBContainer>
        <MDBRow>
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
        </MDBRow>
      </MDBContainer>
      <div className="float" onClick={() => setmodal(!modal)}>
        <i className="fa fa-plus my-float"></i>
      </div>
      <MovieAdd modal={modal} setmodal={setmodal} />
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
