import { useState } from "react";
import ToDOItem from "./ToDoItem";
import InputArea from "./InputArea";

function Card() {
    const [items, setItems] = useState([]);

    function addItem(task) {
        setItems((prevVal) => {
            return [...prevVal, task];
        });
    }

    function deleteTask(id) {
        const newItem = items.filter((item, index)=>{return (index !== id)})
        setItems(newItem);
        
    }

    function editTask(task, id){
        setItems(prevTasks =>{ 
            prevTasks[id] = task;
            return [...prevTasks];}
        )
        // setItems(["hh", "w"])
    }

    return (
        <div className="container">
            <h1 className="heading">To-Do List</h1>
            <InputArea onAdd={addItem} />
            <ul className="tasks">
                {items.map((todo, index) => (
                    <ToDOItem key={index} id={index} text={todo} onChecked={deleteTask} onEdit={editTask} />
                ))}
            </ul>
        </div>
    );
}

export default Card;