import Link from 'next/link';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Aboutpage = () => {
  return (
    <div>
      <header className="header">
        <div className="header-top py-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="header-info-left">
                  <div className="language-list">
                    <select name="page-language-list" id="select-lang">
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
                        src="/img/phone-outline-white.png"
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

        <div className="header-menu header-menu-2 bg_white" id="sticky">
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <Link className="navbar-brand" href="index.html">
                <img
                  src="/img/logo/Logo-2.png"
                  srcset="img/logo/Logo-2@2x.png 2x"
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
                        <a href="index-simple.html" className="nav-link ">
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
                        <a className="nav-link" href="card.html">
                          Cards
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="about.html">
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/contact-us">
                          Contact Us
                        </Link>
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
        <section
          className="banner-area-2 pt-145"
          style={{ backgroundImage: `url(img/banner/about-bg.png)` }}
        >
          <div className="container">
            <div className="row align-items-center pt-130 pb-140">
              <div className="col-xl-6 col-lg-8">
                <div className="banner-content py-5">
                  <div className="section-title text-start">
                    <span className="short-title wow fadeInUp">ABOUT US</span>
                    <h1 className="wow fadeInUp mb-0" data-wow-delay="0.2s">
                      Believing, banking and achieving different
                    </h1>
                  </div>
                  <a
                    className="theme-btn-2 theme-btn-primary mt-45 wow fadeInUp"
                    data-wow-delay="0.4s"
                    href="#"
                  >
                    <span className="arrow">
                      <span className="horizontal-line"></span>
                    </span>
                    View our 2019 Annual Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg_white pt-90 pb-160 ">
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
                      trust our clients have in our ability to connect them to a
                      global banking network to seamlessly achieve their
                      financial aspirations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="statistics-area pt-135 pb-140 bg_disable">
          <div className="container">
            <div className="row gy-lg-0 gy-4 ">
              <div className="col-lg-7">
                <div className="statistics-widget-2 wow fadeInUp">
                  <div className="row gx-0">
                    <div className="col-7">
                      <div className="statistics-slider h-100">
                        <div className="widget-content  widget-1">
                          <h1 className="stat-counter">15,000</h1>
                          <p>We employ 15,000 people around the world</p>
                        </div>
                        <div className="widget-content  widget-1">
                          <h1 className="stat-counter">10,000</h1>
                          <p>We employ 15,000 people around the world</p>
                        </div>
                        <div className="widget-content  widget-1">
                          <h1 className="stat-counter">25,000</h1>
                          <p>We employ 15,000 people around the world</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-5">
                      <img
                        className="img-fluid"
                        src="/img/statistics/img-1.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div
                  className="statistics-widget-2  wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="widget-content widget-2">
                    <h1 className="stat-counter">125</h1>
                    <p>Our colleagues come from 125 different countries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-30 pb-30 gy-4 gy-lg-0">
              <div className="col-lg-7">
                <div className="row gy-4 gy-lg-0">
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="statistics-widget-2 wow fadeInRight"
                      data-wow-delay="0.1s"
                    >
                      <div className="widget-content widget-3">
                        <h1 className="stat-counter">75</h1>
                        <p>More than 75 years in business</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="statistics-widget-2 wow fadeInRight"
                      data-wow-delay="0.3s"
                    >
                      <div className="widget-content widget-4">
                        <h1 className="stat-counter">450</h1>
                        <p>450 branches worldwide</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 ">
                    <div
                      className="statistics-widget-2 wow fadeInRight"
                      data-wow-delay="0.5s"
                    >
                      <div className="widget-content widget-5">
                        <h1 className="stat-counter">25</h1>
                        <p>We are present in 25 markets</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 ">
                <div
                  className="statistics-widget-2 wow fadeInRight"
                  data-wow-delay="0.7s"
                >
                  <div
                    className="widget-content widget-6"
                    style={{ backgroundImage: `url(img/statistics/img-2.png)` }}
                  >
                    <h2>Best Consumer Digital Bank</h2>
                    <p>Global Finance 2020</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gy-4 gy-md-0">
              <div className="col-md-5">
                <div
                  className="statistics-widget-2 wow fadeInLeft"
                  data-wow-delay="0.1s"
                >
                  <div
                    className="widget-content widget-7"
                    style={{ backgroundImage: `url(img/statistics/img-3.png)` }}
                  >
                    <h1 className="stat-counter">35</h1>
                    <p>Global Finance 2020</p>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div
                  className="statistics-widget-2 wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  <div className="row gx-0">
                    <div className="col-5">
                      <img
                        className="img-fluid"
                        src="/img/statistics/img-6.png"
                        alt="img"
                      />
                    </div>
                    <div className="col-7">
                      <div
                        className="widget-content widget-8"
                        style={{
                          backgroundImage: `url(img/statistics/img-4.png)`,
                        }}
                      >
                        <h1 className="stat-counter">2</h1>
                        <p>
                          We’re listed on two of Asia’s largest stock exchanges
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recognition-area bg_white pt-135 pb-140">
          <div className="container">
            <div className="section-title text-start">
              <span className="short-title mt-0 wow fadeInUp">Recognition</span>
              <h2 className="mb-0 wow fadeInUp" data-wow-delay="0.2s">
                Milestones and Accolades
              </h2>
            </div>

            <div className="recognition-widget pt-70">
              <div className="row gy-4 gy-lg-0">
                <div className="col-lg-3 col-5">
                  <div
                    className="widget-navigation wow fadeInUp pe-lg-4"
                    data-wow-delay="0.1s"
                  >
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          id="2020-tab"
                          data-bs-toggle="tab"
                          href="#twenty"
                          role="tab"
                          aria-controls="twenty"
                          aria-selected="true"
                        >
                          2020
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="2019-tab"
                          data-bs-toggle="tab"
                          href="#nineteen"
                          role="tab"
                          aria-controls="nineteen"
                          aria-selected="false"
                        >
                          2019
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="2018-tab"
                          data-bs-toggle="tab"
                          href="#eighteen"
                          role="tab"
                          aria-controls="eighteen"
                          aria-selected="false"
                        >
                          2018
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          id="2017-tab"
                          data-bs-toggle="tab"
                          href="#seventeen"
                          role="tab"
                          aria-controls="seventeen"
                          aria-selected="false"
                        >
                          2017
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link "
                          id="2016-tab"
                          data-bs-toggle="tab"
                          href="#sixteen"
                          role="tab"
                          aria-controls="sixteen"
                          aria-selected="false"
                        >
                          2016
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link "
                          id="2015-tab"
                          data-bs-toggle="tab"
                          href="#fifteen"
                          role="tab"
                          aria-controls="fifteen"
                          aria-selected="false"
                        >
                          2015
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link "
                          id="2014-tab"
                          data-bs-toggle="tab"
                          href="#lessfifteen"
                          role="tab"
                          aria-controls="lessfifteen"
                          aria-selected="false"
                        >
                          2014 and before
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-7">
                  <div
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
                      <p>The First Mauritian Bank to join the GRI Community</p>
                      <p>
                        Instant account opening with a Customer On-boarding App
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nineteen"
                      role="tabpanel"
                      aria-labelledby="2019-tab"
                    >
                      <h3>2019</h3>
                      <p>The First Mauritian Bank to join the GRI Community</p>
                      <p>
                        Instant account opening with a Customer On-boarding App
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="eighteen"
                      role="tabpanel"
                      aria-labelledby="2018-tab"
                    >
                      <h3>2018</h3>
                      <p>The First Mauritian Bank to join the GRI Community</p>
                      <p>
                        Instant account opening with a Customer On-boarding App
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="seventeen"
                      role="tabpanel"
                      aria-labelledby="2017-tab"
                    >
                      <h3>2017</h3>
                      <p>The First Mauritian Bank to join the GRI Community</p>
                      <p>
                        Instant account opening with a Customer On-boarding App
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="sixteen"
                      role="tabpanel"
                      aria-labelledby="2016-tab"
                    >
                      <h3>2016</h3>
                      <p>The First Mauritian Bank to join the GRI Community</p>
                      <p>
                        Instant account opening with a Customer On-boarding App
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="fifteen"
                      role="tabpanel"
                      aria-labelledby="2015-tab"
                    >
                      <h3>2015</h3>
                      <p>The First Mauritian Bank to join the GRI Community</p>
                      <p>
                        Instant account opening with a Customer On-boarding App
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="lessfifteen"
                      role="tabpanel"
                      aria-labelledby="2014-tab"
                    >
                      <h3>2014 and before</h3>
                      <p>The First Mauritian Bank to join the GRI Community</p>
                      <p>
                        Instant account opening with a Customer On-boarding App
                      </p>
                      <p>The First Mauritian Bank to join the GRI Community</p>
                      <p>
                        Instant account opening with a Customer On-boarding App
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 offset-xl-1 pr-lg-35 pl-lg-35">
                  <div
                    className="accolades-widget wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="accolades-header d-flex justify-content-between align-items-end">
                      <h2>Awards</h2>
                      <img src="/img/recognition/icon.svg" alt="icon" />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="leadership-area pt-135 pb-140 bg_disable">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-sm-8">
                <div className="section-title text-start wow fadeInRight">
                  <span className="short-title mt-0">Leadership</span>
                  <h2 className="mb-0">Meet our leadership team</h2>
                </div>
              </div>
              <div className="col-sm-4 text-end">
                <a
                  href="#"
                  className="theme-btn theme-btn-outlined wow fadeInLeft"
                >
                  {' '}
                  see more <i className="arrow_carrot-right "></i>
                </a>
              </div>
            </div>

            <div className="row pt-65 gy-md-0 gy-4">
              <div className="col-lg-4">
                <div
                  className="single-leadership-widget wow fadeInUp "
                  data-wow-delay="0.1s"
                >
                  <a href="#">
                    <img src="/img/leadership/img-1.png" alt="leader-1" />
                    <div className="leader-info">
                      <h5>Eldridge Robles</h5>
                      <p>Co-Founder, Conis</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className="single-leadership-widget wow fadeInUp "
                  data-wow-delay="0.3s"
                >
                  <a href="#">
                    <img src="/img/leadership/img-2.png" alt="leader-2" />
                    <div className="leader-info">
                      <h5>Eldridge Robles</h5>
                      <p>Co-Founder, Conis</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="single-leadership-widget wow fadeInUp "
                  data-wow-delay="0.5s"
                >
                  <a href="#">
                    <img src="/img/leadership/img-3.png" alt="leader-3" />
                    <div className="leader-info">
                      <h5>Eldridge Robles</h5>
                      <p>Co-Founder, Conis</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-area-2 pt-80 pb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="cta-content text-black wow fadeInRight">
                  <h2>Our latest financial results</h2>
                  <p>
                    Access Scotiabank’s latest quarterly results and archived
                    financial documents.
                  </p>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="cta-content mt-3 mt-sm-0 text-sm-end text-center">
                  <a href="#" className="theme-btn wow fadeInLeft">
                    See results
                  </a>
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
                        <Link href="#"> Compliance Publications</Link>
                      </li>
                      <li>
                        <Link href="#"> Annual Reports</Link>
                      </li>
                      <li>
                        <Link href="#"> CSR Reports</Link>
                      </li>
                      <li>
                        <Link href="#"> Financial documentation</Link>
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
                        <Link href="#">Our news</Link>
                      </li>
                      <li>
                        <Link href="#">Our press releases</Link>
                      </li>
                      <li>
                        <Link href="#">Our job offers</Link>
                      </li>
                      <li>
                        <Link href="#">Our websites</Link>
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
                <a href="index.html" className="p-0 m-0">
                  <img src="/img/logo/Logo.png" alt="logo" />
                </a>
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

export default Aboutpage;
