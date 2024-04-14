import React, { useState } from "react";
import { useMovieDetailsQuery } from "../../hooks/useMovieDetails";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./MovieDetailPage.style.css";
import { useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import RecommendedMovieSlide from "./RecommendedMovieSlide/RecommendedMovieSlide";
import MovieReviewsSlide from "./MovieReviewsSlide/MovieReviewsSlide";
import MovieTrailerModal from "./MovieTrailerModal/MovieTrailerModal";

const MovieDetailPage = () => {
  // useMovieGenreQuery를 실행시켜서 받은 data를 genreData라는 이름의 변수에 담아 사용한다.

  const { id } = useParams();
  console.log("id", id);
  const { data, isLoading, isError, error } = useMovieDetailsQuery({ id });
  console.log("detail", data);

  const defaultPosterUrl = "https://via.placeholder.com/600x900?text=No+Poster";
  const posterUrl = data
    ? data.poster_path
      ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`
      : defaultPosterUrl
    : defaultPosterUrl;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

  if (!data) {
    return null;
  }

  return (
    <div className="page-bg-body">
      <Container>
        <Row>
          <Col>
            <div className="poster-container">
              <img src={posterUrl} alt="Movie Poster" className="poster-img" />
            </div>
          </Col>
          <Col>
            <h1>{data.title}</h1>
            <h3>{data.tagline}</h3>
            <Row className="row-spacer">
              <div>Release Date : {data.release_date}</div>
              <div>Popularity : {data.popularity}</div>
              <div>Vote Average : {data.vote_average}</div>
              <div>Adult : {data.adult ? "over 18" : "under 18"}</div>
              <div>Runtime : {data.runtime}</div>
              <div>
                Revenue :{" "}
                {data.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </div>
            </Row>
            <Row className="row-spacer"></Row>
            <Row>
              <Button variant="secondary" onClick={handleShow}>
                Trailer
              </Button>
            </Row>
            <h3 className="row-spacer">Overview</h3>
            <Row>{data.overview}</Row>
            <Row className="row-spacer"></Row>
          </Col>
        </Row>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Reviews" title="Reviews">
            <MovieReviewsSlide />
          </Tab>
          <Tab eventKey="Recommended Movies" title="Recommended Movies">
            <RecommendedMovieSlide />
          </Tab>
        </Tabs>
      </Container>
      <MovieTrailerModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default MovieDetailPage;