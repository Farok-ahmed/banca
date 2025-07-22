import Link from 'next/link';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Jobspage = () => {
  return (
    <div>
      <header className="header">
        <div className="header-top py-2">
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
                        src="/img/phone-outline-white.png"
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
        <div className="header-menu header-menu-2 bg_white" id="sticky">
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <Link className="navbar-brand" href="index.html">
                <img
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
                      className="nav-link dropdown-toggle active"
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
                        <a className="nav-link active" href="job-post.html">
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
                      className="nav-link dropdown-toggle"
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
                        <a className="nav-link" href="contact.html">
                          Contact Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="error.html">
                          404 Error
                        </a>
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
                            <a href="#" className="catagory-link active">
                              <span className="text">All Category</span>
                              <span className="number">(25)</span>
                            </a>
                          </li>
                          <li className="catagory-item">
                            <a href="#" className="catagory-link">
                              <span className="text">Administration</span>
                              <span className="number">(05)</span>
                            </a>
                          </li>
                          <li className="catagory-item">
                            <a href="#" className="catagory-link">
                              <span className="text">Asset Management</span>
                              <span className="number">(03)</span>
                            </a>
                          </li>
                          <li className="catagory-item">
                            <a href="#" className="catagory-link">
                              <span className="text">Accounts Officer</span>
                              <span className="number">(04)</span>
                            </a>
                          </li>
                          <li className="catagory-item">
                            <a href="#" className="catagory-link">
                              <span className="text">Branch Banking</span>
                              <span className="number">(10)</span>
                            </a>
                          </li>
                          <li className="catagory-item ">
                            <a href="#" className="catagory-link ">
                              <span className="text">Technology</span>
                              <span className="number">(03)</span>
                            </a>
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
                      <select id="sort-select">
                        <option value="SortBy Newest" selected>
                          SortBy Newest
                        </option>
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
                          <a href="job-application.html">
                            Manager- Products & Marketing
                          </a>{' '}
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
                          <a href="job-application.html">
                            Officer Admin and Finance (LRS Position)
                          </a>
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
                          <a href="job-application.html">
                            Head of Information and Technology
                          </a>{' '}
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
                          <a href="job-application.html">
                            Assistant Accounts Officer
                          </a>{' '}
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
                          <a href="job-application.html">
                            Manager- Products & Marketing, Retail Business
                          </a>{' '}
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
                          <a href="job-application.html">
                            Assistant Branch Manager II (Senior)
                          </a>{' '}
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
                          <a href="job-application.html">
                            Manager- Products & Marketing, Retail Business
                          </a>{' '}
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
                          <a href="job-application.html">
                            Accounts Payable/Receivable Manager
                          </a>{' '}
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
                    <a href="#" className="theme-btn theme-btn-outlined">
                      More jobs
                    </a>
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
                      <a href="#" className="theme-btn theme-btn-lg">
                        Set Up Alert
                      </a>
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
                        <a href="#"> Our core Businesses</a>
                      </li>
                      <li>
                        <a href="#"> Our 'company purpose'</a>
                      </li>
                      <li>
                        <a href="#"> Jobs & Careers</a>
                      </li>
                      <li>
                        <a href="#"> Our Responsibility</a>
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

export default Jobspage;
