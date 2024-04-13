import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

// movie_id가 주어졌을 때 영화 상세 정보를 API로부터 불러오는 함수
const fetchMovieDetails = ({ movie_id }) => {
  return movie_id ? api.get(`/movie/${movie_id}/videos`) : null; // 조건부 실행 후 null 반환 처리
};

// 영화 상세 정보를 불러오는 custom hook
export const useMovieDetailsQuery = ({ movie_id }) => {
  return useQuery({
    queryKey: ['movie-details', { movie_id }],
    queryFn: () => fetchMovieDetails({ movie_id }),
    select: (result) => result.data,
  });
};
