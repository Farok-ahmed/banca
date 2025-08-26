/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/components/animation";
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/nice-select.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import DefaultLayout from "@/components/Layout";
import SubscribeForm from "./SubscribeForm";
import ReplyForm from "./ReplyForm";
import breadcrumbBg from "@/assets/img/breadcrumb/bg-3.jpg";
import polygon3 from "@/assets/img/breadcrumb/Polygon-3.png";
import polygon4 from "@/assets/img/breadcrumb/Polygon-4.png";
import userProfilePng from "@/assets/img/blog/user-profile.png";
import calendarOutlinePng from "@/assets/img/blog/calendar-outline.png";
import blogDetailsImg from "@/assets/img/blog/blog-details-img.jpg";
import quoteAuthor from "@/assets/img/blog/quote-author.png";
import blogDetailsImg2 from "@/assets/img/blog/blog-details-img-2.jpg";
import author1 from "@/assets/img/blog/author-1.png";
import blog9 from "@/assets/img/blog/blog-9.png";
import blog7 from "@/assets/img/blog/blog-7.png";
import userProfileSvg from "@/assets/img/blog/user-profile.svg";
import calendarOutlineSvg from "@/assets/img/blog/calendar-outline.svg";
import facebookLogo from "@/assets/img/social/facebook-logo.svg";
import twitterLogo from "@/assets/img/social/twitter.svg";
import youtubeLogo from "@/assets/img/social/youtube.svg";
import recentPost1 from "@/assets/img/blog/recent-post-1.png";
import recentPost2 from "@/assets/img/blog/recent-post-2.png";
import recentPost3 from "@/assets/img/blog/recent-post-3.png";
import recentPost4 from "@/assets/img/blog/recent-post-4.png";
import comment1 from "@/assets/img/blog/comment-1.png";
import comment2 from "@/assets/img/blog/comment-2.png";
import comment3 from "@/assets/img/blog/comment-3.png";

