import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (input) => {
    setNotes(prevNote => {
      return [...prevNote, input];
    })

  }
  const deleteNote = (id) => {
    setNotes(prevNote =>{
      return prevNote.filter((note,sIndex)=>{
        return sIndex !== id ;
      })
    })
  }
  const editNote = (edit_Id,title,content)=>{
    const tobeUpdated = notes.find(singleNote => singleNote.edit_Id === edit_Id)
    tobeUpdated.edit_Id = edit_Id;
    tobeUpdated.title = title;
    tobeUpdated.content = content;
    setNotes([...notes])

    
  }

  return (
    <div>
      <Header />
      <CreateArea onChange={addNote} />
      {notes.map((input, sIndex) =>
        <Note
          key={sIndex}
          id = {sIndex}
          edit_Id={input.id}
          title={input.title}
          content={input.content}
          onDelete={deleteNote}
          onEdit = {editNote}
          
        />)}
      <Footer />
    </div>
  );
}

export default App;
