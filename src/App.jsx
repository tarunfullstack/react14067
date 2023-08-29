import React from "react";
import Todol from "./Todol";
function App(){
    var[c,setC]=React.useState(1)
    function abc(){
        console.log("abc function")
        setC(241)
    }
    console.log("Hello First line");
    return(
        <div className="box">
            <h1>Welcome to ReactJS training</h1>
            <h1>{c}</h1>
            <button onClick={(()=>{abc()})}>Increment</button>
            <Todol></Todol>
        </div>
    )
}
export default App;