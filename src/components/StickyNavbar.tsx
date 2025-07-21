'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

export default function StickyNavbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY.current) {
        setShowNavbar(false); // scroll down
      } else {
        setShowNavbar(true); // scroll up
      }
      lastScrollY.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`header-menu header-menu-2 navbar_fixed ${
        showNavbar ? 'navbar_scroll_show' : 'navbar_scroll_hide'
      }`}
      id="sticky"
      style={{ top: 0 }}
    >
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <Image
            width={95}
            height={35}
              src="/img/logo/Logo-2.png"
              // srcSet="img/logo/Logo-2@2x.png 2x"
              alt="logo"
            />
          </a>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav menu ms-auto">
              {/* Insert your full menu here exactly as in your HTML */}
              {/* ... All your <li>, <ul>, nested menus ... remain unchanged */}
              {/* Paste all the <li class="nav-item dropdown submenu"> blocks here */}
            </ul>

            <a
              className="theme-btn"
              href="https://themeforest.net/item/banca-banking-business-loan-bootstrap5html-website-template/32788885?s_rank=9"
              target="_blank"
            >
              Buy Banca
            </a>

            <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
              <label htmlFor="something" className="tab-btn tab-btns">
              <IoMoonOutline name='moon'/>
              </label>
              <label htmlFor="something" className="tab-btn">
              <IoSunnyOutline name="sunny"/>
              </label>
              <label className="ball" htmlFor="something" style={{ left: 3 }}></label>
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
  );
}
