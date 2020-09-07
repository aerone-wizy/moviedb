import UpcomingMoviesActionTypes from "./upcoming.types";

const fetchRequest = () => ({
  type: UpcomingMoviesActionTypes.FETCH_UPCOMING_REQUEST,
});

const fetchSuccess = (movies) => ({
  type: UpcomingMoviesActionTypes.FETCH_UPCOMING_SUCCESS,
  payload: movies,
});

const fetchFailure = (errorMessage) => ({
  type: UpcomingMoviesActionTypes.FETCH_UPCOMING_FAILURE,
  payload: errorMessage,
});

export const fetchUpcomingMovies = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=2735ceed8da92ad1eadec0294488c1db&language=en-US&page=1"
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