const BlogDetailsPage: React.FC = () => {
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
                  className="one-shape shape-3"
                  data-parallax='{"x": -100, "y": 0, "rotateZ":0}'
                >
                  <Image src={polygon3} alt="shape" />
                </div>
                <div
                  className="one-shape shape-4"
                  data-parallax='{"x": -200, "y": 0, "rotateZ":0}'
                >
                  <Image src={polygon4} alt="shape" />
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="breadcrumb-content pt-50">
                      <motion.h1
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                      >
                        How To Save Enough Money To Buy A Home
                      </motion.h1>
                      <motion.div 
                        className="post-info mt-5"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="autor mr-20">
                          <Image
                            width={20}
                            height={20}
                            src={userProfilePng}
                            alt="icon"
                          />
                          <span>Zain Siphron</span>
                        </div>
                        <div className="date">
                          <Image src={calendarOutlinePng} alt="icon" />
                          <span>March 18, 2021</span>
                        </div>
                      </motion.div>
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
                  <motion.div 
                    className="blog-share-widget d-flex d-lg-block align-items-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInLeft}
                  >
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
                  </motion.div>
                </div>
                <div className="col-lg-7">
                  <div className="post-details-widget pb-70 border-bottom position-relative">
                    <motion.div
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                    >
                      <Image
                        className="post-img w-100"
                        src={blogDetailsImg}
                        style={{width:"auto",height:"auto"}}
                        alt="post image"
                      />
                    </motion.div>

                    <motion.p 
                      className="post-text mt-35"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                      transition={{ delay: 0.1 }}
                    >
                      Tomfoolery crikey bits and bobs brilliant bamboozled down
                      the pub amongst brolly hanky panky, cack bonnet arse over
                      tit burke bugger all mate bodge fanny around butty,
                      Richard spiffing a load of old tosh porkies hunky-dory
                      ruddy dropped a clanger. Plastered it's all gone to pot I
                      brilliant young delinquent excuse my French
                    </motion.p>
                    <motion.p 
                      className="post-text mb-0"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                      transition={{ delay: 0.2 }}
                    >
                      Bugger all mate chinwag skive off bender cack chap baking
                      cakes brown bread bodge wind up, amongst mush David lurgy
                      burke blow off bits and bobs faff about dropped a clanger,
                      such a fibber so I said spiffing codswallop bite your arm
                      off my lady bleeding tosser.
                    </motion.p>

                    <motion.ul 
                      className="feature-list"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                      transition={{ delay: 0.3 }}
                    >
                      <li>Shop configurations</li>
                      <li>Installing Sylius ecommerce shop</li>
                      <li>Check system requirements</li>
                      <li>Setting up the database</li>
                      <li>Loading sample data for the environment</li>
                      <li>Assets installation</li>
                    </motion.ul>
                    <motion.blockquote 
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                      transition={{ delay: 0.4 }}
                    >
                      <p>
                        He legged it that blatant brown bread some dodgy chav
                        super a blinding shot my lady lavatory cup of char cor
                        blimey guvnor get stuffed mate you mug cobblers off his
                        nut pukka
                      </p>
                      <div className="author">
                        <Image
                          className="img-fluid rounded-circle"
                          src={quoteAuthor}
                          alt=""
                        />
                        <div>
                          <h6>Jesus Requena </h6>
                          <span>Support Engineer, Aliexpress</span>
                        </div>
                      </div>
                    </motion.blockquote>
                    <motion.div
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                      transition={{ delay: 0.5 }}
                    >
                      <Image
                        className="post-img w-100"
                        src={blogDetailsImg2}
                        style={{width:"auto",height:"auto"}}
                        alt="post img"
                      />
                    </motion.div>
                    <motion.p 
                      className="post-text mt-40 pb-2"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                      transition={{ delay: 0.1 }}
                    >
                      He legged it that blatant brown bread some dodgy chav
                      super a blinding shot my lady lavatory cup of char cor
                      blimey guvnor get stuffed mate you mug cobblers off his
                      nut pukka, give us a bell ummm I'm telling burke A bit of
                      how's your father starkers daft hanky panky bog-standard
                      golly gosh William a load of old tosh brolly Queen's
                      English bits and bobs bugger, grub geeza cracking goal
                      cheesed off bog baking cakes James Bond up the duff mufty
                      morish do one wellies zonked I. Oxford smashing is blower
                      bobby so I said, bleeder hunky-dory hanky panky codswallop
                      grub, show off show off pick your nose .
                    </motion.p>

                    <motion.h2
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                      transition={{ delay: 0.2 }}
                    >
                      Install Sylius via SSH
                    </motion.h2>
                    <motion.p 
                      className="post-text mt-20"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                      transition={{ delay: 0.3 }}
                    >
                      Nancy boy vagabond A bit of how's your father starkers
                      baking cakes boot dropped a clanger my lady bender blow
                      off bugger all mate, jolly good brolly posh ummm I'm
                      telling get stuffed mate up the duff haggle lost the plot
                      off his nut wind up loo, I don't want no agro.
                    </motion.p>
                    <motion.div 
                      className="tag-widget mt-35"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                      transition={{ delay: 0.4 }}
                    >
                      <h6>Tags :</h6>
                      <Link href="#">business</Link>
                      <Link href="#">web design</Link>
                      <Link href="#">software</Link>
                    </motion.div>
                  </div>
                  <motion.div 
                    className="author-media-widget mt-90 mb-90"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="author-img">
                      <Image
                        className="rounded-circle"
                        src={author1}
                        alt="author"
                      />
                    </div>
                    <div className="author-info">
                      <h6>Ahmad Bator</h6>
                      <p>
                        Loo tomfoolery jolly good bloke chancer chimney pot nice
                        one a, he nicked it mufty Oxford say wind up bits and
                        bobs cheeky bugger, amongst cack bugger Eaton William
                        skive off.!
                      </p>
                    </div>
                  </motion.div>
                  <div className="related-post-widget pb-90">
                    <motion.h4 
                      className="blog-widget-title mb-45"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                    >
                      Related Post
                    </motion.h4>
                    <div className="row gy-md-0 gy-4">
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
                            <Image src={blog9} alt="blog-img" style={{width:"auto",height:"auto"}} />
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
                                  src={userProfileSvg}
                                  alt="user profile"
                                />
                                <span>Zain Siphron</span>
                              </div>
                              <div className="post-date">
                                <Image
                                  src={calendarOutlineSvg}
                                  alt="calendar"
                                />
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
                            <Image src={blog7} alt="blog-img" style={{width:"auto",height:"auto"}} />
                            <div className="catagory bg_primary">buisiness</div>
                          </div>
                          <div className="blog-content">
                            <h5>
                              <Link href="#">
                                How our revamped API can help your finances
                              </Link>
                            </h5>
                            <p>
                              Cup of char brilliant horse play bro bread sloshed
                              lavatory only...
                            </p>
                            <div className="post-info">
                              <div className="author">
                                <Image
                                  src={userProfileSvg}
                                  alt="user profile"
                                />
                                <span>Zain Siphron</span>
                              </div>
                              <div className="post-date">
                                <Image
                                  src={calendarOutlineSvg}
                                  alt="calendar"
                                />
                                <span>March 18, 2021</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-comment-widget pb-90">
                    <motion.h4 
                      className="blog-widget-title"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                    >
                      3 Comments
                    </motion.h4>

                    <motion.div 
                      className="comment-author"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInUp}
                      transition={{ delay: 0.2 }}
                    >
                      <ul>
                        <li>
                          <div className="comments-box">
                            <div className="comments-avatar">
                              <Image
                                className="rounded-circle"
                                src={comment1}
                                alt="img"
                              />
                            </div>
                            <div className="comments-text">
                              <div className="avatar-name">
                                <h5>Karon Balina</h5>
                                <div className="post-date">
                                  <Image src={calendarOutlineSvg} alt="" />
                                  <span>March 18, 2021</span>
                                </div>
                                <Link className="reply" href="#">
                                  Reply <i className="arrow_right"></i>
                                </Link>
                              </div>
                              <p>
                                Wouldn't it be better practice to use
                                get_the_title(..) in this case? directly
                                accessing the post object's data member would
                                bypass applying filters and enforcing protected
                                and private settings, unless that's explicitly
                                desired.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="children">
                          <div className="comments-box">
                            <div className="comments-avatar">
                              <Image
                                className="rounded-circle"
                                src={comment2}
                                alt="img"
                              />
                            </div>
                            <div className="comments-text">
                              <div className="avatar-name">
                                <h5>Julias Roy</h5>
                                <div className="post-date">
                                  <Image src={calendarOutlineSvg} alt="" />
                                  <span>March 18, 2021</span>
                                </div>
                                <Link className="reply" href="#">
                                  Reply <i className="arrow_right"></i>
                                </Link>
                              </div>
                              <p>
                                Thenks Demo User for Wouldn't it be better
                                practice to use get_the_title.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="comments-box">
                            <div className="comments-avatar">
                              <Image
                                className="rounded-circle"
                                src={comment3}
                                alt="img"
                              />
                            </div>
                            <div className="comments-text">
                              <div className="avatar-name">
                                <h5>Arista Williamson</h5>
                                <div className="post-date">
                                  <Image src={calendarOutlineSvg} alt="" />
                                  <span>March 18, 2021</span>
                                </div>
                                <Link className="reply" href="#">
                                  Reply <i className="arrow_right"></i>
                                </Link>
                              </div>
                              <p>
                                Wouldn't it be better practice to use
                                get_the_title(..) in this case? directly
                                accessing the post object's data member would
                                bypass applying filters and enforcing protected
                                and private settings, unless that's explicitly
                                desired.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="blog-leave-reply"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="blog-widget-title mb-10">Leave a Reply </h4>
                    <p className="pt-2">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <ReplyForm />
                  </motion.div>
                </div>

                <div className="col-lg-4 ps-xl-5">
                  <div className="blog-sidebar-widget ps-lg-2">
                    <motion.div 
                      className="widget-subscribe"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInRight}
                    >
                      <h4 className="widget-title mb-15">
                        Subscribe to our blog
                      </h4>
                      <p>Get the latest posts in your email</p>

                      <SubscribeForm />
                    </motion.div>

                    <motion.div 
                      className="widget-social mt-40"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeInRight}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="row text-center gx-3 gy-3 gy-md-0">
                        <div className="col-md-4">
                          <Link href="#">
                            <Image src={facebookLogo} alt="faceebook" />
                            <h6>815.5K</h6>
                            <span>Fans</span>
                          </Link>
                        </div>
                        <div className="col-md-4">
                          <Link href="#">
                            <Image src={twitterLogo} alt="twitter" />
                            <h6>107.2K</h6>
                            <span>Followers</span>
                          </Link>
                        </div>
                        <div className="col-md-4">
                          <Link href="#">
                            <Image src={youtubeLogo} alt="youtube" />
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
                      variants={fadeInRight}
                      transition={{ delay: 0.2 }}
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
                      variants={fadeInRight}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="widget-title">Recent News</h4>

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
                              <Image src={calendarOutlineSvg} alt="calender" />
                              <span>March 18, 2021</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <Image src={recentPost2} alt="recent-post" />
                          <div className="news-content">
                            <h6>
                              <Link href="#">10 Classic Summer Vacations</Link>
                            </h6>
                            <div className="post-date">
                              <Image src={calendarOutlineSvg} alt="calender" />
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
                              <Image src={calendarOutlineSvg} alt="calender" />
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
                      variants={fadeInRight}
                      transition={{ delay: 0.4 }}
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
                        <Link href="#">security</Link>
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

export default BlogDetailsPage;
