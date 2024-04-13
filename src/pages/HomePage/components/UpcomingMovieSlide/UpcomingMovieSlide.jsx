import React from "react";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import "react-multi-carousel/lib/styles.css";
import "./UpcomingMovieSlide.style.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";


const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

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
        title="Upcoming Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMovieSlide;
