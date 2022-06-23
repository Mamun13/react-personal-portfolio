import React from 'react'
import "./Services.css";
import Glasses from "../img/glasses.png";
import Heart from "../img/heartemoji.png";
import Humble from "../img/humble.png";

function Services() {
  return (
    <section id='services'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className='services-text'>my awesome <br/><span>services</span> </h2>
                    <p className='serv-text'>Lorem Ipsum is simply dummy text of the printing and type<br />setting industry.</p>
                    <button className='services-button'>Download CV</button>
                </div>
                <div className="col-lg-3 step-one text-center p-0">
                    <img src={Glasses} alt="" />
                    <h6 className=''>Developer</h6>
                    <p className="skills">Html,Css,JavaScript<br/>React,NodeJs,Express</p>
                    <a href="#" className='link'>learn more</a>
                </div>
                <div className="col-lg-3 step-two text-center  p-0">
                    <div className="upper-one text-center p-0">
                        <img src={Heart} alt="" />
                        <h6 className=''>Design</h6>
                        <p className="skills">Figma,Sketch,Photoshop<br/>Adobe illustrator,Adobe XD</p>
                        <a href="#" className='link'>learn more</a>
                    </div>
                    <div className="lower-one text-center p-0">
                        <img src={Humble} alt="" />
                        <h6 className=''>UI/UX</h6>
                        <p className="skills">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <a href="#" className='link'>learn more</a>
                    </div> 
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services;



// // <div className="col-lg-3 ">
                        
// <div className="step1">
// gakjba
// </div>
// {/* <img src={Glasses} alt="" />
// <h6 className=''>Developer</h6>
// <p className="skills">Html,Css,JavaScript<br/>React,NodeJs,Express</p>
// <a href="#" className='link'>learn more</a> */}
// </div>
// <div className="col-lg-3 ">
// <div className="step2">
// gakjba
// </div>
// </div>