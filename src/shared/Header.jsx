import React from "react";
import {Link} from "react-router-dom";
function Header(){
    return(
<div className="mybox">
        <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/counter">counter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/todolist">todolist</Link>
        </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/countries">countries</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/books">books</Link>
          </li>

        </ul>
       </div>
      </div>
     </nav>
</div>
    )
}
export default Header;