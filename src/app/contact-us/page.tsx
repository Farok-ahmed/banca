import AboutAccordion from '@/components/AboutAccordion';
import Link from 'next/link';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const ContactUs = () => {
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
              <Link className="navbar-brand sticky_logo" href="index.html">
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
                      className="nav-link dropdown-toggle"
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
                        <a className="nav-link active" href="contact.html">
                          Contact Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/error">
                          404 Error
                        </Link>
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
        <section className="breadcrumb-area">
          <div
            className="breadcrumb-widget  breadcrumb-widget-3 pt-200 pb-200"
            style={{ backgroundImage: `url(img/breadcrumb/bg-4.jpg)` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mx-auto">
                  <div className="breadcrumb-content pt-100">
                    <h1>We're here to help.</h1>
                    <ul>
                      <li>
                        <a href="index.html">home</a>
                      </li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-140 pb-140 get-touch-area bg_white">
          <div className="container">
            <div className="row gy-4 gy-lg-0">
              <div className="col-lg-5">
                <div className="section-title text-start">
                  <h2>Get in touch with us.</h2>
                  <p>
                    Want to get in touch? We'd love to hear from you. Here's how
                    you can reach us...
                  </p>
                </div>
                <div className="row mt-55">
                  <div className="col-sm-6">
                    <div className="get-touch-box">
                      <div className="icon">
                        <img
                          src="/img/contact/call-outline.png"
                          alt="call icon"
                        />
                      </div>
                      <div>
                        <p>Call the helpline:</p>
                        <span>(02) 4003 7936</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="get-touch-box">
                      <div className="icon">
                        <img
                          src="/img/contact/mail-open-outline.png"
                          alt="mail icon"
                        />
                      </div>
                      <div>
                        <p>Email us:</p>
                        <span>hello@banca.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="get-touch-box mt-30">
                      <div className="icon">
                        <i className="icon_pin_alt "></i>
                      </div>
                      <div>
                        <p>Location</p>
                        <span>
                          1550 Bryant Street STE 750, San Francisco, CA 94103
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="get-touch-box mt-30">
                      <div className="icon">
                        <i className="icon_clock_alt "></i>
                      </div>
                      <div>
                        <p>Work Hours</p>
                        <span>
                          Monday - Saturday: 9am - 7pm Sunday: 12am — 6pm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="contact-form-widget">
                  <form action="mail.php" method="POST">
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="f-name">Full Name</label>
                        <input
                          type="text"
                          id="f-name"
                          name="name"
                          className="form-control"
                          placeholder="What's your name?"
                          required
                        />
                      </div>
                      <div className="col-md-6 mt-20 mt-md-0">
                        <label htmlFor="email-address">Email</label>
                        <input
                          type="email"
                          id="email-address"
                          name="email"
                          className="form-control"
                          placeholder="yourname@example.com"
                          required
                        />
                      </div>
                      <div className="col-md-12 mt-20">
                        <label htmlFor="form-sub">Subject</label>
                        <input
                          type="text"
                          id="form-sub"
                          name="subject"
                          className="form-control"
                          placeholder="Your subject"
                          required
                        />
                      </div>
                      <div className="col-md-12 mt-20">
                        <label htmlFor="form-text">Messages</label>
                        <textarea
                          cols={30}
                          rows={5}
                          name="message"
                          id="form-text"
                          className="form-control pt-15"
                          placeholder="Your message......"
                          required
                        ></textarea>
                      </div>
                      <div className="col-12 mt-3">
                        <p className="policy-text">
                          By submitting this form you consent to us emailing you
                          occasionally about our products and services. You can
                          unsubscribe from emails at any time, and we will never
                          pass your email onto third parties. Privacy Policy
                        </p>
                      </div>
                      <div className="col-12 mt-35">
                        <button
                          type="submit"
                          className="theme-btn theme-btn-lg w-100"
                        >
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-125 pb-140 bg_disable">
          <div className="container">
            <div className="row ">
              <div className="col-md-8 mx-auto">
                <div className="section-title">
                  <h2 className="wow fadeInUp">Need more help?</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-60 gy-lg-0 gy-4">
              <div className="col-lg-4">
                <div
                  className="feature-card-widget-4 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <img src="/img/contact/help-icon-1.svg" alt="icon" />
                  <h5 className="mt-4 mb-10">Articles & Guides</h5>
                  <p>
                    100+ articles to get the information you need when you need
                    it.
                  </p>
                  <a href="#" className="theme-btn theme-btn-outlined mt-30">
                    Visit Knowledge Base
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="feature-card-widget-4 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <img src="/img/contact/help-icon-2.svg" alt="icon" />
                  <h5 className="mt-4 mb-10">Technical Support</h5>
                  <p>
                    If you ever need help, you can chat directly with our
                    support team!
                  </p>
                  <a href="#" className="theme-btn theme-btn-outlined mt-30">
                    Chat With Support
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="feature-card-widget-4 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <img src="/img/contact/help-icon-3.svg" alt="icon" />
                  <h5 className="mt-4 mb-10">Social Media Support</h5>
                  <p>
                    Doing customer support on social media requires a dedicated
                    strategy.{' '}
                  </p>
                  <div className="social-button mt-35 mb-10">
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
        </section>

        {/* <section className="faq-area-2 pt-125 pb-200 bg_white">
          <div className="container">
            <div className="section-title">
              <h2 className="wow fadeInUp">Frequently asked questions</h2>
            </div>
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="faq-widget">
                  <div className="accordion" id="accordionExample">
                    <div
                      className="single-widget-one wow fadeInUp px-sm-5 px-4"
                      data-wow-delay="0.1s"
                    >
                      <div className="widget-icon">
                        <i className="icon_question_alt2 "></i>
                      </div>
                      <div className="w-100">
                        <div className="faq-header" id="headingOne">
                          <h4
                            className="mb-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Can I pay off my loan early?
                            <i className="icon_plus"></i>
                            <i className=" icon_minus-06"></i>
                          </h4>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="faq-body pr-lg-130">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="single-widget-one wow fadeInUp px-sm-5 px-4"
                      data-wow-delay="0.3s"
                    >
                      <div className="widget-icon">
                        <i className="icon_question_alt2 "></i>
                      </div>
                      <div className="w-100">
                        <div className="faq-header" id="headingTwo">
                          <h4
                            className="mb-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            How much can I Banca?<i className="icon_plus"></i>
                            <i className=" icon_minus-06"></i>
                          </h4>
                        </div>

                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="faq-body pr-lg-130">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="single-widget-one wow fadeInUp px-sm-5 px-4"
                      data-wow-delay="0.5s"
                    >
                      <div className="widget-icon">
                        <i className="icon_question_alt2 "></i>
                      </div>
                      <div className="w-100">
                        <div className="faq-header" id="headingThree">
                          <h4
                            className="mb-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseThree"
                          >
                            Do you offering refinancing ?
                            <i className="icon_plus"></i>
                            <i className=" icon_minus-06"></i>
                          </h4>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="faq-body pr-lg-130">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="single-widget-one wow fadeInUp px-sm-5 px-4"
                      data-wow-delay="0.7s"
                    >
                      <div className="widget-icon">
                        <i className="icon_question_alt2 "></i>
                      </div>
                      <div className="w-100">
                        <div className="faq-header" id="headingFour">
                          <h4
                            className="mb-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="true"
                            aria-controls="collapseFour"
                          >
                            Can I do all of my banking with you?
                            <i className="icon_plus"></i>
                            <i className=" icon_minus-06"></i>
                          </h4>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="faq-body pr-lg-130">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="single-widget-one wow fadeInUp px-sm-5 px-4"
                      data-wow-delay="0.9s"
                    >
                      <div className="widget-icon">
                        <i className="icon_question_alt2 "></i>
                      </div>
                      <div className="w-100">
                        <div className="faq-header" id="headingFive">
                          <h4
                            className="mb-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="true"
                            aria-controls="collapseFive"
                          >
                            When should i apply?<i className="icon_plus"></i>
                            <i className=" icon_minus-06"></i>
                          </h4>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="faq-body pr-lg-130">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <AboutAccordion/>

        <section className="cta-area pt-60 bg_white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 position-relative">
                <div
                  className="cta cta-bg-violet"
                  style={{ backgroundImage: `url(img/cta/wave.png)` }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="cta-content wow fadeInRight text-center text-lg-start">
                        <h2 className="mb-0">
                          Meet Banca, the financial partner you can bank on.
                        </h2>
                      </div>
                    </div>

                    <div className="col-lg-5 mt-4 mt-lg-0 text-center ">
                      <div className="cta-content  text-center text-lg-end">
                        <a
                          href="#"
                          className="theme-btn theme-btn-alt wow fadeInLeft cta-text-violet"
                        >
                          Open an Account
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer footer-3">
        <div className="footer-top  pt-200 pb-lg-115 pb-105">
          <div className="container">
            <div className="row gx-0 pt-50">
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
                        <Link href="#"> Our company purpose</Link>
                      </li>
                      <li>
                        <Link href="#"> Jobs & Careers</Link>
                      </li>
                      <li>
                        <Link href="#"> Our Responsibility</Link>
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

export default ContactUs;
