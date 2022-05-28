import React from 'react'
import './homepage.css'
import { Link } from "react-router-dom";


import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Homepage() {
    
    return (
        <nav class="navMenu">
          <Link to="/feed" id="feed">Feed</Link>
          <Link to="/articles" id = "article">Articles</Link>
          <Link to="/about" id = "about">About</Link>
          <Link to="/contactus" id = "contact">Contact</Link>
          <Link to="/" id = "logout">Logout</Link>  {/*needs to be changed */}
          <div class="dot"></div>
        </nav>
      )
}
