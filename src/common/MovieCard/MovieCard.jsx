import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    return genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj ? genreObj.name : "Unknown"; 
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
      }}
      className="movie-card"
    >
      <div className="overlay">
        <div className="movie-card-content">
          <h3>{movie.title}</h3>
          {showGenre(movie.genre_ids).map((genreName, index) => (
            <Badge bg="danger" key={index}>
              {genreName}
            </Badge>
          ))}
          <div>
            <div>개봉일 : {movie.release_date}</div>
            <div>점수 : {movie.popularity}</div>
            <div>평점 : {movie.vote_average}</div>
            <div>등급 : {movie.adult ? "over 18" : "under 18"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
