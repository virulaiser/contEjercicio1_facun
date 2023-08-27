import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function Movies({ rating }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const minVoteAvg = (rating - 1) * 2;

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&vote_average.gte=${minVoteAvg}&api_key=8e5221519d760e6f2a95678230456e98`;

    const getMovies = async () => {
      const response = await axios.get(url);
      console.log(url);
      console.log(response.data.results);
      setMovies(response.data.results);
    };
    getMovies();
  }, [rating]);

  useEffect(() => {
    let url1 = `https://api.themoviedb.org/3/discover/movie?include_adult=false&page=${page}&vote_average.gte=${minVoteAvg}&api_key=8e5221519d760e6f2a95678230456e98`;

    const getMovies = async () => {
      const response = await axios.get(url1);

      setMovies([...movies, ...response.data.results]);

      console.log("la pagina es:", page);
    };
    getMovies();
  }, [page]);

  return (
    <div className="container mt-5 vh-100 d-flex justify-content-center">
      <InfiniteScroll
        dataLength={movies.length} //This is important field to render the next data
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-3">
              <Movie movie={movie} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Movies;
