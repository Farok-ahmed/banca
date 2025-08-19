"use client";
// import Slider, { CustomArrowProps } from "react-slick";
import Slider, { CustomArrowProps } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import testiImg1 from '@/assets/img/testimonial/img-1.png';
import testiImg2 from '@/assets/img/testimonial/img-2.png';

const testimonials = [
  {
    img: testiImg2,
    video: "https://www.youtube.com/watch?v=xcJtL7QggTI",
    title: "Making dreams a reality!",
    text: "We were looking for a home of happiness and peace. Thanks to the Grihashakti team, who helped us to realise this dream of ours. Our home has been very lucky for us – as we shifted to our new home, prosperity followed!",
    author: "Maxwell Wood",
    location: "New York, US",
  },
  {
    img: testiImg1,
    video: "https://www.youtube.com/watch?v=xcJtL7QggTI",
    title: "Making dreams a reality!",
    text: "We were looking for a home of happiness and peace. Thanks to the Grihashakti team, who helped us to realise this dream of ours. Our home has been very lucky for us – as we shifted to our new home, prosperity followed!",
    author: "Maxwell Wood",
    location: "New York, US",
  },
  // Add more items if needed...
];
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

export default function TestimonialSlider() {
  const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  centerMode: true,
  centerPadding: "300px", // space to show next/prev slides
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
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
        <Slider {...settings} className='testimonial-slider-3'>
          {testimonials.map((item, index) => (
            <div className="single-slider container px-0" key={index}>
              <div className="testimonial-widget">
                <div className="row">
                  <div className="col-4">
                    <div className="author-img">
                      <Image src={item.img} alt="image" />
                    </div>
                  </div>
                  <div className="col-8 d-flex align-items-center">
                    <div className="testimonial-content">
                      <div className="watch-button">
                        <a data-fancybox href={item.video}>
                          <i className="fa fa-play"></i> watch the video
                        </a>
                      </div>
                      <h2>{item.title}</h2>
                      <p className="pr-lg-60">{item.text}</p>
                      <div className="author-info">
                        <h4>{item.author}</h4>
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
    </section>
  );
}
