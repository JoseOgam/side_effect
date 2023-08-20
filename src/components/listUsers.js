import React from "react";

export default function ListUsers(props) {
  return (
    <div>
      <h2 key={props.index}>
        {props.item.id}. {props.item.name}
      </h2>
    </div>
  );
}
