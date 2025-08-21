"use client"
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/css/nice-select.css";
import "nouislider/dist/nouislider.css";
import "@/styles/css/jquery.fancybox.min.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";

import { motion } from "framer-motion";
import { fadeInRight, fadeInUp } from "@/components/animation";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/components/Layout";
import LoanCalculator from "@/components/LoanCalculator";
// Images (static imports)
import wavePng from "@/assets/img/bank/wave.png";
import activeUser1 from "@/assets/img/bank/active-user1.jpg";
import activeUser2 from "@/assets/img/bank/active-user2.jpg";
import activeUser3 from "@/assets/img/bank/active-user3.jpg";
import card3 from "@/assets/img/bank/card-3.png";
import card2 from "@/assets/img/bank/card-2.png";
import card1 from "@/assets/img/bank/card-1.png";
import linePng from "@/assets/img/bank/line.png";
import star2 from "@/assets/img/bank/Star-2.png";
import star3 from "@/assets/img/bank/Star-3.png";
import star4 from "@/assets/img/bank/Star-4.png";
import singleIcon from "@/assets/img/bank/single-icon.png";
import worldIcon from "@/assets/img/bank/world-icon.png";
import sheldIcon from "@/assets/img/bank/sheld-icon.png";
import mobilePng from "@/assets/img/bank/mobile.png";
import slack from "@/assets/img/bank/slack.png";
import dropbox from "@/assets/img/bank/dropbox.png";
import googleDrive from "@/assets/img/bank/google_drive.png";
import jira from "@/assets/img/bank/jira.png";
import zendesk from "@/assets/img/bank/zendesk.png";
import mailchimp from "@/assets/img/bank/mailchimp.png";
import mapPng from "@/assets/img/bank/map.png";
import flag1 from "@/assets/img/bank/flag-1.png";
import flag2 from "@/assets/img/bank/flag-2.png";
import flag3 from "@/assets/img/bank/flag-3.png";
import flag4 from "@/assets/img/bank/flag-4.png";
import flag5 from "@/assets/img/bank/flag-5.png";
import flag6 from "@/assets/img/bank/flag-6.png";
import flag7 from "@/assets/img/bank/flag-7.png";
import flag8 from "@/assets/img/bank/flag-8.png";
import cLogo1 from "@/assets/img/saas-app/c_logo_1.png";
import cLogo2 from "@/assets/img/saas-app/c_logo_2.png";
import cLogo3 from "@/assets/img/saas-app/c_logo_3.png";
import cLogo4 from "@/assets/img/saas-app/c_logo_4.png";
import cLogo5 from "@/assets/img/saas-app/c_logo_5.png";
import mobileTwo from "@/assets/img/bank/mobile-two.png";
import CardArea from "./CardArea";

const SmallBankPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section className="bank-banner-area">
            <Image className="wave_img" src={wavePng} alt="" />
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="bank-banner-content">
                    <motion.h5
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      Manage your Finance
                    </motion.h5>
                    <motion.h1
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      Your <span className="underline-shape">banking</span> made
                      easier.
                    </motion.h1>
                    <motion.p
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      Inventore veritatis et architecto beatae vitaie dicta
                      explicab nemo ipsam volupetateme voluptashte aspernatur.
                    </motion.p>
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="d-flex flex-column flex-sm-row mt-25 subscribe-field wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <input
                        type="email"
                        className="form-control me-sm-1"
                        placeholder="Enter Email address"
                      />
                      <button className="input-append theme-btn theme-btn-lg ms-sm-2">
                        Subscribe
                      </button>
                    </motion.div>
                    <motion.ul
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="list-unstyled feature-list wow fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      <li>
                        <i className="fas fa-check-circle"></i> Get 30 day free
                        trial
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> No Spamming
                      </li>
                    </motion.ul>
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="active-user d-flex align-items-center wow fadeInUp"
                      data-wow-delay="0.8s"
                    >
                      <div className="user-img-inner">
                        <Image src={activeUser1} alt="" />
                        <Image src={activeUser2} alt="" />
                        <Image src={activeUser3} alt="" />
                      </div>
                      5K+ ⭐ Active users
                    </motion.div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bank-card-img">
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="bank-card wow fadeInUp"
                      data-wow-delay="0.8s"
                    >
                      <Image
                        data-parallax='{"x": 0, "y": 90}'
                        src={card3}
                        alt=""
                        style={{width:"auto",height:"auto"}}
                      />
                    </motion.div>
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="bank-card wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <Image
                        data-parallax='{"x": 0, "y": 50}'
                        src={card2}
                        alt=""
                        style={{width:"auto",height:"auto"}}
                      />
                    </motion.div>
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="bank-card wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <Image src={card1} alt="" style={{width:"auto",height:"auto"}} />
                    </motion.div>
                    <Image className="shap one" src={linePng} alt="" />
                    <Image
                      data-parallax='{"x": 0, "y": 50, "rotateZ": 305}'
                      className="shap two"
                      src={star2}
                      alt=""
                    />
                    <Image
                      data-parallax='{"x": 0, "y": 0, "rotateZ": 305}'
                      className="shap three"
                      src={star3}
                      alt=""
                    />
                    <Image
                      data-parallax='{"x":20, "y": 0, "rotateZ": 305}'
                      className="shap four"
                      src={star4}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bank-fact-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="fact-item wow fadeInUp"
                  >
                    <div className="icon">
                      <Image src={singleIcon} alt="" />
                    </div>
                    <h3>Single term fees</h3>
                    <p>
                      Realtime problem solving is not just about time, it is
                      about time this allows you to solve within a specified
                      time problem than you would.
                    </p>
                  </motion.div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="fact-item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon">
                      <Image src={worldIcon} alt="" />
                    </div>
                    <h3>Worldwide Locations</h3>
                    <p>
                      Realtime problem solving is not just about time, it is
                      about time this allows you to solve within a specified
                      time problem than you would.
                    </p>
                  </motion.div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="fact-item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon">
                      <Image src={sheldIcon} alt="" />
                    </div>
                    <h3>Safe and protected</h3>
                    <p>
                      Realtime problem solving is not just about time, it is
                      about time this allows you to solve within a specified
                      time problem than you would.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section className="process-area bg-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="section-title bank-section-title text-start">
                    <motion.span
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="short-title-2 wow fadeInUp"
                    >
                      OUR PROCESS
                    </motion.span>
                    <motion.h1
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                    >
                      Get loan from 4 simple{" "}
                      <span className="underline-shape">process</span>
                    </motion.h1>
                    <motion.p
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      Choose your training and register for free. If you are a
                      freelancer, the courses are entirely taken care of you
                      have nothing to pay and no money to advance.
                    </motion.p>
                    <motion.a
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="read-more wow fadeInUp"
                      data-wow-delay="0.3s"
                      href="#"
                    >
                      Learn more about it <i className="arrow_right"></i>
                    </motion.a>
                  </div>
                </div>
                <div className="col-lg-7 ps-lg-5">
                  <div className="row">
                    <div className="col-md-6">
                      <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <h2 className="number">01</h2>
                        <h4>Check Eligibility</h4>
                        <p>
                          Choose your training and register for free if you are
                          a freelancer the courses are entirely taken care.
                        </p>
                      </motion.div>
                    </div>
                    <div className="col-md-6">
                      <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <h2 className="number">02</h2>
                        <h4>Apply for loan</h4>
                        <p>
                          Choose your training and register for free if you are
                          a freelancer the courses are entirely taken care.
                        </p>
                      </motion.div>
                    </div>
                    <div className="col-md-6">
                      <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <h2 className="number">03</h2>
                        <h4>Get Approved</h4>
                        <p>
                          Choose your training and register for free if you are
                          a freelancer the courses are entirely taken care.
                        </p>
                      </motion.div>
                    </div>
                    <div className="col-md-6">
                      <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <h2 className="number">04</h2>
                        <h4>Get your money</h4>
                        <p>
                          Choose your training and register for free if you are
                          a freelancer the courses are entirely taken care.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bank-app-showcase-area bg-white">
            <div className="container">
              <div className="row align-items-center flex-row-reverse">
                <div className="col-lg-6 offset-lg-1">
                  <div className="app-content">
                    <div className="section-title bank-section-title text-start">
                      <motion.span
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="short-title-2 wow fadeInUp"
                      >
                        Our Application
                      </motion.span>
                      <motion.h1
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="wow fadeInUp"
                      >
                        All your{" "}
                        <span className="underline-shape">financials</span>
                        in one single app.
                      </motion.h1>
                      <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        It is a long established fact that a reader will be
                        distracted by there readable content of a page when
                        looking at its layout point .
                      </motion.p>
                      <motion.ul
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="list-unstyled feature-list wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <li>
                          {" "}
                          <i className="fas fa-check-circle"></i> It is long
                          established fact that reader will be.{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="fas fa-check-circle"></i> It is long
                          established fact distracted the readable.
                        </li>
                      </motion.ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <motion.img
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="wow fadeInUp"
                    data-wow-delay="0.4s"
                    src={mobilePng.src}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          <CardArea/>

          <section className="integrate-area bg-white">
            <div className="container">
              <div className="section-title bank-section-title mb-80">
                <span className="short-title-2">Our Integrations</span>
                <motion.h1 
                  className="wow fadeInUp"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  A variety of tools you
                  <br />
                  can <span className="underline-shape">integrate</span> with
                </motion.h1>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <motion.div
                    className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                    data-wow-delay="0.1s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="card-img">
                      <Image src={slack} alt="feature svg" />
                    </div>
                    <h4>Slack</h4>
                    <p>
                      Choose your training and register for free if you are a
                      freelancer the courses are entire taken care about the way
                      to.
                    </p>
                  </motion.div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <motion.div
                    className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                    data-wow-delay="0.3s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="card-img">
                      <Image src={dropbox} alt="feature svg" />
                    </div>
                    <h4>Dropbox</h4>
                    <p>
                      Choose your training and register for free if you are a
                      freelancer the courses are entire taken care about the way
                      to.
                    </p>
                  </motion.div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <motion.div
                    className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                    data-wow-delay="0.6s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="card-img">
                      <Image src={googleDrive} alt="feature svg" />
                    </div>
                    <h4>Google Drive</h4>
                    <p>
                      Choose your training and register for free if you are a
                      freelancer the courses are entire taken care about the way
                      to.
                    </p>
                  </motion.div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <motion.div
                    className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                    data-wow-delay="0.1s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="card-img">
                      <Image src={jira} alt="feature svg" />
                    </div>
                    <h4>Jira</h4>
                    <p>
                      Choose your training and register for free if you are a
                      freelancer the courses are entire taken care about the way
                      to.
                    </p>
                  </motion.div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <motion.div
                    className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                    data-wow-delay="0.3s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="card-img">
                      <Image src={zendesk} alt="feature svg" />
                    </div>
                    <h4>Zendesk</h4>
                    <p>
                      Choose your training and register for free if you are a
                      freelancer the courses are entire taken care about the way
                      to.
                    </p>
                  </motion.div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <motion.div
                    className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                    data-wow-delay="0.6s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="card-img">
                      <Image src={mailchimp} alt="feature svg" />
                    </div>
                    <h4>Mailchimp</h4>
                    <p>
                      Choose your training and register for free if you are a
                      freelancer the courses are entire taken care about the way
                      to.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section className="map_area bg-white">
            <div className="container">
              <div className="section-title bank-section-title mb-80">
                <span className="short-title-2">Worldwide Reach</span>
                <motion.h1
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  Our customer base
                  <br /> reaches{" "}
                  <span className="underline-shape">worldwide</span>
                </motion.h1>
              </div>
              <div className="map_inner">
                <Image src={mapPng} alt="" />
                <ul className="list-unstyled map_list">
                  <li className="active wow zoomIn" data-wow-delay="0.2s">
                    <Image src={flag1} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                  <li className="wow zoomIn" data-wow-delay="0.4s">
                    <Image src={flag2} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                  <li className="wow zoomIn" data-wow-delay="0.5s">
                    <Image src={flag3} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                  <li className="wow zoomIn" data-wow-delay="0.6s">
                    <Image src={flag4} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                  <li className="wow zoomIn" data-wow-delay="0.7s">
                    <Image src={flag5} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                  <li className="wow zoomIn" data-wow-delay="0.8s">
                    <Image src={flag6} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                  <li className="wow zoomIn" data-wow-delay="0.9s">
                    <Image src={flag7} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                  <li className="wow zoomIn" data-wow-delay="0.95s">
                    <Image src={flag8} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="calculator-area-three">
            <LoanCalculator />
          </section>

          <section className="saas-clients-logo bg-white pt-100">
            <div className="container">
              <motion.p
                className="wow fadeInUp clients-logo-title"
                data-wow-delay="0.3s"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                Trust Trusted by over <span>10,000+</span> customers wordwide
              </motion.p>
              <div className="row gy-md-0 gy-4 align-items-center h-100">
                <div className="col">
                  <Link href="#">
                    <motion.img
                      className="clients-logo img-fluid wow fadeInRight"
                      data-wow-delay="0.1s"
                      src={cLogo1.src}
                      alt="logo"
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    />
                  </Link>
                </div>
                <div className="col">
                  <Link href="#">
                    <motion.img
                      className="clients-logo img-fluid wow fadeInRight"
                      data-wow-delay="0.3s"
                      src={cLogo2.src}
                      alt="logo"
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    />
                  </Link>
                </div>
                <div className="col">
                  <Link href="#">
                    <motion.img
                      className="clients-logo img-fluid wow fadeInRight"
                      data-wow-delay="0.5s"
                      src={cLogo3.src}
                      alt="logo"
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    />
                  </Link>
                </div>
                <div className="col">
                  <Link href="#">
                    <motion.img
                      className="clients-logo img-fluid wow fadeInRight"
                      data-wow-delay="0.7s"
                      src={cLogo4.src}
                      alt="logo"
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    />
                  </Link>
                </div>
                <div className="col">
                  <Link href="#">
                    <motion.img
                      className="clients-logo img-fluid wow fadeInRight"
                      data-wow-delay="0.7s"
                      src={cLogo5.src}
                      alt="logo"
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="cta-action-area-three bg-white">
            <div className="container">
              <div className="cta-4 cta-five cta-bg-primary">
                <div className="row">
                  <div className="col-lg-6">
                    <motion.div 
                      className="cta-content wow fadeInUp"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <h2>Try it for free</h2>
                      <p>
                        Choose your training and register for free. If you are a
                        freelancer, the courses are entirely taken care.
                      </p>
                      <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <Link
                          href="#"
                          className="wow fadeInUp theme-btn theme-btn-lg"
                        >
                          Get started now <i className="arrow_right-up"></i>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="col-lg-6 text-end">
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <Image
                        className="wow fadeInUp"
                        data-wow-delay="0.2s"
                        src={mobileTwo}
                        alt=""
                      />
                    </motion.div>
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

export default SmallBankPage;
