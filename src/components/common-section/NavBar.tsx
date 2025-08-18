"use client";
import { useTheme } from "@/contextAPi/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo, useState, useEffect } from "react";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";
import Logo from "@/assets/img/logo/Logo.png";
import Logo2 from "@/assets/img/logo/Logo-2.png";
import Logo3 from "@/assets/img/logo/Logo-3.png";
import classNames from "classnames";
import { SubSubItem, NavItems } from "./NavItem";
import TopHeader from "./TopHeader";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const isScrolled = useMemo(() => lastScrollTop > 5, [lastScrollTop]);
  const [isScrollDown, setIsScrollDown] = useState<boolean>();

  useEffect(() => {
    let lastScrollTopRef = lastScrollTop;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTopRef) {
        setIsScrollDown(true);
      } else if (currentScrollTop < lastScrollTopRef) {
        setIsScrollDown(false);
      } else {
        setIsScrollDown(undefined);
      }

      lastScrollTopRef = currentScrollTop;
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

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

  const isActive = (href: string): boolean => {
    return pathname === href || pathname.startsWith(href + "/");
  };
  // index company page select
  const isIndexCompany = pathname === "/index-company";
  const mobileApp = pathname === "/mobile-app";
  const loanSteps = pathname === "/loan-steps";
  const financeSass = pathname === "/finance-sass-app";
  const loan = pathname === "/loan";
  const loanDetails = pathname === "/loan-details";
  const personalDetails = pathname === "/personal-details";
  const documentUpload = pathname === "/document-upload";
  const career = pathname === "/career";
  const jobs = pathname === "/jobs";
  const jobApplication = pathname === "/job-application";
  const card = pathname === "/card";
  const aboutUs = pathname === "/about-us";
  const contactUs = pathname === "/contact-us";
  const error = pathname === "/error";
  const blogListing = pathname === "/blog-listing";
  const blogDetails = pathname === "/blog-details";

  const headerMenu3 =
    loan ||
    loanDetails ||
    personalDetails ||
    documentUpload ||
    career ||
    card ||
    contactUs ||
    blogListing ||
    blogDetails;
  return (
    <header className="header">
      <TopHeader />
      <div
        className={`header-menu ${
          isIndexCompany ||
          loanSteps ||
          financeSass ||
          jobs ||
          jobApplication ||
          aboutUs ||
          error
            ? "header-menu-2"
            : "header-menu-4"
        } 
        ${(jobs || jobApplication || aboutUs) && "bg_white"}
        ${mobileApp && "header-menu-1"}
        ${headerMenu3 && "header-menu-3"}

        ${isScrolled ? "navbar_fixed" : ""}`}
        id="sticky"
        style={{
          top: isScrollDown && lastScrollTop > 100 ? "-100px" : "0",
        }}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand sticky_logo" href="/">
              <Image
                className="main"
                src={isIndexCompany || loanSteps || error ? Logo2 : Logo}
                alt="logo"
              />
              <Image
                className="sticky"
                src={mobileApp ? Logo3 : Logo2}
                alt="logo sticky"
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
                <span className={`hamburger-cross ${menuOpen ? "" : "d_none"}`}>
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
              <ul
                className={`navbar-nav menu ${
                  financeSass ? "ms-5 me-auto" : "ms-auto"
                }`}
              >
                {NavItems.map((item, idx) => (
                  <li className="nav-item dropdown submenu" key={idx}>
                    <Link
                      href={item.href}
                      className={classNames("nav-link dropdown-toggle", {
                        active: isActive(item.href),
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
                      {item.sub.map((subItem, subIdx) => {
                        if (Array.isArray(subItem[2])) {
                          const subSubList = subItem[2] as SubSubItem[];
                          return (
                            <li
                              className="nav-item dropdown submenu"
                              key={subIdx}
                            >
                              <Link
                                href="#"
                                className="nav-link dropdown-toggle"
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
                                {subSubList.map(([href, label], innerIdx) => (
                                  <li className="nav-item" key={innerIdx}>
                                    <Link
                                      href={href}
                                      className={classNames("nav-link", {
                                        active: isActive(href),
                                      })}
                                    >
                                      {label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          );
                        } else {
                          return (
                            <li className="nav-item" key={subIdx}>
                              <Link
                                href={subItem[0]}
                                className={classNames("nav-link", {
                                  active: isActive(subItem[0]),
                                })}
                              >
                                {subItem[1]}
                              </Link>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </li>
                ))}
              </ul>

              <Link
                className={`theme-btn ${
                  isIndexCompany ? "" : "theme-btn-rounded-2 theme-btn-alt"
                }`}
                href="https://themeforest.net/item/banca-banking-business-loan-bootstrap5html-website-template/32788885?s_rank=9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Banca
              </Link>

              <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
                <label htmlFor="something" className="tab-btn tab-btns">
                  <IoMoon />
                </label>
                <label htmlFor="something" className="tab-btn">
                  <IoSunnyOutline />
                </label>
                <label
                  className={`ball`}
                  htmlFor="something"
                  style={{ left: theme === "body_dark" ? 3 : 26 }}
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
  );
};

export default NavBar;
