/* eslint-disable react/no-unescaped-entities */
"use client";
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/nice-select.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";

import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/components/Layout";
// Assets
import breadcrumbBg from "@/assets/img/breadcrumb/bg-2.png";
import recruitmentIcon1 from "@/assets/img/recruitment-proccess/icon-1.svg";
import recruitmentIcon2 from "@/assets/img/recruitment-proccess/icon-2.svg";
import recruitmentIcon3 from "@/assets/img/recruitment-proccess/icon-3.svg";
import recruitmentIcon4 from "@/assets/img/recruitment-proccess/icon-4.svg";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/components/animation";

const CareerPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section className="breadcrumb-area">
            <div
              className="breadcrumb-widget  pt-145 pb-200"
              style={{ backgroundImage: `url(${breadcrumbBg.src})` }}
            >
              <div className="container">
                <div className="row pb-100 pb-sm-0">
                  <div className="col-md-12">
                    <div className="breadcrumb-content pt-140 pb-15">
                      <h1>Build your Career</h1>
                      <ul>
                        <li>
                          <Link href="/">home</Link>
                        </li>
                        <li>
                          <Link href="/">pages</Link>
                        </li>
                        <li>Careers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-12 position-relative">
                  <div className="floated-widget search-job ">
                    <div className="d-flex justify-content-between flex-wrap">
                      <h4 className="mb-0">Search for jobs</h4>
                      <p>25 Jobs available</p>
                    </div>
                    <div className="px-3">
                      <div className="row search-box align-items-center py-2 mt-30 gy-md-0 gy-3">
                        <div className="col-lg-6 col-md-5 border-end">
                          <div className="input-field">
                            <span>
                              <i className="icon_toolbox_alt "></i>
                            </span>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Job title, keywords or company"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 ">
                          <div className="input-field">
                            <span>
                              {" "}
                              <i className="icon_pin_alt "></i>
                            </span>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Town or region"
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-3 text-md-end text-center pe-2">
                          <Link
                            href="#"
                            className="custom-btn theme-btn-primary_alt theme-btn"
                          >
                            Search
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-200 pb-145 bg_disable">
            <div className="container pt-40">
              <div className="section-title text-start pt-5 pt-md-0">
                <motion.h2
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="wow fadeInUp"
                >
                  Forget the expected. Do the exceptional
                </motion.h2>
                <motion.p 
                  className="wow fadeInUp" 
                  data-wow-delay="0.3s"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  Banca is one of the world's leading international banks.
                  Whether you are looking for a first job or taking the next
                  step in your career, we offer many ways for you to realise
                  your ambitions. Come and work with us and you'll have
                  opportunities to make connections all over the world and help
                  build the bank for the future. Take a look and discover what
                  it means to work for Santander US.
                </motion.p>
              </div>

              <div className="row gy-4 mt-30">
                <div className="col-md-6 col-lg-4">
                  <motion.div
                    className="feature-card-widget-7 wow fadeInUp"
                    data-wow-delay="0.1s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <h4>Who We Are</h4>
                    <p>
                      Our purpose is to help people and businesses prosper.
                      That's why we're simple and personal in all that we do.
                    </p>
                    <Link
                    href="/about-us"
                      className="theme-btn theme-btn-outlined mb-4 mt-45 "
                    >
                      Learn more
                    </Link>
                  </motion.div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <motion.div
                    className="feature-card-widget-7 wow fadeInUp"
                    data-wow-delay="0.3s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <h4>Career Areas</h4>
                    <p>
                      Unique skills and diverse backgrounds allow us to grow and
                      prosper. See where you could make a difference.
                    </p>
                    <Link
                      href="/career"
                      className="theme-btn theme-btn-outlined mb-4 mt-45 "
                    >
                      Explore
                    </Link>
                  </motion.div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <motion.div
                    className="feature-card-widget-7 wow fadeInUp"
                    data-wow-delay="0.5s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <h4>Student Opportunities</h4>
                    <p>
                      Whether you're a student purusing a graduate pursuing a
                      career, put your talents to the test at Santander US.
                    </p>
                    <Link
                      href="/jobs"
                      className="theme-btn theme-btn-outlined mb-4 mt-45 "
                    >
                      Find out more
                    </Link>
                  </motion.div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <motion.div
                    className="feature-card-widget-7 wow fadeInUp"
                    data-wow-delay="0.7s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <h4>Benefits</h4>
                    <p>
                      Learn more about the comprehensive benefits packages we
                      offer to you and your family.
                    </p>
                    <Link
                      href="/about-us"
                      className="theme-btn theme-btn-outlined mb-4 mt-45 "
                    >
                      Discover
                    </Link>
                  </motion.div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <motion.div
                    className="feature-card-widget-7 wow fadeInUp"
                    data-wow-delay="0.9s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <h4>Diversity & Inclusion</h4>
                    <p>
                      At Santander, we seek out diverse viewpoints. It's why we
                      work hard to build an inclusive environment.
                    </p>
                    <Link
                      href="/contact-us"
                      className="theme-btn theme-btn-outlined mb-4 mt-45 w-50"
                    >
                      Read more
                    </Link>
                  </motion.div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <motion.div
                    className="feature-card-widget-7 wow fadeInUp"
                    data-wow-delay="1.1s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <h4>Join Our Community</h4>
                    <p>
                      When you become a member of Santander's talent community,
                      you'll receive job opportunity alerts here.
                    </p>
                    <Link
                      href="/contact-us"
                      className="theme-btn theme-btn-outlined mb-4 mt-45 w-50"
                    >
                      Join Now
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section className="feature-jobs bg_white pt-125 pb-140">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-6">
                  <div className="section-title text-start">
                    <motion.h2 
                      className="mb-0 wow fadeInRight"
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      Featured jobs
                    </motion.h2>
                  </div>
                </div>
                <div className="col-md-4 text-end">
                  <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Link
                      href="/jobs"
                      className="wow fadeInLeft theme-btn theme-btn-outlined"
                    >
                      Show All <i className="arrow_right"></i>{" "}
                    </Link>
                  </motion.div>
                </div>
              </div>

              <div className="row pt-60">
                <div className="col-lg-7">
                  <div className="feature-job-tab">
                    <ul className="feature-job-list">
                      <li className="mt-0">
                        <Link href="/job-application">
                          <motion.div
                            className="single-feature-job wow fadeInUp"
                            data-wow-delay="0.1s"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                          >
                            <h6 className="job-title">
                              Manager- Products & Marketing
                            </h6>
                            <div className="d-flex flex-wrap">
                              <div className="job-location me-3">
                                {" "}
                                <i className="icon_pin_alt"></i>NY, United
                                States
                              </div>
                              <div className="job-catagory">
                                {" "}
                                <span>Branch Banking</span> | Full-time
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      </li>

                      <li>
                        <Link href="/job-application">
                          <motion.div
                            className="single-feature-job wow fadeInUp"
                            data-wow-delay="0.3s"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                          >
                            <h6 className="job-title">
                              Investment Banking - Technology, Analyst
                            </h6>
                            <div className="d-flex flex-wrap">
                              <div className="job-location me-3">
                                {" "}
                                <i className="icon_pin_alt"></i>NY, United
                                States
                              </div>
                              <div className="job-catagory">
                                {" "}
                                <span>Branch Banking</span> | Full-time
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      </li>

                      <li>
                        <Link href="/job-application">
                          <motion.div
                            className="single-feature-job wow fadeInUp"
                            data-wow-delay="0.5s"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                          >
                            <h6 className="job-title">
                              Contact Center Representative
                            </h6>
                            <div className="d-flex flex-wrap">
                              <div className="job-location me-3">
                                {" "}
                                <i className="icon_pin_alt"></i>NY, United
                                States
                              </div>
                              <div className="job-catagory">
                                {" "}
                                <span>Branch Banking</span> | Full-time
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      </li>

                      <li>
                        <Link href="/job-application">
                          <motion.div
                            className="single-feature-job wow fadeInUp"
                            data-wow-delay="0.7s"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                          >
                            <h6 className="job-title">
                              ITS Desktop Technician
                            </h6>
                            <div className="d-flex flex-wrap">
                              <div className="job-location me-3">
                                {" "}
                                <i className="icon_pin_alt"></i>NY, United
                                States
                              </div>
                              <div className="job-catagory">
                                {" "}
                                <span>Branch Banking</span> | Full-time
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-5 mt-lg-0 mt-4">
                  <motion.div
                    className="feature-job-description wow fadeInUp"
                    data-wow-delay="0.1s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <h6 className="job-title">Manager- Products & Marketing</h6>
                    <div className="d-flex flex-wrap">
                      <div className="job-location me-3">
                        {" "}
                        <i className="icon_pin_alt"></i>NY, United States
                      </div>
                      <div className="job-catagory">
                        {" "}
                        <span>Branch Banking</span> | Full-time{" "}
                      </div>
                    </div>

                    <p className="mt-35">
                      We are looking for a Product Marketing Manager to lead our
                      outbound marketing activities. You'll be responsible for
                      presenting our products in ways that will strengthen our
                      brand and boost sales.
                    </p>

                    <p className="mt-20">
                      Your goal will be to develop and implement the most
                      profitable plans to position.
                    </p>

                    <Link
                      href="/job-application"
                      className="theme-btn theme-btn-lg mt-70 mb-25"
                    >
                      Apply Now <i className="arrow_right"></i>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section className="recruitment-procces bg_disable pt-120 pb-100">
            <div className="container">
              <div className="section-title text-start">
                <motion.h2 
                  className="wow fadeInUp"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  Learn our recruitment process
                </motion.h2>
                <motion.p 
                  className="wow fadeInUp" 
                  data-wow-delay="0.3s"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  Recruitment is a process of finding and attracting the
                  potential resources for filling up the vacant positions in an
                  organization. It sources the candidates with the abilities and
                  attitude, which are required for achieving the objectives of
                  an organization.
                </motion.p>
              </div>

              <div className="row pt-60 pb-100 gy-4 gy-lg-0">
                <div className="col-md-6 col-lg-3">
                  <motion.div
                    className="feature-card-widget-2 wow fadeInUp text-start py-5"
                    data-wow-delay="0.1s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image
                      className="img-fluid"
                      src={recruitmentIcon1}
                      alt="icon svg"
                    />
                    <h4>CV Submission</h4>
                    <p>
                      Submit your CV or resume through our online portal if you
                      meet our requirements.
                    </p>
                  </motion.div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <motion.div
                    className="feature-card-widget-2 wow fadeInUp text-start py-5"
                    data-wow-delay="0.3s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image
                      className="img-fluid"
                      src={recruitmentIcon2}
                      alt="icon svg"
                    />
                    <h4>Phone Screening</h4>
                    <p>
                      After looking at your CV you will be inviled for a
                      telephone interview at a time.
                    </p>
                  </motion.div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <motion.div
                    className="feature-card-widget-2 wow fadeInUp text-start py-5"
                    data-wow-delay="0.5s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image
                      className="img-fluid"
                      src={recruitmentIcon3}
                      alt="icon svg"
                    />
                    <h4>Skill Assessment</h4>
                    <p>
                      You will be invited at our head office to take a skills
                      and knowledge assessment.
                    </p>
                  </motion.div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <motion.div
                    className="feature-card-widget-2 wow fadeInUp text-start py-5"
                    data-wow-delay="0.7s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image
                      className="img-fluid"
                      src={recruitmentIcon4}
                      alt="icon svg"
                    />
                    <h4>Final Interview</h4>
                    <p>
                      If you can pass all stages we will invite you for a final
                      interview with our CEO.
                    </p>
                  </motion.div>
                </div>
              </div>

              <div className="row our-offer gy-4 gy-md-0">
                <div className="col-md-6">
                  <motion.div
                    className="single-offer-box wow fadeInRight"
                    data-wow-delay="0.1s"
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <h2>Our Offer</h2>
                    <p>
                      You will be invited at our head office to take a skills
                      and knowledge assessment.
                    </p>
                    <Link href="/loan-steps">
                      <span>Read more</span> <i className="arrow_right"></i>
                    </Link>
                  </motion.div>
                </div>

                <div className="col-md-6">
                  <motion.div
                    className="single-offer-box wow fadeInRight"
                    data-wow-delay="0.3s"
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <h2>FAQ</h2>
                    <p>
                      Find the answers to frequently asked questions about
                      working at AfrAsia.
                    </p>
                    <Link href="/contact-us">
                      <span>Read more</span> <i className="arrow_right"></i>
                    </Link>
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

export default CareerPage;
