import { createSelector } from "reselect";

export const selectMovieData = (state) => state.movies;

export const selectIsLoading = (state) => state.loading;

export const selectMovieDetails = (id) => {
  return createSelector([selectMovieData], (movies) =>
    movies.find((movie) => movie.id === id)
  );
};
