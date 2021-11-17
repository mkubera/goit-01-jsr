import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";

// JSX
const App = () => {
  const sum = 2 + 2;
  return (
    <div className="App">
      <header className="App-header">
        <Title color="blue" title={"Hello"} subtitle={"World"}>
          Text...
        </Title>
        <Title title={"hI"} subtitle={"THERE"} />
        <Title title={"I am"} subtitle={3} />

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
