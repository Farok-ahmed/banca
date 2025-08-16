"use client";
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "@/styles/css/nice-select.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import { BlogItem } from "@/types/Blogitem";
import { FaqItem } from "@/types/Faqitem";
import { TabData } from "@/types/Tabdata";
import { Testimonial } from "@/types/Testimonial";
// import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import DefaultLayout from "@/components/Layout";
const tabContent: TabData[] = [
  {
    id: "freelancer",
    label: "Freelancers",
    title: "Access to secure banking",
    description:
      "Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry's",
    imgSrc: "/img/home-4/freelance-tab.png",
  },
  {
    id: "startup",
    label: "SMBs & Startups",
    title: "Manage your cash easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry's",
    imgSrc: "/img/home-4/freelance-tab-2.png",
  },
  {
    id: "business",
    label: "Business Founders",
    title: "Access to secure banking",
    description:
      "Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry's",
    imgSrc: "/img/home-4/freelance-tab.png",
  },
  {
    id: "micro_business",
    label: "Micro businesses",
    title: "Manage your cash easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry's",
    imgSrc: "/img/home-4/freelance-tab-2.png",
  },
];

const faqItems: FaqItem[] = [
  {
    id: "one",
    question: "Can I pay off my loan early?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...",
  },
  {
    id: "two",
    question: "How much can I Banca?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...",
  },
  {
    id: "three",
    question: "Do you offering refinancing ?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...",
  },
  {
    id: "four",
    question: "Can I do all of my banking with you?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...",
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: "/img/home-4/client-rev-1.png",
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
    delay: "0.1s",
  },
  {
    id: 2,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: "/img/home-4/client-rev-2.png",
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
    delay: "0.3s",
  },
  {
    id: 3,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: "/img/home-4/client-rev-3.png",
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
    delay: "0.5s",
  },
  {
    id: 4,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: "/img/home-4/client-rev-1.png",
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
  },
  {
    id: 5,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: "/img/home-4/client-rev-2.png",
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
  },
  {
    id: 6,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: "/img/home-4/client-rev-3.png",
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
  },
  {
    id: 7,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: "/img/home-4/client-rev-1.png",
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
  },
  {
    id: 8,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: "/img/home-4/client-rev-2.png",
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
  },
  {
    id: 9,
    name: "Gerry Kellmen",
    role: "Ui / Ux Designer",
    image: "/img/home-4/client-rev-3.png",
    rating: 5,
    quote:
      "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
  },
];

