import React from "react";
function ScoreCard(){
var[runs,setRuns]=React.useState(0)
var[wicket,setWicket]=React.useState(0)
return(
    <div className="box">
        <h1>Score Card</h1>
   
        <h1>{runs}/{wicket}</h1> 
        <button type="button" class="btn-btn-secondary" onClick={()=>{setRuns(runs+0)}}>Dot Ball</button>&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn-btn-secondary" onClick={()=>{setRuns(runs+1)}}>One run</button>&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn-btn-secondary" onClick={()=>{setRuns(runs+1)}}>Wide Ball</button>&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn-btn-secondary" onClick={()=>{setRuns(runs+2)}}>Two runs</button>&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn-btn-secondary" onClick={()=>{setRuns(runs+4)}}>Four runs</button>&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn-btn-secondary" onClick={()=>{setRuns(runs+6)}}>Six runs</button>&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn-btn-secondary" onClick={()=>{setWicket(wicket+1)}}>Wicket</button>&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn-btn-secondary" onClick={()=>{setRuns(runs+1)}}>No Ball</button>&nbsp;&nbsp;&nbsp;
        
        </div>
)   
}
export default ScoreCard ;