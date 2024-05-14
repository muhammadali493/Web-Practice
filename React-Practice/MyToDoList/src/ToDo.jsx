import React, { useState } from "react"
import './ToDo.css'
export default function ToDo() {
    const [task, setTask] = useState("");
    const [category, setCategory] = useState("Completed");
    const [tasks, setTasks] = useState([]);

    const addTask = (e) => {
        //Add implementation to add task to array users
        // Prevent form submission
        e.preventDefault();
        // Create a new task object
        const newTask = { task, category };
        setTasks([...tasks, newTask]);
        // Clear the input fields
        setTask("");
        setCategory("");
    }
    return (
        <>
            <h1>TODO List App</h1>
            <div className="container">
                <form>
                    <label>
                        Task:
                        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                    </label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option>Completed</option>
                        <option>In-Progress</option>
                        <option>Back-Log</option>
                    </select>
                    <button onClick={addTask}>Add Task</button>
                </form>

            </div>
            <div className="displayTaskContainer">
                {/* <h3>
                    {task}
                </h3>
                <h3>
                    {category}
                </h3> */}
                {
                    tasks.map(
                        (item, index) => (
                            <div>
                                {/* {JSON.stringify(item)} */}
                                <h3>{item.task} {item.category}</h3>
                            </div>
                        )
                    )
                }
            </div>
        </>
    )
};