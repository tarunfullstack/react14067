import React, { useState } from "react";
import { connect } from "react-redux";
function Todolist(props){
    console.log("Todolist ::",props)
   var [nt,setNT]= useState('')
    return(
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setNT(e.target.value)}}/>
            <button onClick={()=>{props.addTodoItem(nt)}}>Add Todo</button>
            {props.todos.map((todo,i)=>{
                return <li>
                    {todo}
                    <button onClick={()=>{props.deleteTodoItem(i)}}>Delete</button>
                    </li>
                
            })}
        </div>
    )
}
function mapStateToProps(state){
    return state.t
}
function mapDispatchToProps(dispatch){
    return {
        addTodoItem:(nt)=>{
            dispatch({type:"ADDTODO",payload : nt})},
            deleteTodoItem :(i)=>{
                dispatch({type:"DELETETODO",payload:i})
            }
        

    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist);