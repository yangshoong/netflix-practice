import React from "react";
import { useMovieDetailsQuery } from "../../hooks/useMovieDetails";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MovieDetailPage.style.css";

const MovieDetailPage = () => {
  

  const { data, isLoading, isError, error } = useMovieDetailsQuery({
  });
  console.log("dede", data);

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
    <div className="page-bg-body">
      MovieDetailPage
      <Container>
        <Row>
          <Col>영화이미지</Col>
          <Col>
            <Row> Title </Row>
            <Row>
              <Col>관람가</Col>
              <Col>개봉일</Col>
              <Col>장르</Col>
              <Col>점수</Col>
            </Row>
            <Row>트레일러 재생</Row>
            <h3> 개요 </h3>
            <Row> 개요 내용</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
  
};

export default MovieDetailPage;
