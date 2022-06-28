import React from 'react';
import "./Projects.css";
import Hoc from "../img/hoc.png";
import Ecommerce from "../img/ecommerce.png";
import Musicapp from "../img/musicapp.png";
import Sidebar from "../img/sidebar.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

function Projects() {
  return (
    <section id='projects'>
      <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h4 className='text mb-5'>recent projects <br/><span>portfolio</span> </h4>
            </div>
            <div className="row b-radious">
                <Swiper 
                spaceBetween={30}
                slidesPerView={3}
                >
                    <SwiperSlide>
                        <img src={Hoc} className="img-fluid" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Ecommerce} className="img-fluid" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Musicapp} className="img-fluid" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Sidebar} className="img-fluid" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Hoc} className="img-fluid" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Ecommerce} className="img-fluid" alt="" />
                    </SwiperSlide>
                </Swiper>
                
            </div>
        </div>
      </div>
  </section>
  )
}

export default Projects