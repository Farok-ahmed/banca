import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/nice-select.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/css/jquery-editable-select.css";
import "@/styles/css/jquery.fancybox.min.css";
import "@/styles/css/nouislider.min.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";

import BankCalculator from "@/components/BankCalculator";
import Image from "next/image";
import Link from "next/link";
import TestimonialSlider from "@/components/testimonial-slider";
import DefaultLayout from "@/components/Layout";
// Assets
import loanBanner from "@/assets/img/banner/loan-banner.png";
import stepIcon1 from "@/assets/img/steps/icon-1.png";
import stepIcon2 from "@/assets/img/steps/icon-2.png";
import stepIcon3 from "@/assets/img/steps/icon-3.png";
import applyIcon11 from "@/assets/img/apply-loan/icon-1.1.png";
import applyIcon12 from "@/assets/img/apply-loan/icon-1.2.png";
import applyIcon21 from "@/assets/img/apply-loan/icon-2.1.png";
import applyIcon22 from "@/assets/img/apply-loan/icon-2.2.png";
import applyIcon31 from "@/assets/img/apply-loan/icon-3.1.png";
import applyIcon32 from "@/assets/img/apply-loan/icon-3.2.png";
import stepsShield from "@/assets/img/steps/sheild.png";

const LoanPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section
            className="banner-area-2 loan-banner pt-145"
            style={{ backgroundImage: `url(${loanBanner.src})` }}
          >
            <div className="container">
              <div className="row align-items-center  pt-165 pb-200">
                <div className="col-lg-7 mx-auto">
                  <div className="banner-content text-center">
                    <div className="section-title">
                      <h1 className="wow fadeInUp">
                        Get your loan approved in 3 steps
                      </h1>
                    </div>
                    <Link
                      className="theme-btn theme-btn-lg theme-btn-alt mt-50 wow fadeInUp"
                      data-wow-delay="0.2s"
                      href="/loan-details"
                    >
                      Get started <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row position-relative pt-70 d-lg-block d-none">
                <div className="col-md-12">
                  <div className="floated-widget">
                    <div className="row gy-4 gy-lg-0 gx-5">
                      <div className="col-lg-4 border-end">
                        <div
                          className="steps-widget pr-30 pl-30 wow fadeInUp"
                          data-wow-delay="0.1s"
                        >
                          <Image src={stepIcon1} alt="icon" />
                          <h4>
                            <Link href="#">Check Eligibility</Link>
                          </h4>
                          <p>
                            Select your loan amount, answer a few questions and
                            get instant loan amount
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4  border-end">
                        <div
                          className="steps-widget pr-30 pl-30 wow fadeInUp"
                          data-wow-delay="0.3s"
                        >
                          <Image src={stepIcon2} alt="icon" />
                          <h4>
                            <a href="#">Submit Documents</a>
                          </h4>
                          <p>
                            Share required documents with our representative
                            hassle-free
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div
                          className="steps-widget pr-30 pl-30 wow fadeInUp"
                          data-wow-delay="0.5s"
                        >
                          <Image src={stepIcon3} alt="icon" />
                          <h4>
                            <a href="#">Approval in Principle</a>
                          </h4>
                          <p>
                            Choose the final sanctioned loan offer with the
                            terms that work best for you
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="apply-loan-area pt-200 pb-140 bg_disable">
            <div className="container">
              <div className="row pt-3">
                <div className="col-xl-6 mx-auto">
                  <div className="section-title">
                    <h2 className="wow fadeInUp">
                      One step closer to finding your perfect Home!
                    </h2>
                  </div>
                </div>
              </div>
              <form action="personal-details">
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="row pt-35  gy-lg-0 gy-3">
                      <div className="col-lg-4">
                        <div
                          className="loan-apply-widget wow fadeInRight"
                          data-wow-delay="0.1s"
                        >
                          <div className="icon">
                            <Image src={applyIcon11} alt="icon-1" />
                            <Image src={applyIcon12} alt="icon-1.2" />
                          </div>
                          <div className="apply-content">
                            <span className="title">How much do you need?</span>
                            <p className="d-flex">
                              $
                              <input
                                className="w-100"
                                type="text"
                                defaultValue="5,000"
                              />{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div
                          className="loan-apply-widget wow fadeInRight"
                          data-wow-delay="0.3s"
                        >
                          <div className="icon">
                            <Image src={applyIcon21} alt="icon-2" />
                            <Image src={applyIcon22} alt="icon-2.2" />
                          </div>
                          <div className="apply-content">
                            {/* Label */}
                            <span
                              className="title d-block"
                              style={{ fontSize: "14px" }}
                            >
                              Type of Loan
                            </span>

                            {/* Dropdown */}
                            <div className="position-relative">
                              <select
                                name="select-loan-type"
                                id="select-loan-type"
                                className="form-select border-0 ps-0 pe-4 fw-semibold"
                                style={{
                                  appearance: "none",
                                  backgroundColor: "transparent",
                                  boxShadow: "none",
                                  cursor: "pointer",
                                  fontWeight: "normal",
                                }}
                              >
                                <option>Select your Loan</option>
                                <option value="Home Loan">Home Loan</option>
                                <option value="Loan Against Property">
                                  Loan Against Property
                                </option>
                                <option value="Loan Renovation">
                                  Loan Renovation
                                </option>
                                <option value="Commercial Property">
                                  Commercial Property
                                </option>
                              </select>

                              {/* Chevron icon */}
                              <span className="position-absolute top-50 end-0 translate-middle-y me-2 text-dark">
                                <i className="bi bi-chevron-down"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div
                          className="loan-apply-widget wow fadeInRight"
                          data-wow-delay="0.5s"
                        >
                          <div className="icon">
                            <Image src={applyIcon31} alt="icon-3" />
                            <Image src={applyIcon32} alt="icon-3.2" />
                          </div>

                          <div className="apply-content">
                            <span className="title">
                              Where do you currently live?
                            </span>
                            <div
                              className="select-location d-flex align-items-center position-relative w-100"
                              id="locationSlectParent"
                            >
                              <select
                                className="w-100 custom-select-no-arrow"
                                name="select-location"
                                id="locationSelect"
                                defaultValue={"Bandarban"}
                                style={{
                                  appearance: "none",
                                  backgroundColor: "transparent",
                                  boxShadow: "none",
                                  cursor: "pointer",
                                  fontWeight: "normal",
                                }}
                              >
                                <option value="Bagerhat">Bagerhat</option>
                                <option value="Bandarban">Bandarban</option>
                                <option value="Barguna">Barguna</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Bhola">Bhola</option>
                                <option value="Barishal Metro">
                                  Barishal Metro
                                </option>
                                <option value="Bogra">Bogra</option>
                                <option value="Brahmmanbaria">
                                  Brahmmanbaria
                                </option>
                              </select>

                              <span className="close" id="readOnlyClose">
                                <i className="icon_close"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-15 d-flex wow fadeInLeft">
                        <div className="icon">
                          <Image
                            className="img=fluid"
                            src={stepsShield}
                            alt="sheild"
                          />
                        </div>
                        <p className="security-info d-inline-block ms-2">
                          Your information is 100% secure. We do not share your
                          info with other parties.
                        </p>
                      </div>

                      <div className="col-12 text-center mt-35">
                        <button
                          className="theme-btn theme-btn-lg wow fadeInUp"
                          type="submit"
                        >
                          apply now <i className="arrow_right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>

          <BankCalculator />

          {/* <CenterMode /> */}
          <TestimonialSlider />
        </main>
      </DefaultLayout>
    </>
  );
};

export default LoanPage;
