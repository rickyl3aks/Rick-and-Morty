import React from "react";
import Btn from "./Btn";
import Character from "./Character";

function Homepage(props) {
  return (
    <div>
      <h1 className="title">Rick and Morty</h1>
      {!props.data.isLoading ? (
        <h1 className="title">Loading...</h1>
      ) : (
        <div>
          <Btn next={props.next} prev={props.prev} />
          <p className="pages" style={{ marginLeft: "1rem" }}>
            {props.data.page}/{props.data.info}
          </p>
          <Character data={props.data} />
          <Btn next={props.next} prev={props.prev} />
        </div>
      )}
    </div>
  );
}

export default Homepage;
