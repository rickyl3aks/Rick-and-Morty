import React from "react";
import Cards from "./Cards";

const Character = ({ data }) => {
  return (
    <div>
      <div className="container">
        {data.character.map((all) => {
          return <Cards all={all} key={all.id} />;
        })}
      </div>
    </div>
  );
};

export default Character;
