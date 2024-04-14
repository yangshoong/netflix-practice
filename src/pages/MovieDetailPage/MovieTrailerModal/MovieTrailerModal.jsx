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
  const { data: videos, isLoading, isError, error } = useMovieVideosQuery({ id });

  const videoId = videos?.results?.[0]?.key; // 첫 번째 트레일러 비디오의 키를 가져옵니다.

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  if (isLoading) {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">Error: {error.message}</Alert>;
  }

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
