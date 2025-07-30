'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeatureSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    infinity: true,
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

  return (
    <section className="feature">
      <div className="row">
        <div className="col-md-12">
          <div className="feature-slider">
            <div className="p-4">
              <Slider {...settings}>
                {/* Start of all original items (unchanged) */}
                <div className="px-1">
                  <div
                    className="feature-card-widget-3 wow fadeInLeft card-1"
                    data-wow-delay="0.1s"
                  >
                    <div className="shapes">
                      <Image
                        width={110}
                        height={60}
                        src="/img/feature/shape-17.png"
                        alt="shape"
                      />
                      <Image
                        width={70}
                        height={60}
                        src="/img/feature/shape-18.png"
                        alt="shape"
                      />
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/shape-19.png"
                        alt="shape"
                      />
                      <Image
                        width={20}
                        height={20}
                        src="/img/feature/shape-20.png"
                        alt="shape"
                      />
                    </div>
                    <Image
                      width={30}
                      height={30}
                      src="/img/feature/icon-8.svg"
                      alt="icon"
                    />
                    <span className="title">Mortgage</span>
                    <h5>
                      Got a <span> question about Mortgage Loan?</span>
                    </h5>
                    <Link href="#">Write to us</Link>
                  </div>
                </div>

                <div className="px-1">
                  <div
                    className="feature-card-widget-3 wow fadeInLeft card-2"
                    data-wow-delay="0.3s"
                  >
                    <div className="shapes">
                      <Image
                        width={100}
                        height={60}
                        src="/img/feature/shape-21.png"
                        alt="shape"
                      />
                      <Image
                        width={20}
                        height={20}
                        src="/img/feature/shape-22.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-23.png"
                        alt="shape"
                      />
                      <Image
                        width={20}
                        height={20}
                        src="/img/feature/shape-24.png"
                        alt="shape"
                      />
                    </div>
                    <Image
                      width={30}
                      height={30}
                      src="/img/feature/icon-9.svg"
                      alt="icon"
                    />
                    <span className="title">Bank account</span>
                    <h5>
                      Got a <span> question about Mortgage Loan?</span>
                    </h5>
                    <Link href="#">Write to us</Link>
                  </div>
                </div>

                <div className="px-1">
                  <div
                    className="feature-card-widget-3 wow fadeInLeft card-3"
                    data-wow-delay="0.5s"
                  >
                    <div className="shapes">
                      <Image
                        width={100}
                        height={100}
                        src="/img/feature/shape-25.png"
                        alt="shape"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="/img/feature/shape-26.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-27.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-28.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-28.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-29.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-29.png"
                        alt="shape"
                      />
                    </div>
                    <Image
                      width={30}
                      height={30}
                      src="/img/feature/icon-10.svg"
                      alt="icon"
                    />
                    <span className="title">Loans</span>
                    <h5>
                      Got a <span> question about Mortgage Loan?</span>
                    </h5>
                    <Link href="#">Write to us</Link>
                  </div>
                </div>

                <div className="px-1">
                  <div
                    className="feature-card-widget-3 wow fadeInLeft card-1"
                    data-wow-delay="0.7s"
                  >
                    <div className="shapes">
                      <Image
                        width={110}
                        height={60}
                        src="/img/feature/shape-17.png"
                        alt="shape"
                      />
                      <Image
                        width={70}
                        height={60}
                        src="/img/feature/shape-18.png"
                        alt="shape"
                      />
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/shape-19.png"
                        alt="shape"
                      />
                      <Image
                        width={20}
                        height={20}
                        src="/img/feature/shape-20.png"
                        alt="shape"
                      />
                    </div>
                    <Image
                      width={30}
                      height={30}
                      src="/img/feature/icon-8.svg"
                      alt="icon"
                    />
                    <span className="title">Mortgage</span>
                    <h5>
                      Got a <span> question about Mortgage Loan?</span>
                    </h5>
                    <Link href="#">Write to us</Link>
                  </div>
                </div>

                <div className="px-1">
                  <div
                    className="feature-card-widget-3 wow fadeInLeft card-2"
                    data-wow-delay="0.9s"
                  >
                    <div className="shapes">
                      <Image
                        width={100}
                        height={60}
                        src="/img/feature/shape-21.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-22.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-23.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-24.png"
                        alt="shape"
                      />
                    </div>
                    <Image
                      width={30}
                      height={30}
                      src="/img/feature/icon-9.svg"
                      alt="icon"
                    />
                    <span className="title">Bank account</span>
                    <h5>
                      Got a <span> question about Mortgage Loan?</span>
                    </h5>
                    <Link href="#">Write to us</Link>
                  </div>
                </div>

                <div className="px-1">
                  <div
                    className="feature-card-widget-3 wow fadeInLeft card-3"
                    data-wow-delay="1.1s"
                  >
                    <div className="shapes">
                      <Image
                        width={80}
                        height={60}
                        src="/img/feature/shape-25.png"
                        alt="shape"
                      />
                      <Image
                        width={80}
                        height={60}
                        src="/img/feature/shape-26.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-27.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-28.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-28.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-29.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-29.png"
                        alt="shape"
                      />
                    </div>
                    <Image
                      width={30}
                      height={30}
                      src="/img/feature/icon-10.svg"
                      alt="icon"
                    />
                    <span className="title">Loans</span>
                    <h5>
                      Got a <span> question about Mortgage Loan?</span>
                    </h5>
                    <Link href="#">Write to us</Link>
                  </div>
                </div>

                <div className="px-1">
                  <div
                    className="feature-card-widget-3 wow fadeInLeft card-1"
                    data-wow-delay="1.3s"
                  >
                    <div className="shapes">
                      <Image
                        width={110}
                        height={60}
                        src="/img/feature/shape-17.png"
                        alt="shape"
                      />
                      <Image
                        width={70}
                        height={60}
                        src="/img/feature/shape-18.png"
                        alt="shape"
                      />
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/shape-19.png"
                        alt="shape"
                      />
                      <Image
                        width={20}
                        height={20}
                        src="/img/feature/shape-20.png"
                        alt="shape"
                      />
                    </div>
                    <Image
                      width={30}
                      height={30}
                      src="/img/feature/icon-8.svg"
                      alt="icon"
                    />
                    <span className="title">Mortgage</span>
                    <h5>
                      Got a <span> question about Mortgage Loan?</span>
                    </h5>
                    <Link href="#">Write to us</Link>
                  </div>
                </div>

                <div className="px-1">
                  <div
                    className="feature-card-widget-3 wow fadeInLeft card-2"
                    data-wow-delay="1.5s"
                  >
                    <div className="shapes">
                      <Image
                        width={100}
                        height={70}
                        src="/img/feature/shape-21.png"
                        alt="shape"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="/img/feature/shape-22.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-23.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-24.png"
                        alt="shape"
                      />
                    </div>
                    <Image
                      width={30}
                      height={30}
                      src="/img/feature/icon-9.svg"
                      alt="icon"
                    />
                    <span className="title">Bank account</span>
                    <h5>
                      Got a <span> question about Mortgage Loan?</span>
                    </h5>
                    <Link href="#">Write to us</Link>
                  </div>
                </div>

                <div className="px-1">
                  <div
                    className="feature-card-widget-3 wow fadeInLeft card-3"
                    data-wow-delay="1.7s"
                  >
                    <div className="shapes">
                      <Image
                        width={80}
                        height={60}
                        src="/img/feature/shape-25.png"
                        alt="shape"
                      />
                      <Image
                        width={80}
                        height={60}
                        src="/img/feature/shape-26.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-27.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-28.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-28.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-29.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-29.png"
                        alt="shape"
                      />
                    </div>
                    <Image
                      width={30}
                      height={30}
                      src="/img/feature/icon-10.svg"
                      alt="icon"
                    />
                    <span className="title">Loans</span>
                    <h5>
                      Got a <span> question about Mortgage Loan?</span>
                    </h5>
                    <Link href="#">Write to us</Link>
                  </div>
                </div>
                {/* End of all items */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSlider;
