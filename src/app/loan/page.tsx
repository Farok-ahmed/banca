'use client';
import BankCalculator from '@/components/BankCalculator';
import CenterMode from '@/components/CenterMode';
import { useTheme } from '@/contextAPi/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Loanpage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname()

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 992;

  const menuItems = [
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
  ];
  
  const isActive = (itemHref: string): boolean => {
    if (itemHref === '/') return pathname === '/';
    return pathname.startsWith(itemHref);
  };

  return (
    <div>
      <header className="header">
        <div className="header-top py-2 bg_white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="header-info-left">
                  <div className="language-list position-relative w-auto">
                    <select className="form-select border-0 shadow-none cursor-pointer">
                      <option defaultValue="selected">English</option>
                      <option value="Bangla">Bangla</option>
                      <option value="French">French</option>
                      <option value="Hindi">Hindi</option>
                    </select>
                    <span className="position-absolute top-50 end-0 translate-middle-y me-2">
                      <i className="bi bi-chevron-down ms-2 text-muted pointer-events-none"></i>
                    </span>
                  </div>
                  <div className="timestamp ms-4">
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
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand sticky_logo" href="/">
                <Image
                  width={110}
                  height={35}
                  className="main"
                  src="/img/logo/Logo.png"
                  alt="logo"
                />
                <Image
                  width={110}
                  height={35}
                  className="sticky"
                  src="/img/logo/Logo-2.png"
                  alt="logo"
                />
              </Link>

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

              <div
                className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav menu ms-auto">
                  {menuItems.map((item, idx) => (
                    <li
                      key={idx}
                      className={`nav-item dropdown submenu ${
                        isActive(item.href) ? 'active' : ''
                      }`}
                    >
                      <Link
                        href={item.href}
                        className={`nav-link dropdown-toggle ${
                          isActive(item.href) ? 'active' : ''
                        }`}
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

                <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
                  <label htmlFor="something" className="tab-btn tab-btns">
                    <IoMoonOutline />
                  </label>
                  <label htmlFor="something" className="tab-btn">
                    <IoSunnyOutline />
                  </label>
                  <label
                    className="ball"
                    style={{ left: theme === 'body_dark' ? 3 : 26 }}
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
        <section
          className="banner-area-2 loan-banner pt-145"
          style={{ backgroundImage: `url(/img/banner/loan-banner.png)` }}
        >
          <div className="container">
            <div className="row align-items-center  pt-165 pb-200">
              <div className="col-lg-7 mx-auto">
                <div className="banner-content text-center">
                  <div className="section-title">
                    <h1 className="wow fadeInUp">
                      Get your loan approved in 3 steps
                    </h1>
                  </div>
                  <Link
                    className="theme-btn theme-btn-lg theme-btn-alt mt-50 wow fadeInUp"
                    data-wow-delay="0.2s"
                    href="/loan-details"
                  >
                    Get started <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row position-relative pt-70 d-lg-block d-none">
              <div className="col-md-12">
                <div className="floated-widget">
                  <div className="row gy-4 gy-lg-0 gx-5">
                    <div className="col-lg-4 border-end">
                      <div
                        className="steps-widget pr-30 pl-30 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <Image
                          width={50}
                          height={50}
                          src="/img/steps/icon-1.png"
                          alt="icon"
                        />
                        <h4>
                          <Link href="#">Check Eligibility</Link>
                        </h4>
                        <p>
                          Select your loan amount, answer a few questions and
                          get instant loan amount
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4  border-end">
                      <div
                        className="steps-widget pr-30 pl-30 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <Image
                          width={50}
                          height={50}
                          src="/img/steps/icon-2.png"
                          alt="icon"
                        />
                        <h4>
                          <a href="#">Submit Documents</a>
                        </h4>
                        <p>
                          Share required documents with our representative
                          hassle-free
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="steps-widget pr-30 pl-30 wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <Image
                          width={50}
                          height={50}
                          src="/img/steps/icon-3.png"
                          alt="icon"
                        />
                        <h4>
                          <a href="#">Approval in Principle</a>
                        </h4>
                        <p>
                          Choose the final sanctioned loan offer with the terms
                          that work best for you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="apply-loan-area pt-200 pb-140 bg_disable">
          <div className="container">
            <div className="row pt-3">
              <div className="col-xl-6 mx-auto">
                <div className="section-title">
                  <h2 className="wow fadeInUp">
                    One step closer to finding your perfect Home!
                  </h2>
                </div>
              </div>
            </div>
            <form action="personal-details">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="row pt-35  gy-lg-0 gy-3">
                    <div className="col-lg-4">
                      <div
                        className="loan-apply-widget wow fadeInRight"
                        data-wow-delay="0.1s"
                      >
                        <div className="icon">
                          <Image
                            width={30}
                            height={35}
                            src="/img/apply-loan/icon-1.1.png"
                            alt="icon-1"
                          />
                          <Image
                            width={30}
                            height={35}
                            src="/img/apply-loan/icon-1.2.png"
                            alt="icon-1.2"
                          />
                        </div>
                        <div className="apply-content">
                          <span className="title">How much do you need?</span>
                          <p className="d-flex">
                            $
                            <input
                              className="w-100"
                              type="text"
                              defaultValue="5,000"
                            />{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="loan-apply-widget wow fadeInRight"
                        data-wow-delay="0.3s"
                      >
                        <div className="icon">
                          <Image
                            width={35}
                            height={35}
                            src="/img/apply-loan/icon-2.1.png"
                            alt="icon-2"
                          />
                          <Image
                            width={35}
                            height={35}
                            src="/img/apply-loan/icon-2.2.png"
                            alt="icon-2.2"
                          />
                        </div>
                        <div className="apply-content">
                          {/* Label */}
                          <span
                            className="title d-block"
                            style={{ fontSize: '14px' }}
                          >
                            Type of Loan
                          </span>

                          {/* Dropdown */}
                          <div className="position-relative">
                            <select
                              name="select-loan-type"
                              id="select-loan-type"
                              className="form-select border-0 ps-0 pe-4 fw-semibold"
                              style={{
                                appearance: 'none',
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                                cursor: 'pointer',
                                fontWeight: 'normal',
                              }}
                            >
                              <option>Select your Loan</option>
                              <option value="Home Loan">Home Loan</option>
                              <option value="Loan Against Property">
                                Loan Against Property
                              </option>
                              <option value="Loan Renovation">
                                Loan Renovation
                              </option>
                              <option value="Commercial Property">
                                Commercial Property
                              </option>
                            </select>

                            {/* Chevron icon */}
                            <span className="position-absolute top-50 end-0 translate-middle-y me-2 text-dark">
                              <i className="bi bi-chevron-down"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="loan-apply-widget wow fadeInRight"
                        data-wow-delay="0.5s"
                      >
                        <div className="icon">
                          <Image
                            width={30}
                            height={35}
                            src="/img/apply-loan/icon-3.1.png"
                            alt="icon-3"
                          />
                          <Image
                            width={30}
                            height={35}
                            src="/img/apply-loan/icon-3.2.png"
                            alt="icon-3.2"
                          />
                        </div>

                        <div className="apply-content">
                          <span className="title">
                            Where do you currently live?
                          </span>
                          <div
                            className="select-location d-flex align-items-center position-relative w-100"
                            id="locationSlectParent"
                          >
                            <select
                              className="w-100 custom-select-no-arrow"
                              name="select-location"
                              id="locationSelect"
                              defaultValue={'Bandarban'}
                              style={{
                                appearance: 'none',
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                                cursor: 'pointer',
                                fontWeight: 'normal',
                              }}
                            >
                              <option value="Bagerhat">Bagerhat</option>
                              <option value="Bandarban">Bandarban</option>
                              <option value="Barguna">Barguna</option>
                              <option value="Barisal">Barisal</option>
                              <option value="Bhola">Bhola</option>
                              <option value="Barishal Metro">
                                Barishal Metro
                              </option>
                              <option value="Bogra">Bogra</option>
                              <option value="Brahmmanbaria">
                                Brahmmanbaria
                              </option>
                            </select>

                            <span className="close" id="readOnlyClose">
                              <i className="icon_close"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mt-15 d-flex wow fadeInLeft">
                      <div className="icon">
                        <Image
                          width={15}
                          height={15}
                          className="img=fluid"
                          src="/img/steps/sheild.png"
                          alt="sheild"
                        />
                      </div>
                      <p className="security-info d-inline-block ms-2">
                        Your information is 100% secure. We do not share your
                        info with other parties.
                      </p>
                    </div>

                    <div className="col-12 text-center mt-35">
                      <button
                        className="theme-btn theme-btn-lg wow fadeInUp"
                        type="submit"
                      >
                        apply now <i className="arrow_right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>


        <BankCalculator />

        {/* <section className="pt-140 pb-140 testimonial-area bg_disable">
          <div className="container-fluid px-0">
            <div className="testimonial-slider">
              <div className="single-slider container px-0">
                <div className="testimonial-widget">
                  <div className="row">
                    <div className="col-4">
                      <div className="author-img">
                        <img src="/img/testimonial/img-2.png" alt="image" />
                      </div>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                      <div className="testimonial-content">
                        <div className="watch-button">
                          <Link
                            data-fancybox
                            href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                          >
                            <i className="fa fa-play"></i>
                            watch the video
                          </Link>
                        </div>
                        <h2>Making dreams a reality!</h2>
                        <p className="pr-lg-60">
                          We were looking for a home of happiness and peace.
                          Thanks to the Grihashakti team, who helped us to
                          realise this dream of ours. Our home has been very
                          lucky for us – as we shifted to our new home,
                          prosperity followed!
                        </p>
                        <div className="author-info">
                          <h4>Maxwell Wood</h4>
                          <span>New York, US</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slider container px-0">
                <div className="testimonial-widget">
                  <div className="row">
                    <div className="col-4">
                      <div className="author-img">
                        <img src="/img/testimonial/img-1.png" alt="image" />
                      </div>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                      <div className="testimonial-content">
                        <div className="watch-button">
                          <Link
                            data-fancybox
                            href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                          >
                            <i className="fa fa-play"></i>
                            watch the video
                          </Link>
                        </div>
                        <h2>Making dreams a reality!</h2>
                        <p className="pr-lg-60">
                          We were looking for a home of happiness and peace.
                          Thanks to the Grihashakti team, who helped us to
                          realise this dream of ours. Our home has been very
                          lucky for us – as we shifted to our new home,
                          prosperity followed!
                        </p>
                        <div className="author-info">
                          <h4>Maxwell Wood</h4>
                          <span>New York, US</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slider container px-0">
                <div className="testimonial-widget">
                  <div className="row">
                    <div className="col-4">
                      <div className="author-img">
                        <img src="/img/testimonial/img-2.png" alt="image" />
                      </div>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                      <div className="testimonial-content">
                        <div className="watch-button">
                          <Link
                            data-fancybox
                            href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                          >
                            <i className="fa fa-play"></i>
                            watch the video
                          </Link>
                        </div>
                        <h2>Making dreams a reality!</h2>
                        <p className="pr-lg-60">
                          We were looking for a home of happiness and peace.
                          Thanks to the Grihashakti team, who helped us to
                          realise this dream of ours. Our home has been very
                          lucky for us – as we shifted to our new home,
                          prosperity followed!
                        </p>
                        <div className="author-info">
                          <h4>Maxwell Wood</h4>
                          <span>New York, US</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slider container px-0">
                <div className="testimonial-widget">
                  <div className="row">
                    <div className="col-4">
                      <div className="author-img">
                        <img src="/img/testimonial/img-1.png" alt="image" />
                      </div>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                      <div className="testimonial-content">
                        <div className="watch-button">
                          <Link
                            data-fancybox
                            href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                          >
                            <i className="fa fa-play"></i>
                            watch the video
                          </Link>
                        </div>
                        <h2>Making dreams a reality!</h2>
                        <p className="pr-lg-60">
                          We were looking for a home of happiness and peace.
                          Thanks to the Grihashakti team, who helped us to
                          realise this dream of ours. Our home has been very
                          lucky for us – as we shifted to our new home,
                          prosperity followed!
                        </p>
                        <div className="author-info">
                          <h4>Maxwell Wood</h4>
                          <span>New York, US</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        
        <CenterMode />
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
                <Link href="/" className="p-0 m-0">
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
                    <br className="d-sm-none" />{' '}
                    <Link className="ms-2" href="#">
                      Privacy
                    </Link>{' '}
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

export default Loanpage;
