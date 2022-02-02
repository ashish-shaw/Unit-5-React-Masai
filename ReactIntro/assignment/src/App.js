import logo from "./logo.svg";
import "./App.css";

function App() {
  const user1 = {
    name: "Opearting System",
    mob1: ["Android", "Blackberry", "Iphone", "Windows Phone"],
  };
  const user2 = {
    name: "Manufacturers",
    mob2: ["Samsung", "HTC", "Micromax", "Apple"],
  };

  return (
    <div className="App">
      <h1>Mobile {user1.name}</h1>
      {user1.mob1.map((e) => {
        return Userdata(e);
      })}

      <h1>Mobile {user2.name}</h1>
      {user2.mob2.map((e) => {
        return Userdata(e);
      })}
    </div>
  );
}

function Userdata(e) {
  return (
    <div>
      <ul>
        <li>{e}</li>
      </ul>
    </div>
  );
}

export default App;
