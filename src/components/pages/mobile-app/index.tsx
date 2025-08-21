"use client"
import NewsSlider from "@/components/BancaNews";
import ClientSlider from "@/components/MobileTestimonial";
import Image from "next/image";
import Link from "next/link";
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/css/nice-select.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import DefaultLayout from "@/components/Layout";
// Assets
import logo1 from "@/assets/img/banner/Logo-1.png";
import logo2 from "@/assets/img/banner/Logo-2.png";
import logo3 from "@/assets/img/banner/Logo-3.png";
import logo4 from "@/assets/img/banner/Logo-4.png";
import logo5 from "@/assets/img/banner/Logo-5.png";
import logo6 from "@/assets/img/banner/Logo-6.png";
import bannerPerson from "@/assets/img/banner/person.png";
import bannerIcon1 from "@/assets/img/banner/icon-1.svg";
import bannerIcon2 from "@/assets/img/banner/icon-2.svg";
import bannerIcon3 from "@/assets/img/banner/icon-3.svg";
import bannerIcon4 from "@/assets/img/banner/icon-4.svg";
import featureIcon1 from "@/assets/img/feature/icon-1.svg";
import featureIcon2 from "@/assets/img/feature/icon-2.svg";
import featureIcon3 from "@/assets/img/feature/icon-3.svg";
import featureIcon4 from "@/assets/img/feature/icon-4.svg";
import trackBg from "@/assets/img/track-progress/shape-bg.png";
import track1 from "@/assets/img/track-progress/track-1.png";
import track2 from "@/assets/img/track-progress/track-2.png";
import track3 from "@/assets/img/track-progress/track-3.png";
import cardBg from "@/assets/img/card-payment/shape-bg.png";
import card1 from "@/assets/img/card-payment/card-1.png";
import card2 from "@/assets/img/card-payment/card-2.png";
import ibBg from "@/assets/img/internet-banking/shape-bg.png";
import ibImg1 from "@/assets/img/internet-banking/img-1.png";
import ibImg2 from "@/assets/img/internet-banking/img-2.png";
import ibImg3 from "@/assets/img/internet-banking/img-3.png";
import ibInfo from "@/assets/img/internet-banking/info.png";
import secImg1 from "@/assets/img/security-tips/img-1.png";
import secImg2 from "@/assets/img/security-tips/img-2.png";
import secImg3 from "@/assets/img/security-tips/img-3.png";
import ctaBg from "@/assets/img/client/cta-bg.png";
import { motion } from "framer-motion";
import { fadeInRight, fadeInLeft, fadeInUp } from "@/components/animation";
import Counter from "@/components/common-section/Counter";

