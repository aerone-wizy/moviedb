import PopularMoviesActionTypes from "./popular.types";

const fetchRequest = () => ({
  type: PopularMoviesActionTypes.FETCH_POPULAR_REQUEST,
});

const fetchSuccess = (movies) => ({
  type: PopularMoviesActionTypes.FETCH_POPULAR_SUCCESS,
  payload: movies,
});

const fetchFailure = (errorMessage) => ({
  type: PopularMoviesActionTypes.FETCH_POPULAR_FAILURE,
  payload: errorMessage,
});

export const fetchPopularMovies = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=2735ceed8da92ad1eadec0294488c1db&language=en-US&page=1"
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
