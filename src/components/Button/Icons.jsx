import React from 'react'
import './Icons.scss'
import { BsMedium, BsPinterest, BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";

const Icons = () => {
  return (
    <div className='social-media-icons'>
        <div className="circle">
            <BsMedium id='icon'/>
        </div>
        <div className="circle">
            <BsPinterest id='icon'/>
        </div>
        <div className="circle">
            <BsLinkedin id='icon'/>
        </div>
        <div className="circle">  
            <BsTwitter id='icon'/> 
        </div>
        <div className="circle">
            <BsFacebook id='icon'/>
        </div>
    </div>
  )
}

export default Icons