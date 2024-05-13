import React, { useState } from "react";
import './TodoList.css'

function TodoList() {

    const [status, setStatus] = useState('Completed');
    const [text,setText] = useState('');
    const [taskList, setTaskList] = useState([]);

    const changeStatus = (e) => {
        setStatus(e.target.value);
    };
    const changeText = (e) => {
        setText(e.target.value);
    };

    const addTask = () => {
        alert(text+status);
        const newTask = {
            text: text,
            status, status
        };
        alert(JSON.stringify(newTask));
        setTaskList([...taskList, newTask]);
        setText('');
        setStatus('completed');
    };
    const showList = (taskList) => {
        alert("Printing List of tasks");
        const todoList = taskList.map((item) => 
        <li>
            {item.text} {item.status}
        </li>
        );
        return (
            <ul>{todoList}</ul>
        );
    }
    return (
        <>
            <div className="container">
                <h1>My TODO List</h1>
                <div className="input">
                    <input type="text" placeholder="Enter Task" onChange={changeText} />
                    <select name="input" title="Choose an option" onChange={changeStatus}>
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
                    <button onClick={addTask}>Add Task</button>
                    <button onClick={() => showList(taskList)}>Show Tasks</button>
                    
                </div>
                
            </div>
        </>
    )
}
export default TodoList;