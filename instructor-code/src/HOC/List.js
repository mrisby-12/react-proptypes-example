import React from "react";
import withPeople from "./withPeople";

const List = ({ list }) => {
  return (
    <div>
      {list[0] &&
        list.map(val => {
          return <h1>{val.name}</h1>;
        })}
    </div>
  );
};

export default withPeople(List);
