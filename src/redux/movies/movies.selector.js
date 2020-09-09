import { createSelector } from "reselect";

export const selectMovieData = (state) => state.data;
export const selectIsLoading = (state) => state.loading;

export const selectMovieDetails = (id) => {
  return createSelector([selectMovieData], (movies) =>
    movies.find((movie) => movie.id === id)
  );
};
