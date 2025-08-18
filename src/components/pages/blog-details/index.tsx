/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/nice-select.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import DefaultLayout from "@/components/Layout";
import SubscribeForm from "./SubscribeForm";
import ReplyForm from "./ReplyForm";

const BlogDetailsPage: React.FC = () => {
  return (
    <>
      <DefaultLayout>
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
                      tit burke bugger all mate bodge fanny around butty,
                      Richard spiffing a load of old tosh porkies hunky-dory
                      ruddy dropped a clanger. Plastered it's all gone to pot I
                      brilliant young delinquent excuse my French
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
                    </p>

                    <h2>Install Sylius via SSH</h2>
                    <p className="post-text mt-20">
                      Nancy boy vagabond A bit of how's your father starkers
                      baking cakes boot dropped a clanger my lady bender blow
                      off bugger all mate, jolly good brolly posh ummm I'm
                      telling get stuffed mate up the duff haggle lost the plot
                      off his nut wind up loo, I don't want no agro.
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
                        one a, he nicked it mufty Oxford say wind up bits and
                        bobs cheeky bugger, amongst cack bugger Eaton William
                        skive off.!
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
                    </div>
                  </div>

                  <div className="blog-leave-reply">
                    <h4 className="blog-widget-title mb-10">Leave a Reply </h4>
                    <p className="pt-2">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <ReplyForm/>
                  </div>
                </div>

                <div className="col-lg-4 ps-xl-5">
                  <div className="blog-sidebar-widget ps-lg-2">
                    <div className="widget-subscribe">
                      <h4 className="widget-title mb-15">
                        Subscribe to our blog
                      </h4>
                      <p>Get the latest posts in your email</p>

                      <SubscribeForm />
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
                    </div>

                    <div className="widget-news mt-50">
                      <h4 className="widget-title">Recent News</h4>

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
                              <a href="#">10 Classic Summer Vacations</a>
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
                        <Link href="#">security</Link>
                        <Link href="#">agency</Link>
                      </div>
                    </div>
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
