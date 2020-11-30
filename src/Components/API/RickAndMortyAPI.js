import React, { Component } from "react";

import Homepage from "../Homepage";

import "../styles/styles.css";

class RickAndMortyAPI extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      character: [],
      page: 1,
      info: [],
    };
  }

  fetchData = async (page) => {
    this.setState({
      isLoading: false,
    });
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      if (res.ok) {
        const data = await res.json();

        setTimeout(() => {
          this.setState(() => {
            return {
              isLoading: true,
              character: data.results,
              info: data.info.pages,
            };
          });
        }, 250);
      } else {
        this.setState({
          error: true,
        });
      }
    } catch (e) {
      this.setState({
        error: true,
      });
      console.log(e);
    }
  };

  componentDidMount = () => {
    this.fetchData(this.state.page);
  };

  nextClick = () => {
    this.fetchData(
      this.state.page === this.state.info ? 1 : this.state.page + 1
    );
    this.setState({
      page: this.state.page === this.state.info ? 1 : this.state.page + 1,
    });
  };

  prevClick = () => {
    this.fetchData(
      this.state.page <= 1 ? this.state.info : this.state.page - 1
    );
    this.setState({
      page: this.state.page <= 1 ? this.state.info : this.state.page - 1,
    });
  };

  render() {
    return (
      <div>
        {!this.state.error ? (
          <div>
            <Homepage
              data={this.state}
              prev={this.prevClick}
              next={this.nextClick}
            />
          </div>
        ) : (
          <h1 className="error">
            sorry for the inconvenience... try again later
          </h1>
        )}
      </div>
    );
  }
}

export default RickAndMortyAPI;
