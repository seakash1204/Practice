import { useState, useRef } from "react";

function Timer() {
  let Style = {
    boxShadow: "0 0 10px black",
    padding: "20px",
    width: "300px",
    margin: "50px auto 20px",
  };
  let btnStyle = {
    cursor: "pointer",
    fontSize: "20px",
    borderRadius: "10px",
    padding: "5px",
  };

  let [state, setState] = useState(0);
  let timerID = useRef();

  let startTimer = () => {
    timerID.current = setInterval(() => {
      setState((state = state + 1));
      console.log(`Start TimerID : ${timerID.current}`);
    }, 1000);
  };

  let stopTimer = () => {
    console.log(`Stop TimerID : ${timerID.current}`);
    clearInterval(timerID.current);
  };

  return (
    <div style={Style}>
      <h2 style={{ color: "blue", fontSize: "40px", marginTop: "-10px" }}>
        Timer App
      </h2>
      <h2>Timer : {state}</h2>
      <button style={btnStyle} onClick={startTimer}>
        Start
      </button>{" "}
      &nbsp; &nbsp;
      <button style={btnStyle} onClick={stopTimer}>
        Stop
      </button>
    </div>
  );
}
export default Timer;
