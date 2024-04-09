import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchUpcomingMovies = () => {
  const data = api.get(`/movie/upcoming`);
  return data;
};

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ['upcoming-movies'],
    queryFn: fetchUpcomingMovies,
    select: (result) => result?.data,
  });
};