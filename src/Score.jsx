import React from "react";
function Score(){
var[runs,setRuns]=React.useState(0)
var[wicket,setWicket]=React.useState(0)
return(
    <div className="box">
        <h1>Score Card</h1>
   
        <h1>{runs}/{wicket}</h1> 
        <button type="button" class="btn-btn-secondary" onClick={()=>{setRuns(runs+0)}}>Dot Ball</button>
        <button type="button" class="btn-btn-secondary" onClick={()=>{setRuns(runs+1)}}>One run</button>
        <button type="button" class="btn-btn-secondary" onClick={()=>{setRuns(runs+1)}}>Wide Ball</button>
        <button type="button" class="btn-btn-secondary" onClick={()=>{setRuns(runs+2)}}>Two runs</button>
        <button type="button" class="btn-btn-secondary" onClick={()=>{setRuns(runs+4)}}>Four runs</button>
        <button type="button" class="btn-btn-secondary" onClick={()=>{setRuns(runs+6)}}>Six runs</button>
        <button type="button" class="btn-btn-secondary" onClick={()=>{setWicket(wicket+1)}}>Wicket</button>
        
        </div>
)
}
export default Score