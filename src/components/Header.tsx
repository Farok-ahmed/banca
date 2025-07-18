import Image from 'next/image';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <div>
      {/* Header  */}
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
                  {/* Home dropdown */}
                  <li className="nav-item dropdown submenu">
                    <Link
                      href="#"
                      className="nav-link dropdown-toggle active"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      Home
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
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

                  {/* Loan dropdown */}
                  <li className="nav-item dropdown submenu">
                    <Link
                      href="/loan"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Loan
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/loan" className="nav-link">
                          Get loan
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Loan Application
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/loan-details" className="nav-link">
                              Step 01
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/personal-details" className="nav-link">
                              Step 02
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/document-upload" className="nav-link">
                              Step 03
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* Job Pages */}
                  <li className="nav-item dropdown submenu">
                    <Link
                      href="/career"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Job Pages
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/career" className="nav-link">
                          Career
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/job-post" className="nav-link">
                          Jobs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/job-application" className="nav-link">
                          Job Application
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Pages dropdown */}
                  <li className="nav-item dropdown submenu">
                    <Link
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/card" className="nav-link">
                          Cards
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/about" className="nav-link">
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/contact" className="nav-link">
                          Contact Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/error" className="nav-link">
                          404 Error
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Blog dropdown */}
                  <li className="nav-item dropdown submenu">
                    <Link
                      href="/blog"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Blog
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blog" className="nav-link">
                          Blog Listing
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/blog-details" className="nav-link">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>

                <a
                  className="theme-btn theme-btn-rounded-2 theme-btn-alt"
                  href="https://themeforest.net/item/banca-banking-business-loan-bootstrap5html-website-template/32788885?s_rank=9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Banca
                </a>

                <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
                  <label htmlFor="darkMode" className="tab-btn tab-btns">
                    <MoonIcon className="w-6 h-6 text-gray-700 dark:text-yellow-400" />
                  </label>
                  <label htmlFor="darkMode" className="tab-btn">
                    <SunIcon className="w-6 h-6 text-yellow-500 dark:text-gray-200" />
                  </label>
                  <label className="ball" htmlFor="darkMode"></label>
                  <input
                    type="checkbox"
                    name="darkMode"
                    id="darkMode"
                    className="dark_mode_switcher hidden"
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
