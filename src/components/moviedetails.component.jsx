import React from "react";
import { Card, Image } from "antd";
import Meta from "antd/lib/card/Meta";

import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import {
  selectMovieDetails,
  selectIsLoading,
} from "../redux/movies/movies.selector";

const MovieDetails = ({ movie, loading }) => {
  console.log(movie);
  const {
    title,
    backdrop_path,
    poster_path,
    tagline,
    overview,
    release_date,
  } = movie;
  return (
    <Card
      style={{ margin: "5px 100px 10px" }}
      cover={
        <img
          alt="banner"
          src={
            loading
              ? "https://lunawood.com/wp-content/uploads/2018/02/placeholder-image-300x225.png"
              : `https://image.tmdb.org/t/p/w500/${backdrop_path}`
          }
        />
      }
    >
      <div>"{tagline}"</div> <br />
      <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
      <br />
      <Meta
        title={loading ? "" : title}
        description={loading ? "" : overview}
      />
      <br />
      <div>Date released: {release_date}</div>
    </Card>
  );
};

const mapStateToProps = (state, ownProps) => ({
  movie: selectMovieDetails(ownProps.id)(state),
  loading: selectIsLoading(state),
});

export default connect(mapStateToProps)(MovieDetails);
