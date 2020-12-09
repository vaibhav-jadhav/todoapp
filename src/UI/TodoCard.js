import React,{useState} from 'react'
import './index.css';
import Button from '@material-ui/core/Button';
const axios = require('axios');
const tatrastyele={
    color:"red",
    border:"none",
    fontSize:"25px",
    resize:"none",
}
 async function updateTodo(toDoData,noteValue){
     console.log(toDoData,noteValue)
      await axios({
         method: 'post',
         url: "https://todonotesapp.herokuapp.com/update/"+toDoData._id,
         headers: {
            'Content-Type': 'application/json',
         }, 
         data: {
                    note : ""+noteValue,
                    // title:"note is "+toDoData._id,
                    title: "demo title",
                    finished: true,
                } 
       }).then((response) => {
        console.log("RES",response)
      })
      .catch((error) => {
        
      })
}

function TodoCard(props){
    const [iseditable,setEditable]=useState(false);
    const [noteValue,setNote]=useState(props.data.note);
    function handleChange(event ){
        // console.log("handle",event.target.value)
        setNote(event.target.value);
    }
    // console.log("data ",props.data)
    return(
        <div >
            <h2>{props.data.title}</h2> 
            <form  noValidate autoComplete="off">
                <textarea style={tatrastyele}  disabled={!iseditable} onChange={handleChange}>
                {props.data.note}
                    </textarea>
            </form>
            <Button style={{margin:"10px"}} onClick={()=>{setEditable(true)}} variant="contained" color="primary">Edit</Button>
           { !iseditable ? null : <Button visible={false} onClick={()=>{setEditable(false); updateTodo(props.data,noteValue) }} variant="contained" color="primary">Save</Button> }
        
      </div>
    );
}
export default TodoCard;