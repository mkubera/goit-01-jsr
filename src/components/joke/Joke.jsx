import React, { Component } from "react";

class Joke extends Component {
  state = { joke: "" };

  fetchChuckNorrisJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((d) => d.json())
      .then(({ value }) => {
        this.setState({ joke: value });
      })
      .catch(console.log);
  };

  // UPDATE: FETCH HTTP
  componentDidMount() {
    this.fetchChuckNorrisJoke();
  }

  // componentDidUpdate() {

  // }

  render() {
    const { joke } = this.state;
    return (
      <div>
        <p>{joke ? joke : "Loading..."}</p>
        <button onClick={this.fetchChuckNorrisJoke}>Fetch new joke</button>
      </div>
    );
  }
}

export default Joke;
