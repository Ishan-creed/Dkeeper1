import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import Forms from "./Forms"
import { Dkeeper } from '../../../declarations/Dkeeper/index';

function App() {

    const [notes,setNotes] = useState([]);

    function addNote(newnote){

        setNotes(prevNotes =>{

        Dkeeper.createNote(newnote.title , newnote.content);

          return  [newnote,...prevNotes];
        });


    }

    useEffect(()=>{
       console.log("Triggered useEffect");
        fetchData();

    },[]);
    

    async function fetchData(){

        const notesArray = await Dkeeper.readNotes();
        setNotes(notesArray);
    }

    function deleteNote(id){
        
        console.log("delete ");

        Dkeeper.deleteNote(id);

        setNotes(prevNotes =>{


          return  prevNotes.filter((noteItem, index)=>{
              
                return index !== id;

            })
        })

    }

    return (
 
        <div>

       
            <Header />

            <Forms onAdd = {addNote}/>
       
      
         {notes.map((noteItem,index)=>{
            return <Note  key = {index} id= {index} title = {noteItem.title} content =  {noteItem.content} onDelete = {deleteNote}/>
         })}
         




            <Footer />
        </div>
    )

}

export default App;