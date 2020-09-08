// import { createSelector } from "reselect";

export const selectMovieData = (state) => state.data;
export const selectIsLoading = (state) => state.loading;

// export const selectMovieData = createSelector(
//   [selectMovies],
//   (movies) => movies.data
// );

// export const selectIsLoading = createSelector(
//   [selectMovies],
//   (movies) => movies.loading
// );
