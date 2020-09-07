import PopularMoviesActionTypes from "./popular.types";

const INITIAL_STATE = {
  loading: true,
  movies: null,
  error: "",
};

const PopularReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PopularMoviesActionTypes.FETCH_POPULAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PopularMoviesActionTypes.FETCH_POPULAR_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case PopularMoviesActionTypes.FETCH_POPULAR_FAILURE:
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default PopularReducer;
