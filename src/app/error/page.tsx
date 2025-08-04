'use client';
import { useTheme } from '@/contextAPi/ThemeContext';
import { NavigationItem } from '@/types/NavigationItem';
import { NestedSubmenuItem } from '@/types/NestedSubmenuItem';
import { SubmenuItem } from '@/types/SubmenuItem';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Errorpage = () => {
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

  // Function to check if a route is active
  const isActiveRoute = (href: string, submenu?: SubmenuItem[]): boolean => {
    // Exact match for main route
    if (pathname === href) {
      return true;
    }

    // Check if any submenu item matches current path
    if (submenu) {
      return submenu.some((item: SubmenuItem) => {
        if (item.submenu) {
          // Check nested submenu items
          return item.submenu.some(
            (subItem: NestedSubmenuItem) => pathname === subItem.link
          );
        }
        return pathname === item.link;
      });
    }

    return false;
  };

  // Function to check if a submenu item is active
  const isActiveSubmenuItem = (link: string): boolean => {
    return pathname === link;
  };

  // Function to check if parent submenu has active child
  const hasActiveChild = (submenu?: NestedSubmenuItem[]): boolean => {
    if (!submenu) return false;
    return submenu.some((item: NestedSubmenuItem) => pathname === item.link);
  };

  const navigationItems: NavigationItem[] = [
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
        <div className="header-menu header-menu-2" id="sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand" href="/">
                <Image
                  width={110}
                  height={35}
                  src="/img/logo/Logo-2.png"
                  alt="logo"
                  priority
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
                  {navigationItems.map((item: NavigationItem, idx: number) => (
                    <li key={idx} className="nav-item dropdown submenu">
                      <Link
                        href={item.href}
                        className={`nav-link dropdown-toggle ${
                          isActiveRoute(item.href, item.submenu) ? 'active' : ''
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
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e: React.KeyboardEvent) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            handleDropdownToggle(item.label);
                          }
                        }}
                      ></i>

                      <ul
                        className={`dropdown-menu ${
                          openDropdown === item.label ? 'show' : ''
                        }`}
                      >
                        {item.submenu?.map((sub: SubmenuItem, i: number) => (
                          <li
                            key={i}
                            className={`nav-item ${
                              sub.submenu ? 'dropdown submenu' : ''
                            }`}
                          >
                            <Link
                              href={sub.link}
                              className={`nav-link ${
                                isActiveSubmenuItem(sub.link) ||
                                hasActiveChild(sub.submenu)
                                  ? 'active'
                                  : ''
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
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e: React.KeyboardEvent) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                      handleDropdownToggle(
                                        `${item.label}-${sub.text}`
                                      );
                                    }
                                  }}
                                ></i>
                                <ul
                                  className={`dropdown-menu ${
                                    openDropdown === `${item.label}-${sub.text}`
                                      ? 'show'
                                      : ''
                                  }`}
                                >
                                  {sub.submenu.map(
                                    (deep: NestedSubmenuItem, j: number) => (
                                      <li key={j} className="nav-item">
                                        <Link
                                          href={deep.link}
                                          className={`nav-link ${
                                            isActiveSubmenuItem(deep.link)
                                              ? 'active'
                                              : ''
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
                  rel="noopener noreferrer"
                >
                  Buy Banca
                </Link>

                {/* Dark Mode Toggle */}
                <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
                  <label
                    htmlFor="darkModeToggleV4"
                    className="tab-btn tab-btns"
                  >
                    <IoMoonOutline />
                  </label>
                  <label htmlFor="darkModeToggleV4" className="tab-btn">
                    <IoSunnyOutline />
                  </label>
                  <label
                    className="ball"
                    style={{
                      left: theme === 'body_dark' ? 3 : 26,
                    }}
                    htmlFor="darkModeToggleV4"
                  ></label>
                  <input
                    type="checkbox"
                    name="darkModeToggleV4"
                    id="darkModeToggleV4"
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
