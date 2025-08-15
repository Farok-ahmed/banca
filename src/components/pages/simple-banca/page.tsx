'use client';

import { useEffect, useRef, useState } from 'react';
import * as noUiSlider from 'nouislider';
import FAQAccordion from '@/components/FaqAccordion';
import Image from 'next/image';
import Link from 'next/link';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import 'nouislider/dist/nouislider.css';
import FeatureSlider from '@/components/SimpleAccordion';
import SimplebancaSlider from '@/components/SimplebancaSlider';
import { useTheme } from '@/contextAPi/ThemeContext';
import { usePathname } from 'next/navigation';

interface HTMLDivElementWithSlider extends HTMLDivElement {
  noUiSlider?: noUiSlider.API;
}

const SampleBanca = () => {
  const amountSliderRef = useRef<HTMLDivElementWithSlider>(null);
  const periodSliderRef = useRef<HTMLDivElementWithSlider>(null);
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname()

  const [amount, setAmount] = useState(5000);
  const [period, setPeriod] = useState(3);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 992;

  useEffect(() => {
    const amountSlider = amountSliderRef.current as HTMLDivElementWithSlider;
    const periodSlider = periodSliderRef.current as HTMLDivElementWithSlider;

    if (amountSlider && !amountSlider.noUiSlider) {
      noUiSlider.create(amountSlider, {
        start: [amount],
        connect: [true, false],
        range: { min: 5000, max: 250000 },
        step: 1000,
        tooltips: false,
        format: {
          to: (value: number) => `$${Math.round(value)}`,
          from: (value: string) => Number(value.replace(/\$/g, '')),
        },
      });

      (amountSlider.noUiSlider as unknown as noUiSlider.API).on(
        'update',
        (values: (string | number)[], handle: number) => {
          const val = Number(values[handle].toString().replace(/\$/g, ''));
          setAmount(val);
        }
      );
    }

    if (periodSlider && !periodSlider.noUiSlider) {
      noUiSlider.create(periodSlider, {
        start: [period],
        connect: [true, false],
        range: { min: 1, max: 5 },
        step: 1,
        tooltips: false,
        format: {
          to: (value: number) => `${Math.round(value)}y`,
          from: (value: string) => Number(value.replace(/y/g, '')),
        },
      });

      (periodSlider.noUiSlider as unknown as noUiSlider.API).on(
        'update',
        (values: (string | number)[], handle: number) => {
          const val = Number(values[handle].toString().replace(/y/g, ''));
          setPeriod(val);
        }
      );
    }

    return () => {
      amountSlider?.noUiSlider?.destroy();
      periodSlider?.noUiSlider?.destroy();
    };
  }, [amount, period]);

  type SubmenuItem = [string, string] | [string, string, [string, string][]];

  // Helper functions for active route detection
  const isActiveRoute = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname.startsWith(href);
  };

  const isSubmenuActive = (submenu: SubmenuItem[]): boolean => {
    return submenu.some((sub) => {
      if (Array.isArray(sub[2])) {
        const childItems = sub[2] as [string, string][];
        return childItems.some((child) => isActiveRoute(child[0]));
      }
      return isActiveRoute(sub[0]);
    });
  };

  // Menu items configuration
  const menuItems = [
    {
      label: 'Home',
      href: '/',
      submenu: [
        ['/', 'Smart Finance'],
        ['/index-company', 'Loan Company'],
        ['/mobile-app', 'Mobile App'],
        ['/simple-banca', 'Simple Banca'],
        ['/loan-steps', 'Loan Steps'],
        ['/finance-sass-app', 'Finance Sass App'],
        ['/small-bank', 'Small Bank'],
      ] as SubmenuItem[],
    },
    {
      label: 'Loan',
      href: '/loan',
      submenu: [
        ['/loan', 'Get loan'],
        [
          '/loan-details',
          'Loan Application',
          [
            ['/loan-details', 'Step 01'],
            ['/personal-details', 'Step 02'],
            ['/document-upload', 'Step 03'],
          ],
        ],
      ] as SubmenuItem[],
    },
    {
      label: 'Job Pages',
      href: '/career',
      submenu: [
        ['/career', 'Career'],
        ['/jobs', 'Jobs'],
        ['/job-application', 'Job Application'],
      ] as SubmenuItem[],
    },
    {
      label: 'Pages',
      href: '/card',
      submenu: [
        ['/card', 'Cards'],
        ['/about-us', 'About Us'],
        ['/contact-us', 'Contact Us'],
        ['/error', '404 Error'],
      ] as SubmenuItem[],
    },
    {
      label: 'Blog',
      href: '/blog-listing',
      submenu: [
        ['/blog-listing', 'Blog Listing'],
        ['/blog-details', 'Blog Details'],
      ] as SubmenuItem[],
    },
  ];
  

  return (
    <div>
      <header className="header">
      <div className="header-menu header-menu-2" id="sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo */}
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

            {/* Navigation Menu */}
            <div
              className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav menu ms-auto">
                {menuItems.map((item, idx) => {
                  const isMainActive = isActiveRoute(item.href);
                  const isAnySubmenuActive = isSubmenuActive(item.submenu);
                  const shouldShowActive = isMainActive || isAnySubmenuActive;

                  return (
                    <li key={idx} className="nav-item dropdown submenu">
                      <Link
                        href={item.href}
                        className={`nav-link dropdown-toggle ${shouldShowActive ? 'active' : ''}`}
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
                      />

                      <ul
                        className={`dropdown-menu ${
                          openDropdown === item.label ? 'show' : ''
                        }`}
                      >
                        {item.submenu.map((sub, subIdx) => {
                          if (Array.isArray(sub[2])) {
                            // Handle nested submenu
                            const childItems = sub[2] as [string, string][];
                            const isParentActive = isActiveRoute(sub[0]);
                            const isAnyChildActive = childItems.some((child) =>
                              isActiveRoute(child[0])
                            );

                            return (
                              <li
                                className="nav-item dropdown submenu"
                                key={subIdx}
                              >
                                <Link
                                  href={sub[0]}
                                  className={`nav-link dropdown-toggle ${
                                    isParentActive || isAnyChildActive ? 'active' : ''
                                  }`}
                                  onClick={(e) => {
                                    if (isMobile) {
                                      e.preventDefault();
                                    }
                                  }}
                                >
                                  {sub[1]}
                                </Link>
                                <ul className="dropdown-menu">
                                  {childItems.map((child, i) => (
                                    <li className="nav-item" key={i}>
                                      <Link
                                        href={child[0]}
                                        className={`nav-link ${
                                          isActiveRoute(child[0]) ? 'active' : ''
                                        }`}
                                      >
                                        {child[1]}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            );
                          } else {
                            // Handle regular submenu item
                            return (
                              <li className="nav-item" key={subIdx}>
                                <Link
                                  href={sub[0]}
                                  className={`nav-link ${
                                    isActiveRoute(sub[0]) ? 'active' : ''
                                  }`}
                                >
                                  {sub[1]}
                                </Link>
                              </li>
                            );
                          }
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>

              {/* Buy Button */}
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
                <label htmlFor="darkModeToggle" className="tab-btn tab-btns">
                  <IoMoonOutline />
                </label>
                <label htmlFor="darkModeToggle" className="tab-btn">
                  <IoSunnyOutline />
                </label>
                <label
                  className="ball"
                  htmlFor="darkModeToggle"
                  style={{
                    left: theme === 'body_dark' ? 3 : 26,
                  }}
                />
                <input
                  type="checkbox"
                  name="darkModeToggle"
                  id="darkModeToggle"
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
        <section className="banner-area-3 pt-90" id="banner_animation2">
          <div className="bg-slides">
            <div
              className="slide"
              data-parallax='{"x": 220, "y": 0, "rotateZ":0}'
            >
              <Image
                width={600}
                height={500}
                className="wow slideInRight"
                data-wow-delay="0.2s"
                src="/img/banner/slide-shape-1.png"
                alt="img"
              />
            </div>
            <div
              className="slide"
              data-parallax='{"x": 270, "y": 0, "rotateZ":0}'
            >
              <Image
                width={500}
                height={500}
                className="wow slideInRight"
                data-wow-delay="0.6s"
                src="/img/banner/slide-shape-2.png"
                alt="img"
              />
            </div>
            <div
              className="slide"
              data-parallax='{"x": 330, "y": 0, "rotateZ":0}'
            >
              <Image
                width={500}
                height={500}
                className="wow slideInRight"
                data-wow-delay="1.3s"
                src="/img/banner/slide-shape-3.png"
                alt="img"
              />
            </div>
          </div>
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-7 pt-100 pt-lg-200 pb-lg-200 pb-100">
                <div className="banner-content pb-20 pt-20">
                  <h1 className="wow fadeInUp" data-wow-delay="0.1s">
                    Compare Loans From Several Banks Find The Cheapest Loan
                  </h1>

                  <Link
                    href="/loan"
                    className="wow fadeInUp mt-50 theme-btn theme-btn-rounded-2 theme-btn-lg theme-btn-alt"
                    data-wow-delay="0.3s"
                  >
                    Apply Now
                    <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 d-none d-lg-block position-relative">
                <Image
                  width={670}
                  height={700}
                  className="person-img "
                  src="/img/banner/person-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="feature-calculator pt-120 pb-140 bg_white">
          <div className="container">
            {/* <div className="feature">
              <div className="row">
                <div className="col-md-12">
                  <div className="feature-slider">
                    <div
                      className="feature-card-widget-3 wow fadeInLeft  card-1"
                      data-wow-delay="0.1s"
                    >
                      <div className="shapes">
                        <Image
                          width={110}
                          height={60}
                          src="/img/feature/shape-17.png"
                          alt="shape"
                        />
                        <Image
                          width={70}
                          height={60}
                          src="/img/feature/shape-18.png"
                          alt="shape"
                        />
                        <Image
                          width={30}
                          height={30}
                          src="/img/feature/shape-19.png"
                          alt="shape"
                        />
                        <Image
                          width={20}
                          height={20}
                          src="/img/feature/shape-20.png"
                          alt="shape"
                        />
                      </div>
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/icon-8.svg"
                        alt="icon"
                      />
                      <span className="title">Mortgage</span>
                      <h5>
                        Got a <span> question about Mortgage Loan?</span>
                      </h5>
                      <Link href="#">Write to us</Link>
                    </div>
                    <div
                      className="feature-card-widget-3 wow fadeInLeft  card-2"
                      data-wow-delay="0.3s"
                    >
                      <div className="shapes">
                        <Image
                          width={100}
                          height={60}
                          src="/img/feature/shape-21.png"
                          alt="shape"
                        />
                        <Image
                          width={20}
                          height={20}
                          src="/img/feature/shape-22.png"
                          alt="shape"
                        />
                        <Image
                          width={100}
                          height={80}
                          src="/img/feature/shape-23.png"
                          alt="shape"
                        />
                        <Image
                          width={20}
                          height={20}
                          src="/img/feature/shape-24.png"
                          alt="shape"
                        />
                      </div>
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/icon-9.svg"
                        alt="icon"
                      />
                      <span className="title">Bank account</span>
                      <h5>
                        Got a <span> question about Mortgage Loan?</span>
                      </h5>
                      <Link href="#">Write to us</Link>
                    </div>
                    <div
                      className="feature-card-widget-3 wow fadeInLeft  card-3"
                      data-wow-delay="0.5s"
                    >
                      <div className="shapes">
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-25.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-26.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-27.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-28.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-28.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-29.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-29.png"
                          alt="shape"
                        />
                      </div>
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/icon-10.svg"
                        alt="icon"
                      />
                      <span className="title">Loans</span>
                      <h5>
                        Got a <span> question about Mortgage Loan?</span>
                      </h5>
                      <Link href="#">Write to us</Link>
                    </div>
                    <div
                      className="feature-card-widget-3 wow fadeInLeft  card-1"
                      data-wow-delay="0.7s"
                    >
                      <div className="shapes">
                        <Image
                          width={110}
                          height={60}
                          src="/img/feature/shape-17.png"
                          alt="shape"
                        />
                        <Image
                          width={70}
                          height={60}
                          src="/img/feature/shape-18.png"
                          alt="shape"
                        />
                        <Image
                          width={30}
                          height={30}
                          src="/img/feature/shape-19.png"
                          alt="shape"
                        />
                        <Image
                          width={20}
                          height={20}
                          src="/img/feature/shape-20.png"
                          alt="shape"
                        />
                      </div>
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/icon-8.svg"
                        alt="icon"
                      />
                      <span className="title">Mortgage</span>
                      <h5>
                        Got a <span> question about Mortgage Loan?</span>
                      </h5>
                      <Link href="#">Write to us</Link>
                    </div>
                    <div
                      className="feature-card-widget-3 wow fadeInLeft  card-2"
                      data-wow-delay="0.9s"
                    >
                      <div className="shapes">
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-21.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-22.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-23.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-24.png"
                          alt="shape"
                        />
                      </div>
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/icon-9.svg"
                        alt="icon"
                      />
                      <span className="title">Bank account</span>
                      <h5>
                        Got a <span> question about Mortgage Loan?</span>
                      </h5>
                      <Link href="#">Write to us</Link>
                    </div>
                    <div
                      className="feature-card-widget-3 wow fadeInLeft  card-3"
                      data-wow-delay="1.1s"
                    >
                      <div className="shapes">
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-25.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-26.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-27.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-28.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-28.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-29.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-29.png"
                          alt="shape"
                        />
                      </div>
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/icon-10.svg"
                        alt="icon"
                      />
                      <span className="title">Loans</span>
                      <h5>
                        Got a <span> question about Mortgage Loan?</span>
                      </h5>
                      <Link href="#">Write to us</Link>
                    </div>
                    <div
                      className="feature-card-widget-3 wow fadeInLeft  card-1"
                      data-wow-delay="1.3s"
                    >
                      <div className="shapes">
                        <Image
                          width={110}
                          height={60}
                          src="/img/feature/shape-17.png"
                          alt="shape"
                        />
                        <Image
                          width={70}
                          height={60}
                          src="/img/feature/shape-18.png"
                          alt="shape"
                        />
                        <Image
                          width={30}
                          height={30}
                          src="/img/feature/shape-19.png"
                          alt="shape"
                        />
                        <Image
                          width={20}
                          height={20}
                          src="/img/feature/shape-20.png"
                          alt="shape"
                        />
                      </div>
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/icon-8.svg"
                        alt="icon"
                      />
                      <span className="title">Mortgage</span>
                      <h5>
                        Got a <span> question about Mortgage Loan?</span>
                      </h5>
                      <Link href="#">Write to us</Link>
                    </div>
                    <div
                      className="feature-card-widget-3 wow fadeInLeft  card-2"
                      data-wow-delay="1.5s"
                    >
                      <div className="shapes">
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-21.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-22.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-23.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-24.png"
                          alt="shape"
                        />
                      </div>
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/icon-9.svg"
                        alt="icon"
                      />
                      <span className="title">Bank account</span>
                      <h5>
                        Got a <span> question about Mortgage Loan?</span>
                      </h5>
                      <Link href="#">Write to us</Link>
                    </div>
                    <div
                      className="feature-card-widget-3 wow fadeInLeft  card-3"
                      data-wow-delay="1.7s"
                    >
                      <div className="shapes">
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-25.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-26.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-27.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-28.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-28.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-29.png"
                          alt="shape"
                        />
                        <Image
                          width={200}
                          height={200}
                          src="/img/feature/shape-29.png"
                          alt="shape"
                        />
                      </div>
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/icon-10.svg"
                        alt="icon"
                      />
                      <span className="title">Loans</span>
                      <h5>
                        Got a <span> question about Mortgage Loan?</span>
                      </h5>
                      <Link href="#">Write to us</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <FeatureSlider />

            <div className="calculator mt-60">
              <div className="steps d-flex flex-wrap justify-content-between mt-50 mr-30 ml-30">
                <div className="single-step mt-2 mt-sm-0">
                  <span>1</span>Apply for free in 2 min.
                </div>
                <div className="single-step mt-2 mt-sm-0">
                  <span>2</span>Compare offers
                </div>
                <div className="single-step mt-2 mt-sm-0">
                  <span>3</span>Choose the best offer
                </div>
              </div>

              {/* <div className="row border-bottom gx-0 px-4">
                <div className="col-lg-6 border-end ">
                  <div className="calculator-slider pt-40 pb-5 ps-md-4 pe-md-5 px-1">
                    <label>Loan Amount</label>
                    <div className="d-flex align-items-center">
                      <div className="range-slider" id="SliderAmount"></div>
                      <input
                        className="range-input"
                        type="text"
                        id="SetSliderAmount"
                      />
                    </div>
                    <span className="range">Min $5,000 - Max $250,000</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="calculator-slider pt-40 pb-5 ps-md-4 ps-lg-5 pe-md-4 px-1">
                    <label className="label-2">Loan Period</label>
                    <div className="d-flex align-items-center">
                      <div className="range-slider" id="SliderPeriod"></div>
                      <input
                        className="range-input"
                        type="text"
                        id="SetSliderPeriod"
                      />
                    </div>

                    <span className="range">Min 1 year - Max 5 years</span>
                  </div>
                </div>
              </div> */}

              <div className="row border-bottom gx-0 px-4">
                {/* Loan Amount */}
                <div className="col-lg-6 border-end">
                  <div className="calculator-slider pt-40 pb-5 ps-md-4 pe-md-5 px-1">
                    <label>Loan Amount</label>
                    <div className="d-flex align-items-center">
                      <div
                        className="range-slider me-3 w-100"
                        ref={amountSliderRef}
                      ></div>
                      <input
                        className="range-input form-control w-auto"
                        type="text"
                        value={`$${amount.toLocaleString()}`}
                        readOnly
                      />
                    </div>
                    <span className="range">Min $5,000 - Max $250,000</span>
                  </div>
                </div>

                {/* Loan Period */}
                <div className="col-lg-6">
                  <div className="calculator-slider pt-40 pb-5 ps-md-4 ps-lg-5 pe-md-4 px-1">
                    <label className="label-2">Loan Period</label>
                    <div className="d-flex align-items-center">
                      <div
                        className="range-slider me-3 w-100"
                        ref={periodSliderRef}
                      ></div>
                      <input
                        className="range-input form-control w-auto"
                        type="text"
                        value={`${period} year${period > 1 ? 's' : ''}`}
                        readOnly
                      />
                    </div>
                    <span className="range">Min 1 year - Max 5 years</span>
                  </div>
                </div>
              </div>

              <div className="expected-payment mt-50 mr-30 ml-30 mb-50">
                <div className="bg_disable d-flex justify-content-between flex-wrap sec-head align-items-center">
                  <div>
                    <h5>Expected monthly payment</h5>
                    <p>Based on 7% borrowing rate</p>
                  </div>
                  <h4 className="mb-0">$1,162 / month</h4>
                </div>
                <p className="text mx-sm-4 mt-20">
                  Price example: Total credit amount USD $100,000 - Maturity 120
                  months - Variable borrowing rate 7% - APR 7.24% - Etb. USD
                  $1,000 - Total repayment: USD $140,190 - Total credit costs:
                  USD $40,190 - 14-day right of withdrawal
                </p>

                <div className="text-center mt-45">
                  <Link
                    href="/loan-details"
                    className="theme-btn theme-btn-rounded"
                  >
                    {' '}
                    Next <i className="arrow_right"></i>{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="help-ad-area pt-125 pb-115 overflow-hidden">
          <div className="container">
            <div className="section-title">
              <h2>We Have Helped More Than 10,000 Users</h2>
            </div>

            <div className="row pt-40">
              <div className="col-lg-10 mx-auto">
                <div className="row">
                  <div className="col-12">
                    <Image
                      width={960}
                      height={200}
                      className="main-img img-fluid"
                      src="/img/help-ad/img-1.png"
                      alt="img"
                    />
                  </div>
                  <div className="col-lg-5">
                    <div className="offers">
                      <ul>
                        <li>
                          {' '}
                          <span>
                            <i className="icon_check"></i>
                          </span>{' '}
                          Offers from several banks
                        </li>
                        <li>
                          {' '}
                          <span>
                            <i className="icon_check"></i>
                          </span>{' '}
                          Free & no obligation{' '}
                        </li>
                        <li>
                          {' '}
                          <span>
                            <i className="icon_check"></i>
                          </span>{' '}
                          Compare safely and securely
                        </li>
                        <li>
                          {' '}
                          <span>
                            <i className="icon_check"></i>
                          </span>{' '}
                          Offer within a few hours
                        </li>
                      </ul>
                      <div className="shape">
                        {' '}
                        <Image
                          width={100}
                          height={100}
                          src="/img/help-ad/shape.png"
                          alt="shape"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <p className="pt-lg-60">
                      Compare multiple banks with just one non-binding
                      application. We save you the hassle of checking the price
                      at each bank.
                    </p>
                    <p className="py-4">
                      It takes 2 min. To fill out the application, you
                      immediately get quotes from banks and can choose the best
                      quote.
                    </p>
                    <p>
                      {' '}
                      We save you not only time, but in many cases also many
                      thousands of kroner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="banca-corporate bg_white pt-125 pb-110">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-title">
                  <h2 className="wow fadeInUp">
                    Banca Cooperates With These Banks
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    {' '}
                    <span>3000+ Companies</span> Trust Sturtaplanding to build
                    landing page for their <span> dream product</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-between mt-35 gy-sm-0 gy-4  text-center text-lg-start">
              <div className="col-lg-2 col-6">
                <Link
                  href="#"
                  className="single-brand wow fadeInRight"
                  data-wow-delay="0.1s"
                >
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid"
                    src="/img/banca-corporate/logo-1.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-lg-2 col-6">
                <Link
                  href="#"
                  className="single-brand wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid"
                    src="/img/banca-corporate/logo-2.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-lg-2 col-6">
                <Link
                  href="#"
                  className="single-brand wow fadeInRight"
                  data-wow-delay="0.5s"
                >
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid"
                    src="/img/banca-corporate/logo-3.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-lg-2 col-6">
                <Link
                  href="#"
                  className="single-brand wow fadeInRight"
                  data-wow-delay="0.7s"
                >
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid"
                    src="/img/banca-corporate/logo-4.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-lg-2 col-6 d-none d-lg-block">
                <Link
                  href="#"
                  className="single-brand wow fadeInRight"
                  data-wow-delay="0.9s"
                >
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid"
                    src="/img/banca-corporate/logo-5.png"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <div className="row justify-content-between gy-sm-0 gy-4 mt-20 text-center text-lg-start">
              <div className="col-lg-2 col-6">
                <Link
                  href="#"
                  className="single-brand wow fadeInRight"
                  data-wow-delay="0.1s"
                >
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid"
                    src="/img/banca-corporate/logo-1.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-lg-2 col-6">
                <Link
                  href="#"
                  className="single-brand wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid"
                    src="/img/banca-corporate/logo-2.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-lg-2 col-6">
                <Link
                  href="#"
                  className="single-brand wow fadeInRight"
                  data-wow-delay="0.5s"
                >
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid"
                    src="/img/banca-corporate/logo-3.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-lg-2 col-6">
                <Link
                  href="#"
                  className="single-brand wow fadeInRight"
                  data-wow-delay="0.7s"
                >
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid"
                    src="/img/banca-corporate/logo-4.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-lg-2 col-6 d-none d-lg-block">
                <Link
                  href="#"
                  className="single-brand wow fadeInRight"
                  data-wow-delay="0.9s"
                >
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid"
                    src="/img/banca-corporate/logo-5.png"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="articles-area pt-125 pb-140">
          <div className="container">
            <div className="section-title d-flex flex-wrap justify-content-between text-start align-items-center">
              <h2 className="mb-3 mb-sm-0 wow fadeInRight">
                More About Finance & Loans
              </h2>
              <Link className="wow fadeInLeft" href="/blog-listing">
                See All Articles <i className="arrow_right"></i>
              </Link>
            </div>
            <div className="row mt-60 gy-4 gy-lg-0">
              <div className="col-lg-3 col-md-6">
                <div
                  className="blog-widget-1 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <Image
                    width={200}
                    height={200}
                    className="w-100"
                    src="/img/blog/article-1.png"
                    alt="news image"
                  />
                  <div className="blog-content pr-10 pl-10">
                    <h6>
                      <Link href="/blog-details">
                        Credit rating as a private customer
                      </Link>
                    </h6>
                    <div className="blog-date">
                      <i className="icon_calendar"></i>
                      <span>February 25, 2021</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="blog-widget-1 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <Image
                    width={200}
                    height={200}
                    className="w-100"
                    src="/img/blog/article-2.png"
                    alt="news image"
                  />
                  <div className="blog-content pr-10 pl-10">
                    <h6>
                      <Link href="/blog-details">
                        Get hold of your private loans with a promissory
                      </Link>
                    </h6>
                    <div className="blog-date">
                      <i className="icon_calendar"></i>
                      <span>February 25, 2021</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="blog-widget-1 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <Image
                    width={200}
                    height={200}
                    className="w-100"
                    src="/img/blog/article-3.png"
                    alt="news image"
                  />
                  <div className="blog-content pr-10 pl-10">
                    <h6>
                      <Link href="/blog-details">
                        What is APR and what can you actually use it?
                      </Link>
                    </h6>
                    <div className="blog-date">
                      <i className="icon_calendar"></i>
                      <span>February 25, 2021</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="blog-widget-1 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <Image
                    width={200}
                    height={200}
                    className="w-100"
                    src="/img/blog/article-4.png"
                    alt="news image"
                  />
                  <div className="blog-content pr-10 pl-10">
                    <h6>
                      <Link href="/blog-details">
                        Superfast loans for your dream home
                      </Link>
                    </h6>
                    <div className="blog-date">
                      <i className="icon_calendar"></i>
                      <span>February 25, 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="testimonial-area pt-135 pb-140 bg_white">
          <div className="container">
            <div className="section-title d-md-none mb-4">
              <h2>What Our Customers Are Saying</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 pr-lg-35">
                <div className="testimonial-slider-3">
                  <div className="testimonial-widget-3 wow fadeInLeft">
                    <div className="client-img">
                      <Image
                        width={200}
                        height={200}
                        src="/img/testimonial/client-4.png"
                        alt="client"
                      />
                      <Link
                        className="play-btn"
                        data-fancybox
                        href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                      >
                        <i className="fas fa-play"></i>
                      </Link>
                      <p className="caption">
                        Best service and smooth process. Keep going on Banca
                        team. Thank you for immediate response on each stage of
                        process. Kudos the whole team.
                      </p>
                    </div>
                    <div className="client-info">
                      <h6>Linda Lawrence</h6>
                      <span>UI/UX Designer</span>
                    </div>
                  </div>
                  <div className="testimonial-widget-3 wow fadeInLeft">
                    <div className="client-img">
                      <Image
                        width={200}
                        height={200}
                        src="/img/testimonial/client-1.png"
                        alt="client"
                      />
                      <Link
                        className="play-btn"
                        data-fancybox
                        href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                      >
                        <i className="fas fa-play"></i>
                      </Link>
                      <p className="caption">
                        Best service and smooth process. Keep going on Banca
                        team. Thank you for immediate response on each stage of
                        process. Kudos the whole team.
                      </p>
                    </div>
                    <div className="client-info">
                      <h6>Timothy Vargas</h6>
                      <span>UI/UX Designer</span>
                    </div>
                  </div>
                  <div className="testimonial-widget-3 wow fadeInLeft">
                    <div className="client-img">
                      <Image
                        width={200}
                        height={200}
                        src="/img/testimonial/client-2.png"
                        alt="client"
                      />
                      <Link
                        className="play-btn"
                        data-fancybox
                        href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                      >
                        <i className="fas fa-play"></i>
                      </Link>
                      <p className="caption">
                        Best service and smooth process. Keep going on Banca
                        team. Thank you for immediate response on each stage of
                        process. Kudos the whole team.
                      </p>
                    </div>
                    <div className="client-info">
                      <h6>Sandra Hughes</h6>
                      <span>UI/UX Designer</span>
                    </div>
                  </div>
                  <div className="testimonial-widget-3 wow fadeInLeft">
                    <div className="client-img">
                      <Image
                        width={200}
                        height={200}
                        src="/img/testimonial/client-3.png"
                        alt="client"
                      />
                      <Link
                        className="play-btn"
                        data-fancybox
                        href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                      >
                        <i className="fas fa-play"></i>
                      </Link>
                      <p className="caption">
                        Best service and smooth process. Keep going on Banca
                        team. Thank you for immediate response on each stage of
                        process. Kudos the whole team.
                      </p>
                    </div>
                    <div className="client-info">
                      <h6>Zachary Taylo</h6>
                      <span>UI/UX Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 ">
                <div className="h-100 d-flex flex-column justify-content-between">
                  <div className="section-title text-start d-none d-md-block">
                    <h2 className="wow fadeInRight">
                      What Our Customers <br /> Are Saying
                    </h2>
                  </div>
                  <div className="testimonial-slider-2">
                    <div
                      className="testimonial-widget-2 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <Image
                        width={200}
                        height={200}
                        src="/img/testimonial/client-1.png"
                        alt="client"
                      />
                      <div className="client-info">
                        <p>Timothy Vargas</p>
                        <span>UI/UX Designer</span>
                      </div>
                    </div>
                    <div
                      className="testimonial-widget-2 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <Image
                        width={200}
                        height={200}
                        src="/img/testimonial/client-2.png"
                        alt="client"
                      />
                      <div className="client-info">
                        <p>Sandra Hughes</p>
                        <span>UI/UX Designer</span>
                      </div>
                    </div>
                    <div
                      className="testimonial-widget-2 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <Image
                        width={200}
                        height={200}
                        src="/img/testimonial/client-3.png"
                        alt="client"
                      />
                      <div className="client-info">
                        <p>Zachary Taylo</p>
                        <span>UI/UX Designer</span>
                      </div>
                    </div>
                    <div
                      className="testimonial-widget-2 wow fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      <Image
                        width={200}
                        height={200}
                        src="/img/testimonial/client-4.png"
                        alt="client"
                      />
                      <div className="client-info">
                        <p>Linda Lawrence</p>
                        <span>UI/UX Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <SimplebancaSlider />

        <section
          className="advisor-area pt-130  pb-140 overflow-hidden"
          id="MouseMoveAnimation"
        >
          <div className="container">
            <div className="row gy-4 gy-lg-0">
              <div className="col-lg-6 pr-lg-75">
                <div className="section-title text-start">
                  <h2 className="mb-0 wow fadeInUp">
                    Our Advisors Are Ready To Help You
                  </h2>
                </div>

                <div
                  className="advisor-img mt-45 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="shape ">
                    <div className="box">
                      <Image
                        width={300}
                        height={300}
                        className="layer layer2"
                        data-depth="0.5"
                        src="/img/faq/Shape.png"
                        alt="shape"
                      />
                    </div>
                    <div className="circle-shape"></div>
                  </div>
                  <Image
                    width={200}
                    height={200}
                    className="main-img"
                    src="/img/faq/advisor.png"
                    alt="advisor"
                  />

                  <div className="work-time">
                    <div className="circle-shape"></div>
                    All weekdays <span>10.00 - 18.00</span>
                  </div>
                </div>

                <div
                  className="row mt-4 gy-md-0 gy-3 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="col-md-6">
                    <Link
                      href="tel:01234567890"
                      className="theme-btn theme-btn-primary_alt theme-btn-rounded d-flex align-items-center justify-content-center"
                    >
                      <i className="icon_phone"></i> 01234-567890
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <Link
                      href="mailto:bancainfo@email.com"
                      className="theme-btn theme-btn-primary_alt theme-btn-rounded d-flex align-items-center justify-content-center"
                    >
                      <i className="icon_mail_alt "></i> info@banca.com
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-6">
                <div className="faq-widget-2">
                  <div className="accordion" id="accordionExample">
                    <div
                      className="single-widget-one wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="faq-header" id="headingOne">
                        <h6
                          className="mb-0 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How much can I borrow?<i className="icon_plus"></i>
                          <i className="icon_close"></i>
                        </h6>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="single-widget-one wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="faq-header" id="headingTwo">
                        <h6
                          className="mb-0"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          What are the requirements to get a loan offer?
                          <i className="icon_plus"></i>
                          <i className="icon_close"></i>
                        </h6>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse show"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="faq-body">
                          <p>
                            {' '}
                            - You must be at least 18 years old <br />- You must
                            have permanent residence in United States <br />
                            - You are not registered in the RKI / Debtor
                            Register (DBR) <br />
                            <br />
                            The offers you receive are preliminary offers, which
                            are provided that the information you have entered,
                            are correct.
                            <br />
                            <br />
                            At the same time, you must sign the loan offer with
                            NemID before the bank can pay out your loan.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="single-widget-one wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="faq-header" id="headingThree">
                        <h6
                          className="mb-0 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          How can I borrow money ASAP?
                          <i className="icon_plus"></i>
                          <i className="icon_close"></i>
                        </h6>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="single-widget-one wow fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      <div className="faq-header" id="headingFour">
                        <h6
                          className="mb-0 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          How can you reduce the cost of my loans?
                          <i className="icon_plus"></i>
                          <i className="icon_close"></i>
                        </h6>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="single-widget-one wow fadeInUp"
                      data-wow-delay="0.9s"
                    >
                      <div className="faq-header" id="headingFive">
                        <h6
                          className="mb-0 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="true"
                          aria-controls="collapseFive"
                        >
                          What does it cost to use Banca?
                          <i className="icon_plus"></i>
                          <i className="icon_close"></i>
                        </h6>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="single-widget-one wow fadeInUp"
                      data-wow-delay="1.1s"
                    >
                      <div className="faq-header" id="headingSix">
                        <h6
                          className="mb-0 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="true"
                          aria-controls="collapseSix"
                        >
                          When is the loan paid out?
                          <i className="icon_plus"></i>
                          <i className="icon_close"></i>
                        </h6>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="single-widget-one wow fadeInUp"
                      data-wow-delay="1.3s"
                    >
                      <div className="faq-header" id="headingSeven">
                        <h6
                          className="mb-0 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSeven"
                          aria-expanded="true"
                          aria-controls="collapseSeven"
                        >
                          How long is the repayment period?
                          <i className="icon_plus"></i>
                          <i className="icon_close"></i>
                        </h6>
                      </div>
                      <div
                        id="collapseSeven"
                        className="collapse"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="single-widget-one wow fadeInUp"
                      data-wow-delay="1.5s"
                    >
                      <div className="faq-header" id="headingEight">
                        <h6
                          className="mb-0 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseEight"
                          aria-expanded="true"
                          aria-controls="collapseEight"
                        >
                          Can I redeem the loan ahead of time?
                          <i className="icon_plus"></i>
                          <i className="icon_close"></i>
                        </h6>
                      </div>
                      <div
                        id="collapseEight"
                        className="collapse"
                        aria-labelledby="headingEight"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="single-widget-one wow fadeInUp"
                      data-wow-delay="1.7s"
                    >
                      <div className="faq-header" id="headingNine">
                        <h6
                          className="mb-0 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseNine"
                          aria-expanded="true"
                          aria-controls="collapseNine"
                        >
                          Can I change my application after submitting it?
                          <i className="icon_plus"></i>
                          <i className="icon_close"></i>
                        </h6>
                      </div>
                      <div
                        id="collapseNine"
                        className="collapse"
                        aria-labelledby="headingNine"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="faq-body">
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
              </div> */}

              <FAQAccordion />
            </div>
          </div>
        </section>

        <section
          className="help-cta pt-75 pb-90"
          style={{ backgroundImage: `url('/</div>img/help-ad/bg-shape.png')` }}
        >
          <div className="container">
            <div className="section-title">
              <h2>We Help With Both New Loan And Collective Loan</h2>
            </div>
            <div className="row">
              <div className="col-md-8 mx-auto text-center">
                <p>
                  Whether you need to borrow for renovation, car, holiday or
                  want to combine your loans into one single loan, we will help
                  you
                </p>
                <div className="mt-40">
                  <Link
                    href="/loan"
                    className="theme-btn theme-btn-rounded me-sm-4 mt-3 mt-sm-0"
                  >
                    New Loan
                  </Link>
                  <Link
                    href="/loan-details"
                    className="theme-btn theme-btn-rounded theme-btn-alt mt-3 mt-sm-0"
                  >
                    Collective Loan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="footer footer-2 pt-lg-130 pt-110 pb-100 pb-lg-125"
        style={{ backgroundImage: `url('/img/footer/footer-bg-2.png')` }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3  col-sm-6 text-center text-sm-start">
                <div className="footer-widget mb-30 wow fadeInLeft">
                  <h4 className="mb-20">We are on a mission.</h4>
                  <div className="footer-text mb-20">
                    <p>
                      At Banca, we are using cutting-edge technology to
                      transform the industry and deliver financial services that
                      actually work for you.
                    </p>
                  </div>
                  <div className="truspilot mt-40">
                    <Image
                      width={120}
                      height={70}
                      src="/img/footer/Trustpilot.png"
                      alt="Trustpilot"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-3  col-sm-6 text-center text-sm-start offset-lg-1">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="f-widget-title">
                    <h5>Company</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#">About Us</Link>
                      </li>
                      <li>
                        <Link href="#">Recognition</Link>
                      </li>
                      <li>
                        <Link href="#">Executive Team</Link>
                      </li>
                      <li>
                        <Link href="#">Careers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3  col-sm-6 text-center text-sm-start">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="f-widget-title">
                    <h5>product</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#"> Business Loans | Main</Link>
                      </li>
                      <li>
                        <Link href="#"> Loan Calculator</Link>
                      </li>
                      <li>
                        <Link href="#"> Refer a Friend</Link>
                      </li>
                      <li>
                        <Link href="#"> Partner Program</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-2  col-sm-6 text-center text-sm-start">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="f-widget-title">
                    <h5>Help</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#">Customer Care</Link>
                      </li>
                      <li>
                        <Link href="#"> Contact Us</Link>
                      </li>
                      <li>
                        <Link href="#">Security Center</Link>
                      </li>
                      <li>
                        <Link href="#">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright pt-45">
          <div className="container">
            <div className="row ">
              <div className="col-xl-8 offset-xl-4">
                <div className="row align-items-center gy-lg-0 gy-3 gx-0">
                  <div className="col-md-2  text-md-start text-center">
                    <Link href="/">
                      <Image
                        width={90}
                        height={35}
                        src="/img/logo/Logo.png"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <div className="line"></div>
                  </div>
                  <div className="col-md-4">
                    <div className="social-button text-center">
                      <Link className="ms-0" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>
                      <Link className="me-0" href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="copyright-text text-md-start text-center">
                    <p>
                      Copyright &copy; Banca 2025.
                      <br className="d-sm-none" />{' '}
                      <Link className="ms-3" href="#">
                        Privacy
                      </Link>{' '}
                      |{' '}
                      <Link className="ms-0" href="#">
                        Term of Use
                      </Link>{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SampleBanca;
