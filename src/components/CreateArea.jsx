import React, { useState } from "react";

function CreateArea(props) {
 
  const [input,setInput] = useState({
    
    title:"",
    content:""

  })
  const handleChange = (event)=>{
    const {name,value} = event.target;
    setInput(prevValue=>{
      return{
      ...prevValue,
      [name]:value
      }
    })
  
   
  }

   
  return (
    
    <div>
      <form>
      
        <input name="title" placeholder="Title" onChange={handleChange} value = {input.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value = {input.content} />
        <button onClick={(event)=>{
         props.onChange(input)
          
        event.preventDefault();
        
        setInput({
      title:"",
      content:""
    })
    
  }
   
         
          } value ={input}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
