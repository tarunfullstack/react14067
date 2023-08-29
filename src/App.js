import React from "react";

function Todolist(){
    var[todos,setTodos]=React.useState([
        {
            title : 'clear bill',
            status : 'false'
        },
        {
            title : 'new house',
            status : 'true'
        },
        {
            title : 'new bike',
            status : 'false'
        },
        {
            title : 'new car',
            status : 'false'
        },
        {
            title : 'current bill',
            status : 'true'
        },
    ])
    function done(i){
        var temp = [...todos]
        temp[i].status=!temp[i].status
        setTodos([...temp])
    }
    // function addtask(){
    //     var nt = document.getElementById("dd").value;
    //     setTodos([...todos,{title:nt,status: false}])
    // }
    return(
        <div className="box">
            <h1>Todolist</h1>
            {/* <input type="text" id="dd"/> */}
            {/* <button onClick={()=>{addtask}}>Add Task</button> */}
            {
                todos.map((todo,i)=>{
                    return (
                        <div className="box">
                        <li style={(todo.status===true)?{backgroundColor:"red"}:{backgroundColor:"blue"}}>{todo.title}
                        <button onClick={()=>{done(i)}}>Done</button>
                        <button>Undo</button>
                        </li>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Todolist