import logo from "./logo.svg";
import "./App.css";

function App() {
  const age = 23;
  const users = [
    { name: "Ashish", age: 23 },
    { name: "Abhishek", age: 21 },
  ];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {users.map((e) => {
        return <Userdata name={e.name} age={e.age} />;
      })}
    </div>
  );
}

function Userdata({ name, age }) {
  return (
    <div>
      <h1>Hello {name} welcome</h1>
      <p className="blue">Your age is: {age}</p>
    </div>
  );
}

export default App;
