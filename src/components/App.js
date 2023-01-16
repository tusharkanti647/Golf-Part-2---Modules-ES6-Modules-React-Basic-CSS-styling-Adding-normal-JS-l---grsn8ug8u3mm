import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
    position: "absolute",
  });

  const handelPostion = (event) => {
    const newpostion = {
      left: "100px",
      top: "400px",
      position: "absolute",
    }
    setBallPosition(newpostion);
  }
  const reset = () => {
    setRenderBall(false);
  };

  const giveStyle = () => {
    console.log(ballPosition);
    return (
      ballPosition
    )
  }


  const renderChoice = () => {
    if (renderBall === false) {
      return (<button onClick={() => { setRenderBall(true) }} className="start ballProvider">
        Start
      </button>)
    } else {
      return (
        <div className="ball" style={giveStyle()} onKeyDown={handelPostion}></div>
      )
    }
  };


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
