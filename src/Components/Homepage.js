import React from "react";
import Btn from "./Btn";

function RickandMorty(props) {
  const name = props.data.character.map((all) => {
    return (
      <div key={all.id} className="grid">
        <div className="info">
          <p>
            <strong>Name: </strong>
            {all.name}
          </p>
          <p>
            <strong>Species: </strong>
            {all.species}
          </p>
          <p>
            <strong>Gender: </strong>
            {all.gender}
          </p>
          <p>
            <strong>Origin: </strong>
            {all.origin.name}
          </p>
          <p>
            <strong>Last known location: </strong>
            {all.location.name}
          </p>
          <p>
            <strong>Seen in: </strong>
            {all.episode.length === 1
              ? `${all.episode.length} Episode`
              : `${all.episode.length} Episodes`}
          </p>
          <p>
            <strong>Status: </strong>
            {all.status}{" "}
            <span
              className={
                all.status === "Alive"
                  ? "green"
                  : "red" && all.status === "unknown"
                  ? "orange"
                  : "red"
              }
            ></span>
          </p>
        </div>
        <div>
          <img src={all.image} alt={all.name} />
        </div>
      </div>
    );
  });
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
          <div className="container">{name}</div>
          <Btn next={props.next} prev={props.prev} />
        </div>
      )}
    </div>
  );
}

export default RickandMorty;
