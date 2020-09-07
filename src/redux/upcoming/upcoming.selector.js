import { createSelector } from "reselect";

const selectUpcoming = (state) => state.upcomingMovies;

export const selectUpcomingMovies = createSelector(
  [selectUpcoming],
  (upcomingMovies) => upcomingMovies.movies
);

export const selectUpcomingIsLoading = createSelector(
  [selectUpcoming],
  (upcomingMovies) => upcomingMovies.loading
);
