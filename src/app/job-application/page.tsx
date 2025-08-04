'use client';
import JobApplicationSection from '@/components/JobForm';
import { useTheme } from '@/contextAPi/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const JobApplication = () => {
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
  const isActive = (link: string): boolean => {
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

  // Define types for menu structure
  interface SubMenuItem {
    text: string;
    link: string;
    submenu?: SubMenuItem[];
  }

  // Check if any submenu item is active (for parent menu highlighting)
  const isParentActive = (submenu: SubMenuItem[]): boolean => {
    return submenu.some((item: SubMenuItem) => {
      if (isActive(item.link)) return true;
      if (item.submenu) {
        return item.submenu.some((subItem: SubMenuItem) =>
          isActive(subItem.link)
        );
      }
      return false;
    });
  };

  // Define menu items with proper typing
  interface MenuItem {
    label: string;
    href: string;
    submenu: SubMenuItem[];
  }

  const menuItems: MenuItem[] = [
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
  ];

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
                  {menuItems.map((item: MenuItem, idx: number) => (
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
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
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
                        {item.submenu?.map((sub: SubMenuItem, i: number) => (
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
                              onClick={(
                                e: React.MouseEvent<HTMLAnchorElement>
                              ) => {
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
                                  {sub.submenu.map(
                                    (deep: SubMenuItem, j: number) => (
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
                                    )
                                  )}
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
            className="breadcrumb-widget  pt-145"
            style={{ backgroundImage: `url(img/breadcrumb/bg-2.png)` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="breadcrumb-content pt-135 pb-180">
                    <h1>Officer Admin and Finance (LRS Position)</h1>
                    <div className="breadcrumb-job-info d-flex justify-content-center mt-20">
                      <div className="job-location me-3">
                        {' '}
                        <i className="icon_pin_alt"></i>NY, United States
                      </div>
                      <div className="job-catagory">
                        {' '}
                        <span>Administration</span> | Full-time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="job-application-area pt-110 pb-120 bg_white">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 order-2 order-lg-1">
                <div className="job-description-widget">
                  <div className="single-description-para">
                    <h6>Position Purpose</h6>
                    <p>
                      As a Teller at Capital you are the face of the credit
                      union. It's more than just processing financial
                      transactions. It's building lasting relationships and
                      helping others to improve their financial well-being. If a
                      philosophy of "people helping people" fits with your
                      personal philosophy, we're the place for you!{' '}
                    </p>
                  </div>
                  <div className="single-description-para">
                    <h6>Job Responsibilities</h6>
                    <ul>
                      <li>
                        Achieve individual target on daily, weekly & monthly
                        basis set by respective Department
                      </li>
                      <li>
                        Ensure smooth business operation at Agent Banking Centre
                        maintaining compliance
                      </li>
                      <li>
                        Follow up day to day activities of Agent Banking Centre
                        and being in touch with Head office regarding any
                        instruction/circular/guideline
                      </li>
                      <li>
                        Rapport build up with local potential customers to
                        promote financial literacy
                      </li>
                      <li>
                        Ensure proper service provided to each and every
                        customers as par bank policy
                      </li>
                      <li>
                        Collect and complete applications with all required
                        documents from good and prospective Agent
                      </li>
                    </ul>
                  </div>
                  <div className="single-description-para">
                    <h6>Educational Requirements</h6>
                    <ul>
                      <li>
                        Bachelor's degree in Public Relations, Journalism or
                        related field.
                      </li>
                    </ul>
                  </div>
                  <div className="single-description-para">
                    <h6>Experience Requirements</h6>
                    <ul>
                      <li>At least 1 year(s)</li>
                      <li>Freshers are also encouraged to apply.</li>
                    </ul>
                  </div>
                  <div className="single-description-para">
                    <h6>Additional Requirements</h6>
                    <ul>
                      <li>Age at most 28 years</li>
                      <li>Both males and females are allowed to apply</li>
                      <li>
                        The applicants should have experience in Banks or
                        Financial Institutions
                      </li>
                    </ul>
                  </div>
                  <div className="single-description-para pb-2">
                    <h6>Compensation & Other Benefits</h6>
                    <ul>
                      <li>Festival Bonus: 2</li>
                      <li>As per policy of the Bank</li>
                    </ul>
                  </div>

                  <div className="single-description-para border-top pt-30 ">
                    <h6>
                      Application Process<span>*</span>
                    </h6>
                    <p className="text_body_color">
                      Applications must be submitted through the mentioned link
                      on the page by clicking on Apply Button.
                    </p>
                    <ul className="mt-3 text_body_color">
                      <li>
                        All applicants must send a cover letter along with an
                        updated CV (we encourage CV no longer than four pages)
                        in English.
                      </li>
                      <li>
                        Mentioning three referees' details of your present
                        supervisor and HR along with past employment's
                        supervisor with CV.
                      </li>
                    </ul>
                  </div>

                  <div className="note-text mt-4 mb-35">
                    <p>
                      {' '}
                      <span>Note: </span> Application s sent by email will not
                      be considered. In addition, DRC doesn't charge any fee for
                      any of its recruitment process & believes in equal
                      opportunity in employment regardless.
                    </p>
                  </div>

                  <div className="d-flex justify-content-between border-top pt-40">
                    <button
                      className="theme-btn theme-btn-lg"
                      data-bs-toggle="modal"
                      data-bs-target="#applyModal"
                    >
                      apply now <i className="arrow_right"></i>{' '}
                    </button>
                    <button className="theme-btn theme-btn-primary_alt theme-btn-lg custom-btn">
                      <i className="icon_ribbon_alt t"></i> Save{' '}
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 pl-lg-55 order-1 order-lg-2">
                <div className="right-sidebar-widget sticky_sidebar_widget">
                  <div className="single-sidebar-widget mt-25 widget-border ">
                    <div className="widget-title">
                      <h5>Job Summary</h5>
                    </div>
                    <div className="widget-content pt-15 pb-25 pr-25 pl-25">
                      <ul>
                        <li>
                          <span className="name">Published on:</span>
                          <span className="value">31 Jan 2024</span>
                        </li>
                        <li>
                          <span className="name">Vacancy:</span>
                          <span className="value">Not specific</span>
                        </li>
                        <li>
                          <span className="name">Employment Status:</span>
                          <span className="value">Full-time</span>
                        </li>
                        <li>
                          <span className="name">Experience:</span>
                          <span className="value">2 to 3 year(s)</span>
                        </li>
                        <li>
                          <span className="name">Age:</span>
                          <span className="value">Age at most 28 years</span>
                        </li>
                        <li>
                          <span className="name">Job Location:</span>
                          <span className="value">Dhaka</span>
                        </li>
                        <li>
                          <span className="name">Salary:</span>
                          <span className="value">Negotiable</span>
                        </li>
                        <li>
                          <span className="name">Application Deadline:</span>
                          <span className="value">17 Feb 2024</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="modal job-application-modal fade"
          id="applyModal"
          tabIndex={-1}
          aria-labelledby="applyModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div>
                  <h4 className="job-title">
                    Officer Admin and Finance (LRS Position)
                  </h4>
                  <div className="d-flex flex-wrap">
                    <div className="job-location me-3">
                      {' '}
                      <i className="icon_pin_alt"></i>NY, United States
                    </div>
                    <div className="job-catagory">
                      {' '}
                      <span>Administration</span> | Full-time
                    </div>
                  </div>
                </div>

                <form action="#">
                  <div className="row gy-4 mt-4">
                    <div className="col-md-6">
                      <label className="label" htmlFor="modalName">
                        First Name<span>*</span>
                      </label>
                      <input
                        id="modalName"
                        className="form-control"
                        type="text"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="label" htmlFor="modallName">
                        Last Name<span>*</span>
                      </label>
                      <input
                        id="modallName"
                        className="form-control"
                        type="text"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="label" htmlFor="modalemail">
                        Email<span>*</span>
                      </label>
                      <input
                        id="modalemail"
                        className="form-control"
                        type="email"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="label" htmlFor="inputPhoneNumber">
                        Phone Number<span>*</span>
                      </label>
                      <input
                        className="form-control"
                        type="tel"
                        id="inputPhoneNumber"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="label" htmlFor="modalMsg">
                        Message to the recruiter:
                      </label>
                      <textarea
                        className="form-control"
                        id="modalMsg"
                        cols={30}
                        rows={4}
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <label className="label mb-0">Attach Your Resume</label>
                      <p className="support mb-2">
                        Files Supported : (.doc, .docx, .pdf, .rtf, .txt. Max
                        size 10MB)
                      </p>

                      <div id="dropzone" className="dropzone">
                        <div className="dz-message">
                          <Image width={50} height={50} src="/img/icon_upload.svg" alt="upload" />
                          <h4 className="dz-button">
                            Drag and Drop files here
                          </h4>
                          <p className="dz-custom-upload-text">or browse to</p>
                          <div className="theme-btn theme-btn-primary_alt mt-3">
                            Chosse File
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="theme-btn theme-btn-primary_alt"
                          data-bs-dismiss="modal"
                        >
                          {' '}
                          <i className="arrow_left"></i> back
                        </button>
                        <button
                          type="submit"
                          className="theme-btn theme-btn-primary_alt"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}
        <JobApplicationSection />
      </main>

      <footer className="footer footer-3">
        <div className="footer-top pt-lg-130 pb-lg-115 pt-105 pb-105">
          <div className="container">
            <div className="row gx-0 ">
              <div className="col-lg-4 col-sm-6 text-center text-sm-start ms-0 ">
                <div className="footer-widget mb-30">
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
                <div className="footer-widget mb-30">
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
                <div className="footer-widget mb-30">
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
                <div className="footer-widget mb-30">
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

export default JobApplication;
