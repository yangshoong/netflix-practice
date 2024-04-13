import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieInfo = ({ id }) => {
  return api.get(`/movie/${id}/videos`);
};

export const useMovieInfoQuery = ({ id }) => {
  return useQuery({
    queryKey: ['movie-info', id],
    queryFn: () => fetchMovieInfo({ id }),
    select: (result) => result.data.results,
  });
};