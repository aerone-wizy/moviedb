import SearchMoviesActionTypes from "./search.types";

const INITIAL_STATE = {
  loading: false,
  movies: null,
  error: "",
};

const SearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchMoviesActionTypes.FETCH_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SearchMoviesActionTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case SearchMoviesActionTypes.FETCH_SEARCH_FAILURE:
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

export default SearchReducer;
