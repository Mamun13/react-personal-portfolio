import React from 'react'
import "./Banner.css";
import Boy2 from "../img/boy2.png";
import Boy from "../img/boy.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import Crown from "../img/crown.png";
import Thumbup from "../img/thumbup.png";
import Glassesimoji from "../img/glassesimoji.png";
import FloatingDiv from './Floatingdiv/FloatingDiv';


function Banner() {
  return (
    <section id='banner'>
      <div className="container">
          <div className="row">
              <div className="col-lg-6 p-0 icon">
                <h1 className='title'>hy! I am<br /><span className='name'>andrew thomas</span></h1>
                <p className='title_text'>Frontend Developer with high levelof experience in web designing and development,<br />producing the Quality work.</p>
                <button href="#" className='banner-button'>hire me</button><br />
                <a href="#" className='banner-icon'><i class="fa-brands fa-github"></i></a>
                <a href="#" className='banner-icon'><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="#" className='banner-icon'><i class="fa-brands fa-instagram"></i></a>
              </div>
              <div className="col-lg-6  p-0">
                <div className="banner-img">
                {/* <img src={Boy2} className="img-one"/> */}
                  <img src={Vector1} className="img-one "/>
                  <img src={Vector2} className="img-two " />  
                  <img src={Boy} className="img-three " />  
                  <img src={Glassesimoji} className="gimoji"/> 
                  <div style={{top:'-10%', left:'55%'}}>
                    <FloatingDiv image={Crown} txt1="Web"  txt2="Developer"  />
                  </div>
                  <div style={{top:'14.1rem', left:'0rem'}}>
                    <FloatingDiv image={Thumbup} txt1="Best"  txt2="Design Award" />
                  </div>
                </div>
                
              </div>
          </div>
        </div>
    </section>
  )
}

export default Banner;