import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Add } from "../../../../node_modules/@material-ui/icons/index";


function Forms(props){


    const [isClick,setClick] = useState(false);


    const [note,setNote] = useState({
        title: "",
        content: ""
    })

    const [newEntry,setEntry] = useState([]);


function handleChange(event){
    const {name,value} = event.target

    setNote(prevValue =>{
        return{
        ...prevValue,

          [name]:value

    }
    })

    console.log(note);

}    


function handleSubmit(event){

    props.onAdd(note);

    event.preventDefault();
    setClick(true);



}

    return <div>
    <form>
        <input className="forminput" style={{marginBottom:"2px"}} placeholder = "Enter the title" name="title" onChange={handleChange} value = {note.title}/>  
        <textarea placeholder="Drop the note" className="forminput" rows="5" cols="60" name="content" onChange={handleChange} value = {note.content} ></textarea>
        <button className="add" onClick={handleSubmit} ><AddIcon/></button>
    </form>
    </div> 
}

export default Forms;