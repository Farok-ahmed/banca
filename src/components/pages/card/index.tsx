/* eslint-disable react/no-unescaped-entities */
"use client"
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/nice-select.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/components/animation";
import DefaultLayout from "@/components/Layout";
// Hero images
import hero2 from "@/assets/img/card/hero-img-2.png";
import hero3 from "@/assets/img/card/hero-img-3.png";
import hero4 from "@/assets/img/card/hero-img-4.png";
import hero5 from "@/assets/img/card/hero-img-5.png";
import hero6 from "@/assets/img/card/hero-img-6.png";
import hero7 from "@/assets/img/card/hero-img-7.png";
import hero8 from "@/assets/img/card/hero-img-8.png";
import heroCard from "@/assets/img/card/hero-card.png";
import heroImg from "@/assets/img/card/hero-img.png";
// Marketplace logos
import companyLogo1 from "@/assets/img/card/company-logo-1.png";
import companyLogo2 from "@/assets/img/card/company-logo-2.png";
import companyLogo3 from "@/assets/img/card/company-logo-3.png";
import companyLogo4 from "@/assets/img/card/company-logo-4.png";
// Feature icons (SVG)
import featureIcon11 from "@/assets/img/feature/icon-11.svg";
import featureIcon12 from "@/assets/img/feature/icon-12.svg";
import featureIcon13 from "@/assets/img/feature/icon-13.svg";
import featureIcon14 from "@/assets/img/feature/icon-14.svg";
import featureIcon15 from "@/assets/img/feature/icon-15.svg";
import featureIcon16 from "@/assets/img/feature/icon-16.svg";
// Safe deposit section
import visaPng from "@/assets/img/card/visa.png";
import mastercardPng from "@/assets/img/card/mastercard.png";
import paymentBg from "@/assets/img/card/payment-bg.png";
import creditCard from "@/assets/img/card/credit-card.png";
import onlinePayment from "@/assets/img/card/online-payment.svg";
import safebox from "@/assets/img/card/safebox.svg";
// Customize card section
import moneyTransfer from "@/assets/img/card/money-transfer.png";
import reminder from "@/assets/img/card/reminder.png";
import refresh from "@/assets/img/card/refresh.png";
import cardImgBg from "@/assets/img/card/card-img-bg.png";
import cardImage1 from "@/assets/img/card/Card-image-1.png";
import cardImage2 from "@/assets/img/card/Card-image-2.png";
import cardImage3 from "@/assets/img/card/Card-image-3.png";
// Why choose section
import layoutSvg from "@/assets/img/card/layout.svg";
import lineShape from "@/assets/img/card/line-shape.png";
import salarySvg from "@/assets/img/card/salary.svg";
import antivirusSvg from "@/assets/img/card/antivirus.svg";
// Choose card grid
import cardImage4 from "@/assets/img/card/Card-image-4.png";
import cardImage5 from "@/assets/img/card/Card-image-5.png";
import cardImage6 from "@/assets/img/card/Card-image-6.png";
import cardImage7 from "@/assets/img/card/Card-image-7.png";
import icon1 from "@/assets/img/card/icon-1.png";
import icon2 from "@/assets/img/card/icon-2.png";
import icon3 from "@/assets/img/card/icon-3.png";
// CTA shapes
import rightArrow from "@/assets/img/card/right-arrow.png";
import mailPng from "@/assets/img/card/mail.png";
import wings1 from "@/assets/img/card/wings-1.png";
import wings2 from "@/assets/img/card/wings-2.png";
import postbox from "@/assets/img/card/postbox.png";
import cloud from "@/assets/img/card/cloud.png";

const CardPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section className="banner-area-4 pt-145" id="banner_animation">
            <div className="container">
              <div className="row align-items-center pt-75 pb-60">
                <div className="col-lg-6 ">
                  <div className="banner-content mb-5 mb-sm-0">
                    <motion.h1 
                      className="wow fadeInUp mb-0"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      The credit card as it should be.
                    </motion.h1>

                    <motion.p 
                      className="wow fadeInUp  mt-20" 
                      data-wow-delay="0.2s"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      Without an annuity, it gives you cashback on all your
                      purchases and access to months without interest.
                    </motion.p>
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <Link
                        href="/contact-us"
                        className="wow fadeInUp theme-btn theme-btn-outlined_alt mt-50"
                        data-wow-delay="0.4s"
                      >
                        I want my BancaCard
                      </Link>
                    </motion.div>
                  </div>
                </div>
                <div className="col-md-6 mx-auto text-center text-sm-end">
                  <motion.div 
                    className="hero-img wow fadeInRight"
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div
                      className="shape"
                      data-parallax='{"x": -120, "y": 90, "rotateZ":0}'
                    >
                      <Image
                        data-depth="-0.06"
                        className="layer "
                        src={hero2}
                        alt="img"
                      />
                    </div>
                    <div
                      className="shape"
                      data-parallax='{"x": -70, "y": 0, "rotateZ":190}'
                    >
                      <Image src={hero3} alt="img" />
                    </div>
                    <div
                      className="shape"
                      data-parallax='{"x": -70, "y": 0, "rotateX":190}'
                    >
                      <Image src={hero4} alt="img" />
                    </div>
                    <div
                      className="shape"
                      data-parallax='{"x": -90, "y": 20, "rotateZ":0}'
                    >
                      <Image
                        data-depth="-0.05"
                        className="layer "
                        src={hero5}
                        alt="img"
                      />
                    </div>
                    <div
                      className="shape"
                      data-parallax='{"x": -250, "y": 100, "rotateY":360}'
                    >
                      <Image
                        data-depth="0.05"
                        className="layer "
                        src={hero6}
                        alt="img"
                      />
                    </div>
                    <div
                      className="shape"
                      data-parallax='{"x": 0, "y": 150, "rotateZ":0}'
                    >
                      <Image
                        data-depth="-0.09"
                        className="layer "
                        src={hero7}
                        alt="img"
                      />
                    </div>
                    <div
                      className="shape"
                      data-parallax='{"x": 0, "y": -90, "rotateZ":0}'
                    >
                      <Image src={hero8} alt="img" />
                    </div>
                    <div
                      className="shape"
                      data-parallax='{"x": 75, "y": -20, "rotateZ":0}'
                    >
                      <Image
                        data-depth="0.04"
                        className="layer "
                        src={heroCard}
                        alt="img"
                      />
                    </div>
                    <Image
                      data-parallax='{"x": 50, "y": -50, "rotateZ":0}'
                      className="person-img "
                      src={heroImg}
                      alt="card"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section className="mplace-logo bg_white pt-80 pb-85">
            <div className="container">
              <div className="row gy-lg-0 gy-4">
                <div className="col-lg-3  wow fadeInLeft pe-0 mr-60">
                  <motion.p
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    ACCEPTABLE TO MILLIONS OF CUSTOMERS WORLDWIDE AND IN TOP
                    MARKETPLACES.
                  </motion.p>
                </div>
                <div className="col-lg-8 border-start text-center pl-lg-60">
                  <div className="row gy-md-0 gy-4 align-items-center h-100">
                    <div className="col-md-3 col-6">
                      <Link href="#">
                        <motion.div
                          variants={fadeInRight}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                        >
                          <Image
                            className="img-fluid wow fadeInRight"
                            data-wow-delay="0.1s"
                            src={companyLogo1}
                            alt="logo"
                          />
                        </motion.div>
                      </Link>
                    </div>
                    <div className="col-md-3 col-6">
                      <Link href="#">
                        <motion.div
                          variants={fadeInRight}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                        >
                          <Image
                            className="img-fluid wow fadeInRight"
                            data-wow-delay="0.3s"
                            src={companyLogo2}
                            alt="logo"
                          />
                        </motion.div>
                      </Link>
                    </div>
                    <div className="col-md-3 col-6">
                      <Link href="#">
                        <motion.div
                          variants={fadeInRight}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                        >
                          <Image
                            className="img-fluid wow fadeInRight"
                            data-wow-delay="0.5s"
                            src={companyLogo3}
                            alt="logo"
                          />
                        </motion.div>
                      </Link>
                    </div>
                    <div className="col-md-3 col-6">
                      <Link href="#">
                        <motion.div
                          variants={fadeInRight}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                        >
                          <Image
                            className="img-fluid wow fadeInRight"
                            data-wow-delay="0.7s"
                            src={companyLogo4}
                            alt="logo"
                          />
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bcard-feature-area bg_disable pt-lg-125 pt-105 pb-lg-140 pb-115">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mx-auto">
                  <div className="section-title">
                    <motion.h2 
                      className="wow fadeInUp"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      Great Features Of Banca Card
                    </motion.h2>
                    <motion.p 
                      className="wow fadeInUp" 
                      data-wow-delay="0.3s"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="row mt-30 gy-4">
                <div className="col-xl-4 col-md-6">
                  <motion.div
                    className="feature-card-widget-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image src={featureIcon11} alt="icon" />
                    <h4 className="mt-30 mb-15"> Online banking</h4>
                    <p>
                      Online banking, also known as internet banking or web
                      banking, is an electronic payment system.
                    </p>
                  </motion.div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <motion.div
                    className="feature-card-widget-5 wow fadeInUp"
                    data-wow-delay="0.3s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image  src={featureIcon12} alt="icon" />
                    <h4 className="mt-30 mb-15">Up to 20.000$ limit</h4>
                    <p>
                      Online banking, also known as internet banking or web
                      banking, is an electronic payment system.
                    </p>
                  </motion.div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <motion.div
                    className="feature-card-widget-5 wow fadeInUp"
                    data-wow-delay="0.5s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image  src={featureIcon13} alt="icon" />
                    <h4 className="mt-30 mb-15">Protection & security</h4>
                    <p>
                      Online banking, also known as internet banking or web
                      banking, is an electronic payment system.
                    </p>
                  </motion.div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <motion.div
                    className="feature-card-widget-5 wow fadeInUp"
                    data-wow-delay="0.7s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image  src={featureIcon14} alt="icon" />
                    <h4 className="mt-30 mb-15">Mobile application</h4>
                    <p>
                      Online banking, also known as internet banking or web
                      banking, is an electronic payment system.
                    </p>
                  </motion.div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <motion.div
                    className="feature-card-widget-5 wow fadeInUp"
                    data-wow-delay="0.9s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image  src={featureIcon15} alt="icon" />
                    <h4 className="mt-30 mb-15">Online Shopping</h4>
                    <p>
                      Online banking, also known as internet banking or web
                      banking, is an electronic payment system.
                    </p>
                  </motion.div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <motion.div
                    className="feature-card-widget-5 wow fadeInUp"
                    data-wow-delay="1.1s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image  src={featureIcon16} alt="icon" />
                    <h4 className="mt-30 mb-15">Small payments fees</h4>
                    <p>
                      Online banking, also known as internet banking or web
                      banking, is an electronic payment system.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section className="safe-deposit-area overflow-hidden pt-lg-155 pb-lg-140 pt-125 pb-115 bg_white">
            <div className="container">
              <div className="row align-items-center gy-lg-0 gy-4">
                <div className="col-lg-6 col-md-9 mx-auto">
                  <div className="card-img">
                    <div className="logo">
                      <Image src={visaPng} alt="logo" />
                      <Image src={mastercardPng} alt="logo" />
                    </div>
                    <Image className="bg-img" src={paymentBg} alt="bg img" />
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <Image className="img-fluid wow fadeInUp" src={creditCard} alt="credit-card" />
                    </motion.div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="section-title text-start">
                    <motion.h2 
                      className="wow fadeInUp"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      Best Ways to Send Your Money From Anywhere You Like
                    </motion.h2>
                    <motion.p
                      className="border-left pl-10 wow fadeInUp"
                      data-wow-delay="0.2s"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      Banca came as a solution to the next generation. Through
                      our portal, you can sit at the comfort of your home,
                      office or pretty much anywhere, and send money to
                      anywhere! Through our strong network.
                    </motion.p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <motion.div
                        className="payment-system mt-80 wow fadeInRight"
                        data-wow-delay="0.1s"
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <Image  src={onlinePayment} alt="icon" />
                        <h5 className="mt-20 mb-10">Online Payments</h5>
                        <p>
                          We acceept many type payments getway that you love.
                        </p>
                      </motion.div>
                    </div>
                    <div className="col-md-6">
                      <motion.div
                        className="payment-system mt-65 wow fadeInRight"
                        data-wow-delay="0.3s"
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <Image src={safebox} alt="icon" />
                        <h5 className="mt-20 mb-10">Safe Deposit</h5>
                        <p>You can trust us for your deposit. No hidden fee.</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="customize-card-area pt-lg-125 pb-lg-140 pt-105 pb-115 bg_disable"
            id="card_area_animation"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 pe-lg-0">
                  <div className="section-title mb-35 text-start">
                    <motion.h2 
                      className="wow fadeInUp"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      Customize Your Payments
                    </motion.h2>
                    <motion.p 
                      className="wow fadeInUp" 
                      data-wow-delay="0.3s"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      Personalize the newly-improved Payment Options Form to
                      include all your payment methods such as, easy monthly
                      payments, credit cards
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6 order-lg-1 order-2">
                  <motion.div
                    className="feature-card-widget-6 wow fadeInUp mt-sm-0 mt-5"
                    data-wow-delay="0.1s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="icon mr-20">
                      <Image src={moneyTransfer} alt="icon" />
                    </div>
                    <div className="card-content">
                      <h6>Set daily maximum transaction limitation.</h6>
                      <p>
                        The daily, weekly, monthly and yearly limits for amount
                        of transactions and total number of transactions.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="feature-card-widget-6 wow fadeInUp mt-30"
                    data-wow-delay="0.3s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="icon mr-20">
                      <Image src={reminder} alt="icon" />
                    </div>
                    <div className="card-content">
                      <h6>Customize your next payment schedule.</h6>
                      <p>
                        The daily, weekly, monthly and yearly limits for amount
                        of transactions and total number of transactions.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="feature-card-widget-6 wow fadeInUp mt-30"
                    data-wow-delay="0.5s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="icon mr-20">
                      <Image src={refresh} alt="icon" />
                    </div>
                    <div className="card-content">
                      <h6>Get latest update about your payments.</h6>
                      <p>
                        The daily, weekly, monthly and yearly limits for amount
                        of transactions and total number of transactions.
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="col-lg-6 order-lg-2 order-1 pl-lg-50">
                  <div className="card-img mb-5 mb-sm-0">
                    <Image className="img-fluid" src={cardImgBg} alt="bg image" />
                    <div className="shape-1">
                      <Image
                        className="layer wow rotateInUpRight"
                        data-wow-delay="1.2s"
                        data-depth="0.2"
                        src={cardImage1}
                        alt="card"
                      />
                    </div>
                    <div className="shape-2">
                      <Image
                        className="layer wow rotateInUpRight"
                        data-wow-delay="0.6s"
                        data-depth="0.15"
                        src={cardImage2}
                        alt="card"
                      />
                    </div>
                    <div className="shape-3">
                      <Image
                        className="layer wow rotateInUpRight"
                        data-depth="0.3"
                        src={cardImage3}
                        alt="card"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="why-choose-area pt-125 pb-135 overflow-hidden">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mx-auto">
                  <div className="section-title">
                    <motion.h2 
                      className="wow fadeInUp"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      Why You Choose Us?
                    </motion.h2>
                    <motion.p 
                      className="wow fadeInUp" 
                      data-wow-delay="0.3s"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="row mt-55 gy-lg-0 gy-4">
                <div className="col-lg-4">
                  <motion.div
                    className="content-box pr-lg-30 pl-lg-30 wow fadeInUp"
                    data-wow-delay="0.1s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image  src={layoutSvg} alt="icon" />
                    <h4 className="mt-30 mb-15">Easy to Use</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </motion.div>
                </div>
                <div className="col-lg-4">
                  <motion.div
                    className="content-box pr-lg-30 pl-lg-30 wow fadeInUp"
                    data-wow-delay="0.3s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="line-shape">
                      <Image
                        className="wow zoomIn"
                        data-wow-delay="0.1s"
                        src={lineShape}
                        alt="shape"
                      />
                    </div>
                    <Image  src={salarySvg} alt="icon" />
                    <h4 className="mt-30 mb-15">Faster Payments</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </motion.div>
                </div>
                <div className="col-lg-4">
                  <motion.div
                    className="content-box pr-lg-30 pl-lg-30 wow fadeInUp"
                    data-wow-delay="0.5s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image  src={antivirusSvg} alt="icon" />
                    <h4 className="mt-30 mb-15">100% Secure</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-125 pb-140 choose-card-area bg_disable">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mx-auto">
                  <div className="section-title">
                    <motion.h2 
                      className="wow fadeInUp"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      Choose Card <br />
                      Considering Your Personal Needs
                    </motion.h2>
                    <motion.p 
                      className="wow fadeInUp" 
                      data-wow-delay="0.3s"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      You're considering opening a credit card to build credit.
                      If this is the case, you need to make sure that you act
                      responsibly with your card.{" "}
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="row mt-60 gy-lg-0 gy-4">
                <div className="col-lg-3 col-md-6">
                  <motion.div
                    className="credit-card-box-widget wow fadeInUp"
                    data-wow-delay="0.1s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image className="w-100" src={cardImage4} alt="card" style={{width:"auto",height:"auto"}} />
                    <div className="card-content">
                      <h4>Debit Card</h4>
                      <p>
                        <span>
                          <Image src={icon1} alt="icon" />
                        </span>
                        Max: 60 days
                      </p>
                      <p>
                        <span>
                          <Image src={icon2} alt="icon" />
                        </span>
                        Payment fee: 1%
                      </p>
                      <p>
                        <span>
                          <Image src={icon3} alt="icon" />
                        </span>
                        Max credit: $20.000
                      </p>
                      <Link href="#" className="mt-25">
                        Learn more <i className="arrow_right"></i>
                      </Link>
                    </div>
                  </motion.div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <motion.div
                    className="credit-card-box-widget wow fadeInUp"
                    data-wow-delay="0.3s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image className="w-100" src={cardImage5} style={{width:"auto",height:"auto"}} alt="card" />
                    <div className="card-content">
                      <h4>Credit Card</h4>
                      <p>
                        <span>
                          <Image src={icon1} alt="icon" />
                        </span>
                        Max: 60 days
                      </p>
                      <p>
                        <span>
                          <Image src={icon2} alt="icon" />
                        </span>
                        Payment fee: 1%
                      </p>
                      <p>
                        <span>
                          <Image src={icon3} alt="icon" />
                        </span>
                        Max credit: $20.000
                      </p>
                      <Link href="#" className="mt-25">
                        Learn more <i className="arrow_right"></i>
                      </Link>
                    </div>
                  </motion.div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <motion.div
                    className="credit-card-box-widget wow fadeInUp"
                    data-wow-delay="0.5s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image className="w-100" src={cardImage6} style={{width:"auto",height:"auto"}} alt="card" />
                    <div className="card-content">
                      <h4>MasterCard</h4>
                      <p>
                        <span>
                          <Image src={icon1} alt="icon" />
                        </span>
                        Max: 60 days
                      </p>
                      <p>
                        <span>
                          <Image src={icon2} alt="icon" />
                        </span>
                        Payment fee: 1%
                      </p>
                      <p>
                        <span>
                          <Image src={icon3} alt="icon" />
                        </span>
                        Max credit: $20.000
                      </p>
                      <Link href="#" className="mt-25">
                        Learn more <i className="arrow_right"></i>
                      </Link>
                    </div>
                  </motion.div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <motion.div
                    className="credit-card-box-widget wow fadeInUp"
                    data-wow-delay="0.7s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image className="w-100" src={cardImage7} style={{width:"auto",height:"auto"}} alt="card" />
                    <div className="card-content">
                      <h4>Visa Card</h4>
                      <p>
                        <span>
                          <Image src={icon1} alt="icon" />
                        </span>
                        Max: 60 days
                      </p>
                      <p>
                        <span>
                          <Image src={icon2} alt="icon" />
                        </span>
                        Payment fee: 1%
                      </p>
                      <p>
                        <span>
                          <Image src={icon3} alt="icon" />
                        </span>
                        Max credit: $20.000
                      </p>
                      <Link href="#" className="mt-25">
                        Learn more <i className="arrow_right"></i>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section className="cta-3 pt-90 pb-75">
            <div className="img-shapes">
              <div
                className="shape"
                data-parallax='{"x": 0, "y": 0, "rotateZ":20}'
              >
                <Image src={rightArrow} alt="img" />
              </div>

              <div
                className="shape"
                data-parallax='{"x": 200, "y": 90, "rotateZ":0}'
              >
                <div className="fly-msg">
                  <Image src={mailPng} alt="" />
                  <Image src={wings1} alt="" />
                  <Image src={wings2} alt="" />
                </div>
              </div>
              <div
                className="shape"
                data-parallax='{"x": 0, "y": 0, "rotateZ":-6}'
              >
                <motion.div
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Image className="wow fadeInRight" src={postbox} alt="img" />
                </motion.div>
              </div>
              <div
                className="shape"
                data-parallax='{"x": -200, "y": 0, "rotateZ":0}'
              >
                <Image src={cloud} alt="img" />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <motion.div 
                    className="cta-content text-black wow fadeInLeft"
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <h5>Want to know about our offers first?</h5>
                    <h2>Subscribe our newsletter</h2>

                    <div className="input-group mt-40">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your  email address"
                      />
                      <Link
                        href="#"
                        className="input-append theme-btn theme-btn-lg"
                        style={{ backgroundColor: "#171d24", color: "#fff" }}
                      >
                        Subscribe
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </DefaultLayout>
    </>
  );
};

export default CardPage;
