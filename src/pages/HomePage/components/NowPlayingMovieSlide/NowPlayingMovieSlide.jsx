import React from "react";
import { useNowPlayingMoviesQuery } from "../../../../hooks/useNowPlayingMovies";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import "react-multi-carousel/lib/styles.css";
import "./NowPlayingMovieSlide.style.css";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";


const NowPlayingMovieSlide = () => {
  const { data, isLoading, isError, error } = useNowPlayingMoviesQuery();

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

export default NowPlayingMovieSlide;
