import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import "react-multi-carousel/lib/styles.css";
import './PopularMovieSlide.style.css';
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import {responsive} from "../../../../constants/responsive";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  //usePopularMoviesQuery 를 실행시켜서 api를 작동시켜 result.data를 받아온다.

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
        title="Popular Movies"
        movies={data.results}
        responsive={responsive}
      />
      {/* MovieSlider를 작동시키면서 title명, movies의 값으로 data.result를, responsive 상수값을 받아와서 responsive로 props를 넘겨준다. */}
    </div>
  );
};

export default PopularMovieSlide;
