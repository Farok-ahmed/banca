/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/components/animation";
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/css/nice-select.css";
import "nouislider/dist/nouislider.css";
import "@/styles/css/jquery.fancybox.min.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import DefaultLayout from "@/components/Layout";
import AboutSlider from "@/components/AboutSlider";
import recognitionIcon from "@/assets/img/recognition/icon.svg";
import aboutBg from "@/assets/img/banner/about-bg.png";
import leader1 from "@/assets/img/leadership/img-1.png";
import leader2 from "@/assets/img/leadership/img-2.png";
import leader3 from "@/assets/img/leadership/img-3.png";
const AboutPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section
            className="banner-area-2 pt-145"
            style={{ backgroundImage: `url(${aboutBg.src})` }}
          >
            <div className="container">
              <div className="row align-items-center pt-130 pb-140">
                <div className="col-xl-6 col-lg-8">
                  <div className="banner-content py-5">
                    <div className="section-title text-start">
                      <motion.span
                        className="short-title wow fadeInUp"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        ABOUT US
                      </motion.span>
                      <motion.h1
                        className="wow fadeInUp mb-0"
                        data-wow-delay="0.2s"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        Believing, banking and achieving different
                      </motion.h1>
                    </div>
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <Link
                        className="theme-btn-2 theme-btn-primary mt-45 wow fadeInUp"
                        data-wow-delay="0.4s"
                        href="/contact-us"
                      >
                        <span className="arrow">
                          <span className="horizontal-line"></span>
                        </span>
                        View our 2019 Annual Report
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg_white pt-90 pb-160">
            <div className="container">
              <div className="description-widget">
                <div className="row">
                  <div className="col-md-4">
                    <div className="desc-title text-end bg_primary">
                      <h2>
                        A journey that started with a belief to Bank Different
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="desc-text pl-lg-10">
                      <p>
                        Banca Bank’s journey started with a single belief to
                        connect people, places and possibilities by doing things
                        others said could not be done. Anchored on this belief,
                        the Bank was founded in 2017 and we are, to date,
                        headquartered in the Mauritius International Financial
                        Centre with a representative office in United States.
                      </p>
                      <p className="mt-20">
                        Banca Bank's core banking and transactional capabilities
                        are also complemented. Banca experienced team and its
                        regional foundation are complemented by the belief and
                        trust our clients have in our ability to connect them to
                        a global banking network to seamlessly achieve their
                        financial aspirations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <AboutSlider />

          <section className="recognition-area bg_white pt-135 pb-140">
            <div className="container">
              <div className="section-title text-start">
                <motion.span
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="short-title mt-0 wow fadeInUp"
                >
                  Recognition
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="mb-0 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Milestones and Accolades
                </motion.h2>
              </div>

              <div className="recognition-widget pt-70">
                <div className="row gy-4 gy-lg-0">
                  <div className="col-lg-3 col-5">
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="widget-navigation wow fadeInUp pe-lg-4"
                      data-wow-delay="0.1s"
                    >
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <Link
                            className="nav-link active"
                            id="2020-tab"
                            data-bs-toggle="tab"
                            href="#twenty"
                            role="tab"
                            aria-controls="twenty"
                            aria-selected="true"
                          >
                            2020
                          </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                          <Link
                            className="nav-link"
                            id="2019-tab"
                            data-bs-toggle="tab"
                            href="#nineteen"
                            role="tab"
                            aria-controls="nineteen"
                            aria-selected="false"
                          >
                            2019
                          </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                          <Link
                            className="nav-link"
                            id="2018-tab"
                            data-bs-toggle="tab"
                            href="#eighteen"
                            role="tab"
                            aria-controls="eighteen"
                            aria-selected="false"
                          >
                            2018
                          </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                          <Link
                            className="nav-link"
                            id="2017-tab"
                            data-bs-toggle="tab"
                            href="#seventeen"
                            role="tab"
                            aria-controls="seventeen"
                            aria-selected="false"
                          >
                            2017
                          </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                          <Link
                            className="nav-link "
                            id="2016-tab"
                            data-bs-toggle="tab"
                            href="#sixteen"
                            role="tab"
                            aria-controls="sixteen"
                            aria-selected="false"
                          >
                            2016
                          </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                          <Link
                            className="nav-link "
                            id="2015-tab"
                            data-bs-toggle="tab"
                            href="#fifteen"
                            role="tab"
                            aria-controls="fifteen"
                            aria-selected="false"
                          >
                            2015
                          </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                          <Link
                            className="nav-link "
                            id="2014-tab"
                            data-bs-toggle="tab"
                            href="#lessfifteen"
                            role="tab"
                            aria-controls="lessfifteen"
                            aria-selected="false"
                          >
                            2014 and before
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                  <div className="col-lg-4 col-7">
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="tab-content wow fadeInUp"
                      data-wow-delay="0.3s"
                      id="myTabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="twenty"
                        role="tabpanel"
                        aria-labelledby="2020-tab"
                      >
                        <h3>2020</h3>
                        <p>
                          The First Mauritian Bank to join the GRI Community
                        </p>
                        <p>
                          Instant account opening with a Customer On-boarding
                          App
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nineteen"
                        role="tabpanel"
                        aria-labelledby="2019-tab"
                      >
                        <h3>2019</h3>
                        <p>
                          The First Mauritian Bank to join the GRI Community
                        </p>
                        <p>
                          Instant account opening with a Customer On-boarding
                          App
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="eighteen"
                        role="tabpanel"
                        aria-labelledby="2018-tab"
                      >
                        <h3>2018</h3>
                        <p>
                          The First Mauritian Bank to join the GRI Community
                        </p>
                        <p>
                          Instant account opening with a Customer On-boarding
                          App
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="seventeen"
                        role="tabpanel"
                        aria-labelledby="2017-tab"
                      >
                        <h3>2017</h3>
                        <p>
                          The First Mauritian Bank to join the GRI Community
                        </p>
                        <p>
                          Instant account opening with a Customer On-boarding
                          App
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="sixteen"
                        role="tabpanel"
                        aria-labelledby="2016-tab"
                      >
                        <h3>2016</h3>
                        <p>
                          The First Mauritian Bank to join the GRI Community
                        </p>
                        <p>
                          Instant account opening with a Customer On-boarding
                          App
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="fifteen"
                        role="tabpanel"
                        aria-labelledby="2015-tab"
                      >
                        <h3>2015</h3>
                        <p>
                          The First Mauritian Bank to join the GRI Community
                        </p>
                        <p>
                          Instant account opening with a Customer On-boarding
                          App
                        </p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="lessfifteen"
                        role="tabpanel"
                        aria-labelledby="2014-tab"
                      >
                        <h3>2014 and before</h3>
                        <p>
                          The First Mauritian Bank to join the GRI Community
                        </p>
                        <p>
                          Instant account opening with a Customer On-boarding
                          App
                        </p>
                        <p>
                          The First Mauritian Bank to join the GRI Community
                        </p>
                        <p>
                          Instant account opening with a Customer On-boarding
                          App
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="col-xl-4 col-lg-5 offset-xl-1 pr-lg-35 pl-lg-35">
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="accolades-widget wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="accolades-header d-flex justify-content-between align-items-end">
                        <h2>Awards</h2>
                        <Image src={recognitionIcon} alt="Awards icon" />
                      </div>
                      <div className="accolades-content">
                        <ul>
                          <li className="">
                            <p className="subtitle">CITI BANK</p>
                            <p className="text">
                              Straight-Through processing (STP) Excellence Award
                            </p>
                          </li>
                          <li className="mt-3">
                            <p className="subtitle">MARCOM AWARDS</p>
                            <p className="text">
                              Platinum Winner for ‘The Believers’ Campaign
                            </p>
                          </li>
                          <li className="mt-3">
                            <p className="subtitle">BURJ CEO AWARDS</p>
                            <p className="text">
                              Most Innovative Bank in Mauritius
                            </p>
                          </li>
                          <li className="mt-3">
                            <p className="subtitle">GLOBAL BRANDS MAGAZINE</p>
                            <p className="text">
                              Most Innovative Treasury Services
                            </p>
                            <p className="text">
                              Best Banking Brand in Mauritius
                            </p>
                            <p className="text">
                              Best Credit Card Rewards Program
                            </p>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="leadership-area pt-135 pb-140 bg_disable">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-sm-8">
                  <motion.div
                    className="section-title text-start wow fadeInRight"
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <span className="short-title mt-0">Leadership</span>
                    <h2 className="mb-0">Meet our leadership team</h2>
                  </motion.div>
                </div>
                <div className="col-sm-4 text-end">
                  <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Link
                      href="#"
                      className="theme-btn theme-btn-outlined wow fadeInLeft"
                    >
                      {" "}
                      see more <i className="arrow_carrot-right "></i>
                    </Link>
                  </motion.div>
                </div>
              </div>

              <div className="row pt-65 gy-md-0 gy-4">
                <div className="col-lg-4">
                  <div
                    className="single-leadership-widget wow fadeInUp "
                    data-wow-delay="0.1s"
                  >
                    <Link href="#">
                      <Image src={leader1} alt="leader-1" />
                      <div className="leader-info">
                        <h5>Eldridge Robles</h5>
                        <p>Co-Founder, Conis</p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-4">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="single-leadership-widget wow fadeInUp "
                    data-wow-delay="0.3s"
                  >
                    <Link href="#">
                      <Image src={leader2} alt="leader-2" />
                      <div className="leader-info">
                        <h5>Eldridge Robles</h5>
                        <p>Co-Founder, Conis</p>
                      </div>
                    </Link>
                  </motion.div>
                </div>
                <div className="col-lg-4">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="single-leadership-widget wow fadeInUp "
                    data-wow-delay="0.5s"
                  >
                    <Link href="#">
                      <Image src={leader3} alt="leader-3" />
                      <div className="leader-info">
                        <h5>Eldridge Robles</h5>
                        <p>Co-Founder, Conis</p>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section className="cta-area-2 pt-80 pb-80">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="cta-content text-black wow fadeInRight"
                  >
                    <h2>Our latest financial results</h2>
                    <p>
                      Access Scotiabank’s latest quarterly results and archived
                      financial documents.
                    </p>
                  </motion.div>
                </div>
                <div className="col-md-6 ">
                  <div className="cta-content mt-3 mt-sm-0 text-sm-end text-center">
                    <Link href="/contact-us" className="theme-btn wow fadeInLeft">
                      See results
                    </Link>
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

export default AboutPage;
