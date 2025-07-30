'use client';

import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaPlayCircle } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CustomArrowProps } from 'react-slick';

function NextArrow(props: CustomArrowProps) {
  const { className, onClick, style } = props;
  return (
    <div
      className={`${className} custom-arrow next`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { className, onClick, style } = props;
  return (
    <div
      className={`${className} custom-arrow prev`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

export default function CenterMode() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: '100px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      img: '/img/testimonial/img-1.png',
      video: 'https://www.youtube.com/watch?v=xcJtL7QggTI',
      heading: 'Making dreams a reality!',
      content:
        'We were looking for a home of happiness and peace. Thanks to the Grihashakti team who helped us to realise this dream of ours. Our home has been very lucky for us – as we shifted to our new home, prosperity followed!',
      name: 'Maxwell Wood',
      location: 'New York, US',
    },
    {
      img: '/img/testimonial/img-2.png',
      video: 'https://www.youtube.com/watch?v=xcJtL7QggTI',
      heading: 'A beautiful journey begins!',
      content:
        'We were looking for a home of happiness and peace. Thanks to the Grihashakti team who helped us to realise this dream of ours. Our home has been very lucky for us – as we shifted to our new home, prosperity followed!',
      name: 'Emily Stone',
      location: 'California, US',
    },
    {
      img: '/img/testimonial/img-1.png',
      video: 'https://www.youtube.com/watch?v=xcJtL7QggTI',
      heading: 'Building happy families!',
      content:
        'We were looking for a home of happiness and peace. Thanks to the Grihashakti team who helped us to realise this dream of ours. Our home has been very lucky for us – as we shifted to our new home, prosperity followed!',
      name: 'Liam Johnson',
      location: 'Texas, US',
    },
  ];

  return (
    <section className="pt-140 pb-140 testimonial-area bg_disable">
      <div className="custom-slider-wrapper">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3">
              <div className="testimonial-slide bg-white shadow rounded-4">
                <div className="row align-items-center gx-4">
                  <div className="col-lg-4">
                    <Image
                      src={item.img}
                      alt="testimonial"
                      width={400}
                      height={400}
                      className="img-fluid rounded-l-xl rounded-r-xl object-cover"
                    />
                  </div>
                  <div className="col-lg-8">
                    <div className="testimonial-content ps-lg-4 mt-4 mt-lg-0">
                      <div className="d-flex align-items-center gap-2 text-primary mb-2">
                        <FaPlayCircle style={{ fontSize: '26px' }} />
                        <Link
                          href={item.video}
                          target="_blank"
                          className="fw-medium"
                        >
                          watch the video
                        </Link>
                      </div>
                      <h2 className="fw-bold mb-3">{item.heading}</h2>
                      <p className="fst-italic" style={{color:'#4c5267'}}>{item.content}</p>
                      <div className="mt-4">
                        <h5 className="fw-semibold mb-0">{item.name}</h5>
                        <span style={{color:'#4c5267'}}>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .custom-slider-wrapper {
          margin: 0 auto;
          padding: 0 20px;
        }

        .testimonial-slide {
          transition: transform 0.3s ease;
          opacity: 0.5;
        }

        .slick-center .testimonial-slide {
          transform: scale(1.03);
          opacity: 1;
        }

        .testimonial-widget {
          transition: box-shadow 0.3s ease;
        }

        .custom-arrow {
          z-index: 10;
          background: #fff;
          border-radius: 50%;
          padding: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          cursor: pointer;
        }

        .custom-arrow.prev {
          left: -50px;
        }

        .custom-arrow.next {
          right: -50px;
        }
      `}</style>
    </section>
  );
}
