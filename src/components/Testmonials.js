import React from 'react';
import "./Testmonials.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import Profile1 from "../img/profile1.jpg";

function Testmoninals() {
  return (
    <section id='testmonials'>
      <div className="container">
        <div className="row">
            <div className="col-lg-12 ">
                <h4 className='text mb-5'>clients always get<span> exceptional work</span>from me... </h4>
            </div>
            <div className="row">
                <Swiper>
                    <SwiperSlide>
                        <img src={Profile1} className="img-fluid img1" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
      </div>
  </section>
  )
}

export default Testmoninals