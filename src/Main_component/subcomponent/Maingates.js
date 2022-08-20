import React from 'react'
import './Window.css'
import bgImg12 from '../Images/triant-aluminium-main-gates.jpg'
import slider1_img1 from '../Images/triant-alumnium-sliding-gates-1.jpg'
import slider1_img2 from '../Images/triant-aluminium-sliding-gates-4.jpg'
// import slider1_img3 from '../Images/TG50-1.jpg'

import slider3_img1 from '../Images/triant-aluminium-sliding-gates-3.jpg'
import slider3_img2 from '../Images/triant-aluminium-wall-cladding.jpg'
// import slider2_img3 from '../Images/G135A-6.jpg'


import slider2_img1 from '../Images/triant-aluminium-casement-gates-2.jpg'

function maingates() {
  return (
    <div>
      <div className='main_name'>
        <h1>MAIN GATES</h1>
      </div>
       <img src={bgImg12} alt='bg-img' className='bgImg'/>
       <br/>
       <br/>
       <br/>
       <br/>
       <div className='row row1 shadow-lg p-3 mb-5 bg-white rounded'>
        <div className='col-md-6 col1'>
                          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src={slider1_img1} alt="First slide"/>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src={slider1_img2} alt="Second slide"/>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
              </div>
        </div>
        <div className='col-md-6 discription'>
          <h1>SLIDING GATES</h1>
          <hr className='hr'/>
          <p>Sliding gates are a secure and convenient option for main entrances. These gates can be automated to operate at the touch of a button along with an option for pedestrian entry. They can be combined with swing gates for customised solutions.</p>
        </div>
       </div>
       <div className='row row1 shadow-lg p-3 mb-5 bg-white rounded'>
        <div className='col-md-6'>
        <img src={slider2_img1} className='fixed_window'></img>
        </div>
       <div className='col-md-6 discription'>
          <h1>SWING GATES</h1>
          <hr className='hr'/>
          <p>Swing gates are a secure and convenient option for main entrances. These gates can be automated to operate at the touch of a button. They can be combined with sliding gates for customised solutions. A wide range of designs and colour options are available.</p>
        </div>
      </div>
        
       <div className='row row1 shadow-lg p-3 mb-5 bg-white rounded'>
       <div className='col-md-6 col1'>
                          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src={slider3_img1} alt="First slide"/>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src={slider3_img2} alt="Second slide"/>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
              </div>
        </div>
        <div className='col-md-6 discription'>
          <h1>WALL CLADDING</h1>
          <hr className='hr'/>
          <p>Walls at the main entrance can be clad with aluminium profiles to give them a great finish. The wall cladding complements swing and casement gates and gives a unified look to the elevation.</p>
        </div>
       </div>
       
    </div>
  )
}

export default maingates