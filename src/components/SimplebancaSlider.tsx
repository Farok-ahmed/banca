'use client';

import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const leftSliderData = [
  {
    name: 'Linda Lawrence',
    role: 'UI/UX Designer',
    image: '/img/testimonial/client-4.png',
    video: 'https://www.youtube.com/watch?v=xcJtL7QggTI',
    quote:
      'Best service and smooth process. Keep going on Banca team. Thank you for immediate response on each stage of process. Kudos the whole team.',
  },
  {
    name: 'Timothy Vargas',
    role: 'UI/UX Designer',
    image: '/img/testimonial/client-1.png',
    video: 'https://www.youtube.com/watch?v=xcJtL7QggTI',
    quote:
      'Best service and smooth process. Keep going on Banca team. Thank you for immediate response on each stage of process. Kudos the whole team.',
  },
  {
    name: 'Sandra Hughes',
    role: 'UI/UX Designer',
    image: '/img/testimonial/client-2.png',
    video: 'https://www.youtube.com/watch?v=xcJtL7QggTI',
    quote:
      'Best service and smooth process. Keep going on Banca team. Thank you for immediate response on each stage of process. Kudos the whole team.',
  },
  {
    name: 'Zachary Taylo',
    role: 'UI/UX Designer',
    image: '/img/testimonial/client-3.png',
    video: 'https://www.youtube.com/watch?v=xcJtL7QggTI',
    quote:
      'Best service and smooth process. Keep going on Banca team. Thank you for immediate response on each stage of process. Kudos the whole team.',
  },
];

const SimplebancaSlider = () => {
  const leftSliderRef = useRef<Slider>(null);
  const rightSliderRef = useRef<Slider>(null);

  const handlePrev = () => {
    leftSliderRef.current?.slickPrev();
    rightSliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    leftSliderRef.current?.slickNext();
    rightSliderRef.current?.slickNext();
  };

  const leftSliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
  };

  const rightSliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonial-area pt-135 pb-140 bg_white">
      <div className="container">
        <div className="section-title d-md-none mb-4">
          <h2>What Our Customers Are Saying</h2>
        </div>
        <div className="row">
          {/* Left Side Slider */}
          <div className="col-lg-4 col-md-6 pr-lg-35">
            <Slider {...leftSliderSettings} ref={leftSliderRef} className="testimonial-slider-3">
              {leftSliderData.map((item, i) => (
                <div key={i} className="testimonial-widget-3">
                  <div className="client-img position-relative">
                    <Image
                      src={item.image}
                      alt="client"
                      width={300}
                      height={300}
                      className="img-fluid rounded"
                    />
                    <Link
                      className="play-btn position-absolute top-50 start-50 translate-middle"
                      href={item.video}
                      target="_blank"
                    >
                      <i className="fas fa-play text-white fs-4 bg-primary p-3 rounded-circle"></i>
                    </Link>
                    <p className="caption mt-3 text-white">{item.quote}</p>
                  </div>
                  <div className="client-info mt-2">
                    <h6 className="mb-0">{item.name}</h6>
                    <small className="text-muted">{item.role}</small>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Right Side Slider */}
          <div className="col-lg-8 col-md-6">
            <div className="h-100 d-flex flex-column justify-content-between">
              <div className="section-title text-start d-none d-md-block mb-4">
                <h2>
                  What Our Customers <br /> Are Saying
                </h2>
              </div>
              <div>

              <Slider {...rightSliderSettings} ref={rightSliderRef} className="testimonial-slider-2 px-2">
                {leftSliderData.map((item, i) => (
                  <div key={i}>

                  <div  className="testimonial-widget-2 text-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="rounded img-fluid"
                    />
                    <div className="client-info mt-3">
                      <p className="fw-semibold mb-1">{item.name}</p>
                      <span className="text-white">{item.role}</span>
                    </div>
                  </div>
                  </div>
                ))}
              </Slider>
              </div>
              {/* Custom Arrows */}
              <div className="d-flex gap-2">
                <button
                  className="btn bg-white text-secondary border rounded"
                  onClick={handlePrev}
                >
                  <i className="arrow_left"></i>
                </button>
                <button
                  className="btn bg-white text-secondary border rounded"
                  onClick={handleNext}
                >
                  <i className="arrow_right"></i>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplebancaSlider;
