import logo from "./logo.svg";
import "./App.css";
import { UserDetails } from "./components/userdetails";

function App() {
  return (
    <div className="App">
      <UserDetails name="Ashish" add="Kolkata" isMarr={false}/>
      <UserDetails name="Rahul" add="Ballia" isMarr={true} />
      <UserDetails name="kajal" isMarr={true}/>
    </div>
  );
}

export default App;
