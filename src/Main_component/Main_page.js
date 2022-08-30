import React from 'react'
import './main_page.css'
import bgImg from '../Images/building-1834709_1920-1.jpg'
import Img1 from '../Images/window-3042834_1920.jpg'
import Img2 from '../Images/G135A-3.jpg'
import Img4 from '../Images/ZD81-3.jpg'
import Img3 from '../Images/triant-aluminium-casement-gates-2.jpg'
import window from "../Images/3-copy.png"
import FImg from "../Images/triant-aluminium-fixed-windows.jpg"
import door from "../Images/2-copy.png"
import curtain from "../Images/7-copy.1.png"
import gates from "../Images/5-copy.1.png"

import slider1 from '../Images/architecture-1314416.jpg'
import slider2 from '../Images/1-1-1.jpg'
import slider3 from '../Images/architecture-1719526_1920-1.jpg'
import slider4 from '../Images/architecture-1727807.jpg'
import slider5 from '../Images/2-1.jpg'

function main_page() {
  return (
    <div className='Home_container'>
        <div className='main_name'>
        
        <h1>TRIANT ALUMINIUM</h1>
            <p>
                We guarantee the highest quality of workmanship and service across a diverse range of product offerings.
            </p>
            
        </div>
        <img src={bgImg} alt='bg-img' className='bgImg'/>
        <div className=' container1 shadow-lg p-3 mb-5 bg-white rounded'> 
            <div className='row '>
                <div className='col rows123 '>
                <a href='../detail/window'><img src={window} className='div_imgs' alt='window'/></a>
                <a href='../detail/window'><h1 id='main_h1'>WINDOWS</h1></a>
                    <p className='paragraph_in_container'>
                    Casement Windows, Sliding Windows, Awning Windows, Tilt-n-Turn Windows, Fixed Windows.
                    </p>
                </div>
                <div className='col rows123 '>
                <a href='../detail/door'><img src={door} alt='doors' className='div_imgs'/></a>
                <a href='../detail/door'> <h1 id='main_h1'>DOORS</h1></a>
                    <p className='paragraph_in_container'>
                    Sliding Doors, Casement Doors, Slide-n-Fold Doors
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col rows123 '>
                <a href='/'> <img src={curtain} alt='curtain_walls'className='div_imgs'/></a>
                <h1 id='main_h1'>CURTAIN WALLS</h1>
                <p className='paragraph_in_container'>
                Stick Curtain Walls, Semi-unitized Curtain Walls, Unitized Curtain Walls
                </p>
                </div>
                <div className='col rows123 '>
                <a href='../detail/maingate'><img src={gates} alt='gates'className='div_imgs'/></a>
                <a href='../detail/maingate'><h1 id='main_h1'>GATES</h1></a>
                <p className='paragraph_in_container'>
                Aluminium Sliding and Casement Gates
                </p>
                </div>
            </div>
            <div className='row '>
            <div className='col-md-12'>
                <br/>
                <br/>
            <a href={'/product'}><button type="button" className="btn btn-lg btn-outline-dark btn_coustom">VIEW ALL PRODUCTS</button></a>
            <br/>
            <br/>
            </div>
            </div>
        </div>
        <div className='row slider_content '>
            <div className='col-md-6 container3'>
                <div className='slide-container'>
                    <div className='slide-image'>
                        <img src={slider1} alt='Img'></img>
                    </div>
                   <div className='slide-image'>
                        <img src={slider2} alt='Img'></img>
                    </div>
                    <div className='slide-image'>
                        <img src={slider3} alt='Img'></img>
                    </div>
                    <div className='slide-image'>
                        <img src={slider4} alt='Img'></img>
                    </div>
                    <div className='slide-image'>
                        <img src={slider5} alt='Img'></img>
                    </div>
                    <div className='slide-image'>
                        <img src={slider1} alt='Img'></img>
                    </div>
                    <div className='slide-image'>
                        <img src={slider2} alt='Img'></img>
                    </div>
                    <div className='slide-image'>
                        <img src={slider3} alt='Img'></img>
                    </div>
                    <div className='slide-image'>
                        <img src={slider4} alt='Img'></img>
                    </div>
                    <div className='slide-image'>
                        <img src={slider5} alt='Img'></img>
                    </div>
                    <div className='slide-image'>
                        <img src={slider1} alt='Img'></img>
                    </div>
                    <div className='slide-image'>
                        <img src={slider2} alt='Img'></img>
                    </div>
                    <div className='slide-image'>
                        <img src={slider3} alt='Img'></img>
                    </div>
                </div>
            </div>
        
            <div className='col-md-6 Future_is_now shadow-lg p-3 mb-5 bg-white rounded'>
                <h1 id ="Future">THE FUTURE IS NOW</h1>
                <br/>
                <hr id='hr'/>
                <p id ='disc_Future'>Introducing the ground-breaking Thermal-Break Technology, our systems are unmatched in energy efficiency and perhrefmance. Our comprehensive product portfolio consists of high-quality doors, windows, facades, skylights, wall claddings, railings and other architectural products.</p>
                <br/>
                
                <a href='/about'><button type="button" className="btn btn-lg btn-outline-dark btn_coustoms">Learn More</button></a>
            </div>
            <div className="container2 text-center BigContainer">
            <h1 id='futured_products'>FUTURED PRODUCTS</h1>
            <hr id='futured_hr'/>
            
  <div className="row contents_row ">
    <div className="col-md ">
    <a href='/detail/door'>
      <img src={Img1} alt='...' className='Imgs'/>
      
      <div id='contents_id'>
        <h1 >SLIDING DOORS</h1>
        <h4 >Sliding doors are a great choice href places where passage is needed along with ventilation.</h4>
      </div>
      
      </a></div>
      
    <div className="col-md ">
    <a href='/detail/Window'>
    <img src={Img2} className='Imgs'/>
    
    <div id='contents_id'>
    <h1 >DOUBLE SHUTTER CEASEMENT WINDOWS</h1>
    <h4 >Casement windows can be made to open inside or outside and complemented with fixed windows to hrefm various typologies.</h4>
    </div>
    </a></div>
    <div className="col-md ">
    <a href='/detail/maingate'>
    <img src={Img3} className='Imgs'/>
    
    <div id='contents_id'>
    <h1 >MAIN GATES</h1>
    <h4 >Automated aluminium gates are a secure and convinient solution href main entrances.</h4>
    </div>
    </a>
    </div>
    <div className="col-md ">
    
    <a href='/detail/door' className='hovering'>
    <img src={Img4} alt ="..." className='Imgs'/>
    
    <div id='contents_id'>
    <h1 >SLIDE-N-FOLD DOORS</h1>
    <h4>Slide-n-fold accordion doors are a great choice href large partitions and collapse entirely onto each other.</h4>
    </div>
    </a></div>
  </div>
  </div>
  </div>
  <a href='/product'><button  type="button" className="btn btn-lg btn-outline-dark btn_coustom1">VIEW ALL PRODUCTS</button></a>
 


<div className='row push'>
    <div className='col rows123 '>
        <h1 id='our_vision'>OUR VISION</h1>
        <hr id='futured_hr'/>
        <div className='padding_p'>
        <p  className='paragraph_in_container1'>We intend to work collaboratively with architects, builders and end consumers to create spaces with better functionality and design aesthetics, while providing the best solution at a cost-effective price.</p>
        </div>
        <br/>
        <br/>
        <a href='/about'><button type="button" id='ButtonLearnMore' className="btn btn-lg btn-outline-dark">LEARN MORE</button></a>
        
    </div>
    <div className='col rows123'>
        <img src={FImg} alt = "..." className='FImg'/>
    </div>
</div>
          
    </div>

  )
}

export default main_page