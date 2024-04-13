import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieReviews = ({ id }) => {
  return id ? api.get(`/movie/${id}/reviews`) : null;
};

export const useMovieReviewsQuery = ({ id }) => {
  return useQuery({
    queryKey: ['movie-review', id],
    queryFn: () => fetchMovieReviews({ id }),
    select: (result) => result.data,
  });
};