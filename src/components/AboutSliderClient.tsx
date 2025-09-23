"use client"
import React from "react";
import Slider from "react-slick";

const AboutSliderClient = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings} className="statistics-slider">
        <div className="widget-content">
          <h1 className="stat-counter">15,000</h1>
          <p>We employ 15,000 people around the world</p>
        </div>
        <div className="widget-content">
          <h1 className="stat-counter">10,000</h1>
          <p>We employ 15,000 people around the world</p>
        </div>
        <div className="widget-content">
          <h1 className="stat-counter">25,000</h1>
          <p>We employ 15,000 people around the world</p>
        </div>
      </Slider>
    </>
  );
};

export default AboutSliderClient;
