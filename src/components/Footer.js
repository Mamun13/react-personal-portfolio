import React from 'react'
import "../components/Footer.css"
import Wave from '../img/wave.png';

function Footer() {
  return (
    <section id='footer'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 footer p-0"> 
                    <img src={Wave} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer