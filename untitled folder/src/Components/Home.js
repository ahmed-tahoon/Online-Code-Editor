import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, ButtonToolbar } from 'react-bootstrap';
import './style.css'
import img from '../images/whats-the-best-programming-language-to-learn-first.png'
const Home = () => {


    const nav = useNavigate()
  return (
   <div className="jumbotron text-center mt-5">


    
    
    <h1>Online Code Editor</h1>
    <p>Built with React, Node.js, Express and Webpack.</p>
    <hr /> 
    <button onClick={()=>nav('/editor')} className='btn btn-danger'>Go To Editor</button>
  </div>
  )
}

export default Home