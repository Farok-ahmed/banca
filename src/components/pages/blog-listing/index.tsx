"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft } from "@/components/animation";
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/nice-select.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import DefaultLayout from "@/components/Layout";
import breadcrumbBg from "@/assets/img/breadcrumb/bg-3.jpg";
import polygon1 from "@/assets/img/breadcrumb/Polygon-1.png";
import polygon2 from "@/assets/img/breadcrumb/Polygon-2.png";
import blog1 from "@/assets/img/blog/blog-1.png";
import blog2 from "@/assets/img/blog/blog-2.png";
import blog3 from "@/assets/img/blog/blog-3.png";
import blog4 from "@/assets/img/blog/blog-4.png";
import blog5 from "@/assets/img/blog/blog-5.png";
import blog6 from "@/assets/img/blog/blog-6.png";
import blog7 from "@/assets/img/blog/blog-7.png";
import blog8 from "@/assets/img/blog/blog-8.png";
import blog9 from "@/assets/img/blog/blog-9.png";
import blog10 from "@/assets/img/blog/blog-10.png";
import userProfileSvg from "@/assets/img/blog/user-profile.svg";
import calendarOutlineSvg from "@/assets/img/blog/calendar-outline.svg";
import facebookLogo from "@/assets/img/social/facebook-logo.svg";
import twitterLogo from "@/assets/img/social/twitter.svg";
import youtubeLogo from "@/assets/img/social/youtube.svg";
import recentPost1 from "@/assets/img/blog/recent-post-1.png";
import recentPost2 from "@/assets/img/blog/recent-post-2.png";
import recentPost3 from "@/assets/img/blog/recent-post-3.png";
import recentPost4 from "@/assets/img/blog/recent-post-4.png";

const BlogListingPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section className="breadcrumb-area" id="banner_animation2">
            <div
              className="breadcrumb-widget breadcrumb-widget-2  pt-200 pb-145"
              style={{ backgroundImage: `url(${breadcrumbBg.src})` }}
            >
              <div className="shapes">
                <div
                  className="one-shape shape-1"
                  data-parallax='{"x": 100, "y": 0, "rotateZ":0}'
                >
                  <Image src={polygon1} alt="shape" style={{width:"auto",height:"auto"}} />
                </div>
                <div
                  className="one-shape shape-2"
                  data-parallax='{"x": 200, "y": 50, "rotateZ":0}'
                >
                  <Image src={polygon2} alt="shape" style={{width:"auto",height:"auto"}} />
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 mx-auto">
                    <div className="breadcrumb-content pt-50">
                      <motion.h1
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                      >
                        Blog
                      </motion.h1>
                      <motion.div 
                        className="search-box mt-20"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                      >
                        <form action="#">
                          <div className="input-group">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Search for topic..."
                            />
                            <button className="search-btn input-group-append">
                              {" "}
                              <i className="icon_search "></i>
                            </button>
                          </div>
                        </form>
                      </motion.div>

                      <motion.div 
                        className="popular-tags d-flex flex-wrap justify-content-center align-items-center mt-20"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        transition={{ delay: 0.4 }}
                      >
                        <span>Popular Tags:</span>
                        <Link href="#">Business</Link>
                        <Link href="#">Financial</Link>
                        <Link href="#">Case Study</Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-120 pb-120 bg_disable">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 ">
                  <div className="blog-post-widget">
                    <div className="row gy-4 ">
                      <div className="col-md-6">
                        <motion.div
                          className="blog-widget-2"
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={fadeInUp}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="blog-img">
                            <Image src={blog1} alt="blog-img" style={{width:"auto",height:"auto"}} />
                            <div className="catagory bg_primary">buisiness</div>
                          </div>
                          <div className="blog-content">
                            <h4>
                              <Link href="/blog-details">
                                Five Steps to Buying for Your Home Loan
                              </Link>
                            </h4>
                            <p>
                              Cup of char brilliant horse play bro bread sloshed
                              lavatory only...
                            </p>
                            <div className="post-info">
                              <div className="author">
                                <Image  src={userProfileSvg} alt="user profile" />
                                <span>Zain Siphron</span>
                              </div>
                              <div className="post-date">
                                <Image  src={calendarOutlineSvg} alt="calendar" />
                                <span>March 18, 2021</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="col-md-6">
                        <motion.div
                          className="blog-widget-2"
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={fadeInUp}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="blog-img">
                            <Image src={blog2} alt="blog-img" style={{width:"auto",height:"auto"}} />
                            <div className="catagory yellow-bg">loan</div>
                          </div>
                          <div className="blog-content">
                            <h4>
                              <Link href="/blog-details">
                                How To Save Enough Money To Buy A Home
                              </Link>
                            </h4>
                            <p>
                              Cup of char brilliant horse play bro bread sloshed
                              lavatory only...
                            </p>
                            <div className="post-info">
                              <div className="author">
                                <Image  src={userProfileSvg} alt="user profile" />
                                <span>Zain Siphron</span>
                              </div>
                              <div className="post-date">
                                <Image  src={calendarOutlineSvg} alt="calendar" />
                                <span>March 18, 2021</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="col-md-6">
                        <motion.div
                          className="blog-widget-2"
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={fadeInUp}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="blog-img">
                            <Image src={blog3} alt="blog-img" style={{width:"auto",height:"auto"}} />
                            <div className="catagory green-bg">Securiey</div>
                          </div>
                          <div className="blog-content">
                            <h4>
                              <Link href="/blog-details">
                                Create A WordPress Multi Step Form
                              </Link>
                            </h4>
                            <p>
                              Cup of char brilliant horse play bro bread sloshed
                              lavatory only...
                            </p>
                            <div className="post-info">
                              <div className="author">
                                <Image  src={userProfileSvg} alt="user profile" />
                                <span>Zain Siphron</span>
                              </div>
                              <div className="post-date">
                                <Image  src={calendarOutlineSvg} alt="calendar" />
                                <span>March 18, 2021</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="col-md-6">
                        <motion.div
                          className="blog-widget-2"
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={fadeInUp}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="blog-img">
                            <Image src={blog4} alt="blog-img" style={{width:"auto",height:"auto"}} />
                            <div className="catagory sky-bg">buisiness</div>
                          </div>
                          <div className="blog-content">
                            <h4>
                              <Link href="/blog-details">
                                What Happens to Your Debt When You Die?
                              </Link>
                            </h4>
                            <p>
                              Cup of char brilliant horse play bro bread sloshed
                              lavatory only...
                            </p>
                            <div className="post-info">
                              <div className="author">
                                <Image  src={userProfileSvg} alt="user profile" />
                                <span>Zain Siphron</span>
                              </div>
                              <div className="post-date">
                                <Image  src={calendarOutlineSvg} alt="calendar" />
                                <span>March 18, 2021</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="col-md-6">
                        <motion.div
                          className="blog-widget-2"
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={fadeInUp}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="blog-img">
                            <Image src={blog5} alt="blog-img" style={{width:"auto",height:"auto"}}/>
                            <div className="catagory deep-green-bg">
                              banking
                            </div>
                          </div>
                          <div className="blog-content">
                            <h4>
                              <Link href="/blog-details">
                                How Do Banca Banks Make Money?
                              </Link>
                            </h4>
                            <p>
                              Cup of char brilliant horse play bro bread sloshed
                              lavatory only...
                            </p>
                            <div className="post-info">
                              <div className="author">
                                <Image src={userProfileSvg} alt="user profile" />
                                <span>Zain Siphron</span>
                              </div>
                              <div className="post-date">
                                <Image  src={calendarOutlineSvg} alt="calendar" />
                                <span>March 18, 2021</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="col-md-6">
                        <motion.div
                          className="blog-widget-2"
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={fadeInUp}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="blog-img">
                            <Image src={blog6} alt="blog-img" style={{width:"auto",height:"auto"}} />
                            <div className="catagory yellow-bg">loan</div>
                          </div>
                          <div className="blog-content">
                            <h4>
                              <Link href="/blog-details">
                                Finance Your Property in a Market
                              </Link>
                            </h4>
                            <p>
                              Cup of char brilliant horse play bro bread sloshed
                              lavatory only...
                            </p>
                            <div className="post-info">
                              <div className="author">
                                <Image  src={userProfileSvg} alt="user profile" />
                                <span>Zain Siphron</span>
                              </div>
                              <div className="post-date">
                                <Image  src={calendarOutlineSvg} alt="calendar" />
                                <span>March 18, 2021</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="col-md-6">
                        <motion.div
                          className="blog-widget-2"
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={fadeInUp}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="blog-img">
                            <Image src={blog7} alt="blog-img" style={{width:"auto",height:"auto"}} />
                            <div className="catagory violet-bg">finances</div>
                          </div>
                          <div className="blog-content">
                            <h4>
                              <Link href="/blog-details">
                                How our revamped API can help your finances
                              </Link>
                            </h4>
                            <p>
                              Cup of char brilliant horse play bro bread sloshed
                              lavatory only...
                            </p>
                            <div className="post-info">
                              <div className="author">
                                <Image  src={userProfileSvg} alt="user profile" />
                                <span>Zain Siphron</span>
                              </div>
                              <div className="post-date">
                                <Image  src={calendarOutlineSvg} alt="calendar" />
                                <span>March 18, 2021</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="col-md-6">
                        <motion.div
                          className="blog-widget-2"
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={fadeInUp}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="blog-img">
                            <Image src={blog8} alt="blog-img" style={{width:"auto",height:"auto"}} />
                            <div className="catagory violet-bg">finances</div>
                          </div>
                          <div className="blog-content">
                            <h4>
                              <Link href="/blog-details">
                                Linking your finances and your business
                              </Link>
                            </h4>
                            <p>
                              Cup of char brilliant horse play bro bread sloshed
                              lavatory only...
                            </p>
                            <div className="post-info">
                              <div className="author">
                                <Image src={userProfileSvg} alt="user profile" />
                                <span>Zain Siphron</span>
                              </div>
                              <div className="post-date">
                                <Image  src={calendarOutlineSvg} alt="calendar" />
                                <span>March 18, 2021</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="col-md-6">
                        <motion.div
                          className="blog-widget-2"
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={fadeInUp}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="blog-img">
                            <Image src={blog9} alt="blog-img" style={{width:"auto",height:"auto"}}/>
                            <div className="catagory bg_primary">buisiness</div>
                          </div>
                          <div className="blog-content">
                            <h4>
                              <Link href="/blog-details">
                                Why Set Impossible Goals for 2021?
                              </Link>
                            </h4>
                            <p>
                              Cup of char brilliant horse play bro bread sloshed
                              lavatory only...
                            </p>
                            <div className="post-info">
                              <div className="author">
                                <Image  src={userProfileSvg} alt="user profile" />
                                <span>Zain Siphron</span>
                              </div>
                              <div className="post-date">
                                <Image  src={calendarOutlineSvg} alt="calendar" />
                                <span>March 18, 2021</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="col-md-6">
                        <motion.div
                          className="blog-widget-2"
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={fadeInUp}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="blog-img">
                            <Image src={blog10} alt="blog-img" style={{width:"auto",height:"auto"}}/>
                            <div className="catagory yellow-bg">loan</div>
                          </div>
                          <div className="blog-content">
                            <h4>
                              <Link href="/blog-details">
                                How Banca elevated the design to code.
                              </Link>
                            </h4>
                            <p>
                              Cup of char brilliant horse play bro bread sloshed
                              lavatory only...
                            </p>
                            <div className="post-info">
                              <div className="author">
                                <Image src={userProfileSvg} alt="user profile" />
                                <span>Zain Siphron</span>
                              </div>
                              <div className="post-date">
                                <Image src={calendarOutlineSvg} alt="calendar" />
                                <span>March 18, 2021</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <div className="row mt-55">
                      <div className="col-12">
                        <motion.div 
                          className="pagination-widget"
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={fadeInUp}
                        >
                          <ul>
                            <li>
                              <Link className="active" href="#">
                                1
                              </Link>
                            </li>
                            <li>
                              <Link href="#">2</Link>
                            </li>
                            <li>
                              <Link href="#">3</Link>
                            </li>
                            <li>
                              <Link href="#">
                                {" "}
                                <i className="arrow_carrot-right "></i>{" "}
                              </Link>
                            </li>
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 ps-xl-5 mt-5 mt-lg-0">
                  <div className="blog-sidebar-widget ps-lg-2">
                    <motion.div 
                      className="widget-subscribe"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInLeft}
                    >
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
                    </motion.div>

                    <motion.div 
                      className="widget-social mt-40"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInLeft}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="row text-center gx-3 gy-3 gy-md-0">
                        <div className="col-md-4">
                          <Link href="#">
                            <Image  src={facebookLogo} alt="faceebook" />
                            <h6>815.5K</h6>
                            <span>Fans</span>
                          </Link>
                        </div>
                        <div className="col-md-4">
                          <Link href="#">
                            <Image  src={twitterLogo} alt="twitter" />
                            <h6>107.2K</h6>
                            <span>Followers</span>
                          </Link>
                        </div>
                        <div className="col-md-4">
                          <Link href="#">
                            <Image  src={youtubeLogo} alt="youtube" />
                            <h6>90.6K</h6>
                            <span>Subscribers</span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="widget-catagory mt-55"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInLeft}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="widget-title mb-20">Categories</h4>

                      <ul>
                        <li>
                          <Link href="#">
                            Business<span>(10)</span>
                          </Link>{" "}
                        </li>
                        <li>
                          <Link href="#">
                            Loan<span>(9)</span>
                          </Link>{" "}
                        </li>
                        <li>
                          <Link href="#">
                            Financial<span>(12)</span>
                          </Link>{" "}
                        </li>
                        <li>
                          <Link href="#">
                            Bank Transfer<span>(07)</span>
                          </Link>{" "}
                        </li>
                        <li>
                          <Link href="#">
                            Technology<span>(06)</span>
                          </Link>{" "}
                        </li>
                        <li>
                          <Link href="#">
                            Security<span>(11)</span>
                          </Link>{" "}
                        </li>
                        <li>
                          <Link href="#">
                            Privacy<span>(05)</span>
                          </Link>{" "}
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div 
                      className="widget-news mt-50"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInLeft}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="widget-title">Reacent News</h4>

                      <ul className="recent-post">
                        <li>
                          <Image src={recentPost1} alt="recent-post" />
                          <div className="news-content">
                            <h6>
                              <Link href="#">
                                Is It Worth Buying A Premium Form Builder.
                              </Link>
                            </h6>
                            <div className="post-date">
                              <Image width={20} height={20} src={calendarOutlineSvg} alt="calender" />
                              <span>March 18, 2021</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <Image src={recentPost2} alt="recent-post" />
                          <div className="news-content">
                            <h6>
                              <Link href="#">
                                10 classNameic Summer Vacations
                              </Link>
                            </h6>
                            <div className="post-date">
                              <Image width={20} height={20} src={calendarOutlineSvg} alt="calender" />
                              <span>March 18, 2021</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <Image src={recentPost3} alt="recent-post" />
                          <div className="news-content">
                            <h6>
                              <Link href="#">
                                How To Easily Add weForms Widget Using Elementor
                              </Link>
                            </h6>
                            <div className="post-date">
                              <Image  src={calendarOutlineSvg} alt="calender" />
                              <span>March 18, 2021</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <Image src={recentPost4} alt="recent-post" />
                          <div className="news-content">
                            <h6>
                              <Link href="#">
                                How to Create GDPR Consent Form In WordPress
                              </Link>
                            </h6>
                            <div className="post-date">
                              <Image src={calendarOutlineSvg} alt="calender" />
                              <span>March 18, 2021</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </motion.div>
                    <motion.div 
                      className="widget-tags mt-50"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInLeft}
                      transition={{ delay: 0.5 }}
                    >
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
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </DefaultLayout>
    </>
  );
};

export default BlogListingPage;
