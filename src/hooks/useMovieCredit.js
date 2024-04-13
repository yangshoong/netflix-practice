import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieCredit = ({ id }) => {
  return api.get(`/movie/${id}/credits`);
};

export const useMovieCreditQuery = ({ id }) => {
  return useQuery({
    queryKey: ['movie-credit', id],
    queryFn: () => fetchMovieCredit({ id }),
    select: (result) => result.data,
  });
};