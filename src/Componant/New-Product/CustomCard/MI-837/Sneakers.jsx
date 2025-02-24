import img1 from "./Image/837N1.jpg";
import img2 from "./Image/837N1.jpg";
import img3 from "./Image/837N1.jpg";
import img4 from "././Image/837N1.jpg";
import img1Icon from "./Image/837N1.jpg";
import img2Icon from "./Image/837N1.jpg";
import img3Icon from "./Image/837N1.jpg";
import img4Icon from "./Image/837N1.jpg";
import { useState } from "react";
const Sneakers = () => {
  const [image, setImage] = useState(1);
  let url = image;
  // console.log("The state number is : ", image);
  if (image == 1) {
    url = img1;
  } else if (image == 2) {
    url = img2;
  } else if (image == 3) {
    url = img3;
  } else if (image == 4) {
    url = img4;
  }
  return (
    <div className="sneakers-div12">
      <div className="sneakers-col2">
        <div className={`small-sneaker-div ${image == 1 && "active-sneaker"}`}>
          <img
            alt="img"
            className={`small-sneaker`}
            onClick={() => {
              setImage(1);
            }}
            src={img1Icon}
          />
        </div>
        <div className={`small-sneaker-div ${image == 2 && "active-sneaker"}`}>
          <img
            alt="img"
            className={`small-sneaker`}
            onClick={() => {
              setImage(2);
            }}
            src={img2Icon}
          />
        </div>
        <div className={`small-sneaker-div ${image == 3 && "active-sneaker"}`}>
          <img
            alt="img"
            className={`small-sneaker`}
            onClick={() => {
              setImage(3);
            }}
            src={img3Icon}
          />
        </div>
        <div className={`small-sneaker-div ${image == 4 && "active-sneaker"}`}>
          <img
            alt="img"
            className={`small-sneaker`}
            onClick={() => {
              setImage(4);
            }}
            src={img4Icon}
          />
        </div>
      </div>
      <div className="sneakers-col sneakers-col1">
      <svg
          onClick={() => {
            let num;
            num = image - 1;
            if (num < 1) {
              num = 4;
            }
            setImage(num);
          }}
          className="mobile-prev"
          width="12"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
        <img
          className="big-sneaker12"
          alt="img"
          
          src={url}
        />
        <svg
          onClick={() => {
            let num;
            num = image + 1;
            if (num > 4) {
              num = 1;
            }
            setImage(num);
          }}
          className="mobile-next"
          width="13"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Sneakers;
