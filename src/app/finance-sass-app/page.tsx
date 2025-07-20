import FinanceAccordion from '@/components/FinanceAccordion';
import PricingPlan from '@/components/PricingPlan';
import Image from 'next/image';
import Link from 'next/link';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const FinanceSassApp = () => {
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
                <ul className="navbar-nav menu ms-5 me-auto">
                  <li className="nav-item dropdown submenu ">
                    <Link
                      href="#"
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
                        <Link href="/simple-banca" className="nav-link ">
                          Simple Banca
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/loan-steps" className="nav-link">
                          Loan Steps
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/finance-sass-app"
                          className="nav-link active"
                        >
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
                      href="loan.html"
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
                        <Link className="nav-link" href="loan.html">
                          Get loan
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          href="#"
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
                            <Link className="nav-link" href="loan-details.html">
                              Step 01
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              href="personal-details.html"
                            >
                              Step 02
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              href="document-upload.html"
                            >
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
                      href="career.html"
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
                        <Link className="nav-link" href="career.html">
                          Career
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="job-post.html">
                          Jobs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="job-application.html">
                          Job Application
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
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
                        <Link className="nav-link" href="card.html">
                          Cards
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="about.html">
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="contact.html">
                          Contact Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="error.html">
                          404 Error
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="blog.html"
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
                        <Link className="nav-link" href="blog.html">
                          Blog Listing
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="blog-details.html">
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
                    {/* <ion-icon name="moon"></ion-icon> */}
                    <IoMoonOutline name="moon" />
                  </label>
                  <label htmlFor="something" className="tab-btn">
                    {/* <ion-icon name="sunny"></ion-icon> */}
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
        <section className="banner-saas-area">
          <Image
            className="shape_img"
            width={180}
            height={200}
            src="/img/saas-app/grid.png"
            alt="grid images"
          />
          <div className="container">
            <div className="row justify-content-center">
              <div className="saas-banner-content text-center">
                <h5 className="wow fadeInUp" data-wow-delay="0.35s">
                  WeLCOME TO THE Best banking WEb application ⭐
                </h5>
                <h1 className="wow fadeInUp" data-wow-delay="0.45s">
                  The modern banking <span>solution </span>
                  for your business in one app.
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.55s">
                  Inventore veritatis et architecto beatae vitaie dicta
                  explicabore nemo ipsam volupetateme voluptas aspernatur magni.
                </p>
                <div className="d-flex flex-column flex-sm-row justify-content-center mt-25 subscribe-field">
                  <Link
                    href="loan.html"
                    data-wow-delay="0.5s"
                    className="wow fadeInUp theme-btn theme-btn-lg mt-50"
                  >
                    Get started now
                    <i className="arrow_right-up"></i>
                  </Link>
                  <Link
                    href="loan.html"
                    className="wow fadeInUp mt-50 theme-btn theme-btn-lg theme-btn-alt"
                    data-wow-delay="0.5s"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="dahbord_img wow fadeInUp" data-wow-delay="0.5s">
              <Image
                width={1470}
                height={600}
                src="/img/saas-app/dashboard.png"
                alt="saas"
              />
            </div>
          </div>
        </section>

        <section className="saas-clients-logo bg-white pt-90 pb-85">
          <div className="container">
            <p
              className="wow fadeInUp clients-logo-title"
              data-wow-delay="0.3s"
            >
              Trust Trusted by over <span>10,000+</span> customers wordwide
            </p>
            <div className="row gy-md-0 gy-4 align-items-center h-100">
              <div className="col">
                <Link href="#">
                  <Image
                    width={100}
                    height={120}
                    className="clients-logo img-fluid wow fadeInRight"
                    data-wow-delay="0.1s"
                    src="/img/saas-app/c_logo_1.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col">
                <Link href="#">
                  <Image
                    width={100}
                    height={120}
                    className="clients-logo img-fluid wow fadeInRight"
                    data-wow-delay="0.3s"
                    src="/img/saas-app/c_logo_2.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col">
                <Link href="#">
                  <Image
                    width={100}
                    height={120}
                    className="clients-logo img-fluid wow fadeInRight"
                    data-wow-delay="0.5s"
                    src="/img/saas-app/c_logo_3.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col">
                <Link href="#">
                  <Image
                    width={100}
                    height={100}
                    className="clients-logo img-fluid wow fadeInRight"
                    data-wow-delay="0.7s"
                    src="/img/saas-app/c_logo_4.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col">
                <Link href="#">
                  <Image
                    width={100}
                    height={100}
                    className="clients-logo img-fluid wow fadeInRight"
                    data-wow-delay="0.7s"
                    src="/img/saas-app/c_logo_5.png"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="saas-features-card-area bg-white">
          <div className="container">
            <div className="saas-section-title text-center mb-60">
              <h2>
                3 easy to follow <span>process</span>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but them
                <br /> majority have suffered alteration form injected.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div
                  className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="card-img">
                    <Image
                      width={40}
                      height={40}
                      src="/img/saas-app/clap.svg"
                      alt="feature svg"
                    />
                  </div>
                  <h4>Making genuine loans</h4>
                  <p>
                    There are many variations in passage lorem Ipsum available
                    of them will.
                  </p>
                  <a href="#" className="text-btn">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="card-img">
                    <Image
                      width={40}
                      height={40}
                      src="/img/saas-app/hand.svg"
                      alt="feature svg"
                    />
                  </div>
                  <h4>Almost limitless amount</h4>
                  <p>
                    There are many variations in passage lorem Ipsum available
                    of them will.
                  </p>
                  <a href="#" className="text-btn">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="card-img">
                    <Image
                      width={40}
                      height={40}
                      src="/img/saas-app/house.svg"
                      alt="feature svg"
                    />
                  </div>
                  <h4>Safe & secure banking</h4>
                  <p>
                    There are many variations in passage lorem Ipsum available
                    of them will.
                  </p>
                  <Link href="#" className="text-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="saas-features-area bg-white">
          <div className="container">
            <div className="saas-features-item row align-items-center">
              <div className="col-lg-6">
                <div className="saas-features-img">
                  <Image
                    width={500}
                    height={400}
                    className="wow fadeInRight"
                    data-wow-delay="0.3s"
                    src="/img/saas-app/features_img_one.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="saas-features-content">
                  <div className="saas-section-title mb-50">
                    <h2 className="wow fadeInUp">
                      Simplify your finance <span>banking</span> and loan
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                      Design Season is a collaboration between Leicester is
                      creative hub LCB based in the city is cultural quarter and
                      designers and design businesses all over the city & county
                    </p>
                  </div>
                  <div className="d-flex">
                    <div
                      className="features-icon-box wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="round_icon">
                        <Image
                          width={30}
                          height={30}
                          src="/img/saas-app/hand.png"
                          alt=""
                        />
                      </div>
                      <div className="text">
                        <h4>Single term fees</h4>
                        <p>Easily copy and paste Pricing components</p>
                      </div>
                    </div>
                    <div
                      className="features-icon-box two wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="round_icon">
                        <Image
                          width={30}
                          height={30}
                          src="/img/saas-app/travel_explore.png"
                          alt=""
                        />
                      </div>
                      <div className="text">
                        <h4>150+ Locations</h4>
                        <p>Easily copy and paste Pricing components</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="saas-features-item row align-items-center flex-row-reverse">
              <div className="col-lg-6">
                <div className="saas-features-img">
                  <Image
                    width={500}
                    height={420}
                    className="wow fadeInLeft"
                    data-wow-delay="0.2s"
                    src="/img/saas-app/features_img_two.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="saas-features-content">
                  <div
                    className="saas-section-title mb-50 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <h2>
                      We have reputable <span>customer</span> feedbacks
                    </h2>
                    <p>
                      Design Season is a collaboration between Leicester is
                      creative hub LCB based in the city is cultural quarter and
                      designers and design businesses all over the city & county
                    </p>
                  </div>
                  <div className="d-flex">
                    <div
                      className="features-icon-box feedback d-flex wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="text">
                        <h4>500+</h4>
                        <p>Active customers use our application</p>
                      </div>
                    </div>
                    <div
                      className="features-icon-box feedback d-flex wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="text">
                        <h4>$105k</h4>
                        <p>Loans given out in the last few months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="app-showcase-area">
          <Image
            width={200}
            height={200}
            className="shape_img"
            src="/img/saas-app/grid-two.png"
            alt=""
          />
          <div className="container">
            <div
              className="saas-section-title text-center mb-60 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h2>
                All your <span>finance</span> in one app
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but them
                <br /> majority have suffered alteration form injected.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="app-showcase-item">
                  <div
                    className="round wow floatingBubbles"
                    data-wow-delay="0.3s"
                  ></div>
                  <h4 className="wow fadeInUp" data-wow-delay="0.6s">
                    Simple loan register process
                  </h4>
                  <p className="wow fadeInUp" data-wow-delay="0.7s">
                    I transform thorn problems into elagant solutions using
                    visuals design use this pack illustrations for many.
                  </p>
                  <Image
                    width={520}
                    height={320}
                    className="wow fadeInUp"
                    data-wow-delay="0.9s"
                    src="/img/saas-app/app_showcase1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="app-showcase-item box-two">
                  <div
                    className="round wow floatingBubbles"
                    data-wow-delay="0.3s"
                  ></div>
                  <h4 className="wow fadeInUp" data-wow-delay="0.6s">
                    Access to secure banking
                  </h4>
                  <p className="wow fadeInUp" data-wow-delay="0.7s">
                    I transform thorn problems into elagant solutions using
                    visuals design use this pack illustrations for many.
                  </p>
                  <Image
                    width={520}
                    height={320}
                    className="wow fadeInUp"
                    data-wow-delay="0.9s"
                    src="/img/saas-app/app_showcase2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="app-showcase-item box-three">
                  <div
                    className="app-text wow fadeInLeft"
                    data-wow-delay="0.2s"
                  >
                    <h3>Calculate and confirm your loans</h3>
                    <p>
                      I transform thorn problems into elagant solutions using
                      visuals design use this pack illustrations for many.
                    </p>
                    <a
                      href="#"
                      className="wow fadeInUp theme-btn theme-btn-lg theme-btn-alt"
                    >
                      Visit loan calculator
                    </a>
                  </div>
                  <div className="img wow fadeInRight" data-wow-delay="0.4ss">
                    <Image
                      width={500}
                      height={420}
                      src="/img/saas-app/dash_app.png"
                      alt=""
                    />
                    <div className="app_shap_img one">
                      <Image
                        width={200}
                        height={100}
                        data-parallax='{"x": 0, "y": -80}'
                        src="/img/saas-app/dash_app_small.png"
                        alt=""
                      />
                    </div>
                    <div className="app_shap_img two">
                      <Image
                        width={200}
                        height={120}
                        data-parallax='{"x": 0, "y": 50}'
                        src="/img/saas-app/dash_app_small2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="saas-pricing-area bg-white">
          <div className="container">
            <div
              className="saas-section-title text-center mb-60 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h2>
                The perfect <span>pricings</span> plans
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but them
                <br /> majority have suffered alteration form injected.
              </p>
            </div>
            <div className="pricing_tab_btn active text-center">
              <span>Monthly</span>
              <span className="toggle"></span>
              <span>Yearly</span>
            </div>
            <div className="pricing_inner">
              <div className="price_items month">
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-md-6">
                    <div className="price_item wow fadeInUp">
                      <div className="price_header">
                        <h6>Basic Plan</h6>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available but the word.
                        </p>
                      </div>
                      <div className="price">
                        $15<sub>/month</sub>
                      </div>
                      <ul className="service_list list-unstyled">
                        <li>
                          <i className="icon_check_alt"></i>Non ipsum metus
                          vulputate
                        </li>
                        <li>
                          <i className="icon_check_alt"></i>There are variations
                          of passages
                        </li>
                        <li>
                          <i className="icon_check_alt"></i>Alteration some form
                          injected
                        </li>
                      </ul>
                      <a
                        href="contact.html"
                        className="price_btn theme-btn theme-btn-alt"
                      >
                        Choose Plan
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="price_item wow fadeInUp">
                      <div className="price_header">
                        <h6>Premium Plan</h6>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available but the word.
                        </p>
                      </div>
                      <div className="price">
                        $25<sub>/month</sub>
                      </div>
                      <ul className="service_list list-unstyled">
                        <li>
                          <i className="icon_check_alt"></i>Non ipsum metus
                          vulputate
                        </li>
                        <li>
                          <i className="icon_check_alt"></i>There are variations
                          of passages
                        </li>
                        <li>
                          <i className="icon_check_alt"></i>Alteration some form
                          injected
                        </li>
                      </ul>
                      <Link
                        href="contact.html"
                        className="price_btn theme-btn theme-btn-alt"
                      >
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="price_item wow fadeInUp">
                      <div className="price_header">
                        <h6>Business Plan</h6>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available but the word.
                        </p>
                      </div>
                      <div className="price">
                        $45<sub>/month</sub>
                      </div>
                      <ul className="service_list list-unstyled">
                        <li>
                          <i className="icon_check_alt"></i>Non ipsum metus
                          vulputate
                        </li>
                        <li>
                          <i className="icon_check_alt"></i>There are variations
                          of passages
                        </li>
                        <li>
                          <i className="icon_check_alt"></i>Alteration some form
                          injected
                        </li>
                      </ul>
                      <Link
                        href="contact.html"
                        className="price_btn theme-btn theme-btn-alt"
                      >
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price_items year">
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-md-6">
                    <div className="price_item wow fadeInUp">
                      <div className="price_header">
                        <h6>Basic Plan</h6>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available but the word.
                        </p>
                      </div>
                      <div className="price">
                        $25<sub>/ Year</sub>
                      </div>
                      <ul className="service_list list-unstyled">
                        <li>
                          <i className="icon_check_alt"></i>Non ipsum metus
                          vulputate
                        </li>
                        <li>
                          <i className="icon_check_alt"></i>There are variations
                          of passages
                        </li>
                        <li>
                          <i className="icon_check_alt"></i>Alteration some form
                          injected
                        </li>
                      </ul>
                      <Link
                        href="contact.html"
                        className="price_btn theme-btn theme-btn-alt"
                      >
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="price_item wow fadeInUp">
                      <div className="price_header">
                        <h6>Premium Plan</h6>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available but the word.
                        </p>
                      </div>
                      <div className="price">
                        $35<sub>/ Year</sub>
                      </div>
                      <ul className="service_list list-unstyled">
                        <li>
                          <i className="icon_check_alt"></i>Non ipsum metus
                          vulputate
                        </li>
                        <li>
                          <i className="icon_check_alt"></i>There are variations
                          of passages
                        </li>
                        <li>
                          <i className="icon_check_alt"></i>Alteration some form
                          injected
                        </li>
                      </ul>
                      <Link
                        href="contact.html"
                        className="price_btn theme-btn theme-btn-alt"
                      >
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="price_item wow fadeInUp">
                      <div className="price_header">
                        <h6>Business Plan</h6>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available but the word.
                        </p>
                      </div>
                      <div className="price">
                        $55<sub>/ Year</sub>
                      </div>
                      <ul className="service_list list-unstyled">
                        <li>
                          <i className="icon_check_alt"></i>Non ipsum metus
                          vulputate
                        </li>
                        <li>
                          <i className="icon_check_alt"></i>There are variations
                          of passages
                        </li>
                        <li>
                          <i className="icon_check_alt"></i>Alteration some form
                          injected
                        </li>
                      </ul>
                      <Link
                        href="contact.html"
                        className="price_btn theme-btn theme-btn-alt"
                      >
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <PricingPlan />

        {/* <section className="saas-faq-area bg-white">
          <div className="container">
            <div
              className="saas-section-title text-center mb-60 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h2>
                Frequently asked <span>questions</span>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but them
                <br /> majority have suffered alteration form injected.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="accordion" id="accordionExample">
                  <div className="faq_item wow fadeInUp" data-wow-delay="0.3s">
                    <div className="faq-header" id="headingOne">
                      <h6
                        className="mb-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How do I reset my password?<i className="icon_plus"></i>
                        <i className="icon_minus-06"></i>
                      </h6>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="faq-body">
                        <p>
                          {' '}
                          To reset your password, go to the login page and click
                          on the Forgot Password link. You will be prompted to
                          enter your email address and a reset link will be sent
                          to you.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="faq_item wow fadeInUp" data-wow-delay="0.5s">
                    <div className="faq-header" id="headingTwo">
                      <h6
                        className="mb-0 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        What payment methods do you accept and how do I track my
                        purchase order?<i className="icon_plus"></i>
                        <i className="icon_minus-06"></i>
                      </h6>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="faq-body">
                        <p>
                          {' '}
                          To reset your password, go to the login page and click
                          on the Forgot Password link. You will be prompted to
                          enter your email address and a reset link will be sent
                          to you.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="faq_item wow fadeInUp" data-wow-delay="0.7s">
                    <div className="faq-header" id="headingThree">
                      <h6
                        className="mb-0 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        What is your return policy and how do I contact support
                        incase of said event ?<i className="icon_plus"></i>
                        <i className="icon_minus-06"></i>
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
                          {' '}
                          To reset your password, go to the login page and click
                          on the Forgot Password link. You will be prompted to
                          enter your email address and a reset link will be sent
                          to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="accordion" id="accordionExample2">
                  <div className="faq_item wow fadeInUp" data-wow-delay="0.3s">
                    <div className="faq-header" id="headingFour">
                      <h6
                        className="mb-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour"
                      >
                        What is a mutual fund and how does compound interest
                        builds up ?<i className="icon_plus"></i>
                        <i className="icon_minus-06"></i>
                      </h6>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse show"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="faq-body">
                        <p>
                          {' '}
                          To reset your password, go to the login page and click
                          on the Forgot Password link. You will be prompted to
                          enter your email address and a reset link will be sent
                          to you.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="faq_item wow fadeInUp" data-wow-delay="0.5s">
                    <div className="faq-header" id="headingFive">
                      <h6
                        className="mb-0 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive"
                      >
                        What budget is a financial plan that outlines your
                        expected income and expenses ?
                        <i className="icon_plus"></i>
                        <i className="icon_minus-06"></i>
                      </h6>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="faq-body">
                        <p>
                          {' '}
                          To reset your password, go to the login page and click
                          on the Forgot Password link. You will be prompted to
                          enter your email address and a reset link will be sent
                          to you.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="faq_item wow fadeInUp" data-wow-delay="0.7s">
                    <div className="faq-header" id="headingSix">
                      <h6
                        className="mb-0 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="true"
                        aria-controls="collapseSix"
                      >
                        What is a strategy of spreading your investment across
                        different asset classNamees ?
                        <i className="icon_plus"></i>
                        <i className="icon_minus-06"></i>
                      </h6>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="faq-body">
                        <p>
                          {' '}
                          To reset your password, go to the login page and click
                          on the Forgot Password link. You will be prompted to
                          enter your email address and a reset link will be sent
                          to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <FinanceAccordion/>

        <section className="saas-subscribe-area cta-4">
          <div className="container">
            <div className="cta-content wow fadeInUp" data-wow-delay="0.2s">
              <h2 className="mb-10">Start your free trial !</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available.
              </p>
              <div className="d-flex flex-column flex-sm-row mt-30">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email address"
                />
                <a
                  href="#"
                  className="input-append theme-btn theme-btn-lg ms-sm-3"
                >
                  Subscribe
                </a>
              </div>
              <ul className="list-unstyled feature-list">
                <li>
                  <i className="fas fa-check-circle"></i> Get 30 day free trial
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> No Spamming
                </li>
              </ul>
            </div>
          </div>
          <Image
            width={1000}
            height={750}
            className="saas_dash_img wow fadeInUp"
            data-parallax='{"x": -40, "y": 50}'
            data-wow-delay="0.2s"
            src="/img/saas-app/subscribe-dashboard.png"
            alt=""
          />
        </section>
      </main>

      <footer className="saas-footer-area bg-white">
        <div className="saas-footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="f-widget about-widget">
                  <h4 className="f-widget-title">Contact us</h4>
                  <ul className="list-unstyled">
                    <li>
                      214 Cleo Street Suite 832 <br />
                      Botswana
                    </li>
                    <li>
                      <Link href="tel:235684154">+23 572-904-6013</Link>
                    </li>
                    <li>
                      <Link href="mailto:banca.support@webmail.com">
                        banca.support@webmail.com
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:banca.support@webmail.com">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="f-widget link-widget">
                  <h4 className="f-widget-title">Support</h4>
                  <ul className="footer-link">
                    <li>
                      <Link href="#">Pricing</Link>
                    </li>
                    <li>
                      <Link href="#">Account Information</Link>
                    </li>
                    <li>
                      <Link href="#">About</Link>
                    </li>
                    <li>
                      <Link href="#">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="f-widget link-widget">
                  <h4 className="f-widget-title">Design Online</h4>
                  <ul className="footer-link">
                    <li>
                      <Link href="#">Logo Maker</Link>
                    </li>
                    <li>
                      <Link href="#">Cover Photo Maker</Link>
                    </li>
                    <li>
                      <Link href="#">Banner Maker</Link>
                    </li>
                    <li>
                      <Link href="#">Branded Templates</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="f-widget link-widget">
                  <h4 className="f-widget-title">Tools</h4>
                  <ul className="footer-link">
                    <li>
                      <Link href="#">Templates</Link>
                    </li>
                    <li>
                      <Link href="#">PDF Editor</Link>
                    </li>
                    <li>
                      <Link href="#">Animator</Link>
                    </li>
                    <li>
                      <Link href="#">Image Resizer</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="saas-footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                <div className="d-flex">
                  <div className="f-social">
                    <Link href="#">
                      <i className="social_facebook"></i>
                    </Link>
                    <Link href="#">
                      <i className="social_youtube"></i>
                    </Link>
                    <Link href="#">
                      <i className="social_instagram"></i>
                    </Link>
                  </div>
                  <p>
                    2025 <Link href="#">Banca</Link>. All rights reserved
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 px-2">
                <ul className="list-unstyled payment-list">
                  <li>
                    <Link href="#">
                      <Image
                        width={40}
                        height={30}
                        src="/img/saas-app/visa.png"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        width={40}
                        height={30}
                        src="/img/saas-app/amazon.png"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        width={40}
                        height={30}
                        src="/img/saas-app/stripe.png"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        width={40}
                        height={30}
                        src="/img/saas-app/paypal.png"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        width={40}
                        height={30}
                        src="/img/saas-app/amex.png"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        width={40}
                        height={33}
                        src="/img/saas-app/discover.png"
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FinanceSassApp;
