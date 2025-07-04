'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
  delay?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Gerry Kellmen',
    role: 'Ui / Ux Designer',
    image: '/img/home-4/client-rev-1.png',
    rating: 5,
    quote:
      'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything',
    delay: '0.1s',
  },
  {
    id: 2,
    name: 'Gerry Kellmen',
    role: 'Ui / Ux Designer',
    image: '/img/home-4/client-rev-2.png',
    rating: 5,
    quote:
      'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything',
    delay: '0.3s',
  },
  {
    id: 3,
    name: 'Gerry Kellmen',
    role: 'Ui / Ux Designer',
    image: '/img/home-4/client-rev-3.png',
    rating: 5,
    quote:
      'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything',
    delay: '0.5s',
  },
  {
    id: 4,
    name: 'Gerry Kellmen',
    role: 'Ui / Ux Designer',
    image: '/img/home-4/client-rev-1.png',
    rating: 5,
    quote:
      'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything',
  },
  {
    id: 5,
    name: 'Gerry Kellmen',
    role: 'Ui / Ux Designer',
    image: '/img/home-4/client-rev-2.png',
    rating: 5,
    quote:
      'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything',
  },
  {
    id: 6,
    name: 'Gerry Kellmen',
    role: 'Ui / Ux Designer',
    image: '/img/home-4/client-rev-3.png',
    rating: 5,
    quote:
      'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything',
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="client-area-2 pt-60 pb-60">
      <div className="container">
        <div className="section-title text-center mb-5">
          <span className="short-title-2">_Testimonials</span>
          <h1 className="mb-3">
            Customer <span className="underline-shape">feedbacks</span>
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration in some form,
          </p>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              className="px-3"
              key={testimonial.id}
              data-wow-delay={testimonial.delay || '0.1s'}
            >
              <div className="single-client p-4 border rounded shadow-sm h-100">
                <div className="rating mb-2 text-warning">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i className="bi bi-star-fill me-1" key={i}></i>
                  ))}
                </div>
                <p className="quote mb-4 text-muted">{testimonial.quote}</p>
                <div className="client-info d-flex align-items-center gap-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-circle"
                  />
                  <div>
                    <p className="fw-semibold mb-0">{testimonial.name}</p>
                    <span className="text-muted small">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
