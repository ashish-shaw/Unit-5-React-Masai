import { useState } from "react";
import "./counter.css"

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const clickFun = (val) => {
    // setCounter = counter + 1;
   // console.log("Counter", counter);
    setCounter(counter+val)
  };

  const multiply = (val)=>{
      setCounter(counter*2)
  }

//   if(counter===10){
//       return <h1>You have reached max counter value</h1>
//   }

  return (
    <div>
      <h2 className= {counter%2===0 ? "red" : "green"}>Counter : {counter}</h2>
      {/* <p>Counter is : {counter%2===0?"Even":"Odd"}</p> */}
      <button onClick={()=>clickFun(1)}>Increment</button>
      <button onClick={()=>clickFun(-1)}>Decrement</button>
      <button onClick={()=>multiply(1)}>Double</button>
    </div>
  );
};
