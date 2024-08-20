import React from "react";
import "./Bgimg2.css";
import img1 from "./Sbanner/B21.jpg";
import img2 from "./Sbanner/home1.jpg";
import img3 from "./Sbanner/B40.jpg";

const Bgimg2 = () => {
  return (
    <div className="mar1">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active img1"></div>
          <div className="carousel-item img2"></div>
          <div className="carousel-item img3"></div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Bgimg2;
