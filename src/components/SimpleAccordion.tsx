'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shape17 from '@/assets/img/feature/shape-17.png';
import shape18 from '@/assets/img/feature/shape-18.png';
import shape19 from '@/assets/img/feature/shape-19.png';
import shape20 from '@/assets/img/feature/shape-20.png';
import icon8 from '@/assets/img/feature/icon-8.svg';
import shape21 from '@/assets/img/feature/shape-21.png';
import shape22 from '@/assets/img/feature/shape-22.png';
import shape23 from '@/assets/img/feature/shape-23.png';
import shape24 from '@/assets/img/feature/shape-24.png';
import icon9 from '@/assets/img/feature/icon-9.svg';
import shape25 from '@/assets/img/feature/shape-25.png';
import shape26 from '@/assets/img/feature/shape-26.png';
import shape27 from '@/assets/img/feature/shape-27.png';
import shape28 from '@/assets/img/feature/shape-28.png';
import shape29 from '@/assets/img/feature/shape-29.png';
import icon10 from '@/assets/img/feature/icon-10.svg';

const FeatureSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    infinity: true,
    autoplay:true,
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
                      <Image src={shape17} alt="shape" />
                      <Image src={shape18} alt="shape" />
                      <Image src={shape19} alt="shape" />
                      <Image src={shape20} alt="shape" />
                    </div>
                    <Image src={icon8} alt="icon" />
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
                      <Image src={shape21} alt="shape" />
                      <Image src={shape22} alt="shape" />
                      <Image src={shape23} alt="shape" />
                      <Image src={shape24} alt="shape" />
                    </div>
                    <Image src={icon9} alt="icon" />
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
                      <Image src={shape25} alt="shape" />
                      <Image src={shape26} alt="shape" />
                      <Image src={shape27} alt="shape" />
                      <Image src={shape28} alt="shape" />
                      <Image src={shape28} alt="shape" />
                      <Image src={shape29} alt="shape" />
                      <Image src={shape29} alt="shape" />
                    </div>
                    <Image src={icon10} alt="icon" />
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
                      <Image src={shape17} alt="shape" />
                      <Image src={shape18} alt="shape" />
                      <Image src={shape19} alt="shape" />
                      <Image src={shape20} alt="shape" />
                    </div>
                    <Image src={icon8} alt="icon" />
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
                      <Image src={shape21} alt="shape" />
                      <Image src={shape22} alt="shape" />
                      <Image src={shape23} alt="shape" />
                      <Image src={shape24} alt="shape" />
                    </div>
                    <Image src={icon9} alt="icon" />
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
                      <Image src={shape25} alt="shape" />
                      <Image src={shape26} alt="shape" />
                      <Image src={shape27} alt="shape" />
                      <Image src={shape28} alt="shape" />
                      <Image src={shape28} alt="shape" />
                      <Image src={shape29} alt="shape" />
                      <Image src={shape29} alt="shape" />
                    </div>
                    <Image src={icon10} alt="icon" />
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
                      <Image src={shape17} alt="shape" />
                      <Image src={shape18} alt="shape" />
                      <Image src={shape19} alt="shape" />
                      <Image src={shape20} alt="shape" />
                    </div>
                    <Image src={icon8} alt="icon" />
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
                      <Image src={shape21} alt="shape" />
                      <Image src={shape22} alt="shape" />
                      <Image src={shape23} alt="shape" />
                      <Image src={shape24} alt="shape" />
                    </div>
                    <Image src={icon9} alt="icon" />
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
                      <Image src={shape25} alt="shape" />
                      <Image src={shape26} alt="shape" />
                      <Image src={shape27} alt="shape" />
                      <Image src={shape28} alt="shape" />
                      <Image src={shape28} alt="shape" />
                      <Image src={shape29} alt="shape" />
                      <Image src={shape29} alt="shape" />
                    </div>
                    <Image src={icon10} alt="icon" />
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
