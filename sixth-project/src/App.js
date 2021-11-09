import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setToggle] = useState(false);

  const toggleParagrahHanler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowTogleHandler = () => {
    setToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && DemoOutput} */}
      <DemoOutput show={showParagraph} />
      <Button onClick={allowTogleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagrahHanler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
