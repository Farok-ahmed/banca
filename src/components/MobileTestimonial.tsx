'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import client1 from '@/assets/img/client/client-1.png';
import client2 from '@/assets/img/client/client-2.png';
import client3 from '@/assets/img/client/client-3.png';

const testimonials = [
  {
    name: 'Moshrarf Hossan',
    role: 'Ui / Ux Designer',
  image: client1,
    quote:
      'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything',
  },
  {
    name: 'Eh Jewel',
    role: 'Spider Themes,CEO',
  image: client2,
    quote:
      'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything',
  },
  {
    name: 'Arif Rahman',
    role: 'Junior web developer',
  image: client3,
    quote:
      'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything',
  },
  {
    name: 'Moshrarf Hossan',
    role: 'Ui / Ux Designer',
  image: client1,
    quote:
      'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything',
  },
  {
    name: 'Eh Jewel',
    role: 'Spider Themes,CEO',
  image: client2,
    quote:
      'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything',
  },
  {
    name: 'Arif Rahman',
    role: 'Junior web developer',
  image: client3,
    quote:
      'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything',
  },
  {
    name: 'Moshrarf Hossan',
    role: 'Ui / Ux Designer',
  image: client1,
    quote:
      'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything',
  },
  {
    name: 'Eh Jewel',
    role: 'Spider Themes,CEO',
  image: client2,
    quote:
      'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything',
  },
  {
    name: 'Arif Rahman',
    role: 'Junior web developer',
  image: client3,
    quote:
      'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything',
  },
];

const ClientSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="client-slider pt-45 pb-140">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index}>
            <div
              className="single-client wow fadeInUp px-6"
              data-wow-delay={`0.${(index % 9) + 1}s`}
            >
              <Image
                className="img-fluid rounded-circle"
                src={item.image}
                alt="client"
              />
              <p className="quote">{item.quote}</p>
              <div className="client-info d-flex justify-content-between align-items-center mt-3">
                <div>
                  <p>{item.name}</p>
                  <span className="role">{item.role}</span>
                </div>
                <div className="rating d-flex">
                  {[...Array(5)].map((_, i) => (
                    <Link href="#" key={i}>
                      <i className="icon_star"></i>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSlider;
