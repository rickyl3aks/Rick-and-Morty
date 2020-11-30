import React from "react";

function Cards({ all }) {
  return (
    <div className="grid">
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
}

export default Cards;
