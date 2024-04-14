import React from "react";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import "./MovieTrailerModal.style.css";
import { useMovieVideosQuery } from "../../../hooks/useMovieVideos";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";


const MovieTrailerModal = ({ show, handleClose }) => {
  const { id } = useParams();
  const { data: videos} = useMovieVideosQuery({ id });

  const videoId = videos?.results?.[0]?.key;

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      animation={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Movie Trailer</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        {videoId ? (
          <YouTube videoId={videoId} opts={opts} />
        ) : (
          <div>No trailer available</div>
        )}
      </Modal.Body>
    </Modal>
  );
};


export default MovieTrailerModal;
