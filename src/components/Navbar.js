// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return( 
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className='container-fluid'>
        <Link className="navbar-brand fs-1 fst-italic" to="/">FoodeX</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">HomeUpdated</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}
