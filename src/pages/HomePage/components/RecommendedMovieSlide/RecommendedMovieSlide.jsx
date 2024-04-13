import React from "react";
import { useRecommendedMoviesQuery } from "../../../../hooks/useRecommendedMovies";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import "react-multi-carousel/lib/styles.css";
import "./RecommendedMovieSlide.style.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const RecommendedMovieSlide = () => {
  const { data, isLoading, isError, error } = useRecommendedMoviesQuery();

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
      <MovieSlider
        title="Now Playing"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default RecommendedMovieSlide;
