import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import bgImg from '../Images/table-2577998_1920.jpg'
import { FaPhoneAlt,FaRegEnvelope } from 'react-icons/fa';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './contact.css'



function ContactUs () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d233l2t', 'template_vjqsj1i', form.current, 'cnurJJKmq4ekkPLg6')
      .then((result) => {
          console.log(result.text);
          
          alert("Congratulations! Your Form has been submitted!")
      }, (error) => {
          console.log(error)
      });
      form.current.reset();
  };

  return (
    



  <div className='contact_container'>
      <div className='main_name'>
        <h1>CONTACT</h1>
    </div>
      <img src={bgImg} alt='bg-img' className='bgImg'/>
       <div className='container1 shadow-lg p-3 mb-5 bg-white rounded'>
  
            
    <div className='row'>
    <h1 className='GetToKnow'>REACH OUT TO US FOR EXPERT OPINION</h1>
    <hr id='Hr_GetToKnow'/>
    <form ref={form} onSubmit={sendEmail}>
      <h3 id='backgroundInfo'>GET IN TOUCH</h3>
      <input className='Input' type='text' id='name' placeholder='Name'name='name' required/>
      <input className='Input'  type='text' id='phone' placeholder='Phone no.'name='phone' required/>
      <input className='Input'  type='text' id='City' placeholder='City' name='city' required/>
      <input  className='Input' type='text' id='Subject' placeholder='Subject' name='Subject' required/>
      <input  className='Input' type='email' id='email' placeholder='Email id' name='email' required/>
      <textarea className='Input' id='message' placeholder='Your Message' rows='4'name='message' placehlder='Your Message Here'/>
      <br/>
      <input id='Button' type="submit" value="SEND MESSAGE" />
    </form>
    <div className='row ' id='Containers123'>
    <div className='col-md-6  shadow-lg p-3 mb-5 bg-white rounded'>
                  <h1 >CONTACT US</h1>
                  <p ><FaPhoneAlt/>&nbsp;&nbsp;+91 78888-35707</p>
                  <p ><FaRegEnvelope/>&nbsp;&nbsp;info@triantaluminium.com</p>
                  <p>Level 18, DLF Cyber City, Building No. 5, Tower A, Phase 3, Gurugram - 122002</p>

                </div>
                <div className='col-md-6 About_Our_Future_Containers shadow-lg p-3 mb-5 bg-white rounded'>
                <iframe className='maps' id="gmap_canvas" src="https://maps.google.com/maps?q=Triant%20Aluminium&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
    </div>

        </div>
        </div>
        
   </div>

  );
};

export default ContactUs;