import { useState } from "react";

function Counter(){
    //useState
    let [count, setCount] = useState(10);
    // let count = 100;
    let Style = {
        width : "300px",
        boxShadow : "0 0 10px black",
        padding:"10px",
        textAlign : "center",
        margin : "20px auto",
    }

    let incCount = () => {
        setCount(count = count + 1);
        console.log(count);
    }

    let decCount = () => {
        count > 0 ? setCount(count = count - 1) : alert("Count cannot be negative..")
        console.log(count);
    }

    return (
        <div style={Style}>
            <h2>Counter App</h2>
            <h3>Count Value is : {count}</h3>
            <button onClick={incCount}>Increase Count</button> &nbsp; &nbsp; 
            <button onClick={decCount}>Decrease Count</button>
        </div>
    )
}

export default Counter;