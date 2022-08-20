import React from 'react'
import './Window.css'
import bgImg from '../Images/triant-aluminium-windows-3.jpg'
import slider1_img1 from '../Images/TG50-4.jpg'
import slider1_img2 from '../Images/TG50-5.jpg'
import slider1_img3 from '../Images/TG50-1.jpg'

import slider2_img1 from '../Images/G135A-3.jpg'
import slider2_img2 from '../Images/G135A-4.jpg'
import slider2_img3 from '../Images/G135A-6.jpg'


import slider3_img1 from '../Images/TG113-1.jpg'
import slider3_img2 from '../Images/TG113-2.jpg'
// import slider3_img3 from '../Images/TG50-1.jpg'

import slider4_img1 from '../Images/triant-aluminium-awning-window-2.jpg'
import slider4_img2 from '../Images/triant-aluminium-awning-window-1.jpg'

import slider5_img1 from '../Images/triant-aluminium-fixed-windows.jpg'

function windows() {
  return (
    <div className='windows_container'>
      <div className='main_name'>
        <h1>WINDOWS</h1>
      </div>
       <img src={bgImg} alt='bg-img' className='bgImg'/>
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
                      <div class="carousel-item">
                        <img class="d-block w-100" src={slider1_img3}alt="Third slide"/>
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
          <h1>CASEMENT WINDOWS</h1>
          <hr className='hr'/>
          <p>Casement windows can be made to open inside or outside and complemented with fixed windows to form various typologies. These windows are equipped with thermal-break technology which keeps the heat and noise outside and increases the energy-efficiency of the building. Contemporary design and technology ensure smooth operation, less noise and protection from harsh weather.</p>
        </div>
       </div>
       <div className='row row1 shadow-lg p-3 mb-5 bg-white rounded'>
       <div className='col-md-6 col1'>
                          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100"id='slider2_Img1' src={slider2_img1} alt="First slide"/>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src={slider2_img2} alt="Second slide"/>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src={slider2_img3}alt="Third slide"/>
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
          <h1>DOUBLE SHUTTER CASEMENT WINDOWS</h1>
          <hr className='hr'/>
          <p>Double shutter casement windows consist of two shutters at every opening, one for glass and the other for fly-mesh. In addition to this, grill-tubes can be installed in the space between the two shutters for added security. These windows are equipped with thermal-break technology which keeps the heat and noise outside and increases the energy-efficiency of the building.</p>
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
          <h1>SLIDING WINDOWS</h1>
          <hr className='hr'/>
          <p>Sliding windows accommodate two-track and three-track arrangements with the option of fly-mesh for ventilation. These windows are equipped with thermal-break technology which keeps the heat and noise outside and increases the energy-efficiency of the building. Excellent design of the top and bottom rail makes sash movement smooth and convenient.</p>
        </div>
       </div>
       <div className='row row1 shadow-lg p-3 mb-5 bg-white rounded'>
       <div className='col-md-6 col1'>
                          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src={slider4_img1} alt="First slide"/>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src={slider4_img2} alt="Second slide"/>
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
          <h1>AWNING WINDOWS</h1>
          <hr className='hr'/>
          <p>Awning windows are hinged on the top and open outward from the bottom, allowing for ventilation and protection from the rain. These windows are equipped with thermal-break technology which keeps the heat and noise outside and increases the energy-efficiency of the building. They can be used along with fixed windows to form various combinations.</p>
        </div>
       </div>
       <div className='row row1 shadow-lg p-3 mb-5 bg-white rounded'>
        <div className='col-md-6'>
        <img src={slider5_img1} className='fixed_window'></img>
        </div>
       <div className='col-md-6 discription'>
          <h1>FIXED WINDOWS</h1>
          <hr className='hr'/>
          <p>Fixed windows brighten up the room by letting the light in and offering a seamless view of the surroundings. These windows are equipped with thermal-break technology which keeps the heat and noise outside and increases the energy-efficiency of the building. They can be used in combination with casement windows and awning windows.</p>
        </div>
      </div>
        
       
    </div>
  )
}

export default windows
