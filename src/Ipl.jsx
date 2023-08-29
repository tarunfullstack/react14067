import React from "react";
function Ipl(props){
    console.log(props)
    return (
        <div className="box">
            <h1>{props.tname}</h1>
            {
                props.team.map((player)=>{
                    return <li>{player}</li>
                })
            }
        </div>
    )
}
export default Ipl