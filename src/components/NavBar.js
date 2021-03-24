import React from 'react'
import Searc from './Search';
import './Nav.css';
import Logo from'./pictures/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
    return (
        <div className="nav">
            <h3 style={{padding:"10px" , fontWeight:"bold"}}>StudyPlex</h3>
            <img src={Logo} height="60px" width="130px"/>
        <div className="menu">
            <a href="/">Home</a>
           <a href="/WebDevelopment">categories</a>
         <Link smooth to="#ContactUS">Contact us</Link>
        </div>
           
        </div>
    )
}

export default Navbar
