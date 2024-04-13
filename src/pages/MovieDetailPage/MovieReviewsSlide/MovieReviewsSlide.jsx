import React from "react";
import { useMovieReviewsQuery } from "../../../hooks/useMovieReviews";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import "react-multi-carousel/lib/styles.css";
import "./MovieReviewsSlide.style.css";
import { useParams } from "react-router-dom";


const MovieReviewsSlide = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieReviewsQuery({
    id,
  });
  console.log("reviews", data?.results);

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
    <div>
    </div>
  );
};

export default MovieReviewsSlide;
