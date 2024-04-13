import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopularMovies = () => {
  return api.get("/movie/popular");
};
// /movie/popular 주소에 api를 get 하여 result를 받는다. api get은 result라는 객체를 만들어서 데이터를 저장한다.

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-popular'],
    queryFn: fetchPopularMovies,
    select:(result)=>result.data,
  });
}; 
// useQuery라는 객체를 만들어서 queryKey 에는 movie-popular 을 입력해주고, queryFn 에는 fetchPopularMovies 함수를 실행시킨 값을 입력해주고, result 중 result.data 만을 선택저장한다. 

