import React, { useState } from "react";
import "./MoviesPage.style.css";
import { useSearchMovieQuery } from "../../hooks/useSerarchMovie";
import { useSearchParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";

const MoviesPage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword, page
  });
  console.log("sss", data);

  const handlePageClick = ({ selected }) => {
    console.log("page", page);
    setPage(selected + 1);
  };

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
      <Container>
        <Row>
          <Col lg={4} xs={12}>
            {" "}
            필터{" "}
          </Col>
          <Col lg={8} xs={12}>
            {" "}
            영화 카드{" "}
            <Row>
              {data.results?.map((movie, index) => (
                <Col key={index} lg={4} xs={12}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={data.total_pages} //전체 페이지가 몇개인지
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
              forcePage={page-1}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MoviesPage;
