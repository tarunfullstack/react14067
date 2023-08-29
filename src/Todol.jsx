import React from "react";
function Todol(){
    var [todos,setTodos]=React.useState(["get car","get bmw"])
    function k(){ // redeclare  
        var h = document.getElementById("i").value;
        setTodos([...todos,h])
    }
    return(
        <div className="box">
            <h1>todolist</h1>
            <input type="text" id="i"/>
            <button onClick={k}>Add Todo</button>
            <ul>
            {
                todos.map((todo)=>{
                    return <li>{todo}</li>
                })
            }

            </ul>
        </div>
    )
}
export default Todol;