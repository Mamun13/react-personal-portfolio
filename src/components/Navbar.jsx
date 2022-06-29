import React from 'react';
import "../components/Navbar.css";
import "../App.css";


const Navbar=() => {
  return (
    <header>
      <section id='' className=''>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 p-0">
            <nav class="navbar navbar-expand-lg navbar-light bg-red  p-0">
              <div class="container-fluid p-0">
                <a class="navbar-brand" href="#">Andrew</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#services">services</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#experience">experience</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#projects">portfolio</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">textmonial</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link last-child" href="#form">contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Navbar;