import { useState } from "react";
import TodoItem from "./TodoItem";

function Todo(){

    let style = {
        width:"300px",
        boxShadow:"0 0 10px black",
        padding: "10px",
        margin : "20px auto",
        textAlign : "center",
    }

    const [data, setData] = useState("");
    const [todoItmes, setTodoItems] = useState([]);

    let addTodoItem = () => {
        setTodoItems([...todoItmes, data]);
    }

    return (
        <div style={style}>
            <h2>Todo App</h2>
            <input type="text" placeholder="Enter your Task.." onChange={(event)=>{setData(event.target.value)}} /> &nbsp; &nbsp; &nbsp;
            <button onClick={addTodoItem} > Add Task</button>
            <TodoItem item={todoItmes}/>
        </div>
    )
}
export default Todo