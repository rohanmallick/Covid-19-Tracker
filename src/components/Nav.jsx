import React from 'react';
import '../css/Nav.css'

// import {
//         Link
//   } from "react-router-dom";


export const Nav = (props) => {
    return (
       <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div className="container-fluid">
        <a className="navbar-brand" to="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active link" aria-current="page" to="/">Home</a>
                </li>
               
                {/* <li className="nav-item">
                    <a className="nav-link active link" to="/about">About</a>
                </li> */}
            </ul>
        </div>
    </div>
</nav>
       </>
    )
}
export default Nav;