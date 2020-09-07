import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Tabs, Spin } from "antd";
import Search from "antd/lib/input/Search";
import { LoadingOutlined } from "@ant-design/icons";
import List from "./list.component";

import { fetchPopularMovies } from "../redux/popular/popular.actions";
import {
  selectPopularMovies,
  selectPopularIsLoading,
} from "../redux/popular/popular.selector";

import { fetchUpcomingMovies } from "../redux/upcoming/upcoming.actions";
import {
  selectUpcomingMovies,
  selectUpcomingIsLoading,
} from "../redux/upcoming/upcoming.selector";

import { fetchTrendingMovies } from "../redux/trending/trending.actions";
import {
  selectTrendingMovies,
  selectTrendingIsLoading,
} from "../redux/trending/trending.selector";

import { fetchSearchMovies } from "../redux/search/search.actions";
import {
  selectSearchMovies,
  selectSearchIsLoading,
} from "../redux/search/search.selector";

const { TabPane } = Tabs;

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
    this.props.fetchUpcomingMovies();
    this.props.fetchTrendingMovies();
  }

  render() {
    const {
      popularloading,
      popularMovies,
      upcomingloading,
      upcomingMovies,
      trendingloading,
      trendingMovies,
      searchloading,
      searchMovies,
      fetchSearchMovies,
    } = this.props;

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    return (
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Popular Movies" key="1">
          {popularloading || !popularMovies ? (
            <Spin indicator={antIcon} />
          ) : (
            <List result={popularMovies} />
          )}
        </TabPane>
        <TabPane tab="Upcoming Movies" key="2">
          {upcomingloading || !upcomingMovies ? (
            <Spin indicator={antIcon} />
          ) : (
            <List result={upcomingMovies} />
          )}
        </TabPane>
        <TabPane tab="Trending Movies" key="3">
          {trendingloading || !trendingMovies ? (
            <Spin indicator={antIcon} />
          ) : (
            <List result={trendingMovies} />
          )}
        </TabPane>
        <TabPane tab="Search" key="4">
          <Search
            placeholder="Search a movie"
            onSearch={(value) => fetchSearchMovies(value)}
            style={{ width: 300, marginBottom: 30 }}
          />
          <br />
          {!searchMovies ? (
            <div>No result</div>
          ) : searchloading ? (
            <Spin indicator={antIcon} />
          ) : (
            <List result={searchMovies} />
          )}
        </TabPane>
      </Tabs>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  popularloading: selectPopularIsLoading,
  popularMovies: selectPopularMovies,
  upcomingloading: selectUpcomingIsLoading,
  upcomingMovies: selectUpcomingMovies,
  trendingloading: selectTrendingIsLoading,
  trendingMovies: selectTrendingMovies,
  searchloading: selectSearchIsLoading,
  searchMovies: selectSearchMovies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPopularMovies: () => dispatch(fetchPopularMovies()),
  fetchUpcomingMovies: () => dispatch(fetchUpcomingMovies()),
  fetchTrendingMovies: () => dispatch(fetchTrendingMovies()),
  fetchSearchMovies: (query) => dispatch(fetchSearchMovies(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
