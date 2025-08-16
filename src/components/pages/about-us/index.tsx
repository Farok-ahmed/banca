/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { useTheme } from '@/contextAPi/ThemeContext';
import { NavigationItem } from '@/types/NavigationItem';
import { NestedSubmenuItem } from '@/types/NestedSubmenuItem';
import { SubmenuItem } from '@/types/SubmenuItem';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import Slider from 'react-slick';

import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/css/nice-select.css";
import "nouislider/dist/nouislider.css";
import "@/styles/css/jquery.fancybox.min.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";

const AboutPage = () => {
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

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Function to check if a route is active
  const isActiveRoute = (href: string, submenu?: SubmenuItem[]): boolean => {
    // Exact match for main route
    if (pathname === href) {
      return true;
    }

    // Check if any submenu item matches current path
    if (submenu) {
      return submenu.some((item: SubmenuItem) => {
        if (item.submenu) {
          // Check nested submenu items
          return item.submenu.some(
            (subItem: NestedSubmenuItem) => pathname === subItem.link
          );
        }
        return pathname === item.link;
      });
    }

    return false;
  };

  // Function to check if a submenu item is active
  const isActiveSubmenuItem = (link: string): boolean => {
    return pathname === link;
  };

  // Function to check if parent submenu has active child
  const hasActiveChild = (submenu?: NestedSubmenuItem[]): boolean => {
    if (!submenu) return false;
    return submenu.some((item: NestedSubmenuItem) => pathname === item.link);
  };

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
        <div className="header-top py-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="header-info-left">
                  <div className="language-list position-relative w-auto">
                    <select
                      className="form-select border-0 shadow-none text-white pe-5 ps-1"
                      aria-label="Language select"
                      style={{
                        appearance: 'none',
                        backgroundColor: '#171d24',
                        color: '#ffffff',
                        cursor: 'pointer',
                        border: 'none',
                        boxShadow: 'none',
                      }}
                      defaultValue="English"
                    >
                      <option value="English">English</option>
                      <option value="Bangla">Bangla</option>
                      <option value="French">French</option>
                      <option value="Hindi">Hindi</option>
                    </select>

                    <span className="position-absolute top-50 end-0 translate-middle-y me-2 text-white">
                      <i className="bi bi-chevron-down ms-2 text-white pointer-events-none"></i>
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
                        src="/img/phone-outline-white.png"
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

        <div className="header-menu header-menu-2 bg_white" id="sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand" href="/">
                <Image
                  width={110}
                  height={35}
                  src="/img/logo/Logo-2.png"
                  alt="logo"
                  priority
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
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e: React.KeyboardEvent) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            handleDropdownToggle(item.label);
                          }
                        }}
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
                                isActiveSubmenuItem(sub.link) ||
                                hasActiveChild(sub.submenu)
                                  ? 'active'
                                  : ''
                              }`}
                              onClick={(
                                e: React.MouseEvent<HTMLAnchorElement>
                              ) => {
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
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e: React.KeyboardEvent) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                      handleDropdownToggle(
                                        `${item.label}-${sub.text}`
                                      );
                                    }
                                  }}
                                ></i>
                                <ul
                                  className={`dropdown-menu ${
                                    openDropdown === `${item.label}-${sub.text}`
                                      ? 'show'
                                      : ''
                                  }`}
                                >
                                  {sub.submenu.map(
                                    (deep: NestedSubmenuItem, j: number) => (
                                      <li key={j} className="nav-item">
                                        <Link
                                          href={deep.link}
                                          className={`nav-link ${
                                            isActiveSubmenuItem(deep.link)
                                              ? 'active'
                                              : ''
                                          }`}
                                        >
                                          {deep.text}
                                        </Link>
                                      </li>
                                    )
                                  )}
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
                  className="theme-btn"
                  href="https://themeforest.net/item/banca-banking-business-loan-bootstrap5html-website-template/32788885?s_rank=9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Banca
                </Link>

                {/* Dark Mode Toggle */}
                <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
                  <label
                    htmlFor="darkModeToggleV2"
                    className="tab-btn tab-btns"
                  >
                    <IoMoonOutline />
                  </label>
                  <label htmlFor="darkModeToggleV2" className="tab-btn">
                    <IoSunnyOutline />
                  </label>
                  <label
                    className="ball"
                    style={{
                      left: theme === 'body_dark' ? 3 : 26,
                    }}
                    htmlFor="darkModeToggleV2"
                  ></label>
                  <input
                    type="checkbox"
                    name="darkModeToggleV2"
                    id="darkModeToggleV2"
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
                  <Link
                    className="theme-btn-2 theme-btn-primary mt-45 wow fadeInUp"
                    data-wow-delay="0.4s"
                    href="#"
                  >
                    <span className="arrow">
                      <span className="horizontal-line"></span>
                    </span>
                    View our 2019 Annual Report
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg_white pt-90 pb-160">
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
            <div className="row gy-lg-0 gy-4">
              <div className="col-lg-7">
                <div className="statistics-widget-2 wow fadeInUp">
                  <div className="row gx-0">
                    <div
                      className="col-7"
                      style={{ backgroundColor: '#610fc9' }}
                    >
                      <Slider {...settings} className="statistics-slider">
                        <div className="widget-content">
                          <h1 className="stat-counter">15,000</h1>
                          <p>We employ 15,000 people around the world</p>
                        </div>
                        <div className="widget-content">
                          <h1 className="stat-counter">10,000</h1>
                          <p>We employ 15,000 people around the world</p>
                        </div>
                        <div className="widget-content">
                          <h1 className="stat-counter">25,000</h1>
                          <p>We employ 15,000 people around the world</p>
                        </div>
                      </Slider>
                    </div>
                    <div className="col-5">
                      <Image
                        width={200}
                        height={200}
                        style={{ height: 200 }}
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
                  <div
                    className="widget-content widget-2"
                    style={{ height: 200 }}
                  >
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
                        <Link
                          className="nav-link active"
                          id="2020-tab"
                          data-bs-toggle="tab"
                          href="#twenty"
                          role="tab"
                          aria-controls="twenty"
                          aria-selected="true"
                        >
                          2020
                        </Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Link
                          className="nav-link"
                          id="2019-tab"
                          data-bs-toggle="tab"
                          href="#nineteen"
                          role="tab"
                          aria-controls="nineteen"
                          aria-selected="false"
                        >
                          2019
                        </Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Link
                          className="nav-link"
                          id="2018-tab"
                          data-bs-toggle="tab"
                          href="#eighteen"
                          role="tab"
                          aria-controls="eighteen"
                          aria-selected="false"
                        >
                          2018
                        </Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Link
                          className="nav-link"
                          id="2017-tab"
                          data-bs-toggle="tab"
                          href="#seventeen"
                          role="tab"
                          aria-controls="seventeen"
                          aria-selected="false"
                        >
                          2017
                        </Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Link
                          className="nav-link "
                          id="2016-tab"
                          data-bs-toggle="tab"
                          href="#sixteen"
                          role="tab"
                          aria-controls="sixteen"
                          aria-selected="false"
                        >
                          2016
                        </Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Link
                          className="nav-link "
                          id="2015-tab"
                          data-bs-toggle="tab"
                          href="#fifteen"
                          role="tab"
                          aria-controls="fifteen"
                          aria-selected="false"
                        >
                          2015
                        </Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Link
                          className="nav-link "
                          id="2014-tab"
                          data-bs-toggle="tab"
                          href="#lessfifteen"
                          role="tab"
                          aria-controls="lessfifteen"
                          aria-selected="false"
                        >
                          2014 and before
                        </Link>
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
                <Link
                  href="#"
                  className="theme-btn theme-btn-outlined wow fadeInLeft"
                >
                  {' '}
                  see more <i className="arrow_carrot-right "></i>
                </Link>
              </div>
            </div>

            <div className="row pt-65 gy-md-0 gy-4">
              <div className="col-lg-4">
                <div
                  className="single-leadership-widget wow fadeInUp "
                  data-wow-delay="0.1s"
                >
                  <Link href="#">
                    <img src="/img/leadership/img-1.png" alt="leader-1" />
                    <div className="leader-info">
                      <h5>Eldridge Robles</h5>
                      <p>Co-Founder, Conis</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className="single-leadership-widget wow fadeInUp "
                  data-wow-delay="0.3s"
                >
                  <Link href="#">
                    <img src="/img/leadership/img-2.png" alt="leader-2" />
                    <div className="leader-info">
                      <h5>Eldridge Robles</h5>
                      <p>Co-Founder, Conis</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="single-leadership-widget wow fadeInUp "
                  data-wow-delay="0.5s"
                >
                  <Link href="#">
                    <img src="/img/leadership/img-3.png" alt="leader-3" />
                    <div className="leader-info">
                      <h5>Eldridge Robles</h5>
                      <p>Co-Founder, Conis</p>
                    </div>
                  </Link>
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
                  <Link href="#" className="theme-btn wow fadeInLeft">
                    See results
                  </Link>
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

export default AboutPage;
