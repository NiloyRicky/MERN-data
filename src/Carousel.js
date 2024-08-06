import React from 'react';
import './style.css';
import stock_market from './images/stock_market.jpg';
import data from './images/data.jpg';
import photo from './images/photo.jpg';
import developer from './images/developer.jpg';

function Carousel() {
  return (
    <div className='carousel p-2'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={stock_market}className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-md-block">
              <h5>Stock Market</h5>
              
            </div>
          </div>
          <div className="carousel-item">
            <img src={data}className="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h5>Data Analysis</h5>
              
            </div>
          </div>
          <div className="carousel-item ">
            <img src={developer}className="d-block w-100 my-9" alt="..."/>
            <div className="carousel-caption  d-md-block">
              <h5>Development</h5>
              
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}

export default Carousel