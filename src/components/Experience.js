import React from 'react';
import "../components/Experience.css";

function Experience() {
  return (
    <> 
      <section id='experience'>
        <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className='text-center mb-5'>Work Experience</h1>
              </div>
                <div className="col-lg-4 work p-0">
                  <p className='text-center'><span className='mb-4'>8+ <br /></span><br/>Years<br /> Experience </p> 
                </div>
                <div className="col-lg-4 middle text-center">
                  <p className='text-center'><span className='mb-4'>20+ <br /></span><br/>Completed<br /> Projects </p> 
                </div>
                <div className="col-lg-4 last p-0">
                  <p><span className='mb-4'>5+ <br /></span><br/>Companies </p> 

                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Experience