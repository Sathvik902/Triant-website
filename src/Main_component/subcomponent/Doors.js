import React from 'react'
import './Window.css'
import bgImg from '../Images/triant-aluminium-doors.jpg'

import slider1_img1 from '../Images/TG50M-1.jpg'
import slider1_img2 from '../Images/TG50M-2.jpg'
// "C:\Users\Sathvik K\OneDrive\Desktop\Triant_website1\src\Images\TG50M-1.jpg"
// import slider1_img3 from '../Images/TG50-1.jpg'

import slider2_img1 from '../Images/TM160-3.jpg'
import slider2_img2 from '../Images/TM160-2.jpg'
import slider2_img3 from '../Images/TM160-1.jpg'


import slider3_img1 from '../Images/ZD81-4.jpg'
import slider3_img2 from '../Images/ZD81-1.jpg'

function maingates() {
  return (
    <div>
      <div className='main_name'>
        <h1>DOORS</h1>
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
          <h1>CASEMENT DOORS</h1>
          <hr className='hr'/>
          <p>The classic and sophisticated design of these doors offers both single panel and double panel configurations. They are equipped with thermal-break technology which keeps the heat and noise outside and increases the energy-efficiency of the building. Great performance parameters ensure smooth operation, less noise and protection from harsh weather.</p>
        </div>
       </div>
       <div className='row row1 shadow-lg p-3 mb-5 bg-white rounded'>
       <div className='col-md-6 col1'>
                          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src={slider2_img1} alt="First slide"/>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src={slider2_img2} alt="Second slide"/>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src={slider2_img3} alt="Second slide"/>
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
          <h1>SLIDING DOORS</h1>
          <hr className='hr'/>
          <p>Sliding doors are a great choice for places where passage is needed along with ventilation. They are equipped with thermal-break technology which keeps the heat and noise outside and increases the energy-efficiency of the building. Great performance parameters ensure smooth operation, less noise and protection from harsh weather.</p>
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
          <h1>SLIDE-N-FOLD DOORS</h1>
          <hr className='hr'/>
          <p>Slide-n-fold accordion doors are a great choice for large partitions and collapse entirely onto each other to offer upto 95% opening. These doors are equipped with high-strength rollers along the middle-axis to ensure longevity. </p>
        </div>
       </div>
       
    </div>
  )
}

export default maingates