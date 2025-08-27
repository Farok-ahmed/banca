"use client";
import { motion } from "framer-motion";
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import "@/styles/css/nice-select.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import { BlogItem } from "@/types/Blogitem";
import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/components/Layout";
import FaqTabs from "./FaqTabs";
import HomeTestimonials from "./HomeTestimonials";
// Assets
import shape2 from "@/assets/img/home-4/shape-2.png";
import shape3 from "@/assets/img/home-4/shape-3.png";
import shape4 from "@/assets/img/home-4/shape-4.png";
import shape5 from "@/assets/img/home-4/shape-5.png";
import cooperator1 from "@/assets/img/home-4/cooperator-1.png";
import cooperator2 from "@/assets/img/home-4/cooperator-2.png";
import cooperator3 from "@/assets/img/home-4/cooperator-3.png";
import shape1 from "@/assets/img/home-4/shape-1.png";
import stepIcon01 from "@/assets/img/home-4/step-icon-01.svg";
import stepIcon02 from "@/assets/img/home-4/step-icon-02.svg";
import stepIcon03 from "@/assets/img/home-4/step-icon-03.svg";
import manageCashImg from "@/assets/img/home-4/manage-cash-img.png";
import basicInfo2 from "@/assets/img/home-4/basic-info-2.png";
import basicInfo3 from "@/assets/img/home-4/basic-info-3.png";
import logo2 from "@/assets/img/logo/Logo-2.png";
import ctaImg from "@/assets/img/home-4/cta-Img.png";
import ctaShape from "@/assets/img/home-4/cta-shape.png";
import article1 from "@/assets/img/home-4/article-1.png";
import article2 from "@/assets/img/home-4/article-2.png";
import article3 from "@/assets/img/home-4/article-3.png";
import calenderOutline from "@/assets/img/home-4/calender-outline.svg";
import userProfile from "@/assets/img/home-4/user-profile.svg";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/components/animation";
import Counter from "@/components/common-section/Counter";
import LoanForm from "./LoanForm";

const blogPosts: BlogItem[] = [
  {
    id: 1,
    title: "Build a website that looks like it can run on it’s own",
    category: "Design",
    categoryClass: "yellow-bg",
    date: "November 08, 2022",
    author: "Spiderthemes",
    image: article1,
    calendarIcon: calenderOutline,
    userIcon: userProfile,
    delay: "0.1s",
  },
  {
    id: 2,
    title: "Build a website that looks like it can run on it’s own",
    category: "Design",
    categoryClass: "orange-bg",
    date: "November 08, 2022",
    author: "Spiderthemes",
    image: article2,
    calendarIcon: calenderOutline,
    userIcon: userProfile,
    delay: "0.3s",
  },
  {
    id: 3,
    title: "Build a website that looks like it can run on it’s own",
    category: "Design",
    categoryClass: "tulip-bg",
    date: "November 08, 2022",
    author: "Spiderthemes",
    image: article3,
    calendarIcon: calenderOutline,
    userIcon: userProfile,
    delay: "0.5s",
  },
];

