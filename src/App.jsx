import React from "react";
import { Link, Outlet } from "react-router-dom";
function App(){
    return(
        <div className="mybox">
            <h1>My App</h1>
            <Link to="/for">Form</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/asd">ScoreCard</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/zxc">Vacation</Link>
            <Outlet></Outlet>
            
        </div>
    )
}
export default App