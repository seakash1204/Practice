import { useState } from "react"

const Child = ({akash}) => {
    let Style = { 
        boxShadow : "0 0 10px red",
        padding : '20px',
        marginTop : '20px',
    }

    let [state, setState] = useState('');

    const sendDataToParent = () => {
        akash(state);
    }    

    return (
        <div style={Style}>
            <h2>Child Component</h2>
            <input type="text" placeholder="Enter Some Text..." onChange={(event) => {setState(event.target.value)}}/> &nbsp; &nbsp; &nbsp;
            <button onClick={sendDataToParent}>Send Data To Parent</button>
        </div>
    )
}

export default Child;