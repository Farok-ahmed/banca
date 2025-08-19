import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/css/nice-select.css";
import "nouislider/dist/nouislider.css";
import "@/styles/css/jquery.fancybox.min.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import FAQAccordion from "@/components/FaqAccordion";
import Image from "next/image";
import Link from "next/link";
import FeatureSlider from "@/components/SimpleAccordion";
import SimplebancaSlider from "@/components/SimplebancaSlider";
import DefaultLayout from "@/components/Layout";
import SimpleCalculator from "./SimpleCalculator";
// Images (static imports)
import slideShape1 from "@/assets/img/banner/slide-shape-1.png";
import slideShape2 from "@/assets/img/banner/slide-shape-2.png";
import slideShape3 from "@/assets/img/banner/slide-shape-3.png";
import bannerPerson2 from "@/assets/img/banner/person-2.png";
import helpAdImg1 from "@/assets/img/help-ad/img-1.png";
import helpAdShape from "@/assets/img/help-ad/shape.png";
import logo1 from "@/assets/img/banca-corporate/logo-1.png";
import logo2 from "@/assets/img/banca-corporate/logo-2.png";
import logo3 from "@/assets/img/banca-corporate/logo-3.png";
import logo4 from "@/assets/img/banca-corporate/logo-4.png";
import logo5 from "@/assets/img/banca-corporate/logo-5.png";
import article1 from "@/assets/img/blog/article-1.png";
import article2 from "@/assets/img/blog/article-2.png";
import article3 from "@/assets/img/blog/article-3.png";
import article4 from "@/assets/img/blog/article-4.png";
import faqShape from "@/assets/img/faq/Shape.png";
import faqAdvisor from "@/assets/img/faq/advisor.png";
import helpCtaBg from "@/assets/img/help-ad/bg-shape.png";
const SampleBancaPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section className="banner-area-3 pt-90" id="banner_animation2">
            <div className="bg-slides">
              <div
                className="slide"
                data-parallax='{"x": 220, "y": 0, "rotateZ":0}'
              >
                <Image
                  className="wow slideInRight"
                  data-wow-delay="0.2s"
                  src={slideShape1}
                  priority
                  alt="slide shape"
                />
              </div>
              <div
                className="slide"
                data-parallax='{"x": 270, "y": 0, "rotateZ":0}'
              >
                <Image
                  className="wow slideInRight"
                  data-wow-delay="0.6s"
                  src={slideShape2}
                  alt="slide shape"
                />
              </div>
              <div
                className="slide"
                data-parallax='{"x": 330, "y": 0, "rotateZ":0}'
              >
                <Image
                  className="wow slideInRight"
                  data-wow-delay="1.3s"
                  src={slideShape3}
                  alt="slide shape"
                />
              </div>
            </div>
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-7 pt-100 pt-lg-200 pb-lg-200 pb-100">
                  <div className="banner-content pb-20 pt-20">
                    <h1 className="wow fadeInUp" data-wow-delay="0.1s">
                      Compare Loans From Several Banks Find The Cheapest Loan
                    </h1>

                    <Link
                      href="/loan"
                      className="wow fadeInUp mt-50 theme-btn theme-btn-rounded-2 theme-btn-lg theme-btn-alt"
                      data-wow-delay="0.3s"
                    >
                      Apply Now
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block position-relative">
                  <Image
                    className="person-img "
                    src={bannerPerson2}
                    alt="banner person"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="feature-calculator pt-120 pb-140 bg_white">
            <div className="container">
              <FeatureSlider />
              <SimpleCalculator />
            </div>
          </section>

          <section className="help-ad-area pt-125 pb-115 overflow-hidden">
            <div className="container">
              <div className="section-title">
                <h2>We Have Helped More Than 10,000 Users</h2>
              </div>

              <div className="row pt-40">
                <div className="col-lg-10 mx-auto">
                  <div className="row">
                    <div className="col-12">
                      <Image
                        className="main-img img-fluid"
                        src={helpAdImg1}
                        alt="help ad"
                      />
                    </div>
                    <div className="col-lg-5">
                      <div className="offers">
                        <ul>
                          <li>
                            {" "}
                            <span>
                              <i className="icon_check"></i>
                            </span>{" "}
                            Offers from several banks
                          </li>
                          <li>
                            {" "}
                            <span>
                              <i className="icon_check"></i>
                            </span>{" "}
                            Free & no obligation{" "}
                          </li>
                          <li>
                            {" "}
                            <span>
                              <i className="icon_check"></i>
                            </span>{" "}
                            Compare safely and securely
                          </li>
                          <li>
                            {" "}
                            <span>
                              <i className="icon_check"></i>
                            </span>{" "}
                            Offer within a few hours
                          </li>
                        </ul>
                        <div className="shape">
                          {" "}
                          <Image src={helpAdShape} alt="shape" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <p className="pt-lg-60">
                        Compare multiple banks with just one non-binding
                        application. We save you the hassle of checking the
                        price at each bank.
                      </p>
                      <p className="py-4">
                        It takes 2 min. To fill out the application, you
                        immediately get quotes from banks and can choose the
                        best quote.
                      </p>
                      <p>
                        {" "}
                        We save you not only time, but in many cases also many
                        thousands of kroner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="banca-corporate bg_white pt-125 pb-110">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="section-title">
                    <h2 className="wow fadeInUp">
                      Banca Cooperates With These Banks
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      {" "}
                      <span>3000+ Companies</span> Trust Sturtaplanding to build
                      landing page for their <span> dream product</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between mt-35 gy-sm-0 gy-4  text-center text-lg-start">
                <div className="col-lg-2 col-6">
                  <Link
                    href="#"
                    className="single-brand wow fadeInRight"
                    data-wow-delay="0.1s"
                  >
                    <Image className="img-fluid" src={logo1} alt="logo" />
                  </Link>
                </div>
                <div className="col-lg-2 col-6">
                  <Link
                    href="#"
                    className="single-brand wow fadeInRight"
                    data-wow-delay="0.3s"
                  >
                    <Image className="img-fluid" src={logo2} alt="logo" />
                  </Link>
                </div>
                <div className="col-lg-2 col-6">
                  <Link
                    href="#"
                    className="single-brand wow fadeInRight"
                    data-wow-delay="0.5s"
                  >
                    <Image className="img-fluid" src={logo3} alt="logo" />
                  </Link>
                </div>
                <div className="col-lg-2 col-6">
                  <Link
                    href="#"
                    className="single-brand wow fadeInRight"
                    data-wow-delay="0.7s"
                  >
                    <Image className="img-fluid" src={logo4} alt="logo" />
                  </Link>
                </div>
                <div className="col-lg-2 col-6 d-none d-lg-block">
                  <Link
                    href="#"
                    className="single-brand wow fadeInRight"
                    data-wow-delay="0.9s"
                  >
                    <Image className="img-fluid" src={logo5} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="row justify-content-between gy-sm-0 gy-4 mt-20 text-center text-lg-start">
                <div className="col-lg-2 col-6">
                  <Link
                    href="#"
                    className="single-brand wow fadeInRight"
                    data-wow-delay="0.1s"
                  >
                    <Image className="img-fluid" src={logo1} alt="logo" />
                  </Link>
                </div>
                <div className="col-lg-2 col-6">
                  <Link
                    href="#"
                    className="single-brand wow fadeInRight"
                    data-wow-delay="0.3s"
                  >
                    <Image className="img-fluid" src={logo2} alt="logo" />
                  </Link>
                </div>
                <div className="col-lg-2 col-6">
                  <Link
                    href="#"
                    className="single-brand wow fadeInRight"
                    data-wow-delay="0.5s"
                  >
                    <Image className="img-fluid" src={logo3} alt="logo" />
                  </Link>
                </div>
                <div className="col-lg-2 col-6">
                  <Link
                    href="#"
                    className="single-brand wow fadeInRight"
                    data-wow-delay="0.7s"
                  >
                    <Image className="img-fluid" src={logo4} alt="logo" />
                  </Link>
                </div>
                <div className="col-lg-2 col-6 d-none d-lg-block">
                  <Link
                    href="#"
                    className="single-brand wow fadeInRight"
                    data-wow-delay="0.9s"
                  >
                    <Image className="img-fluid" src={logo5} alt="logo" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="articles-area pt-125 pb-140">
            <div className="container">
              <div className="section-title d-flex flex-wrap justify-content-between text-start align-items-center">
                <h2 className="mb-3 mb-sm-0 wow fadeInRight">
                  More About Finance & Loans
                </h2>
                <Link className="wow fadeInLeft" href="/blog-listing">
                  See All Articles <i className="arrow_right"></i>
                </Link>
              </div>
              <div className="row mt-60 gy-4 gy-lg-0">
                <div className="col-lg-3 col-md-6">
                  <div
                    className="blog-widget-1 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <Image
                      className="w-100"
                      src={article1}
                      style={{width:"auto",height:"auto"}}
                      alt="news image"
                    />
                    <div className="blog-content pr-10 pl-10">
                      <h6>
                        <Link href="/blog-details">
                          Credit rating as a private customer
                        </Link>
                      </h6>
                      <div className="blog-date">
                        <i className="icon_calendar"></i>
                        <span>February 25, 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="blog-widget-1 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <Image
                      className="w-100"
                      src={article2}
                      style={{width:"auto",height:"auto"}}
                      alt="news image"
                    />
                    <div className="blog-content pr-10 pl-10">
                      <h6>
                        <Link href="/blog-details">
                          Get hold of your private loans with a promissory
                        </Link>
                      </h6>
                      <div className="blog-date">
                        <i className="icon_calendar"></i>
                        <span>February 25, 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="blog-widget-1 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <Image
                      className="w-100"
                      src={article3}
                      style={{width:"auto",height:"auto"}}
                      alt="news image"
                    />
                    <div className="blog-content pr-10 pl-10">
                      <h6>
                        <Link href="/blog-details">
                          What is APR and what can you actually use it?
                        </Link>
                      </h6>
                      <div className="blog-date">
                        <i className="icon_calendar"></i>
                        <span>February 25, 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="blog-widget-1 wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <Image
                      className="w-100"
                      src={article4}
                      style={{width:"auto",height:"auto"}}
                      alt="news image"
                    />
                    <div className="blog-content pr-10 pl-10">
                      <h6>
                        <Link href="/blog-details">
                          Superfast loans for your dream home
                        </Link>
                      </h6>
                      <div className="blog-date">
                        <i className="icon_calendar"></i>
                        <span>February 25, 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SimplebancaSlider />

          <section
            className="advisor-area pt-130  pb-140 overflow-hidden"
            id="MouseMoveAnimation"
          >
            <div className="container">
              <div className="row gy-4 gy-lg-0">
                <div className="col-lg-6 pr-lg-75">
                  <div className="section-title text-start">
                    <h2 className="mb-0 wow fadeInUp">
                      Our Advisors Are Ready To Help You
                    </h2>
                  </div>

                  <div
                    className="advisor-img mt-45 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="shape ">
                      <div className="box">
                        <Image
                          className="layer layer2"
                          data-depth="0.5"
                          src={faqShape}
                          alt="shape"
                        />
                      </div>
                      <div className="circle-shape"></div>
                    </div>
                    <Image
                      className="main-img"
                      src={faqAdvisor}
                      alt="advisor"
                    />

                    <div className="work-time">
                      <div className="circle-shape"></div>
                      All weekdays <span>10.00 - 18.00</span>
                    </div>
                  </div>

                  <div
                    className="row mt-4 gy-md-0 gy-3 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="col-md-6">
                      <Link
                        href="tel:01234567890"
                        className="theme-btn theme-btn-primary_alt theme-btn-rounded d-flex align-items-center justify-content-center"
                      >
                        <i className="icon_phone"></i> 01234-567890
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <Link
                        href="mailto:bancainfo@email.com"
                        className="theme-btn theme-btn-primary_alt theme-btn-rounded d-flex align-items-center justify-content-center"
                      >
                        <i className="icon_mail_alt "></i> info@banca.com
                      </Link>
                    </div>
                  </div>
                </div>

                <FAQAccordion />
              </div>
            </div>
          </section>

          <section
            className="help-cta pt-75 pb-90"
            style={{
              backgroundImage: `url(${helpCtaBg.src})`,
            }}
          >
            <div className="container">
              <div className="section-title">
                <h2>We Help With Both New Loan And Collective Loan</h2>
              </div>
              <div className="row">
                <div className="col-md-8 mx-auto text-center">
                  <p>
                    Whether you need to borrow for renovation, car, holiday or
                    want to combine your loans into one single loan, we will
                    help you
                  </p>
                  <div className="mt-40">
                    <Link
                      href="/loan"
                      className="theme-btn theme-btn-rounded me-sm-4 mt-3 mt-sm-0"
                    >
                      New Loan
                    </Link>
                    <Link
                      href="/loan-details"
                      className="theme-btn theme-btn-rounded theme-btn-alt mt-3 mt-sm-0"
                    >
                      Collective Loan
                    </Link>
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

export default SampleBancaPage;
