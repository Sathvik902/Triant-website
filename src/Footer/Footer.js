import React from 'react';
import { FaPhoneAlt,FaRegEnvelope } from 'react-icons/fa';
import '../Footer/Footer.css'

function Footer() {
  function subscribed(){
    alert("Subscribed!");
  }
  return (
  <div>
<footer className="page-footer font-small color blue pt-4">
  <div className="footerrow container-fluid footer  text-center text-md-left">
    <div className="row">
      {/* <hr className="clearfix w-100 d-md-none pb-3"/> */}
      <div className="contacting col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase">CONTACT</h5>

        <ul className="list-unstyled">
          <li>
            <a href="/!"className='footer_links'><ion-icon name="call"><FaPhoneAlt/>&nbsp;&nbsp;+91 78888-35707</ion-icon></a>
          </li>
          <li>
            <a href="/!"className='footer_links'><FaRegEnvelope/>&nbsp;&nbsp;info@triantaluminium.com</a>
          </li>
        </ul>
      </div>
      <div className="stay_in_touch col-md-6 mt-md-0 mt-3">
        <h5 className="text-uppercase">STAY IN TOUCH</h5>
        <p id='subscribe'>Subscribe to our newsletter to stay updated about new products.</p>
        <div class="form-group">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
        <br/>
        <button type="submit" size={30} class="btn btn-outline-dark button btn_custom" onClick={subscribed}>SUBSCRIBE</button>
      </div>
      </div>
      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase">ADDRESS</h5>

        <ul className="list-unstyled">
          <li>
            <a href="/!" className='footer_links'>Level 18, DLF Cyber City, Building No. 5, Tower A, Phase 3, Gurugram - 122002</a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
            <h6>Copyright 2020 © Triant Aluminium. All rights reserved.</h6>
            <p id='myname'>Developed by Sathvik K<br/>sathvik902@gmail.com</p>
        </div>
    </div>
  </div>
</footer>
</div> 
  )
}

export default Footer