/* copiado*/
import ModalFilm from "./MovieModal";
import { useState } from "react";

function Movie({ movie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className=" py-2 pointer">
        <img
          src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
          alt={"Poster " + movie.original_title}
          className="img-fluid rounded shadow movie-img"
          onClick={handleShow}
        />
        <p>{movie.vote_average}</p>
      </div>
      <ModalFilm movie={movie} show={show} handleClose={handleClose} />
    </>
  );
}

export default Movie;