export default function Home() {
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
                  src={shape2}
                  alt="Shape 2"
                />
              </div>
              <div className="shape" data-parallax='{"y": -250}'>
                <Image
                  className="layer"
                  data-depth="-0.15"
                  src={shape3}
                  alt="Shape 3"
                />
              </div>
              <div className="shape" data-parallax='{"x": -40, "y": -150}'>
                <Image
                  className="layer"
                  data-depth="-0.3"
                  src={shape4}
                  alt="Shape 4"
                />
              </div>
              <div
                className="shape"
                data-parallax='{"x": 300, "y": 370, "rotateZ":200}'
              >
                <Image
                  className="layer"
                  data-depth="0.5"
                  src={shape5}
                  alt="Shape 5"
                />
              </div>

              <div className="shape"></div>
              <div className="shape"></div>
            </div>

            <div className="container">
              <div className="row align-items-end pt-170 pb-120">
                <div className="col-lg-6">
                  <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
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
                      <Link href="#" className="theme-btn me-4">
                        Get started now
                      </Link>
                      <Link href="#" className="under_link">
                        Explore more <i className="arrow_right"></i>
                      </Link>
                    </div>

                    <div className="co-operators">
                      <p className="mb-4">We are cooperating with:</p>
                      <div className="d-flex flex-wrap">
                        <Link href="#">
                          <Image src={cooperator1} alt="cooperator 1" />
                        </Link>
                        <Link href="#">
                          <Image src={cooperator2} alt="cooperator 2" />
                        </Link>
                        <Link href="#">
                          <Image src={cooperator3} alt="cooperator 3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="col-lg-6">
                  <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="basic-loan-calculator wow fadeInLeft"
                    data-wow-delay="0.1s"
                  >
                    <Image className="shape" src={shape1} alt="Shape 1" />
                    <h4>Loan calculator</h4>
                    <LoanForm/>
                    {/* <form action="" className="d-flex flex-column">
                      <div className="mb-3">
                        <label className="label" htmlFor="loandetails01">
                          Type of Loan
                        </label>
                        <FormSelect options={options} />
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
                    </form> */}
                  </motion.div>
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
                    <motion.h1
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                    >
                      3 <span className="underline-shape">steps</span> to follow
                    </motion.h1>
                    <motion.p
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form,
                    </motion.p>
                  </div>
                </div>
              </div>

              <div className="row gy-xl-0 gy-4">
                {/* Step 1 */}
                <div className="col-xl-4 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-8 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="card-img">
                      <Image src={stepIcon01} alt="Apply for loan" />
                    </div>
                    <h4>Apply for loan</h4>
                    <p>
                      Quis dapibus volutpat condimentum quam sed non elit sed
                      magna lectus dui interdum facilisi justo
                    </p>
                  </motion.div>
                </div>

                {/* Step 2 */}
                <div className="col-xl-4 col-md-6">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-8 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="card-img">
                      <Image src={stepIcon02} alt="Get approved" />
                    </div>
                    <h4>Get approved</h4>
                    <p>
                      Quis dapibus volutpat condimentum quam sed non elit sed
                      magna lectus dui interdum facilisi justo
                    </p>
                  </motion.div>
                </div>

                {/* Step 3 */}
                <div className="col-xl-4 col-md-6 mx-auto">
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="feature-card-widget-8 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="card-img">
                      <Image src={stepIcon03} alt="Get your money" />
                    </div>
                    <h4>Get your money</h4>
                    <p>
                      Quis dapibus volutpat condimentum quam sed non elit sed
                      magna lectus dui interdum facilisi justo
                    </p>
                  </motion.div>
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
                      src={manageCashImg}
                      alt="Manage cash"
                    />
                    <motion.div
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <Image
                        className="msg-1 wow fadeInRight"
                        data-wow-delay="0.1s"
                        src={basicInfo2}
                        alt="Info 2"
                      />
                    </motion.div>
                    <motion.div
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <Image
                        className="msg-2 wow fadeInRight"
                        data-wow-delay="0.3s"
                        src={basicInfo3}
                        alt="Info 3"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Right Text Section */}
                <motion.div
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-lg-5 wow fadeInLeft"
                >
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
                </motion.div>
              </div>
            </div>
          </section>

          <FaqTabs />

          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="services-area bg-white pt-120 pb-120 wow fadeInUp"
          >
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
                        <Image src={logo2} alt="Logo" />
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
                        <Link href="#" className="theme-btn">
                          <span>Get started now</span>{" "}
                          <i className="arrow_right"></i>
                        </Link>
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
                      <span><Counter count={400} decimals={0} /></span> K
                    </h1>
                    <p>Total active customers</p>
                  </div>
                  <div className="col-md-4">
                    <h1 className="counter">
                      <span><Counter count={100} decimals={0} /></span>M+
                    </h1>
                    <p>Order success rate</p>
                  </div>
                  <div className="col-md-4 border-start">
                    <h1 className="counter">
                      <span><Counter count={95.87} decimals={2} /></span>%
                    </h1>
                    <p>Avg. new projects</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <HomeTestimonials />

          <section
            className="news-area-2 pt-120 pb-200 bg-white position-relative"
            style={{ zIndex: 1 }}
          >
            <div className="container">
              <div className="section-title text-center mb-5">
                <span className="short-title-2">_Blog</span>
                <motion.h1
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="wow fadeInUp mb-3"
                >
                  Our latest <span className="underline-shape">articles</span>
                </motion.h1>
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
                    <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="blog-widget-3 wow fadeInUp"
                    >
                      <Link
                        href="/blog-details"
                        className="blog-img d-block position-relative"
                      >
                        <Image
                          src={post.image}
                          alt="blog-img"
                          className="w-100 h-auto"
                        />
                        <div className={`catagory ${post.categoryClass}`}>
                          {post.category}
                        </div>
                      </Link>
                      <div className="blog-content mt-3">
                        <h4>
                          <Link href="/blog-details">{post.title}</Link>
                        </h4>
                        <div className="post-info d-flex justify-content-between mt-3">
                          <div className="post-date d-flex align-items-center gap-2">
                            <Image src={post.calendarIcon} alt="calendar" />
                            <span>{post.date}</span>
                          </div>
                          <div className="author d-flex align-items-center gap-2">
                            <Image src={post.userIcon} alt="user profile" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
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
                        <motion.div
                          variants={fadeInRight}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          className="cta-content wow fadeInRight"
                        >
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
                        </motion.div>
                      </div>

                      <div className="col-lg-6">
                        <motion.div
                          variants={fadeInUp}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                        >
                          <Image
                            className="cta-img wow fadeInUp img-fluid"
                            src={ctaImg}
                            alt=""
                          />
                        </motion.div>

                        <Image
                          className="shape img-fluid"
                          src={ctaShape}
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
