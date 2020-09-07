import SearchMoviesActionTypes from "./search.types";

const fetchRequest = () => ({
  type: SearchMoviesActionTypes.FETCH_SEARCH_REQUEST,
});

const fetchSuccess = (movies) => ({
  type: SearchMoviesActionTypes.FETCH_SEARCH_SUCCESS,
  payload: movies,
});

const fetchFailure = (errorMessage) => ({
  type: SearchMoviesActionTypes.FETCH_SEARCH_FAILURE,
  payload: errorMessage,
});

export const fetchSearchMovies = (query) => {
  return (dispatch) => {
    dispatch(fetchRequest());
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=2735ceed8da92ad1eadec0294488c1db&language=en-US&query=${query}&page=1&include_adult=false`
    ).then((result) =>
      result
        .json()
        .then((data) => {
          dispatch(fetchSuccess(data.results));
        })
        .catch((error) => dispatch(fetchFailure(error.message)))
    );
  };
};
