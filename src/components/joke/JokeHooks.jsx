import React, { useState, useEffect } from "react";
import { addNewJokeToLocalStorage } from "./../../utils/localStorage.js";

const JokeHooks = () => {
  const [joke, setJoke] = useState("");

  const fetchChuckNorrisJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((d) => d.json())
      .then(({ value }) => {
        setJoke(value);
        // addNewJokeToLocalStorage(value);
      })
      .catch(console.log);
  };

  // FIRES UP ONLY ONCE! (AT THE TIME WHEN COMPONENT IS MOUNTED)
  useEffect(() => {
    fetchChuckNorrisJoke();
  }, []);
  // useEffect without array (2nd arg) == componentDidMount AND componentDidUpdate
  // useEffect with array (2nd arg) == ONLY componentDidMount

  return (
    <div>
      <p>{joke ? joke : "Loading..."}</p>
      <button onClick={fetchChuckNorrisJoke}>Fetch new joke</button>
    </div>
  );
};

export default JokeHooks;
