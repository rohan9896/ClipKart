import React, { useState } from "react";
import "./Banner.css";

const bannersArr = [
  {
    name: "",
    img:
      "https://media.istockphoto.com/vectors/pink-glow-neon-flash-sale-banner-vector-id1196582391?k=6&m=1196582391&s=612x612&w=0&h=v62trxgnIwn3o6v_WF4TglzPIaVlW0nlxNJwUas-qds=",
    heading1: "",
    heading2: "",
  },
  {
    name: "",
    img:
      "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
    heading1: "Maha Bachat Days",
    heading2: "Buy at 90% OFF",
  },
  {
    name: "",
    img:
      "https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg",
    heading1: "Buy 2 Get 2 FREE ",
    heading2: "ONLY FOR TODAY!!",
  },
];

function Banner() {
  const [banner, setBanner] = useState(bannersArr[1]);

  // useEffect(() => {});

  const handleForwardClick = () => {
    let indexOfCurrentBanner = bannersArr.indexOf(banner);
    if (indexOfCurrentBanner === bannersArr.length - 1) {
      setBanner(bannersArr[0]);
    } else {
      setBanner(bannersArr[indexOfCurrentBanner + 1]);
    }
  };

  const handleBackwardClick = () => {
    let indexOfCurrentBanner = bannersArr.indexOf(banner);
    if (indexOfCurrentBanner === 0) {
      setBanner(bannersArr[bannersArr.length - 1]);
    } else {
      setBanner(bannersArr[indexOfCurrentBanner - 1]);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${banner.img})`,
        }}
        className="banner__container"
      >
        <div>
          <button onClick={handleBackwardClick} className="icon-button btn1">
            <img
              alt="arrow"
              src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/left-arrow.svg"
            />
          </button>
          <button onClick={handleForwardClick} className="icon-button btn2">
            <img
              alt="arrow"
              src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/4d0222bc00ff03f8dac8b8c35431062c89807b4a/icons/icon%20component/rightArrow.svg"
            />
          </button>
        </div>
        <p className="banner__heading1">{banner.heading1}</p>
        <p className="banner__heading2">{banner.heading2}</p>
      </div>
    </>
  );
}

export default Banner;
