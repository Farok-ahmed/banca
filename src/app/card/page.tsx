import Image from 'next/image';
import Link from 'next/link';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const CardPage = () => {
  return (
    <div>
      <header className="header">
        <div className="header-top py-2 bg_white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="header-info-left">
                  <div className="language-list">
                    <select name="language-list" id="select-lang">
                      <option value="English">English</option>
                      <option value="Bangla">Bangla</option>
                      <option value="French">French</option>
                      <option value="Hindi">Hindi</option>
                    </select>
                  </div>

                  <div className="timestamp ms-4">
                    {' '}
                    <i className="icon_clock_alt"></i> Mon - Fri 10:00-18:00
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="header-info-right">
                  <ul>
                    <li>
                      <img
                        className="img-fluid"
                        src="/img/phone-outline.png"
                        alt="phone"
                      />
                      <a href="tel:01234567890">+01234-567890</a>
                    </li>

                    <li>
                      <i className="icon_mail_alt"></i>
                      <a href="mailto:bancainfo@email.com">
                        bancainfo@email.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-menu header-menu-3" id="sticky">
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <a className="navbar-brand sticky_logo" href="index.html">
                <img
                  className="main"
                  src="/img/logo/Logo.png"
                  srcset="img/logo/Logo@2x.png 2x"
                  alt="logo"
                />
                <img
                  className="sticky"
                  src="/img/logo/Logo-2.png"
                  srcset="img/logo/Logo-2@2x.png 2x"
                  alt="logo"
                />
              </a>
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
                      className="nav-link dropdown-toggle "
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
                        <a href="index.html" className="nav-link">
                          Smart Finance
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-company.html" className="nav-link">
                          Loan Company
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-app.html" className="nav-link">
                          Mobile App
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-simple.html" className="nav-link">
                          Simple Banca
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-loan.html" className="nav-link">
                          Loan Steps
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-finance.html" className="nav-link">
                          Finance Sass App
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-small-bank.html" className="nav-link">
                          Small Bank
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="loan.html"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Loan
                    </a>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="false"
                      data-bs-toggle="dropdown"
                    ></i>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="loan.html">
                          Get loan
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Loan Application
                        </a>
                        <i
                          className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                          aria-hidden="false"
                          data-bs-toggle="dropdown"
                        ></i>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a className="nav-link" href="loan-details.html">
                              Step 01
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="personal-details.html"
                            >
                              Step 02
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="document-upload.html">
                              Step 03
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href="career.html"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Job Pages
                    </a>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="false"
                      data-bs-toggle="dropdown"
                    ></i>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="career.html">
                          Career
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="job-post.html">
                          Jobs
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="job-application.html">
                          Job Application
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                      aria-hidden="false"
                      data-bs-toggle="dropdown"
                    ></i>
                    <ul className="dropdown-menu ">
                      <li className="nav-item">
                        <a className="nav-link active" href="card.html">
                          Cards
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/about-us">
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
                <a
                  className="theme-btn theme-btn-outlined_alt"
                  href="https://themeforest.net/item/banca-banking-business-loan-bootstrap5html-website-template/32788885?s_rank=9"
                  target="_blank"
                >
                  Buy Banca
                </a>
                <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
                  <label htmlFor="something" className="tab-btn tab-btns">
                    <IoMoonOutline name="moon" />
                  </label>
                  <label htmlFor="something" className="tab-btn">
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
        <section className="banner-area-4 pt-145" id="banner_animation">
          <div className="container">
            <div className="row align-items-center pt-75 pb-60">
              <div className="col-lg-6 ">
                <div className="banner-content mb-5 mb-sm-0">
                  <h1 className="wow fadeInUp mb-0">
                    The credit card as it should be.
                  </h1>

                  <p className="wow fadeInUp  mt-20" data-wow-delay="0.2s">
                    Without an annuity, it gives you cashback on all your
                    purchases and access to months without interest.
                  </p>
                  <a
                    href="#"
                    className="wow fadeInUp theme-btn theme-btn-outlined_alt mt-50"
                    data-wow-delay="0.4s"
                  >
                    I want my BancaCard
                  </a>
                </div>
              </div>
              <div className="col-md-6 mx-auto text-center text-sm-end">
                <div className="hero-img wow fadeInRight">
                  <div
                    className="shape"
                    data-parallax='{"x": -120, "y": 90, "rotateZ":0}'
                  >
                    <img
                      data-depth="-0.06"
                      className="layer "
                      src="/img/card/hero-img-2.png"
                      alt="img"
                    />
                  </div>
                  <div
                    className="shape"
                    data-parallax='{"x": -70, "y": 0, "rotateZ":190}'
                  >
                    <img src="/img/card/hero-img-3.png" alt="img" />
                  </div>
                  <div
                    className="shape"
                    data-parallax='{"x": -70, "y": 0, "rotateX":190}'
                  >
                    <img src="/img/card/hero-img-4.png" alt="img" />
                  </div>
                  <div
                    className="shape"
                    data-parallax='{"x": -90, "y": 20, "rotateZ":0}'
                  >
                    <img
                      data-depth="-0.05"
                      className="layer "
                      src="/img/card/hero-img-5.png"
                      alt="img"
                    />
                  </div>
                  <div
                    className="shape"
                    data-parallax='{"x": -250, "y": 100, "rotateY":360}'
                  >
                    <img
                      data-depth="0.05"
                      className="layer "
                      src="/img/card/hero-img-6.png"
                      alt="img"
                    />
                  </div>
                  <div
                    className="shape"
                    data-parallax='{"x": 0, "y": 150, "rotateZ":0}'
                  >
                    <img
                      data-depth="-0.09"
                      className="layer "
                      src="/img/card/hero-img-7.png"
                      alt="img"
                    />
                  </div>
                  <div
                    className="shape"
                    data-parallax='{"x": 0, "y": -90, "rotateZ":0}'
                  >
                    <img src="/img/card/hero-img-8.png" alt="img" />
                  </div>
                  <div
                    className="shape"
                    data-parallax='{"x": 75, "y": -20, "rotateZ":0}'
                  >
                    <img
                      data-depth="0.04"
                      className="layer "
                      src="/img/card/hero-card.png"
                      alt="img"
                    />
                  </div>
                  <img
                    data-parallax='{"x": 50, "y": -50, "rotateZ":0}'
                    className="person-img "
                    src="/img/card/hero-img.png"
                    alt="card"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mplace-logo bg_white pt-80 pb-85">
          <div className="container">
            <div className="row gy-lg-0 gy-4">
              <div className="col-lg-3  wow fadeInLeft pe-0 mr-60">
                <p>
                  ACCEPTABLE TO MILLIONS OF CUSTOMERS WORLDWIDE AND IN TOP
                  MARKETPLACES.
                </p>
              </div>
              <div className="col-lg-8 border-start text-center pl-lg-60">
                <div className="row gy-md-0 gy-4 align-items-center h-100">
                  <div className="col-md-3 col-6">
                    <a href="#">
                      <img
                        className="img-fluid wow fadeInRight"
                        data-wow-delay="0.1s"
                        src="/img/card/company-logo-1.png"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="col-md-3 col-6">
                    <a href="#">
                      <img
                        className="img-fluid wow fadeInRight"
                        data-wow-delay="0.3s"
                        src="/img/card/company-logo-2.png"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="col-md-3 col-6">
                    <a href="#">
                      <img
                        className="img-fluid wow fadeInRight"
                        data-wow-delay="0.5s"
                        src="/img/card/company-logo-3.png"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="col-md-3 col-6">
                    <a href="#">
                      <img
                        className="img-fluid wow fadeInRight"
                        data-wow-delay="0.7s"
                        src="/img/card/company-logo-4.png"
                        alt="logo"
                      />
                    </a>
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
                  <h2 className="wow fadeInUp">Great Features Of Banca Card</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-30 gy-4">
              <div className="col-xl-4 col-md-6">
                <div
                  className="feature-card-widget-5 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <img src="/img/feature/icon-11.svg" alt="icon" />
                  <h4 className="mt-30 mb-15"> Online banking</h4>
                  <p>
                    Online banking, also known as internet banking or web
                    banking, is an electronic payment system.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div
                  className="feature-card-widget-5 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <img src="/img/feature/icon-12.svg" alt="icon" />
                  <h4 className="mt-30 mb-15">Up to 20.000$ limit</h4>
                  <p>
                    Online banking, also known as internet banking or web
                    banking, is an electronic payment system.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div
                  className="feature-card-widget-5 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <img src="/img/feature/icon-13.svg" alt="icon" />
                  <h4 className="mt-30 mb-15">Protection & security</h4>
                  <p>
                    Online banking, also known as internet banking or web
                    banking, is an electronic payment system.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div
                  className="feature-card-widget-5 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <img src="/img/feature/icon-14.svg" alt="icon" />
                  <h4 className="mt-30 mb-15">Mobile application</h4>
                  <p>
                    Online banking, also known as internet banking or web
                    banking, is an electronic payment system.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div
                  className="feature-card-widget-5 wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <img src="/img/feature/icon-15.svg" alt="icon" />
                  <h4 className="mt-30 mb-15">Online Shopping</h4>
                  <p>
                    Online banking, also known as internet banking or web
                    banking, is an electronic payment system.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div
                  className="feature-card-widget-5 wow fadeInUp"
                  data-wow-delay="1.1s"
                >
                  <img src="/img/feature/icon-16.svg" alt="icon" />
                  <h4 className="mt-30 mb-15">Small payments fees</h4>
                  <p>
                    Online banking, also known as internet banking or web
                    banking, is an electronic payment system.
                  </p>
                </div>
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
                    <img src="/img/card/visa.png" alt="logo" />
                    <img src="/img/card/mastercard.png" alt="logo" />
                  </div>
                  <img
                    className="bg-img"
                    src="/img/card/payment-bg.png"
                    alt="bg img"
                  />
                  <img
                    className="img-fluid wow fadeInUp"
                    src="/img/card/credit-card.png"
                    alt="credit-card"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-title text-start">
                  <h2 className="wow fadeInUp">
                    Best Ways to Send Your Money From Anywhere You Like
                  </h2>
                  <p
                    className="border-left pl-10 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    Banca came as a solution to the next generation. Through our
                    portal, you can sit at the comfort of your home, office or
                    pretty much anywhere, and send money to anywhere! Through
                    our strong network.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="payment-system mt-80 wow fadeInRight"
                      data-wow-delay="0.1s"
                    >
                      <img src="/img/card/online-payment.svg" alt="icon" />
                      <h5 className="mt-20 mb-10">Online Payments</h5>
                      <p>We acceept many type payments getway that you love.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="payment-system mt-65 wow fadeInRight"
                      data-wow-delay="0.3s"
                    >
                      <img src="/img/card/safebox.svg" alt="icon" />
                      <h5 className="mt-20 mb-10">Safe Deposit</h5>
                      <p>You can trust us for your deposit. No hidden fee.</p>
                    </div>
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
                  <h2 className="wow fadeInUp">Customize Your Payments</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    Personalize the newly-improved Payment Options Form to
                    include all your payment methods such as, easy monthly
                    payments, credit cards
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-1 order-2">
                <div
                  className="feature-card-widget-6 wow fadeInUp mt-sm-0 mt-5"
                  data-wow-delay="0.1s"
                >
                  <div className="icon mr-20">
                    <img src="/img/card/money-transfer.png" alt="icon" />
                  </div>
                  <div className="card-content">
                    <h6>Set daily maximum transaction limitation.</h6>
                    <p>
                      The daily, weekly, monthly and yearly limits for amount of
                      transactions and total number of transactions.
                    </p>
                  </div>
                </div>
                <div
                  className="feature-card-widget-6 wow fadeInUp mt-30"
                  data-wow-delay="0.3s"
                >
                  <div className="icon mr-20">
                    <img src="/img/card/reminder.png" alt="icon" />
                  </div>
                  <div className="card-content">
                    <h6>Customize your next payment schedule.</h6>
                    <p>
                      The daily, weekly, monthly and yearly limits for amount of
                      transactions and total number of transactions.
                    </p>
                  </div>
                </div>
                <div
                  className="feature-card-widget-6 wow fadeInUp mt-30"
                  data-wow-delay="0.5s"
                >
                  <div className="icon mr-20">
                    <img src="/img/card/refresh.png" alt="icon" />
                  </div>
                  <div className="card-content">
                    <h6>Get latest update about your payments.</h6>
                    <p>
                      The daily, weekly, monthly and yearly limits for amount of
                      transactions and total number of transactions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1 pl-lg-50">
                <div className="card-img mb-5 mb-sm-0">
                  <img
                    className="img-fluid"
                    src="/img/card/card-img-bg.png"
                    alt="bg image"
                  />
                  <div className="shape-1">
                    <img
                      className="layer wow rotateInUpRight"
                      data-wow-delay="1.2s"
                      data-depth="0.2"
                      src="/img/card/Card-image-1.png"
                      alt="card"
                    />
                  </div>
                  <div className="shape-2">
                    <img
                      className="layer wow rotateInUpRight"
                      data-wow-delay="0.6s"
                      data-depth="0.15"
                      src="/img/card/Card-image-2.png"
                      alt="card"
                    />
                  </div>
                  <div className="shape-3">
                    <img
                      className="layer wow rotateInUpRight"
                      data-depth="0.3"
                      src="/img/card/Card-image-3.png"
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
                  <h2 className="wow fadeInUp">Why You Choose Us?</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-55 gy-lg-0 gy-4">
              <div className="col-lg-4">
                <div
                  className="content-box pr-lg-30 pl-lg-30 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <img src="/img/card/layout.svg" alt="icon" />
                  <h4 className="mt-30 mb-15">Easy to Use</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="content-box pr-lg-30 pl-lg-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="line-shape">
                    <img
                      className="wow zoomIn"
                      data-wow-delay="0.1s"
                      src="/img/card/line-shape.png"
                      alt="shape"
                    />
                  </div>
                  <img src="/img/card/salary.svg" alt="icon" />
                  <h4 className="mt-30 mb-15">Faster Payments</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="content-box pr-lg-30 pl-lg-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <img src="/img/card/antivirus.svg" alt="icon" />
                  <h4 className="mt-30 mb-15">100% Secure</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-125 pb-140 choose-card-area bg_disable">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <div className="section-title">
                  <h2 className="wow fadeInUp">
                    Choose Card <br />
                    Considering Your Personal Needs
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    You're considering opening a credit card to build credit. If
                    this is the case, you need to make sure that you act
                    responsibly with your card.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-60 gy-lg-0 gy-4">
              <div className="col-lg-3 col-md-6">
                <div
                  className="credit-card-box-widget wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <img
                    className="w-100"
                    src="img/card/Card-image-4.png"
                    alt="card"
                  />
                  <div className="card-content">
                    <h4>Debit Card</h4>
                    <p>
                      <span>
                        <img src="/img/card/icon-1.png" alt="icon" />
                      </span>
                      Max: 60 days
                    </p>
                    <p>
                      <span>
                        <img src="/img/card/icon-2.png" alt="icon" />
                      </span>
                      Payment fee: 1%
                    </p>
                    <p>
                      <span>
                        <img src="/img/card/icon-3.png" alt="icon" />
                      </span>
                      Max credit: $20.000
                    </p>
                    <a href="#" className="mt-25">
                      Learn more <i className="arrow_right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="credit-card-box-widget wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <img
                    className="w-100"
                    src="/img/card/Card-image-5.png"
                    alt="card"
                  />
                  <div className="card-content">
                    <h4>Credit Card</h4>
                    <p>
                      <span>
                        <img src="/img/card/icon-1.png" alt="icon" />
                      </span>
                      Max: 60 days
                    </p>
                    <p>
                      <span>
                        <img src="/img/card/icon-2.png" alt="icon" />
                      </span>
                      Payment fee: 1%
                    </p>
                    <p>
                      <span>
                        <img src="/img/card/icon-3.png" alt="icon" />
                      </span>
                      Max credit: $20.000
                    </p>
                    <a href="#" className="mt-25">
                      Learn more <i className="arrow_right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="credit-card-box-widget wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <img
                    className="w-100"
                    src="/img/card/Card-image-6.png"
                    alt="card"
                  />
                  <div className="card-content">
                    <h4>MasterCard</h4>
                    <p>
                      <span>
                        <img src="/img/card/icon-1.png" alt="icon" />
                      </span>
                      Max: 60 days
                    </p>
                    <p>
                      <span>
                        <img src="/img/card/icon-2.png" alt="icon" />
                      </span>
                      Payment fee: 1%
                    </p>
                    <p>
                      <span>
                        <img src="/img/card/icon-3.png" alt="icon" />
                      </span>
                      Max credit: $20.000
                    </p>
                    <a href="#" className="mt-25">
                      Learn more <i className="arrow_right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="credit-card-box-widget wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <img
                    className="w-100"
                    src="/img/card/Card-image-7.png"
                    alt="card"
                  />
                  <div className="card-content">
                    <h4>Visa Card</h4>
                    <p>
                      <span>
                        <img src="/img/card/icon-1.png" alt="icon" />
                      </span>
                      Max: 60 days
                    </p>
                    <p>
                      <span>
                        <img src="/img/card/icon-2.png" alt="icon" />
                      </span>
                      Payment fee: 1%
                    </p>
                    <p>
                      <span>
                        <img src="/img/card/icon-3.png" alt="icon" />
                      </span>
                      Max credit: $20.000
                    </p>
                    <a href="#" className="mt-25">
                      Learn more <i className="arrow_right"></i>
                    </a>
                  </div>
                </div>
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
              <img src="/img/card/right-arrow.png" alt="img" />
            </div>

            <div
              className="shape"
              data-parallax='{"x": 200, "y": 90, "rotateZ":0}'
            >
              <div className="fly-msg">
                <img src="/img/card/mail.png" alt="" />
                <img src="/img/card/wings-1.png" alt="" />
                <img src="/img/card/wings-2.png" alt="" />
              </div>
            </div>
            <div
              className="shape"
              data-parallax='{"x": 0, "y": 0, "rotateZ":-6}'
            >
              <img
                className="wow fadeInRight"
                src="/img/card/postbox.png"
                alt="img"
              />
            </div>
            <div
              className="shape"
              data-parallax='{"x": -200, "y": 0, "rotateZ":0}'
            >
              <img src="/img/card/cloud.png" alt="img" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="cta-content text-black wow fadeInLeft">
                  <h5>Want to know about our offers first?</h5>
                  <h2>Subscribe our newsletter</h2>

                  <div className="input-group mt-40">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your  email address"
                    />
                    <a href="#" className="input-append theme-btn theme-btn-lg">
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer footer-3">
        <div className="footer-top  pt-lg-130 pb-lg-115 pt-105 pb-105">
          <div className="container">
            <div className="row gx-0">
              <div className="col-lg-4 col-sm-6 text-center text-sm-start ms-0 ">
                <div className="footer-widget mb-30 wow fadeInLeft">
                  <div className="footer-text mb-20">
                    <p>
                      Banca is a leading bank in the worldzone and a prominent
                      international banking institution
                    </p>
                  </div>

                  <span className="overline">COTATION</span>

                  <div className="footer-bold">
                    <span className="counter">
                      $<span>35.105</span>{' '}
                    </span>
                    <span className="counter">
                      -<span>0.46</span>%{' '}
                    </span>
                  </div>
                  <p className="time">2021-01-05 14:00 (INTERNATIONAL TIME)</p>
                </div>
              </div>

              <div className="col-lg-2 col-sm-6 text-center text-sm-start ms-lg-5 ">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="f-widget-title">
                    <h5>Banca at a Glance</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="#"> Our core Businesses</a>
                      </li>
                      <li>
                        <a href="#"> Our 'company purpose'</a>
                      </li>
                      <li>
                        <a href="#"> Jobs & Careers</a>
                      </li>
                      <li>
                        <a href="#"> Our Responsibility</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2  col-sm-6 text-center text-sm-start ms-lg-5">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="f-widget-title">
                    <h5>Publications</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="#"> Compliance Publications</a>
                      </li>
                      <li>
                        <a href="#"> Annual Reports</a>
                      </li>
                      <li>
                        <a href="#"> CSR Reports</a>
                      </li>
                      <li>
                        <a href="#"> Financial documentation</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 text-center text-sm-start me-0 ms-lg-5">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="f-widget-title">
                    <h5>Direct Access</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="#">Our news</a>
                      </li>
                      <li>
                        <a href="#">Our press releases</a>
                      </li>
                      <li>
                        <a href="#">Our job offers</a>
                      </li>
                      <li>
                        <a href="#">Our websites</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright pt-25 pb-25">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 text-center text-lg-start">
                <Link href="index.html" className="p-0 m-0">
                  <Image
                    width={90}
                    height={35}
                    src="/img/logo/Logo.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-lg-5 text-center my-3 my-sm-0">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; Banca 2025.
                    <br className="d-sm-none" />{' '}
                    <a className="ms-2" href="#">
                      Privacy
                    </a>{' '}
                    |
                    <a className="ms-0" href="#">
                      Term of Use
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-center text-lg-end ">
                <div className="social-button">
                  <Link href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CardPage;
