/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useState } from 'react';
import { useTheme } from '@/contextAPi/ThemeContext';

const Jobspage = () => {
  const [sortOption, setSortOption] = useState('SortBy Newest');
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

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

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
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <Link className="navbar-brand" href="/">
                <Image
                  width={90}
                  height={30}
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
                className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav menu ms-auto">
                  
                  {[
                    {
                      label: 'Home',
                      href: '/',
                      submenu: [
                        'Smart Finance',
                        'Loan Company',
                        'Mobile App',
                        'Simple Banca',
                        'Loan Steps',
                        'Finance Sass App',
                        'Small Bank',
                      ],
                      subhref: [
                        '/',
                        '/index-company',
                        '/mobile-app',
                        '/simple-banca',
                        '/loan-steps',
                        '/finance-sass-app',
                        '/small-bank',
                      ],
                    },
                    {
                      label: 'Loan',
                      href: '/loan',
                      submenu: ['Get loan', 'Loan Application'],
                      subhref: ['/loan', '/loan-details'],
                    },
                    {
                      label: 'Job Pages',
                      href: '/career',
                      submenu: ['Career', 'Jobs', 'Job Application'],
                      subhref: ['/career', '/jobs', '/job-application'],
                    },
                    {
                      label: 'Pages',
                      href: '/card',
                      submenu: ['Cards', 'About Us', 'Contact Us', '404 Error'],
                      subhref: ['/card', '/about-us', '/contact-us', '/error'],
                    },
                    {
                      label: 'Blog',
                      href: '/blog-listing',
                      submenu: ['Blog Listing', 'Blog Details'],
                      subhref: ['/blog-listing', '/blog-details'],
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
                        {item.submenu.map((text, i) => (
                          <li className="nav-item" key={i}>
                            <Link href={item.subhref[i]} className="nav-link">
                              {text}
                            </Link>
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

                
                <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
                  <label htmlFor="something" className="tab-btn tab-btns">
                    <IoMoonOutline />
                  </label>
                  <label htmlFor="something" className="tab-btn">
                    <IoSunnyOutline />
                  </label>
                  <label
                    className={`ball ${
                      theme === 'dark' ? 'ball-left' : 'ball-right'
                    }`}
                    htmlFor="something"
                  ></label>
                  <input
                    type="checkbox"
                    name="something"
                    id="something"
                    className="dark_mode_switcher"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
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
        <section className="breadcrumb-area">
          <div
            className="breadcrumb-widget  pt-145 pb-125"
            style={{ backgroundImage: `url(img/breadcrumb/bg-2.png)` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="breadcrumb-content pt-170">
                    <h1>Job Posts</h1>
                    <ul>
                      <li>
                        <Link href="index.html">home</Link>
                      </li>
                      <li>
                        <Link href="index.html">pages</Link>
                      </li>
                      <li>Careers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-110 pb-130 bg_disable">
          <div className="container">
            <div className="row">
              <div className="col-lg-4  pr-lg-55">
                <div className="left-sidebar-widget">
                  <div className="sidebar-header">
                    <div className="sidebar-title">
                      <h4>Search for jobs</h4>
                    </div>
                  </div>
                  <div className="single-sidebar-widget mt-35 widget-shadow">
                    <div className="input-search-field input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Job title or keywords..."
                      />
                      <div className="input-group-append">
                        <button className="btn">
                          <i className="icon_search"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="single-sidebar-widget mt-30 widget-shadow">
                    <div className="select-location">
                      <span className="arrow-icon">
                        <i className="arrow_carrot-down"></i>
                      </span>
                      <select id="locationSelect" className="form-control">
                        <option value="Bagerhat" selected>
                          Bagerhat
                        </option>
                        <option value="Bandarban">Bandarban</option>
                        <option value="Barguna">Barguna</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Bhola">Bhola</option>
                        <option value="Barishal Metro">Barishal Metro</option>
                        <option value="Bogra">Bogra</option>
                        <option value="Brahmmanbaria">Brahmmanbaria</option>
                        <option value="Chandpur">Chandpur</option>
                        <option value="Chapai Nawabganj">
                          Chapai Nawabganj
                        </option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Chuadanga">Chuadanga</option>
                        <option value="Chottogram Metro">
                          Chottogram Metro
                        </option>
                        <option value="Cox&#039;s Bazar">
                          Cox&#039;s Bazar
                        </option>
                        <option value="Coxsbazar">Coxsbazar</option>
                        <option value="Cumilla">Cumilla</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Dinajpur">Dinajpur</option>
                        <option value="Dhaka Metro">Dhaka Metro</option>
                        <option value="Faridpur">Faridpur</option>
                        <option value="Feni">Feni</option>
                        <option value="Gaibandha">Gaibandha</option>
                        <option value="Gazipur">Gazipur</option>
                        <option value="Gazipur Metro">Gazipur Metro</option>
                        <option value="Gopalgonj">Gopalgonj</option>
                        <option value="Habigonj">Habigonj</option>
                        <option value="Jaflong">Jaflong</option>
                        <option value="Jamalpur">Jamalpur</option>
                        <option value="Jessore">Jessore</option>
                        <option value="Jhalokathi">Jhalokathi</option>
                        <option value="Jhenaidah">Jhenaidah</option>
                        <option value="Joypurhat">Joypurhat</option>
                        <option value="Khagrachari">Khagrachari</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Kishoregonj">Kishoregonj</option>
                        <option value="Khulna Metro">Khulna Metro</option>
                        <option value="Kurigram">Kurigram</option>
                        <option value="Kustia">Kustia</option>
                        <option value="Lalmonirhat">Lalmonirhat</option>
                        <option value="Laxmipur">Laxmipur</option>
                        <option value="Madaripur">Madaripur</option>
                        <option value="Magura">Magura</option>
                        <option value="Manikgonj">Manikgonj</option>
                        <option value="Meherpur">Meherpur</option>
                        <option value="Moulabhibazar">Moulabhibazar</option>
                        <option value="Munshigonj">Munshigonj</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Naogaon">Naogaon</option>
                        <option value="Narail">Narail</option>
                        <option value="Narayangonj">Narayangonj</option>
                        <option value="Narsingdi">Narsingdi</option>
                        <option value="Natore">Natore</option>
                        <option value="Netrokona">Netrokona</option>
                        <option value="Nilphamari">Nilphamari</option>
                        <option value="Noakhali">Noakhali</option>
                        <option value="Pabna">Pabna</option>
                        <option value="Panchagarh">Panchagarh</option>
                        <option value="Patuakhali">Patuakhali</option>
                        <option value="Pirojpur">Pirojpur</option>
                        <option value="Rajbari">Rajbari</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Rangamati">Rangamati</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Rajshahi Metro ">Rajshahi Metro </option>
                        <option value="Rangpur Metro ">Rangpur Metro </option>
                        <option value="Saint Martin">Saint Martin</option>
                        <option value="Satkhira">Satkhira</option>
                        <option value="Shariatpur">Shariatpur</option>
                        <option value="Sherpur">Sherpur</option>
                        <option value="Sirajgonj">Sirajgonj</option>
                        <option value="Sylhet Metro">Sylhet Metro</option>
                        <option value="Srimangal">Srimangal</option>
                        <option value="Sunamgonj">Sunamgonj</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Tangail">Tangail</option>
                        <option value="Teknaf">Teknaf</option>
                        <option value="Thakurgaon">Thakurgaon</option>
                      </select>
                    </div>
                  </div>

                  <div className="single-sidebar-widget mt-60 widget-border">
                    <div className="catagory-list-widget">
                      <div className="widget-title">
                        <h5>Job Category</h5>
                      </div>
                      <div className="widget-content ">
                        <ul className="catagory-list py-3">
                          <li className="catagory-item ">
                            <Link href="#" className="catagory-link active">
                              <span className="text">All Category</span>
                              <span className="number">(25)</span>
                            </Link>
                          </li>
                          <li className="catagory-item">
                            <Link href="#" className="catagory-link">
                              <span className="text">Administration</span>
                              <span className="number">(05)</span>
                            </Link>
                          </li>
                          <li className="catagory-item">
                            <Link href="#" className="catagory-link">
                              <span className="text">Asset Management</span>
                              <span className="number">(03)</span>
                            </Link>
                          </li>
                          <li className="catagory-item">
                            <Link href="#" className="catagory-link">
                              <span className="text">Accounts Officer</span>
                              <span className="number">(04)</span>
                            </Link>
                          </li>
                          <li className="catagory-item">
                            <Link href="#" className="catagory-link">
                              <span className="text">Branch Banking</span>
                              <span className="number">(10)</span>
                            </Link>
                          </li>
                          <li className="catagory-item ">
                            <Link href="#" className="catagory-link ">
                              <span className="text">Technology</span>
                              <span className="number">(03)</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="single-sidebar-widget mt-60 widget-border">
                    <div className="widget-title">
                      <h5>Job Schedule</h5>
                    </div>
                    <div className="widget-content pt-20 pb-20 pr-20 pl-20">
                      <div className="form-check form-check-inline mr-30">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="fulltime"
                          value="option1"
                        />
                        <label className="form-check-label" htmlFor="fulltime">
                          Full-time
                        </label>
                      </div>
                      <div className="form-check form-check-inline mr-30">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="parttime"
                          value="option2"
                        />
                        <label className="form-check-label" htmlFor="parttime">
                          Part Time
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="job-post-widget">
                  <div className="sidebar-header d-flex justify-content-between align-items-center mt-4 mt-lg-0">
                    <div className="sidebar-title">
                      <h4 className="wow fadeInRight">25 job offers</h4>
                    </div>

                    <div className="sorting-select wow fadeInLeft me-1">
                      <select
                        id="sort-select"
                        className="form-select"
                        value={sortOption}
                        onChange={handleSortChange}
                        style={{
                          outline: 'none',
                          boxShadow: 'none',
                        }}
                      >
                        <option value="SortBy Newest">SortBy Newest</option>
                        <option value="SortBy Oldest">SortBy Oldest</option>
                        <option value="SortBy Popular">SortBy Popular</option>
                        <option value="SortBy Trending">SortBy Trending</option>
                      </select>
                    </div>
                  </div>

                  <div className="single-job-post me-1 wow fadeInUp mt-25">
                    <div className="post-header">
                      <div>
                        <h6 className="job-title">
                          <Link href="job-application.html">
                            Manager- Products & Marketing
                          </Link>{' '}
                        </h6>
                        <div className="d-flex flex-wrap">
                          <div className="job-location me-lg-3 me-2">
                            {' '}
                            <i className="icon_pin_alt"></i>NY, United States
                          </div>
                          <div className="job-catagory">
                            {' '}
                            <span>Branch Banking</span> | Full-time
                          </div>
                        </div>
                      </div>
                      <div className="timestamp">Jan 30, 2021</div>
                    </div>
                    <div className="post-content">
                      <p>
                        As a Teller at Capital you are the face of the credit
                        union. It's more than just processing financial
                        transactions. It's building lasting relationships and
                        helping others to ...
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-job-post me-1 wow fadeInUp mt-25"
                    data-wow-delay="0.1s"
                  >
                    <div className="post-header">
                      <div>
                        <h6 className="job-title">
                          <Link href="/job-application">
                            Officer Admin and Finance (LRS Position)
                          </Link>
                        </h6>
                        <div className="d-flex flex-wrap">
                          <div className="job-location me-lg-3 me-2">
                            {' '}
                            <i className="icon_pin_alt"></i>NY, United States
                          </div>
                          <div className="job-catagory">
                            {' '}
                            <span>Administration</span> | Full-time
                          </div>
                        </div>
                      </div>
                      <div className="timestamp">Jan 30, 2021</div>
                    </div>
                    <div className="post-content">
                      <p>
                        As a Teller at Capital you are the face of the credit
                        union. It's more than just processing financial
                        transactions. It's building lasting relationships and
                        helping others to ...
                      </p>
                    </div>
                  </div>

                  <div
                    className="single-job-post me-1 wow fadeInUp mt-25"
                    data-wow-delay="0.3s"
                  >
                    <div className="post-header">
                      <div>
                        <h6 className="job-title">
                          <Link href="/job-application">
                            Head of Information and Technology
                          </Link>{' '}
                        </h6>
                        <div className="d-flex flex-wrap">
                          <div className="job-location me-lg-3 me-2">
                            {' '}
                            <i className="icon_pin_alt"></i>NY, United States
                          </div>
                          <div className="job-catagory">
                            {' '}
                            <span>Technology</span> | Full-time
                          </div>
                        </div>
                      </div>
                      <div className="timestamp">Jan 30, 2021</div>
                    </div>
                    <div className="post-content">
                      <p>
                        As a Teller at Capital you are the face of the credit
                        union. It's more than just processing financial
                        transactions. It's building lasting relationships and
                        helping others to ...
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-job-post me-1 wow fadeInUp mt-25"
                    data-wow-delay="0.5s"
                  >
                    <div className="post-header">
                      <div>
                        <h6 className="job-title">
                          <Link href="/job-application">
                            Assistant Accounts Officer
                          </Link>{' '}
                        </h6>
                        <div className="d-flex flex-wrap">
                          <div className="job-location me-lg-3 me-2">
                            {' '}
                            <i className="icon_pin_alt"></i>NY, United States
                          </div>
                          <div className="job-catagory">
                            {' '}
                            <span>Accounts Officer</span> | Full-time
                          </div>
                        </div>
                      </div>
                      <div className="timestamp">Jan 30, 2021</div>
                    </div>
                    <div className="post-content">
                      <p>
                        As a Teller at Capital you are the face of the credit
                        union. It's more than just processing financial
                        transactions. It's building lasting relationships and
                        helping others to ...
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-job-post me-1 wow fadeInUp mt-25"
                    data-wow-delay="0.6s"
                  >
                    <div className="post-header">
                      <div>
                        <h6 className="job-title">
                          <Link href="/job-application">
                            Manager- Products & Marketing, Retail Business
                          </Link>{' '}
                        </h6>
                        <div className="d-flex flex-wrap">
                          <div className="job-location me-lg-3 me-2">
                            {' '}
                            <i className="icon_pin_alt"></i>NY, United States
                          </div>
                          <div className="job-catagory">
                            {' '}
                            <span>Administration</span> | Full-time
                          </div>
                        </div>
                      </div>
                      <div className="timestamp">Jan 30, 2021</div>
                    </div>
                    <div className="post-content">
                      <p>
                        As a Teller at Capital you are the face of the credit
                        union. It's more than just processing financial
                        transactions. It's building lasting relationships and
                        helping others to ...
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-job-post me-1 wow fadeInUp mt-25"
                    data-wow-delay="0.7s"
                  >
                    <div className="post-header">
                      <div>
                        <h6 className="job-title">
                          <Link href="/job-application">
                            Assistant Branch Manager II (Senior)
                          </Link>{' '}
                        </h6>
                        <div className="d-flex flex-wrap">
                          <div className="job-location me-lg-3 me-2">
                            {' '}
                            <i className="icon_pin_alt"></i>NY, United States
                          </div>
                          <div className="job-catagory">
                            {' '}
                            <span>Branch Banking</span> | Full-time
                          </div>
                        </div>
                      </div>
                      <div className="timestamp">Jan 30, 2021</div>
                    </div>
                    <div className="post-content">
                      <p>
                        As a Teller at Capital you are the face of the credit
                        union. It's more than just processing financial
                        transactions. It's building lasting relationships and
                        helping others to ...
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-job-post me-1 wow fadeInUp mt-25"
                    data-wow-delay="0.8s"
                  >
                    <div className="post-header">
                      <div>
                        <h6 className="job-title">
                          <Link href="/job-application">
                            Manager- Products & Marketing, Retail Business
                          </Link>{' '}
                        </h6>
                        <div className="d-flex flex-wrap">
                          <div className="job-location me-lg-3 me-2">
                            {' '}
                            <i className="icon_pin_alt"></i>NY, United States
                          </div>
                          <div className="job-catagory">
                            {' '}
                            <span>Branch Banking</span> | Full-time
                          </div>
                        </div>
                      </div>
                      <div className="timestamp">Jan 30, 2021</div>
                    </div>
                    <div className="post-content">
                      <p>
                        As a Teller at Capital you are the face of the credit
                        union. It's more than just processing financial
                        transactions. It's building lasting relationships and
                        helping others to ...
                      </p>
                    </div>
                  </div>
                  <div
                    className="single-job-post me-1 wow fadeInUp mt-25"
                    data-wow-delay="0.9s"
                  >
                    <div className="post-header">
                      <div>
                        <h6 className="job-title">
                          <Link href="/job-application">
                            Accounts Payable/Receivable Manager
                          </Link>{' '}
                        </h6>
                        <div className="d-flex flex-wrap">
                          <div className="job-location me-lg-3 me-2">
                            {' '}
                            <i className="icon_pin_alt"></i>NY, United States
                          </div>
                          <div className="job-catagory">
                            {' '}
                            <span>Accounts Officer</span> | Full-time
                          </div>
                        </div>
                      </div>
                      <div className="timestamp">Jan 30, 2021</div>
                    </div>
                    <div className="post-content">
                      <p>
                        As a Teller at Capital you are the face of the credit
                        union. It's more than just processing financial
                        transactions. It's building lasting relationships and
                        helping others to ...
                      </p>
                    </div>
                  </div>

                  <div className="text-center mt-70 wow fadeInUp">
                    {' '}
                    <Link href="#" className="theme-btn theme-btn-outlined">
                      More jobs
                    </Link>
                  </div>
                </div>

                <div className="email-alert-widget mt-100 wow fadeInUp">
                  <h4>Get email alerts for the latest Jobs in Bangladesh</h4>
                  <p>You can cancel email alerts at any time.</p>

                  <div className="input-group mt-40">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type in your email..."
                    />
                    <div className="input-group-append">
                      <Link href="#" className="theme-btn theme-btn-lg">
                        Set Up Alert
                      </Link>
                    </div>
                  </div>
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
                    width={15}
                    height={15}
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

export default Jobspage;
