import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchRecommendedMovies = () => {
  return api.get("/movie/now_playing");
};

export const useRecommendedMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-recommended'],
    queryFn: fetchRecommendedMovies,
    select: (result) => result.data,
  });
};