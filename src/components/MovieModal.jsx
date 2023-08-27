/* copiado */

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalFilm({ movie, show, handleClose }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="bg-info">
          <Modal.Title>
            <h2 className="text-black fst-italic">{movie.original_title}</h2>

            {movie.vote_average >= 7 ? (
              <h5 className="mt-1 text-success fst-italic">
                Rating: {movie.vote_average}
              </h5>
            ) : (
              <h5 className="mt-1 text-danger fst-italic">
                Rating: {movie.vote_average}
              </h5>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="row d-flex align-items-center">
          <div className="col-7">
            <p>
              <strong className="fst-italic">{movie.overview}</strong>
            </p>
            <p className="fst-italic">
              <strong>
                Release Year: ({movie.release_date.substring(0, 4)})
              </strong>
            </p>
          </div>
          <div className="col-5">
            <div className="card img-fluid">
              <img
                src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
                alt={"Poster " + movie.original_title}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-info">
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalFilm;
