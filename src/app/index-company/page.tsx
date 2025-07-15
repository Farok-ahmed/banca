import Image from 'next/image';

const IndexCompany = () => {
  return (
    <main>
      <section className="banner-area-6">
        <div className="container">
          <div className="row ">
            <div className="col-lg-7">
              <div
                className="banner-content wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <h1>Simplify all your banking and loan methods.</h1>
                <p>
                  Our team of experts uses a methodology to identify the credit
                  cards most.
                </p>
                <div className="d-flex flex-column flex-sm-row mt-25 subscribe-field">
                  <input
                    type="email"
                    className="form-control me-sm-1"
                    placeholder="Enter Email address"
                  />
                  <a
                    href="#"
                    className="input-append theme-btn theme-btn-lg ms-sm-2"
                  >
                    Get Started
                  </a>
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
              </div>
            </div>
            <div className="col-lg-5 text-center text-lg-start">
              <div className="banner-img">
                <Image
                  width={350}
                  height={500}
                  className="img-1 wow fadeInLeft"
                  data-wow-delay="0.3s"
                  src="/img/home-5/banner-img-1.png"
                  alt=""
                />
                <Image
                  width={200}
                  height={200}
                  className="img-2 wow fadeInRight"
                  data-wow-delay="0.8s"
                  src="/img/home-5/banner-img-2.png"
                  alt=""
                />
                <Image
                  width={320}
                  height={240}
                  className="img-3 wow fadeInRight"
                  data-wow-delay="1.1s"
                  src="/img/home-5/banner-img-3.png"
                  alt=""
                />
                <Image
                  width={40}
                  height={50}
                  className="img-shape"
                  src="/img/home-5/banner-shape.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="banner-fact">
        <div className="container">
          <div className="row gy-lg-0 gy-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInRight"
              data-wow-delay="0.1s"
            >
              <div className="single-fact">
                <div className="icon">
                  <i className="fas fa-globe"></i>
                </div>
                <p>A global customer base from over 120 countries</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInRight"
              data-wow-delay="0.4s"
            >
              <div className="single-fact">
                <div className="icon">
                  <i className="fas fa-user"></i>
                </div>
                <p>Almost over 250 thousand active users</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInRight mx-auto"
              data-wow-delay="0.7s"
            >
              <div className="single-fact">
                <div className="icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p>10 years worth of experience as a industry expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-115 pb-105 feature-area-3">
        <div className="container">
          <div className="section-title">
            <span className="short-title-2">OUR Features</span>
            <h1 className="wow fadeInUp">We have better and more feature</h1>
          </div>
          <div className="row gy-4 mt-50">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="feature-card-widget-9 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/feature-icon-1.svg"
                  alt=""
                />
                <h5>Fast Mobility</h5>
                <p>Quis dapibus volutpat condi</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="feature-card-widget-9 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/feature-icon-2.svg"
                  alt=""
                />
                <h5>Term Loan</h5>
                <p>Quis dapibus volutpat condi</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="feature-card-widget-9 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/feature-icon-3.svg"
                  alt=""
                />
                <h5>Easy Experience</h5>
                <p>Quis dapibus volutpat condi</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="feature-card-widget-9 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/feature-icon-4.svg"
                  alt=""
                />
                <h5>Safe and protected</h5>
                <p>Quis dapibus volutpat condi</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="feature-card-widget-9 wow fadeInUp"
                data-wow-delay="0.9s"
              >
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/feature-icon-5.svg"
                  alt=""
                />
                <h5>Wordwide</h5>
                <p>Quis dapibus volutpat condi</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="feature-card-widget-9 wow fadeInUp"
                data-wow-delay="1.1s"
              >
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/feature-icon-6.svg"
                  alt=""
                />
                <h5>One term fees</h5>
                <p>Quis dapibus volutpat condi</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="feature-card-widget-9 wow fadeInUp"
                data-wow-delay="1.3s"
              >
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/feature-icon-7.svg"
                  alt=""
                />
                <h5>Merchant Payment</h5>
                <p>Quis dapibus volutpat condi</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="feature-card-widget-9 wow fadeInUp widget-link"
                data-wow-delay="1.7s"
              >
                <h1>10+</h1>
                <a href="#">
                  More features <i className="arrow_right "></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area-2 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow fadeInLeft">
              <div className="text-start">
                <h1 className="mb-3">Get loan from 3 simple process</h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form,
                </p>
                <ul className="list-unstyled feature-list">
                  <li>
                    {' '}
                    <i className="fas fa-check-circle"></i>It is a long
                    established fact that a reader will be{' '}
                  </li>
                  <li>
                    {' '}
                    <i className="fas fa-check-circle"></i> It is a long
                    established fact distracted by the readable
                  </li>
                </ul>
                <a href="#" className="read-more-btn">
                  <span>Learn about the process</span>
                  <i className="arrow_right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <div className="sms-flow">
                <Image
                  width={300}
                  height={300}
                  className="arrow-1"
                  src="/img/home-5/about-arrow-1.png"
                  alt=""
                />
                <Image
                  width={300}
                  height={300}
                  className="arrow-2"
                  src="/img/home-5/about-arrow-2.png"
                  alt=""
                />
                <Image
                  width={300}
                  height={300}
                  className="msg-1 wow fadeInUp"
                  data-wow-delay="0.1s"
                  src="/img/home-5/msg-1.png"
                  alt=""
                />
                <Image
                  width={300}
                  height={300}
                  className="msg-2"
                  src="/img/home-5/msg-2.png"
                  alt=""
                />
                <Image
                  width={300}
                  height={300}
                  className="msg-3 wow fadeInDown"
                  data-wow-delay="0.3s"
                  src="/img/home-5/msg-3.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="row align-items-center gy-4 mt-3">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="card-holder">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <Image
                  width={300}
                  height={300}
                  className="img-1 img-fluid"
                  src="/img/home-5/card-holder.png"
                  alt=""
                />
                <Image
                  width={300}
                  height={300}
                  className="img-2 wow fadeInRight"
                  data-wow-delay="0.2s"
                  src="/img/home-5/bank-balance.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1 wow fadeInRight">
              <h1 className="mb-3">We have reputable customer relatinships</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which do not look even
                slightly .{' '}
              </p>

              <div className="customer-num">
                <div>
                  <h1>50</h1>
                  <span>
                    Parters <br />
                    Included
                  </span>
                </div>
                <div>
                  <h1>1M</h1>
                  <span>
                    Total <br />
                    Attendies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="calculator-area-2">
        <div className="container">
          <div className="section-title">
            <span className="short-title-2">Loan calculator</span>
            <h1 className="wow fadeInUp text-white">
              Calculate and confirm your loans
            </h1>
          </div>

          <div className="calculator-widget-2 mt-50">
            <div className="row  gy-lg-0 gy-3">
              <div className="col-lg-7">
                <div
                  className="single-calculator-widget wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <h4>Loan Calculator</h4>
                  <div className="range-label mt-40">Loan Term</div>
                  <nav>
                    <div
                      className="nav nav-tabs loan-type-select"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="yearTab-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#yearTab"
                        type="button"
                        role="tab"
                        aria-controls="yearTab"
                        aria-selected="false"
                      >
                        Yearly
                      </button>
                      <button
                        className="nav-link "
                        id="monthTab-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#monthTab"
                        type="button"
                        role="tab"
                        aria-controls="monthTab"
                        aria-selected="false"
                      >
                        Monthly
                      </button>
                      <button
                        className="nav-link"
                        id="weekTab-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#weekTab"
                        type="button"
                        role="tab"
                        aria-controls="weekTab"
                        aria-selected="false"
                      >
                        Weekly
                      </button>
                    </div>
                  </nav>

                  <div className="range-label">Loan Amount</div>
                  <div className="single-range">
                    <div id="RangeSlider"></div>
                    <div className="input-group">
                      <input
                        className="noTextMerge"
                        type="text"
                        id="SetRange"
                      />
                      <span className="input-group-text">$</span>
                    </div>
                  </div>
                  <div className="range-label">Interest Rate</div>
                  <div className="single-range">
                    <div id="RoiRangeSlider"></div>
                    <div className="input-group">
                      <input type="text" id="SetRoiRange" />
                      <span className="input-group-text">%</span>
                    </div>
                  </div>
                  <div className="range-label">Loan Duration</div>
                  <div className="single-range">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="yearTab"
                        role="tabpanel"
                        aria-labelledby="yearTab"
                      >
                        <div id="YearRangeSlider"></div>
                      </div>
                      <div
                        className="tab-pane fade "
                        id="monthTab"
                        role="tabpanel"
                        aria-labelledby="monthTab"
                      >
                        <div id="MonthRangeSlider"></div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="weekTab"
                        role="tabpanel"
                        aria-labelledby="weekTab"
                      >
                        <div id="WeekRangeSlider"></div>
                      </div>
                    </div>
                    <div className="input-group">
                      <input
                        className="noTextMerge"
                        type="text"
                        id="SetMonthRange"
                      />
                      <span className="input-group-text loanTermIndicator">
                        @example.com
                      </span>
                    </div>
                  </div>
                  <div className="d-flex loan-start-date">
                    <div>
                      <div className="range-label">Start Date</div>
                      <div className="inp-container">
                        <input
                          type="text"
                          id="loanStartDate"
                          placeholder="Select Date"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="range-label">End Date</div>
                      <div className="inp-container">
                        <input
                          type="text"
                          id="loanEndDate"
                          placeholder="Select Date"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 pl-lg-35">
                <div
                  className="calculator-result-widget wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="pie-wrapper mt-25" id="loan_graph_circle">
                    <div className="label">
                      Total Amount<h2 className="LoanTotalAmount"></h2>
                    </div>
                    <div className="pie">
                      <div className="left-side half-circle"></div>
                      <div className="right-side half-circle"></div>
                    </div>
                    <div className="circle-border"></div>
                  </div>
                  <div className="graph-indicator">
                    <div>
                      <span className="blue-dot"></span> EMI Amount
                    </div>
                    <div>
                      <span className="orange-dot"></span> Interest Payable
                    </div>
                  </div>
                  <ul className="loan-calculation list-unstyled">
                    <li>
                      <span className="label">
                        EMI Amount (Principal + Interest)
                      </span>
                      <span className="amount LoanTotalAmount"></span>
                    </li>
                    <li>
                      <span className="label">Interest Payable</span>
                      <span className="amount" id="InterestPayable"></span>
                    </li>
                    <li>
                      <span className="label">Loan Duration</span>
                      <span className="amount LoanTotalDuration"></span>
                    </li>
                    <li>
                      <span className="label">Your EMI Amount</span>
                      <span className="amount" id="emiAmount"></span>
                    </li>
                  </ul>
                  <a
                    href="personal-details.html"
                    className="theme-btn theme-btn-lg mt-20 w-100"
                  >
                    Apply Now
                    <i className="arrow_right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="loan-slider-area bg-white pb-130 pt-120">
        <div className="container">
          <div className="section-title">
            <span className="short-title-2">Loan types</span>
            <h1 className="wow fadeInUp">We offer a wide variety of loans</h1>
          </div>
          <div className="loan-slider pt-80">
            <div className="single-slide">
              <div className="icon">
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/loan-type-1.png"
                  alt=""
                />
              </div>
              <h4>Personal Loans</h4>
              <p>
                Our team of experts uses methodology identify the credit cards
                most.
              </p>
            </div>
            <div className="single-slide">
              <div className="icon">
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/loan-type-2.png"
                  alt=""
                />
              </div>
              <h4>Installment Loans</h4>
              <p>
                Our team of experts uses methodology identify the credit cards
                most.
              </p>
            </div>
            <div className="single-slide">
              <div className="icon">
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/loan-type-3.png"
                  alt=""
                />
              </div>
              <h4>Payday Loans</h4>
              <p>
                Our team of experts uses methodology identify the credit cards
                most.
              </p>
            </div>
            <div className="single-slide">
              <div className="icon">
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/loan-type-1.png"
                  alt=""
                />
              </div>
              <h4>Personal Loans</h4>
              <p>
                Our team of experts uses methodology identify the credit cards
                most.
              </p>
            </div>
            <div className="single-slide">
              <div className="icon">
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/loan-type-2.png"
                  alt=""
                />
              </div>
              <h4>Installment Loans</h4>
              <p>
                Our team of experts uses methodology identify the credit cards
                most.
              </p>
            </div>
            <div className="single-slide">
              <div className="icon">
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/loan-type-3.png"
                  alt=""
                />
              </div>
              <h4>Payday Loans</h4>
              <p>
                Our team of experts uses methodology identify the credit cards
                most.
              </p>
            </div>
            <div className="single-slide">
              <div className="icon">
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/loan-type-2.png"
                  alt=""
                />
              </div>
              <h4>Installment Loans</h4>
              <p>
                Our team of experts uses methodology identify the credit cards
                most.
              </p>
            </div>
            <div className="single-slide">
              <div className="icon">
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/loan-type-3.png"
                  alt=""
                />
              </div>
              <h4>Payday Loans</h4>
              <p>
                Our team of experts uses methodology identify the credit cards
                most.
              </p>
            </div>
            <div className="single-slide">
              <div className="icon">
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/loan-type-1.png"
                  alt=""
                />
              </div>
              <h4>Personal Loans</h4>
              <p>
                Our team of experts uses methodology identify the credit cards
                most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area-3 bg-white pb-lg-120 pb-60">
        <div className="container">
          <div className="section-title">
            <span className="short-title-2">ABout us</span>
            <h1 className="wow fadeInUp">Learn about how Banca works</h1>
          </div>
          <div className="row align-items-center pt-60 gy-lg-0 gy-4">
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
              <div>
                <h5>
                  <span className="round-dot"></span> <span>1.5M</span> Active
                  Customers
                </h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have.
                </p>
              </div>
              <div className="mt-40">
                <h5>
                  <span className="round-dot"></span> <span>30k</span> Business
                  Partners
                </h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have.
                </p>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.3s">
              <div className="video-tut">
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/about-us-img.png"
                  alt=""
                />
                <a
                  className="play-btn"
                  data-fancybox=""
                  href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                  tabIndex="0"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="coverage-area">
        <div className="container">
          <div className="section-title">
            <span className="short-title-2">ABout us</span>
            <h1 className="wow fadeInUp">Learn about how Banca works</h1>
          </div>
          <div className="row mt-50 gy-xl-0 gy-4 text-center">
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <a
                href="#"
                className="country-widget wow fadeInLeft"
                data-wow-delay="0.1s"
              >
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/country-1.png"
                  alt="country"
                />
                <h5>Brazil</h5>
              </a>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <a
                href="#"
                className="country-widget wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/country-2.png"
                  alt="country"
                />
                <h5>Canada</h5>
              </a>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <a
                href="#"
                className="country-widget wow fadeInLeft"
                data-wow-delay="0.5s"
              >
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/country-3.png"
                  alt="country"
                />
                <h5>Australia</h5>
              </a>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <a
                href="#"
                className="country-widget wow fadeInLeft"
                data-wow-delay="0.7s"
              >
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/country-4.png"
                  alt="country"
                />
                <h5>USA</h5>
              </a>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <a
                href="#"
                className="country-widget wow fadeInLeft"
                data-wow-delay="0.9s"
              >
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/country-5.png"
                  alt="country"
                />
                <h5>South Korea</h5>
              </a>
            </div>

            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <a
                href="#"
                className="country-widget wow fadeInLeft"
                data-wow-delay="1.1s"
              >
                <Image
                  width={300}
                  height={300}
                  src="/img/home-5/country-6.png"
                  alt="country"
                />
                <h5>Bangladesh</h5>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="get-touch-area-2">
        <div className="container">
          <div className="row align-items-center gy-md-0 gy-4">
            <div className="col-md-6">
              <h1>Get your own personal consultation</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form,
              </p>
              <div className="consult-num">
                <div>
                  <h1>1M+</h1>
                  <p>Total Customers</p>
                </div>
                <div>
                  <h1>40+</h1>
                  <p>Financial Consultants</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="touch-form">
                <h3>Get in touch</h3>
                <form action="">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter full name"
                    required
                  />
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Enter email address"
                    required
                  />
                  <button type="submit" className="theme-btn mt-10">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexCompany;
