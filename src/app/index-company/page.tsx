'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';
import LoanSlider from '@/components/LoanSlider';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const IndexCompany = () => {
  const [startDate, setStartDate] = useState<Date[] | null>(null);
  const [endDate, setEndDate] = useState<Date[] | null>(null);
  return (
    <>
      <header className="header">
        <div className="header-menu header-menu-2" id="sticky">
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <Link className="navbar-brand" href="index.html">
                <Image
                  width={110}
                  height={35}
                  src="/img/logo/Logo-2.png"
                  // srcset="img/logo/Logo-2@2x.png 2x"
                  alt="logo"
                />
              </Link>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav menu ms-auto">
                  <li className="nav-item dropdown submenu ">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle active"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="true"
                      data-bs-toggle="dropdown"
                    ></i>
                    <ul className="dropdown-menu">
                      <li className="nav-item ">
                        <Link href="/" className="nav-link">
                          Smart Finance
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/index-company"
                          className="nav-link active"
                        >
                          Loan Company
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/mobile-app" className="nav-link">
                          Mobile App
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/simple-banca" className="nav-link">
                          Simple Banca
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/loan-steps" className="nav-link">
                          Loan Steps
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/finance-sass-app" className="nav-link">
                          Finance Sass App
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/small-bank" className="nav-link">
                          Small Bank
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="loan.html"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Loan
                    </Link>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="false"
                      data-bs-toggle="dropdown"
                    ></i>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" href="loan.html">
                          Get loan
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Loan Application
                        </Link>
                        <i
                          className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                          aria-hidden="false"
                          data-bs-toggle="dropdown"
                        ></i>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link className="nav-link" href="loan-details.html">
                              Step 01
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              href="personal-details.html"
                            >
                              Step 02
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" href="document-upload.html">
                              Step 03
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="career.html"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Job Pages
                    </Link>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="false"
                      data-bs-toggle="dropdown"
                    ></i>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" href="career.html">
                          Career
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="job-post.html">
                          Jobs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="job-application.html">
                          Job Application
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </Link>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="false"
                      data-bs-toggle="dropdown"
                    ></i>
                    <ul className="dropdown-menu ">
                      <li className="nav-item">
                        <Link className="nav-link" href="card.html">
                          Cards
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="about.html">
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                          Contact Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="error.html">
                          404 Error
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="false"
                      data-bs-toggle="dropdown"
                    ></i>
                    <ul className="dropdown-menu ">
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">
                          Blog Listing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="blog-details.html">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <Link
                  className="theme-btn"
                  href="https://themeforest.net/item/banca-banking-business-loan-bootstrap5html-website-template/32788885?s_rank=9"
                  target="_blank"
                >
                  Buy Banca
                </Link>
                <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
                  <label htmlFor="something" className="tab-btn tab-btns">
                    {/* <ion-icon name="moon"></ion-icon> */}
                    <IoMoonOutline name='moon'/>
                  </label>
                  <label htmlFor="something" className="tab-btn">
                    {/* <ion-icon name="sunny"></ion-icon> */}
                    <IoSunnyOutline name="sunny"/>
                  </label>
                  <label className=" ball" htmlFor="something"></label>
                  <input
                    type="checkbox"
                    name="something"
                    id="something"
                    className="dark_mode_switcher"
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="banner-area-6">
          <div className="container">
            <div className="row ">
              <div className="col-lg-7">
                <div
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
                </div>
              </div>
              <div className="col-lg-5 text-center text-lg-start">
                <div className="banner-img">
                  <Image
                    width={380}
                    height={480}
                    className="img-1 wow fadeInLeft"
                    data-wow-delay="0.3s"
                    src="/img/home-5/banner-img-1.png"
                    alt=""
                  />
                  <Image
                    width={220}
                    height={200}
                    className="img-2 wow fadeInRight"
                    data-wow-delay="0.8s"
                    src="/img/home-5/banner-img-2.png"
                    alt=""
                  />
                  <Image
                    width={320}
                    height={240}
                    className="img-3 wow fadeInRight"
                    data-wow-delay="1.1s"
                    src="/img/home-5/banner-img-3.png"
                    alt=""
                  />
                  <Image
                    width={40}
                    height={50}
                    className="img-shape"
                    src="/img/home-5/banner-shape.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="banner-fact">
          <div className="container">
            <div className="row gy-lg-0 gy-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInRight"
                data-wow-delay="0.1s"
              >
                <div className="single-fact">
                  <div className="icon">
                    <i className="fas fa-globe"></i>
                  </div>
                  <p>A global customer base from over 120 countries</p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInRight"
                data-wow-delay="0.4s"
              >
                <div className="single-fact">
                  <div className="icon">
                    <i className="fas fa-user"></i>
                  </div>
                  <p>Almost over 250 thousand active users</p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInRight mx-auto"
                data-wow-delay="0.7s"
              >
                <div className="single-fact">
                  <div className="icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <p>10 years worth of experience as a industry expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pt-115 pb-105 feature-area-3">
          <div className="container">
            <div className="section-title">
              <span className="short-title-2">OUR Features</span>
              <h1 className="wow fadeInUp">We have better and more feature</h1>
            </div>
            <div className="row gy-4 mt-50">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="feature-card-widget-9 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/feature-icon-1.svg"
                    alt=""
                  />
                  <h5>Fast Mobility</h5>
                  <p>Quis dapibus volutpat condi</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="feature-card-widget-9 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/feature-icon-2.svg"
                    alt=""
                  />
                  <h5>Term Loan</h5>
                  <p>Quis dapibus volutpat condi</p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="feature-card-widget-9 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/feature-icon-3.svg"
                    alt=""
                  />
                  <h5>Easy Experience</h5>
                  <p>Quis dapibus volutpat condi</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="feature-card-widget-9 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/feature-icon-4.svg"
                    alt=""
                  />
                  <h5>Safe and protected</h5>
                  <p>Quis dapibus volutpat condi</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="feature-card-widget-9 wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/feature-icon-5.svg"
                    alt=""
                  />
                  <h5>Wordwide</h5>
                  <p>Quis dapibus volutpat condi</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="feature-card-widget-9 wow fadeInUp"
                  data-wow-delay="1.1s"
                >
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/feature-icon-6.svg"
                    alt=""
                  />
                  <h5>One term fees</h5>
                  <p>Quis dapibus volutpat condi</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="feature-card-widget-9 wow fadeInUp"
                  data-wow-delay="1.3s"
                >
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/feature-icon-7.svg"
                    alt=""
                  />
                  <h5>Merchant Payment</h5>
                  <p>Quis dapibus volutpat condi</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="feature-card-widget-9 wow fadeInUp widget-link"
                  data-wow-delay="1.7s"
                >
                  <h1>10+</h1>
                  <Link href="#">
                    More features <i className="arrow_right "></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-area-2 bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 wow fadeInLeft">
                <div className="text-start">
                  <h1 className="mb-3">Get loan from 3 simple process</h1>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form,
                  </p>
                  <ul className="list-unstyled feature-list">
                    <li>
                      {' '}
                      <i className="fas fa-check-circle"></i>It is a long
                      established fact that a reader will be{' '}
                    </li>
                    <li>
                      {' '}
                      <i className="fas fa-check-circle"></i> It is a long
                      established fact distracted by the readable
                    </li>
                  </ul>
                  <Link href="#" className="read-more-btn">
                    <span>Learn about the process</span>
                    <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInRight">
                <div className="sms-flow">
                  <Image
                    width={90}
                    height={85}
                    className="arrow-1"
                    src="/img/home-5/about-arrow-1.png"
                    alt=""
                  />
                  <Image
                    width={30}
                    height={65}
                    className="arrow-2"
                    src="/img/home-5/about-arrow-2.png"
                    alt=""
                  />
                  <Image
                    width={540}
                    height={130}
                    className="msg-1 wow fadeInUp"
                    data-wow-delay="0.1s"
                    src="/img/home-5/msg-1.png"
                    alt=""
                  />
                  <Image
                    width={290}
                    height={120}
                    className="msg-2"
                    src="/img/home-5/msg-2.png"
                    alt=""
                  />
                  <Image
                    width={500}
                    height={160}
                    className="msg-3 wow fadeInDown"
                    data-wow-delay="0.3s"
                    src="/img/home-5/msg-3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="row align-items-center gy-4 mt-3">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="card-holder">
                  <div className="shape-1"></div>
                  <div className="shape-2"></div>
                  <Image
                    width={700}
                    height={800}
                    className="img-1 img-fluid"
                    src="/img/home-5/card-holder.png"
                    alt=""
                  />
                  <Image
                    width={300}
                    height={250}
                    className="img-2 wow fadeInRight"
                    data-wow-delay="0.2s"
                    src="/img/home-5/bank-balance.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1 wow fadeInRight">
                <h1 className="mb-3">
                  We have reputable customer relatinships
                </h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which do not
                  look even slightly .{' '}
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
              </div>
            </div>
          </div>
        </section>

        <section className="calculator-area-2">
          <div className="container">
            <div className="section-title">
              <span className="short-title-2">Loan calculator</span>
              <h1 className="wow fadeInUp text-white">
                Calculate and confirm your loans
              </h1>
            </div>

            <div className="calculator-widget-2 mt-50">
              <div className="row gy-lg-0 gy-3">
                <div className="col-lg-7">
                  <div
                    className="single-calculator-widget wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <h4>Loan Calculator</h4>
                    <div className="range-label mt-40">Loan Term</div>
                    <nav>
                      <div
                        className="nav nav-tabs loan-type-select"
                        id="nav-tab"
                        role="tablist"
                      >
                        <button
                          className="nav-link active"
                          id="yearTab-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#yearTab"
                          type="button"
                          role="tab"
                          aria-controls="yearTab"
                          aria-selected="false"
                        >
                          Yearly
                        </button>
                        <button
                          className="nav-link "
                          id="monthTab-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#monthTab"
                          type="button"
                          role="tab"
                          aria-controls="monthTab"
                          aria-selected="false"
                        >
                          Monthly
                        </button>
                        <button
                          className="nav-link"
                          id="weekTab-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#weekTab"
                          type="button"
                          role="tab"
                          aria-controls="weekTab"
                          aria-selected="false"
                        >
                          Weekly
                        </button>
                      </div>
                    </nav>

                    <div className="range-label">Loan Amount</div>
                    <div className="single-range">
                      <div id="RangeSlider"></div>
                      <div className="input-group">
                        <input
                          className="noTextMerge"
                          type="text"
                          id="SetRange"
                        />
                        <span className="input-group-text">$</span>
                      </div>
                    </div>
                    <div className="range-label">Interest Rate</div>
                    <div className="single-range">
                      <div id="RoiRangeSlider"></div>
                      <div className="input-group">
                        <input type="text" id="SetRoiRange" />
                        <span className="input-group-text">%</span>
                      </div>
                    </div>
                    <div className="range-label">Loan Duration</div>
                    <div className="single-range">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="yearTab"
                          role="tabpanel"
                          aria-labelledby="yearTab"
                        >
                          <div id="YearRangeSlider"></div>
                        </div>
                        <div
                          className="tab-pane fade "
                          id="monthTab"
                          role="tabpanel"
                          aria-labelledby="monthTab"
                        >
                          <div id="MonthRangeSlider"></div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="weekTab"
                          role="tabpanel"
                          aria-labelledby="weekTab"
                        >
                          <div id="WeekRangeSlider"></div>
                        </div>
                      </div>
                      <div className="input-group">
                        <input
                          className="noTextMerge"
                          type="text"
                          id="SetMonthRange"
                        />
                        <span className="input-group-text loanTermIndicator">
                          @example.com
                        </span>
                      </div>
                    </div>
                    
                    {/* flicker calendar */}
                    <div
                      className="d-flex loan-start-date"
                      style={{ gap: '20px' }}
                    >
                      <div>
                        <div className="range-label">Start Date</div>
                        <div className="inp-container">
                          <Flatpickr
                            id="loanStartDate"
                            placeholder="Select Date"
                            className="form-control"
                            value={startDate as Date[]}
                            onChange={(date) => setStartDate(date)}
                            options={{
                              dateFormat: 'd F Y',
                              position: 'above',
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="range-label">End Date</div>
                        <div className="inp-container">
                          <Flatpickr
                            id="loanEndDate"
                            placeholder="Select Date"
                            className="form-control"
                            value={endDate as Date[]}
                            onChange={(date) => setEndDate(date)}
                            options={{
                              dateFormat: 'd F Y',
                              position: 'above',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 pl-lg-35">
                  <div
                    className="calculator-result-widget wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="pie-wrapper mt-25" id="loan_graph_circle">
                      <div className="label">
                        Total Amount<h2 className="LoanTotalAmount"></h2>
                      </div>
                      <div className="pie">
                        <div className="left-side half-circle"></div>
                        <div className="right-side half-circle"></div>
                      </div>
                      <div className="circle-border"></div>
                    </div>
                    <div className="graph-indicator">
                      <div>
                        <span className="blue-dot"></span> EMI Amount
                      </div>
                      <div>
                        <span className="orange-dot"></span> Interest Payable
                      </div>
                    </div>
                    <ul className="loan-calculation list-unstyled">
                      <li>
                        <span className="label">
                          EMI Amount (Principal + Interest)
                        </span>
                        <span className="amount LoanTotalAmount"></span>
                      </li>
                      <li>
                        <span className="label">Interest Payable</span>
                        <span className="amount" id="InterestPayable"></span>
                      </li>
                      <li>
                        <span className="label">Loan Duration</span>
                        <span className="amount LoanTotalDuration"></span>
                      </li>
                      <li>
                        <span className="label">Your EMI Amount</span>
                        <span className="amount" id="emiAmount"></span>
                      </li>
                    </ul>
                    <Link
                      href="personal-details.html"
                      className="theme-btn theme-btn-lg mt-20 w-100"
                    >
                      Apply Now
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="loan-slider-area bg-white pb-130 pt-120">
          <div className="container">
            <div className="section-title">
              <span className="short-title-2">Loan types</span>
              <h1 className="wow fadeInUp">We offer a wide variety of loans</h1>
            </div>
            <div className="loan-slider pt-80">
              <div className="single-slide">
                <div className="icon">
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/loan-type-1.png"
                    alt=""
                  />
                </div>
                <h4>Personal Loans</h4>
                <p>
                  Our team of experts uses methodology identify the credit cards
                  most.
                </p>
              </div>
              <div className="single-slide">
                <div className="icon">
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/loan-type-2.png"
                    alt=""
                  />
                </div>
                <h4>Installment Loans</h4>
                <p>
                  Our team of experts uses methodology identify the credit cards
                  most.
                </p>
              </div>
              <div className="single-slide">
                <div className="icon">
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/loan-type-3.png"
                    alt=""
                  />
                </div>
                <h4>Payday Loans</h4>
                <p>
                  Our team of experts uses methodology identify the credit cards
                  most.
                </p>
              </div>
              <div className="single-slide">
                <div className="icon">
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/loan-type-1.png"
                    alt=""
                  />
                </div>
                <h4>Personal Loans</h4>
                <p>
                  Our team of experts uses methodology identify the credit cards
                  most.
                </p>
              </div>
              <div className="single-slide">
                <div className="icon">
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/loan-type-2.png"
                    alt=""
                  />
                </div>
                <h4>Installment Loans</h4>
                <p>
                  Our team of experts uses methodology identify the credit cards
                  most.
                </p>
              </div>
              <div className="single-slide">
                <div className="icon">
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/loan-type-3.png"
                    alt=""
                  />
                </div>
                <h4>Payday Loans</h4>
                <p>
                  Our team of experts uses methodology identify the credit cards
                  most.
                </p>
              </div>
              <div className="single-slide">
                <div className="icon">
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/loan-type-2.png"
                    alt=""
                  />
                </div>
                <h4>Installment Loans</h4>
                <p>
                  Our team of experts uses methodology identify the credit cards
                  most.
                </p>
              </div>
              <div className="single-slide">
                <div className="icon">
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/loan-type-3.png"
                    alt=""
                  />
                </div>
                <h4>Payday Loans</h4>
                <p>
                  Our team of experts uses methodology identify the credit cards
                  most.
                </p>
              </div>
              <div className="single-slide">
                <div className="icon">
                  <Image
                    width={50}
                    height={50}
                    src="/img/home-5/loan-type-1.png"
                    alt=""
                  />
                </div>
                <h4>Personal Loans</h4>
                <p>
                  Our team of experts uses methodology identify the credit cards
                  most.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <LoanSlider />

        <section className="about-area-3 bg-white pb-lg-120 pb-60">
          <div className="container">
            <div className="section-title">
              <span className="short-title-2">ABout us</span>
              <h1 className="wow fadeInUp">Learn about how Banca works</h1>
            </div>
            <div className="row align-items-center pt-60 gy-lg-0 gy-4">
              <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
                <div>
                  <h5>
                    <span className="round-dot"></span> <span>1.5M</span> Active
                    Customers
                  </h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have.
                  </p>
                </div>
                <div className="mt-40">
                  <h5>
                    <span className="round-dot"></span> <span>30k</span>{' '}
                    Business Partners
                  </h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.3s">
                <div className="video-tut">
                  <Image
                    width={300}
                    height={380}
                    src="/img/home-5/about-us-img.png"
                    alt=""
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
              </div>
            </div>
          </div>
        </section>

        <section className="coverage-area">
          <div className="container">
            <div className="section-title">
              <span className="short-title-2">ABout us</span>
              <h1 className="wow fadeInUp">Learn about how Banca works</h1>
            </div>
            <div className="row mt-50 gy-xl-0 gy-4 text-center">
              <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
                <Link
                  href="#"
                  className="country-widget wow fadeInLeft"
                  data-wow-delay="0.1s"
                >
                  <Image
                    width={120}
                    height={80}
                    src="/img/home-5/country-1.png"
                    alt="country"
                  />
                  <h5>Brazil</h5>
                </Link>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
                <Link
                  href="#"
                  className="country-widget wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <Image
                    width={120}
                    height={80}
                    src="/img/home-5/country-2.png"
                    alt="country"
                  />
                  <h5>Canada</h5>
                </Link>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
                <Link
                  href="#"
                  className="country-widget wow fadeInLeft"
                  data-wow-delay="0.5s"
                >
                  <Image
                    width={120}
                    height={80}
                    src="/img/home-5/country-3.png"
                    alt="country"
                  />
                  <h5>Australia</h5>
                </Link>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
                <Link
                  href="#"
                  className="country-widget wow fadeInLeft"
                  data-wow-delay="0.7s"
                >
                  <Image
                    width={120}
                    height={80}
                    src="/img/home-5/country-4.png"
                    alt="country"
                  />
                  <h5>USA</h5>
                </Link>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
                <Link
                  href="#"
                  className="country-widget wow fadeInLeft"
                  data-wow-delay="0.9s"
                >
                  <Image
                    width={120}
                    height={80}
                    src="/img/home-5/country-5.png"
                    alt="country"
                  />
                  <h5>South Korea</h5>
                </Link>
              </div>

              <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
                <Link
                  href="#"
                  className="country-widget wow fadeInLeft"
                  data-wow-delay="1.1s"
                >
                  <Image
                    width={130}
                    height={90}
                    src="/img/home-5/country-6.png"
                    alt="country"
                  />
                  <h5>Bangladesh</h5>
                </Link>
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
                  <form action="">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter full name"
                      required
                    />
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter email address"
                      required
                    />
                    <button type="submit" className="theme-btn mt-10">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="footer footer-2 pt-lg-130 pt-110 pb-100 pb-lg-125"
        style={{
          backgroundImage: "url('/img/footer/footer-bg-2.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {/* Column 1 */}
              <div className="col-lg-3 col-sm-6 text-center text-sm-start">
                <div className="footer-widget mb-30 wow fadeInLeft">
                  <h4 className="mb-20">We qre on a mission.</h4>
                  <div className="footer-text mb-20">
                    <p>
                      At Banca, we are using cutting-edge technology to
                      transform the industry and deliver financial services that
                      actually work for you.
                    </p>
                  </div>
                  <div className="truspilot mt-40">
                    <Image
                      src="/img/footer/Trustpilot.png"
                      alt="Trustpilot"
                      width={130}
                      height={60}
                    />
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="col-lg-3 col-sm-6 text-center text-sm-start offset-lg-1">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="f-widget-title">
                    <h5>Company</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#">About Us</Link>
                      </li>
                      <li>
                        <Link href="#">Recognition</Link>
                      </li>
                      <li>
                        <Link href="#">Executive Team</Link>
                      </li>
                      <li>
                        <Link href="#">Careers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="col-lg-3 col-sm-6 text-center text-sm-start">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="f-widget-title">
                    <h5>Product</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#">Business Loans | Main</Link>
                      </li>
                      <li>
                        <Link href="#">Loan Calculator</Link>
                      </li>
                      <li>
                        <Link href="#">Refer a Friend</Link>
                      </li>
                      <li>
                        <Link href="#">Partner Program</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 4 */}
              <div className="col-lg-2 col-sm-6 text-center text-sm-start">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="f-widget-title">
                    <h5>Help</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#">Customer Care</Link>
                      </li>
                      <li>
                        <Link href="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="#">Security Center</Link>
                      </li>
                      <li>
                        <Link href="#">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright pt-45">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-4">
                <div className="row align-items-center gy-lg-0 gy-3 gx-0">
                  <div className="col-md-2 text-md-start text-center">
                    <Link href="/">
                      <Image
                        src="/img/logo/Logo.png"
                        alt="logo"
                        width={100}
                        height={30}
                      />
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <div className="line"></div>
                  </div>
                  <div className="col-md-4">
                    <div className="social-button text-center">
                      <Link className="ms-0" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>
                      <Link className="me-0" href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="copyright-text text-md-start text-center">
                    <p>
                      Copyright &copy; Banca 2025.
                      <br className="d-sm-none" />
                      <Link className="ms-3" href="#">
                        Privacy
                      </Link>{' '}
                      |{' '}
                      <Link className="ms-0" href="#">
                        Terms of Use
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default IndexCompany;
