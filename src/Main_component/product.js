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
         
        <div className='row '>
                <div className='col rows123 '>
                    <div className='re-innovating'>
                        <a href='../detail/window'><img src={window} className='div_imgs' alt='window'/></a>
                    </div>
                    <div className='re-innovating1'>
                       <h1 id='main_h12'>CASEMENT WINDOWS</h1>
                        <p className='paragraph_in_container'>
                        Thermal-break casement windows which can be opened towards inside or outside.
                        </p>
                    </div>
                
                
                </div>
                <div className='col rows123 '>
                <div className='re-innovating'>
                    <a href='../detail/door'><img src={sliding_doors} alt='doors' className='div_imgs'/></a>
                </div>
                <div className='re-innovating1'>
                <h1 id='main_h12'>SLIDING WINDOWS</h1>
                    <p className='paragraph_in_container'>
                    Thermal-break sliding windows with the option of fly-mesh.
                    </p>
                    </div>
                </div>
            </div>
            <div className='row '>
                <div className='col rows123 '>
                    <div className='re-innovating'>
                        <a href='../detail/window'><img src={Awining_doors} className='div_imgs' alt='window'/></a>
                    </div>
                    <div className='re-innovating1'>
                        <h1 id='main_h12'>AWNING WINDOWS</h1>
                        <p className='paragraph_in_container'>
                        Thermal-break awning windows for ventilations.
                        </p>
                    </div>
                
                
                </div>
                <div className='col rows123 '>
                <div className='re-innovating'>
                    <a href='../detail/door'><img src={double_casement_windows} alt='doors' className='div_imgs'/></a>
                </div>
                <div className='re-innovating1'>
                <h1 id='main_h12'>DOUBLE CASEMENT WINDOWS</h1>
                    <p className='paragraph_in_container'>
                    Thermal-break double shutter casement windows with fly-mesh and grill.
                    </p>
                    </div>
                </div>
            </div>
            <div className='row '>
                <div className='col rows123 '>
                    <div className='re-innovating'>
                        <a href='../detail/window'><img src={fixed_windows} className='div_imgs' alt='window'/></a>
                    </div>
                    <div className='re-innovating1'>
                        <h1 id='main_h12'>FIXED WINDOWS</h1>
                        <p className='paragraph_in_container'>
                        Thermal-break fixed glass windows with the option of mullions and transoms.
                        </p>
                    </div>
                
                
                </div>
                <div className='col rows123 '>
                <div className='re-innovating'>
                    <a href='../detail/door'><img src={casement_doors} alt='doors' className='div_imgs'/></a>
                </div>
                <div className='re-innovating1'>
                <h1 id='main_h12'>CASEMENT DOORS</h1>
                    <p className='paragraph_in_container'>
                    Thermal-break casement doors which can be opened towards inside or outside.
                    </p>
                    </div>
                </div>
            </div>
            <div className='row '>
                <div className='col rows123 '>
                    <div className='re-innovating'>
                        <a href='../detail/window'><img src={door} className='div_imgs' alt='window'/></a>
                    </div>
                    <div className='re-innovating1'>
                        <h1 id='main_h12'>SLIDING DOORS</h1>
                        <p className='paragraph_in_container'>
                        Thermal-break sliding doors with the option of fly-mesh.
                        </p>
                    </div>
                
                
                </div>
                <div className='col rows123 '>
                <div className='re-innovating'>
                    <a href='../detail/door'><img src={side_n_fold} alt='doors' className='div_imgs'/></a>
                </div>
                <div className='re-innovating1'>
                 <h1 id='main_h12'>SLIDE-N-FOLD DOORS</h1>
                    <p className='paragraph_in_container'>
                    Slide-n-fold accordion doors with 95% opening.
                    </p>
                    </div>
                </div>
            </div>
            <div className='row '>
                <div className='col rows123 '>
                    <div className='re-innovating'>
                        <a href='../detail/window'><img src={sliding_gates} className='div_imgs' alt='window'/></a>
                    </div>
                    <div className='re-innovating1'>
                        <h1 id='main_h12'>SLIDING GATES</h1>
                        <p className='paragraph_in_container'>
                        Aluminium sliding main gates with the option of automation.
                        </p>
                    </div>
                
                
                </div>
                <div className='col rows123 '>
                <div className='re-innovating'>
                    <a href='../detail/door'><img src={swing_gates} alt='doors' className='div_imgs'/></a>
                </div>
                <div className='re-innovating1'>
                <h1 id='main_h12'>SWING GATES</h1>
                    <p className='paragraph_in_container'>
                    Aluminium swing main gates with the option of automation.
                    </p>
                    </div>
                </div>
            </div>
            <div className='row '>
                <div className='col rows123 '>
                    <div className='re-innovating'>
                        <a href='../detail/window'><img src={wall_cladding} className='div_imgs' alt='window'/></a>
                    </div>
                    <div className='re-innovating1'>
                        <h1 id='main_h12'>WALL CLADDING</h1>
                        <p className='paragraph_in_container'>
                        Aluminium wall claddings with varying designs and combinations to complement main gates.


                        </p>
                    </div>
                
                
                </div>
                <div className='col rows123 '>
                <div className='re-innovating'>
                    <a href='../detail/door'><img src={curtain} alt='doors' className='div_imgs'/></a>
                </div>
                <div className='re-innovating1'>
                <h1 id='main_h12'>CURTAIN WALLS</h1>
                    <p className='paragraph_in_container'>
                    Stick curtain walls, unitized and semi-unitized curtain walls.
                    </p>
                    </div>
                </div>
            </div>
            <div className='row '>
                <div className='col rows123 '>
                    <div className='re-innovating'>
                        <a href='../detail/window'><img src={louvers} className='div_imgs' alt='window'/></a>
                    </div>
                    <div className='re-innovating1'>
                        <h1 id='main_h12'>LOUVERS</h1>
                        <p className='paragraph_in_container'>
                        Elliptical, rectangular, circular and other types of louvers for the elevation.
                        </p>
                    </div>
                
                
                </div>
                <div className='col rows123 '>
                <div className='re-innovating'>
                    <a href='../detail/door'><img src={railings} alt='doors' className='div_imgs'/></a>
                </div>
                <div className='re-innovating1'>
                <h1 id='main_h12'>RAILINGS</h1>
                    <p className='paragraph_in_container'>
                    Aluminium railing systems for indoor and outdoor use.​
                    </p>
                    </div>
                </div>
            </div>
            <div className='row '>
                <div className='col rows123 '>
                    <div className='re-innovating'>
                        <a href='../detail/window'><img src={cielings} className='div_imgs' alt='window'/></a>
                    </div>
                    <div className='re-innovating1'>
                        <h1 id='main_h12'>CEILINGS</h1>
                        <p className='paragraph_in_container'>
                        Aluminium rectangular and circular ceilings with quick and easy installation.
                        </p>
                    </div>
                
                
                </div>
                <div className='col rows123 '>
                <div className='re-innovating'>
                    <a href='../detail/door'><img src={skylight} alt='doors' className='div_imgs'/></a>
                </div>
                <div className='re-innovating1'>
                <h1 id='main_h12'>SKYLIGHTS</h1>
                    <p className='paragraph_in_container'>
                    Aluminium skylights customized according to requirement.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Product