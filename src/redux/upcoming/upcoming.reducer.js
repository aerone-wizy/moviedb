import UpcomingMoviesActionTypes from "./upcoming.types";

const INITIAL_STATE = {
  loading: true,
  movies: null,
  error: "",
};

const UpcomingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UpcomingMoviesActionTypes.FETCH_UPCOMING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UpcomingMoviesActionTypes.FETCH_UPCOMING_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case UpcomingMoviesActionTypes.FETCH_UPCOMING_FAILURE:
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

export default UpcomingReducer;
