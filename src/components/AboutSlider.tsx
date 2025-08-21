"use client"
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import statisticsImg from "@/assets/img/statistics/img-6.png";
import stat1 from "@/assets/img/statistics/img-1.png";
import stat2 from "@/assets/img/statistics/img-2.png";
import stat3 from "@/assets/img/statistics/img-3.png";
import stat4 from "@/assets/img/statistics/img-4.png";
import Counter from "./common-section/Counter";

const AboutSlider = () => {
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
      <section className="statistics-area pt-135 pb-140 bg_disable">
        <div className="container">
          <div className="row gy-lg-0 gy-4">
            <div className="col-lg-7">
              <div className="statistics-widget-2 wow fadeInUp">
                <div className="row gx-0">
                  <div className="col-7" style={{ backgroundColor: "#610fc9" }}>
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
                  </div>
                  <div className="col-5">
                    <Image
                     
                      style={{ height: 200 }}
                      className="img-fluid"
                      src={stat1}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="statistics-widget-2  wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div
                  className="widget-content widget-2"
                  style={{ height: 200 }}
                >
                  <h1 className="stat-counter"><Counter count={59} decimals={0} /></h1>
                  <p>Our colleagues come from 125 different countries</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-30 pb-30 gy-4 gy-lg-0">
            <div className="col-lg-7">
              <div className="row gy-4 gy-lg-0">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="statistics-widget-2 wow fadeInRight"
                    data-wow-delay="0.1s"
                  >
                    <div className="widget-content widget-3">
                      <h1 className="stat-counter"><Counter count={75} decimals={0} /></h1>
                      <p>More than 75 years in business</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="statistics-widget-2 wow fadeInRight"
                    data-wow-delay="0.3s"
                  >
                    <div className="widget-content widget-4">
                      <h1 className="stat-counter"><Counter count={450} decimals={0} /></h1>
                      <p>450 branches worldwide</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ">
                  <div
                    className="statistics-widget-2 wow fadeInRight"
                    data-wow-delay="0.5s"
                  >
                    <div className="widget-content widget-5">
                      <h1 className="stat-counter"><Counter count={25} decimals={0} /></h1>
                      <p>We are present in 25 markets</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ">
              <div
                className="statistics-widget-2 wow fadeInRight"
                data-wow-delay="0.7s"
              >
                <div
                  className="widget-content widget-6"
                  style={{
                    backgroundImage: `url(${stat2.src})`,
                  }}
                >
                  <h2>Best Consumer Digital Bank</h2>
                  <p>Global Finance 2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-4 gy-md-0">
            <div className="col-md-5">
              <div
                className="statistics-widget-2 wow fadeInLeft"
                data-wow-delay="0.1s"
              >
                <div
                  className="widget-content widget-7"
                  style={{
                    backgroundImage: `url(${stat3.src})`,
                  }}
                >
                  <h1 className="stat-counter"><Counter count={35} decimals={0} /></h1>
                  <p>Global Finance 2020</p>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div
                className="statistics-widget-2 wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <div className="row gx-0">
                  <div className="col-5">
                    <Image
                      className="img-fluid"
                      src={statisticsImg}
                      alt="img"
                    />
                  </div>
                  <div className="col-7">
                    <div
                      className="widget-content widget-8"
                      style={{
                        backgroundImage: `url(${stat4.src})`,
                      }}
                    >
                      <h1 className="stat-counter"><Counter count={2} decimals={0} /></h1>
                      <p>
                        We’re listed on two of Asia’s largest stock exchanges
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSlider;
