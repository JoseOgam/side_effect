import React from "react";
import "../App.css";

const Posts = (props) => {
  return (
    <div className="view">
      <div className="main">
        <h2 className="title">
          {" "}
          {props.item.userId}.{props.item.title}{" "}
        </h2>
        <p> {props.item.body} </p>
      </div>
    </div>
  );
};

export default Posts;
