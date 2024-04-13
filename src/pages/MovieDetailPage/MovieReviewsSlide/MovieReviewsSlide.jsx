import React from "react";
import { useMovieReviewsQuery } from "../../../hooks/useMovieReviews";
import "react-multi-carousel/lib/styles.css";
import "./MovieReviewsSlide.style.css";
import { useParams } from "react-router-dom";
import { Accordion, Row, Col, Alert, Spinner } from "react-bootstrap";

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

  if (!data?.results?.length) {
    return <div>No reviews available.</div>;
  }

 return (
  <Row>
    <Col>
      <Accordion defaultActiveKey="0" className="custom-accordion">
        {data.results.map((review, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header>
              {new Date(review.created_at).toLocaleDateString()}{" "}
              {review.author}
            </Accordion.Header>
            <Accordion.Body>
              <p>{review.content}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Col>
  </Row>
);
}

export default MovieReviewsSlide;
