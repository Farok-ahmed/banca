"use client"
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/nice-select.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";

import LoanAccordion from "@/components/LoanAccordion";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/components/Layout";
// Assets
import bannerShape3 from "@/assets/img/banner/shape-3.png";
import bannerImg2 from "@/assets/img/banner/banner-img-2.png";
import bannerShape1 from "@/assets/img/banner/shape-1.png";
import bannerShape2 from "@/assets/img/banner/shape-2.png";
import bannerShape4 from "@/assets/img/banner/shape-4.png";
import bannerShape5 from "@/assets/img/banner/shape-5.png";
import bannerShape6 from "@/assets/img/banner/shape-6.png";
import bannerShape7 from "@/assets/img/banner/shape-7.png";
import featureShape6 from "@/assets/img/feature/shape-6.png";
import featureShape10 from "@/assets/img/feature/shape-10.png";
import featureShape4 from "@/assets/img/feature/shape-4.png";
import featureShape3 from "@/assets/img/feature/shape-3.png";
import featureShape12 from "@/assets/img/feature/shape-12.png";
import featureIcon5 from "@/assets/img/feature/icon-5.png";
import featureShape13 from "@/assets/img/feature/shape-13.png";
import featureShape14 from "@/assets/img/feature/shape-14.png";
import featureShape15 from "@/assets/img/feature/shape-15.png";
import featureShape11 from "@/assets/img/feature/shape-11.png";
import featureShape5 from "@/assets/img/feature/shape-5.png";
import featureIcon6 from "@/assets/img/feature/icon-6.png";
import featureShape1 from "@/assets/img/feature/shape-1.png";
import featureShape2 from "@/assets/img/feature/shape-2.png";
import featureShape9 from "@/assets/img/feature/shape-9.png";
import featureIcon7 from "@/assets/img/feature/icon-7.png";
import cfIcon5 from "@/assets/img/corporate-finance/icon-5.svg";
import cfIcon2 from "@/assets/img/corporate-finance/icon-2.svg";
import cfIcon3 from "@/assets/img/corporate-finance/icon-3.svg";
import cfIcon4 from "@/assets/img/corporate-finance/icon-4.svg";
import howIcon1 from "@/assets/img/how-works/icon-1.png";
import howIcon2 from "@/assets/img/how-works/icon-2.png";
import secShape1 from "@/assets/img/security-tips/shape-1.png";
import secShape2 from "@/assets/img/security-tips/shape-2.png";
import secShape3 from "@/assets/img/security-tips/shape-3.png";
import secShape4 from "@/assets/img/security-tips/shape-4.png";
import secShape5 from "@/assets/img/security-tips/shape-5.png";
import secShape6 from "@/assets/img/security-tips/shape-6.png";
import secShape7 from "@/assets/img/security-tips/shape-7.png";
import secShape8 from "@/assets/img/security-tips/shape-8.png";
import secPriority from "@/assets/img/security-tips/security-priority.png";
import ctaIcon1 from "@/assets/img/cta/icon-1.png";
import ctaIcon2 from "@/assets/img/cta/icon-2.png";
import ctaIcon3 from "@/assets/img/cta/icon-3.png";
import ctaIcon4 from "@/assets/img/cta/icon-4.png";
import ctaIcon5 from "@/assets/img/cta/icon-5.png";
import ctaIcon6 from "@/assets/img/cta/icon-6.png";
import { motion } from "framer-motion";
import { fadeInRight, fadeInUp } from "@/components/animation";

const LoanStepsPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section
            className="banner-area-2 pt-200 pb-95"
            id="banner_animation"
            style={{ backgroundSize: `auto; background-position: top left` }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="banner-content">
                    <Image
                      data-parallax='{"x": 0, "y": 250, "rotateZ":0}'
                      className="shape"
                      src={bannerShape3}
                      alt="shape"
                    />
                    <motion.h1
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp mb-0"
                    >
                      Flexible home loans for the international lifestyle.
                    </motion.h1>
                    <motion.p
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp mt-50"
                      data-wow-delay="0.3s"
                    >
                      Banca is the one you can rely that will support you all
                      the way by offering Home Loan facilities.
                    </motion.p>
                    <motion.a
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      href="/loan"
                      data-wow-delay="0.5s"
                      className="wow fadeInUp theme-btn theme-btn-lg mt-50"
                    >
                      Apply now <i className="arrow_right"></i>
                    </motion.a>
                  </div>
                </div>
                <div className=" col-md-6 col-lg-5 offset-lg-1 pt-40">
                  <div className="banner-img">
                    <motion.div
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInRight"
                    >
                      <Image className="main-img img-fluid"
                      src={bannerImg2}
                      priority
                      alt="banner-img"
                    />
                    </motion.div>
                    <div className="shapes">
                      <Image
                        data-parallax='{"x": 0, "y": 130, "rotateZ":0}'
                        className="shape-1"
                        src={bannerShape1}
                        alt="shape"
                      />
                      <Image
                        data-parallax='{"x": 0, "y": -130, "rotateZ":0}'
                        className="shape-2"
                        src={bannerShape2}
                        alt="shape"
                      />
                      <Image
                        data-parallax='{"x": 250, "y":0, "rotateZ":0}'
                        className="shape-3"
                        src={bannerShape4}
                        alt="shape"
                      />
                      <Image
                        data-parallax='{"x": -200, "y": 250, "rotateZ":0}'
                        className="shape-4"
                        src={bannerShape5}
                        alt="shape"
                      />
                      <Image className="shape-5" src={bannerShape6} alt="shape" />
                      <Image className="shape-6" src={bannerShape7} alt="shape" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="feature-area-2 pt-140 pb-140" id="feature">
            <div className="container">
              <div className="feature">
                <div className="row gy-lg-0 gy-4">
                  <div className="col-lg-4">
                    <motion.div
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="feature-widget-2 align-items-center wow fadeInRight feature-1"
                      data-wow-delay="0.1s"
                    >
                      <div className="shapes">
                        <Image src={featureShape6} alt="shape" />
                        <Image src={featureShape10} alt="shape" />
                        <Image src={featureShape4} alt="shape" />
                        <Image src={featureShape3} alt="shape" />
                        <Image src={featureShape12} alt="shape" />
                        <Image src={featureShape12} alt="shape" />
                      </div>

                      <div className="feature-img">
                        <Image src={featureIcon5} alt="" style={{width:"auto",height:"auto"}} />
                      </div>
                      <div className="feature-content">
                        <p>UP TO $5M</p>
                        <h6>High Rang Loan</h6>
                      </div>
                    </motion.div>
                  </div>
                  <div className="col-lg-4">
                    <motion.div
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="feature-widget-2 align-items-center wow fadeInRight feature-2"
                      data-wow-delay="0.3s"
                    >
                      <div className="shapes">
                        <Image src={featureShape13} alt="shape" />
                        <Image src={featureShape14} alt="shape" />
                        <Image src={featureShape15} alt="shape" />
                        <Image src={featureShape11} alt="shape" />
                        <Image src={featureShape12} alt="shape" />
                        <Image src={featureShape5} alt="shape" />
                      </div>
                      <div className="feature-img">
                        <Image src={featureIcon6} alt="" style={{width:"auto",height:"auto"}} />
                      </div>
                      <div className="feature-content">
                        <p>FROM 7.50%</p>
                        <h6>Offer Low Interest</h6>
                      </div>
                    </motion.div>
                  </div>
                  <div className="col-lg-4">
                    <motion.div
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="feature-widget-2 align-items-center wow fadeInRight feature-3"
                      data-wow-delay="0.5s"
                    >
                      <div className="shapes">
                        <Image src={featureShape1} alt="shape" />
                        <Image src={featureShape2} alt="shape" />
                        <Image src={featureShape6} alt="shape" />
                        <Image src={featureShape9} alt="shape" />
                        <Image src={featureShape11} alt="shape" />
                      </div>
                      <div className="feature-img">
                        <Image src={featureIcon7} alt="" style={{width:"auto",height:"auto"}} />
                      </div>
                      <div className="feature-content">
                        <p>7 DAYS PROCESS</p>
                        <h6>Fast & Easy Process</h6>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="fast-e-loan pt-130">
                <div className="row gy-xl-0 gy-4">
                  <div className="col-xl-5 ">
                    <div className="section-title text-start">
                      <h2 className="mb-3">
                        Fast, secure & easy loans in just 7 days
                      </h2>
                      <p>
                        Need some fast cash? Bad cradit history? We dont mind
                        about your past, just the future. Try loan start and
                        feel secure in your future.
                      </p>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 offset-xl-1 ">
                    <div className="apply-topics">
                      <ul>
                        <li>
                          <i className="icon_box-checked"></i>Get up to $15,000
                          Cash Fast
                        </li>
                        <li>
                          <i className="icon_box-checked"></i>15 MinuteOnline
                          Application
                        </li>
                        <li>
                          <i className="icon_box-checked"></i>Centrelink
                          Considered*
                        </li>
                        <li>
                          <i className="icon_box-checked"></i>Bad Credit
                          Considered2
                        </li>
                      </ul>
                      <Link href="/loan" className="theme-btn mt-20 w-100">
                        Apply for loans
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 ">
                    <div className="learn-more">
                      <ul>
                        <li>
                          <span>1.</span> Subject to verifcation, suitability
                          and affordability
                        </li>
                        <li className="mt-20">
                          <span>2.</span> Your income from Centrelink must be
                          less then 50% of your total income in order to
                          qialify.
                        </li>
                      </ul>
                      <Link
                        href="/contact-us"
                        className="theme-btn theme-btn-light w-100 mt-30"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="manage-c-finance pt-125 pb-140">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="section-title">
                    <motion.h2
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                    >
                      Manage your corporate finances by yourself or in a team
                    </motion.h2>
                    <motion.p
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      To replace or complement your bank
                    </motion.p>
                  </div>
                </div>
              </div>

              <div className="row pt-60 gy-4 gy-xl-0">
                <div className="col-xl-3 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-2 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="icon-bg-1">
                      <Image src={cfIcon5} alt="icon" style={{width:"auto",height:"auto"}} />
                    </div>
                    <h5>Freelancers</h5>
                    <p>
                      The best business account to send and receive payments on
                      a daily basis.
                    </p>
                    <Link
                      href="/contact-us"
                      className="theme-btn theme-btn-outlined mt-45"
                    >
                      Find Out More
                    </Link>
                  </motion.div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-2 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="icon-bg-2">
                      <Image src={cfIcon2} alt="icon" style={{width:"auto",height:"auto"}} />
                    </div>
                    <h5>SMBs & Startups</h5>
                    <p>
                      Optimize your teams expenses by always staying in control.
                    </p>
                    <Link
                      href="/contact-us"
                      className="theme-btn theme-btn-outlined mt-45"
                    >
                      Find Out More
                    </Link>
                  </motion.div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-2 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon-bg-3">
                      <Image src={cfIcon3} alt="icon" style={{width:"auto",height:"auto"}} />
                    </div>
                    <h5>Business Founders</h5>
                    <p>
                      Open a business account for the online deposit of your
                      share capital.
                    </p>
                    <Link
                      href="/contact-us"
                      className="theme-btn theme-btn-outlined mt-45"
                    >
                      Find Out More
                    </Link>
                  </motion.div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-2 wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="icon-bg-4">
                      <Image src={cfIcon4} alt="icon" style={{width:"auto",height:"auto"}}/>
                    </div>
                    <h5>Microbusinesses</h5>
                    <p>
                      Stay focused on your core business by managing your
                      finances and accounting.
                    </p>
                    <Link
                      href="/contact-us"
                      className="theme-btn theme-btn-outlined mt-45"
                    >
                      Find Out More
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section className="how-it-work pt-125 pb-140">
            <div className="container">
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <div className="section-title">
                    <motion.h2
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp mb-3"
                    >
                      Here is how it works.
                    </motion.h2>
                    <motion.p
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      When you are ready, Cardinal Loans is ready too - 24 hours
                      a day, 7 days a week.
                    </motion.p>
                  </div>
                </div>
              </div>

              <div className="row pt-60 gy-lg-0 gy-4">
                <div className="col-lg-6 pe-lg-5">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="single-widget apply-online wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="widget-header">
                      <div className="widget-img">
                        <Image src={howIcon1} alt="icon" />
                      </div>
                      <div className="widget-title">
                        <h4>Apply Online</h4>
                        <p>
                          That is why we have a wide range of you can apply for
                          a Personal Loan.
                        </p>
                      </div>
                    </div>

                    <ul className="widget-content">
                      <li className="active">
                        {" "}
                        <span className="number">1</span>{" "}
                        <span className="text">Apply Online</span>
                      </li>
                      <li>
                        {" "}
                        <span className="number">2</span>{" "}
                        <span className="text">
                          Enter Your Informantion - 10 min
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="number">3</span>{" "}
                        <span className="text">
                          Pre-qualify / Pre-Approve - 5 min
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="number">4</span>{" "}
                        <span className="text">Help you prepare</span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="number">5</span>{" "}
                        <span className="text">
                          We help your qualify - 15 days
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                </div>

                <div className="col-lg-6 ps-lg-0">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="single-widget consultation wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="widget-header">
                      <div className="widget-img">
                        <Image src={howIcon2} alt="icon" />
                      </div>
                      <div className="widget-title">
                        <h4>Consultation</h4>
                        <p>
                          Conis Guide on the supervisory approach to
                          consolidation in the banking sector.
                        </p>
                      </div>
                    </div>

                    <ul className="widget-content">
                      <li className="active">
                        {" "}
                        <span className="number">1</span>
                        <span className="text">
                          Schedule a Free Consulation
                        </span>
                      </li>
                      <li>
                        {" "}
                        <span className="number">2</span>{" "}
                        <span className="text">Discuss your Situation</span>
                      </li>
                      <li>
                        {" "}
                        <span className="number">3</span>{" "}
                        <span className="text">We Review your condition </span>
                      </li>
                      <li>
                        {" "}
                        <span className="number">4</span>{" "}
                        <span className="text">Help you prepare</span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="number">5</span>{" "}
                        <span className="text">We help your qualify</span>{" "}
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section className="security-area">
            <div className="security-priority pt-90 pb-95 text-center">
              <div className="shapes">
                <Image src={secShape1} alt="shape" />
                <Image src={secShape2} alt="shape" />
                <Image src={secShape3} alt="shape" />
                <Image src={secShape4} alt="shape" />
                <Image src={secShape5} alt="shape" />
                <Image src={secShape6} alt="shape" />
                <Image src={secShape1} alt="shape" />
                <Image
                  data-parallax='{"x": -60, "y": 150, "rotateZ":-15}'
                  src={secShape7}
                  alt="shape"
                />
                <Image
                  data-parallax='{"x": 0, "y": -150, "rotateZ":0}'
                  src={secShape8}
                  alt="shape"
                />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 mx-auto">
                    <Image src={secPriority} alt="icon" />
                    <h2 className="mt-4 mb-3">Your security. Our priority.</h2>
                    <p>
                      We always have your security in mind. Rest easy knowing
                      your data is protected with 128-bit encryption.{" "}
                      <Link href="/loan">Learn more.</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="faq-area pt-125 pb-200">
            <div className="container">
              <div className="section-title text-start">
                <motion.h2
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="mb-0 wow fadeInUp"
                >
                  Frequently asked questions
                </motion.h2>
              </div>

             
              <LoanAccordion />
            </div>
          </section>

          <section className="cta-area pt-60">
            <div className="container">
              <div className="row">
                <div className="col-md-12 position-relative">
                  <div className="cta cta-bg-primary">
                    <div className="shapes">
                      <Image src={ctaIcon1} alt="shape" />
                      <Image
                        data-parallax='{"x": 150, "y": 0, "rotateZ":-0}'
                        src={ctaIcon2}
                        alt="shape"
                      />
                      <Image src={ctaIcon3} alt="shape" />
                      <Image src={ctaIcon4} alt="shape" />
                      <Image src={ctaIcon5} alt="shape" />
                      <Image
                        data-parallax='{"x": 400, "y": 0, "rotateZ":0}'
                        src={ctaIcon6}
                        alt="shape"
                      />
                    </div>

                    <div className="row align-items-center">
                      <div className="col-md-7">
                        <div className="cta-content wow fadeInRight">
                          <h2 className="mb-10">Have any question?</h2>
                          <p>
                            Ask us anythisg.Do you have a love question you want
                            us to answer?
                          </p>
                        </div>
                      </div>

                      <div className="col-md-5 text-center text-md-end">
                        <div className="cta-content   text-md-end mt-3 mt-md-0">
                          <Link
                            href="/contact-us"
                            className="theme-btn theme-btn-alt wow fadeInLeft m-0"
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
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

export default LoanStepsPage;
