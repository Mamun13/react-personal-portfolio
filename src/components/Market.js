import React from 'react';
import "./Market.css";

function Market() {
  return (
    <section id='Market'>
      <div className="container">
          <div className="row">
              <div className="col-lg-6 p-0 icon">
                <h1 className='title'>Work for All these<br /><span className='name'>Brands & Clients</span></h1>
                <p className='title_text mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veniam soluta<br /> recusandae iure similique ducimus ullam. Magnam corrupti ad vitae est <br/>aliquam aperiam commodi vel, laborum at dolorum placeat cum.</p>
                <button href="#" className='banner-button'>hire me</button><br />
                {/* <a href="#" className='banner-icon'><i class="fa-brands fa-github"></i></a>
                <a href="#" className='banner-icon'><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="#" className='banner-icon'><i class="fa-brands fa-instagram"></i></a> */}
              </div>
          </div>
        </div>
    </section>
  )
}

export default Market