import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,reset } from "./counterSlice";
function Counter(){
    var x =  useSelector((state)=>{return state.c})
    var dispatch = useDispatch("")
    console.log("Counter::",x)
    return(
        <div className="mybox">
            <h1>Counter:{x.count}</h1>
            <button onClick={()=>{dispatch(increment())}} style={{backgroundColor : "yellow"}}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{dispatch(decrement())}} style={{backgroundColor : "yellow"}}>Decrement</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{dispatch(reset())}} style={{backgroundColor : "yellow"}}>Reset</button>&nbsp;&nbsp;&nbsp;
        </div>
    )
}
export default Counter;