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
  const { data: videos, isLoading, isError } = useMovieVideosQuery({ id });

  const videoId = videos?.results?.[0]?.key;

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  if (isLoading) return <Spinner animation="border" />;
  if (isError)
    return (
      <Alert variant="danger">Error: Failed to load trailer information.</Alert>
    );

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
          <div className="youtube-container">
            <YouTube videoId={videoId} opts={opts} />
          </div>
        ) : (
          <div>No trailer available</div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default MovieTrailerModal;
