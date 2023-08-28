import React from "react";
function Counter(props){
    //state variable
    var[count,setCount]=React.useState(props.s)
    //logic
    function Inc(s,i){
        setCount(count+props.i)
    }
    function Dec(s,i){
        setCount(count-props.i)
    }
    //template
    return(
        <div className="box">
            <h1>Counter:{count}</h1>
            <button onClick={Inc}>Increment</button>
            <button onClick={Dec}>Decrement</button>
        </div>
  
  
  )
}
export default Counter;