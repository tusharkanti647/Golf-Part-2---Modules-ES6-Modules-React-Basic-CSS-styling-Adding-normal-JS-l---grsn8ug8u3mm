import React, { Component, useState } from "react";
import "../styles/App.css";
import { useEffect } from "react";

const App = () => {
  const [isBallVisible, setIsBallVisible] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const reset = () => {
    setIsBallVisible(false);
    setX(0);
    setY(0);
  };

  const renderChoice = () => {
    if (isBallVisible) {
      return (
        <div className="ball" style={{ left: `${x}px`, top: `${y}px` }}></div>
      );
    }

    return (
      <button onClick={() => setIsBallVisible(true)} className="start">
        Start
      </button>
    );
  };

  useEffect(() => {
    const handler = (event) => {
      if (event.key === "ArrowRight") {
        setX(x + 5);
      }
      if (event.key === "ArrowUp") {
        setY(y - 5);
      }
      if (event.key === "ArrowLeft") {
        setX(x - 5);
      }
      if (event.key === "ArrowDown") {
        setY(y + 5);
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [x, y]);

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};
export default App;