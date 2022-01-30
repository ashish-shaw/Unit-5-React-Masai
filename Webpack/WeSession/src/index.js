import { add, mult } from "./calculator";
import "./style.css";

console.log(add(5, 20));

console.log(mult(3, 6));

const h1 = document.createElement("h1");
h1.classList.add("redtext");
h1.innerText = "hello";
document.getElementById("root").appendChild(h1);
