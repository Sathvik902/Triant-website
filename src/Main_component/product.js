import React from 'react'
import '../Main_component/main_page.css'
import bgImg from '../Images/building-491294_1920.jpg'
import window from "../Images/3-copy.png"
import door from "../Images/2-copy.png"
import Awining_doors from "../Images/1-copy.1.png"
import casement_doors from "../Images/8-copy.2.png"
import side_n_fold from "../Images/9-copy.1.png"
import railings from "../Images/10-copy.png"
import fixed_windows from "../Images/11-1-copy.png"
import double_casement_windows from "../Images/12-copy.png"
import louvers from "../Images/13.png"
import cielings from "../Images/CEILING-2.png"
import skylight from "../Images/SKYLIGHT.png"
import wall_cladding from "../Images/4-copy.1.png"
import sliding_gates from "../Images/5-copy.1.png"
import swing_gates from "../Images/6-copy.1.png"
import sliding_doors from "../Images/2-copy.png"
import curtain from "../Images/7-copy.1.png"
// import Awining_doors from "../Images/1-copy.1.png"
import './product.css'

 
function Product() {
  return (
    <div>
      <div>
        <div className='Home_container'>
        <div className='main_name'>
        <h1>PRODUCT</h1>
        </div>
        <img src={bgImg} alt='bg-img' className='bgImg'/>
        <div className='container5 shadow-lg p-3 mb-5 bg-white rounded'>
         
            <div className='row'>
                <div className='col-md-6 cursorpointer'>
                    
                <a href='../detail/window'><img src={window} className='div_imgs' alt='window'/></a>
                    <h1 id='products_h1'>CASEMENT WINDOWS</h1>
                    <br/>
                    <p>
                    Casement Windows, Sliding Windows, Awning Windows, Tilt-n-Turn Windows, Fixed Windows.
                    </p>
                </div>
                <div className='col-md-6 cursorpointer'>
                <a href='../detail/Window'><img src={door} alt='doors' className='div_imgs'/></a>
                    <h1 id='products_h1'>SLIDING WINDOWS</h1>
                    <br/>
                    <p>
                    Sliding Doors, Casement Doors, Slide-n-Fold Doors
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 cursorpointer'>
                <a href='../detail/Window'><img src={Awining_doors} className='div_imgs' alt='window'/></a>
                    <h1 id='products_h1'> AWNING WINDOWS</h1><br/>
                    <p>
                    Casement Windows, Sliding Windows, Awning Windows, Tilt-n-Turn Windows, Fixed Windows.
                    </p>
                </div>
                <div className='col-md-6 cursorpointer'>
                <a href='../detail/Window'><img src={double_casement_windows} alt='doors' className='div_imgs'/></a>
                    <h1 id='products_h1'>DOUBLE CASEMENT WINDOWS</h1><br/>
                    <p>
                    Sliding Doors, Casement Doors, Slide-n-Fold Doors
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 cursorpointer'>
                <a href='../detail/Window'><img src={fixed_windows} className='div_imgs' alt='window'/></a>
                    <h1 id='products_h1'>FIXED WINDOWS</h1><br/>
                    <p>
                    Casement Windows, Sliding Windows, Awning Windows, Tilt-n-Turn Windows, Fixed Windows.
                    </p>
                </div>
                <div className='col-md-6 cursorpointer'>
                <a href='../detail/door'><img src={casement_doors} alt='doors' className='div_imgs'/></a>
                    <h1 id='products_h1'>CASEMENT DOORS</h1><br/>
                    <p>
                    Sliding Doors, Casement Doors, Slide-n-Fold Doors
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 cursorpointer'>
                <a href='../detail/door'><img src={sliding_doors} className='div_imgs' alt='window'/></a>
                    <h1 id='products_h1'>SLIDING DOORS</h1><br/>
                    <p>
                    Casement Windows, Sliding Windows, Awning Windows, Tilt-n-Turn Windows, Fixed Windows.
                    </p>
                </div>
                <div className='col-md-6 cursorpointer'>
                <a href='../detail/door'><img src={side_n_fold} alt='doors' className='div_imgs'/></a>
                    <h1 id='products_h1'>SLIDE-N-FOLD DOORS</h1><br/>
                    <p>
                    Sliding Doors, Casement Doors, Slide-n-Fold Doors
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 cursorpointer'>
                <a href='../detail/maingate'><img src={sliding_gates} className='div_imgs' alt='window'/></a>
                    <h1 id='products_h1'>SLIDING GATES</h1><br/>
                    <p>
                    Casement Windows, Sliding Windows, Awning Windows, Tilt-n-Turn Windows, Fixed Windows.
                    </p>
                </div>
                <div className='col-md-6 cursorpointer'>
                <a href='../detail/maingate'><img src={swing_gates} alt='doors' className='div_imgs'/></a>
                    <h1 id='products_h1'>SWING GATES</h1><br/>
                    <p>
                    Sliding Doors, Casement Doors, Slide-n-Fold Doors
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 cursorpointer'>
                <a href='../detail/maingate'><img src={wall_cladding} className='div_imgs' alt='window'/></a>
                    <h1 id='products_h1'>WALL CLADDING</h1><br/>
                    <p>
                    Casement Windows, Sliding Windows, Awning Windows, Tilt-n-Turn Windows, Fixed Windows.
                    </p>
                </div>
                <div className='col-md-6 cursorpointer'>
                <a href='../detail/maingate'><img src={curtain} alt='doors' className='div_imgs'/></a>
                    <h1 id='products_h1'>CURTAIN WALLS</h1><br/>
                    <p>
                    Sliding Doors, Casement Doors, Slide-n-Fold Doors
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 cursorpointer'>
                <img src={louvers} className='div_imgs' alt='window'/>
                    <h1 id='products_h1'>LOUVERS</h1><br/>
                    <p>
                    Casement Windows, Sliding Windows, Awning Windows, Tilt-n-Turn Windows, Fixed Windows.
                    </p>
                </div>
                <div className='col-md-6 cursorpointer'>
                <img src={railings} alt='doors' className='div_imgs'/>
                    <h1 id='products_h1'>RAILINGS</h1><br/>
                    <p>
                    Sliding Doors, Casement Doors, Slide-n-Fold Doors
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 cursorpointer'>
                <img src={cielings} alt='curtain_walls'className='div_imgs'/>
                <h1 id='products_h1'>CEILINGS</h1><br/>
                <p>
                Stick Curtain Walls, Semi-unitized Curtain Walls, Unitized Curtain Walls
                </p>
                </div>
                <div className='col-md-6 cursorpointer'>
                <img src={skylight} alt='gates'className='div_imgs'/>
                <h1 id='products_h1'>SKYLIGHTS</h1><br/>
                <p>
                Aluminium Sliding and Casement Gates
                </p>
                </div>
                {/* <br/>
                <button type="button" class="btn btn-secondary btn-lg">VIEW PRODUCTS</button> */}
            </div>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Product