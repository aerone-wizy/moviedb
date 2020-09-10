import MoviesActionTypes from "./movies.types";

const fetchRequest = () => ({
  type: MoviesActionTypes.FETCH_REQUEST,
});

const fetchSuccess = (movies) => ({
  type: MoviesActionTypes.FETCH_SUCCESS,
  payload: movies,
});

const fetchFailure = (errorMessage) => ({
  type: MoviesActionTypes.FETCH_FAILURE,
  payload: errorMessage,
});

const fetchMovieDetailsSuccess = (movie) => ({
  type: MoviesActionTypes.FETCH_MOVIE_DETAILS,
  payload: movie,
});

export const fetchMovies = (category, query = "") => {
  let requestString = "";
  switch (category) {
    case "popular":
      requestString =
        "https://api.themoviedb.org/3/movie/popular?api_key=2735ceed8da92ad1eadec0294488c1db&language=en-US&page=1";
      break;
    case "upcoming":
      requestString =
        "https://api.themoviedb.org/3/movie/upcoming?api_key=2735ceed8da92ad1eadec0294488c1db&language=en-US&page=1";
      break;
    case "trending":
      requestString =
        "https://api.themoviedb.org/3/trending/all/day?api_key=2735ceed8da92ad1eadec0294488c1db";
      break;
    case "search":
      requestString = `https://api.themoviedb.org/3/search/movie?api_key=2735ceed8da92ad1eadec0294488c1db&language=en-US&query=${query}&page=1&include_adult=false`;
      break;
    default:
      break;
  }
  return (dispatch) => {
    dispatch(fetchRequest());
    fetch(requestString).then((result) =>
      result
        .json()
        .then((data) => {
          dispatch(
            fetchSuccess(
              data.results.map((movie) => ({
                id: movie.id,
                title: movie.title,
                // release_date: movie.release_date,
                // backdrop_path: movie.backdrop_path,
                poster_path: movie.poster_path,
                // overview: movie.overview,
              }))
            )
          );
        })
        .catch((error) => dispatch(fetchFailure(error.message)))
    );
  };
};

export const fetchMovieDetails = (movieId) => {
  return (dispatch) => {
    dispatch(fetchRequest());
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=2735ceed8da92ad1eadec0294488c1db&language=en-US`
    ).then((result) =>
      result
        .json()
        .then((movie) => {
          console.log(movie);
          dispatch(
            fetchMovieDetailsSuccess({
              id: movie.id,
              title: movie.title,
              release_date: movie.release_date,
              backdrop_path: movie.backdrop_path,
              poster_path: movie.poster_path,
              overview: movie.overview,
              tagline: movie.tagline,
            })
          );
        })
        .catch((error) => dispatch(fetchFailure(error.message)))
    );
  };
};
