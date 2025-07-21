import Link from 'next/link';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Errorpage = () => {
  return (
    <div>
      <header className="header">
        <div className="header-menu header-menu-2" id="sticky">
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
                      className="nav-link dropdown-toggle active"
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
        <section className="error_area bg_color pb-50 overflow-hidden">
          <div className="error_dot one"></div>
          <div className="error_dot two"></div>
          <div className="error_dot three"></div>
          <div className="error_dot four"></div>
          <div className="container">
            <div className="error_content_two text-center">
              <div className="error_img">
                <img
                  className="position-absolute error_shap"
                  src="/img/error/404_bg.png"
                  alt=""
                />
                <div className="one wow clipInDown" data-wow-delay="1s">
                  <img
                    className="img_one"
                    src="/img/error/404_two.png"
                    alt=""
                  />
                </div>
                <div className="two wow clipInDown" data-wow-delay="1.5s">
                  <img
                    className="img_two"
                    src="/img/error/404_three.png"
                    alt=""
                  />
                </div>
                <div className="three wow clipInDown" data-wow-delay="1.8s">
                  <img
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
              <a href="index.html" className="action_btn theme-btn">
                <i className="arrow_left"></i>Back to Home Page
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Errorpage;
