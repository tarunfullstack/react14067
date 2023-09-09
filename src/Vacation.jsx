import React from "react";
import axios from "axios";

function Vacation(){
const [tours,setTours]=React.useState([])
React.useEffect(
function(){
        axios.get("https://course-api.com/react-tours-project").then(function(res){
        console.log(res.data)
        setTours([...res.data])
    })},[])
    
  
    return (
        <div>
{
    tours.map((a)=>{
        return  (
                 <div className="box">
                    {/* <img src={a.image} style={{width :"500px"}} /> */}
                  <h2>{a.name}</h2>  
                <p>{a.info}</p>
                <span>${a.price}</span>
                            </div>
        )
    })
}
        </div>
    )
    
}
export default Vacation;