import TrendingMoviesActionTypes from "./trending.types";

const fetchRequest = () => ({
  type: TrendingMoviesActionTypes.FETCH_TRENDING_REQUEST,
});

const fetchSuccess = (movies) => ({
  type: TrendingMoviesActionTypes.FETCH_TRENDING_SUCCESS,
  payload: movies,
});

const fetchFailure = (errorMessage) => ({
  type: TrendingMoviesActionTypes.FETCH_TRENDING_FAILURE,
  payload: errorMessage,
});

export const fetchTrendingMovies = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=2735ceed8da92ad1eadec0294488c1db"
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
