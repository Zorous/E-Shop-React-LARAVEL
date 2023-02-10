import React from 'react'
import {Link, Outlet} from "react-router-dom";

function Navbar() {
  return (
   <><nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ml-5 mr-5 active">
        <Link to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item mr-5">
        <Link to="/familles">Familles</Link>
      </li>
      <li className="nav-item mr-5">
        <Link to="/articles">Article</Link>
      </li>
    </ul>
  </div>
</nav>
<Outlet />
</> 
  )
}

export default Navbar