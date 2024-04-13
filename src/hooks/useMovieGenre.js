import { useQuery } from "@tanstack/react-query"
import api from "../utils/api";

const fetchMovieGenre = () => {
  return api.get(`/genre/movie/list`)
}

export const useMovieGenreQuery = () => {
  return useQuery({
    queryKey: ['movie-genre'],
    queryFn: fetchMovieGenre,
    select:(result)=>result.data.genres,
    staleTime:300000,
  })
}
// useMovieGenreQuery 는 useQuery라는 함수를 실행시켜서 queryKey, queryFn으로 fetchMovieGenre을 실행시켜서 얻은 값, 그리고 그 값중 data.genres 의 값 만을 저장한다. staleTime을 30만 밀리초로 설정함으로써 이 시간동안에는 해당 데이터를 최신으로 간주하여 반복적인 fetch가 발생하지 않도록 한다.