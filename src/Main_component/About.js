import React from 'react'
import './About.css'
import bgImg from '../Images/15.png'
import Img1 from '../Images/3-2.png'
import Img2 from '../Images/4-2.png'
import { FaPhoneAlt,FaRegEnvelope } from 'react-icons/fa';
// import { Row } from 'react-bootstrap'

function About(){
  return (
    <div className='About_Container'>
      <div className='main_name'>
        <h1>ABOUT</h1>
      </div>
       <img src={bgImg} alt='bg-img' className='bgImg'/>
        <div className='container12 container shadow-lg p-3 mb-5 bg-white rounded'>
            
            <div className='row'>
              <h1 className='GetToKnow'>GET TO KNOW BETTER</h1>
              <hr id='Hr_GetToKnow'/>
              <div className='row'>
                <div className='col'>
                  <h1 id='backgroundInfo'>BACKGROUND INFO</h1>
                  <p id='getToKnow_P'>Backed by a team of Alumni from IIT D and Ivy League,
                     Triant Aluminium is a young startup with a vision to promote innovative technologies to disrupt the Indian Fenestration market. Headquartered in Gurgaon, we have expanded our presence in many cities now. Our channel partners allow us to execute and deliver
                     solutions for any residential/commercial project.</p>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 phylosophy_container shadow-lg p-3 mb-5 bg-white rounded'>
                  <h1 id='PHILOSOPHY_Headding'>OUR PHILOSOPHY</h1>
                  <p id='phylosophy_p'>Introducing the ground-breaking 
                  Thermal-Break Technology, our systems are unmatched in energy 
                  efficiency and performance. Our comprehensive product portfolio 
                  consists of high-quality doors, windows, facades, skylights,
                   wall claddings, railings and other architectural products.</p>
                </div>
                <div className='col-md-6 '>
                  <img src={Img1} alt="Img" className='Img1and2'/>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <img src={Img2} alt="Img" className='Img1and2'/>
                </div>
                <div className='col-md-6 About_Our_Future_Container shadow-lg p-3 mb-5 bg-white rounded'>
                  <h1 id='PHILOSOPHY_Headding'>ABOUT OUR FUTURE</h1>
                  <p id='phylosophy_p'>We intend to work 
                  collaboratively with architects, builders and end 
                  consumers to create spaces with better functionality and 
                  design aesthetics,
                   while providing the best solution at a cost-effective price.</p>
                </div>
              </div>
                
                
            </div>
            </div>
    </div>
  )
}

export default About