import React, { useState } from "react";
import './TodoList.css'
const changeStatus = (e) => {
    
};
const changeText = (e) => {
    setText(e.target.value);
};
function TodoList() {
    const [status, setStatus] = useState('Completed');
    const [text,setText] = useState('');
    return (
        <>
            <div className="container">
                <h1>My TODO List</h1>
                <div className="input">
                    <input type="text" placeholder="Enter Task" onChange={changeStatus} />
                    <select name="input">
                        <option value="todo">
                            ToDO
                        </option>
                        <option value="completed">
                            Completed
                        </option>
                        <option value="in-progress">
                            In progress
                        </option>
                    </select>
                    <button onClick={changeText}>Add Task</button>
                </div>
            </div>
        </>
    )
}
export default TodoList