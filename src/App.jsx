import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Items from "./components/items/Items";
import Button from "./components/button/Button";
import Counter from "./components/counter/Counter";
import TextInput from "./components/form/TextInput";
import Joke from "./components/joke/Joke";
import JokeHooks from "./components/joke/JokeHooks";
import Cartoons2D from "./components/cartoons/Cartoons2D";

// JSX
const App = () => {
  const sum = 2 + 2;

  const books = [
    { id: "id-1", name: "JS for beginners", isNew: true },
    { id: "id-2", name: "React basics", isNew: false },
    { id: "id-3", name: "React Router overview", isNew: false },
    { id: "id-4", name: "Redux in depth", isNew: false },
  ];

  const sendEventData = (e) => console.log(e.target);

  const counterProps = { step: 5, initCount: 0 };

  return (
    <div className="App">
      <header className="App-header">
        <Cartoons2D />
        <JokeHooks />
        {/* <Joke /> */}
        <TextInput />
        <Counter {...counterProps} />
        {/* <Counter step={5} initCount={0} /> */}

        <Button
          label={"click me"}
          disabled={true}
          sendEventData={sendEventData}
        />
        <Button
          label={"click me"}
          disabled={!true}
          sendEventData={sendEventData}
        />

        <Items items={books} />

        <Title color="blue" title={"Hello"} subtitle={"World"}>
          Text...
        </Title>
        <Title title={"hI"} subtitle={"THERE"} />
        <Title title={"I am"} subtitle={"Coocoo"} />

        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: "blue", marginLeft: "20px" }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>2 + 2 = {sum}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
