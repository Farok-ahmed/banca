"use client";
import Image from "next/image";
import Link from "next/link";
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "nouislider/dist/nouislider.css";
import "@/styles/css/jquery.fancybox.min.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";

import LoanSlider from "@/components/LoanSlider";
import IndexCalculator from "@/components/IndexCalculator";
import DefaultLayout from "@/components/Layout";
import { SubmitButton } from "./FormButton";
import { handleSubmit } from "./handleSubmit";
// Assets
import bannerImg1 from "@/assets/img/home-5/banner-img-1.png";
import bannerImg2 from "@/assets/img/home-5/banner-img-2.png";
import bannerImg3 from "@/assets/img/home-5/banner-img-3.png";
import bannerShape from "@/assets/img/home-5/banner-shape.png";
import featureIcon1 from "@/assets/img/home-5/feature-icon-1.svg";
import featureIcon2 from "@/assets/img/home-5/feature-icon-2.svg";
import featureIcon3 from "@/assets/img/home-5/feature-icon-3.svg";
import featureIcon4 from "@/assets/img/home-5/feature-icon-4.svg";
import featureIcon5 from "@/assets/img/home-5/feature-icon-5.svg";
import featureIcon6 from "@/assets/img/home-5/feature-icon-6.svg";
import featureIcon7 from "@/assets/img/home-5/feature-icon-7.svg";
import aboutArrow1 from "@/assets/img/home-5/about-arrow-1.png";
import aboutArrow2 from "@/assets/img/home-5/about-arrow-2.png";
import msg1 from "@/assets/img/home-5/msg-1.png";
import msg2 from "@/assets/img/home-5/msg-2.png";
import msg3 from "@/assets/img/home-5/msg-3.png";
import cardHolder from "@/assets/img/home-5/card-holder.png";
import bankBalance from "@/assets/img/home-5/bank-balance.png";
import aboutUsImg from "@/assets/img/home-5/about-us-img.png";
import country1 from "@/assets/img/home-5/country-1.png";
import country2 from "@/assets/img/home-5/country-2.png";
import country3 from "@/assets/img/home-5/country-3.png";
import country4 from "@/assets/img/home-5/country-4.png";
import country5 from "@/assets/img/home-5/country-5.png";
import country6 from "@/assets/img/home-5/country-6.png";
import { motion } from "framer-motion";
import { fadeInRight, fadeInLeft, fadeInUp } from "@/components/animation";

const CompanyPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section className="banner-area-6">
            <div className="container">
              <div className="row ">
                <div className="col-lg-7">
                  <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="banner-content wow fadeInRight"
                    data-wow-delay="0.2s"
                  >
                    <h1>Simplify all your banking and loan methods.</h1>
                    <p>
                      Our team of experts uses a methodology to identify the
                      credit cards most.
                    </p>
                    <div className="d-flex flex-column flex-sm-row mt-25 subscribe-field">
                      <input
                        type="email"
                        className="form-control me-sm-1"
                        placeholder="Enter Email address"
                      />
                      <Link
                        href="#"
                        className="input-append theme-btn theme-btn-lg ms-sm-2"
                      >
                        Get Started
                      </Link>
                    </div>
                    <ul className="list-unstyled feature-list">
                      <li>
                        <i className="fas fa-check-circle"></i> Get 30 day free
                        trial
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> No Spamming
                      </li>
                    </ul>
                  </motion.div>
                </div>
                <div className="col-lg-5 text-center text-lg-start">
                  <div className="banner-img">
                    <motion.div
                      variants={fadeInLeft}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      <Image className="img-1" src={bannerImg1} alt="" />
                    </motion.div>
                    <motion.div
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInRight"
                      data-wow-delay="0.8s"
                    >
                      <Image className="img-2" src={bannerImg2} alt="" />
                    </motion.div>
                    <motion.div
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInRight"
                      data-wow-delay="1.1s"
                    >
                      <Image className="img-3" src={bannerImg3} alt="" />
                    </motion.div>
                    <Image className="img-shape" src={bannerShape} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="banner-fact">
            <div className="container">
              <div className="row gy-lg-0 gy-4">
                <motion.div
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-lg-4 col-md-6 wow fadeInRight"
                  data-wow-delay="0.1s"
                >
                  <div className="single-fact">
                    <div className="icon">
                      <i className="fas fa-globe"></i>
                    </div>
                    <p>A global customer base from over 120 countries</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-lg-4 col-md-6 wow fadeInRight"
                  data-wow-delay="0.4s"
                >
                  <div className="single-fact">
                    <div className="icon">
                      <i className="fas fa-user"></i>
                    </div>
                    <p>Almost over 250 thousand active users</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-lg-4 col-md-6 wow fadeInRight mx-auto"
                  data-wow-delay="0.7s"
                >
                  <div className="single-fact">
                    <div className="icon">
                      <i className="fas fa-briefcase"></i>
                    </div>
                    <p>10 years worth of experience as a industry expert</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <section className="pt-115 pb-105 feature-area-3">
            <div className="container">
              <div className="section-title">
                <span className="short-title-2">OUR Features</span>
                <motion.h1
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="wow fadeInUp"
                >
                  We have better and more feature
                </motion.h1>
              </div>
              <div className="row gy-4 mt-50">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-9 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <Image src={featureIcon1} alt="" />
                    <h5>Fast Mobility</h5>
                    <p>Quis dapibus volutpat condi</p>
                  </motion.div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-9 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <Image src={featureIcon2} alt="" />
                    <h5>Term Loan</h5>
                    <p>Quis dapibus volutpat condi</p>
                  </motion.div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-9 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <Image src={featureIcon3} alt="" />
                    <h5>Easy Experience</h5>
                    <p>Quis dapibus volutpat condi</p>
                  </motion.div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-9 wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <Image src={featureIcon4} alt="" />
                    <h5>Safe and protected</h5>
                    <p>Quis dapibus volutpat condi</p>
                  </motion.div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-9 wow fadeInUp"
                    data-wow-delay="0.9s"
                  >
                    <Image src={featureIcon5} alt="" />
                    <h5>Wordwide</h5>
                    <p>Quis dapibus volutpat condi</p>
                  </motion.div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-9 wow fadeInUp"
                    data-wow-delay="1.1s"
                  >
                    <Image src={featureIcon6} alt="" />
                    <h5>One term fees</h5>
                    <p>Quis dapibus volutpat condi</p>
                  </motion.div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-9 wow fadeInUp"
                    data-wow-delay="1.3s"
                  >
                    <Image src={featureIcon7} alt="" />
                    <h5>Merchant Payment</h5>
                    <p>Quis dapibus volutpat condi</p>
                  </motion.div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-9 wow fadeInUp widget-link"
                    data-wow-delay="1.7s"
                  >
                    <h1>10+</h1>
                    <Link href="#">
                      More features <i className="arrow_right "></i>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section className="about-area-2 bg-white">
            <div className="container">
              <div className="row align-items-center">
                <motion.div
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-lg-6 wow fadeInLeft"
                >
                  <div className="text-start">
                    <h1 className="mb-3">Get loan from 3 simple process</h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form,
                    </p>
                    <ul className="list-unstyled feature-list">
                      <li>
                        {" "}
                        <i className="fas fa-check-circle"></i>It is a long
                        established fact that a reader will be{" "}
                      </li>
                      <li>
                        {" "}
                        <i className="fas fa-check-circle"></i> It is a long
                        established fact distracted by the readable
                      </li>
                    </ul>
                    <Link href="/loan" className="read-more-btn">
                      <span>Learn about the process</span>
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-lg-6 wow fadeInRight"
                >
                  <div className="sms-flow">
                    <Image className="arrow-1" src={aboutArrow1} alt="" />
                    <Image className="arrow-2" src={aboutArrow2} alt="" />
                    <Image
                      className="msg-1 wow fadeInUp"
                      data-wow-delay="0.1s"
                      src={msg1}
                      alt=""
                    />
                    <Image className="msg-2" src={msg2} alt="" />
                    <Image
                      className="msg-3 wow fadeInDown"
                      data-wow-delay="0.3s"
                      src={msg3}
                      alt=""
                    />
                  </div>
                </motion.div>
              </div>

              <div className="row align-items-center gy-4 mt-3">
                <div className="col-lg-6 order-2 order-lg-1">
                  <div className="card-holder">
                    <div className="shape-1"></div>
                    <div className="shape-2"></div>
                    <Image
                      className="img-1 img-fluid"
                      src={cardHolder}
                      alt=""
                    />
                    <motion.div
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInRight"
                      data-wow-delay="0.2s"
                    >
                      <Image className="img-2" src={bankBalance} alt="" />
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-lg-6 order-lg-2 order-1 wow fadeInRight"
                >
                  <h1 className="mb-3">
                    We have reputable customer relatinships
                  </h1>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which do not
                    look even slightly .{" "}
                  </p>

                  <div className="customer-num">
                    <div>
                      <h1>50</h1>
                      <span>
                        Parters <br />
                        Included
                      </span>
                    </div>
                    <div>
                      <h1>1M</h1>
                      <span>
                        Total <br />
                        Attendies
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="calculator-area-2">
            <div className="container">
              <div className="section-title">
                <span className="short-title-2">Loan calculator</span>
                <motion.h1
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="wow fadeInUp text-white"
                >
                  Calculate and confirm your loans
                </motion.h1>
              </div>

              <IndexCalculator />
            </div>
          </section>

          <LoanSlider />

          <section className="about-area-3 bg-white pb-lg-120 pb-60">
            <div className="container">
              <div className="section-title">
                <span className="short-title-2">ABout us</span>
                <motion.h1
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="wow fadeInUp"
                >
                  Learn about how Banca works
                </motion.h1>
              </div>
              <div className="row align-items-center pt-60 gy-lg-0 gy-4">
                <motion.div
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-lg-6 wow fadeInRight"
                  data-wow-delay="0.1s"
                >
                  <div>
                    <h5>
                      <span className="round-dot"></span> <span>1.5M</span>{" "}
                      Active Customers
                    </h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have.
                    </p>
                  </div>
                  <div className="mt-40">
                    <h5>
                      <span className="round-dot"></span> <span>30k</span>{" "}
                      Business Partners
                    </h5>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-lg-6 wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <div className="video-tut">
                    <Image
                      src={aboutUsImg}
                      alt=""
                      style={{ width: "auto", height: "auto" }}
                    />
                    <Link
                      className="play-btn"
                      data-fancybox=""
                      href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                      tabIndex={0}
                    >
                      <i className="fas fa-play"></i>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="coverage-area">
            <div className="container">
              <div className="section-title">
                <span className="short-title-2">ABout us</span>
                <motion.h1
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="wow fadeInUp"
                >
                  Learn about how Banca works
                </motion.h1>
              </div>
              <div className="row mt-50 gy-xl-0 gy-4 text-center">
                <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
                  <motion.a
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    href="#"
                    className="country-widget wow fadeInLeft"
                    data-wow-delay="0.1s"
                  >
                    <Image src={country1} alt="country" />
                    <h5>Brazil</h5>
                  </motion.a>
                </div>
                <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
                  <motion.a
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    href="#"
                    className="country-widget wow fadeInLeft"
                    data-wow-delay="0.3s"
                  >
                    <Image src={country2} alt="country" />
                    <h5>Canada</h5>
                  </motion.a>
                </div>
                <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
                  <motion.a
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    href="#"
                    className="country-widget wow fadeInLeft"
                    data-wow-delay="0.5s"
                  >
                    <Image src={country3} alt="country" />
                    <h5>Australia</h5>
                  </motion.a>
                </div>
                <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
                  <motion.a
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    href="#"
                    className="country-widget wow fadeInLeft"
                    data-wow-delay="0.7s"
                  >
                    <Image src={country4} alt="country" />
                    <h5>USA</h5>
                  </motion.a>
                </div>
                <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
                  <motion.a
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    href="#"
                    className="country-widget wow fadeInLeft"
                    data-wow-delay="0.9s"
                  >
                    <Image src={country5} alt="country" />
                    <h5>South Korea</h5>
                  </motion.a>
                </div>

                <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
                  <motion.a
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    href="#"
                    className="country-widget wow fadeInLeft"
                    data-wow-delay="1.1s"
                  >
                    <Image src={country6} alt="country" />
                    <h5>Bangladesh</h5>
                  </motion.a>
                </div>
              </div>
            </div>
          </section>
          <section className="get-touch-area-2">
            <div className="container">
              <div className="row align-items-center gy-md-0 gy-4">
                <div className="col-md-6">
                  <h1>Get your own personal consultation</h1>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form,
                  </p>
                  <div className="consult-num">
                    <div>
                      <h1>1M+</h1>
                      <p>Total Customers</p>
                    </div>
                    <div>
                      <h1>40+</h1>
                      <p>Financial Consultants</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="touch-form">
                    <h3>Get in touch</h3>
                    <form action={handleSubmit}>
                      <input
                        className="form-control"
                        type="text"
                        name="fullName"
                        placeholder="Enter full name"
                        required
                      />
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        required
                      />
                      <SubmitButton>Subscribe</SubmitButton>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </DefaultLayout>
    </>
  );
};

export default CompanyPage;
