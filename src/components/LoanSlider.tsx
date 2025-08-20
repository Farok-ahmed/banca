"use client";

import React, { ReactNode } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import loanType1 from "@/assets/img/home-5/loan-type-1.png";
import loanType2 from "@/assets/img/home-5/loan-type-2.png";
import loanType3 from "@/assets/img/home-5/loan-type-3.png";

const LoanSlider = () => {
  const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
    return (
      <>
        <button
        onClick={onClick}
        className="slick-next slick-arrow"
      >
        <i className="arrow_right"></i>
      </button>
      </>
    );
  };

  const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
    return (
      <button onClick={onClick} className="slick-prev slick-arrow">
        <i className="arrow_left"></i>
      </button>
    );
  };
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: <NextArrow/>,
    prevArrow:<PrevArrow/>,
    customPaging: () => (
      <button
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
        }}
      ></button>
    ),
    appendDots: (dots: ReactNode) => (
      <ul style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {dots}
      </ul>
    ),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    {
      title: "Personal Loans",
      image: loanType1,
      description:
        "Our team of experts uses methodology to identify the credit cards most suitable for your needs.",
    },
    {
      title: "Installment Loans",
      image: loanType2,
      description:
        "Our team of experts uses methodology to identify the credit cards most suitable for your needs.",
    },
    {
      title: "Payday Loans",
      image: loanType3,
      description:
        "Our team of experts uses methodology to identify the credit cards most suitable for your needs.",
    },
    {
      title: "Personal Loans",
      image: loanType1,
      description:
        "Our team of experts uses methodology to identify the credit cards most suitable for your needs.",
    },
    {
      title: "Installment Loans",
      image: loanType2,
      description:
        "Our team of experts uses methodology to identify the credit cards most suitable for your needs.",
    },
    {
      title: "Payday Loans",
      image: loanType3,
      description:
        "Our team of experts uses methodology to identify the credit cards most suitable for your needs.",
    },
    {
      title: "Installment Loans",
      image: loanType2,
      description:
        "Our team of experts uses methodology to identify the credit cards most suitable for your needs.",
    },
    {
      title: "Payday Loans",
      image: loanType3,
      description:
        "Our team of experts uses methodology to identify the credit cards most suitable for your needs.",
    },
    {
      title: "Personal Loans",
      image: loanType1,
      description:
        "Our team of experts uses methodology to identify the credit cards most suitable for your needs.",
    },
  ];

  return (
    <section className="loan-slider-area bg-white pb-130 pt-120">
      <div className="container">
        <div className="section-title">
          <span className="short-title-2">Loan types</span>
          <h1 className="wow fadeInUp">We offer a wide variety of loans</h1>
        </div>

        <div className="loan-slider pt-80">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index}>
                <div className="single-slide">
                  <div className="icon">
                    <Image src={slide.image} alt={slide.title} />
                  </div>
                  <h4>{slide.title}</h4>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default LoanSlider;