const MobileAppPage = () => {
  // helper to render caret icon on mobile

  return (
    <>
      <DefaultLayout>
        <main>
          <section className="banner-area" id="banner_animation">
            <div className="bubbles">
              <div data-parallax='{"x": 0, "y": -250, "rotateZ":0}'>
                <div className=" bubble"></div>
              </div>
              <div data-parallax='{"x": 0, "y": -250, "rotateZ":0}'>
                <div className=" bubble"></div>
              </div>
              <div data-parallax='{"x": 50, "y": -250, "rotateZ":0}'>
                <div className=" bubble"></div>
              </div>
              <div data-parallax='{"x": 60, "y": -200, "rotateZ":0}'>
                <div className=" bubble"></div>
              </div>
              <div data-parallax='{"x": 50, "y": -130, "rotateZ":0}'>
                <div className=" bubble"></div>
              </div>
              <div data-parallax='{"x": 130, "y": 250, "rotateZ":0}'>
                <div className=" bubble"></div>
              </div>
              <div data-parallax='{"x": 0, "y": -250, "rotateZ":0}'>
                <div className=" bubble"></div>
              </div>
              <div data-parallax='{"x": 100, "y": -250, "rotateZ":0}'>
                <div className=" bubble"></div>
              </div>
            </div>
            <div className="logos">
              <Image src={logo1} alt="social" />
              <Image src={logo2} alt="social" />
              <Image src={logo3} alt="social" />
              <Image src={logo4} alt="social" />
              <Image src={logo5} alt="social" />
              <Image src={logo6} alt="social" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <div className="banner-content text-center pt-200">
                    <h1>
                      Simple and Safe Digital <br /> Banking Mobile App
                    </h1>
                    <div className="img-area mt-35">
                      <Image
                        className="img-fluid"
                        data-depth="0.6"
                        src={bannerPerson}
                        alt="person"
                      />
                    </div>

                    <div className="symbol-pulse">
                      <div className="pulse-1"></div>
                      <div className="pulse-2"></div>
                      <div className="pulse-x"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row position-relative">
                <div className="col-12">
                  <div className="floated-widget">
                    <div className="row text-center gy-2 gy-lg-0">
                      <div className="col-lg-3 col-6">
                        <div className="statistics-widget-1 text-start pt-10">
                          <Image src={bannerIcon1} alt="icon" />
                          <p>Active user</p>
                          <h2 className="counter">
                            <span><Counter count={15000} decimals={0} /></span>
                          </h2>
                        </div>
                      </div>

                      <div className="col-lg-3 col-6">
                        <div className="statistics-widget-1 text-start pt-10">
                          <Image src={bannerIcon2} alt="icon" />
                          <p>download</p>
                          <h2 className="counter">
                            <span><Counter count={49.9} decimals={1} /></span>k
                          </h2>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6">
                        <div className="statistics-widget-1 text-start pt-10">
                          <Image src={bannerIcon3} alt="icon" />
                          <p>reviews</p>
                          <h2 className="counter">
                            <span><Counter count={35.7} decimals={1} /></span>k
                          </h2>
                        </div>
                      </div>
                      <div className="col-lg-3 col-6">
                        <div className="statistics-widget-1 text-start pt-10">
                          <Image src={bannerIcon4} alt="icon" />
                          <p>partners</p>
                          <h2 className="counter">
                            <span><Counter count={199} decimals={0} /></span>+
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="feature" className="feature-area pt-200 pb-130">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mx-auto pt-160 pt-lg-90 pb-65">
                  <div className="section-title">
                    <motion.h2
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                    >
                      Our Featured
                    </motion.h2>
                    <motion.p
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      You may want top security so that you can rest assured
                      that your accounts will not be compromised while you are
                      using the app.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="row gy-xl-0 gy-4">
                <div className="col-xl-3 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget wow fadeInUp"
                  >
                    <div className="card-img">
                      <Image src={featureIcon1} alt="feature svg" />
                    </div>
                    <h4>Prepaid Card</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content
                    </p>
                  </motion.div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-img">
                      <Image src={featureIcon2} alt="feature svg" />
                    </div>
                    <h4>Easy to use</h4>
                    <p>
                      The way to solve the word placement to treat the phrase
                      easy to use as a single.
                    </p>
                  </motion.div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="card-img">
                      <Image src={featureIcon3} alt="feature svg" style={{width:"auto",height:"auto"}} />
                    </div>
                    <h4>save your Card</h4>
                    <p>
                      We keep your information safe and notify you anytime your
                      saved payment card.
                    </p>
                  </motion.div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget wow fadeInUp"
                    data-wow-delay="0.9s"
                  >
                    <div className="card-img">
                      <Image src={featureIcon4} alt="feature svg" />
                    </div>
                    <h4>pay bill</h4>
                    <p>
                      That is why we have a wide range of bill payment options
                      through our Banking service.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section className="track-f-progress pt-125 pb-160">
            <div className="container">
              <div className="row gy-lg-0 gy-4 pb-10">
                <div className="col-md-6 mx-auto">
                  <div className="img-content">
                    <Image className="bg-img" src={trackBg} alt="shape image" />
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                    >
                      <Image className="track-3" src={track1} alt="" />
                    </motion.div>
                    <motion.div
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInRight"
                      data-wow-delay="0.3s"
                    >
                      <Image className="track-img track-1" src={track2} alt="" />
                    </motion.div>
                    <motion.div
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInRight"
                      data-wow-delay="0.5s"
                    >
                      <Image className="track-img track-2" src={track3} alt="" />
                    </motion.div>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-5 offset-xl-1 d-flex align-items-center">
                  <div className="text-content">
                    <h2>Track Your Financial Progress</h2>
                    <p>
                      Set challenges Set small challenges to motivate yourself
                      to save. Setting smaller goals within your larger goals
                      can be more engaging in tracking{" "}
                    </p>

                    <div>
                      <Link className="theme-btn-2 mt-55" href="#">
                        <span className="arrow">
                          <span className="horizontal-line"></span>
                        </span>
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="card-payment pt-100 pb-130">
            <div className="container">
              <div className="row gy-lg-0 gy-4">
                <div className="col-lg-6 col-xl-5 d-flex align-items-center order-2 order-lg-1">
                  <div className="text-content">
                    <h2>Simplicity Credit Card Payment</h2>
                    <p>
                      Make a Payment. Cardholders can pay any outstanding
                      balances on their Citibank Simplicity Credit Card by
                      logging in to their online account.
                    </p>

                    <div>
                      <Link className="theme-btn-2 mt-55" href="#">
                        <span className="arrow">
                          <span className="horizontal-line"></span>
                        </span>
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mx-auto offset-xl-1 order-1 order-lg-2">
                  <div className="img-content">
                    <Image className="bg-img" src={cardBg} alt="" />
                    <motion.div
                      variants={fadeInLeft}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInLeft"
                    >
                      <Image className="card-1 img-fluid" src={card1} alt="" />
                    </motion.div>
                    <motion.div
                      variants={fadeInLeft}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      <Image className="card-2" src={card2} alt="" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="internet-banking pt-100 pb-150">
            <div className="container">
              <div className="row gy-lg-0 gy-4">
                <div className="col-md-6 mx-auto mx-lg-0 text-center">
                  <div className="img-content">
                    <Image className="bg-img" src={ibBg} alt="" />
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                    >
                      <Image className="bank-main img-fluid" src={ibImg1} alt="" />
                    </motion.div>
                    <motion.div
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInRight"
                      data-wow-delay="0.3s"
                    >
                      <Image className="bank-1 img-fluid" src={ibImg2} alt="" />
                    </motion.div>
                    <motion.div
                      variants={fadeInLeft}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInLeft"
                      data-wow-delay="0.6s"
                    >
                      <Image className="bank-2 img-fluid" src={ibImg3} alt="" />
                    </motion.div>
                    <motion.div
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInRight"
                      data-wow-delay="0.8s"
                    >
                      <Image className="bank-3 img-fluid" src={ibInfo} alt="" />
                    </motion.div>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-4 offset-xl-1 d-flex align-items-center">
                  <div className="text-content">
                    <h2>Access Personal Internet Banking</h2>
                    <p>
                      If you have chosen to order a Security Key, you will be
                      entitled a 30-day period after self-registration, which is
                      referred to as Security Key Activation Grace Period.
                      During this period, you can log on to Personal Internet
                      Banking.
                    </p>

                    <div>
                      <Link className="theme-btn-2 mt-55" href="#">
                        <span className="arrow">
                          <span className="horizontal-line"></span>
                        </span>
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="security-area pt-115 pb-130">
            <div className="container">
              <div className="section-title">
                <h2>Security Tips</h2>
              </div>

              <div className="row pt-40">
                <div className="col-xl-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="single-security-widget wow fadeInUp"
                  >
                    <div className="security-img text-center">
                      <Image
                        className="img-fluid round-15"
                        src={secImg1}
                        alt="security image"
                      />
                    </div>
                    <div className="security-content">
                      <h4>Online Security</h4>
                      <p>
                        Banca will never send emails that ask for confidential
                        information. We will never seek your personal details
                        such as account information, password, etc at any time.
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="col-xl-6">
                  <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="single-security-widget mt-xl-0 mt-4 wow fadeInRight"
                    data-wow-delay="0.2s"
                  >
                    <div className="row align-items-center">
                      <div className="col-4">
                        <div className="security-img h-100">
                          <Image
                            className="img-fluid round-10 h-100"
                            src={secImg2}
                            alt="security image"
                          />
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="security-content-2 ps-2">
                          <p className="mb-4">
                            Naver share your OTP with anyon,click here for more
                            security tips to keep you safe.
                          </p>
                          <span className="tips-title">Card Safety</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="single-security-widget mt-25 mt-lg-30 wow fadeInRight"
                    data-wow-delay="0.4s"
                  >
                    <div className="row">
                      <div className="col-7">
                        <div className="security-content-2">
                          <p>
                            Never disclose your pin number to anyone, Mashreq
                            staff will never ask for your pin number. For your
                            security, we recommend that you change your ATM PIN
                            regularly.
                          </p>
                          <span className="tips-title mt-35">ATM Safety</span>
                        </div>
                      </div>

                      <div className="col-5">
                        <div className="security-img h-100">
                          <Image
                            className="img-fluid round-10 h-100"
                            src={secImg3}
                            alt="security image"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* what our client say */}

          <section className="client-area pt-110 ">
            <div className="container">
              <div className="section-title">
                <motion.h2
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="wow fadeInUp mb-0"
                >
                  What Our Client Say
                </motion.h2>
              </div>

              <ClientSlider />

              <div className="row pt-110">
                <div className="col-md-12 position-relative">
                  <div
                    className="cta cta-2"
                    style={{
                      backgroundImage: `url(${ctaBg.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="bubbles">
                      <div className="bubble-1"></div>
                      <div className="bubble-2"></div>
                      <div className="bubble-3"></div>
                      <div className="bubble-4"></div>
                      <div className="bubble-5"></div>
                      <div className="bubble-6"></div>
                      <div className="bubble-7"></div>
                      <div className="bubble-8"></div>
                    </div>
                    <div className="row gy-xl-0 gy-4">
                      <div className="col-xl-5">
                        <motion.div
                          variants={fadeInLeft}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          className="cta-content wow fadeInLeft text-center text-xl-start"
                        >
                          <h2>Download Our Free Mobile App</h2>
                        </motion.div>
                      </div>
                      <div className="col-xl-7 d-flex align-items-center flex-wrap justify-content-xl-end justify-content-center">
                        <Link href="#">
                          <motion.div
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="app-btn mt-3 mt-sm-0 wow fadeInRight"
                            data-wow-delay="0.1s"
                          >
                            <i className="fab fa-google-play"></i>
                            <div className="btn-text">
                              <span>GET IT ON</span>
                              <p>Google Play</p>
                            </div>
                          </motion.div>
                        </Link>
                        <Link href="#">
                          <motion.div
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="app-btn mt-3 mt-sm-0 wow fadeInRight"
                            data-wow-delay="0.2s"
                          >
                            <i className="fab fa-apple"></i>
                            <div className="btn-text">
                              <span>Downloan on the</span>
                              <p>Apple Store</p>
                            </div>
                          </motion.div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* news slider */}
          <NewsSlider />
        </main>
      </DefaultLayout>
    </>
  );
};

export default MobileAppPage;
