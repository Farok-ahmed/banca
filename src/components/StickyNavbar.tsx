'use client';

import { useTheme } from '@/contextAPi/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { menuItems, logoConfig, externalButton } from '@/data/menuItems';

const StickyNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const lastScrollY = useRef<number>(0);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href) && href !== '/';
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 100 && currentScroll < lastScrollY.current) {
        setShowNavbar(true);
      } else if (currentScroll > lastScrollY.current) {
        setShowNavbar(false);
      } else if (currentScroll <= 100) {
        setShowNavbar(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const textColor = theme === 'body_dark' ? 'text-light' : 'text-dark';

  return (
    <nav
      className={`navbar navbar-expand-lg header-menu header-menu-3 navbar_fixed 
      ${showNavbar ? 'show_navbar' : 'hide_navbar'} 
      ${theme === 'body_dark' ? 'dark-theme-navbar' : 'light-theme-navbar'}`}
      id="sticky"
      style={{
        top: showNavbar ? '0' : '-100px',
        transition: 'top 0.4s ease-in-out',
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
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

        <button
          className={`navbar-toggler ${menuOpen ? '' : 'collapsed'}`}
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="menu_toggle">
            <span className="hamburger"><span></span><span></span><span></span></span>
            <span className="hamburger-cross"><span></span><span></span></span>
          </span>
        </button>

        <div className={`collapse navbar-collapse right-nav ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav menu ms-auto">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={`nav-item dropdown submenu ${isActive(item.href) ? 'active' : ''}`}
              >
                <Link
                  href={item.href}
                  className={`nav-link dropdown-toggle ${isActive(item.href) ? 'active' : ''} ${textColor}`}
                  onClick={(e) => {
                    if (item.submenu && isMobile) {
                      e.preventDefault();
                      handleDropdownToggle(item.label);
                    }
                  }}
                  onMouseEnter={() => {
                    if (!isMobile && item.submenu) {
                      setOpenDropdown(item.label);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isMobile) setOpenDropdown(null);
                  }}
                >
                  {item.label}
                </Link>

                <i
                  className="arrow_carrot-down_alt2 mobile_dropdown_icon d-lg-none"
                  onClick={() => handleDropdownToggle(item.label)}
                  style={{ cursor: 'pointer' }}
                ></i>

                {item.submenu && (
                  <ul
                    className={`dropdown-menu ${openDropdown === item.label ? 'show' : ''}`}
                    style={{
                      display:
                        openDropdown === item.label || !isMobile ? 'block' : 'none',
                    }}
                  >
                    {item.submenu.map((subItem, subIdx) => {
                      const hasNested = subItem.submenu && subItem.submenu.length > 0;
                      const nestedKey = `${item.label}-nested-${subIdx}`;

                      if (hasNested) {
                        return (
                          <li className="nav-item dropdown submenu" key={subIdx}>
                            <Link
                              href="#"
                              className={`nav-link ${textColor}`}
                              onClick={(e) => {
                                e.preventDefault();
                                if (isMobile) handleDropdownToggle(nestedKey);
                              }}
                            >
                              {subItem.label}
                            </Link>
                            <ul
                              className={`dropdown-menu ${openDropdown === nestedKey ? 'show' : ''}`}
                              style={{
                                display:
                                  openDropdown === nestedKey || !isMobile ? 'block' : 'none',
                              }}
                            >
                              {subItem.submenu.map((nestedItem, nestedIdx) => (
                                <li className="nav-item" key={nestedIdx}>
                                  <Link
                                    href={nestedItem.href}
                                    className={`nav-link ${isActive(nestedItem.href) ? 'active' : ''} ${textColor}`}
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
                          <Link
                            href={subItem.href}
                            className={`nav-link ${isActive(subItem.href) ? 'active' : ''} ${textColor}`}
                          >
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

          <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
            <label htmlFor="something" className="tab-btn tab-btns">
              <IoMoonOutline />
            </label>
            <label htmlFor="something" className="tab-btn">
              <IoSunnyOutline />
            </label>
            <label
              className="ball"
              htmlFor="something"
              style={{
                left: theme === 'body_dark' ? 3 : 26,
              }}
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
