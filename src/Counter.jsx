import React from "react";
import { connect } from "react-redux";
import { incrementCount,decrementCount,resetCount } from "./actions";
function Counter(props){
    console.log("Counter Props::",props)
    return(
        <div className="mybox">
            <h1>Counter:{props.count}</h1>
            <button onClick={()=>{props.increm()}}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.decrem()}}>Decrement</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.reset()}}>Reset</button>&nbsp;&nbsp;&nbsp;
        </div>
    )
}
    function mapStatetoProps(state){return state.c}
    
    function mapDispatchtoProps(dispatch){
    return{
        increm:()=>{dispatch(incrementCount())},
        decrem:()=>{dispatch(decrementCount())},
        reset:()=>{dispatch(resetCount())}
    }
}
export default connect(
    mapStatetoProps,
    mapDispatchtoProps
)(Counter)