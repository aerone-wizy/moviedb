import TrendingMoviesActionTypes from "./trending.types";

const INITIAL_STATE = {
  loading: true,
  movies: null,
  error: "",
};

const TrendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TrendingMoviesActionTypes.FETCH_TRENDING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TrendingMoviesActionTypes.FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case TrendingMoviesActionTypes.FETCH_TRENDING_FAILURE:
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

export default TrendingReducer;
