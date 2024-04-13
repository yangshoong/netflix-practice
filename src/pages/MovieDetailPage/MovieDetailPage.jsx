import React from "react";
import { useMovieDetailsQuery } from "../../hooks/useMovieDetails";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MovieDetailPage.style.css";
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  // useMovieGenreQuery를 실행시켜서 받은 data를 genreData라는 이름의 변수에 담아 사용한다.

  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailsQuery({ id });
  console.log("detail", data);
  
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

  // data가 있을 때만 렌더링하도록 수정
  if (!data) {
    return null; // 또는 로딩 상태를 렌더링할 수 있습니다.
  }

  const defaultPosterUrl = "https://via.placeholder.com/600x900?text=No+Poster";
  const posterUrl = data.poster_path
    ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`
    : defaultPosterUrl;

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
            <Row className="row-spacer">
              <div>개봉일 : {data.release_date}</div>
              <div>점수 : {data.popularity}</div>
              <div>평점 : {data.vote_average}</div>
              <div>등급 : {data.adult ? "over 18" : "under 18"}</div>
            </Row>
            <Row className="row-spacer">
            </Row>
            <Row className="row-spacer">트레일러 재생</Row>
            <h3 className="row-spacer">개요</h3>
            <Row>개요 내용</Row>
            <Row className="row-spacer">리뷰</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetailPage;
