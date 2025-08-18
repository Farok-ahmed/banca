/* eslint-disable react/no-unescaped-entities */
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/nice-select.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/components/Layout";

const CardPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section className="banner-area-4 pt-145" id="banner_animation">
            <div className="container">
              <div className="row align-items-center pt-75 pb-60">
                <div className="col-lg-6 ">
                  <div className="banner-content mb-5 mb-sm-0">
                    <h1 className="wow fadeInUp mb-0">
                      The credit card as it should be.
                    </h1>

                    <p className="wow fadeInUp  mt-20" data-wow-delay="0.2s">
                      Without an annuity, it gives you cashback on all your
                      purchases and access to months without interest.
                    </p>
                    <Link
                      href="#"
                      className="wow fadeInUp theme-btn theme-btn-outlined_alt mt-50"
                      data-wow-delay="0.4s"
                    >
                      I want my BancaCard
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 mx-auto text-center text-sm-end">
                  <div className="hero-img wow fadeInRight">
                    <div
                      className="shape"
                      data-parallax='{"x": -120, "y": 90, "rotateZ":0}'
                    >
                      <Image
                        width={180}
                        height={150}
                        data-depth="-0.06"
                        className="layer "
                        src="/img/card/hero-img-2.png"
                        alt="img"
                      />
                    </div>
                    <div
                      className="shape"
                      data-parallax='{"x": -70, "y": 0, "rotateZ":190}'
                    >
                      <Image
                        width={70}
                        height={70}
                        src="/img/card/hero-img-3.png"
                        alt="img"
                      />
                    </div>
                    <div
                      className="shape"
                      data-parallax='{"x": -70, "y": 0, "rotateX":190}'
                    >
                      <Image
                        width={50}
                        height={50}
                        src="/img/card/hero-img-4.png"
                        alt="img"
                      />
                    </div>
                    <div
                      className="shape"
                      data-parallax='{"x": -90, "y": 20, "rotateZ":0}'
                    >
                      <Image
                        width={60}
                        height={60}
                        data-depth="-0.05"
                        className="layer "
                        src="/img/card/hero-img-5.png"
                        alt="img"
                      />
                    </div>
                    <div
                      className="shape"
                      data-parallax='{"x": -250, "y": 100, "rotateY":360}'
                    >
                      <Image
                        width={40}
                        height={40}
                        data-depth="0.05"
                        className="layer "
                        src="/img/card/hero-img-6.png"
                        alt="img"
                      />
                    </div>
                    <div
                      className="shape"
                      data-parallax='{"x": 0, "y": 150, "rotateZ":0}'
                    >
                      <Image
                        width={100}
                        height={100}
                        data-depth="-0.09"
                        className="layer "
                        src="/img/card/hero-img-7.png"
                        alt="img"
                      />
                    </div>
                    <div
                      className="shape"
                      data-parallax='{"x": 0, "y": -90, "rotateZ":0}'
                    >
                      <Image
                        width={100}
                        height={100}
                        src="/img/card/hero-img-8.png"
                        alt="img"
                      />
                    </div>
                    <div
                      className="shape"
                      data-parallax='{"x": 75, "y": -20, "rotateZ":0}'
                    >
                      <Image
                        width={200}
                        height={160}
                        data-depth="0.04"
                        className="layer "
                        src="/img/card/hero-card.png"
                        alt="img"
                      />
                    </div>
                    <Image
                      width={300}
                      height={300}
                      data-parallax='{"x": 50, "y": -50, "rotateZ":0}'
                      className="person-img "
                      src="/img/card/hero-img.png"
                      alt="card"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mplace-logo bg_white pt-80 pb-85">
            <div className="container">
              <div className="row gy-lg-0 gy-4">
                <div className="col-lg-3  wow fadeInLeft pe-0 mr-60">
                  <p>
                    ACCEPTABLE TO MILLIONS OF CUSTOMERS WORLDWIDE AND IN TOP
                    MARKETPLACES.
                  </p>
                </div>
                <div className="col-lg-8 border-start text-center pl-lg-60">
                  <div className="row gy-md-0 gy-4 align-items-center h-100">
                    <div className="col-md-3 col-6">
                      <Link href="#">
                        <Image
                          width={200}
                          height={100}
                          className="img-fluid wow fadeInRight"
                          data-wow-delay="0.1s"
                          src="/img/card/company-logo-1.png"
                          alt="logo"
                        />
                      </Link>
                    </div>
                    <div className="col-md-3 col-6">
                      <Link href="#">
                        <Image
                          width={200}
                          height={100}
                          className="img-fluid wow fadeInRight"
                          data-wow-delay="0.3s"
                          src="/img/card/company-logo-2.png"
                          alt="logo"
                        />
                      </Link>
                    </div>
                    <div className="col-md-3 col-6">
                      <Link href="#">
                        <Image
                          width={200}
                          height={100}
                          className="img-fluid wow fadeInRight"
                          data-wow-delay="0.5s"
                          src="/img/card/company-logo-3.png"
                          alt="logo"
                        />
                      </Link>
                    </div>
                    <div className="col-md-3 col-6">
                      <Link href="#">
                        <Image
                          width={180}
                          height={80}
                          className="img-fluid wow fadeInRight"
                          data-wow-delay="0.7s"
                          src="/img/card/company-logo-4.png"
                          alt="logo"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bcard-feature-area bg_disable pt-lg-125 pt-105 pb-lg-140 pb-115">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mx-auto">
                  <div className="section-title">
                    <h2 className="wow fadeInUp">
                      Great Features Of Banca Card
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-30 gy-4">
                <div className="col-xl-4 col-md-6">
                  <div
                    className="feature-card-widget-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <Image
                      width={40}
                      height={40}
                      src="/img/feature/icon-11.svg"
                      alt="icon"
                    />
                    <h4 className="mt-30 mb-15"> Online banking</h4>
                    <p>
                      Online banking, also known as internet banking or web
                      banking, is an electronic payment system.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div
                    className="feature-card-widget-5 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <Image
                      width={40}
                      height={40}
                      src="/img/feature/icon-12.svg"
                      alt="icon"
                    />
                    <h4 className="mt-30 mb-15">Up to 20.000$ limit</h4>
                    <p>
                      Online banking, also known as internet banking or web
                      banking, is an electronic payment system.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div
                    className="feature-card-widget-5 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <Image
                      width={40}
                      height={40}
                      src="/img/feature/icon-13.svg"
                      alt="icon"
                    />
                    <h4 className="mt-30 mb-15">Protection & security</h4>
                    <p>
                      Online banking, also known as internet banking or web
                      banking, is an electronic payment system.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div
                    className="feature-card-widget-5 wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <Image
                      width={40}
                      height={40}
                      src="/img/feature/icon-14.svg"
                      alt="icon"
                    />
                    <h4 className="mt-30 mb-15">Mobile application</h4>
                    <p>
                      Online banking, also known as internet banking or web
                      banking, is an electronic payment system.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div
                    className="feature-card-widget-5 wow fadeInUp"
                    data-wow-delay="0.9s"
                  >
                    <Image
                      width={40}
                      height={40}
                      src="/img/feature/icon-15.svg"
                      alt="icon"
                    />
                    <h4 className="mt-30 mb-15">Online Shopping</h4>
                    <p>
                      Online banking, also known as internet banking or web
                      banking, is an electronic payment system.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div
                    className="feature-card-widget-5 wow fadeInUp"
                    data-wow-delay="1.1s"
                  >
                    <Image
                      width={40}
                      height={40}
                      src="/img/feature/icon-16.svg"
                      alt="icon"
                    />
                    <h4 className="mt-30 mb-15">Small payments fees</h4>
                    <p>
                      Online banking, also known as internet banking or web
                      banking, is an electronic payment system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="safe-deposit-area overflow-hidden pt-lg-155 pb-lg-140 pt-125 pb-115 bg_white">
            <div className="container">
              <div className="row align-items-center gy-lg-0 gy-4">
                <div className="col-lg-6 col-md-9 mx-auto">
                  <div className="card-img">
                    <div className="logo">
                      <Image
                        width={140}
                        height={140}
                        src="/img/card/visa.png"
                        alt="logo"
                      />
                      <Image
                        width={140}
                        height={140}
                        src="/img/card/mastercard.png"
                        alt="logo"
                      />
                    </div>
                    <Image
                      width={650}
                      height={650}
                      className="bg-img"
                      src="/img/card/payment-bg.png"
                      alt="bg img"
                    />
                    <Image
                      width={400}
                      height={500}
                      className="img-fluid wow fadeInUp"
                      src="/img/card/credit-card.png"
                      alt="credit-card"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="section-title text-start">
                    <h2 className="wow fadeInUp">
                      Best Ways to Send Your Money From Anywhere You Like
                    </h2>
                    <p
                      className="border-left pl-10 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      Banca came as a solution to the next generation. Through
                      our portal, you can sit at the comfort of your home,
                      office or pretty much anywhere, and send money to
                      anywhere! Through our strong network.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="payment-system mt-80 wow fadeInRight"
                        data-wow-delay="0.1s"
                      >
                        <Image
                          width={50}
                          height={50}
                          src="/img/card/online-payment.svg"
                          alt="icon"
                        />
                        <h5 className="mt-20 mb-10">Online Payments</h5>
                        <p>
                          We acceept many type payments getway that you love.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="payment-system mt-65 wow fadeInRight"
                        data-wow-delay="0.3s"
                      >
                        <Image
                          width={50}
                          height={50}
                          src="/img/card/safebox.svg"
                          alt="icon"
                        />
                        <h5 className="mt-20 mb-10">Safe Deposit</h5>
                        <p>You can trust us for your deposit. No hidden fee.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="customize-card-area pt-lg-125 pb-lg-140 pt-105 pb-115 bg_disable"
            id="card_area_animation"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 pe-lg-0">
                  <div className="section-title mb-35 text-start">
                    <h2 className="wow fadeInUp">Customize Your Payments</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      Personalize the newly-improved Payment Options Form to
                      include all your payment methods such as, easy monthly
                      payments, credit cards
                    </p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6 order-lg-1 order-2">
                  <div
                    className="feature-card-widget-6 wow fadeInUp mt-sm-0 mt-5"
                    data-wow-delay="0.1s"
                  >
                    <div className="icon mr-20">
                      <Image
                        width={50}
                        height={50}
                        src="/img/card/money-transfer.png"
                        alt="icon"
                      />
                    </div>
                    <div className="card-content">
                      <h6>Set daily maximum transaction limitation.</h6>
                      <p>
                        The daily, weekly, monthly and yearly limits for amount
                        of transactions and total number of transactions.
                      </p>
                    </div>
                  </div>
                  <div
                    className="feature-card-widget-6 wow fadeInUp mt-30"
                    data-wow-delay="0.3s"
                  >
                    <div className="icon mr-20">
                      <Image
                        width={50}
                        height={50}
                        src="/img/card/reminder.png"
                        alt="icon"
                      />
                    </div>
                    <div className="card-content">
                      <h6>Customize your next payment schedule.</h6>
                      <p>
                        The daily, weekly, monthly and yearly limits for amount
                        of transactions and total number of transactions.
                      </p>
                    </div>
                  </div>
                  <div
                    className="feature-card-widget-6 wow fadeInUp mt-30"
                    data-wow-delay="0.5s"
                  >
                    <div className="icon mr-20">
                      <Image
                        width={50}
                        height={50}
                        src="/img/card/refresh.png"
                        alt="icon"
                      />
                    </div>
                    <div className="card-content">
                      <h6>Get latest update about your payments.</h6>
                      <p>
                        The daily, weekly, monthly and yearly limits for amount
                        of transactions and total number of transactions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-1 pl-lg-50">
                  <div className="card-img mb-5 mb-sm-0">
                    <Image
                      width={600}
                      height={720}
                      className="img-fluid"
                      src="/img/card/card-img-bg.png"
                      alt="bg image"
                    />
                    <div className="shape-1">
                      <Image
                        width={400}
                        height={400}
                        className="layer wow rotateInUpRight"
                        data-wow-delay="1.2s"
                        data-depth="0.2"
                        src="/img/card/Card-image-1.png"
                        alt="card"
                      />
                    </div>
                    <div className="shape-2">
                      <Image
                        width={400}
                        height={300}
                        className="layer wow rotateInUpRight"
                        data-wow-delay="0.6s"
                        data-depth="0.15"
                        src="/img/card/Card-image-2.png"
                        alt="card"
                      />
                    </div>
                    <div className="shape-3">
                      <Image
                        width={400}
                        height={400}
                        className="layer wow rotateInUpRight"
                        data-depth="0.3"
                        src="/img/card/Card-image-3.png"
                        alt="card"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="why-choose-area pt-125 pb-135 overflow-hidden">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mx-auto">
                  <div className="section-title">
                    <h2 className="wow fadeInUp">Why You Choose Us?</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-55 gy-lg-0 gy-4">
                <div className="col-lg-4">
                  <div
                    className="content-box pr-lg-30 pl-lg-30 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <Image
                      width={70}
                      height={70}
                      src="/img/card/layout.svg"
                      alt="icon"
                    />
                    <h4 className="mt-30 mb-15">Easy to Use</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="content-box pr-lg-30 pl-lg-30 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="line-shape">
                      <Image
                        width={650}
                        height={50}
                        className="wow zoomIn"
                        data-wow-delay="0.1s"
                        src="/img/card/line-shape.png"
                        alt="shape"
                      />
                    </div>
                    <Image
                      width={70}
                      height={70}
                      src="/img/card/salary.svg"
                      alt="icon"
                    />
                    <h4 className="mt-30 mb-15">Faster Payments</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="content-box pr-lg-30 pl-lg-30 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <Image
                      width={70}
                      height={70}
                      src="/img/card/antivirus.svg"
                      alt="icon"
                    />
                    <h4 className="mt-30 mb-15">100% Secure</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-125 pb-140 choose-card-area bg_disable">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mx-auto">
                  <div className="section-title">
                    <h2 className="wow fadeInUp">
                      Choose Card <br />
                      Considering Your Personal Needs
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      You're considering opening a credit card to build credit.
                      If this is the case, you need to make sure that you act
                      responsibly with your card.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-60 gy-lg-0 gy-4">
                <div className="col-lg-3 col-md-6">
                  <div
                    className="credit-card-box-widget wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <Image
                      width={200}
                      height={160}
                      className="w-100"
                      src="/img/card/Card-image-4.png"
                      alt="card"
                    />
                    <div className="card-content">
                      <h4>Debit Card</h4>
                      <p>
                        <span>
                          <Image
                            width={20}
                            height={20}
                            src="/img/card/icon-1.png"
                            alt="icon"
                          />
                        </span>
                        Max: 60 days
                      </p>
                      <p>
                        <span>
                          <Image
                            width={20}
                            height={20}
                            src="/img/card/icon-2.png"
                            alt="icon"
                          />
                        </span>
                        Payment fee: 1%
                      </p>
                      <p>
                        <span>
                          <Image
                            width={20}
                            height={20}
                            src="/img/card/icon-3.png"
                            alt="icon"
                          />
                        </span>
                        Max credit: $20.000
                      </p>
                      <Link href="#" className="mt-25">
                        Learn more <i className="arrow_right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="credit-card-box-widget wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <Image
                      width={200}
                      height={160}
                      className="w-100"
                      src="/img/card/Card-image-5.png"
                      alt="card"
                    />
                    <div className="card-content">
                      <h4>Credit Card</h4>
                      <p>
                        <span>
                          <Image
                            width={20}
                            height={20}
                            src="/img/card/icon-1.png"
                            alt="icon"
                          />
                        </span>
                        Max: 60 days
                      </p>
                      <p>
                        <span>
                          <Image
                            width={20}
                            height={20}
                            src="/img/card/icon-2.png"
                            alt="icon"
                          />
                        </span>
                        Payment fee: 1%
                      </p>
                      <p>
                        <span>
                          <Image
                            width={20}
                            height={20}
                            src="/img/card/icon-3.png"
                            alt="icon"
                          />
                        </span>
                        Max credit: $20.000
                      </p>
                      <Link href="#" className="mt-25">
                        Learn more <i className="arrow_right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="credit-card-box-widget wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <Image
                      width={200}
                      height={160}
                      className="w-100"
                      src="/img/card/Card-image-6.png"
                      alt="card"
                    />
                    <div className="card-content">
                      <h4>MasterCard</h4>
                      <p>
                        <span>
                          <Image
                            width={20}
                            height={20}
                            src="/img/card/icon-1.png"
                            alt="icon"
                          />
                        </span>
                        Max: 60 days
                      </p>
                      <p>
                        <span>
                          <Image
                            width={20}
                            height={20}
                            src="/img/card/icon-2.png"
                            alt="icon"
                          />
                        </span>
                        Payment fee: 1%
                      </p>
                      <p>
                        <span>
                          <Image
                            width={20}
                            height={20}
                            src="/img/card/icon-3.png"
                            alt="icon"
                          />
                        </span>
                        Max credit: $20.000
                      </p>
                      <Link href="#" className="mt-25">
                        Learn more <i className="arrow_right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="credit-card-box-widget wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <Image
                      width={200}
                      height={160}
                      className="w-100"
                      src="/img/card/Card-image-7.png"
                      alt="card"
                    />
                    <div className="card-content">
                      <h4>Visa Card</h4>
                      <p>
                        <span>
                          <Image
                            width={20}
                            height={20}
                            src="/img/card/icon-1.png"
                            alt="icon"
                          />
                        </span>
                        Max: 60 days
                      </p>
                      <p>
                        <span>
                          <Image
                            width={20}
                            height={20}
                            src="/img/card/icon-2.png"
                            alt="icon"
                          />
                        </span>
                        Payment fee: 1%
                      </p>
                      <p>
                        <span>
                          <Image
                            width={20}
                            height={20}
                            src="/img/card/icon-3.png"
                            alt="icon"
                          />
                        </span>
                        Max credit: $20.000
                      </p>
                      <Link href="#" className="mt-25">
                        Learn more <i className="arrow_right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="cta-3 pt-90 pb-75">
            <div className="img-shapes">
              <div
                className="shape"
                data-parallax='{"x": 0, "y": 0, "rotateZ":20}'
              >
                <Image
                  width={80}
                  height={60}
                  src="/img/card/right-arrow.png"
                  alt="img"
                />
              </div>

              <div
                className="shape"
                data-parallax='{"x": 200, "y": 90, "rotateZ":0}'
              >
                <div className="fly-msg">
                  <Image
                    width={110}
                    height={110}
                    src="/img/card/mail.png"
                    alt=""
                  />
                  <Image
                    width={110}
                    height={90}
                    src="/img/card/wings-1.png"
                    alt=""
                  />
                  <Image
                    width={110}
                    height={90}
                    src="/img/card/wings-2.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="shape"
                data-parallax='{"x": 0, "y": 0, "rotateZ":-6}'
              >
                <Image
                  width={200}
                  height={220}
                  className="wow fadeInRight"
                  src="/img/card/postbox.png"
                  alt="img"
                />
              </div>
              <div
                className="shape"
                data-parallax='{"x": -200, "y": 0, "rotateZ":0}'
              >
                <Image
                  width={60}
                  height={40}
                  src="/img/card/cloud.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="cta-content text-black wow fadeInLeft">
                    <h5>Want to know about our offers first?</h5>
                    <h2>Subscribe our newsletter</h2>

                    <div className="input-group mt-40">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your  email address"
                      />
                      <Link
                        href="#"
                        className="input-append theme-btn theme-btn-lg"
                        style={{ backgroundColor: "#171d24", color: "#fff" }}
                      >
                        Subscribe
                      </Link>
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

export default CardPage;
