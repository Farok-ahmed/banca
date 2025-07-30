'use client';
import { useTheme } from '@/contextAPi/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Errorpage = () => {
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
        <div className="header-menu header-menu-2" id="sticky">
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <Link className="navbar-brand" href="index.html">
                <Image
                  width={110}
                  height={35}
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
                      className="nav-link dropdown-toggle active"
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
                      className="nav-link dropdown-toggle"
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
                        <Link className="nav-link" href="/contact-us">
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
                  className="theme-btn"
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
        <section className="error_area bg_color pb-50 overflow-hidden">
          <div className="error_dot one"></div>
          <div className="error_dot two"></div>
          <div className="error_dot three"></div>
          <div className="error_dot four"></div>
          <div className="container">
            <div className="error_content_two text-center">
              <div className="error_img">
                <Image
                  width={700}
                  height={420}
                  className="position-absolute error_shap"
                  src="/img/error/404_bg.png"
                  alt=""
                />
                <div className="one wow clipInDown" data-wow-delay="1s">
                  <Image
                    width={140}
                    height={380}
                    className="img_one"
                    src="/img/error/404_two.png"
                    alt=""
                  />
                </div>
                <div className="two wow clipInDown" data-wow-delay="1.5s">
                  <Image
                    width={160}
                    height={380}
                    className="img_two"
                    src="/img/error/404_three.png"
                    alt=""
                  />
                </div>
                <div className="three wow clipInDown" data-wow-delay="1.8s">
                  <Image
                    width={160}
                    height={380}
                    className="img_three"
                    src="/img/error/404_one.png"
                    alt=""
                  />
                </div>
              </div>
              <h2 className="wow fadeIn">
                Error. We can’t find the page you’re looking for.
              </h2>
              <p>
                Sorry for the inconvenience. Go to our homepage or check out our
                latest collections for Fashion, Chair, Decoration...
              </p>
              <form action="#" className="error_search">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </form>
              <Link href="/" className="action_btn theme-btn">
                <i className="arrow_left"></i>Back to Home Page
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Errorpage;
