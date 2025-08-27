"use client";
import React from "react";
import { Testimonial } from "@/types/Testimonial";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import "@/styles/css/testimonial.css";
import Image from "next/image";
import clientRev1 from "@/assets/img/home-4/client-rev-1.png";
import clientRev2 from "@/assets/img/home-4/client-rev-2.png";
import clientRev3 from "@/assets/img/home-4/client-rev-3.png";
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: clientRev1,
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
    delay: "0.1s",
  },
  {
    id: 2,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: clientRev2,
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
    delay: "0.3s",
  },
  {
    id: 3,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: clientRev3,
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
    delay: "0.5s",
  },
  {
    id: 4,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: clientRev1,
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
  },
  {
    id: 5,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: clientRev2,
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
  },
  {
    id: 6,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: clientRev3,
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
  },
  {
    id: 7,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: clientRev1,
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
  },
  {
    id: 8,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: clientRev2,
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
  },
  {
    id: 9,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: clientRev3,
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
  },
];
const HomeTestimonials = () => {
  // Next arrow component
  const NextArrow: React.FC<CustomArrowProps> = (props) => {
    const { onClick } = props; // ignore currentSlide / slideCount
    return (
      <button onClick={onClick} type="button" className="slick-prev slick-arrow " style={{}}>
        <i className="arrow_left icon-focus" />
      </button>
    );
  };

  // Prev arrow component
  const PrevArrow: React.FC<CustomArrowProps> = (props) => {
    const { onClick } = props;
    return (
     <button onClick={onClick} type="button" className="slick-next slick-arrow" style={{}}>
        <i className="arrow_right icon-focus" />
      </button>
    );
  };
  const settings: Settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    customPaging: () => (
      <button
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
        }}
      ></button>
    ),
    appendDots: (dots: React.ReactNode) => (
      <ul style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {dots}
      </ul>
    ),
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
    <>
      <section className="client-slider-2 pt-60 pb-60">
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
                data-wow-delay={testimonial.delay || "0.1s"}
              >
                <div className="single-client wow fadeInUp slick-slide slick-active">
                  <div className="rating mb-2 text-warning">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i className="bi bi-star-fill me-1" key={i}></i>
                    ))}
                  </div>
                  <p className="quote mb-4">{testimonial.quote}</p>
                  <div className="client-info d-flex align-items-center gap-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle"
                    />
                    <div>
                      <p className="fw-semibold mb-0">{testimonial.name}</p>
                      <span className="small">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HomeTestimonials;
