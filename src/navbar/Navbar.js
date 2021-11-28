import React from 'react'
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="nav">
            <div className="lefticons">
               <i className="licons fas fa-user-graduate"></i>
               <i className="licons fab fa-instagram"></i>
               <i className="licons fab fa-twitter-square"></i>
            </div>
            <div className="center">
                <ul className="topicon">
                    <li className="listitem">Home</li>
                    <li className="listitem">About Us</li>
                    <li className="listitem">Contact</li>
                    <li className="listitem">Log Out</li>
                </ul>
            </div>
            <div className="right">
                <img className="topimg" src="https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_960_720.jpg" alt="" srcset="" />
                <i className="searchicon topsearchicon fas fa-search"></i>
            </div>
        </div>
    )
}
