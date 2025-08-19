import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/css/nice-select.css";
import "nouislider/dist/nouislider.css";
import "@/styles/css/jquery.fancybox.min.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/components/Layout";
import LoanCalculator from "@/components/LoanCalculator";
// Images (static imports)
import wavePng from "@/assets/img/bank/wave.png";
import activeUser1 from "@/assets/img/bank/active-user1.jpg";
import activeUser2 from "@/assets/img/bank/active-user2.jpg";
import activeUser3 from "@/assets/img/bank/active-user3.jpg";
import card3 from "@/assets/img/bank/card-3.png";
import card2 from "@/assets/img/bank/card-2.png";
import card1 from "@/assets/img/bank/card-1.png";
import linePng from "@/assets/img/bank/line.png";
import star2 from "@/assets/img/bank/Star-2.png";
import star3 from "@/assets/img/bank/Star-3.png";
import star4 from "@/assets/img/bank/Star-4.png";
import singleIcon from "@/assets/img/bank/single-icon.png";
import worldIcon from "@/assets/img/bank/world-icon.png";
import sheldIcon from "@/assets/img/bank/sheld-icon.png";
import mobilePng from "@/assets/img/bank/mobile.png";
import fCard1 from "@/assets/img/bank/f-card1.png";
import fCard2 from "@/assets/img/bank/f-card2.png";
import fCard3 from "@/assets/img/bank/f_card3.png";
import fCard4 from "@/assets/img/bank/f_card4.png";
import fCard5 from "@/assets/img/bank/f_card5.png";
import fCard6 from "@/assets/img/bank/f_card6.png";
import slack from "@/assets/img/bank/slack.png";
import dropbox from "@/assets/img/bank/dropbox.png";
import googleDrive from "@/assets/img/bank/google_drive.png";
import jira from "@/assets/img/bank/jira.png";
import zendesk from "@/assets/img/bank/zendesk.png";
import mailchimp from "@/assets/img/bank/mailchimp.png";
import mapPng from "@/assets/img/bank/map.png";
import flag1 from "@/assets/img/bank/flag-1.png";
import flag2 from "@/assets/img/bank/flag-2.png";
import flag3 from "@/assets/img/bank/flag-3.png";
import flag4 from "@/assets/img/bank/flag-4.png";
import flag5 from "@/assets/img/bank/flag-5.png";
import flag6 from "@/assets/img/bank/flag-6.png";
import flag7 from "@/assets/img/bank/flag-7.png";
import flag8 from "@/assets/img/bank/flag-8.png";
import cLogo1 from "@/assets/img/saas-app/c_logo_1.png";
import cLogo2 from "@/assets/img/saas-app/c_logo_2.png";
import cLogo3 from "@/assets/img/saas-app/c_logo_3.png";
import cLogo4 from "@/assets/img/saas-app/c_logo_4.png";
import cLogo5 from "@/assets/img/saas-app/c_logo_5.png";
import mobileTwo from "@/assets/img/bank/mobile-two.png";

const SmallBankPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section className="bank-banner-area">
            <Image className="wave_img" src={wavePng} alt="" />
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="bank-banner-content">
                    <h5 className="wow fadeInUp" data-wow-delay="0.2s">
                      Manage your Finance
                    </h5>
                    <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                      Your <span className="underline-shape">banking</span> made
                      easier.
                    </h1>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                      Inventore veritatis et architecto beatae vitaie dicta
                      explicab nemo ipsam volupetateme voluptashte aspernatur.
                    </p>
                    <div
                      className="d-flex flex-column flex-sm-row mt-25 subscribe-field wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <input
                        type="email"
                        className="form-control me-sm-1"
                        placeholder="Enter Email address"
                      />
                      <button className="input-append theme-btn theme-btn-lg ms-sm-2">
                        Subscribe
                      </button>
                    </div>
                    <ul
                      className="list-unstyled feature-list wow fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      <li>
                        <i className="fas fa-check-circle"></i> Get 30 day free
                        trial
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> No Spamming
                      </li>
                    </ul>
                    <div
                      className="active-user d-flex align-items-center wow fadeInUp"
                      data-wow-delay="0.8s"
                    >
                      <div className="user-img-inner">
                        <Image src={activeUser1} alt="" />
                        <Image src={activeUser2} alt="" />
                        <Image src={activeUser3} alt="" />
                      </div>
                      5K+ ⭐ Active users
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bank-card-img">
                    <div
                      className="bank-card wow fadeInUp"
                      data-wow-delay="0.8s"
                    >
                      <Image
                        data-parallax='{"x": 0, "y": 90}'
                        src={card3}
                        alt=""
                        style={{width:"auto",height:"auto"}}
                      />
                    </div>
                    <div
                      className="bank-card wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <Image
                        data-parallax='{"x": 0, "y": 50}'
                        src={card2}
                        alt=""
                        style={{width:"auto",height:"auto"}}
                      />
                    </div>
                    <div
                      className="bank-card wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <Image src={card1} alt="" style={{width:"auto",height:"auto"}} />
                    </div>
                    <Image className="shap one" src={linePng} alt="" />
                    <Image
                      data-parallax='{"x": 0, "y": 50, "rotateZ": 305}'
                      className="shap two"
                      src={star2}
                      alt=""
                    />
                    <Image
                      data-parallax='{"x": 0, "y": 0, "rotateZ": 305}'
                      className="shap three"
                      src={star3}
                      alt=""
                    />
                    <Image
                      data-parallax='{"x":20, "y": 0, "rotateZ": 305}'
                      className="shap four"
                      src={star4}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bank-fact-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="fact-item wow fadeInUp">
                    <div className="icon">
                      <Image src={singleIcon} alt="" />
                    </div>
                    <h3>Single term fees</h3>
                    <p>
                      Realtime problem solving is not just about time, it is
                      about time this allows you to solve within a specified
                      time problem than you would.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="fact-item wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon">
                      <Image src={worldIcon} alt="" />
                    </div>
                    <h3>Worldwide Locations</h3>
                    <p>
                      Realtime problem solving is not just about time, it is
                      about time this allows you to solve within a specified
                      time problem than you would.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="fact-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon">
                      <Image src={sheldIcon} alt="" />
                    </div>
                    <h3>Safe and protected</h3>
                    <p>
                      Realtime problem solving is not just about time, it is
                      about time this allows you to solve within a specified
                      time problem than you would.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="process-area bg-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="section-title bank-section-title text-start">
                    <span className="short-title-2 wow fadeInUp">
                      OUR PROCESS
                    </span>
                    <h1 className="wow fadeInUp">
                      Get loan from 4 simple{" "}
                      <span className="underline-shape">process</span>
                    </h1>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      Choose your training and register for free. If you are a
                      freelancer, the courses are entirely taken care of you
                      have nothing to pay and no money to advance.
                    </p>
                    <Link
                      className="read-more wow fadeInUp"
                      data-wow-delay="0.3s"
                      href="#"
                    >
                      Learn more about it <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-7 ps-lg-5">
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <h2 className="number">01</h2>
                        <h4>Check Eligibility</h4>
                        <p>
                          Choose your training and register for free if you are
                          a freelancer the courses are entirely taken care.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <h2 className="number">02</h2>
                        <h4>Apply for loan</h4>
                        <p>
                          Choose your training and register for free if you are
                          a freelancer the courses are entirely taken care.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <h2 className="number">03</h2>
                        <h4>Get Approved</h4>
                        <p>
                          Choose your training and register for free if you are
                          a freelancer the courses are entirely taken care.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                        data-wow-delay="0.6s"
                      >
                        <h2 className="number">04</h2>
                        <h4>Get your money</h4>
                        <p>
                          Choose your training and register for free if you are
                          a freelancer the courses are entirely taken care.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bank-app-showcase-area bg-white">
            <div className="container">
              <div className="row align-items-center flex-row-reverse">
                <div className="col-lg-6 offset-lg-1">
                  <div className="app-content">
                    <div className="section-title bank-section-title text-start">
                      <span className="short-title-2 wow fadeInUp">
                        Our Application
                      </span>
                      <h1 className="wow fadeInUp">
                        All your{" "}
                        <span className="underline-shape">financials</span>
                        in one single app.
                      </h1>
                      <p className="wow fadeInUp" data-wow-delay="0.3s">
                        It is a long established fact that a reader will be
                        distracted by there readable content of a page when
                        looking at its layout point .
                      </p>
                      <ul
                        className="list-unstyled feature-list wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <li>
                          {" "}
                          <i className="fas fa-check-circle"></i> It is long
                          established fact that reader will be.{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="fas fa-check-circle"></i> It is long
                          established fact distracted the readable.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <Image
                    className="wow fadeInUp"
                    data-wow-delay="0.4s"
                    src={mobilePng}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="bank-card-area">
            <div className="container">
              <div className="section-title bank-section-title mb-80">
                <span className="short-title-2 wow fadeInUp">Cards</span>
                <h1 className="wow fadeInUp text-white">
                  We offer variety of <br />
                  <span className="underline-shape">cards</span> with features
                </h1>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <ul
                    className="nav nav-tabs bank-card-tab"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item wow fadeInUp" role="presentation">
                      <button
                        className="nav-link bank-card-item active"
                        id="freelancer-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#freelancer"
                        type="button"
                        role="tab"
                        aria-controls="freelancer"
                        aria-selected="true"
                      >
                        <h5>Standard Card</h5>
                        <p>
                          Choose your training and register for free. If you are
                          a freelancer, the courses are entirely taken care you.
                        </p>
                      </button>
                    </li>
                    <li
                      className="nav-item wow fadeInUp"
                      data-wow-delay="0.2s"
                      role="presentation"
                    >
                      <button
                        className="nav-link bank-card-item"
                        id="startup-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#startup"
                        type="button"
                        role="tab"
                        aria-controls="startup"
                        aria-selected="false"
                      >
                        <h5>Premium Card</h5>
                        <p>
                          Choose your training and register for free. If you are
                          a freelancer, the courses are entirely taken care you.
                        </p>
                      </button>
                    </li>
                    <li
                      className="nav-item wow fadeInUp"
                      data-wow-delay="0.3s"
                      role="presentation"
                    >
                      <button
                        className="nav-link bank-card-item"
                        id="business-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#business"
                        type="button"
                        role="tab"
                        aria-controls="business"
                        aria-selected="false"
                      >
                        <h5>Business Card</h5>
                        <p>
                          Choose your training and register for free. If you are
                          a freelancer, the courses are entirely taken care you.
                        </p>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <div
                    className="tab-content bank-card-content wow fadeInUp"
                    id="myTabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="freelancer"
                      role="tabpanel"
                      aria-labelledby="freelancer-tab"
                    >
                      <div className="card-img">
                        <Image className="card_one" src={fCard1} alt="" />
                        <Image className="card_two" src={fCard2} alt="" />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="startup"
                      role="tabpanel"
                      aria-labelledby="startup-tab"
                    >
                      <div className="card-img">
                        <Image className="card_one" src={fCard3} alt="" />
                        <Image className="card_two" src={fCard4} alt="" />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="business"
                      role="tabpanel"
                      aria-labelledby="business-tab"
                    >
                      <div className="card-img">
                        <Image className="card_one" src={fCard5} alt="" />
                        <Image className="card_two" src={fCard6} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="integrate-area bg-white">
            <div className="container">
              <div className="section-title bank-section-title mb-80">
                <span className="short-title-2">Our Integrations</span>
                <h1 className="wow fadeInUp">
                  A variety of tools you
                  <br />
                  can <span className="underline-shape">integrate</span> with
                </h1>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="card-img">
                      <Image src={slack} alt="feature svg" />
                    </div>
                    <h4>Slack</h4>
                    <p>
                      Choose your training and register for free if you are a
                      freelancer the courses are entire taken care about the way
                      to.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-img">
                      <Image src={dropbox} alt="feature svg" />
                    </div>
                    <h4>Dropbox</h4>
                    <p>
                      Choose your training and register for free if you are a
                      freelancer the courses are entire taken care about the way
                      to.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="card-img">
                      <Image src={googleDrive} alt="feature svg" />
                    </div>
                    <h4>Google Drive</h4>
                    <p>
                      Choose your training and register for free if you are a
                      freelancer the courses are entire taken care about the way
                      to.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="card-img">
                      <Image src={jira} alt="feature svg" />
                    </div>
                    <h4>Jira</h4>
                    <p>
                      Choose your training and register for free if you are a
                      freelancer the courses are entire taken care about the way
                      to.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-img">
                      <Image src={zendesk} alt="feature svg" />
                    </div>
                    <h4>Zendesk</h4>
                    <p>
                      Choose your training and register for free if you are a
                      freelancer the courses are entire taken care about the way
                      to.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="card-img">
                      <Image src={mailchimp} alt="feature svg" />
                    </div>
                    <h4>Mailchimp</h4>
                    <p>
                      Choose your training and register for free if you are a
                      freelancer the courses are entire taken care about the way
                      to.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="map_area bg-white">
            <div className="container">
              <div className="section-title bank-section-title mb-80">
                <span className="short-title-2">Worldwide Reach</span>
                <h1>
                  Our customer base
                  <br /> reaches{" "}
                  <span className="underline-shape">worldwide</span>
                </h1>
              </div>
              <div className="map_inner">
                <Image src={mapPng} alt="" />
                <ul className="list-unstyled map_list">
                  <li className="active wow zoomIn" data-wow-delay="0.2s">
                    <Image src={flag1} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                  <li className="wow zoomIn" data-wow-delay="0.4s">
                    <Image src={flag2} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                  <li className="wow zoomIn" data-wow-delay="0.5s">
                    <Image src={flag3} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                  <li className="wow zoomIn" data-wow-delay="0.6s">
                    <Image src={flag4} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                  <li className="wow zoomIn" data-wow-delay="0.7s">
                    <Image src={flag5} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                  <li className="wow zoomIn" data-wow-delay="0.8s">
                    <Image src={flag6} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                  <li className="wow zoomIn" data-wow-delay="0.9s">
                    <Image src={flag7} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                  <li className="wow zoomIn" data-wow-delay="0.95s">
                    <Image src={flag8} alt="" style={{width:"auto",height:"auto"}} />
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="calculator-area-three">
            <LoanCalculator />
          </section>

          <section className="saas-clients-logo bg-white pt-100">
            <div className="container">
              <p
                className="wow fadeInUp clients-logo-title"
                data-wow-delay="0.3s"
              >
                Trust Trusted by over <span>10,000+</span> customers wordwide
              </p>
              <div className="row gy-md-0 gy-4 align-items-center h-100">
                <div className="col">
                  <Link href="#">
                    <Image
                      className="clients-logo img-fluid wow fadeInRight"
                      data-wow-delay="0.1s"
                      src={cLogo1}
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className="col">
                  <Link href="#">
                    <Image
                      className="clients-logo img-fluid wow fadeInRight"
                      data-wow-delay="0.3s"
                      src={cLogo2}
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className="col">
                  <Link href="#">
                    <Image
                      className="clients-logo img-fluid wow fadeInRight"
                      data-wow-delay="0.5s"
                      src={cLogo3}
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className="col">
                  <Link href="#">
                    <Image
                      className="clients-logo img-fluid wow fadeInRight"
                      data-wow-delay="0.7s"
                      src={cLogo4}
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className="col">
                  <Link href="#">
                    <Image
                      className="clients-logo img-fluid wow fadeInRight"
                      data-wow-delay="0.7s"
                      src={cLogo5}
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="cta-action-area-three bg-white">
            <div className="container">
              <div className="cta-4 cta-five cta-bg-primary">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="cta-content wow fadeInUp">
                      <h2>Try it for free</h2>
                      <p>
                        Choose your training and register for free. If you are a
                        freelancer, the courses are entirely taken care.
                      </p>
                      <Link
                        href="#"
                        className="wow fadeInUp theme-btn theme-btn-lg"
                      >
                        Get started now <i className="arrow_right-up"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 text-end">
                    <Image
                      className="wow fadeInUp"
                      data-wow-delay="0.2s"
                      src={mobileTwo}
                      alt=""
                    />
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

export default SmallBankPage;
