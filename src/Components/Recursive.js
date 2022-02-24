import React from "react";

const Recursive = (props) => {
  return (
    <ul>
      {props.data.map((el, index) => {
        return (
          <li key={index}>
            {el.name} 
            {el.child && <Recursive data={el.child} />}
          </li>
        );
      })}
    </ul>
  );
};

export default Recursive;
