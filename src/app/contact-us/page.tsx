'use client'
/* eslint-disable react/no-unescaped-entities */
import AboutAccordion from '@/components/AboutAccordion';
import { useTheme } from '@/contextAPi/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const ContactUs = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 992;
  return (
    <div>
      <header className="header">
        <div className="header-top py-2 bg_white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="header-info-left">
                <div className="language-list position-relative w-auto">
                    <select
                      className="form-select border-0 shadow-none cursor-pointer"
                      aria-label="Language select"
                      style={{ cursor: 'pointer' }}
                    >
                      <option selected>English</option>
                      <option value="Bangla">Bangla</option>
                      <option value="French">French</option>
                      <option value="Hindi">Hindi</option>
                    </select>

                    <span className="position-absolute top-50 end-0 translate-middle-y me-2">
                      <i className="bi bi-chevron-down ms-2 text-muted pointer-events-none"></i>
                    </span>
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
                      <Image
                        width={15}
                        height={15}
                        className="img-fluid"
                        src="/img/phone-outline.png"
                        alt="phone"
                      />
                      <Link href="tel:01234567890">+01234-567890</Link>
                    </li>

                    <li>
                      <i className="icon_mail_alt"></i>
                      <Link href="mailto:bancainfo@email.com">
                        bancainfo@email.com
                      </Link>
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


              {/* Hamburger Toggle */}
              <button
                className={`navbar-toggler ${menuOpen ? '' : 'collapsed'}`}
                type="button"
                onClick={handleMenuToggle}
                aria-expanded={menuOpen}
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className={`hamburger ${menuOpen ? 'd_none' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span
                    className={`hamburger-cross ${menuOpen ? '' : 'd_none'}`}
                  >
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              {/* <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav menu ms-auto">
                  <li className="nav-item dropdown submenu ">
                    <Link
                      href="/"
                      className="nav-link dropdown-toggle"
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
                        <Link href="/" className="nav-link">
                          Smart Finance
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/index-company" className="nav-link">
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
                      href="/loan"
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
                        <Link className="nav-link" href="/loan">
                          Get loan
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          href="/loan-details"
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
                            <Link className="nav-link" href="/loan-details">
                              Step 01
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" href="/personal-details">
                              Step 02
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" href="/document-upload">
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
                      href="/career"
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
                        <Link className="nav-link" href="/career">
                          Career
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/jobs">
                          Jobs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/job-application">
                          Job Application
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <Link
                      className="nav-link dropdown-toggle active"
                      href="/card"
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
                        <Link className="nav-link" href="/card">
                          Cards
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/about-us">
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" href="/contact-us">
                          Contact Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/error">
                          404 Error
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="/blog-listing"
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
                        <Link className="nav-link" href="/blog-listing">
                          Blog Listing
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/blog-details">
                          Blog Details
                        </Link>
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
              </div> */}

              <div
                className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav menu ms-auto">
                  {[
                    {
                      label: 'Home',
                      href: '/',
                      submenu: [
                        { text: 'Smart Finance', link: '/' },
                        { text: 'Loan Company', link: '/index-company' },
                        { text: 'Mobile App', link: '/mobile-app' },
                        { text: 'Simple Banca', link: '/simple-banca' },
                        { text: 'Loan Steps', link: '/loan-steps' },
                        { text: 'Finance Sass App', link: '/finance-sass-app' },
                        { text: 'Small Bank', link: '/small-bank' },
                      ],
                    },
                    {
                      label: 'Loan',
                      href: '/loan',
                      submenu: [
                        { text: 'Get loan', link: '/loan' },
                        {
                          text: 'Loan Application',
                          link: '/loan-details',
                          submenu: [
                            { text: 'Step 01', link: '/loan-details' },
                            { text: 'Step 02', link: '/personal-details' },
                            { text: 'Step 03', link: '/document-upload' },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Job Pages',
                      href: '/career',
                      submenu: [
                        { text: 'Career', link: '/career' },
                        { text: 'Jobs', link: '/jobs' },
                        { text: 'Job Application', link: '/job-application' },
                      ],
                    },
                    {
                      label: 'Pages',
                      href: '/card',
                      submenu: [
                        { text: 'Cards', link: '/card' },
                        { text: 'About Us', link: '/about-us' },
                        { text: 'Contact Us', link: '/contact-us' },
                        { text: '404 Error', link: '/error' },
                      ],
                    },
                    {
                      label: 'Blog',
                      href: '/blog-listing',
                      submenu: [
                        { text: 'Blog Listing', link: '/blog-listing' },
                        { text: 'Blog Details', link: '/blog-details' },
                      ],
                    },
                  ].map((item, idx) => (
                    <li key={idx} className="nav-item dropdown submenu">
                      <Link
                        href={item.href}
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={openDropdown === item.label}
                        onClick={(e) => {
                          if (isMobile) {
                            e.preventDefault();
                            handleDropdownToggle(item.label);
                          }
                        }}
                      >
                        {item.label}
                      </Link>
                      <i
                        className="arrow_carrot-down_alt2 mobile_dropdown_icon d-lg-none"
                        aria-hidden="true"
                        onClick={() => handleDropdownToggle(item.label)}
                        style={{ cursor: 'pointer' }}
                      ></i>

                      <ul
                        className={`dropdown-menu ${
                          openDropdown === item.label ? 'show' : ''
                        }`}
                      >
                        {item.submenu?.map((sub, i) => (
                          <li
                            key={i}
                            className={`nav-item ${
                              sub.submenu ? 'dropdown submenu' : ''
                            }`}
                          >
                            <Link
                              href={sub.link}
                              className="nav-link"
                              onClick={(e) => {
                                if (isMobile && sub.submenu) {
                                  e.preventDefault();
                                  handleDropdownToggle(
                                    `${item.label}-${sub.text}`
                                  );
                                }
                              }}
                            >
                              {sub.text}
                            </Link>
                            {sub.submenu && (
                              <>
                                <i
                                  className="arrow_carrot-down_alt2 mobile_dropdown_icon d-lg-none"
                                  aria-hidden="true"
                                  onClick={() =>
                                    handleDropdownToggle(
                                      `${item.label}-${sub.text}`
                                    )
                                  }
                                  style={{ cursor: 'pointer' }}
                                ></i>
                                <ul
                                  className={`dropdown-menu ${
                                    openDropdown === `${item.label}-${sub.text}`
                                      ? 'show'
                                      : ''
                                  }`}
                                >
                                  {sub.submenu.map((deep, j) => (
                                    <li key={j} className="nav-item">
                                      <Link
                                        href={deep.link}
                                        className="nav-link"
                                      >
                                        {deep.text}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>

                <Link
                  className="theme-btn theme-btn-outlined_alt"
                  href="https://themeforest.net/item/banca-banking-business-loan-bootstrap5html-website-template/32788885?s_rank=9"
                  target="_blank"
                >
                  Buy Banca
                </Link>

                {/* Dark Mode Toggle */}
                <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
                  <label htmlFor="something" className="tab-btn tab-btns">
                    <IoMoonOutline />
                  </label>
                  <label htmlFor="something" className="tab-btn">
                    <IoSunnyOutline />
                  </label>
                  <label
                    className={`ball`}
                    style={{
                      left: theme === 'body_dark' ? 3 : 26
                    }}
                    htmlFor="something"
                  ></label>
                  <input
                    type="checkbox"
                    name="something"
                    id="something"
                    className="dark_mode_switcher"
                    checked={theme === 'body_dark'}
                    onChange={toggleTheme}
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
                    <h1>We are here to help.</h1>
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
                        <Image
                          width={20}
                          height={20}
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
                        <Image
                          width={20}
                          height={20}
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
                  <Image
                    width={60}
                    height={60}
                    src="/img/contact/help-icon-1.svg"
                    alt="icon"
                  />
                  <h5 className="mt-4 mb-10">Articles & Guides</h5>
                  <p>
                    100+ articles to get the information you need when you need
                    it.
                  </p>
                  <Link href="#" className="theme-btn theme-btn-outlined mt-30">
                    Visit Knowledge Base
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="feature-card-widget-4 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <Image
                    width={60}
                    height={60}
                    src="/img/contact/help-icon-2.svg"
                    alt="icon"
                  />
                  <h5 className="mt-4 mb-10">Technical Support</h5>
                  <p>
                    If you ever need help, you can chat directly with our
                    support team!
                  </p>
                  <Link href="#" className="theme-btn theme-btn-outlined mt-30">
                    Chat With Support
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="feature-card-widget-4 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <Image
                    width={60}
                    height={60}
                    src="/img/contact/help-icon-3.svg"
                    alt="icon"
                  />
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

        <AboutAccordion />

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
                        <Link
                          href="#"
                          className="theme-btn theme-btn-alt wow fadeInLeft cta-text-violet"
                        >
                          Open an Account
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
                        <Link href="#"> Our core Businesses</Link>
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
                <Link href="index.html" className="p-0 m-0">
                  <Image
                    width={90}
                    height={30}
                    src="/img/logo/Logo.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-lg-5 text-center my-3 my-sm-0">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; Banca 2025.
                    <br className="d-sm-none" />
                    <Link className="ms-2" href="#">
                      Privacy
                    </Link>
                    |
                    <Link className="ms-0" href="#">
                      Term of Use
                    </Link>
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
