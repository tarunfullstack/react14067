import React from "react";
function Todolist(){
  var[todo,setTodo]=React.useState(["Apple","Banana","Mango","Orange"])  
function del(i){
var temp=[...todo]
temp.splice(i,1)
setTodo([...temp])
}
  return(
    <div className="box">
        <h1>Todolist</h1>
            {
        todo.map((todo,i)=>{
           return(
          <li className="box">
            {todo}
            <button onClick={del}>Delete</button>
            

          </li>
           )
        })  
        }
    </div>
  )
}
export default Todolist;