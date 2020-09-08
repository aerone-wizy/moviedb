import MoviesActionTypes from "./movies.types";

const INITIAL_STATE = {
  loading: true,
  data: null,
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
        data: action.payload,
      };
    case MoviesActionTypes.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default MoviesReducer;
