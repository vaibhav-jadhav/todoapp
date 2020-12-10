import React,{useState} from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
const addstyle={
       
    display:"flex", 
    justifyContent:"center",
    flexDirection:"column",
    margin:"30px",
    paddingTop:"20px",
    // alignContent:"center"
    alignItems:"center"

}
const barstyle={
    fontSize:"25px",
    padding:"5px",
    marginTop:"10px"

}
const addNote=async(notetitle,notetext)=>{
        // console.log(notetitle,notetext)
        await axios({
            method: 'post',
            url: "https://todonotesapp.herokuapp.com/add",
            headers: {
               'Content-Type': 'application/json',
            }, 
            data: {
                       note : ""+notetitle,
                       title: ""+notetext
                   } 
          }).then((response) => {
           console.log("RES",response);
           window.location.reload();
         })
         .catch((error) => {
           
         })
}
const SearchBar = ()=>{
    const [notetext,setNote]=useState("")
    const [notetitle,setNoteTitle]=useState("")
    const handleChange=(event)=>{
        setNoteTitle(event.target.value)
        // console.log(notetitle)
    }
    const handleChange2=(event)=>{
       setNote(event.target.value)
    //    console.log(notetext )
    }
    return(<>
        <div >
                     <div style={addstyle} noValidate autoComplete="off">
                        <input onChange={handleChange} style={barstyle} placeholder="title of the note"></input>
                        <input onChange={handleChange2} style={barstyle} placeholder="note"></input>
                        <Button onClick={()=>{addNote(notetitle,notetext)}} style={{backgroundColor:" rgb(138, 214, 150)", fontSize:"25px",height: "50px",width:"200px",marginTop:"10px"}}>SAVE</Button>
                     </div>
            </div>
    </>);
}
export default SearchBar;