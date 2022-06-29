import React from 'react';
import "./Testmonials.css";
import { Swiper, SwiperSlide } from 'swiper/react';

import Profile1 from "../img/profile1.jpg";
import Profile2 from "../img/profile2.jpg";
import Profile3 from "../img/profile3.jpg";
import Profile4 from "../img/profile4.jpg";
import Profile5 from "../img/profile5.jpg";
import Profile6 from "../img/profile6.jpg";
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import "swiper/css";

function Testmoninals() {
  const clients=[
    {
      img: Profile1,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ad officiis ipsa fugit suscipit, numquam libero asperioresvoluptatibus eos error, sed possimus doloribus assumenda, perspiciatis deserunt? Enim possimus error cumque!"
    },
    {
      img: Profile2,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ad officiis ipsa fugit suscipit, numquam libero asperioresvoluptatibus eos error, sed possimus doloribus assumenda, perspiciatis deserunt? Enim possimus error cumque!"
    },
    {
      img: Profile3,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ad officiis ipsa fugit suscipit, numquam libero asperioresvoluptatibus eos error, sed possimus doloribus assumenda, perspiciatis deserunt? Enim possimus error cumque!"
    },
    {
      img: Profile4,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ad officiis ipsa fugit suscipit, numquam libero asperioresvoluptatibus eos error, sed possimus doloribus assumenda, perspiciatis deserunt? Enim possimus error cumque!"
    },
    {
      img: Profile5,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ad officiis ipsa fugit suscipit, numquam libero asperioresvoluptatibus eos error, sed possimus doloribus assumenda, perspiciatis deserunt? Enim possimus error cumque!"
    },
    {
      img: Profile6,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ad officiis ipsa fugit suscipit, numquam libero asperioresvoluptatibus eos error, sed possimus doloribus assumenda, perspiciatis deserunt? Enim possimus error cumque!"
    },
  ]



  return (
    <section id='testmonials'>
      <div className="container">
        <div className="row">
            <div className="col-lg-12 ">
                <h4 className='text mb-5'>clients always get<span> exceptional work</span>from me... </h4>
            </div>
            <div className="row pagination text-center"> 
                <Swiper
                  modules={(Pagination)}
                  slidesPerView={1}
                  pagination={{Clickable: true}}
                  >
                    {clients.map((client,index)=>{
                      return(
                        <SwiperSlide key={index}>
                          <img src={client.img} alt="" /><br/>
                          <span>{client.review}</span>
                        </SwiperSlide>
                      );
                    })}
                    
                </Swiper>
             </div>
        </div>
      </div>
  </section>
  )
}

export default Testmoninals