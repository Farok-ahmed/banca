'use client';

import Image from 'next/image';
import Slider from 'react-slick';

const loanData = [
  {
    title: 'Personal Loans',
    img: '/img/home-5/loan-type-1.png',
    desc: 'Our team of experts uses methodology identify the credit cards most.',
  },
  {
    title: 'Installment Loans',
    img: '/img/home-5/loan-type-2.png',
    desc: 'Our team of experts uses methodology identify the credit cards most.',
  },
  {
    title: 'Payday Loans',
    img: '/img/home-5/loan-type-3.png',
    desc: 'Our team of experts uses methodology identify the credit cards most.',
  },
  {
    title: 'Personal Loans',
    img: '/img/home-5/loan-type-1.png',
    desc: 'Our team of experts uses methodology identify the credit cards most.',
  },
  {
    title: 'Installment Loans',
    img: '/img/home-5/loan-type-2.png',
    desc: 'Our team of experts uses methodology identify the credit cards most.',
  },
];

const LoanSliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // for mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="loan-slider-area bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-blue-500 uppercase font-semibold tracking-wider text-sm">
            Loan Types
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">
            We offer a wide variety of loans
          </h1>
        </div>

        <Slider {...settings}>
          {loanData.map((loan, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-100 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <Image
                    src={loan.img}
                    alt={loan.title}
                    width={50}
                    height={50}
                  />
                </div>
                <h4 className="text-xl font-semibold mb-2">{loan.title}</h4>
                <p className="text-gray-600 text-sm">{loan.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LoanSliderSection;
