import React from 'react'
import "./contact.css"
import  { useState } from "react";

export default function Contact() {

    const [text, setText] = useState("Enter your suggestion here anonymously and press the send button");
    

    const handleonchange_func=(event)=>{
        // console.log("onchange");
        setText(event.target.value);
  }
    return (
        <>
        <div className='contact'>
            <div className="heading">
               
                <div className="contactchild">
                   Contact us by-   
                </div>
                <div className="contactchild">
                Email on : abc@gmail.com    
                </div>
                <div className="contactchild">
                Phone No: 1234567890
                </div>
            </div>
            <p className='or'>OR</p>
            {/* <textarea className="form-control" value={text} id="mybox" onChange={handleonchange_func}
        rows="5" style={{backgroundColor: `${props.mode==='light'?'white':'grey'}`,color: `${props.mode==='light'?'grey':'white'}`}} 
        /> */}
            <textarea className="form-control"  value={text} onChange={handleonchange_func} id="mybox"rows="5" />
            <br />
            <button className='submit'>Submit</button>
        </div>
        </>
    )
}
