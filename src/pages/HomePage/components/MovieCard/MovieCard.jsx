import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <div className="movie-card-content">
          <h3>{movie.title}</h3>
          {movie.genre_ids.map((id) => (
            <Badge bg="danger" key={id}>
              {id}
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
