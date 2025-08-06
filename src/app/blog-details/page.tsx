'use client';
import { useTheme } from '@/contextAPi/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

type SubmenuItem = {
  text: string;
  link: string;
  submenu?: SubmenuItem[];
};

type MenuItem = {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
};

const BlogDetails = () => {
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

  const isActive = (link: string): boolean => {
    const normalize = (path: string) =>
      path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
    return normalize(pathname).startsWith(normalize(link));
  };

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
        <div className="header-top py-2 bg_white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="header-info-left">
                  <div className="language-list position-relative w-auto">
                    <select className="form-select border-0 shadow-none cursor-pointer">
                      <option defaultValue="selected">English</option>
                      <option value="Bangla">Bangla</option>
                      <option value="French">French</option>
                      <option value="Hindi">Hindi</option>
                    </select>
                    <span className="position-absolute top-50 end-0 translate-middle-y me-2">
                      <i className="bi bi-chevron-down ms-2 text-muted pointer-events-none"></i>
                    </span>
                  </div>
                  <div className="timestamp ms-4">
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
                        src="/img/phone-outline.png"
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

        <div className="header-menu header-menu-3" id="sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand sticky_logo" href="/">
                <Image
                  width={110}
                  height={35}
                  className="main"
                  src="/img/logo/Logo.png"
                  alt="logo"
                />
                <Image
                  width={110}
                  height={35}
                  className="sticky"
                  src="/img/logo/Logo-2.png"
                  alt="logo"
                />
              </Link>

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
                  {menuItems.map((item, idx) => (
                    <li
                      key={idx}
                      className={`nav-item dropdown submenu ${
                        isActive(item.href) ? 'active' : ''
                      }`}
                    >
                      <Link
                        href={item.href}
                        className={`nav-link dropdown-toggle ${
                          isActive(item.href) ? 'active' : ''
                        }`}
                        role="button"
                        onClick={(e) => {
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
                        onClick={() => handleDropdownToggle(item.label)}
                        style={{ cursor: 'pointer' }}
                      ></i>

                      <ul
                        className={`dropdown-menu ${
                          openDropdown === item.label ? 'show' : ''
                        }`}
                      >
                        {item.submenu?.map((sub, i) => (
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
                              onClick={(e) => {
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
                                  {sub.submenu.map((deep, j) => (
                                    <li key={j} className="nav-item">
                                      <Link
                                        href={deep.link}
                                        className={`nav-link ${
                                          isActive(deep.link) ? 'active' : ''
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
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>

                <Link
                  className="theme-btn theme-btn-outlined_alt"
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
                    className="ball"
                    style={{ left: theme === 'body_dark' ? 3 : 26 }}
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
        <section className="breadcrumb-area" id="banner_animation2">
          <div
            className="breadcrumb-widget breadcrumb-widget-2  pt-200 pb-145"
            style={{ backgroundImage: `url(img/breadcrumb/bg-3.jpg)` }}
          >
            <div className="shapes">
              <div
                className="one-shape shape-3"
                data-parallax='{"x": -100, "y": 0, "rotateZ":0}'
              >
                <Image
                  width={700}
                  height={400}
                  src="/img/breadcrumb/Polygon-3.png"
                  alt="shape"
                />
              </div>
              <div
                className="one-shape shape-4"
                data-parallax='{"x": -200, "y": 0, "rotateZ":0}'
              >
                <Image
                  width={1000}
                  height={500}
                  src="/img/breadcrumb/Polygon-4.png"
                  alt="shape"
                />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="breadcrumb-content pt-50">
                    <h1>How To Save Enough Money To Buy A Home</h1>
                    <div className="post-info mt-5">
                      <div className="autor mr-20">
                        <Image
                          width={20}
                          height={20}
                          src="/img/blog/user-profile.png"
                          alt="icon"
                        />
                        <span>Zain Siphron</span>
                      </div>
                      <div className="date">
                        <Image
                          width={20}
                          height={20}
                          src="/img/blog/calendar-outline.png"
                          alt="icon"
                        />
                        <span>March 18, 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-120 pb-120 bg_disable">
          <div className="container">
            <div className="row gy-lg-0 gy-4">
              <div className="col-lg-1 position-relative">
                <div className="blog-share-widget d-flex d-lg-block align-items-center">
                  <p>Share Now</p>
                  <div className="social-link">
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="post-details-widget pb-70 border-bottom position-relative">
                  <Image
                    width={200}
                    height={400}
                    className="post-img w-100"
                    src="/img/blog/blog-details-img.jpg"
                    alt="post image"
                  />

                  <p className="post-text mt-35">
                    Tomfoolery crikey bits and bobs brilliant bamboozled down
                    the pub amongst brolly hanky panky, cack bonnet arse over
                    tit burke bugger all mate bodge fanny around butty, Richard
                    spiffing a load of old tosh porkies hunky-dory ruddy dropped
                    a clanger. Plastered it’s all gone to pot I brilliant young
                    delinquent excuse my French
                  </p>
                  <p className="post-text mb-0">
                    Bugger all mate chinwag skive off bender cack chap baking
                    cakes brown bread bodge wind up, amongst mush David lurgy
                    burke blow off bits and bobs faff about dropped a clanger,
                    such a fibber so I said spiffing codswallop bite your arm
                    off my lady bleeding tosser.
                  </p>

                  <ul className="feature-list">
                    <li>Shop configurations</li>
                    <li>Installing Sylius ecommerce shop</li>
                    <li>Check system requirements</li>
                    <li>Setting up the database</li>
                    <li>Loading sample data for the environment</li>
                    <li>Assets installation</li>
                  </ul>
                  <blockquote className="wow fadeInUp">
                    <p>
                      He legged it that blatant brown bread some dodgy chav
                      super a blinding shot my lady lavatory cup of char cor
                      blimey guvnor get stuffed mate you mug cobblers off his
                      nut pukka
                    </p>
                    <div className="author">
                      <Image
                        width={50}
                        height={40}
                        className="img-fluid rounded-circle"
                        src="/img/blog/quote-author.png"
                        alt=""
                      />
                      <div>
                        <h6>Jesus Requena </h6>
                        <span>Support Engineer, Aliexpress</span>
                      </div>
                    </div>
                  </blockquote>
                  <Image
                    width={200}
                    height={400}
                    className="post-img w-100"
                    src="/img/blog/blog-details-img-2.jpg"
                    alt="post img"
                  />
                  <p className="post-text mt-40 pb-2">
                    He legged it that blatant brown bread some dodgy chav super
                    a blinding shot my lady lavatory cup of char cor blimey
                    guvnor get stuffed mate you mug cobblers off his nut pukka,
                    give us a bell ummm I’m telling burke A bit of how’s your
                    father starkers daft hanky panky bog-standard golly gosh
                    William a load of old tosh brolly Queen’s English bits and
                    bobs bugger, grub geeza cracking goal cheesed off bog baking
                    cakes James Bond up the duff mufty morish do one wellies
                    zonked I. Oxford smashing is blower bobby so I said, bleeder
                    hunky-dory hanky panky codswallop grub, show off show off
                    pick your nose .
                  </p>

                  <h2>Install Sylius via SSH</h2>
                  <p className="post-text mt-20">
                    Nancy boy vagabond A bit of how’s your father starkers
                    baking cakes boot dropped a clanger my lady bender blow off
                    bugger all mate, jolly good brolly posh ummm I’m telling get
                    stuffed mate up the duff haggle lost the plot off his nut
                    wind up loo, I don’t want no agro.
                  </p>
                  <div className="tag-widget mt-35">
                    <h6>Tags :</h6>
                    <Link href="#">business</Link>
                    <Link href="#">web design</Link>
                    <Link href="#">software</Link>
                  </div>
                </div>
                <div className="author-media-widget mt-90 mb-90">
                  <div className="author-img">
                    <Image
                      width={50}
                      height={50}
                      className="rounded-circle"
                      src="/img/blog/author-1.png"
                      alt="author"
                    />
                  </div>
                  <div className="author-info">
                    <h6>Ahmad Bator</h6>
                    <p>
                      Loo tomfoolery jolly good bloke chancer chimney pot nice
                      one a, he nicked it mufty Oxford say wind up bits and bobs
                      cheeky bugger, amongst cack bugger Eaton William skive
                      off.!
                    </p>
                  </div>
                </div>
                <div className="related-post-widget pb-90">
                  <h4 className="blog-widget-title mb-45">Related Post</h4>
                  <div className="row gy-md-0 gy-4">
                    <div className="col-md-6">
                      <div
                        className="blog-widget-2 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="blog-img">
                          <Image
                            width={200}
                            height={200}
                            src="/img/blog/blog-9.png"
                            alt="blog-img"
                          />
                          <div className="catagory bg_primary">buisiness</div>
                        </div>
                        <div className="blog-content">
                          <h5>
                            <Link href="#">
                              Why Set Impossible Goals for 2021?
                            </Link>
                          </h5>
                          <p>
                            Cup of char brilliant horse play bro bread sloshed
                            lavatory only...
                          </p>
                          <div className="post-info">
                            <div className="author">
                              <Image
                                width={20}
                                height={20}
                                src="/img/blog/user-profile.svg"
                                alt="user profile"
                              />
                              <span>Zain Siphron</span>
                            </div>
                            <div className="post-date">
                              <Image
                                width={20}
                                height={20}
                                src="/img/blog/calendar-outline.svg"
                                alt="calendar"
                              />
                              <span>March 18, 2021</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="blog-widget-2 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="blog-img">
                          <Image
                            width={200}
                            height={200}
                            src="/img/blog/blog-7.png"
                            alt="blog-img"
                          />
                          <div className="catagory bg_primary">buisiness</div>
                        </div>
                        <div className="blog-content">
                          <h5>
                            <a href="#">
                              How our revamped API can help your finances
                            </a>
                          </h5>
                          <p>
                            Cup of char brilliant horse play bro bread sloshed
                            lavatory only...
                          </p>
                          <div className="post-info">
                            <div className="author">
                              <Image
                                width={20}
                                height={20}
                                src="/img/blog/user-profile.svg"
                                alt="user profile"
                              />
                              <span>Zain Siphron</span>
                            </div>
                            <div className="post-date">
                              <Image
                                width={20}
                                height={20}
                                src="/img/blog/calendar-outline.svg"
                                alt="calendar"
                              />
                              <span>March 18, 2021</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog-comment-widget pb-90">
                  <h4 className="blog-widget-title">3 Comments</h4>

                  <div className="comment-author">
                    <ul>
                      <li>
                        <div className="comments-box">
                          <div className="comments-avatar">
                            <Image
                              width={50}
                              height={50}
                              className="rounded-circle"
                              src="/img/blog/comment-1.png"
                              alt="img"
                            />
                          </div>
                          <div className="comments-text">
                            <div className="avatar-name">
                              <h5>Karon Balina</h5>
                              <div className="post-date">
                                <Image
                                  width={20}
                                  height={20}
                                  src="/img/blog/calendar-outline.svg"
                                  alt=""
                                />
                                <span>March 18, 2021</span>
                              </div>
                              <a className="reply" href="#">
                                Reply <i className="arrow_right"></i>
                              </a>
                            </div>
                            <p>
                              Wouldn’t it be better practice to use
                              get_the_title(..) in this case? directly accessing
                              the post object’s data member would bypass
                              applying filters and enforcing protected and
                              private settings, unless that’s explicitly
                              desired.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="children">
                        <div className="comments-box">
                          <div className="comments-avatar">
                            <Image
                              width={50}
                              height={50}
                              className="rounded-circle"
                              src="/img/blog/comment-2.png"
                              alt="img"
                            />
                          </div>
                          <div className="comments-text">
                            <div className="avatar-name">
                              <h5>Julias Roy</h5>
                              <div className="post-date">
                                <Image
                                  width={20}
                                  height={20}
                                  src="/img/blog/calendar-outline.svg"
                                  alt=""
                                />
                                <span>March 18, 2021</span>
                              </div>
                              <a className="reply" href="#">
                                Reply <i className="arrow_right"></i>
                              </a>
                            </div>
                            <p>
                              Thenks Demo User for Wouldn’t it be better
                              practice to use get_the_title.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="comments-box">
                          <div className="comments-avatar">
                            <Image
                              width={50}
                              height={50}
                              className="rounded-circle"
                              src="/img/blog/comment-3.png"
                              alt="img"
                            />
                          </div>
                          <div className="comments-text">
                            <div className="avatar-name">
                              <h5>Arista Williamson</h5>
                              <div className="post-date">
                                <Image
                                  width={20}
                                  height={20}
                                  src="/img/blog/calendar-outline.svg"
                                  alt=""
                                />
                                <span>March 18, 2021</span>
                              </div>
                              <a className="reply" href="#">
                                Reply <i className="arrow_right"></i>
                              </a>
                            </div>
                            <p>
                              Wouldn’t it be better practice to use
                              get_the_title(..) in this case? directly accessing
                              the post object’s data member would bypass
                              applying filters and enforcing protected and
                              private settings, unless that’s explicitly
                              desired.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="blog-leave-reply">
                  <h4 className="blog-widget-title mb-10">Leave a Reply </h4>
                  <p className="pt-2">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>

                  <form action="#">
                    <div className="row gy-lg-0 gy-4 mt-5">
                      <div className="col-md-6">
                        <div className="floating-input">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Full name"
                            id="f-name"
                          />
                          <label htmlFor="f-name">Full name*</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="floating-input">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="email"
                            id="email-address"
                          />
                          <label htmlFor="email-address">email*</label>
                        </div>
                      </div>
                      <div className="col-12 mt-lg-30">
                        <div className="floating-input">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="Website (Optional)"
                            id="websiteInfo"
                          />
                          <label htmlFor="websiteInfo">
                            Website (Optional)
                          </label>
                        </div>
                      </div>
                      <div className="col-12 mt-lg-30">
                        <div className="floating-input">
                          <textarea
                            className="form-control"
                            placeholder="Comment type..."
                            cols={30}
                            rows={5}
                            id="commentInfo"
                          ></textarea>
                          <label htmlFor="commentInfo">Comment type...</label>
                        </div>
                      </div>
                      <div className="col-12 mt-lg-30">
                        <input type="checkbox" id="checkRadio" />
                        <label className="check-label" htmlFor="checkRadio">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                      <div className="col-12">
                        <button className="theme-btn mt-35" type="submit">
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-4 ps-xl-5">
                <div className="blog-sidebar-widget ps-lg-2">
                  <div className="widget-subscribe">
                    <h4 className="widget-title mb-15">
                      Subscribe to our blog
                    </h4>
                    <p>Get the latest posts in your email</p>

                    <form action="#" className="mt-15">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter your email"
                      />
                      <button className="theme-btn w-100 mt-30" type="submit">
                        Subscribe
                      </button>
                    </form>
                  </div>

                  <div className="widget-social mt-40">
                    <div className="row text-center gx-3 gy-3 gy-md-0">
                      <div className="col-md-4">
                        <Link href="#">
                          <Image
                            width={30}
                            height={30}
                            src="/img/social/facebook-logo.svg"
                            alt="faceebook"
                          />
                          <h6>815.5K</h6>
                          <span>Fans</span>
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link href="#">
                          <Image
                            width={30}
                            height={30}
                            src="/img/social/twitter.svg"
                            alt="twitter"
                          />
                          <h6>107.2K</h6>
                          <span>Followers</span>
                        </Link>
                      </div>
                      <div className="col-md-4">
                        <Link href="#">
                          <Image
                            width={30}
                            height={30}
                            src="/img/social/youtube.svg"
                            alt="youtube"
                          />
                          <h6>90.6K</h6>
                          <span>Subscribers</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="widget-catagory mt-55">
                    <h4 className="widget-title mb-20">Categories</h4>

                    <ul>
                      <li>
                        <Link href="#">
                          Business<span>(10)</span>
                        </Link>{' '}
                      </li>
                      <li>
                        <Link href="#">
                          Loan<span>(9)</span>
                        </Link>{' '}
                      </li>
                      <li>
                        <Link href="#">
                          Financial<span>(12)</span>
                        </Link>{' '}
                      </li>
                      <li>
                        <Link href="#">
                          Bank Transfer<span>(07)</span>
                        </Link>{' '}
                      </li>
                      <li>
                        <Link href="#">
                          Technology<span>(06)</span>
                        </Link>{' '}
                      </li>
                      <li>
                        <Link href="#">
                          Security<span>(11)</span>
                        </Link>{' '}
                      </li>
                      <li>
                        <Link href="#">
                          Privacy<span>(05)</span>
                        </Link>{' '}
                      </li>
                    </ul>
                  </div>

                  <div className="widget-news mt-50">
                    <h4 className="widget-title">Reacent News</h4>

                    <ul className="recent-post">
                      <li>
                        <Image
                          width={80}
                          height={80}
                          src="/img/blog/recent-post-1.png"
                          alt="recent-post"
                        />
                        <div className="news-content">
                          <h6>
                            <a href="#">
                              Is It Worth Buying A Premium Form Builder.
                            </a>
                          </h6>
                          <div className="post-date">
                            <Image
                              width={20}
                              height={20}
                              src="/img/blog/calendar-outline.svg"
                              alt="calender"
                            />
                            <span>March 18, 2021</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Image
                          width={80}
                          height={80}
                          src="/img/blog/recent-post-2.png"
                          alt="recent-post"
                        />
                        <div className="news-content">
                          <h6>
                            <a href="#">10 classNameic Summer Vacations</a>
                          </h6>
                          <div className="post-date">
                            <Image
                              width={20}
                              height={20}
                              src="/img/blog/calendar-outline.svg"
                              alt="calender"
                            />
                            <span>March 18, 2021</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Image
                          width={80}
                          height={80}
                          src="/img/blog/recent-post-3.png"
                          alt="recent-post"
                        />
                        <div className="news-content">
                          <h6>
                            <a href="#">
                              How To Easily Add weForms Widget Using Elementor
                            </a>
                          </h6>
                          <div className="post-date">
                            <Image
                              width={20}
                              height={20}
                              src="/img/blog/calendar-outline.svg"
                              alt="calender"
                            />
                            <span>March 18, 2021</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Image
                          width={80}
                          height={80}
                          src="/img/blog/recent-post-4.png"
                          alt="recent-post"
                        />
                        <div className="news-content">
                          <h6>
                            <a href="#">
                              How to Create GDPR Consent Form In WordPress
                            </a>
                          </h6>
                          <div className="post-date">
                            <Image
                              width={20}
                              height={20}
                              src="/img/blog/calendar-outline.svg"
                              alt="calender"
                            />
                            <span>March 18, 2021</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="widget-tags mt-50">
                    <h4 className="widget-title mb-0">Tags</h4>

                    <div className="tags d-flex flex-wrap mt-30">
                      <Link href="#">Banking</Link>
                      <Link href="#">web design</Link>
                      <Link href="#">ui/ux</Link>
                      <Link href="#">saas</Link>
                      <Link href="#">software</Link>
                      <Link href="#">creative</Link>
                      <Link href="#">product</Link>
                      <Link href="#">development</Link>
                      <Link href="#">design</Link>
                      <Link href="#">sequrity</Link>
                      <Link href="#">agency</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer footer-3">
        <div className="footer-top  pt-lg-130 pb-lg-115 pt-105 pb-105">
          <div className="container">
            <div className="row gx-0">
              <div className="col-lg-4 col-sm-6 text-center text-sm-start ms-0 ">
                <div className="footer-widget mb-30 wow fadeInLeft">
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
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="f-widget-title">
                    <h5>Banca at a Glance</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="#"> Our core Businesses</a>
                      </li>
                      <li>
                        <a href="#"> Our company purpose</a>
                      </li>
                      <li>
                        <a href="#"> Jobs & Careers</a>
                      </li>
                      <li>
                        <a href="#"> Our Responsibility</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2  col-sm-6 text-center text-sm-start ms-lg-5">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
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
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
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
                <Link href="index.html" className="p-0 m-0">
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
                    <br className="d-sm-none" />
                    <Link className="ms-2" href="#">
                      Privacy
                    </Link>
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

export default BlogDetails;
