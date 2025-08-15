'use client';
import Link from 'next/link';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import Image from 'next/image';
import { useTheme } from '@/contextAPi/ThemeContext';
import { usePathname } from 'next/navigation';

// Type definitions
interface SubmenuItem {
  text: string;
  link: string;
  submenu?: SubmenuItem[];
}

interface NavigationItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

const PersonalDestails = () => {
  const inputRef = useRef(null);
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

  useEffect(() => {
    if (inputRef.current) {
      intlTelInput(inputRef.current, {
        initialCountry: 'bd',
        nationalMode: false,
        formatOnDisplay: true,
      });
    }
  }, []);

  const [dob, setDob] = useState({ day: '', month: '', year: '' });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDob({ ...dob, [e.target.name]: e.target.value });
  };

  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, '0')
  );

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const years = Array.from({ length: 2022 - 1970 + 1 }, (_, i) => 1970 + i);
  
  const isActiveRoute = (href: string, submenu: SubmenuItem[] | null = null): boolean => {
    if (pathname === href) return true;
    
    // Check if any submenu item is active
    if (submenu) {
      return submenu.some((item: SubmenuItem) => {
        if (pathname === item.link) return true;
        // Check nested submenu
        if (item.submenu) {
          return item.submenu.some((deepItem: SubmenuItem) => pathname === deepItem.link);
        }
        return false;
      });
    }
    
    return false;
  };

  // Navigation menu items
  const navigationItems: NavigationItem[] = [
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
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand sticky_logo" href="/">
              <Image
                width={90}
                height={30}
                className="main"
                src="/img/logo/Logo.png"
                alt="logo"
              />
              <Image
                width={90}
                height={30}
                className="sticky"
                src="/img/logo/Logo-2.png"
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

            <div
              className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav menu ms-auto">
                {navigationItems.map((item: NavigationItem, idx: number) => (
                  <li key={idx} className="nav-item dropdown submenu">
                    <Link
                      href={item.href}
                      className={`nav-link dropdown-toggle ${
                        isActiveRoute(item.href, item.submenu) ? 'active' : ''
                      }`}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
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
                      {item.submenu?.map((sub: SubmenuItem, i: number) => (
                        <li
                          key={i}
                          className={`nav-item ${
                            sub.submenu ? 'dropdown submenu' : ''
                          }`}
                        >
                          <Link
                            href={sub.link}
                            className={`nav-link ${
                              pathname === sub.link ? 'active' : ''
                            }`}
                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
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
                                {sub.submenu.map((deep: SubmenuItem, j: number) => (
                                  <li key={j} className="nav-item">
                                    <Link
                                      href={deep.link}
                                      className={`nav-link ${
                                        pathname === deep.link ? 'active' : ''
                                      }`}
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
            className="breadcrumb-widget  pt-200 pb-100"
            style={{ backgroundImage: `url(img/breadcrumb/bg-1.png)` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="breadcrumb-content pt-95">
                    <h1>Personal Details</h1>
                    <ul>
                      <li>
                        <Link href="/">home</Link>
                      </li>
                      <li>
                        <Link href="/">pages</Link>
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
                    <li className=" complete  mt-0">
                      <a href="loan-details.html">
                        <div className="number">
                          <i className="icon_check"></i> <span>1</span>
                        </div>{' '}
                        Loan Details
                      </a>
                    </li>
                    <li className="active">
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
                  <form action="document-upload.html">
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <label className="label" htmlFor="fName">
                          First Name*
                        </label>
                        <input
                          id="fName"
                          className="form-control"
                          type="text"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="label" htmlFor="lName">
                          Last Name*
                        </label>
                        <input
                          id="lName"
                          className="form-control"
                          type="text"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="label mb-2" htmlFor="dob-d">
                          Date of Birth*
                        </label>

                        <div className="dob d-flex gap-2">
                          {/* Day */}
                          <select
                            id="dob-d"
                            name="day"
                            className="form-select"
                            value={dob.day}
                            onChange={handleChange}
                          >
                            <option value="">Day</option>
                            {days.map((day) => (
                              <option key={day} value={day}>
                                {day}
                              </option>
                            ))}
                          </select>

                          {/* Month */}
                          <select
                            id="dob-m"
                            name="month"
                            className="form-select"
                            value={dob.month}
                            onChange={handleChange}
                          >
                            <option value="">Month</option>
                            {months.map((month, i) => (
                              <option
                                key={i}
                                value={String(i + 1).padStart(2, '0')}
                              >
                                {month}
                              </option>
                            ))}
                          </select>

                          {/* Year */}
                          <select
                            id="dob-y"
                            name="year"
                            className="form-select"
                            value={dob.year}
                            onChange={handleChange}
                          >
                            <option value="">Year</option>
                            {years.map((year) => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label className="label mb-4">Marital Statas*</label>

                        <div className="form-check form-check-inline me-5">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="MaritalStatas"
                            id="single"
                            value="single"
                          />
                          <label className="form-check-label" htmlFor="single">
                            Single
                          </label>
                        </div>
                        <div className="form-check form-check-inline me-5">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="MaritalStatas"
                            id="married"
                            value="married"
                          />
                          <label className="form-check-label" htmlFor="married">
                            Married
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="label" htmlFor="emailName">
                          Email
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          id="emailName"
                          placeholder="examplename@example.com"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="label" htmlFor="inputPhoneNumber">
                          Mobile Number*
                        </label>
                        <input
                          id="inputPhoneNumber"
                          ref={inputRef}
                          className="form-control w-100"
                          type="number" // use "tel" instead of "number" for better intl support
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="label" htmlFor="pAddress">
                          Present Address*
                        </label>
                        <input
                          id="pAddress"
                          className="form-control"
                          type="text"
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="label" htmlFor="stateName">
                          State*
                        </label>
                        <input
                          id="stateName"
                          className="form-control"
                          type="text"
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="label" htmlFor="cityName">
                          City*
                        </label>
                        <input
                          id="cityName"
                          className="form-control"
                          type="text"
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="label" htmlFor="zipCode">
                          Postal / Zip Code*
                        </label>
                        <input
                          id="zipCode"
                          className="form-control"
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="row mt-60">
                      <div className="col-md-12">
                        <div className="nav-btn d-flex flex-wrap justify-content-between">
                          <Link
                            href="/loan-details"
                            className=" prev-btn theme-btn-primary_alt theme-btn"
                          >
                            <i className="arrow_left"></i>previous
                          </Link>
                          <button
                            type="submit"
                            className=" next-btn theme-btn-primary_alt theme-btn "
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
                    Copyright &copy; Banca 2025. <br className="d-sm-none" />{' '}
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

export default PersonalDestails;
