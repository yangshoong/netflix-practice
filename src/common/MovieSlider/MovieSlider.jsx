import React from 'react'
import './MovieSlider.style.css';
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";



const MovieSlider = ({ title, movies, responsive }) => {
  // MovieSlider는 title, movies, responsive를 props로 받아서 렌더링을 한다.
  return (
    <div>
      <h3>{title}</h3> 
      {/* props로 받은 title를 출력한다. */}
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
        {/* props로 전달받은 movies의 값을 하나씩 돌리는데, 그 내용 중 movie, index의 값을 movieCard 에 각각 movie, key에 props로 전달해준다.
        이때 map의 인자로 들어가는 movie는 index (배열 순서)에 해당하는 객체 전체를 넣어준다.  */}
      </Carousel>
    </div>
  );
};

export default MovieSlider
