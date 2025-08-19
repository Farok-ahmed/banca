'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import news1 from '@/assets/img/blog/news-1.png';
import news2 from '@/assets/img/blog/news-2.png';
import news3 from '@/assets/img/blog/news-3.png';

const NewsSlider = () => {
  const newsData = [
    {
      title: 'What credit limit should I request?',
      image: news1,
      desc: 'You can apply for a credit card online, over the phone, by mail or in person. Applying online is the best, most...',
    },
    {
      title: 'Which bank account should I open',
      image: news2,
      desc: 'You can apply for a credit card online, over the phone, by mail or in person. Applying online is the best, most...',
    },
    {
      title: 'Banking Basics: get to know your bank account',
      image: news3,
      desc: 'You can apply for a credit card online, over the phone, by mail or in person. Applying online is the best, most...',
    },
    {
      title: 'What credit limit should I request?',
      image: news1,
      desc: 'You can apply for a credit card online, over the phone, by mail or in person. Applying online is the best, most...',
    },
    {
      title: 'Which bank account should I open',
      image: news2,
      desc: 'You can apply for a credit card online, over the phone, by mail or in person. Applying online is the best, most...',
    },
    {
      title: 'Banking Basics: get to know your bank account',
      image: news3,
      desc: 'You can apply for a credit card online, over the phone, by mail or in person. Applying online is the best, most...',
    },
    {
      title: 'What credit limit should I request?',
      image: news1,
      desc: 'You can apply for a credit card online, over the phone, by mail or in person. Applying online is the best, most...',
    },
    {
      title: 'Which bank account should I open',
      image: news2,
      desc: 'You can apply for a credit card online, over the phone, by mail or in person. Applying online is the best, most...',
    },
    {
      title: 'Banking Basics: get to know your bank account',
      image: news3,
      desc: 'You can apply for a credit card online, over the phone, by mail or in person. Applying online is the best, most...',
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <section className="news-area pt-200 pb-110">
      <div className="container">
        <div className="section-title pt-30">
          <h2 className="wow fadeInUp">Banca Latest News</h2>
        </div>

        <div className="news-slider pt-30">
          <Slider {...settings}>
            {newsData.map((item, index) => (
              <div key={index}>

              <div className="blog-widget-1" >
                <Image
                  className="w-sm-auto w-100"
                  src={item.image}
                  alt="news image"
                  style={{width:"auto",height:"auto"}}
                />
                <div className="blog-content pr-20 pl-20 mt-3">
                  <h4>
                    <Link href="#">{item.title}</Link>
                  </h4>
                  <p>{item.desc}</p>
                  <Link className="read-more" href="#">
                    Read More <i className="arrow_right"></i>
                  </Link>
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

export default NewsSlider;
