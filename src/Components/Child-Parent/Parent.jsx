import { useState } from "react"
import Child from "./Child"

const Parent = () => {
    let [text, setText] = useState("");

    let Style = {
        boxShadow : '0 0 10px black',
        padding : '20px',
        width : '500px',
        margin : '50px auto 20px'
    }
    return (
        <div style={Style}>
            <h2>Parent Component</h2>
            <p>{text}</p>
            <Child akash={setText}/>
        </div>
    )
}   
export default Parent