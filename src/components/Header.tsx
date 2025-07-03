import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <div id="preloader">
        <div id="ctn-preloader" className="ctn-preloader">
          <div className="round_spinner">
            <div className="spinner"></div>
            <div className="text">
              <Image
                width={200}
                height={200}
                src="/img/logo/Logo-2.png"
                alt="logo"
              />
            </div>
          </div>
          <h2 className="head">Did You Know?</h2>
          <p></p>
        </div>
      </div>

      {/* Header  */}
      <header className="header">
        <div className="header-menu header-menu-4" id="sticky">
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <Link className="navbar-brand sticky_logo" href="index.html">
                <Image
                  width={200}
                  height={200}
                  className="sticky"
                  src="/img/logo/Logo-2.png"
                  srcSet="/img/logo/Logo-2@2x.png 2x"
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
                className="collapse navbar-collapse right-nav"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav menu ms-auto">
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
                        <Link href="index.html" className="nav-link active">
                          Smart Finance
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="index-company.html" className="nav-link ">
                          Loan Company
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="index-app.html" className="nav-link">
                          Mobile App
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="index-simple.html" className="nav-link ">
                          Simple Banca
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="index-loan.html" className="nav-link">
                          Loan Steps
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="index-finance.html" className="nav-link">
                          Finance Sass App
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="index-small-bank.html" className="nav-link">
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
                  className="theme-btn theme-btn-rounded-2 theme-btn-alt"
                  href="https://themeforest.net/item/banca-banking-business-loan-bootstrap5html-website-template/32788885?s_rank=9"
                  target="_blank"
                >
                  Buy Banca
                </Link>
                <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
                  <label htmlFor="something" className="tab-btn tab-btns">
                    {/* <ion-icon name="moon"></ion-icon> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                      name="moon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  </label>
                  <label htmlFor="something" className="tab-btn">
                    {/* <ion-icon name="sunny"></ion-icon> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                      name="sunny"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    </svg>
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
    </div>
  );
};

export default Header;
