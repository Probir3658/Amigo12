import React from 'react'
import img from "./Sbanner/B20.jpg"
import img2 from "./Sbanner/home1.jpg"
import img3 from "./Sbanner/Home2.jpg"
import img4 from "./Sbanner/B40.jpg"
import img5 from "./Sbanner/CONCEPT-12.ppng.jpg"
import img6 from "./Sbanner/B21.jpg"

function Bgimg() {
  return (
    <>    
    <div className='mar1'>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img6} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={img} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </>

  )
}

export default Bgimg;
