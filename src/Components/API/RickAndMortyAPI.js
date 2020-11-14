import React, { Component } from "react";

import "../styles/styles.css";

class RickAndMortyAPI extends Component {
  constructor() {
    super();
    this.state = {
      character: "",
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          character: data.results.map((all) => {
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
                    <strong>Episodes: </strong>
                    {all.episode.length}
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
          }),
        })
      );
  }

  render() {
    return (
      <div>
        <h1 className="title">Rick and Morty</h1>
        <div className="container">{this.state.character}</div>
      </div>
    );
  }
}

export default RickAndMortyAPI;
