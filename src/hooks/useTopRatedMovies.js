import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchTopRatedMovies = () => {
  const data = api.get(`/movie/top_rated`);
  return data;
};

export const useTopRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ['top-rated-movies'],
    queryFn: fetchTopRatedMovies,
    select: (result) => result?.data,
  });
};