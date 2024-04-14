import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { useNavigate } from "react-router-dom"; 

 
const MovieCard = ({ movie }) => {
   const navigate = useNavigate();
  // MovieCard로 props를 전달할때 movie, index 두가지를 넘겨 주었는데, 이중 index는 부모컴포넌트에서 활용이 되며, MovieCard는 자신이 필요로 하는 movie만을 받아서 렌더링이 사용한다.
  const { data: genreData } = useMovieGenreQuery();
// useMovieGenreQuery를 실행시켜서 받은 data를 genreData라는 이름의 변수에 담아 사용한다.
  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    return genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj ? genreObj.name : "Unknown";
    });
  };
  // showGenre 라는 함수에 매개변수로 genreIdList를 넣어준다. 만약 미리 받아놓은 genreData 값이 없다면 null을 반환한다. genreData값이 있다면, 매개변수로 받은 GenreIdList의 값을 map으로 돌리며, map은 genreIdList의 값을 순회하면서 id에 대한 값을 수행한다. 수행하는 내용은 genreData의 genre.id의 값과 id를 비교 하면서 같으면 genreObj에 저장한다.
  const handleCardClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
      }}
      className="movie-card"
      onClick={handleCardClick}
    >
      <div className="overlay">
        <div className="movie-card-content">
          <h3>{movie.title}</h3>
          {showGenre(movie.genre_ids).map((genreName, index) => (
            <Badge bg="danger" key={index}>
              {genreName}
            </Badge>
          ))}
          {/* showGenre에 MovieCard에 props로 전달된 객체 중 movie.genre_ids를 전달한다. 이후 showGenre의 반환값 genreObj(영화의 장르와 일치하는 전체장르 id 배열)을 가지고 map을 돌리면서 genreName, index에 대한 작업을 수행하는데, 이때 작업은 badge에 각 index와 genreName을 입력하여 만드는 것이다.     */}
          <div>
            <div>Release : {movie.release_date}</div>
            <div>Popularity : {movie.popularity}</div>
            <div>Vote Average : {movie.vote_average}</div>
            <div>Adult : {movie.adult ? "over 18" : "under 18"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
