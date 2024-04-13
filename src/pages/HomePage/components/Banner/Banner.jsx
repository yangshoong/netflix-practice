import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import "./Banner.style.css";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("ddd", data);
  // usePopularMoviesQuery 를 작동시켜서, data, isLoading, isError, error을 받아서 변수에 저장한다.

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
    <div
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0]?.poster_path})`,
      }}
      className="banner"
    >
      {/* 받은 data 값 중 data.results 배열의 값.poster_path를 url과 결합하여 배경
      이미지를 호출한다. */}
      <div className="text-white banner-text-area">
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
        {/* data.results의 배열의 값.title, overview 값을 출력한다. */}
      </div>
    </div>
  );
};
// 배너는 popular movie의 값을 받아서 그중 0번째 배열의 값을 사용하여 화면에 렌더링한다.

export default Banner;
