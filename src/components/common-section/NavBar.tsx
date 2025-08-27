"use client";
import { useTheme } from "@/contextAPi/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useCallback } from "react";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";
import Logo from "@/assets/img/logo/Logo.png";
import Logo2 from "@/assets/img/logo/Logo-2.png";
import Logo3 from "@/assets/img/logo/Logo-3.png";
import classNames from "classnames";
import { type SubmenuItem, navigationItems } from "./NavItem";
import TopHeader from "./TopHeader";
import useScrollBehavior from "@/hooks/useScrollBehavior";
import useRouteHelpers from "@/hooks/useRouteHelpers";
import useActiveRoute from "@/hooks/useActiveRoute";

const HIDE_NAVBAR_THRESHOLD = 100;
const MOBILE_BREAKPOINT = 992;

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  // Custom hooks
  const { isScrolled, isScrollDown, lastScrollTop } = useScrollBehavior();
  const routeHelpers = useRouteHelpers(pathname);
  const isActiveRoute = useActiveRoute(pathname);

  // Event handlers
  const handleMenuToggle = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleDropdownToggle = useCallback((label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }, []);

  // Computed values
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT;

  // Logo selection logic
  const getMainLogo = () => {
    if (routeHelpers.isLogo2Route) return Logo2;
    return Logo;
  };

  const getStickyLogo = () => {
    if (routeHelpers.isLogo3Route) return Logo3;
    return Logo2;
  };

  // Header class logic
  const getHeaderMenuClass = () => {
    if (routeHelpers.isHeaderMenu2) return "header-menu-2";
    return "header-menu-4";
  };

  const getAdditionalClasses = () => {
    const classes = [];

    if (routeHelpers.hasBgWhite) classes.push("bg_white");
    if (routeHelpers.isMobileApp) classes.push("header-menu-1");
    if (routeHelpers.isHeaderMenu3) classes.push("header-menu-3");
    if (isScrolled) classes.push("navbar_fixed");

    return classes.join(" ");
  };

  return (
    <header className="header">
      <TopHeader />
      <div
        className={`header-menu ${getHeaderMenuClass()} ${getAdditionalClasses()}`}
        id="sticky"
        style={{
          top:
            isScrollDown && lastScrollTop > HIDE_NAVBAR_THRESHOLD
              ? "-100px"
              : "0",
        }}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand sticky_logo" href="/">
              <Image className="main" src={getMainLogo()} alt="logo" />
              <Image
                className="sticky"
                src={getStickyLogo()}
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
                  routeHelpers.isFinanceSass ? "ms-5 me-auto" : "ms-auto"
                }`}
              >
                {navigationItems.map((item, idx: number) => (
                  <NavigationItem
                    key={idx}
                    item={item}
                    isActive={isActiveRoute(item.href, item.submenu)}
                    openDropdown={openDropdown}
                    isMobile={isMobile}
                    pathname={pathname}
                    onDropdownToggle={handleDropdownToggle}
                  />
                ))}
              </ul>

              <PurchaseButton isIndexCompany={routeHelpers.isIndexCompany} isJobs={routeHelpers.jobs} />
              <ThemeToggle theme={theme} onToggleTheme={toggleTheme} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

// Extracted components for better organization
interface NavigationItemProps {
  item: { label: string; href: string; submenu?: SubmenuItem[] };
  isActive: boolean;
  openDropdown: string | null;
  isMobile: boolean;
  pathname: string;
  onDropdownToggle: (label: string) => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isActive,
  openDropdown,
  isMobile,
  pathname,
  onDropdownToggle,
}) => (
  <li className="nav-item dropdown submenu">
    <Link
      href={item.href}
      className={`nav-link dropdown-toggle ${isActive ? "active" : ""}`}
      role="button"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded={openDropdown === item.label}
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isMobile) {
          e.preventDefault();
          onDropdownToggle(item.label);
        }
      }}
    >
      {item.label}
    </Link>

    <i
      className="arrow_carrot-down_alt2 mobile_dropdown_icon d-lg-none"
      aria-hidden="true"
      onClick={() => onDropdownToggle(item.label)}
      style={{ cursor: "pointer" }}
    />

    <ul
      className={`dropdown-menu ${openDropdown === item.label ? "show" : ""}`}
    >
      {item.submenu?.map((sub: SubmenuItem, i: number) => (
        <SubmenuItem
          key={i}
          sub={sub}
          parentLabel={item.label}
          openDropdown={openDropdown}
          isMobile={isMobile}
          pathname={pathname}
          onDropdownToggle={onDropdownToggle}
        />
      ))}
    </ul>
  </li>
);

interface SubmenuItemProps {
  sub: SubmenuItem;
  parentLabel: string;
  openDropdown: string | null;
  isMobile: boolean;
  pathname: string;
  onDropdownToggle: (label: string) => void;
}

const SubmenuItem: React.FC<SubmenuItemProps> = ({
  sub,
  parentLabel,
  openDropdown,
  isMobile,
  pathname,
  onDropdownToggle,
}) => {
  const dropdownKey = `${parentLabel}-${sub.text}`;

  return (
    <li className={`nav-item ${sub.submenu ? "dropdown submenu" : ""}`}>
      <Link
        href={sub.link}
        className={`nav-link ${pathname === sub.link ? "active" : ""}`}
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          if (isMobile && sub.submenu) {
            e.preventDefault();
            onDropdownToggle(dropdownKey);
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
            onClick={() => onDropdownToggle(dropdownKey)}
            style={{ cursor: "pointer" }}
          />
          <ul
            className={`dropdown-menu ${
              openDropdown === dropdownKey ? "show" : ""
            }`}
          >
            {sub.submenu.map((deep: SubmenuItem, j: number) => (
              <li key={j} className="nav-item">
                <Link
                  href={deep.link}
                  className={`nav-link ${
                    pathname === deep.link ? "active" : ""
                  }`}
                >
                  {deep.text}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
};

interface PurchaseButtonProps {
  isIndexCompany: boolean;
  isJobs: boolean;
}

const PurchaseButton: React.FC<PurchaseButtonProps> = ({ isIndexCompany,isJobs }) => (
  <Link
    className={`theme-btn ${
      (isIndexCompany || isJobs) ? "" : "theme-btn-rounded-2 theme-btn-alt"
    }`}
    href="https://themeforest.net/item/banca-banking-business-loan-bootstrap5html-website-template/32788885?s_rank=9"
    target="_blank"
    rel="noopener noreferrer"
  >
    Buy Banca
  </Link>
);

interface ThemeToggleProps {
  theme: string;
  onToggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggleTheme }) => (
  <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
    <label htmlFor="something" className="tab-btn tab-btns">
      <IoMoon />
    </label>
    <label htmlFor="something" className="tab-btn">
      <IoSunnyOutline />
    </label>
    <label
      className="ball"
      htmlFor="something"
      style={{ left: theme === "body_dark" ? 3 : 26 }}
    />
    <input
      type="checkbox"
      name="something"
      id="something"
      className="dark_mode_switcher"
      checked={theme === "body_dark"}
      onChange={onToggleTheme}
    />
  </div>
);

export default NavBar;
