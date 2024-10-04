import Sneakers from "./Sneakers";
// import './style.css';
import {useEffect} from "react";
const Herosec = () => {
  useEffect(() => {
   
  });

  return (
    <>
     <div className="hero-row">
        <div className="div1">
          <Sneakers />
        </div>
        <div className="div2">
          <div className="col2-wrapper12">
            <h1 className="main-heading">fx-82MS</h1>
            <p className="hero-para">
            <ol type="1">
              <li className="mb-3" > 240 Functions / Dot Matrix / Plastic Keys
              </li>
              <li className="my-3"> Multi-replay function
              </li>
              <li className="my-3"> Fraction calculations
              </li>
              <li className="my-3"> Combination and Permutation
              </li>
              <li className="my-3"> Statistics (Standard deviation)
              </li>
              <li className="my-3"> 9 variable memories
              </li>
              <li className="my-3"> Comes with slide-on hard case
              </li>
              </ol>
            </p>
            <span className="dollar">INR-410</span>
            <span className="discount hero-subHeading">30%</span>
            <del className="discount2 hero-para">INR-587</del>
            <div className="cart2-sec">
                <div className="cart2-col cart2-col2">
                  <button className="cart2-btn">
                    <span className="cart2-text">Inquiry</span>
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosec;
