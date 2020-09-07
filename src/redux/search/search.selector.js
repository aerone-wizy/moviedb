import { createSelector } from "reselect";

const selectSearch = (state) => state.searchMovies;

export const selectSearchMovies = createSelector(
  [selectSearch],
  (searchMovies) => searchMovies.movies
);

export const selectSearchIsLoading = createSelector(
  [selectSearch],
  (searchMovies) => searchMovies.loading
);
