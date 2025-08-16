'use client';

import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/nice-select.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useTheme } from '@/contextAPi/ThemeContext';
import { usePathname } from 'next/navigation';

const LoanDetailPage = () => {
  const [financingType, setFinancingType] = useState('Debt-Financing');
  const [bankService, setBankService] = useState('Individual-Banking');
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 992;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFinancingType(e.target.value);
  };

  const handleChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBankService(e.target.value);
  };

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
        <section className="breadcrumb-area">
          <div
            className="breadcrumb-widget  pt-200 pb-110"
            style={{ backgroundImage: `url(img/breadcrumb/bg-1.png)` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="breadcrumb-content pt-85">
                    <h1>Loan details</h1>
                    <ul>
                      <li>
                        <Link href="index.html">home</Link>
                      </li>
                      <li>
                        <Link href="index.html">pages</Link>
                      </li>
                      <li>loan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="loan-deatils-area bg_disable pt-130 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="stepper-widget mt-sm-5 px-3 px-sm-0">
                  <ul>
                    <li className="active mt-0">
                      <Link href="/loan-details">
                        <div className="number">
                          <i className="icon_check"></i> <span>1</span>
                        </div>{' '}
                        Loan Details
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/personal-details">
                        <div className="number">
                          <i className="icon_check"></i> <span>2</span>
                        </div>
                        Personal Details
                      </Link>
                    </li>
                    <li>
                      <Link href="/document-upload">
                        <div className="number">
                          <i className="icon_check"></i> <span>3</span>
                        </div>
                        Documants Upload
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="loan-details-widget">
                  <form action="/personal-details">
                    <div className="row mb-35 gy-4">
                      <div className="col-lg-3 col-md-6">
                        <input
                          className="select-loan-type-radio"
                          name="select-loan-type"
                          type="radio"
                          id="Personal_loan"
                        />
                        <label htmlFor="Personal_loan" className="loan-type">
                          <Image
                            width={40}
                            height={50}
                            src="/img/apply-loan/icon-4.1.png"
                            alt="icon"
                          />
                          <Image
                            width={40}
                            height={50}
                            src="/img/apply-loan/icon-4.2.png"
                            alt="icon"
                          />
                          <span>Personal Loan</span>
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <input
                          className="select-loan-type-radio"
                          name="select-loan-type"
                          type="radio"
                          id="Home_loan"
                        />
                        <label htmlFor="Home_loan" className="loan-type">
                          <Image
                            width={40}
                            height={50}
                            src="/img/apply-loan/icon-5.1.png"
                            alt="icon"
                          />
                          <Image
                            width={40}
                            height={50}
                            src="/img/apply-loan/icon-5.2.png"
                            alt="icon"
                          />
                          <span>home Loan</span>
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <input
                          className="select-loan-type-radio"
                          name="select-loan-type"
                          type="radio"
                          id="Buisness_loan"
                        />
                        <label htmlFor="Buisness_loan" className="loan-type">
                          <Image
                            width={40}
                            height={50}
                            src="/img/apply-loan/icon-6.1.png"
                            alt="icon"
                          />
                          <Image
                            width={40}
                            height={50}
                            src="/img/apply-loan/icon-6.2.png"
                            alt="icon"
                          />
                          <span>Buisness Loan</span>
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <input
                          className="select-loan-type-radio"
                          name="select-loan-type"
                          type="radio"
                          id="Car_loan"
                        />
                        <label htmlFor="Car_loan" className="loan-type">
                          <Image
                            width={40}
                            height={50}
                            src="/img/apply-loan/icon-7.1.png"
                            alt="icon"
                          />
                          <Image
                            width={40}
                            height={50}
                            src="/img/apply-loan/icon-7.2.png"
                            alt="icon"
                          />
                          <span>car Loan</span>
                        </label>
                      </div>
                    </div>
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <label className="label" htmlFor="loandetails01">
                          Choose your financing type
                        </label>
                        <select
                          className="form-select w-100"
                          id="loandetails01"
                          value={financingType}
                          onChange={handleChange}
                        >
                          <option value="Debt-Financing">Debt Financing</option>
                          <option value="Equity-Finance">Equity Finance</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="label" htmlFor="loandetails02">
                          Choose your preferred bank service
                        </label>
                        <select
                          className="form-select w-100"
                          id="loandetails02"
                          value={bankService}
                          onChange={handleChanges}
                        >
                          <option value="Individual-Banking">
                            Individual Banking
                          </option>
                          <option value="Business-Banking">
                            Business Banking
                          </option>
                          <option value="Digital-Banking">
                            Digital Banking
                          </option>
                          <option value="Loans">Loans</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="label" htmlFor="loan-amount">
                          Yout loan amount
                        </label>
                        <div className="input-field">
                          <span>$</span>
                          <input
                            type="number"
                            id="loan-amount"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <label className="label mb-4">Laon duration</label>

                        <div className="form-check form-check-inline mr-30">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            12 months
                          </label>
                        </div>
                        <div className="form-check form-check-inline mr-30">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            18 months
                          </label>
                        </div>

                        <div className="form-check form-check-inline mr-30">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            24 months
                          </label>
                        </div>

                        <div className="form-check form-check-inline mr-30">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio4"
                            value="option4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio4"
                          >
                            36 months
                          </label>
                        </div>
                        <div className="form-check form-check-inline mr-30">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio5"
                            value="option5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio5"
                          >
                            48 months
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row  mt-60">
                      <div className="col-md-12">
                        <div className="nav-btn d-flex justify-content-end">
                          <button
                            className=" theme-btn-primary_alt theme-btn next-btn"
                            type="submit"
                          >
                            next<i className="arrow_right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
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

export default LoanDetailPage;
