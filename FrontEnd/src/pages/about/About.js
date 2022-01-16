import React from 'react'
import "./about.css"

export default function About() {
    return (
        <>
            <div className="aboutheading">
                <h1>About Us</h1>
                <br />
                <p>
                We are a group of like minded students from Maharaja Surajmal Institute with a noble vision of guiding young programmers down the path of Competitive Programming through the means of a smooth website which would allow them to grasp the concepts of Data Structures entirely from one platform.
                    <br />
                    We are currently in our fifth semester and this project is for our Minor Project Report. We aim to achive 
                    expertise in Web development, Market analysis and photoshop  for frontend designing.
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
        <h2>Kartik Ps </h2>
        {/* <p className="title">Backend Developer</p> */}
        <p>01214902019</p>
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
        <h2>Ashutosh Kashyap</h2>
        {/* <p className="title">graphic designer</p> */}
        <p>03614902019</p>
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
