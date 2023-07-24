import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [addedNote, setAddedNote] = useState([]);
  function addItem(inputNote, event) {
    setAddedNote((previousValue) => {
      return [...previousValue, inputNote];
    })
    
    event.preventDefault();
  }
  function deleteNote(id, event){
    setAddedNote((foundNotes)=>{
      return foundNotes.filter((note, index)=>{
       return id!==index;
      })
    })
    event.preventDefault();
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {addedNote.map((note, index) => {
        console.log(index);
        return <Note key={uuidv4()} id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
