import React, { useState } from "react";


function Note(props) {
  const [displayForm, setForm] = useState(false);
  const handleDelete = () => {
    props.onDelete(props.id);

  }
  const handleEdit = (event)=> {
    event.preventDefault();
    const title = event.target.children[0].value;
    const content = event.target.children[1].value;
    props.onEdit(props.edit_Id, title, content);
  
    setForm(false)
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <form 
        onSubmit={handleEdit}
        className={`${displayForm ? "show" : "hide"}`}

      >
        <input placeholder="title"></input>
        <input placeholder="content"></input>
        <input type="submit"/>
        


      </form>
      <button onClick={handleDelete}>DELETE</button>
      <button onClick={()=>{
       setForm(!displayForm);
      }}>EDIT</button>
    </div>
  );
}

export default Note;
