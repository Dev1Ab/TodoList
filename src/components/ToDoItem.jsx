import { useState } from "react"

export default function ToDOItem (props){

    
    const [taskText, setText] = useState(props.text);
    const [isDone, setIsDone] = useState(false);
    const [disableEdit, setDisable] = useState(true);

    function handleChange(events){
        const newVal= events.target.value;
        // setPropsText(newVal)
        setText(newVal);
    }

    function handleClick(events){
        const checkboxState = events.target.checked;
        checkboxState ? setIsDone(true) : setIsDone(false);
    }

    function enableEdit(){
        setDisable(false);
        // setText(props.text)
    }

    function saveEdit(){
        props.onEdit(taskText, props.id);
        setDisable(true);
    }
    // var func = props.onChecked;
    // var id = props.id;
    function handleDelete(){
        // setPropsText(props.text)
        // setText(propsText)
        // setText(prev=>{
        //     console.log(prev)
        //     return propsText
        // })
        // func(id);
        props.onChecked(props.id)
        // setText(propsText)
        // console.log(propsText, taskText, props)
    }
    // console.log(taskText, props.text)

    return (
        <li >
            <h1>{props.text}</h1>
            <input style={{textDecoration: isDone && "line-through"}} disabled={disableEdit} className="inputTodo" type="text" onChange={handleChange} value={taskText} />
            <input className="checkbox" type="checkbox" onClick={handleClick}/>
            <button className="edit-btn" onClick={disableEdit ? enableEdit : saveEdit}><img className="edit-img" src={disableEdit ? "/edit.png" : "/save.png"} /></button>
            <button className="edit-btn" onClick={handleDelete} ><img className="edit-img" src="/delete.png" /></button>
        </li>
        )
}