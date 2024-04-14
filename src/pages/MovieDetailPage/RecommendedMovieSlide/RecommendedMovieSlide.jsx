import React from "react";
import { useRecommendedMoviesQuery } from "../../../hooks/useRecommendedMovies";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { useParams } from "react-router-dom";
import { responsive } from "../../../constants/responsive";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

const RecommendedMovieSlide = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useRecommendedMoviesQuery({ id });

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (isError) {
    return <Alert variant="danger">Error: {error.message}</Alert>;
  }

  if (!data || !data.results) {
    return <div>No recommended movies available.</div>;
  }

  return (
    <div>
      <MovieSlider movies={data.results} responsive={responsive} />
    </div>
  );
};

export default RecommendedMovieSlide;
