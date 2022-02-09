import logo from "./logo.svg";
import "./App.css";
import { UserDetails } from "./components/userdetails";
import { Counter } from "./components/counter";

function App() {
  return (
    <div className="App">
      {/* <UserDetails name="Ashish" add="Kolkata" isMarr={false}/>
      <UserDetails name="Rahul" add="Ballia" isMarr={true} />
      <UserDetails name="kajal" isMarr={true}/> */}
      <Counter />
    </div>
  );
}

export default App;
