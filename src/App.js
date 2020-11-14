import React, { Component } from "react";
import RickAndMortyAPI from "./Components/API/RickAndMortyAPI";

class App extends Component {
  render() {
    return (
      <div>
        <RickAndMortyAPI />
      </div>
    );
  }
}

export default App;
