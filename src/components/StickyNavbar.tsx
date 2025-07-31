'use client';

import { useTheme } from '@/contextAPi/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

// Import menu data
import { menuItems, logoConfig, externalButton } from '@/data/menuItems';

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
            src={logoConfig.sticky}
            alt={logoConfig.alt}
            width={logoConfig.width}
            height={logoConfig.height}
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
                style={{ marginRight: '20px' }} 
              >
                <Link
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => {
                    if (item.submenu && (isMobile || item.submenu.length > 0)) {
                      // Only prevent default on mobile
                      if (isMobile) {
                        e.preventDefault();
                        handleDropdownToggle(item.label);
                      }
                    }
                  }}
                  onMouseEnter={() => {
                    // Show dropdown on hover for desktop
                    if (!isMobile && item.submenu && item.submenu.length > 0) {
                      setOpenDropdown(item.label);
                    }
                  }}
                  onMouseLeave={() => {
                    // Hide dropdown when mouse leaves for desktop
                    if (!isMobile) {
                      setTimeout(() => setOpenDropdown(null), 100);
                    }
                  }}
                >
                  {item.label}
                </Link>

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
                    onMouseEnter={() => {
                      // Keep dropdown open when hovering over it
                      if (!isMobile) {
                        setOpenDropdown(item.label);
                      }
                    }}
                    onMouseLeave={() => {
                      // Hide dropdown when mouse leaves submenu
                      if (!isMobile) {
                        setOpenDropdown(null);
                      }
                    }}
                  >
                    {item.submenu.map((subItem, subIdx) => {
                      const hasNestedSubmenu =
                        subItem.submenu && subItem.submenu.length > 0;
                      const nestedKey = `${item.label}-nested-${subIdx}`;

                      if (hasNestedSubmenu) {
                        return (
                          <li
                            className="nav-item dropdown submenu"
                            key={subIdx}
                          >
                            <Link
                              href="#"
                              className="nav-link"
                              onClick={(e) => {
                                e.preventDefault();
                                if (isMobile) {
                                  handleDropdownToggle(nestedKey);
                                }
                              }}
                              onMouseEnter={() => {
                                if (!isMobile) {
                                  setOpenDropdown(nestedKey);
                                }
                              }}
                            >
                              {subItem.label}
                            </Link>
                            <ul
                              className={`dropdown-menu ${
                                openDropdown === nestedKey ? 'show' : ''
                              }`}
                              style={{
                                display:
                                  openDropdown === nestedKey || !isMobile
                                    ? 'block'
                                    : 'none',
                                position: isMobile ? 'static' : 'absolute',
                                backgroundColor: '#fff',
                                boxShadow: !isMobile
                                  ? '0 0.5rem 1rem rgb(0 0 0 / 0.15)'
                                  : 'none',
                                paddingLeft: isMobile ? '1rem' : undefined,
                                zIndex: 1051,
                              }}
                              onMouseEnter={() => {
                                if (!isMobile) {
                                  setOpenDropdown(nestedKey);
                                }
                              }}
                              onMouseLeave={() => {
                                if (!isMobile) {
                                  setOpenDropdown(null);
                                }
                              }}
                            >
                              {subItem.submenu.map((nestedItem, nestedIdx) => (
                                <li className="nav-item" key={nestedIdx}>
                                  <Link
                                    href={nestedItem.href}
                                    className="nav-link"
                                  >
                                    {nestedItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        );
                      }

                      return (
                        <li key={subIdx} className="nav-item">
                          <Link href={subItem.href} className="nav-link">
                            {subItem.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <Link
            className={externalButton.className}
            style={externalButton.style}
            href={externalButton.href}
            target={externalButton.target}
            rel={externalButton.rel}
          >
            {externalButton.text}
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
