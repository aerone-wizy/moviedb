import { createSelector } from "reselect";

const selectTrending = (state) => state.trendingMovies;

export const selectTrendingMovies = createSelector(
  [selectTrending],
  (trendingMovies) => trendingMovies.movies
);

export const selectTrendingIsLoading = createSelector(
  [selectTrending],
  (trendingMovies) => trendingMovies.loading
);
