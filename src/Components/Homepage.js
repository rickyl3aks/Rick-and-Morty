import React from "react";
import Btn from "./Btn";
import Loading from "./Loading";
import Character from "./Character";

function Homepage(props) {
  return (
    <div>
      <h1 className="title">Rick and Morty</h1>
      {!props.data.isLoading ? (
        <div>
          <Btn next={props.next} prev={props.prev} />
          <br />
          <Loading />
        </div>
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