const blogPosts: BlogItem[] = [
  {
    id: 1,
    title: "Build a website that looks like it can run on it’s own",
    category: "Design",
    categoryClass: "yellow-bg",
    date: "November 08, 2022",
    author: "Spiderthemes",
    image: "/img/home-4/article-1.png",
    calendarIcon: "/img/home-4/calender-outline.svg",
    userIcon: "/img/home-4/user-profile.svg",
    delay: "0.1s",
  },
  {
    id: 2,
    title: "Build a website that looks like it can run on it’s own",
    category: "Design",
    categoryClass: "orange-bg",
    date: "November 08, 2022",
    author: "Spiderthemes",
    image: "/img/home-4/article-2.png",
    calendarIcon: "/img/home-4/calender-outline.svg",
    userIcon: "/img/home-4/user-profile.svg",
    delay: "0.3s",
  },
  {
    id: 3,
    title: "Build a website that looks like it can run on it’s own",
    category: "Design",
    categoryClass: "tulip-bg",
    date: "November 08, 2022",
    author: "Spiderthemes",
    image: "/img/home-4/article-3.png",
    calendarIcon: "/img/home-4/calender-outline.svg",
    userIcon: "/img/home-4/user-profile.svg",
    delay: "0.5s",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("freelancer");

  const [active, setActive] = useState<string>("one");

  const toggleAccordion = (id: string) => {
    setActive((prev) => (prev === id ? "" : id));
  };

  // helper to render caret icon on mobile

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: (
      <div>
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <i className="arrow_right"></i>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <i className="arrow_left"></i>
        </div>
      </div>
    ),
    customPaging: () => (
      <button
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
        }}
      ></button>
    ),
    appendDots: (dots: React.ReactNode) => (
      <ul style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {dots}
      </ul>
    ),
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <DefaultLayout>
        <main>
          <section className="banner-area-5 h-100" id="banner_animation">
            <div className="bg-shapes">
              <div
                className="shape"
                data-parallax='{"x": -30,"y": 90,"rotateZ":50}'
              >
                <Image
                  className="layer"
                  data-depth="-0.06"
                  src="/img/home-4/shape-2.png"
                  alt="Shape 2"
                  width={100}
                  height={100}
                />
              </div>
              <div className="shape" data-parallax='{"y": -250}'>
                <Image
                  className="layer"
                  data-depth="-0.15"
                  src="/img/home-4/shape-3.png"
                  alt="Shape 3"
                  width={60}
                  height={40}
                />
              </div>
              <div className="shape" data-parallax='{"x": -40, "y": -150}'>
                <Image
                  className="layer"
                  data-depth="-0.3"
                  src="/img/home-4/shape-4.png"
                  alt="Shape 4"
                  width={30}
                  height={30}
                />
              </div>
              <div
                className="shape"
                data-parallax='{"x": 300, "y": 370, "rotateZ":200}'
              >
                <Image
                  className="layer"
                  data-depth="0.5"
                  src="/img/home-4/shape-5.png"
                  alt="Shape 5"
                  width={10}
                  height={10}
                />
              </div>

              <div className="shape"></div>
              <div className="shape"></div>
            </div>

            <div className="container">
              <div className="row align-items-end pt-170 pb-120">
                <div className="col-lg-6">
                  <div
                    className="banner-content wow fadeInRight"
                    data-wow-delay="0.1s"
                  >
                    <h1>
                      Smart finance solutions for your{" "}
                      <span className="underline-shape">business</span>
                    </h1>
                    <p>
                      Inventore veritatis et architecto beatae vitae dicta
                      explicabo nemo enim ipsam voluptatem quia voluptas
                      aspernatur magni.
                    </p>

                    <div className="d-flex flex-wrap mt-40">
                      <a href="#" className="theme-btn me-4">
                        Get started now
                      </a>
                      <a href="#" className="under_link">
                        Explore more <i className="arrow_right"></i>
                      </a>
                    </div>

                    <div className="co-operators">
                      <p className="mb-4">We are cooperating with:</p>
                      <div className="d-flex flex-wrap">
                        <a href="#">
                          <Image
                            src="/img/home-4/cooperator-1.png"
                            alt="cooperator 1"
                            width={100}
                            height={30}
                          />
                        </a>
                        <a href="#">
                          <Image
                            src="/img/home-4/cooperator-2.png"
                            alt="cooperator 2"
                            width={100}
                            height={30}
                          />
                        </a>
                        <a href="#">
                          <Image
                            src="/img/home-4/cooperator-3.png"
                            alt="cooperator 3"
                            width={100}
                            height={30}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="basic-loan-calculator wow fadeInLeft"
                    data-wow-delay="0.1s"
                  >
                    <Image
                      className="shape"
                      src="/img/home-4/shape-1.png"
                      alt="Shape 1"
                      width={50}
                      height={30}
                    />
                    <h4>Loan calculator</h4>
                    <form action="" className="d-flex flex-column">
                      <div className="mb-3">
                        <label className="label" htmlFor="loandetails01">
                          Type of Loan
                        </label>
                        <select
                          className="w-100 nice-select"
                          id="loandetails01"
                        >
                          <option value="Debt-Financing">Debt Loan</option>
                          <option value="Equity-Finance">
                            Installment loan
                          </option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="label" htmlFor="loan-amount">
                          Amount of money
                        </label>
                        <div className="input-field d-flex align-items-center">
                          <span>$</span>
                          <input
                            type="text"
                            id="loan-amount"
                            placeholder="Enter amount"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="label" htmlFor="loan-time">
                          For how long (days)
                        </label>
                        <div className="input-field">
                          <input
                            type="text"
                            id="loan-time"
                            placeholder="For how long (days)"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="label" htmlFor="loan-repayment">
                          Repayments
                        </label>
                        <div className="input-field d-flex align-items-center">
                          <span>$</span>
                          <input
                            type="text"
                            id="loan-repayment"
                            placeholder="Enter amount"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <button type="submit" className="theme-btn w-100">
                        Apply for loans
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="feature" className="steps-area pt-115 pb-105 bg-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mx-auto pb-55">
                  <div className="section-title">
                    <span className="short-title-2">_OUR PROCESS</span>
                    <h1 className="wow fadeInUp">
                      3 <span className="underline-shape">steps</span> to follow
                    </h1>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form,
                    </p>
                  </div>
                </div>
              </div>

              <div className="row gy-xl-0 gy-4">
                {/* Step 1 */}
                <div className="col-xl-4 col-md-6">
                  <div
                    className="feature-card-widget-8 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="card-img">
                      <Image
                        src="/img/home-4/step-icon-01.svg"
                        alt="Apply for loan"
                        width={80}
                        height={80}
                      />
                    </div>
                    <h4>Apply for loan</h4>
                    <p>
                      Quis dapibus volutpat condimentum quam sed non elit sed
                      magna lectus dui interdum facilisi justo
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-xl-4 col-md-6">
                  <div
                    className="feature-card-widget-8 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-img">
                      <Image
                        src="/img/home-4/step-icon-02.svg"
                        alt="Get approved"
                        width={80}
                        height={80}
                      />
                    </div>
                    <h4>Get approved</h4>
                    <p>
                      Quis dapibus volutpat condimentum quam sed non elit sed
                      magna lectus dui interdum facilisi justo
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-xl-4 col-md-6 mx-auto">
                  <div
                    className="feature-card-widget-8 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="card-img">
                      <Image
                        src="/img/home-4/step-icon-03.svg"
                        alt="Get your money"
                        width={80}
                        height={80}
                      />
                    </div>
                    <h4>Get your money</h4>
                    <p>
                      Quis dapibus volutpat condimentum quam sed non elit sed
                      magna lectus dui interdum facilisi justo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about-area bg-white">
            <div className="container">
              <div className="row align-items-center">
                {/* Left Image Section */}
                <div className="col-lg-7">
                  <div className="cash-img position-relative">
                    <Image
                      className="img-fluid"
                      src="/img/home-4/manage-cash-img.png"
                      alt="Manage cash"
                      width={600}
                      height={400}
                    />
                    <Image
                      className="msg-1 wow fadeInRight"
                      data-wow-delay="0.1s"
                      src="/img/home-4/basic-info-2.png"
                      alt="Info 2"
                      width={180}
                      height={95}
                    />
                    <Image
                      className="msg-2 wow fadeInRight"
                      data-wow-delay="0.3s"
                      src="/img/home-4/basic-info-3.png"
                      alt="Info 3"
                      width={200}
                      height={60}
                    />
                  </div>
                </div>

                {/* Right Text Section */}
                <div className="col-lg-5 wow fadeInLeft">
                  <div className="section-title text-start">
                    <span className="short-title-2">_WHY BANCA ?</span>
                    <h1 className="mb-3">
                      Manage your cash{" "}
                      <span className="underline-shape">easily</span>
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and the
                      typesetting industry. Lorem Ipsum has been industrys
                    </p>
                    <ul className="list-unstyled feature-list">
                      <li>
                        <i className="fas fa-check-circle"></i> Inventore
                        veritatis et architecto beatae
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Tempor egestas
                        morbi pulvinar amet
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about-tab-area bg-white">
            <div className="container">
              {/* Nav Buttons */}
              <ul className="nav nav-tabs" role="tablist">
                {tabContent.map((tab) => (
                  <li className="nav-item" role="presentation" key={tab.id}>
                    <button
                      className={`nav-link ${
                        activeTab === tab.id ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                      type="button"
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Tab Panels */}
              <div className="tab-content pt-4">
                {tabContent.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-pane fade ${
                      activeTab === tab.id ? "show active" : ""
                    }`}
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-5">
                        <div className="section-title text-start">
                          <h1>
                            {tab.title.split(" ")[0]}{" "}
                            <span className="underline-shape">
                              {tab.title.split(" ").slice(1).join(" ")}
                            </span>
                          </h1>
                          <p>{tab.description}</p>
                          <a className="read-more" href="#">
                            Get started now <i className="arrow_right" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <Image
                          className="img-fluid"
                          src={tab.imgSrc}
                          alt={tab.label}
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="faq-area-3 py-16">
            <div className="container">
              <div className="row gy-lg-0 gy-4">
                <div className="col-lg-6">
                  <Image
                    src="/img/home-4/faq-Img.png"
                    alt="FAQ"
                    width={600}
                    height={500}
                    className="faq-img img-fluid"
                  />
                </div>
                <div className="col-lg-6 pl-lg-50">
                  <span className="subtitle">_FAQ</span>
                  <h1>
                    Frequently asked general{" "}
                    <span className="underline-shape">questions</span>
                  </h1>

                  <div className="faq-widget">
                    <div className="accordion" id="accordionExample">
                      {faqItems.map((item, index) => (
                        <div
                          className="single-faq wow fadeInUp"
                          data-wow-delay={`0.${index + 1}s`}
                          key={item.id}
                        >
                          <div className="w-100">
                            <div
                              className="faq-header"
                              id={`heading${item.id}`}
                            >
                              <h4
                                className={`mb-0 ${
                                  active === item.id ? "" : "collapsed"
                                }`}
                                onClick={() => toggleAccordion(item.id)}
                                style={{ cursor: "pointer" }}
                              >
                                {item.question}
                                <i className="icon_plus"></i>
                                <i className="icon_minus-06"></i>
                              </h4>
                            </div>
                            <div
                              id={`collapse${item.id}`}
                              className={`collapse ${
                                active === item.id ? "show" : ""
                              }`}
                              aria-labelledby={`heading${item.id}`}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="faq-body">
                                <p>{item.answer}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <h6 className="more-contact">
                      Have more question ? <a href="/contact">Contact Us</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="services-area bg-white pt-120 pb-120 wow fadeInUp">
            <div className="container">
              <div className="section-title mb-45 text-center">
                <span className="short-title-2">_SERVICE COMPARISONS</span>
                <h1>
                  Our better <span className="underline-shape">services</span>
                </h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                  <br />
                  but the majority have suffered alteration in some form,
                </p>
              </div>

              <div className="table-responsive">
                <table className="table table-borderless mb-0">
                  <thead>
                    <tr>
                      <th className="feature-head" scope="col"></th>
                      <th className="text-center" scope="col">
                        <Image
                          src="/img/logo/Logo-2.png"
                          alt="Logo"
                          width={105}
                          height={30}
                        />
                      </th>
                      <th className="text-center" scope="col">
                        Other Companies
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="feature-head">Payment Per Transaction</th>
                      <td className="feature-item">0.50/per transaction</td>
                      <td className="feature-item">1.50/per transaction</td>
                    </tr>
                    <tr>
                      <th className="feature-head">Bank account limitations</th>
                      <td className="feature-item">up to 10 bank accounts</td>
                      <td className="feature-item">Only 3 bank accounts</td>
                    </tr>
                    <tr>
                      <th className="feature-head">
                        Local fees capped at NGN 2,000
                      </th>
                      <td className="feature-item">
                        <i className="fas fa-check-circle text-success"></i>
                      </td>
                      <td className="feature-item">
                        <i className="fas fa-times-circle text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <th className="feature-head">Loan Purchase</th>
                      <td className="feature-item">easy to follow steps</td>
                      <td className="feature-item">complicated steps</td>
                    </tr>
                    <tr>
                      <th className="feature-head">Debt Financing</th>
                      <td className="feature-item">
                        <i className="fas fa-check-circle text-success"></i>
                      </td>
                      <td className="feature-item">
                        <i className="fas fa-times-circle text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <th className="feature-head">
                        No hidden fees or charges
                      </th>
                      <td className="feature-item">
                        <i className="fas fa-check-circle text-success"></i>
                      </td>
                      <td className="feature-item">
                        <i className="fas fa-times-circle text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <th className="feature-head">Local fees capped</th>
                      <td className="feature-item">
                        <i className="fas fa-check-circle text-success"></i>
                      </td>
                      <td className="feature-item">
                        <i className="fas fa-times-circle text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <th className="feature-head bg-transparent"></th>
                      <td className="feature-item p-0 bg-transparent">
                        <a href="#" className="theme-btn">
                          <span>Get started now</span>{" "}
                          <i className="arrow_right"></i>
                        </a>
                      </td>
                      <td className="feature-item bg-transparent"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pt-120 stat-view">
                <div className="row gy-md-0 gy-4 text-center">
                  <div className="col-md-4 border-end">
                    <h1 className="counter">
                      <span>400</span> K
                    </h1>
                    <p>Total active customers</p>
                  </div>
                  <div className="col-md-4">
                    <h1 className="counter">
                      <span>100</span>M+
                    </h1>
                    <p>Order success rate</p>
                  </div>
                  <div className="col-md-4 border-start">
                    <h1 className="counter">
                      <span>95.87</span>%
                    </h1>
                    <p>Avg. new projects</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="client-slider-2 pt-60 pb-60">
            <div className="container">
              <div className="section-title text-center mb-5">
                <span className="short-title-2">_Testimonials</span>
                <h1 className="mb-3">
                  Customer <span className="underline-shape">feedbacks</span>
                </h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                  <br />
                  but the majority have suffered alteration in some form,
                </p>
              </div>

              <Slider {...settings}>
                {testimonials.map((testimonial) => (
                  <div
                    className="px-3"
                    key={testimonial.id}
                    data-wow-delay={testimonial.delay || "0.1s"}
                  >
                    <div className="single-client wow fadeInUp slick-slide slick-active">
                      <div className="rating mb-2 text-warning">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i className="bi bi-star-fill me-1" key={i}></i>
                        ))}
                      </div>
                      <p className="quote mb-4">{testimonial.quote}</p>
                      <div className="client-info d-flex align-items-center gap-3">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-circle"
                        />
                        <div>
                          <p className="fw-semibold mb-0">{testimonial.name}</p>
                          <span className="small">{testimonial.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </section>

          <section
            className="news-area-2 pt-120 pb-200 bg-white position-relative"
            style={{ zIndex: 1 }}
          >
            <div className="container">
              <div className="section-title text-center mb-5">
                <span className="short-title-2">_Blog</span>
                <h1 className="wow fadeInUp mb-3">
                  Our latest <span className="underline-shape">articles</span>
                </h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                  <br />
                  but the majority have suffered alteration in some form,
                </p>
              </div>

              <div className="row pt-55 gy-lg-0 gy-4">
                {blogPosts.map((post) => (
                  <div
                    className="col-lg-4 col-md-6"
                    key={post.id}
                    data-wow-delay={post.delay}
                  >
                    <div className="blog-widget-3 wow fadeInUp">
                      <Link
                        href="/"
                        className="blog-img d-block position-relative"
                      >
                        <Image
                          src={post.image}
                          alt="blog-img"
                          width={450}
                          height={280}
                          className="w-100 h-auto"
                        />
                        <div className={`catagory ${post.categoryClass}`}>
                          {post.category}
                        </div>
                      </Link>
                      <div className="blog-content mt-3">
                        <h4>
                          <a href="#">{post.title}</a>
                        </h4>
                        <div className="post-info d-flex justify-content-between mt-3">
                          <div className="post-date d-flex align-items-center gap-2">
                            <Image
                              src={post.calendarIcon}
                              alt="calendar"
                              width={18}
                              height={18}
                            />
                            <span>{post.date}</span>
                          </div>
                          <div className="author d-flex align-items-center gap-2">
                            <Image
                              src={post.userIcon}
                              alt="user profile"
                              width={18}
                              height={18}
                            />
                            <span>{post.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="cta-area-3 bg-white">
            <div className="container">
              <div className="row">
                <div className="col-md-12 position-relative">
                  <div className="cta-4 cta-bg-primary">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="cta-content wow fadeInRight">
                          <h2 className="mb-10">Start your free trial !</h2>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available.
                          </p>
                          <div className="d-flex flex-column flex-sm-row mt-40">
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
                              <i className="fas fa-check-circle"></i> Get 30 day
                              free trial
                            </li>
                            <li>
                              <i className="fas fa-check-circle"></i> No
                              Spamming
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <Image
                          className="cta-img wow fadeInUp img-fluid"
                          width={500}
                          height={800}
                          src="/img/home-4/cta-Img.png"
                          alt=""
                        />
                        <Image
                          className="shape img-fluid"
                          width={500}
                          height={400}
                          src="/img/home-4/cta-shape.png"
                          alt=""
                        />
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
}
