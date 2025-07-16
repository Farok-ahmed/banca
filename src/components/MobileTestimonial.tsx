'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientSlider = () => {
  const clients = [
    {
      name: 'Moshrarf Hossan',
      role: 'UI/UX Designer',
      image: '/img/client/client-1.png',
      description:'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything.'
    },
    {
      name: 'Eh Jewel',
      role: 'Spider Themes, CEO',
      image: '/img/client/client-2.png',
      description:'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything.'
    },
    {
      name: 'Arif Rahman',
      role: 'Junior Web Developer',
      image: '/img/client/client-3.png',
      description:'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything.'
    },
    {
      name: 'Moshrarf Hossan',
      role: 'UI/UX Designer',
      image: '/img/client/client-1.png',
      description:'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything.'
    },
    {
      name: 'Eh Jewel',
      role: 'Spider Themes, CEO',
      image: '/img/client/client-2.png',
      description:'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything.'
    },
    {
      name: 'Arif Rahman',
      role: 'Junior Web Developer',
      image: '/img/client/client-3.png',
      description:'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything.'
    },
    {
      name: 'Moshrarf Hossan',
      role: 'UI/UX Designer',
      image: '/img/client/client-1.png',
      description:'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything.'
    },
    {
      name: 'Eh Jewel',
      role: 'Spider Themes, CEO',
      image: '/img/client/client-2.png',
      description:'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything.'
    },
    {
      name: 'Arif Rahman',
      role: 'Junior Web Developer',
      image: '/img/client/client-3.png',
      description:'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything.'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="client-area pt-110">
      <div className="container">
        <div className="section-title">
          <h1 className="wow fadeInUp mb-0">What Our Client Say</h1>
        </div>

        <div className="client-slider pt-45 pb-140">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index}>

              <div className="single-client px-3" >
                <Image
                  width={200}
                  height={200}
                  className="img-fluid rounded-circle"
                  src={client.image}
                  alt="client"
                />
                <p className="quote mt-3">
                  {client.description}
                </p>
                <div className="client-info d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 fw-bold">{client.name}</p>
                    <span className="role">{client.role}</span>
                  </div>
                  <div className="rating">
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
      </div>
    </section>
  );
};

export default ClientSlider;
