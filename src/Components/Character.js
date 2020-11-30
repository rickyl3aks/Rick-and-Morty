import React from "react";
import Cards from "./Cards";

function Character(props) {
  return (
    <div>
      <div className="container">
        {props.data.character.map((all) => {
          return <Cards all={all} key={all.id} />;
        })}
      </div>
    </div>
  );
}

export default Character;
