import React from "react";
function Com(){
    var[x,setX]=React.useState([
        "reactJS",
        "Angular",
        "Mongodb",
        "Nodejs"
    ])
return(
    <div>
        <h1>Our Best Courses</h1>
        <ul>
            {
            x.map((a)=>{
                return <li>{a}</li>
            })
        }
        </ul>
    </div>
)
}
export default Com;