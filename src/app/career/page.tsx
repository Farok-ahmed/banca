'use client';
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useTheme } from '@/contextAPi/ThemeContext';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Careerpage = () => {
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

  // Check if current route is active
  const isActive = (link: string) => {
    // Exact match for home page
    if (link === '/' && pathname === '/') {
      return true;
    }
    // For other pages, check if pathname matches exactly
    if (link !== '/' && pathname === link) {
      return true;
    }
    return false;
  };

  interface SubMenuItem {
    text: string;
    link: string;
    submenu?: SubMenuItem[];
  }

  // Check if any submenu item is active (for parent menu highlighting)
  const isParentActive = (submenu: SubMenuItem[]) => {
    return submenu.some((item) => {
      if (isActive(item.link)) return true;
      if (item.submenu) {
        return item.submenu.some((subItem) => isActive(subItem.link));
      }
      return false;
    });
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
                    <li
                      key={idx}
                      className={`nav-item dropdown submenu ${
                        isParentActive(item.submenu) ? 'active' : ''
                      }`}
                    >
                      <Link
                        href={item.href}
                        className={`nav-link dropdown-toggle ${
                          isActive(item.href) || isParentActive(item.submenu)
                            ? 'active'
                            : ''
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
                            } ${isActive(sub.link) ? 'active' : ''}`}
                          >
                            <Link
                              href={sub.link}
                              className={`nav-link ${
                                isActive(sub.link) ? 'active' : ''
                              }`}
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
                                    <li
                                      key={j}
                                      className={`nav-item ${
                                        isActive(deep.link) ? 'active' : ''
                                      }`}
                                    >
                                      <Link
                                        href={deep.link}
                                        className={`nav-link ${
                                          isActive(deep.link) ? 'active' : ''
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
                      left: theme === 'body_dark' ? 3 : 26,
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
                        <Link href="/">home</Link>
                      </li>
                      <li>
                        <Link href="/">pages</Link>
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
                        <Link
                          href="#"
                          className="custom-btn theme-btn-primary_alt theme-btn"
                        >
                          Search
                        </Link>
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
                  <Link
                    href="#"
                    className="theme-btn theme-btn-outlined mb-4 mt-45 "
                  >
                    Learn more
                  </Link>
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
                  <Link
                    href="#"
                    className="theme-btn theme-btn-outlined mb-4 mt-45 "
                  >
                    Explore
                  </Link>
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
                  <Link
                    href="#"
                    className="theme-btn theme-btn-outlined mb-4 mt-45 "
                  >
                    Find out more
                  </Link>
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
                  <Link
                    href="#"
                    className="theme-btn theme-btn-outlined mb-4 mt-45 "
                  >
                    Discover
                  </Link>
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
                  <Link
                    href="#"
                    className="theme-btn theme-btn-outlined mb-4 mt-45 w-50"
                  >
                    Read more
                  </Link>
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
                  <Link
                    href="#"
                    className="theme-btn theme-btn-outlined mb-4 mt-45 w-50"
                  >
                    Join Now
                  </Link>
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
                <Link
                  href="/jobs"
                  className="wow fadeInLeft theme-btn theme-btn-outlined"
                >
                  Show All <i className="arrow_right"></i>{' '}
                </Link>
              </div>
            </div>

            <div className="row pt-60">
              <div className="col-lg-7">
                <div className="feature-job-tab">
                  <ul className="feature-job-list">
                    <li className="mt-0">
                      <Link href="/job-application">
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
                      </Link>
                    </li>

                    <li>
                      <Link href="/job-application">
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
                      </Link>
                    </li>

                    <li>
                      <Link href="/job-application">
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
                      </Link>
                    </li>

                    <li>
                      <Link href="/job-application">
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
                      </Link>
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

                  <Link
                    href="/job-application"
                    className="theme-btn theme-btn-lg mt-70 mb-25"
                  >
                    Apply Now <i className="arrow_right"></i>
                  </Link>
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
                  <Image
                    width={50}
                    height={50}
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
                  <Image
                    width={50}
                    height={50}
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
                  <Image
                    width={50}
                    height={50}
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
                  <Image
                    width={50}
                    height={50}
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
                  <Link href="#">
                    <span>Read more</span> <i className="arrow_right"></i>
                  </Link>
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
                  <Link href="#">
                    <span>Read more</span> <i className="arrow_right"></i>
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

export default Careerpage;
