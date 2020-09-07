import React from "react";
import { Card, Space } from "antd";
import Meta from "antd/lib/card/Meta";

const List = ({ result }) => {
  return (
    <Space
      size="large"
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {result.map((movie) => (
        <Card
          key={movie.id}
          hoverable
          style={{ width: 240, marginBottom: 25 }}
          cover={
            <img
              alt="example"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          }
        >
          <Meta
            title={movie.title}
            description={"Popularity: " + movie.popularity}
          />
        </Card>
      ))}
    </Space>
  );
};

export default List;
