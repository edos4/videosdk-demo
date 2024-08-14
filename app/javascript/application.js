// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./components/HelloWorld";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded event fired");
  const helloWorldDiv = document.getElementById("helloWorld");
  if (helloWorldDiv) {
    ReactDOM.render(<HelloWorld />, helloWorldDiv);
  }
});
