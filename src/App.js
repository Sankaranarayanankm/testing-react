import React from "react";
import Greeting from "./components/Greeting";
import Async from "./components/Async";

const App = () => {
  return (
    <div>
      <h1>Hi This is From App Component</h1>
      <Greeting />
      <Async />
    </div>
  );
};

export default App;
