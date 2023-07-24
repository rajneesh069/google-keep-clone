import React, { useState } from "react";

function CreateArea(props) {

  const [inputNote, setInputNote] = useState({
    title: "",
    content: "",
  })

  function handleClick(event) {
    props.onAdd(inputNote, event);
    setInputNote((previousValue)=>{
      return {
        title : "",
        content : ""
      }
    })
  }


  function handleChange(event) {
    const { name, value } = event.target;
    setInputNote((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      }
    })
    
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={inputNote.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={inputNote.content} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
