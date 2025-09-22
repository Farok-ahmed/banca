import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/css/nice-select.css";
import "nouislider/dist/nouislider.css";
import "@/styles/css/jquery.fancybox.min.css";
import "flatpickr/dist/flatpickr.min.css";
import { fadeInRight, fadeInLeft, fadeInUp } from "@/components/animation";
import FinanceAccordion from "@/components/FinanceAccordion";
import PricingPlan from "@/components/PricingPlan";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/components/Layout";
// Assets
import gridPng from "@/assets/img/saas-app/grid.png";
import dashboardPng from "@/assets/img/saas-app/dashboard.png";
import cLogo1 from "@/assets/img/saas-app/c_logo_1.png";
import cLogo2 from "@/assets/img/saas-app/c_logo_2.png";
import cLogo3 from "@/assets/img/saas-app/c_logo_3.png";
import cLogo4 from "@/assets/img/saas-app/c_logo_4.png";
import cLogo5 from "@/assets/img/saas-app/c_logo_5.png";
import clapSvg from "@/assets/img/saas-app/clap.svg";
import handSvg from "@/assets/img/saas-app/hand.svg";
import houseSvg from "@/assets/img/saas-app/house.svg";
import featuresImgOne from "@/assets/img/saas-app/features_img_one.png";
import featuresImgTwo from "@/assets/img/saas-app/features_img_two.png";
import handPng from "@/assets/img/saas-app/hand.png";
import travelExplorePng from "@/assets/img/saas-app/travel_explore.png";
import gridTwoPng from "@/assets/img/saas-app/grid-two.png";
import appShowcase1 from "@/assets/img/saas-app/app_showcase1.png";
import appShowcase2 from "@/assets/img/saas-app/app_showcase2.png";
import dashApp from "@/assets/img/saas-app/dash_app.png";
import dashAppSmall from "@/assets/img/saas-app/dash_app_small.png";
import dashAppSmall2 from "@/assets/img/saas-app/dash_app_small2.png";
import subscribeDashboard from "@/assets/img/saas-app/subscribe-dashboard.png";
import AnimationDiv, { AnimationH1, AnimationH2, AnimationH4, AnimationH5, AnimationImg, AnimationLink, AnimationP } from "@/components/animation/AnimationDiv";

const FinanceSassAppPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section className="banner-saas-area">
            <Image className="shape_img" src={gridPng} alt="grid images" />
            <div className="container">
              <div className="row justify-content-center">
                <div className="saas-banner-content text-center">
                  <AnimationH5
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="wow fadeInUp"
                    data-wow-delay="0.35s"
                  >
                    WeLCOME TO THE Best banking WEb application ⭐
                  </AnimationH5>
                  <AnimationH1
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="wow fadeInUp"
                    data-wow-delay="0.45s"
                  >
                    The modern banking <span>solution </span>
                    for your business in one app.
                  </AnimationH1>
                  <AnimationP
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="wow fadeInUp"
                    data-wow-delay="0.55s"
                  >
                    Inventore veritatis et architecto beatae vitaie dicta
                    explicabore nemo ipsam volupetateme voluptas aspernatur
                    magni.
                  </AnimationP>
                  <div className="d-flex flex-column flex-sm-row justify-content-center mt-25 subscribe-field">
                    <AnimationLink
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      href="/loan"
                      data-wow-delay="0.5s"
                      className="wow fadeInUp theme-btn theme-btn-lg mt-50"
                    >
                      Get started now
                      <i className="arrow_right-up"></i>
                    </AnimationLink>
                    <AnimationLink
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      href="/"
                      className="wow fadeInUp mt-50 theme-btn theme-btn-lg theme-btn-alt"
                      data-wow-delay="0.5s"
                    >
                      Learn more
                    </AnimationLink>
                  </div>
                </div>
              </div>
              <AnimationDiv
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="dahbord_img wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <Image src={dashboardPng} alt="saas" style={{width:'auto',height:"auto"}} />
              </AnimationDiv>
            </div>
          </section>

          <section className="saas-clients-logo bg-white pt-90 pb-85">
            <div className="container">
              <AnimationP
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="wow fadeInUp clients-logo-title"
                data-wow-delay="0.3s"
              >
                Trust Trusted by over <span>10,000+</span> customers wordwide
              </AnimationP>
              <div className="row gy-md-0 gy-4 align-items-center h-100">
                <div className="col">
                  <AnimationLink
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    href="#"
                  >
                    <Image
                      className="clients-logo img-fluid wow fadeInRight"
                      data-wow-delay="0.1s"
                      src={cLogo1}
                      alt="logo"
                    />
                  </AnimationLink>
                </div>
                <div className="col">
                  <AnimationLink
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    href="#"
                  >
                    <Image
                      className="clients-logo img-fluid wow fadeInRight"
                      data-wow-delay="0.3s"
                      src={cLogo2}
                      alt="logo"
                    />
                  </AnimationLink>
                </div>
                <div className="col">
                  <AnimationLink
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    href="#"
                  >
                    <Image
                      className="clients-logo img-fluid wow fadeInRight"
                      data-wow-delay="0.5s"
                      src={cLogo3}
                      alt="logo"
                    />
                  </AnimationLink>
                </div>
                <div className="col">
                  <AnimationLink
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    href="#"
                  >
                    <Image
                      className="clients-logo img-fluid wow fadeInRight"
                      data-wow-delay="0.7s"
                      src={cLogo4}
                      alt="logo"
                    />
                  </AnimationLink>
                </div>
                <div className="col">
                  <AnimationLink
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    href="#"
                  >
                    <Image
                      className="clients-logo img-fluid wow fadeInRight"
                      data-wow-delay="0.7s"
                      src={cLogo5}
                      alt="logo"
                    />
                  </AnimationLink>
                </div>
              </div>
            </div>
          </section>

          <section className="saas-features-card-area bg-white">
            <div className="container">
              <div className="saas-section-title text-center mb-60">
                <h2>
                  3 easy to follow <span>process</span>
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but them
                  <br /> majority have suffered alteration form injected.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <AnimationDiv
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="card-img">
                      <Image src={clapSvg} alt="feature svg" />
                    </div>
                    <h4>Making genuine loans</h4>
                    <p>
                      There are many variations in passage lorem Ipsum available
                      of them will.
                    </p>
                    <Link href="#" className="text-btn">
                      Learn More
                    </Link>
                  </AnimationDiv>
                </div>
                <div className="col-lg-4">
                  <AnimationDiv
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-img">
                      <Image src={handSvg} alt="feature svg" />
                    </div>
                    <h4>Almost limitless amount</h4>
                    <p>
                      There are many variations in passage lorem Ipsum available
                      of them will.
                    </p>
                    <Link href="#" className="text-btn">
                      Learn More
                    </Link>
                  </AnimationDiv>
                </div>
                <div className="col-lg-4">
                  <AnimationDiv
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-8 saas-feature-card wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <div className="card-img">
                      <Image src={houseSvg} alt="feature svg" />
                    </div>
                    <h4>Safe & secure banking</h4>
                    <p>
                      There are many variations in passage lorem Ipsum available
                      of them will.
                    </p>
                    <Link href="#" className="text-btn">
                      Learn More
                    </Link>
                  </AnimationDiv>
                </div>
              </div>
            </div>
          </section>

          <section className="saas-features-area bg-white">
            <div className="container">
              <div className="saas-features-item row align-items-center">
                <div className="col-lg-6">
                  <div className="saas-features-img">
                    <AnimationImg
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInRight"
                      data-wow-delay="0.3s"
                      src={featuresImgOne.src}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="saas-features-content">
                    <div className="saas-section-title mb-50">
                      <AnimationH2
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="wow fadeInUp"
                      >
                        Simplify your finance <span>banking</span> and loan
                      </AnimationH2>
                      <AnimationP
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="wow fadeInUp"
                        data-wow-delay="0.2s"
                      >
                        Design Season is a collaboration between Leicester is
                        creative hub LCB based in the city is cultural quarter
                        and designers and design businesses all over the city &
                        county
                      </AnimationP>
                    </div>
                    <div className="d-flex">
                      <AnimationDiv
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="features-icon-box wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="round_icon">
                          <Image src={handPng} alt="" />
                        </div>
                        <div className="text">
                          <h4>Single term fees</h4>
                          <p>Easily copy and paste Pricing components</p>
                        </div>
                      </AnimationDiv>
                      <AnimationDiv
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="features-icon-box two wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <div className="round_icon">
                          <Image src={travelExplorePng} alt="" />
                        </div>
                        <div className="text">
                          <h4>150+ Locations</h4>
                          <p>Easily copy and paste Pricing components</p>
                        </div>
                      </AnimationDiv>
                    </div>
                  </div>
                </div>
              </div>
              <div className="saas-features-item row align-items-center flex-row-reverse">
                <div className="col-lg-6">
                  <div className="saas-features-img">
                    <AnimationImg
                      variants={fadeInLeft}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInLeft"
                      data-wow-delay="0.2s"
                      src={featuresImgTwo.src}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="saas-features-content">
                    <AnimationDiv
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="saas-section-title mb-50 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <h2>
                        We have reputable <span>customer</span> feedbacks
                      </h2>
                      <p>
                        Design Season is a collaboration between Leicester is
                        creative hub LCB based in the city is cultural quarter
                        and designers and design businesses all over the city &
                        county
                      </p>
                    </AnimationDiv>
                    <div className="d-flex">
                      <AnimationDiv
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="features-icon-box feedback d-flex wow fadeInUp"
                        data-wow-delay="0.4s"
                      >
                        <div className="text">
                          <h4>500+</h4>
                          <p>Active customers use our application</p>
                        </div>
                      </AnimationDiv>
                      <AnimationDiv
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="features-icon-box feedback d-flex wow fadeInUp"
                        data-wow-delay="0.5s"
                      >
                        <div className="text">
                          <h4>$105k</h4>
                          <p>Loans given out in the last few months</p>
                        </div>
                      </AnimationDiv>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="app-showcase-area">
            <Image className="shape_img" src={gridTwoPng} alt="" />
            <div className="container">
              <AnimationDiv
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="saas-section-title text-center mb-60 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h2>
                  All your <span>finance</span> in one app
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but them
                  <br /> majority have suffered alteration form injected.
                </p>
              </AnimationDiv>
              <div className="row">
                <div className="col-lg-6">
                  <div className="app-showcase-item">
                    <div
                      className="round wow floatingBubbles"
                      data-wow-delay="0.3s"
                    ></div>
                    <AnimationH4
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      Simple loan register process
                    </AnimationH4>
                    <AnimationP
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      I transform thorn problems into elagant solutions using
                      visuals design use this pack illustrations for many.
                    </AnimationP>
                    <AnimationImg
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                      data-wow-delay="0.9s"
                      src={appShowcase1.src}
                      style={{width:"auto",height:"auto"}}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="app-showcase-item box-two">
                    <div
                      className="round wow floatingBubbles"
                      data-wow-delay="0.3s"
                    ></div>
                    <AnimationH4
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      Access to secure banking
                    </AnimationH4>
                    <AnimationP
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      I transform thorn problems into elagant solutions using
                      visuals design use this pack illustrations for many.
                    </AnimationP>
                    <AnimationImg
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                      data-wow-delay="0.9s"
                      src={appShowcase2.src}
                      style={{width:"auto",height:"auto"}}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="app-showcase-item box-three">
                    <AnimationDiv
                      variants={fadeInLeft}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="app-text wow fadeInLeft"
                      data-wow-delay="0.2s"
                    >
                      <h3>Calculate and confirm your loans</h3>
                      <p>
                        I transform thorn problems into elagant solutions using
                        visuals design use this pack illustrations for many.
                      </p>
                      <AnimationLink
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        href="#"
                        className="wow fadeInUp theme-btn theme-btn-lg theme-btn-alt"
                      >
                        Visit loan calculator
                      </AnimationLink>
                    </AnimationDiv>
                    <AnimationDiv
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="img wow fadeInRight"
                      data-wow-delay="0.4ss"
                    >
                      <Image src={dashApp} alt="" />
                      <div className="app_shap_img one">
                        <Image
                          data-parallax='{"x": 0, "y": -80}'
                          src={dashAppSmall}
                          alt=""
                        />
                      </div>
                      <div className="app_shap_img two">
                        <Image
                          data-parallax='{"x": 0, "y": 50}'
                          src={dashAppSmall2}
                          alt=""
                        />
                      </div>
                    </AnimationDiv>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <PricingPlan />

          <FinanceAccordion />

          <section className="saas-subscribe-area cta-4">
            <div className="container">
              <AnimationDiv
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="cta-content wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h2 className="mb-10">Start your free trial !</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available.
                </p>
                <div className="d-flex flex-column flex-sm-row mt-30">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email address"
                  />
                  <Link
                    href="#"
                    className="input-append theme-btn theme-btn-lg ms-sm-3"
                  >
                    Subscribe
                  </Link>
                </div>
                <ul className="list-unstyled feature-list">
                  <li>
                    <i className="fas fa-check-circle"></i> Get 30 day free
                    trial
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> No Spamming
                  </li>
                </ul>
              </AnimationDiv>
            </div>
            <AnimationImg
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="saas_dash_img wow fadeInUp"
              data-parallax='{"x": -40, "y": 50}'
              data-wow-delay="0.2s"
              src={subscribeDashboard.src}
              alt=""
            />
          </section>
        </main>
      </DefaultLayout>
    </>
  );
};

export default FinanceSassAppPage;
