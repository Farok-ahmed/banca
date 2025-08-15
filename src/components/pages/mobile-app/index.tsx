"use client";
import NewsSlider from "@/components/BancaNews";
import ClientSlider from "@/components/MobileTestimonial";
import Image from "next/image";
import Link from "next/link";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import classNames from "classnames";
import { useState } from "react";
import { useTheme } from "@/contextAPi/ThemeContext";
import { usePathname } from "next/navigation";
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/css/nice-select.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";

const MobileAppPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  // helper to render caret icon on mobile
  const renderMobileDropdownIcon = (label: string) => (
    <i
      className="arrow_carrot-down_alt2 mobile_dropdown_icon d-lg-none ms-1"
      aria-hidden="true"
      onClick={(e) => {
        e.preventDefault();
        toggleDropdown(label);
      }}
      style={{ cursor: "pointer" }}
    ></i>
  );

  const menuItems = [
    {
      label: "Home",
      href: "/",
      sub: [
        ["/", "Smart Finance"],
        ["/index-company", "Loan Company"],
        ["/mobile-app", "Mobile App"],
        ["/simple-banca", "Simple Banca"],
        ["/loan-steps", "Loan Steps"],
        ["/finance-sass-app", "Finance Sass App"],
        ["/small-bank", "Small Bank"],
      ],
    },
    {
      label: "Loan",
      href: "/loan",
      sub: [
        ["/loan", "Get Loan"],
        [
          "/loan-details",
          "Loan Application",
          [
            ["/loan-details", "Step 01"],
            ["/personal-details", "Step 02"],
            ["/document-upload", "Step 03"],
          ],
        ],
      ],
    },
    {
      label: "Job Pages",
      href: "/career",
      sub: [
        ["/career", "Career"],
        ["/jobs", "Jobs"],
        ["/job-application", "Job Application"],
      ],
    },
    {
      label: "Pages",
      href: "/card",
      sub: [
        ["/card", "Cards"],
        ["/about-us", "About Us"],
        ["/contact-us", "Contact Us"],
        ["/error", "404 Error"],
      ],
    },
    {
      label: "Blog",
      href: "/blog-listing",
      sub: [
        ["/blog-listing", "Blog Listing"],
        ["/blog-details", "Blog Details"],
      ],
    },
  ];

  return (
    <div>
      <header className="header">
        <div className="header-menu header-menu-4" id="sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand sticky_logo" href="/">
                <Image
                  className="main"
                  src="/img/logo/Logo.png"
                  alt="logo"
                  width={130}
                  height={40}
                />
                <Image
                  className="sticky"
                  src="/img/logo/Logo-2.png"
                  alt="logo sticky"
                  width={130}
                  height={40}
                />
              </Link>

              <button
                className={`navbar-toggler ${menuOpen ? "" : "collapsed"}`}
                type="button"
                onClick={handleMenuToggle}
                aria-expanded={menuOpen}
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className={`hamburger ${menuOpen ? "d_none" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span
                    className={`hamburger-cross ${menuOpen ? "" : "d_none"}`}
                  >
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <div
                className={classNames("collapse navbar-collapse right-nav", {
                  show: menuOpen,
                })}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav menu ms-auto">
                  {menuItems.map((item, idx) => {
                    const isActive =
                      pathname === item.href ||
                      item.sub.some((subItem) =>
                        Array.isArray(subItem[2])
                          ? subItem[2].some(([href]) => pathname === href)
                          : pathname === subItem[0]
                      );

                    return (
                      <li className="nav-item dropdown submenu" key={idx}>
                        <Link
                          href={item.href}
                          className={classNames("nav-link dropdown-toggle", {
                            active: isActive,
                          })}
                        >
                          {item.label}
                          {renderMobileDropdownIcon(item.label)}
                        </Link>

                        <ul
                          className={classNames("dropdown-menu", {
                            show: openDropdown === item.label,
                          })}
                        >
                          {item.sub.map((subItem, subIdx) =>
                            Array.isArray(subItem[2]) ? (
                              <li
                                className="nav-item dropdown submenu"
                                key={subIdx}
                              >
                                <Link
                                  href="#"
                                  className={classNames(
                                    "nav-link dropdown-toggle",
                                    {
                                      active: subItem[2].some(
                                        ([href]) => pathname === href
                                      ),
                                    }
                                  )}
                                >
                                  {subItem[1]}
                                  {renderMobileDropdownIcon(
                                    `${item.label}-nested-${subIdx}`
                                  )}
                                </Link>
                                <ul
                                  className={classNames("dropdown-menu", {
                                    show:
                                      openDropdown ===
                                      `${item.label}-nested-${subIdx}`,
                                  })}
                                >
                                  {subItem[2].map(([href, label], innerIdx) => (
                                    <li className="nav-item" key={innerIdx}>
                                      <Link
                                        href={href}
                                        className={classNames("nav-link", {
                                          active: pathname === href,
                                        })}
                                      >
                                        {label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ) : (
                              <li className="nav-item" key={subIdx}>
                                <Link
                                  href={subItem[0] as string}
                                  className={classNames("nav-link", {
                                    active: pathname === subItem[0],
                                  })}
                                >
                                  {subItem[1]}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                    );
                  })}
                </ul>

                <Link
                  className="theme-btn theme-btn-rounded-2 theme-btn-alt"
                  href="https://themeforest.net/item/banca-banking-business-loan-bootstrap5html-website-template/32788885?s_rank=9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
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
                    style={{
                      left: theme === "body_dark" ? 3 : 26,
                    }}
                    htmlFor="something"
                  ></label>
                  <input
                    type="checkbox"
                    name="something"
                    id="something"
                    className="dark_mode_switcher"
                    checked={theme === "body_dark"}
                    onChange={toggleTheme}
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="banner-area" id="banner_animation">
          <div className="bubbles">
            <div data-parallax='{"x": 0, "y": -250, "rotateZ":0}'>
              <div className=" bubble"></div>
            </div>
            <div data-parallax='{"x": 0, "y": -250, "rotateZ":0}'>
              <div className=" bubble"></div>
            </div>
            <div data-parallax='{"x": 50, "y": -250, "rotateZ":0}'>
              <div className=" bubble"></div>
            </div>
            <div data-parallax='{"x": 60, "y": -200, "rotateZ":0}'>
              <div className=" bubble"></div>
            </div>
            <div data-parallax='{"x": 50, "y": -130, "rotateZ":0}'>
              <div className=" bubble"></div>
            </div>
            <div data-parallax='{"x": 130, "y": 250, "rotateZ":0}'>
              <div className=" bubble"></div>
            </div>
            <div data-parallax='{"x": 0, "y": -250, "rotateZ":0}'>
              <div className=" bubble"></div>
            </div>
            <div data-parallax='{"x": 100, "y": -250, "rotateZ":0}'>
              <div className=" bubble"></div>
            </div>
          </div>
          <div className="logos">
            <Image
              width={110}
              height={110}
              src="/img/banner/Logo-1.png"
              alt="social"
            />
            <Image
              width={110}
              height={110}
              src="/img/banner/Logo-2.png"
              alt="social"
            />
            <Image
              width={110}
              height={110}
              src="/img/banner/Logo-3.png"
              alt="social"
            />
            <Image
              width={110}
              height={110}
              src="/img/banner/Logo-4.png"
              alt="social"
            />
            <Image
              width={110}
              height={110}
              src="/img/banner/Logo-5.png"
              alt="social"
            />
            <Image
              width={110}
              height={110}
              src="/img/banner/Logo-6.png"
              alt="social"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="banner-content text-center pt-200">
                  <h1>
                    Simple and Safe Digital <br /> Banking Mobile App
                  </h1>
                  <div className="img-area mt-35">
                    <Image
                      width={400}
                      height={180}
                      className="img-fluid"
                      data-depth="0.6"
                      src="/img/banner/person.png"
                      alt="person"
                    />
                  </div>

                  <div className="symbol-pulse">
                    <div className="pulse-1"></div>
                    <div className="pulse-2"></div>
                    <div className="pulse-x"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row position-relative">
              <div className="col-12">
                <div className="floated-widget">
                  <div className="row text-center gy-2 gy-lg-0">
                    <div className="col-lg-3 col-6">
                      <div className="statistics-widget-1 text-start pt-10">
                        <Image
                          width={50}
                          height={60}
                          src="/img/banner/icon-1.svg"
                          alt="icon"
                        />
                        <p>Active user</p>
                        <h2 className="counter">
                          <span>15,000</span>
                        </h2>
                      </div>
                    </div>

                    <div className="col-lg-3 col-6">
                      <div className="statistics-widget-1 text-start pt-10">
                        <Image
                          width={50}
                          height={60}
                          src="/img/banner/icon-2.svg"
                          alt="icon"
                        />
                        <p>download</p>
                        <h2 className="counter">
                          <span>49.9</span>k
                        </h2>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6">
                      <div className="statistics-widget-1 text-start pt-10">
                        <Image
                          width={50}
                          height={60}
                          src="/img/banner/icon-3.svg"
                          alt="icon"
                        />
                        <p>reviews</p>
                        <h2 className="counter">
                          <span>35.7</span>k
                        </h2>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6">
                      <div className="statistics-widget-1 text-start pt-10">
                        <Image
                          width={50}
                          height={60}
                          src="/img/banner/icon-4.svg"
                          alt="icon"
                        />
                        <p>partners</p>
                        <h2 className="counter">
                          <span>199</span>+
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="feature" className="feature-area pt-200 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto pt-160 pt-lg-90 pb-65">
                <div className="section-title">
                  <h2 className="wow fadeInUp">Our Featured</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    You may want top security so that you can rest assured that
                    your accounts will not be compromised while you are using
                    the app.
                  </p>
                </div>
              </div>
            </div>
            <div className="row gy-xl-0 gy-4">
              <div className="col-xl-3 col-md-6">
                <div className="feature-card-widget wow fadeInUp">
                  <div className="card-img">
                    <Image
                      width={60}
                      height={60}
                      src="/img/feature/icon-1.svg"
                      alt="feature svg"
                    />
                  </div>
                  <h4>Prepaid Card</h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div
                  className="feature-card-widget wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="card-img">
                    <Image
                      width={60}
                      height={60}
                      src="/img/feature/icon-2.svg"
                      alt="feature svg"
                    />
                  </div>
                  <h4>Easy to use</h4>
                  <p>
                    The way to solve the word placement to treat the phrase easy
                    to use as a single.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div
                  className="feature-card-widget wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="card-img">
                    <Image
                      width={60}
                      height={60}
                      src="/img/feature/icon-3.svg"
                      alt="feature svg"
                    />
                  </div>
                  <h4>save your Card</h4>
                  <p>
                    We keep your information safe and notify you anytime your
                    saved payment card.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div
                  className="feature-card-widget wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <div className="card-img">
                    <Image
                      width={60}
                      height={60}
                      src="/img/feature/icon-4.svg"
                      alt="feature svg"
                    />
                  </div>
                  <h4>pay bill</h4>
                  <p>
                    That is why we have a wide range of bill payment options
                    through our Banking service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="track-f-progress pt-125 pb-160">
          <div className="container">
            <div className="row gy-lg-0 gy-4 pb-10">
              <div className="col-md-6 mx-auto">
                <div className="img-content">
                  <Image
                    width={1010}
                    height={860}
                    className="bg-img"
                    src="/img/track-progress/shape-bg.png"
                    alt="shape image"
                  />
                  <Image
                    width={400}
                    height={600}
                    className="track-3 wow fadeInUp"
                    src="/img/track-progress/track-1.png"
                    alt=""
                  />
                  <Image
                    width={420}
                    height={270}
                    className="track-img track-1 wow fadeInRight"
                    data-wow-delay="0.3s"
                    src="/img/track-progress/track-2.png"
                    alt=""
                  />
                  <Image
                    width={200}
                    height={250}
                    className="track-img track-2 wow fadeInRight"
                    data-wow-delay="0.5s"
                    src="/img/track-progress/track-3.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-6 col-xl-5 offset-xl-1 d-flex align-items-center">
                <div className="text-content">
                  <h2>Track Your Financial Progress</h2>
                  <p>
                    Set challenges Set small challenges to motivate yourself to
                    save. Setting smaller goals within your larger goals can be
                    more engaging in tracking{" "}
                  </p>

                  <div>
                    <Link className="theme-btn-2 mt-55" href="#">
                      <span className="arrow">
                        <span className="horizontal-line"></span>
                      </span>
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="card-payment pt-100 pb-130">
          <div className="container">
            <div className="row gy-lg-0 gy-4">
              <div className="col-lg-6 col-xl-5 d-flex align-items-center order-2 order-lg-1">
                <div className="text-content">
                  <h2>Simplicity Credit Card Payment</h2>
                  <p>
                    Make a Payment. Cardholders can pay any outstanding balances
                    on their Citibank Simplicity Credit Card by logging in to
                    their online account.
                  </p>

                  <div>
                    <Link className="theme-btn-2 mt-55" href="#">
                      <span className="arrow">
                        <span className="horizontal-line"></span>
                      </span>
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mx-auto offset-xl-1 order-1 order-lg-2">
                <div className="img-content">
                  <Image
                    width={960}
                    height={800}
                    className="bg-img"
                    src="/img/card-payment/shape-bg.png"
                    alt=""
                  />
                  <Image
                    width={400}
                    height={200}
                    className="card-1 img-fluid wow fadeInLeft"
                    src="/img/card-payment/card-1.png"
                    alt=""
                  />
                  <Image
                    width={200}
                    height={530}
                    className="card-2 wow fadeInLeft"
                    data-wow-delay="0.3s"
                    src="/img/card-payment/card-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="internet-banking pt-100 pb-150">
          <div className="container">
            <div className="row gy-lg-0 gy-4">
              <div className="col-md-6 mx-auto mx-lg-0 text-center">
                <div className="img-content">
                  <Image
                    width={1090}
                    height={1030}
                    className="bg-img"
                    src="/img/internet-banking/shape-bg.png"
                    alt=""
                  />
                  <Image
                    width={480}
                    height={600}
                    className="bank-main img-fluid wow fadeInUp"
                    src="/img/internet-banking/img-1.png"
                    alt=""
                  />
                  <Image
                    width={240}
                    height={200}
                    className="bank-1 img-fluid wow fadeInRight"
                    data-wow-delay="0.3s"
                    src="/img/internet-banking/img-2.png"
                    alt=""
                  />
                  <Image
                    width={310}
                    height={350}
                    className="bank-2 img-fluid wow fadeInLeft"
                    data-wow-delay="0.6s"
                    src="/img/internet-banking/img-3.png"
                    alt=""
                  />
                  <Image
                    width={415}
                    height={430}
                    className="bank-3 img-fluid wow fadeInRight"
                    data-wow-delay="0.8s"
                    src="/img/internet-banking/info.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-6 col-xl-4 offset-xl-1 d-flex align-items-center">
                <div className="text-content">
                  <h2>Access Personal Internet Banking</h2>
                  <p>
                    If you have chosen to order a Security Key, you will be
                    entitled a 30-day period after self-registration, which is
                    referred to as Security Key Activation Grace Period. During
                    this period, you can log on to Personal Internet Banking.
                  </p>

                  <div>
                    <Link className="theme-btn-2 mt-55" href="#">
                      <span className="arrow">
                        <span className="horizontal-line"></span>
                      </span>
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="security-area pt-115 pb-130">
          <div className="container">
            <div className="section-title">
              <h2>Security Tips</h2>
            </div>

            <div className="row pt-40">
              <div className="col-xl-6">
                <div className="single-security-widget wow fadeInUp">
                  <div className="security-img text-center">
                    <Image
                      width={600}
                      height={400}
                      className="img-fluid round-15"
                      src="/img/security-tips/img-1.png"
                      alt="security image"
                    />
                  </div>
                  <div className="security-content">
                    <h4>Online Security</h4>
                    <p>
                      Banca will never send emails that ask for confidential
                      information. We will never seek your personal details such
                      as account information, password, etc at any time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="single-security-widget mt-xl-0 mt-4 wow fadeInRight"
                  data-wow-delay="0.2s"
                >
                  <div className="row align-items-center">
                    <div className="col-4">
                      <div className="security-img h-100">
                        <Image
                          width={200}
                          height={200}
                          className="img-fluid round-10 h-100"
                          src="/img/security-tips/img-2.png"
                          alt="security image"
                        />
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="security-content-2 ps-2">
                        <p className="mb-4">
                          Naver share your OTP with anyon,click here for more
                          security tips to keep you safe.
                        </p>
                        <span className="tips-title">Card Safety</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="single-security-widget mt-25 mt-lg-30 wow fadeInRight"
                  data-wow-delay="0.4s"
                >
                  <div className="row">
                    <div className="col-7">
                      <div className="security-content-2">
                        <p>
                          Never disclose your pin number to anyone, Mashreq
                          staff will never ask for your pin number. For your
                          security, we recommend that you change your ATM PIN
                          regularly.
                        </p>
                        <span className="tips-title mt-35">ATM Safety</span>
                      </div>
                    </div>

                    <div className="col-5">
                      <div className="security-img h-100">
                        <Image
                          width={200}
                          height={200}
                          className="img-fluid round-10 h-100"
                          src="/img/security-tips/img-3.png"
                          alt="security image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* what our client say */}

        <section className="client-area pt-110 ">
          <div className="container">
            <div className="section-title">
              <h2 className="wow fadeInUp mb-0">What Our Client Say</h2>
            </div>

            {/* <div className="client-slider pt-45 pb-140">
              <div className="single-client wow fadeInUp" data-wow-delay="0.1s">
                <Image
                  width={200}
                  height={200}
                  className="img-fluid rounded-circle"
                  src="/img/client/client-1.png"
                  alt="cleint"
                />
                <p className="quote">
                  Assertively procrastinate distributed relationships whereas
                  equity invested intellectual capital everything
                </p>
                <div className="client-info">
                  <div>
                    <p>Moshrarf Hossan</p>
                    <span className="role">Ui / Ux Designer</span>
                  </div>
                  <div className="rating">
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-client wow fadeInUp" data-wow-delay="0.3s">
                <Image
                  width={200}
                  height={200}
                  className="img-fluid rounded-circle"
                  src="/img/client/client-2.png"
                  alt="cleint"
                />
                <p className="quote">
                  Assertively procrastinate distributed relationships whereas
                  equity invested intellectual capital everything
                </p>
                <div className="client-info">
                  <div>
                    <p>Eh Jewel</p>
                    <span className="role">Spider Themes,CEO</span>
                  </div>
                  <div className="rating">
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-client wow fadeInUp" data-wow-delay="0.5s">
                <Image
                  width={200}
                  height={200}
                  className="img-fluid rounded-circle"
                  src="/img/client/client-3.png"
                  alt="cleint"
                />
                <p className="quote">
                  Assertively procrastinate distributed relationships whereas
                  equity invested intellectual capital everything
                </p>
                <div className="client-info">
                  <div>
                    <p>Arif Rahman</p>
                    <span className="role">Junior web developer</span>
                  </div>
                  <div className="rating">
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-client wow fadeInUp" data-wow-delay="0.7s">
                <Image
                  width={200}
                  height={200}
                  className="img-fluid rounded-circle"
                  src="/img/client/client-1.png"
                  alt="cleint"
                />
                <p className="quote">
                  Assertively procrastinate distributed relationships whereas
                  equity invested intellectual capital everything
                </p>
                <div className="client-info">
                  <div>
                    <p>Moshrarf Hossan</p>
                    <span className="role">Ui / Ux Designer</span>
                  </div>
                  <div className="rating">
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-client wow fadeInUp" data-wow-delay="0.9s">
                <Image
                  width={200}
                  height={200}
                  className="img-fluid rounded-circle"
                  src="/img/client/client-2.png"
                  alt="cleint"
                />
                <p className="quote">
                  Assertively procrastinate distributed relationships whereas
                  equity invested intellectual capital everything
                </p>
                <div className="client-info">
                  <div>
                    <p>Eh Jewel</p>
                    <span className="role">Spider Themes,CEO</span>
                  </div>
                  <div className="rating">
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-client wow fadeInUp" data-wow-delay="1.1s">
                <Image
                  width={200}
                  height={200}
                  className="img-fluid rounded-circle"
                  src="/img/client/client-3.png"
                  alt="cleint"
                />
                <p className="quote">
                  Assertively procrastinate distributed relationships whereas
                  equity invested intellectual capital everything
                </p>
                <div className="client-info">
                  <div>
                    <p>Arif Rahman</p>
                    <span className="role">Junior web developer</span>
                  </div>
                  <div className="rating">
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-client wow fadeInUp" data-wow-delay="1.3s">
                <Image
                  width={200}
                  height={200}
                  className="img-fluid rounded-circle"
                  src="/img/client/client-1.png"
                  alt="cleint"
                />
                <p className="quote">
                  Assertively procrastinate distributed relationships whereas
                  equity invested intellectual capital everything
                </p>
                <div className="client-info">
                  <div>
                    <p>Moshrarf Hossan</p>
                    <span className="role">Ui / Ux Designer</span>
                  </div>
                  <div className="rating">
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-client wow fadeInUp" data-wow-delay="1.5s">
                <Image
                  width={200}
                  height={200}
                  className="img-fluid rounded-circle"
                  src="/img/client/client-2.png"
                  alt="cleint"
                />
                <p className="quote">
                  Assertively procrastinate distributed relationships whereas
                  equity invested intellectual capital everything
                </p>
                <div className="client-info">
                  <div>
                    <p>Eh Jewel</p>
                    <span className="role">Spider Themes,CEO</span>
                  </div>
                  <div className="rating">
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-client wow fadeInUp" data-wow-delay="1.7s">
                <Image
                  width={200}
                  height={200}
                  className="img-fluid rounded-circle"
                  src="/img/client/client-3.png"
                  alt="cleint"
                />
                <p className="quote">
                  Assertively procrastinate distributed relationships whereas
                  equity invested intellectual capital everything
                </p>
                <div className="client-info">
                  <div>
                    <p>Arif Rahman</p>
                    <span className="role">Junior web developer</span>
                  </div>
                  <div className="rating">
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                    <Link href="#">
                      <i className="icon_star"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}

            <ClientSlider />

            <div className="row pt-110">
              <div className="col-md-12 position-relative">
                <div
                  className="cta cta-2"
                  style={{
                    backgroundImage: `url('/img/client/cta-bg.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="bubbles">
                    <div className="bubble-1"></div>
                    <div className="bubble-2"></div>
                    <div className="bubble-3"></div>
                    <div className="bubble-4"></div>
                    <div className="bubble-5"></div>
                    <div className="bubble-6"></div>
                    <div className="bubble-7"></div>
                    <div className="bubble-8"></div>
                  </div>
                  <div className="row gy-xl-0 gy-4">
                    <div className="col-xl-5">
                      <div className="cta-content wow fadeInLeft text-center text-xl-start">
                        <h2>Download Our Free Mobile App</h2>
                      </div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center flex-wrap justify-content-xl-end justify-content-center">
                      <Link href="#">
                        <div
                          className="app-btn mt-3 mt-sm-0 wow fadeInRight"
                          data-wow-delay="0.1s"
                        >
                          <i className="fab fa-google-play"></i>
                          <div className="btn-text">
                            <span>GET IT ON</span>
                            <p>Google Play</p>
                          </div>
                        </div>
                      </Link>
                      <Link href="#">
                        <div
                          className="app-btn mt-3 mt-sm-0 wow fadeInRight"
                          data-wow-delay="0.2s"
                        >
                          <i className="fab fa-apple"></i>
                          <div className="btn-text">
                            <span>Downloan on the</span>
                            <p>Apple Store</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* news slider */}
        <NewsSlider />

        {/* <section className="news-area pt-200 pb-110">
          <div className="container ">
            <div className="section-title pt-30">
              <h2 className="wow fadeInUp">Banca Latest News</h2>
            </div>

            <div className="news-slider  pt-30 ">
              <div className="blog-widget-1 wow fadeInUp" data-wow-delay="0.1s">
                <Image
                  width={200}
                  height={200}
                  className="w-sm-auto w-100"
                  src="/img/blog/news-1.png"
                  alt="news image"
                />

                <div className="blog-content pr-20 pl-20">
                  <h4>
                    <Link href="#">What credit limit should I request?</Link>
                  </h4>
                  <p>
                    You can apply for a credit card online, over the phone, by
                    mail or in person. Applying online is the best, most...
                  </p>

                  <Link className="read-more" href="#">
                    Read More <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
              <div className="blog-widget-1 wow fadeInUp" data-wow-delay="0.3s">
                <Image
                  width={200}
                  height={200}
                  className="w-sm-auto w-100"
                  src="/img/blog/news-2.png"
                  alt="news image"
                />

                <div className="blog-content pr-20 pl-20">
                  <h4>
                    <Link href="#">Which bank account should I open</Link>
                  </h4>
                  <p>
                    You can apply for a credit card online, over the phone, by
                    mail or in person. Applying online is the best, most...
                  </p>

                  <Link className="read-more" href="#">
                    Read More <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
              <div className="blog-widget-1 wow fadeInUp" data-wow-delay="0.5s">
                <Image
                  width={200}
                  height={200}
                  className="w-sm-auto w-100"
                  src="/img/blog/news-3.png"
                  alt="news image"
                />

                <div className="blog-content pr-20 pl-20">
                  <h4>
                    <Link href="#">
                      Banking Basics: get to know your bank account
                    </Link>
                  </h4>
                  <p>
                    You can apply for a credit card online, over the phone, by
                    mail or in person. Applying online is the best, most...
                  </p>

                  <Link className="read-more" href="#">
                    Read More <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
              <div className="blog-widget-1 wow fadeInUp" data-wow-delay="0.7s">
                <Image
                  width={200}
                  height={200}
                  className="w-sm-auto w-100"
                  src="/img/blog/news-1.png"
                  alt="news image"
                />

                <div className="blog-content pr-20 pl-20">
                  <h4>
                    <Link href="#">What credit limit should I request?</Link>
                  </h4>
                  <p>
                    You can apply for a credit card online, over the phone, by
                    mail or in person. Applying online is the best, most...
                  </p>

                  <Link className="read-more" href="#">
                    Read More <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
              <div className="blog-widget-1 wow fadeInUp" data-wow-delay="0.9s">
                <Image
                  width={200}
                  height={200}
                  className="w-sm-auto w-100"
                  src="/img/blog/news-2.png"
                  alt="news image"
                />

                <div className="blog-content pr-20 pl-20">
                  <h4>
                    <Link href="#">Which bank account should I open</Link>
                  </h4>
                  <p>
                    You can apply for a credit card online, over the phone, by
                    mail or in person. Applying online is the best, most...
                  </p>

                  <Link className="read-more" href="#">
                    Read More <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
              <div className="blog-widget-1 wow fadeInUp" data-wow-delay="1.1s">
                <Image
                  width={200}
                  height={200}
                  className="w-sm-auto w-100"
                  src="/img/blog/news-3.png"
                  alt="news image"
                />

                <div className="blog-content pr-20 pl-20">
                  <h4>
                    <Link href="#">
                      Banking Basics: get to know your bank account
                    </Link>
                  </h4>
                  <p>
                    You can apply for a credit card online, over the phone, by
                    mail or in person. Applying online is the best, most...
                  </p>

                  <Link className="read-more" href="#">
                    Read More <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
              <div className="blog-widget-1 wow fadeInUp" data-wow-delay="1.3s">
                <Image
                  width={200}
                  height={200}
                  className="w-sm-auto w-100"
                  src="/img/blog/news-1.png"
                  alt="news image"
                />

                <div className="blog-content pr-20 pl-20">
                  <h4>
                    <Link href="#">What credit limit should I request?</Link>
                  </h4>
                  <p>
                    You can apply for a credit card online, over the phone, by
                    mail or in person. Applying online is the best, most...
                  </p>

                  <Link className="read-more" href="#">
                    Read More <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
              <div className="blog-widget-1 wow fadeInUp" data-wow-delay="1.5s">
                <Image
                  width={200}
                  height={200}
                  className="w-sm-auto w-100"
                  src="/img/blog/news-2.png"
                  alt="news image"
                />

                <div className="blog-content pr-20 pl-20">
                  <h4>
                    <Link href="#">Which bank account should I open</Link>
                  </h4>
                  <p>
                    You can apply for a credit card online, over the phone, by
                    mail or in person. Applying online is the best, most...
                  </p>

                  <Link className="read-more" href="#">
                    Read More <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
              <div className="blog-widget-1 wow fadeInUp" data-wow-delay="1.7s">
                <Image
                  width={200}
                  height={200}
                  className="w-sm-auto w-100"
                  src="/img/blog/news-3.png"
                  alt="news image"
                />

                <div className="blog-content pr-20 pl-20">
                  <h4>
                    <Link href="#">
                      Banking Basics: get to know your bank account
                    </Link>
                  </h4>
                  <p>
                    You can apply for a credit card online, over the phone, by
                    mail or in person. Applying online is the best, most...
                  </p>

                  <Link className="read-more" href="#">
                    Read More <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <footer className="footer footer-1">
        <div className="footer-top  pt-115 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-6 pr-lg-90">
                <div className="footer-widget mb-30 wow fadeInLeft">
                  <div className="flog mb-35">
                    <Link href="index.html">
                      <Image
                        width={100}
                        height={35}
                        src="/img/logo/Logo.png"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="footer-text mb-20">
                    <p>
                      Follow us on social media to find out the latest updates
                      on our progress.
                    </p>
                  </div>
                  <div className="social-icon mt-5">
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-google"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-2 col-6">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="f-widget-title">
                    <h5>product</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#"> Download</Link>
                      </li>
                      <li>
                        <Link href="#"> Payments</Link>
                      </li>
                      <li>
                        <Link href="#"> Online Banking</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-6">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="f-widget-title">
                    <h5>Company</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#"> About Us</Link>
                      </li>
                      <li>
                        <Link href="#"> Contact us</Link>
                      </li>
                      <li>
                        <Link href="#"> Roadmap</Link>
                      </li>
                      <li>
                        <Link href="#"> Blog</Link>
                      </li>
                      <li>
                        <Link href="#"> Careers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-6">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="f-widget-title">
                    <h5>Services</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#">Borrow money</Link>
                      </li>
                      <li>
                        <Link href="#">Collective loans</Link>
                      </li>
                      <li>
                        <Link href="#">Budget schedule</Link>
                      </li>
                      <li>
                        <Link href="#">Debt calculator</Link>
                      </li>
                      <li>
                        <Link href="#">Student scholarship</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright py-4">
          <div className="container-lg container-fluid">
            <div className="row align-items-center ">
              <div className="col-lg-3">
                <div
                  className="language-list position-relative"
                  style={{ width: "130px" }}
                >
                  <select
                    className="form-select border-0 shadow-none pe-4"
                    aria-label="Language select"
                    style={{
                      appearance: "none",
                      backgroundColor: "#171d24",
                      color: "#ffffff",
                      cursor: "pointer",
                      border: "none",
                      boxShadow: "none",
                      width: "100%",
                      padding: "6px 12px",
                    }}
                  >
                    <option value="English">English</option>
                    <option value="Bangla">Bangla</option>
                    <option value="French">French</option>
                    <option value="Hindi">Hindi</option>
                  </select>

                  <span className="position-absolute top-50 end-0 translate-middle-y me-2">
                    <i className="bi bi-chevron-down text-white"></i>
                  </span>
                </div>
              </div>
              <div className="col-lg-5  text-center short-text">
                <Link href="#">Terms & Conditions </Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Legal Notice</Link>
              </div>
              <div className="col-lg-4 text-center text-lg-end ">
                <div className="copyright-text short-text">
                  <p>Copyright&copy; 2021, All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MobileAppPage;
