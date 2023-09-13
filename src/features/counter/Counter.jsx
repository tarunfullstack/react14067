import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

function Counter(){
  var {count} =  useSelector((state)=>{
        return state.c
    })
   var dispatch =useDispatch() 
    return(
        <div className="mybox">
          <h1>Counter:{count}</h1>
          <button onClick={()=>{dispatch(increment())}}>Increment</button>&nbsp;&nbsp;&nbsp;
          <button onClick={()=>{dispatch(decrement())}}>Decrement</button>&nbsp;&nbsp;&nbsp;
          <button onClick={()=>{dispatch(reset())}}>Reset</button>&nbsp;&nbsp;&nbsp;
            </div>
    )
}
export default Counter