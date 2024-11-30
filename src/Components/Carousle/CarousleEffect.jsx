import React from "react";
import { Carousel } from "react-responsive-carousel";
import { CarousleImageData } from "./CarousleImageData";
import classes from "./carousle.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarousleEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {CarousleImageData.map((data, index) => {
          //console.log(data);
          return <img key={index} src={data} />;
        })}
      </Carousel>
      <div className={classes["hero__img--bottom"]}></div>
    </div>
  );
};

export default CarousleEffect;
