import React from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Experience from './components/Experience';
import Market from './components/Market';
import Projects from './components/Projects';
import Testmoninals from './components/Testmonials';
import Form from './components/Form';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Experience />
      <Market />
      <Projects />
      <Testmoninals />
      <Form />
      {/* <section id="portfolio" className='py-5'>
        <div className="container">
          <div className="section-header text-center">
            <h1 className='section-title'>Hello Title</h1>
          </div>
          <div className="row justify-content-center align-items-end">
            <div className="col-lg-4">
              <div className="portfolio-widget shadow border-5 border-warning border p-3 rounded bg-success text-light bg-gradient">
                <h4 className='widgert-ttile'>Portfolio title</h4>
                <p className='widget-desc'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-widget border p-3 rounded bg-warning text-light bg-gradient">
                <h4 className='widgert-ttile'>Portfolio title</h4>
                <p className='widget-desc fs-1 fw-bold'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default App;