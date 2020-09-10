import MoviesActionTypes from "./movies.types";

const INITIAL_STATE = {
  loading: true,
  movies: null,
  error: "",
};

const MoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MoviesActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case MoviesActionTypes.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case MoviesActionTypes.FETCH_MOVIE_DETAILS:
      let movies = state.movies.map((movie) =>
        movie.id === action.payload.id ? action.payload : movie
      );

      return {
        ...state,
        loading: false,
        movies: movies,
      };
    default:
      return state;
  }
};

export default MoviesReducer;
