import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useMovieVideosQuery = ({ id }) => {
  return useQuery({
    queryKey: ["movie-video", { id }],
    queryFn: () => {
      return id ? api.get(`/movie/${id}/videos`) : "";
    },
    select: (result) => result.data,
  });
};