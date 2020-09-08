import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Tabs, Spin } from "antd";
import Search from "antd/lib/input/Search";
import { LoadingOutlined } from "@ant-design/icons";
import List from "./list.component";

import { selectIsLoading } from "../redux/movies/movies.selector";

const { TabPane } = Tabs;

const HomePage = ({ loading }) => {
  const [key, setKey] = useState("1");
  const [query, setQuery] = useState("");

  function callback(key) {
    setKey(key);
  }

  const handleSubmit = (value) => {
    setQuery(value);
  };

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <Tabs defaultActiveKey="1" onChange={callback} centered>
      <TabPane tab="Popular Movies" key="1">
        {key === "1" ? <List keynum={key} /> : <div></div>}
      </TabPane>
      <TabPane tab="Upcoming Movies" key="2">
        {key === "2" ? <List keynum={key} /> : <div></div>}
      </TabPane>
      <TabPane tab="Trending Movies" key="3">
        {key === "3" ? <List keynum={key} /> : <div></div>}
      </TabPane>
      <TabPane tab="Search" key="4">
        {key === "4" ? (
          <div>
            <Search
              placeholder="Search a movie"
              onSearch={handleSubmit}
              style={{ width: 300, marginBottom: 30 }}
            />
            <br />
            {!query ? (
              <div></div>
            ) : loading ? (
              <Spin indicator={antIcon} />
            ) : (
              <List keynum={key} query={query} />
            )}
          </div>
        ) : (
          <div></div>
        )}
      </TabPane>
    </Tabs>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectIsLoading,
});

export default connect(mapStateToProps)(HomePage);
