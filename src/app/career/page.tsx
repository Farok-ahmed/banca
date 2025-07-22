import Link from 'next/link';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Careerpage = () => {
  return (
    <div>
      <header className="header">
        <div className="header-top py-2 bg_white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="header-info-left">
                  <div className="language-list">
                    <select id="select-lang">
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
                      className="nav-link dropdown-toggle active"
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
                        <a className="nav-link active" href="career.html">
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
                      className="nav-link dropdown-toggle"
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
                        <a className="nav-link" href="about.html">
                          About Us
                        </a>
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
                  className="theme-btn theme-btn-outlined_alt"
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
        <section className="breadcrumb-area">
          <div
            className="breadcrumb-widget  pt-145 pb-200"
            style={{ backgroundImage: `url(img/breadcrumb/bg-2.png)` }}
          >
            <div className="container">
              <div className="row pb-100 pb-sm-0">
                <div className="col-md-12">
                  <div className="breadcrumb-content pt-140 pb-15">
                    <h1>Build your Career</h1>
                    <ul>
                      <li>
                        <a href="index.html">home</a>
                      </li>
                      <li>
                        <a href="index.html">pages</a>
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
                            {' '}
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
                        <a
                          href="#"
                          className="custom-btn theme-btn-primary_alt theme-btn"
                        >
                          Search
                        </a>
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
              <h2 className="wow fadeInUp">
                Forget the expected. Do the exceptional
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.3s">
                Banca is one of the world’s leading international banks. Whether
                you are looking for a first job or taking the next step in your
                career, we offer many ways for you to realise your ambitions.
                Come and work with us and you'll have opportunities to make
                connections all over the world and help build the bank for the
                future. Take a look and discover what it means to work for
                Santander US.
              </p>
            </div>

            <div className="row gy-4 mt-30">
              <div className="col-md-6 col-lg-4">
                <div
                  className="feature-card-widget-7 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <h4>Who We Are</h4>
                  <p>
                    Our purpose is to help people and businesses prosper. That's
                    why we're simple and personal in all that we do.
                  </p>
                  <a
                    href="#"
                    className="theme-btn theme-btn-outlined mb-4 mt-45 "
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="feature-card-widget-7 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h4>Career Areas</h4>
                  <p>
                    Unique skills and diverse backgrounds allow us to grow and
                    prosper. See where you could make a difference.
                  </p>
                  <a
                    href="#"
                    className="theme-btn theme-btn-outlined mb-4 mt-45 "
                  >
                    Explore
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="feature-card-widget-7 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <h4>Student Opportunities</h4>
                  <p>
                    Whether you're a student purusing a graduate pursuing a
                    career, put your talents to the test at Santander US.
                  </p>
                  <a
                    href="#"
                    className="theme-btn theme-btn-outlined mb-4 mt-45 "
                  >
                    Find out more
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="feature-card-widget-7 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <h4>Benefits</h4>
                  <p>
                    Learn more about the comprehensive benefits packages we
                    offer to you and your family.
                  </p>
                  <a
                    href="#"
                    className="theme-btn theme-btn-outlined mb-4 mt-45 "
                  >
                    Discover
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="feature-card-widget-7 wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <h4>Diversity & Inclusion</h4>
                  <p>
                    At Santander, we seek out diverse viewpoints. It's why we
                    work hard to build an inclusive environment.
                  </p>
                  <a
                    href="#"
                    className="theme-btn theme-btn-outlined mb-4 mt-45 w-50"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="feature-card-widget-7 wow fadeInUp"
                  data-wow-delay="1.1s"
                >
                  <h4>Join Our Community</h4>
                  <p>
                    When you become a member of Santander's talent community,
                    you'll receive job opportunity alerts here.
                  </p>
                  <a
                    href="#"
                    className="theme-btn theme-btn-outlined mb-4 mt-45 w-50"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-jobs bg_white pt-125 pb-140">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6">
                <div className="section-title text-start">
                  <h2 className="mb-0 wow fadeInRight">Featured jobs</h2>
                </div>
              </div>
              <div className="col-md-4 text-end">
                <a
                  href="job-post.html"
                  className="wow fadeInLeft theme-btn theme-btn-outlined"
                >
                  Show All <i className="arrow_right"></i>{' '}
                </a>
              </div>
            </div>

            <div className="row pt-60">
              <div className="col-lg-7">
                <div className="feature-job-tab">
                  <ul className="feature-job-list">
                    <li className="mt-0">
                      <a href="job-application.html">
                        <div
                          className="single-feature-job wow fadeInUp"
                          data-wow-delay="0.1s"
                        >
                          <h6 className="job-title">
                            Manager- Products & Marketing
                          </h6>
                          <div className="d-flex flex-wrap">
                            <div className="job-location me-3">
                              {' '}
                              <i className="icon_pin_alt"></i>NY, United States
                            </div>
                            <div className="job-catagory">
                              {' '}
                              <span>Branch Banking</span> | Full-time
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="job-application.html">
                        <div
                          className="single-feature-job wow fadeInUp"
                          data-wow-delay="0.3s"
                        >
                          <h6 className="job-title">
                            Investment Banking - Technology, Analyst
                          </h6>
                          <div className="d-flex flex-wrap">
                            <div className="job-location me-3">
                              {' '}
                              <i className="icon_pin_alt"></i>NY, United States
                            </div>
                            <div className="job-catagory">
                              {' '}
                              <span>Branch Banking</span> | Full-time
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="job-application.html">
                        <div
                          className="single-feature-job wow fadeInUp"
                          data-wow-delay="0.5s"
                        >
                          <h6 className="job-title">
                            Contact Center Representative
                          </h6>
                          <div className="d-flex flex-wrap">
                            <div className="job-location me-3">
                              {' '}
                              <i className="icon_pin_alt"></i>NY, United States
                            </div>
                            <div className="job-catagory">
                              {' '}
                              <span>Branch Banking</span> | Full-time
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="job-application.html">
                        <div
                          className="single-feature-job wow fadeInUp"
                          data-wow-delay="0.7s"
                        >
                          <h6 className="job-title">ITS Desktop Technician</h6>
                          <div className="d-flex flex-wrap">
                            <div className="job-location me-3">
                              {' '}
                              <i className="icon_pin_alt"></i>NY, United States
                            </div>
                            <div className="job-catagory">
                              {' '}
                              <span>Branch Banking</span> | Full-time
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-5 mt-lg-0 mt-4">
                <div
                  className="feature-job-description wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <h6 className="job-title">Manager- Products & Marketing</h6>
                  <div className="d-flex flex-wrap">
                    <div className="job-location me-3">
                      {' '}
                      <i className="icon_pin_alt"></i>NY, United States
                    </div>
                    <div className="job-catagory">
                      {' '}
                      <span>Branch Banking</span> | Full-time{' '}
                    </div>
                  </div>

                  <p className="mt-35">
                    We are looking for a Product Marketing Manager to lead our
                    outbound marketing activities. You’ll be responsible for
                    presenting our products in ways that will strengthen our
                    brand and boost sales.
                  </p>

                  <p className="mt-20">
                    Your goal will be to develop and implement the most
                    profitable plans to position.
                  </p>

                  <a
                    href="job-application.html"
                    className="theme-btn theme-btn-lg mt-70 mb-25"
                  >
                    Apply Now <i className="arrow_right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recruitment-procces bg_disable pt-120 pb-100">
          <div className="container">
            <div className="section-title text-start">
              <h2 className="wow fadeInUp">Learn our recruitment process</h2>
              <p className="wow fadeInUp" data-wow-delay="0.3s">
                Recruitment is a process of finding and attracting the potential
                resources for filling up the vacant positions in an
                organization. It sources the candidates with the abilities and
                attitude, which are required for achieving the objectives of an
                organization.
              </p>
            </div>

            <div className="row pt-60 pb-100 gy-4 gy-lg-0">
              <div className="col-md-6 col-lg-3">
                <div
                  className="feature-card-widget-2 wow fadeInUp text-start py-5"
                  data-wow-delay="0.1s"
                >
                  <img
                    className="img-fluid"
                    src="/img/recruitment-proccess/icon-1.svg"
                    alt="icon svg"
                  />
                  <h4>CV Submission</h4>
                  <p>
                    Submit your CV or resume through our online portal if you
                    meet our requirements.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="feature-card-widget-2 wow fadeInUp text-start py-5"
                  data-wow-delay="0.3s"
                >
                  <img
                    className="img-fluid"
                    src="/img/recruitment-proccess/icon-2.svg"
                    alt="icon svg"
                  />
                  <h4>Phone Screening</h4>
                  <p>
                    After looking at your CV you will be inviled for a telephone
                    interview at a time.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="feature-card-widget-2 wow fadeInUp text-start py-5"
                  data-wow-delay="0.5s"
                >
                  <img
                    className="img-fluid"
                    src="/img/recruitment-proccess/icon-3.svg"
                    alt="icon svg"
                  />
                  <h4>Skill Assessment</h4>
                  <p>
                    You will be invited at our head office to take a skills and
                    knowledge assessment.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="feature-card-widget-2 wow fadeInUp text-start py-5"
                  data-wow-delay="0.7s"
                >
                  <img
                    className="img-fluid"
                    src="/img/recruitment-proccess/icon-4.svg"
                    alt="icon svg"
                  />
                  <h4>Final Interview</h4>
                  <p>
                    If you can pass all stages we will invite you for a final
                    interview with our CEO.
                  </p>
                </div>
              </div>
            </div>

            <div className="row our-offer gy-4 gy-md-0">
              <div className="col-md-6">
                <div
                  className="single-offer-box wow fadeInRight"
                  data-wow-delay="0.1s"
                >
                  <h2>Our Offer</h2>
                  <p>
                    You will be invited at our head office to take a skills and
                    knowledge assessment.
                  </p>
                  <a href="#">
                    <span>Read more</span> <i className="arrow_right"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="single-offer-box wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <h2>FAQ</h2>
                  <p>
                    Find the answers to frequently asked questions about working
                    at AfrAsia.
                  </p>
                  <a href="#">
                    <span>Read more</span> <i className="arrow_right"></i>
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
                      Privecy
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

export default Careerpage;
