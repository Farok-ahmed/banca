import Link from 'next/link';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Loanpage = () => {
  return (
    <div>
      <header className="header">
        <div className="header-top py-2 bg_white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="header-info-left">
                  <div className="language-list">
                    <select name="page-language-list" id="select-lang">
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
                        src="/img/phone-outline.png"
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

        <div className="header-menu header-menu-3" id="sticky">
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <Link className="navbar-brand sticky_logo" href="index.html">
                <img
                  className="main"
                  src="/img/logo/Logo.png"
                  srcset="img/logo/Logo@2x.png 2x"
                  alt="logo"
                />
                <img
                  className="sticky"
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
                      className="nav-link dropdown-toggle active"
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
                        <a className="nav-link active" href="loan.html">
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
                            <Link
                              className="nav-link"
                              href="/loan/personal-details"
                            >
                              Step 02
                            </Link>
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
                      className="nav-link dropdown-toggle"
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
                        <a className="nav-link" href="job-post.html">
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
                  className="theme-btn theme-btn-outlined"
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
        <section
          className="banner-area-2 loan-banner pt-145"
          style={{ backgroundImage: `url(img/banner/loan-banner.png)` }}
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
                  <a
                    className="theme-btn theme-btn-lg theme-btn-alt mt-50 wow fadeInUp"
                    data-wow-delay="0.2s"
                    href="loan-details.html"
                  >
                    Get started <i className="arrow_right"></i>
                  </a>
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
                        <img src="/img/steps/icon-1.png" alt="icon" />
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
                        <img src="/img/steps/icon-2.png" alt="icon" />
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
                        <img src="/img/steps/icon-3.png" alt="icon" />
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
            <form action="personal-details.html">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="row pt-35  gy-lg-0 gy-3">
                    <div className="col-lg-4">
                      <div
                        className="loan-apply-widget wow fadeInRight"
                        data-wow-delay="0.1s"
                      >
                        <div className="icon">
                          <img
                            src="/img/apply-loan/icon-1.1.png"
                            alt="icon-1"
                          />
                          <img
                            src="/img/apply-loan/icon-1.2.png"
                            alt="icon-1.2"
                          />
                        </div>
                        <div className="apply-content">
                          <span className="title">How much do you need?</span>
                          <p className="d-flex">
                            ${' '}
                            <input
                              className="w-100"
                              type="text"
                              value="5,000"
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
                          <img
                            src="/img/apply-loan/icon-2.1.png"
                            alt="icon-2"
                          />
                          <img
                            src="/img/apply-loan/icon-2.2.png"
                            alt="icon-2.2"
                          />
                        </div>
                        <div className="apply-content">
                          <span className="title">Type of Loan</span>
                          <select name="select-loan-type" id="select-loan-type">
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
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="loan-apply-widget wow fadeInRight"
                        data-wow-delay="0.5s"
                      >
                        <div className="icon">
                          <img
                            src="/img/apply-loan/icon-3.1.png"
                            alt="icon-3"
                          />
                          <img
                            src="/img/apply-loan/icon-3.2.png"
                            alt="icon-3.2"
                          />
                        </div>
                        <div className="apply-content">
                          <span className="title">
                            Where do you currently live?
                          </span>
                          <div
                            className="select-location d-flex align-items-center"
                            id="locationSlectParent"
                          >
                            <select
                              className="w-100"
                              name="select-location"
                              id="locationSelect"
                            >
                              <option value="Bagerhat">Bagerhat</option>
                              <option value="Bandarban" selected>
                                Bandarban
                              </option>
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
                              <option value="Gazipur Metro">
                                Gazipur Metro
                              </option>
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
                              <option value="Moulabhibazar">
                                Moulabhibazar
                              </option>
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
                              <option value="Rajshahi Metro ">
                                Rajshahi Metro{' '}
                              </option>
                              <option value="Rangpur Metro ">
                                Rangpur Metro{' '}
                              </option>
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
                            <span className="close" id="readOnlyClose">
                              <i className="icon_close"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mt-15 d-flex wow fadeInLeft">
                      <div className="icon">
                        <img
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

        <section className="pt-125 pb-140 bg_white">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6 mx-auto">
                <div className="section-title">
                  <h2 className="wow fadeInUp">Calculator</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    Get an approximate figure for the total monthly instalment
                    payments along with a complete break-up of the home loan.
                  </p>
                </div>
              </div>
            </div>
            <div className="calculator-widget mt-50">
              <div className="row  gy-lg-0 gy-3">
                <div className="col-lg-7">
                  <div
                    className="single-calculator-widget wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="single-range">
                      <div className="range-header d-flex justify-content-between align-items-center mb-25">
                        <h6>Loan Amount</h6>
                        <input type="text" id="SetRange" />
                      </div>
                      <div id="RangeSlider"></div>
                    </div>
                    <div className="single-range mt-85 mb-95">
                      <div className="range-header d-flex flex-wrap justify-content-between align-items-center mb-25">
                        <h6>Loan Duration</h6>

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li>
                            <span className="active_bar"></span>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link month-tab"
                              id="monthTab-tab"
                              data-bs-toggle="tab"
                              href="#monthTab"
                              role="tab"
                              aria-controls="monthTab"
                              aria-selected="true"
                            >
                              Month
                            </a>
                          </li>
                          <li className="nav-item " role="presentation">
                            <a
                              className="nav-link year-tab active"
                              id="yearTab-tab"
                              data-bs-toggle="tab"
                              href="#yearTab"
                              role="tab"
                              aria-controls="yearTab"
                              aria-selected="false"
                            >
                              Year
                            </a>
                          </li>
                        </ul>

                        <input type="text" id="SetMonthRange" />
                      </div>

                      <div className="tab-content">
                        <div
                          className="tab-pane fade "
                          id="monthTab"
                          role="tabpanel"
                          aria-labelledby="monthTab"
                        >
                          <div id="MonthRangeSlider"></div>
                        </div>
                        <div
                          className="tab-pane fade show active"
                          id="yearTab"
                          role="tabpanel"
                          aria-labelledby="yearTab"
                        >
                          <div id="YearRangeSlider"></div>
                        </div>
                      </div>
                      <div className="d-none" id="WeekRangeSlider"></div>
                    </div>

                    <div className="bg_disable px-4 py-2 mb-5 interestBox">
                      <p>Rate of Interest</p>
                      <span id="InterestAmount"></span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div
                    className="calculator-result-widget bg_disable wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-7 col-md-8 col-sm-7">
                        <div className="emi-amount">
                          <h6>EMI Amount</h6>
                          <span>Principal + Interest</span>
                          <p className="mt-10 LoanTotalAmount"></p>
                        </div>
                        <div className="interest-payable mt-20">
                          <h6>Interest Payable</h6>
                          <p className="mt-10" id="InterestPayable"></p>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-4 col-sm-5 col-7 mx-auto">
                        <div className="pie-wrapper" id="loan_graph_circle">
                          <div className="pie">
                            <div className="left-side half-circle"></div>
                            <div className="right-side half-circle"></div>
                          </div>
                          <div className="circle-border"></div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-lg-60 mt-25 text-center">
                      <div className="col-12">
                        <h4 className="mb-1">Your EMI Amount</h4>
                        <h1 className="m-0" id="emiAmount">
                          $ 3,495*
                        </h1>

                        <Link
                          href="/loan/personal-details"
                          className="theme-btn theme-btn-lg mt-40"
                        >
                          Apply Now
                          <i className="arrow_right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-140 pb-140 testimonial-area bg_disable">
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
                          <a
                            data-fancybox
                            href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                          >
                            <i className="fa fa-play"></i>
                            watch the video
                          </a>
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
                          <a
                            data-fancybox
                            href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                          >
                            <i className="fa fa-play"></i>
                            watch the video
                          </a>
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
                        <Link href="#"> Our 'company purpose'</Link>
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

export default Loanpage;
