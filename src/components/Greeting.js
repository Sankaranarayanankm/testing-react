import React from "react";
import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <header title="this is a title">what ever</header>
      <h1>Hello there</h1>
      {!changedText && <p>good to see you!</p>}
      {changedText && <p>Changed</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
