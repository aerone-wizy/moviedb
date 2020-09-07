import { createSelector } from "reselect";

const selectPopular = (state) => state.popularMovies;

export const selectPopularMovies = createSelector(
  [selectPopular],
  (popularMovies) => popularMovies.movies
);

export const selectPopularIsLoading = createSelector(
  [selectPopular],
  (popularMovies) => popularMovies.loading
);
