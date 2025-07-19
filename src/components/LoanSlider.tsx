'use client';

import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LoanSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: (
      <div>
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <i className="arrow_right"></i>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <i className="arrow_left"></i>
        </div>
      </div>
    ),
    customPaging: () => (
      <button
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
        }}
      ></button>
    ),
    appendDots: (dots: ReactNode) => (
      <ul style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
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
      title: 'Personal Loans',
      image: '/img/home-5/loan-type-1.png',
      description:
        'Our team of experts uses methodology to identify the credit cards most suitable for your needs.',
    },
    {
      title: 'Installment Loans',
      image: '/img/home-5/loan-type-2.png',
      description:
        'Our team of experts uses methodology to identify the credit cards most suitable for your needs.',
    },
    {
      title: 'Payday Loans',
      image: '/img/home-5/loan-type-3.png',
      description:
        'Our team of experts uses methodology to identify the credit cards most suitable for your needs.',
    },
    {
      title: 'Personal Loans',
      image: '/img/home-5/loan-type-1.png',
      description:
        'Our team of experts uses methodology to identify the credit cards most suitable for your needs.',
    },
    {
      title: 'Installment Loans',
      image: '/img/home-5/loan-type-2.png',
      description:
        'Our team of experts uses methodology to identify the credit cards most suitable for your needs.',
    },
    {
      title: 'Payday Loans',
      image: '/img/home-5/loan-type-3.png',
      description:
        'Our team of experts uses methodology to identify the credit cards most suitable for your needs.',
    },
    {
      title: 'Installment Loans',
      image: '/img/home-5/loan-type-2.png',
      description:
        'Our team of experts uses methodology to identify the credit cards most suitable for your needs.',
    },
    {
      title: 'Payday Loans',
      image: '/img/home-5/loan-type-3.png',
      description:
        'Our team of experts uses methodology to identify the credit cards most suitable for your needs.',
    },
    {
      title: 'Personal Loans',
      image: '/img/home-5/loan-type-1.png',
      description:
        'Our team of experts uses methodology to identify the credit cards most suitable for your needs.',
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
                    <Image
                      src={slide.image}
                      width={50}
                      height={50}
                      alt={slide.title}
                    />
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
