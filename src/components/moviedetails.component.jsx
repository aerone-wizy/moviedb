import React from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { selectMovieDetails } from "../redux/movies/movies.selector";

const MovieDetails = ({ id, movie }) => {
  return (
    <Card
      style={{ margin: "5px 100px 10px" }}
      cover={
        <img
          alt="banner"
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        />
      }
    >
      <Meta title={movie.title} description={movie.overview} />
    </Card>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    movie: selectMovieDetails(ownProps.id)(state),
  };
};

export default connect(mapStateToProps)(MovieDetails);
