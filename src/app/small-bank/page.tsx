'use client'
import Image from 'next/image';
import Link from 'next/link';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';

const SmallBank = () => {
  const [startDate, setStartDate] = useState<Date[] | null>(null);
  const [endDate, setEndDate] = useState<Date[] | null>(null);
  return (
    <div>
      <header className="header">
        <div className="header-menu header-menu-4" id="sticky">
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <Link className="navbar-brand sticky_logo" href="index.html">
                <Image
                  width={110}
                  height={35}
                  className="main"
                  src="/img/logo/Logo.png"
                  // srcset="img/logo/Logo@2x.png 2x"
                  alt="logo"
                />
                <Image
                  width={110}
                  height={35}
                  className="sticky"
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
                    <Link
                      href="#"
                      className="nav-link dropdown-toggle active"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </Link>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="true"
                      data-bs-toggle="dropdown"
                    ></i>
                    <ul className="dropdown-menu">
                      <li className="nav-item ">
                        <Link href="/" className="nav-link active">
                          Smart Finance
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/index-company" className="nav-link ">
                          Loan Company
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/mobile-app" className="nav-link">
                          Mobile App
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/simple-banca" className="nav-link ">
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
                      <li className="nav-item active">
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
                            <Link
                              className="nav-link"
                              href="document-upload.html"
                            >
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
                        <Link className="nav-link" href="contact.html">
                          Contact Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="error.html">
                          404 Error
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </Link>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="false"
                      data-bs-toggle="dropdown"
                    ></i>
                    <ul className="dropdown-menu ">
                      <li className="nav-item">
                        <Link className="nav-link" href="blog.html">
                          Blog Listing
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="blog-details.html">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <Link
                  className="theme-btn theme-btn-rounded-2 theme-btn-alt"
                  href="https://themeforest.net/item/banca-banking-business-loan-bootstrap5html-website-template/32788885?s_rank=9"
                  target="_blank"
                >
                  Buy Banca
                </Link>
                <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
                  <label htmlFor="something" className="tab-btn tab-btns">
                    {/* <ion-icon name="moon"></ion-icon> */}
                    <IoMoonOutline name="moon" />
                  </label>
                  <label htmlFor="something" className="tab-btn">
                    {/* <ion-icon name="sunny"></ion-icon> */}
                    <IoSunnyOutline name="sunny" />
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
        <section className="bank-banner-area">
          <Image
            width={300}
            height={90}
            className="wave_img"
            src="/img/bank/wave.png"
            alt=""
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="bank-banner-content">
                  <h5 className="wow fadeInUp" data-wow-delay="0.2s">
                    Manage your Finance
                  </h5>
                  <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                    Your <span className="underline-shape">banking</span> made
                    easier.
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    Inventore veritatis et architecto beatae vitaie dicta
                    explicab nemo ipsam volupetateme voluptashte aspernatur.
                  </p>
                  <div
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
                  </div>
                  <ul
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
                  </ul>
                  <div
                    className="active-user d-flex align-items-center wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="user-img-inner">
                      <Image
                        width={200}
                        height={200}
                        src="/img/bank/active-user1.jpg"
                        alt=""
                      />
                      <Image
                        width={200}
                        height={200}
                        src="/img/bank/active-user2.jpg"
                        alt=""
                      />
                      <Image
                        width={200}
                        height={200}
                        src="/img/bank/active-user3.jpg"
                        alt=""
                      />
                    </div>
                    5K+ ⭐ Active users
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bank-card-img">
                  <div className="bank-card wow fadeInUp" data-wow-delay="0.8s">
                    <Image
                      width={800}
                      height={550}
                      data-parallax='{"x": 0, "y": 90}'
                      src="/img/bank/card-3.png"
                      alt=""
                    />
                  </div>
                  <div className="bank-card wow fadeInUp" data-wow-delay="0.5s">
                    <Image
                      width={800}
                      height={600}
                      data-parallax='{"x": 0, "y": 50}'
                      src="/img/bank/card-2.png"
                      alt=""
                    />
                  </div>
                  <div className="bank-card wow fadeInUp" data-wow-delay="0.3s">
                    <Image
                      width={800}
                      height={560}
                      src="/img/bank/card-1.png"
                      alt=""
                    />
                  </div>
                  <Image
                    width={40}
                    height={50}
                    className="shap one"
                    src="/img/bank/line.png"
                    alt=""
                  />
                  <Image
                    width={30}
                    height={30}
                    data-parallax='{"x": 0, "y": 50, "rotateZ": 305}'
                    className="shap two"
                    src="/img/bank/Star-2.png"
                    alt=""
                  />
                  <Image
                    width={30}
                    height={30}
                    data-parallax='{"x": 0, "y": 0, "rotateZ": 305}'
                    className="shap three"
                    src="/img/bank/Star-3.png"
                    alt=""
                  />
                  <Image
                    width={30}
                    height={30}
                    data-parallax='{"x":20, "y": 0, "rotateZ": 305}'
                    className="shap four"
                    src="/img/bank/Star-4.png"
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
                <div className="fact-item wow fadeInUp">
                  <div className="icon">
                    <Image
                      width={40}
                      height={40}
                      src="/img/bank/single-icon.png"
                      alt=""
                    />
                  </div>
                  <h3>Single term fees</h3>
                  <p>
                    Realtime problem solving is not just about time, it is about
                    time this allows you to solve within a specified time
                    problem than you would.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="fact-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon">
                    <Image
                      width={40}
                      height={40}
                      src="/img/bank/world-icon.png"
                      alt=""
                    />
                  </div>
                  <h3>Worldwide Locations</h3>
                  <p>
                    Realtime problem solving is not just about time, it is about
                    time this allows you to solve within a specified time
                    problem than you would.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="fact-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon">
                    <Image
                      width={40}
                      height={40}
                      src="/img/bank/sheld-icon.png"
                      alt=""
                    />
                  </div>
                  <h3>Safe and protected</h3>
                  <p>
                    Realtime problem solving is not just about time, it is about
                    time this allows you to solve within a specified time
                    problem than you would.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="process-area bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="section-title bank-section-title text-start">
                  <span className="short-title-2 wow fadeInUp">
                    OUR PROCESS
                  </span>
                  <h1 className="wow fadeInUp">
                    Get loan from 4 simple{' '}
                    <span className="underline-shape">process</span>
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    Choose your training and register for free. If you are a
                    freelancer, the courses are entirely taken care of you have
                    nothing to pay and no money to advance.
                  </p>
                  <a
                    className="read-more wow fadeInUp"
                    data-wow-delay="0.3s"
                    href="#"
                  >
                    Learn more about it <i className="arrow_right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-7 ps-lg-5">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <h2 className="number">01</h2>
                      <h4>Check Eligibility</h4>
                      <p>
                        Choose your training and register for free if you are a
                        freelancer the courses are entirely taken care.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <h2 className="number">02</h2>
                      <h4>Apply for loan</h4>
                      <p>
                        Choose your training and register for free if you are a
                        freelancer the courses are entirely taken care.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <h2 className="number">03</h2>
                      <h4>Get Approved</h4>
                      <p>
                        Choose your training and register for free if you are a
                        freelancer the courses are entirely taken care.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <h2 className="number">04</h2>
                      <h4>Get your money</h4>
                      <p>
                        Choose your training and register for free if you are a
                        freelancer the courses are entirely taken care.
                      </p>
                    </div>
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
                    <span className="short-title-2 wow fadeInUp">
                      Our Application
                    </span>
                    <h1 className="wow fadeInUp">
                      All your{' '}
                      <span className="underline-shape">financials</span>
                      in one single app.
                    </h1>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      It is a long established fact that a reader will be
                      distracted by there readable content of a page when
                      looking at its layout point .
                    </p>
                    <ul
                      className="list-unstyled feature-list wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <li>
                        {' '}
                        <i className="fas fa-check-circle"></i> It is long
                        established fact that reader will be.{' '}
                      </li>
                      <li>
                        {' '}
                        <i className="fas fa-check-circle"></i> It is long
                        established fact distracted the readable.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <Image
                  width={500}
                  height={550}
                  className="wow fadeInUp"
                  data-wow-delay="0.4s"
                  src="/img/bank/mobile.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bank-card-area">
          <div className="container">
            <div className="section-title bank-section-title mb-80">
              <span className="short-title-2 wow fadeInUp">Cards</span>
              <h1 className="wow fadeInUp text-white">
                We offer variety of <br />
                <span className="underline-shape">cards</span> with features
              </h1>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <ul
                  className="nav nav-tabs bank-card-tab"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item wow fadeInUp" role="presentation">
                    <button
                      className="nav-link bank-card-item active"
                      id="freelancer-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#freelancer"
                      type="button"
                      role="tab"
                      aria-controls="freelancer"
                      aria-selected="true"
                    >
                      <h5>Standard Card</h5>
                      <p>
                        Choose your training and register for free. If you are a
                        freelancer, the courses are entirely taken care you.
                      </p>
                    </button>
                  </li>
                  <li
                    className="nav-item wow fadeInUp"
                    data-wow-delay="0.2s"
                    role="presentation"
                  >
                    <button
                      className="nav-link bank-card-item"
                      id="startup-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#startup"
                      type="button"
                      role="tab"
                      aria-controls="startup"
                      aria-selected="false"
                    >
                      <h5>Premium Card</h5>
                      <p>
                        Choose your training and register for free. If you are a
                        freelancer, the courses are entirely taken care you.
                      </p>
                    </button>
                  </li>
                  <li
                    className="nav-item wow fadeInUp"
                    data-wow-delay="0.3s"
                    role="presentation"
                  >
                    <button
                      className="nav-link bank-card-item"
                      id="business-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#business"
                      type="button"
                      role="tab"
                      aria-controls="business"
                      aria-selected="false"
                    >
                      <h5>Business Card</h5>
                      <p>
                        Choose your training and register for free. If you are a
                        freelancer, the courses are entirely taken care you.
                      </p>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div
                  className="tab-content bank-card-content wow fadeInUp"
                  id="myTabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="freelancer"
                    role="tabpanel"
                    aria-labelledby="freelancer-tab"
                  >
                    <div className="card-img">
                      <Image
                        width={500}
                        height={300}
                        className="card_one"
                        src="/img/bank/f-card1.png"
                        alt=""
                      />
                      <Image
                        width={500}
                        height={300}
                        className="card_two"
                        src="/img/bank/f-card2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="startup"
                    role="tabpanel"
                    aria-labelledby="startup-tab"
                  >
                    <div className="card-img">
                      <Image
                        width={40}
                        height={40}
                        className="card_one"
                        src="/img/bank/f_card3.png"
                        alt=""
                      />
                      <Image
                        width={40}
                        height={40}
                        className="card_two"
                        src="/img/bank/f_card4.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="business"
                    role="tabpanel"
                    aria-labelledby="business-tab"
                  >
                    <div className="card-img">
                      <Image
                        width={40}
                        height={40}
                        className="card_one"
                        src="/img/bank/f_card5.png"
                        alt=""
                      />
                      <Image
                        width={40}
                        height={40}
                        className="card_two"
                        src="/img/bank/f_card6.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="integrate-area bg-white">
          <div className="container">
            <div className="section-title bank-section-title mb-80">
              <span className="short-title-2">Our Integrations</span>
              <h1 className="wow fadeInUp">
                A variety of tools you
                <br />
                can <span className="underline-shape">integrate</span> with
              </h1>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div
                  className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="card-img">
                    <Image
                      width={40}
                      height={40}
                      src="/img/bank/slack.png"
                      alt="feature svg"
                    />
                  </div>
                  <h4>Slack</h4>
                  <p>
                    Choose your training and register for free if you are a
                    freelancer the courses are entire taken care about the way
                    to.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="card-img">
                    <Image
                      width={40}
                      height={40}
                      src="/img/bank/dropbox.png"
                      alt="feature svg"
                    />
                  </div>
                  <h4>Dropbox</h4>
                  <p>
                    Choose your training and register for free if you are a
                    freelancer the courses are entire taken care about the way
                    to.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="card-img">
                    <Image
                      width={40}
                      height={40}
                      src="/img/bank/google_drive.png"
                      alt="feature svg"
                    />
                  </div>
                  <h4>Google Drive</h4>
                  <p>
                    Choose your training and register for free if you are a
                    freelancer the courses are entire taken care about the way
                    to.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="card-img">
                    <Image
                      width={40}
                      height={40}
                      src="/img/bank/jira.png"
                      alt="feature svg"
                    />
                  </div>
                  <h4>Jira</h4>
                  <p>
                    Choose your training and register for free if you are a
                    freelancer the courses are entire taken care about the way
                    to.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="card-img">
                    <Image
                      width={40}
                      height={40}
                      src="/img/bank/zendesk.png"
                      alt="feature svg"
                    />
                  </div>
                  <h4>Zendesk</h4>
                  <p>
                    Choose your training and register for free if you are a
                    freelancer the courses are entire taken care about the way
                    to.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="card-img">
                    <Image
                      width={40}
                      height={40}
                      src="/img/bank/mailchimp.png"
                      alt="feature svg"
                    />
                  </div>
                  <h4>Mailchimp</h4>
                  <p>
                    Choose your training and register for free if you are a
                    freelancer the courses are entire taken care about the way
                    to.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="map_area bg-white">
          <div className="container">
            <div className="section-title bank-section-title mb-80">
              <span className="short-title-2">Worldwide Reach</span>
              <h1>
                Our customer base
                <br /> reaches{' '}
                <span className="underline-shape">worldwide</span>
              </h1>
            </div>
            <div className="map_inner">
              <Image width={1200} height={600} src="/img/bank/map.png" alt="" />
              <ul className="list-unstyled map_list">
                <li className="active wow zoomIn" data-wow-delay="0.2s">
                  <Image
                    width={80}
                    height={70}
                    src="/img/bank/flag-1.png"
                    alt=""
                  />
                </li>
                <li className="wow zoomIn" data-wow-delay="0.4s">
                  <Image
                    width={80}
                    height={70}
                    src="/img/bank/flag-2.png"
                    alt=""
                  />
                </li>
                <li className="wow zoomIn" data-wow-delay="0.5s">
                  <Image
                    width={80}
                    height={70}
                    src="/img/bank/flag-3.png"
                    alt=""
                  />
                </li>
                <li className="wow zoomIn" data-wow-delay="0.6s">
                  <Image
                    width={80}
                    height={70}
                    src="/img/bank/flag-4.png"
                    alt=""
                  />
                </li>
                <li className="wow zoomIn" data-wow-delay="0.7s">
                  <Image
                    width={80}
                    height={70}
                    src="/img/bank/flag-5.png"
                    alt=""
                  />
                </li>
                <li className="wow zoomIn" data-wow-delay="0.8s">
                  <Image
                    width={80}
                    height={70}
                    src="/img/bank/flag-6.png"
                    alt=""
                  />
                </li>
                <li className="wow zoomIn" data-wow-delay="0.9s">
                  <Image
                    width={80}
                    height={70}
                    src="/img/bank/flag-7.png"
                    alt=""
                  />
                </li>
                <li className="wow zoomIn" data-wow-delay="0.95s">
                  <Image
                    width={80}
                    height={70}
                    src="/img/bank/flag-8.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="calculator-area-three">
          <div className="container">
            <div className="section-title bank-section-title mb-80">
              <span className="short-title-2">Loan Calculator</span>
              <h1 className="wow fadeInUp">
                <span className="underline-shape">Calculate</span> your loan
                <br />& get loan details
              </h1>
            </div>

            <div className="calculator-widget-2 mt-50">
              <div className="row  gy-lg-0 gy-3">
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

        <section className="saas-clients-logo bg-white pt-100">
          <div className="container">
            <p
              className="wow fadeInUp clients-logo-title"
              data-wow-delay="0.3s"
            >
              Trust Trusted by over <span>10,000+</span> customers wordwide
            </p>
            <div className="row gy-md-0 gy-4 align-items-center h-100">
              <div className="col">
                <Link href="#">
                  <Image
                    width={100}
                    height={120}
                    className="clients-logo img-fluid wow fadeInRight"
                    data-wow-delay="0.1s"
                    src="/img/saas-app/c_logo_1.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col">
                <Link href="#">
                  <Image
                    width={100}
                    height={120}
                    className="clients-logo img-fluid wow fadeInRight"
                    data-wow-delay="0.3s"
                    src="/img/saas-app/c_logo_2.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col">
                <Link href="#">
                  <Image
                    width={100}
                    height={120}
                    className="clients-logo img-fluid wow fadeInRight"
                    data-wow-delay="0.5s"
                    src="/img/saas-app/c_logo_3.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col">
                <Link href="#">
                  <Image
                    width={100}
                    height={120}
                    className="clients-logo img-fluid wow fadeInRight"
                    data-wow-delay="0.7s"
                    src="/img/saas-app/c_logo_4.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col">
                <Link href="#">
                  <Image
                    width={100}
                    height={120}
                    className="clients-logo img-fluid wow fadeInRight"
                    data-wow-delay="0.7s"
                    src="/img/saas-app/c_logo_5.png"
                    alt="logo"
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
                  <div className="cta-content wow fadeInUp">
                    <h2>Try it for free</h2>
                    <p>
                      Choose your training and register for free. If you are a
                      freelancer, the courses are entirely taken care.
                    </p>
                    <Link
                      href="#"
                      className="wow fadeInUp theme-btn theme-btn-lg"
                    >
                      Get started now <i className="arrow_right-up"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 text-end">
                  <Image
                    width={330}
                    height={300}
                    className="wow fadeInUp"
                    data-wow-delay="0.2s"
                    src="/img/bank/mobile-two.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bank-footer-area">
        <div className="container">
          <div className="footer_top">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="f-widget about-widget">
                  <Link href="index.html" className="p-0 m-0">
                    <Image
                      width={90}
                      height={30}
                      src="/img/logo/Logo.png"
                      alt="logo"
                    />
                  </Link>
                  <p>
                    It is difficult to find examples of lorem ipsum in use
                    before Letrase.
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="f-widget link-widget">
                  <h4 className="f-widget-title">Company</h4>
                  <ul className="footer-link">
                    <li>
                      <Link href="#">Pricing</Link>
                    </li>
                    <li>
                      <Link href="#">Account Information</Link>
                    </li>
                    <li>
                      <Link href="#">About</Link>
                    </li>
                    <li>
                      <Link href="#">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="f-widget link-widget">
                  <h4 className="f-widget-title">Resources</h4>
                  <ul className="footer-link">
                    <li>
                      <Link href="#">News</Link>
                    </li>
                    <li>
                      <Link href="#">Blog</Link>
                    </li>
                    <li>
                      <Link href="#">Help Center</Link>
                    </li>
                    <li>
                      <Link href="#">Tutorials</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="f-widget link-widget">
                  <h4 className="f-widget-title">Design Online</h4>
                  <ul className="footer-link">
                    <li>
                      <Link href="#">Logo Maker</Link>
                    </li>
                    <li>
                      <Link href="#">Cover Photo Maker</Link>
                    </li>
                    <li>
                      <Link href="#">Banner Maker</Link>
                    </li>
                    <li>
                      <Link href="#">Branded Templates</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="f-widget link-widget">
                  <h4 className="f-widget-title">Tools</h4>
                  <ul className="footer-link">
                    <li>
                      <Link href="#">Templates</Link>
                    </li>
                    <li>
                      <Link href="#">PDF Editor</Link>
                    </li>
                    <li>
                      <Link href="#">Animator</Link>
                    </li>
                    <li>
                      <Link href="#">Image Resizer</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="d-flex">
                <p className="copyright-text">
                  <Link href="#">Terms of Service</Link>
                  <Link href="#">Privacy Policy</Link>
                  <Link href="#">Cookies Policy</Link>
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 text-end">
              <div className="f-social">
                <Link href="#">
                  <i className="social_facebook"></i>
                </Link>
                <Link href="#">
                  <i className="social_youtube"></i>
                </Link>
                <Link href="#">
                  <i className="social_instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmallBank;
