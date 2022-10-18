import React,{ useState }from 'react'
import './Window.css'
import bgImg from '../Images/triant-aluminium-doors.jpg'

import Carousel from 'react-bootstrap/Carousel';
import slider1_img1 from '../Images/TG50M-1.jpg'
import slider1_img2 from '../Images/TG50M-2.jpg'
// "C:\Users\Sathvik K\OneDrive\Desktop\Triant_website1\src\Images\TG50M-1.jpg"
// import slider1_img3 from '../Images/TG50-1.jpg'

import slider2_img1 from '../Images/TM160-3.jpg'
import slider2_img2 from '../Images/TM160-2.jpg'
import slider2_img3 from '../Images/TM160-1.jpg'


import slider3_img1 from '../Images/ZD81-4.jpg'
import slider3_img2 from '../Images/ZD81-1.jpg'

function Maingates() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [index1, setIndex1] = useState(0);
  const handleSelect2 = (selectedIndex, e) => {
    setIndex1(selectedIndex);
  };
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
        <div className='col '>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1_img1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1_img2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      
    </Carousel>
        </div>
        <div className='col discription'>
          <h1>CASEMENT DOORS</h1>
          <hr className='hr'/>
          <p>The classic and sophisticated design of these doors offers both single panel and double panel configurations. They are equipped with thermal-break technology which keeps the heat and noise outside and increases the energy-efficiency of the building. Great performance parameters ensure smooth operation, less noise and protection from harsh weather.</p>
        </div>
       </div>
       <div className='row row1 shadow-lg p-3 mb-5 bg-white rounded'>
       <div className='col sliding'>
       <Carousel activeIndex={index1} onSelect={handleSelect2}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2_img1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2_img2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2_img3}
          alt="Second slide"
        />

        
      </Carousel.Item>
      
    </Carousel>
        </div>
       <div className='col discription'>
          <h1>SLIDING DOORS</h1>
          <hr className='hr'/>
          <p>Sliding doors are a great choice for places where passage is needed along with ventilation. They are equipped with thermal-break technology which keeps the heat and noise outside and increases the energy-efficiency of the building. Great performance parameters ensure smooth operation, less noise and protection from harsh weather.</p>
        </div>
      </div>
        
       <div className='row row1 shadow-lg p-3 mb-5 bg-white rounded'>
       <div className='col sliding'>
                          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel"data-interval="3000">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src={slider3_img1} alt="First slide"/>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src={slider3_img2} alt="Second slide"/>
                      </div>
                    </div>
              </div>
        </div>
        <div className='col discription'>
          <h1>SLIDE-N-FOLD DOORS</h1>
          <hr className='hr'/>
          <p>Slide-n-fold accordion doors are a great choice for large partitions and collapse entirely onto each other to offer upto 95% opening. These doors are equipped with high-strength rollers along the middle-axis to ensure longevity. </p>
        </div>
       </div>
       
    </div>
  )
}

export default Maingates