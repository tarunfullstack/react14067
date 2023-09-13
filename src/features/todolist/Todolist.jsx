import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";
function Todolist(){
    var[nt,setNT]=useState("")
   
   var {todos}=useSelector((state)=>{
    return state.t
   })
   var dispatch = useDispatch()
    return(
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setNT(e.target.value)}} />
            <button onClick={()=>{dispatch(addTodo(nt))}} style={{backgroundColor : "yellow"}}>Add Todo</button>
            <ul>
                {
                    todos.map((t,i)=>{
                        return <li>
                            {t}
                            <button onClick={()=>{dispatch(deleteTodo(i))}} style={{backgroundColor : "yellow"}}>Delete Todo</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist;