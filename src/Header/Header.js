import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Header/Header.css'
import img from '../Images/WHITE-RGB-TRIANT-LOGO-1.jpg'
import { useState } from 'react'
import { BsFillClockFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import { AiFillFacebook,AiFillInstagram,AiFillLinkedin } from "react-icons/ai";

function Header() {

  const [isMobile,setIsMobile] = useState(false);
  return (
    <>


    <nav className="navbar1">
    <ul className="nav-links2"
            >

              <li className='link'><span id='icons'><MdCall/></span><span id='span'>&nbsp;&nbsp;+91 9482197514</span> </li>
              <li className='link'><span id='icons'><HiOutlineMail/></span><span id='span'>&nbsp;&nbsp;info@triantaluminium.com</span></li>
              <li className='link'><span id='icons'><BsFillClockFill/></span> <span id='span'>&nbsp;&nbsp;Mon - Sat: 10:00 - 19:30</span></li>
              
                  
          </ul>
            
            <ul className="nav-links1"
            >

              <a href='https://www.facebook.com/triantaluminium'><li className='link'><AiFillFacebook/></li></a>
              <a href='https://www.instagram.com/triantaluminium/'><li className='link'><AiFillInstagram/></li></a>
              <a href='https://www.linkedin.com/company/triantaluminium/'><li className='link'><AiFillLinkedin/></li></a>
              
                  
          </ul>
          
        </nav>

      <nav className="navbar">
            <img src={img} className='navImg' alt='logo'/>
            <ul className={isMobile?"nav-links-mobile":"nav-links"}
            onClick={()=>setIsMobile(false)}>
            
                  
                    <NavLink className="home" to="/"><li>HOME</li></NavLink>
                  
                  
                    <NavLink className="product" to="/product"><li>PRODUCTS</li></NavLink>
                  
                  
                    <NavLink className="about" to="/about"><li>ABOUT</li></NavLink>
                  
                  
                    <NavLink className="contact" to="/contact"><li>CONTACT</li></NavLink>
                  
          </ul>
          <button className='mobile-menu-icon'
          onClick={()=>setIsMobile(!isMobile)}>
            {isMobile ?( <i className='fas fa-times'/>):(<i className='fas fa-bars'/>)}
          </button>
        </nav>
</>
  )
}


export default Header