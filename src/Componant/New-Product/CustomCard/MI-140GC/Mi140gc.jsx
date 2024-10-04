
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
            <h1 className="main-heading">140GC</h1>
            <p className="hero-para">
            <ol>
                <li className="mb-3" >14-digit Large Calculator,
                </li>
                <li className="my-3"> Acrylic Key,
                </li>
                <li className="my-3">  Clear LCD display,
                </li>
                <li className="my-3"> Multi-replay function,
                </li>
                <li className="my-3"> Designed for both Home and Office use,
                </li>
                <li className="my-3"> Long-lasting performance Ideal for students,
                </li>
                <li className="my-3"> AA Battery,
                </li>
              </ol>
            </p>
            <span className="dollar">INR-455</span>
            <span className="discount hero-subHeading">30%</span>
            <del className="discount2 hero-para">INR-650</del>
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
