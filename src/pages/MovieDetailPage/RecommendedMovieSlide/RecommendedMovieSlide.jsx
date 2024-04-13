import React from "react";
import { useRecommendedMoviesQuery } from "../../../hooks/useRecommendedMovies";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import "react-multi-carousel/lib/styles.css";
import "./RecommendedMovieSlide.Style.css";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { useParams } from "react-router-dom";
import { responsive } from "../../../constants/responsive";


const RecommendedMovieSlide = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useRecommendedMoviesQuery({
    id,
  });
  console.log("recommended", data);


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
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default RecommendedMovieSlide;
