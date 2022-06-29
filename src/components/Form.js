import React from 'react'
import "../components/Form.css";

function Form() {
  return (
    <section id='form'>
      <div className="container">
          <div className="row">
              <div className="col-lg-6 p-0 ">
                <h1 className='form-title mt-5'>Get in Touch<br /><span className='name'>Contact Me</span></h1>
              </div>
              <div className="col-lg-6 detail p-0">
                
                    <input type="text" class="name" placeholder="Your Name"/>
                    <input type="email" class="email" placeholder="Your Email"/>
                    <div class="form-group">
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Your comment" rows="4"></textarea>
                    </div>
                    <button type="button" class="btn btn-warning submit">Let's Talk</button>
                
              </div>
          </div>
        </div>
    </section>
  )
}

export default Form