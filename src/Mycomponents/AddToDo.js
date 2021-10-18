import React , {useState} from 'react';
import "./button_center.css";

export const AddToDo = (props) => {
    const pagal = {
        backgroundColor: "#f8f9fa"
    }
    const [title, settitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can not be blank")
        }
        else{
            props.addTodo(title, desc);
            settitle("");
            setDesc("");
        }
        
    }
    return (
        <div style={pagal} className="container my-3">
            <h3 className="text-center">Add a To Do</h3>
            <form onSubmit={submit}>
                <div className="mb-3 text-center">
                    <label htmlFor="title" className="form-label text-center">Todo title</label>
                    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 text-center">
                    <label htmlFor="desc" className="form-label text-center">To Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                <button type="submit" className="Button btn btn-sm btn-success text-center">Add Todo</button>
            </form>
        </div>
    )
}
