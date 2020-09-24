import React from "react";
import ReactDOM from "react-dom";

const fName = "Randy";
const lName = "Riley";
const number = Math.round(Math.random() * 10);
const names = ["Randy", "Maia", "Ryan", "Chris", "Bizzle", "Bean"];
const random = Math.floor(Math.random() * names.length);

ReactDOM.render(
  <div>
    <h1>Hello {names[random]}!</h1>
    <p>Your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
