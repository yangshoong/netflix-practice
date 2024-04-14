import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSerarchMovie";
import { useSearchParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import "./MoviesPage.style.css";

const MoviesPage = () => {
  const [query] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  console.log("sss", data);

  const handlePageClick = ({ selected }) => {
    console.log("page", page);
    setPage(selected + 1);
  };

  const genres = [
    "SF",
    "TV Movie",
    "Family",
    "Horror",
    "Documentary",
    "Drama",
    "Romance",
    "Adventure",
    "Mystery",
    "Crime",
    "Western",
    "Thriller",
    "Animation",
    "Action",
    "History",
    "Music",
    "War",
    "Comedy",
    "Fantasy",
  ];

  const [sortBy, setSortBy] = useState("popularity");
  const handleSort = (sortOption) => {
    setSortBy(sortOption);
  };

  const sortedResults = data.results?.sort((a, b) => {
    switch (sortBy) {
      case "popularity":
        return b.popularity - a.popularity;
      case "voteAverage":
        return b.vote_average - a.vote_average;
      case "releaseDate":
        return new Date(b.release_date) - new Date(a.release_date);
      default:
        return 0;
    }
  });

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
          <Col lg={3} xs={12}>
            <h3>Movies</h3>
            <Row className="spacer-row"></Row>
            <Row>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Sort
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleSort("popularity")}>
                    Popularity
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSort("voteAverage")}>
                    Vote Average
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleSort("releaseDate")}>
                    Release Date
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>
            <Row className="spacer-row"></Row>
            <Row className="spacer-row"></Row>
            <Row>
              <Col lg={12} xs={12}>
                <h5>Genres</h5>
                <Row>
                  {genres.map((genre, index) => (
                    <Col key={index} className="mb-3">
                      <Badge
                        pill
                        bg="light"
                        text="dark"
                        className="genre-badge"
                      >
                        {genre}
                      </Badge>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={1} xs={1}></Col>
          <Col lg={8} xs={12}>
            <Row>
              {sortedResults?.map((movie, index) => (
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
              forcePage={page - 1}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MoviesPage;
