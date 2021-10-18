import React from 'react'
import "./button_center.css";

export const TodoItem = ({todo,onDelete}) => {
    return (
        <div className="background_div">
            <h4 className="text-center">{todo.title}</h4>
            <p className="text-center">{todo.desc}</p>
            <button className="Button text-center btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
