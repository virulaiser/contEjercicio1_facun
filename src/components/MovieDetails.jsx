import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Movie from "./Movie";

function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=8e5221519d760e6f2a95678230456e98`;
    const getMovie = async () => {
      const response = await axios.get(url);
      setMovie(response.data);
      console.log(url);
      console.log("el id  es:", id);
      console.log(response.data);
    };
    getMovie();
  }, [id]);

  return (
    <div className="container">
      <div className="row vh-80 d-flex justify-content-center">
        <div className="col-5  mt-3 ">
          <Movie movie={movie} />
        </div>
        <div className="col-7">
          <h1>{movie.original_title}</h1>
          <p>{movie.overview}</p>
          <p>{movie.release_date}</p>
          <p>Votacion Promedio :{movie.vote_average}</p>
          <p>entro al params - {id}</p>
        </div>
      </div>
      <button type="button">
        <Link to="/">Volver al menu</Link>
      </button>
      <div></div>
    </div>
  );
}

export default MovieDetails;
