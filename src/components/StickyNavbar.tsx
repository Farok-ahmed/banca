'use client';

import { useTheme } from '@/contextAPi/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const StickyNavbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const menuItems = [
    {
      label: 'Home',
      href: '/',
      submenu: [
        { label: 'Smart Finance', href: '/' },
        { label: 'Loan Company', href: '/index-company' },
        { label: 'Mobile App', href: '/index-app' },
        { label: 'Simple Banca', href: '/index-simple' },
        { label: 'Loan Steps', href: '/index-loan' },
        { label: 'Finance Sass App', href: '/index-finance' },
        { label: 'Small Bank', href: '/index-small-bank' },
      ],
    },
    {
      label: 'Loan',
      href: '/loan',
      submenu: [
        { label: 'Get loan', href: '/loan' },
        {
          label: 'Loan Application',
          href: '#',
          submenu: [
            { label: 'Step 01', href: '/loan-details' },
            { label: 'Step 02', href: '/personal-details' },
            { label: 'Step 03', href: '/document-upload' },
          ],
        },
      ],
    },
    {
      label: 'Job Pages',
      href: '/career',
      submenu: [
        { label: 'Career', href: '/career' },
        { label: 'Jobs', href: '/job-post' },
        { label: 'Job Application', href: '/job-application' },
      ],
    },
    {
      label: 'Pages',
      href: '#',
      submenu: [
        { label: 'Cards', href: '/card' },
        { label: 'About Us', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
        { label: '404 Error', href: '/error' },
      ],
    },
    {
      label: 'Blog',
      href: '/blog',
      submenu: [
        { label: 'Blog Listing', href: '/blog' },
        { label: 'Blog Details', href: '/blog-details' },
      ],
    },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        scrollY > 50 && scrollY < 300
          ? 'navbar_fixed show_navbar'
          : 'hide_navbar'
      }`}
      id="sticky"
      style={{
        transition: 'top 0.3s ease-in-out',
        top: scrollY > 50 && scrollY < 300 ? 0 : '-100px',
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#fff',
      }}
    >
      <div className="container">
        <Link className="navbar-brand sticky_logo" href="/">
          <Image
            src="/img/logo/Logo-2.png"
            alt="logo"
            width={120}
            height={40}
          />
        </Link>

        {/* Hamburger Toggle Button */}
        <button
          className={`navbar-toggler ${menuOpen ? '' : 'collapsed'}`}
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{
            border: 'none',
            background: 'transparent',
            outline: 'none',
            padding: '0.25rem 0.75rem',
          }}
        >
          {!menuOpen ? (
            <div
              style={{
                width: '25px',
                height: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  height: '3px',
                  width: '100%',
                  backgroundColor: '#333',
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  height: '3px',
                  width: '100%',
                  backgroundColor: '#333',
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  height: '3px',
                  width: '100%',
                  backgroundColor: '#333',
                  borderRadius: '2px',
                }}
              />
            </div>
          ) : (
            <div
              style={{
                width: '25px',
                height: '20px',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: '9px',
                  left: '0',
                  width: '25px',
                  height: '3px',
                  backgroundColor: '#333',
                  transform: 'rotate(45deg)',
                  borderRadius: '2px',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '9px',
                  left: '0',
                  width: '25px',
                  height: '3px',
                  backgroundColor: '#333',
                  transform: 'rotate(-45deg)',
                  borderRadius: '2px',
                }}
              />
            </div>
          )}
        </button>

        {/* Menu Items */}
        <div
          className={`collapse navbar-collapse right-nav ${
            menuOpen ? 'show' : ''
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav menu ms-auto">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="nav-item dropdown submenu position-relative"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <Link
                    href={item.href}
                    className="nav-link"
                    onClick={(e) => {
                      if (item.submenu && isMobile) {
                        e.preventDefault();
                        handleDropdownToggle(item.label);
                      }
                    }}
                    style={{ flexGrow: 1 }}
                  >
                    {item.label}
                  </Link>

                  {/* Your requested icon */}
                  {item.submenu && isMobile && (
                    <i
                      className="arrow_carrot-down_alt2 mobile_dropdown_icon d-lg-none ms-1"
                      aria-hidden="true"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleDropdownToggle(item.label)}
                    />
                  )}
                </div>

                {/* Submenu */}
                {item.submenu && (
                  <ul
                    className={`dropdown-menu ${
                      openDropdown === item.label && isMobile ? 'show' : ''
                    }`}
                    style={{
                      display:
                        openDropdown === item.label || !isMobile
                          ? 'block'
                          : 'none',
                      position: isMobile ? 'static' : 'absolute',
                      backgroundColor: '#fff',
                      boxShadow: !isMobile
                        ? '0 0.5rem 1rem rgb(0 0 0 / 0.15)'
                        : 'none',
                      paddingLeft: isMobile ? '1rem' : undefined,
                      zIndex: 1050,
                    }}
                  >
                    {item.submenu.map((subItem) => (
                      <li key={subItem.label} className="nav-item">
                        <Link href={subItem.href} className="nav-link">
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <Link
            className="theme-btn theme-btn-rounded-2 theme-btn-alt"
            style={{ backgroundColor: '#0050b2', color: '#fff' }}
            href="https://themeforest.net/item/banca-banking-business-loan-bootstrap5html-website-template/32788885?s_rank=9"
            target="_blank"
            rel="noopener noreferrer"
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
  );
};

export default StickyNavbar;
