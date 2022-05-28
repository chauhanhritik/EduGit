import React from 'react'
import "./about.css"

export default function About() {
    return (
        <>
            <div className="aboutheading">
                <h1>About Us</h1>
                <br />
                <p>
                We are a group of like minded students from Maharaja Surajmal Institute with a noble vision of helping the unprivileged through means of technology.
                    <br />
                    We are currently in our sixth semester and this project is for our Major Project Report. Through this project, we aim to provide a somewhat sustainable and effective solution to deal with global hunger, trying to ensure that no person goes to sleep with an empty stomach.
                    <br />
                    This entire project has been developed using Mern stack and has been deployed using MongoDB Realm.
                </p>
                <br />
            </div>
            <br />
           
           
<div className="row">
  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Hritik Chauhan </h2>
        {/* <p className="title">Frontend Developer</p> */}
        <p>03514902019</p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Daksh Tokas</h2>
        {/* <p className="title">Market analyst</p> */}
        <p>35214902019</p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Hemant Juneja</h2>
        {/* <p className="title">Market analyst</p> */}
        <p>09014902019</p>
      </div>
    </div>
  </div>

 

</div>
                    
        </>
    )
}
