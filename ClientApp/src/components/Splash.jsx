import React from "react";
import "./Splash.css";
import carousel2 from "../assets/img/espresso.jpg";
import { Carousel } from "react-bootstrap";

function Splash() {
  return (
    <div className="splashPage">
      <p>Splash stuff</p>

      <Carousel className="splashCarousel">
        {/* <Carousel.Item>
          <img src={carousel1} alt="mt rainier" />
        </Carousel.Item> */}
        <Carousel.Item>
          <img src={carousel2} alt="mt rainier" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Splash;
