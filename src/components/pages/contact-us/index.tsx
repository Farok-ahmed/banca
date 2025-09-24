/* eslint-disable react/no-unescaped-entities */
import AboutAccordion from "@/components/AboutAccordion";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/components/animation";
import DefaultLayout from "@/components/Layout";
import ContactForm from "./ContactForm";
// Assets
import breadcrumbBg4 from "@/assets/img/breadcrumb/bg-4.jpg";
import helpIcon1 from "@/assets/img/contact/help-icon-1.svg";
import helpIcon2 from "@/assets/img/contact/help-icon-2.svg";
import helpIcon3 from "@/assets/img/contact/help-icon-3.svg";
import ctaWave from "@/assets/img/cta/wave.png";
import { FaPhoneAlt, FaRegEnvelopeOpen } from "react-icons/fa";
import AnimationDiv, { AnimationH2, AnimationP } from "@/components/animation/AnimationDiv";

const ContactUsPage = () => {
  return (
    <>
      <DefaultLayout footerType="one">
        <main>
          <section className="breadcrumb-area">
            <div
              className="breadcrumb-widget  breadcrumb-widget-3 pt-200 pb-200"
              style={{ backgroundImage: `url(${breadcrumbBg4.src})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 mx-auto">
                    <div className="breadcrumb-content pt-100">
                      <h1>We are here to help.</h1>
                      <ul>
                        <li>
                          <Link href="/">home</Link>
                        </li>
                        <li>Contact Us</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-140 pb-140 get-touch-area bg_white">
            <div className="container">
              <div className="row gy-4 gy-lg-0">
                <div className="col-lg-5">
                  <div className="section-title text-start">
                    <h2>Get in touch with us.</h2>
                    <p>
                      Want to get in touch? We'd love to hear from you. Here's
                      how you can reach us...
                    </p>
                  </div>
                  <div className="row mt-55">
                    <div className="col-sm-6">
                      <div className="get-touch-box">
                        <div className="icon">
                          <FaPhoneAlt color="#3a86e8" style={{marginTop:"-6px"}} />
                        </div>
                        <div>
                          <p>Call the helpline:</p>
                          <span>(02) 4003 7936</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="get-touch-box">
                        <div className="icon">
                          <FaRegEnvelopeOpen color="#3a86e8" style={{marginTop:"-6px"}} />
                        </div>
                        <div>
                          <p>Email us:</p>
                          <span>hello@banca.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="get-touch-box mt-30">
                        <div className="icon">
                          <i className="icon_pin_alt "></i>
                        </div>
                        <div>
                          <p>Location</p>
                          <span>
                            1550 Bryant Street STE 750, San Francisco, CA 94103
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="get-touch-box mt-30">
                        <div className="icon">
                          <i className="icon_clock_alt "></i>
                        </div>
                        <div>
                          <p>Work Hours</p>
                          <span>
                            Monday - Saturday: 9am - 7pm Sunday: 12am — 6pm
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <div className="contact-form-widget">
                    <ContactForm/>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-125 pb-140 bg_disable">
            <div className="container">
              <div className="row ">
                <div className="col-md-8 mx-auto">
                  <div className="section-title">
                    <AnimationH2 
                      className="wow fadeInUp"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      Need more help?
                    </AnimationH2>
                    <AnimationP 
                      className="wow fadeInUp" 
                      data-wow-delay="0.3s"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor.
                    </AnimationP>
                  </div>
                </div>
              </div>
              <div className="row mt-60 gy-lg-0 gy-4">
                <div className="col-lg-4">
                  <AnimationDiv
                    className="feature-card-widget-4 wow fadeInUp"
                    data-wow-delay="0.1s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image src={helpIcon1} alt="icon" />
                    <h5 className="mt-4 mb-10">Articles & Guides</h5>
                    <p>
                      100+ articles to get the information you need when you
                      need it.
                    </p>
                    <Link
                      href="#"
                      className="theme-btn theme-btn-outlined mt-30"
                    >
                      Visit Knowledge Base
                    </Link>
                  </AnimationDiv>
                </div>
                <div className="col-lg-4">
                  <AnimationDiv
                    className="feature-card-widget-4 wow fadeInUp"
                    data-wow-delay="0.3s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image src={helpIcon2} alt="icon" />
                    <h5 className="mt-4 mb-10">Technical Support</h5>
                    <p>
                      If you ever need help, you can chat directly with our
                      support team!
                    </p>
                    <Link
                      href="#"
                      className="theme-btn theme-btn-outlined mt-30"
                    >
                      Chat With Support
                    </Link>
                  </AnimationDiv>
                </div>
                <div className="col-lg-4">
                  <AnimationDiv
                    className="feature-card-widget-4 wow fadeInUp"
                    data-wow-delay="0.5s"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <Image src={helpIcon3} alt="icon" />
                    <h5 className="mt-4 mb-10">Social Media Support</h5>
                    <p>
                      Doing customer support on social media requires a
                      dedicated strategy.{" "}
                    </p>
                    <div className="social-button mt-35 mb-10">
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
                  </AnimationDiv>
                </div>
              </div>
            </div>
          </section>

          <AboutAccordion />

          <section className="cta-area pt-60 bg_white">
            <div className="container">
              <div className="row">
                <div className="col-md-12 position-relative">
                  <div
                    className="cta cta-bg-violet"
                    style={{ backgroundImage: `url(${ctaWave.src})` }}
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-7">
                        <AnimationDiv 
                          className="cta-content wow fadeInRight text-center text-lg-start"
                          variants={fadeInRight}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                        >
                          <h2 className="mb-0">
                            Meet Banca, the financial partner you can bank on.
                          </h2>
                        </AnimationDiv>
                      </div>

                      <div className="col-lg-5 mt-4 mt-lg-0 text-center ">
                        <div className="cta-content  text-center text-lg-end">
                          <AnimationDiv
                            variants={fadeInLeft}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                          >
                            <Link
                              href="#"
                              className="theme-btn theme-btn-alt wow fadeInLeft cta-text-violet"
                            >
                              Open an Account
                            </Link>
                          </AnimationDiv>
                        </div>
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

export default ContactUsPage;
