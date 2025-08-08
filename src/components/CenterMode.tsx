'use client';

import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <button
      type="button"
      className="slick-next slick-arrow"
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="arrow_carrot-right"></i>
    </button>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <button
      type="button"
      className="slick-prev slick-arrow"
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="arrow_carrot-left"></i>
    </button>
  );
}

const testimonials = [
  {
    img: '/img/testimonial/img-2.png',
    video: 'https://www.youtube.com/watch?v=xcJtL7QggTI',
    heading: 'Making dreams a reality!',
    content:
      'We were looking for a home of happiness and peace. Thanks to the Grihashakti team, who helped us to realise this dream of ours. Our home has been very lucky for us – as we shifted to our new home, prosperity followed!',
    name: 'Maxwell Wood',
    location: 'New York, US',
  },
  {
    img: '/img/testimonial/img-1.png',
    video: 'https://www.youtube.com/watch?v=xcJtL7QggTI',
    heading: 'Making dreams a reality!',
    content:
      'We were looking for a home of happiness and peace. Thanks to the Grihashakti team, who helped us to realise this dream of ours. Our home has been very lucky for us – as we shifted to our new home, prosperity followed!',
    name: 'Maxwell Wood',
    location: 'New York, US',
  },
  {
    img: '/img/testimonial/img-2.png',
    video: 'https://www.youtube.com/watch?v=xcJtL7QggTI',
    heading: 'Making dreams a reality!',
    content:
      'We were looking for a home of happiness and peace. Thanks to the Grihashakti team, who helped us to realise this dream of ours. Our home has been very lucky for us – as we shifted to our new home, prosperity followed!',
    name: 'Maxwell Wood',
    location: 'New York, US',
  },
  {
    img: '/img/testimonial/img-1.png',
    video: 'https://www.youtube.com/watch?v=xcJtL7QggTI',
    heading: 'Making dreams a reality!',
    content:
      'We were looking for a home of happiness and peace. Thanks to the Grihashakti team, who helped us to realise this dream of ours. Our home has been very lucky for us – as we shifted to our new home, prosperity followed!',
    name: 'Maxwell Wood',
    location: 'New York, US',
  },
];

export default function TestimonialSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: '400px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerMode: true,
          centerPadding: '100px',
          slidesToShow: 1,
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

  return (
    <section className="pt-140 pb-140 testimonial-area bg_disable"> 
  <div className="container-fluid px-0">
    <div className="testimonial-slider slick-slider">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="single-slider px-0">
            <div className="testimonial-widget">
              <div className="row">
                <div className="col-4">
                  <div className="author-img">
                    <Image
                      src={item.img}
                      alt="image"
                      width={400}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-8 d-flex align-items-center">
                  <div className="testimonial-content">
                    <div className="watch-button">
                      <Link href={item.video} target="_blank">
                        <i className="fa fa-play"></i> watch the video
                      </Link>
                    </div>
                    <h2>{item.heading}</h2>
                    <p className="pr-lg-60">{item.content}</p>
                    <div className="author-info">
                      <h4>{item.name}</h4>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>

  );
}
