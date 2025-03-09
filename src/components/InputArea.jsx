import { useState } from "react";

export default function InputArea(props){
    const [task, setTask] = useState("");
    function handleChange(events){
        const newValue = events.target.value;
        setTask(newValue);
    }

    return (
        <form className="form">
            <input className="task-input" type="text" placeholder="Type your task" onChange={handleChange} value={task} />
            <button className="button" type="submit" onClick={(events)=>{
                events.preventDefault()
                setTask("");
                return props.onAdd(task);
            }}>Add</button>
        </form>
    )
}