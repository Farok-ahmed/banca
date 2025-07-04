'use client';

import Image from 'next/image';
import React from 'react';

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
  return (
    <section className="client-area-2 pt-60 pb-60">
      <div className="container">
        <div className="section-title text-center mb-5">
          <span className="short-title-2">_Testimonials</span>
          <h1 className="wow fadeInUp mb-3">
            Customer <span className="underline-shape">feedbacks</span>
          </h1>
          <p className="wow fadeInUp" data-wow-delay="0.1s">
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration in some form,
          </p>
        </div>

        <div className="client-slider-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              className="single-client wow fadeInUp p-4 border rounded shadow-sm"
              key={testimonial.id}
              data-wow-delay={testimonial.delay || '0.1s'}
            >
              <div className="rating mb-2 text-yellow-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i className="icon_star" key={i}></i>
                ))}
              </div>
              <p className="quote mb-4 text-sm text-gray-600">{testimonial.quote}</p>
              <div className="client-info flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold mb-0">{testimonial.name}</p>
                  <span className="role text-xs text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
