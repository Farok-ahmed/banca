/* eslint-disable jsx-a11y/role-supports-aria-props */
import Image from 'next/image';
import Link from 'next/link';

const LoanSteps = () => {
  return (
    <div>
      <main>
        <section
          className="banner-area-2 pt-200 pb-95"
          id="banner_animation"
          style={{ backgroundSize: `auto; background-position: top left` }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="banner-content">
                  <Image
                    width={160}
                    height={180}
                    data-parallax='{"x": 0, "y": 250, "rotateZ":0}'
                    className="shape"
                    src="/img/banner/shape-3.png"
                    alt="shape"
                  />
                  <h1 className="wow fadeInUp mb-0">
                    Flexible home loans for the international lifestyle.
                  </h1>
                  <p className="wow fadeInUp mt-50" data-wow-delay="0.3s">
                    Banca is the one you can rely that will support you all the
                    way by offering Home Loan facilities.
                  </p>
                  <Link
                    href="loan.html"
                    data-wow-delay="0.5s"
                    className="wow fadeInUp theme-btn theme-btn-lg mt-50"
                  >
                    Apply now <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
              <div className=" col-md-6 col-lg-5 offset-lg-1 pt-40">
                <div className="banner-img">
                  <Image
                    width={400}
                    height={200}
                    className="main-img img-fluid wow fadeInRight"
                    src="/img/banner/banner-img-2.png"
                    alt="banner-img"
                  />
                  <div className="shapes">
                    <Image
                      width={90}
                      height={150}
                      data-parallax='{"x": 0, "y": 130, "rotateZ":0}'
                      className="shape-1"
                      src="/img/banner/shape-1.png"
                      alt="shape"
                    />
                    <Image
                      width={200}
                      height={200}
                      data-parallax='{"x": 0, "y": -130, "rotateZ":0}'
                      className="shape-2"
                      src="/img/banner/shape-2.png"
                      alt="shape"
                    />
                    <Image
                      width={100}
                      height={100}
                      data-parallax='{"x": 250, "y":0, "rotateZ":0}'
                      className="shape-3"
                      src="/img/banner/shape-4.png"
                      alt="shape"
                    />
                    <Image
                      width={20}
                      height={20}
                      data-parallax='{"x": -200, "y": 250, "rotateZ":0}'
                      className="shape-4"
                      src="/img/banner/shape-5.png"
                      alt="shape"
                    />
                    <Image
                      width={20}
                      height={20}
                      className="shape-5"
                      src="/img/banner/shape-6.png"
                      alt="shape"
                    />
                    <Image
                      width={20}
                      height={20}
                      className="shape-6"
                      src="/img/banner/shape-7.png"
                      alt="shape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-area-2 pt-140 pb-140" id="feature">
          <div className="container">
            <div className="feature">
              <div className="row gy-lg-0 gy-4">
                <div className="col-lg-4">
                  <div
                    className="feature-widget-2 align-items-center wow fadeInRight feature-1"
                    data-wow-delay="0.1s"
                  >
                    <div className="shapes">
                      <Image
                        width={120}
                        height={60}
                        src="/img/feature/shape-6.png"
                        alt="shape"
                      />
                      <Image
                        width={100}
                        height={70}
                        src="/img/feature/shape-10.png"
                        alt="shape"
                      />
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/shape-4.png"
                        alt="shape"
                      />
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/shape-3.png"
                        alt="shape"
                      />
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/shape-12.png"
                        alt="shape"
                      />
                      <Image
                        width={30}
                        height={30}
                        src="/img/feature/shape-12.png"
                        alt="shape"
                      />
                    </div>

                    <div className="feature-img">
                      <Image
                        width={90}
                        height={50}
                        src="/img/feature/icon-5.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-content">
                      <p>UP TO $5M</p>
                      <h6>High Rang Loan</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="feature-widget-2 align-items-center wow fadeInRight feature-2"
                    data-wow-delay="0.3s"
                  >
                    <div className="shapes">
                      <Image
                        width={35}
                        height={60}
                        src="/img/feature/shape-13.png"
                        alt="shape"
                      />
                      <Image
                        width={80}
                        height={50}
                        src="/img/feature/shape-14.png"
                        alt="shape"
                      />
                      <Image
                        width={100}
                        height={30}
                        src="/img/feature/shape-15.png"
                        alt="shape"
                      />
                      <Image
                        width={50}
                        height={50}
                        src="/img/feature/shape-11.png"
                        alt="shape"
                      />
                      <Image
                        width={50}
                        height={50}
                        src="/img/feature/shape-12.png"
                        alt="shape"
                      />
                      <Image
                        width={10}
                        height={10}
                        src="/img/feature/shape-5.png"
                        alt="shape"
                      />
                    </div>
                    <div className="feature-img">
                      <Image
                        width={90}
                        height={50}
                        src="/img/feature/icon-6.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-content">
                      <p>FROM 7.50%</p>
                      <h6>Offer Low Interest</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="feature-widget-2 align-items-center wow fadeInRight feature-3"
                    data-wow-delay="0.5s"
                  >
                    <div className="shapes">
                      <Image
                        width={160}
                        height={50}
                        src="/img/feature/shape-1.png"
                        alt="shape"
                      />
                      <Image
                        width={70}
                        height={40}
                        src="/img/feature/shape-2.png"
                        alt="shape"
                      />
                      <Image
                        width={130}
                        height={60}
                        src="/img/feature/shape-6.png"
                        alt="shape"
                      />
                      <Image
                        width={40}
                        height={40}
                        src="/img/feature/shape-9.png"
                        alt="shape"
                      />
                      <Image
                        width={50}
                        height={50}
                        src="/img/feature/shape-11.png"
                        alt="shape"
                      />
                    </div>
                    <div className="feature-img">
                      <Image
                        width={80}
                        height={50}
                        src="/img/feature/icon-7.png"
                        alt=""
                      />
                    </div>
                    <div className="feature-content">
                      <p>7 DAYS PROCESS</p>
                      <h6>Fast & Easy Process</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="fast-e-loan pt-130">
              <div className="row gy-xl-0 gy-4">
                <div className="col-xl-5 ">
                  <div className="section-title text-start">
                    <h2 className="mb-3">
                      Fast, secure & easy loans in just 7 days
                    </h2>
                    <p>
                      Need some fast cash? Bad cradit history? We dont mind
                      about your past, just the future. Try loan start and feel
                      secure in your future.
                    </p>
                  </div>
                </div>

                <div className="col-xl-3 col-md-6 offset-xl-1 ">
                  <div className="apply-topics">
                    <ul>
                      <li>
                        <i className="icon_box-checked"></i>Get up to $15,000
                        Cash Fast
                      </li>
                      <li>
                        <i className="icon_box-checked"></i>15 MinuteOnline
                        Application
                      </li>
                      <li>
                        <i className="icon_box-checked"></i>Centrelink
                        Considered*
                      </li>
                      <li>
                        <i className="icon_box-checked"></i>Bad Credit
                        Considered2
                      </li>
                    </ul>
                    <Link href="loan.html" className="theme-btn mt-20 w-100">
                      Apply for loans
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 ">
                  <div className="learn-more">
                    <ul>
                      <li>
                        <span>1.</span> Subject to verifcation, suitability and
                        affordability
                      </li>
                      <li className="mt-20">
                        <span>2.</span> Your income from Centrelink must be less
                        then 50% of your total income in order to qialify.
                      </li>
                    </ul>
                    <Link
                      href="#"
                      className="theme-btn theme-btn-light w-100 mt-30"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="manage-c-finance pt-125 pb-140">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-title">
                  <h2 className="wow fadeInUp">
                    Manage your corporate finances by yourself or in a team
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    To replace or complement your bank
                  </p>
                </div>
              </div>
            </div>

            <div className="row pt-60 gy-4 gy-xl-0">
              <div className="col-xl-3 col-md-6">
                <div
                  className="feature-card-widget-2 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="icon-bg-1">
                    <Image
                      width={30}
                      height={30}
                      src="/img/corporate-finance/icon-5.svg"
                      alt="icon"
                    />
                  </div>
                  <h5>Freelancers</h5>
                  <p>
                    The best business account to send and receive payments on a
                    daily basis.
                  </p>
                  <Link href="#" className="theme-btn theme-btn-outlined mt-45">
                    Find Out More
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div
                  className="feature-card-widget-2 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="icon-bg-2">
                    <Image
                      width={30}
                      height={30}
                      src="/img/corporate-finance/icon-2.svg"
                      alt="icon"
                    />
                  </div>
                  <h5>SMBs & Startups</h5>
                  <p>
                    Optimize your teams expenses by always staying in control.
                  </p>
                  <Link href="#" className="theme-btn theme-btn-outlined mt-45">
                    Find Out More
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div
                  className="feature-card-widget-2 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="icon-bg-3">
                    <Image
                      width={30}
                      height={30}
                      src="/img/corporate-finance/icon-3.svg"
                      alt="icon"
                    />
                  </div>
                  <h5>Business Founders</h5>
                  <p>
                    Open a business account for the online deposit of your share
                    capital.
                  </p>
                  <Link href="#" className="theme-btn theme-btn-outlined mt-45">
                    Find Out More
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div
                  className="feature-card-widget-2 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="icon-bg-4">
                    <Image
                      width={30}
                      height={30}
                      src="/img/corporate-finance/icon-4.svg"
                      alt="icon"
                    />
                  </div>
                  <h5>Microbusinesses</h5>
                  <p>
                    Stay focused on your core business by managing your finances
                    and accounting.
                  </p>
                  <Link href="#" className="theme-btn theme-btn-outlined mt-45">
                    Find Out More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-work pt-125 pb-140">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="section-title">
                  <h2 className="wow fadeInUp mb-3">Here is how it works.</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.3s">
                    When you are ready, Cardinal Loans is ready too - 24 hours a
                    day, 7 days a week.
                  </p>
                </div>
              </div>
            </div>

            <div className="row pt-60 gy-lg-0 gy-4">
              <div className="col-lg-6 pe-lg-5">
                <div
                  className="single-widget apply-online wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="widget-header">
                    <div className="widget-img">
                      <Image
                        width={70}
                        height={70}
                        src="/img/how-works/icon-1.png"
                        alt="icon"
                      />
                    </div>
                    <div className="widget-title">
                      <h4>Apply Online</h4>
                      <p>
                        That is why we have a wide range of you can apply for a
                        Personal Loan.
                      </p>
                    </div>
                  </div>

                  <ul className="widget-content">
                    <li className="active">
                      {' '}
                      <span className="number">1</span>{' '}
                      <span className="text">Apply Online</span>
                    </li>
                    <li>
                      {' '}
                      <span className="number">2</span>{' '}
                      <span className="text">
                        Enter Your Informantion - 10 min
                      </span>{' '}
                    </li>
                    <li>
                      {' '}
                      <span className="number">3</span>{' '}
                      <span className="text">
                        Pre-qualify / Pre-Approve - 5 min
                      </span>{' '}
                    </li>
                    <li>
                      {' '}
                      <span className="number">4</span>{' '}
                      <span className="text">Help you prepare</span>{' '}
                    </li>
                    <li>
                      {' '}
                      <span className="number">5</span>{' '}
                      <span className="text">
                        We help your qualify - 15 days
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 ps-lg-0">
                <div
                  className="single-widget consultation wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="widget-header">
                    <div className="widget-img">
                      <Image
                        width={70}
                        height={70}
                        src="/img/how-works/icon-2.png"
                        alt="icon"
                      />
                    </div>
                    <div className="widget-title">
                      <h4>Consultation</h4>
                      <p>
                        Conis Guide on the supervisory approach to consolidation
                        in the banking sector.
                      </p>
                    </div>
                  </div>

                  <ul className="widget-content">
                    <li className="active">
                      {' '}
                      <span className="number">1</span>
                      <span className="text">Schedule a Free Consulation</span>
                    </li>
                    <li>
                      {' '}
                      <span className="number">2</span>{' '}
                      <span className="text">Discuss your Situation</span>
                    </li>
                    <li>
                      {' '}
                      <span className="number">3</span>{' '}
                      <span className="text">We Review your condition </span>
                    </li>
                    <li>
                      {' '}
                      <span className="number">4</span>{' '}
                      <span className="text">Help you prepare</span>{' '}
                    </li>
                    <li>
                      {' '}
                      <span className="number">5</span>{' '}
                      <span className="text">We help your qualify</span>{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="security-area">
          <div className="security-priority pt-90 pb-95 text-center">
            <div className="shapes">
              <Image
                width={60}
                height={60}
                src="/img/security-tips/shape-1.png"
                alt="shape"
              />
              <Image
                width={40}
                height={40}
                src="/img/security-tips/shape-2.png"
                alt="shape"
              />
              <Image
                width={40}
                height={40}
                src="/img/security-tips/shape-3.png"
                alt="shape"
              />
              <Image
                width={170}
                height={100}
                src="/img/security-tips/shape-4.png"
                alt="shape"
              />
              <Image
                width={60}
                height={60}
                src="/img/security-tips/shape-5.png"
                alt="shape"
              />
              <Image
                width={100}
                height={100}
                src="/img/security-tips/shape-6.png"
                alt="shape"
              />
              <Image
                width={40}
                height={40}
                src="/img/security-tips/shape-1.png"
                alt="shape"
              />
              <Image
                width={200}
                height={250}
                data-parallax='{"x": -60, "y": 150, "rotateZ":-15}'
                src="/img/security-tips/shape-7.png"
                alt="shape"
              />
              <Image
                width={100}
                height={200}
                data-parallax='{"x": 0, "y": -150, "rotateZ":0}'
                src="/img/security-tips/shape-8.png"
                alt="shape"
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 mx-auto">
                  <Image
                    width={60}
                    height={70}
                    src="/img/security-tips/security-priority.png"
                    alt="icon"
                  />
                  <h2 className="mt-4 mb-3">Your security. Our priority.</h2>
                  <p>
                    We always have your security in mind. Rest easy knowing your
                    data is protected with 128-bit encryption.{' '}
                    <Link href="#">Learn more.</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-area pt-125 pb-200">
          <div className="container">
            <div className="section-title text-start">
              <h2 className="mb-0 wow fadeInUp">Frequently asked questions</h2>
            </div>

            <div className="row pt-30 align-items-end">
              <div className="col-lg-7 col-md-8">
                <div className="faq-widget">
                  <div className="accordion" id="accordionExample">
                    <div
                      className="single-widget-one wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="w-100">
                        <div className="faq-header" id="headingOne">
                          <h4
                            className="mb-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Can I pay off my loan early?
                            <i className="icon_plus"></i>
                            <i className=" icon_minus-06"></i>
                          </h4>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="faq-body">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="single-widget-one wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="w-100">
                        <div className="faq-header" id="headingTwo">
                          <h4
                            className="mb-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            How much can I Banca?<i className="icon_plus"></i>
                            <i className=" icon_minus-06"></i>
                          </h4>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="faq-body">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="single-widget-one wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="w-100">
                        <div className="faq-header" id="headingThree">
                          <h4
                            className="mb-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseThree"
                          >
                            Do you offering refinancing ?
                            <i className="icon_plus"></i>
                            <i className=" icon_minus-06"></i>
                          </h4>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="faq-body">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="single-widget-one wow fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      <div className="w-100">
                        <div className="faq-header" id="headingFour">
                          <h4
                            className="mb-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="true"
                            aria-controls="collapseFour"
                          >
                            Can I do all of my banking with you?
                            <i className="icon_plus"></i>
                            <i className=" icon_minus-06"></i>
                          </h4>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="faq-body">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="single-widget-one wow fadeInUp"
                      data-wow-delay="0.9s"
                    >
                      <div className="w-100">
                        <div className="faq-header" id="headingFive">
                          <h4
                            className="mb-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="true"
                            aria-controls="collapseFive"
                          >
                            When should i apply?<i className="icon_plus"></i>
                            <i className=" icon_minus-06"></i>
                          </h4>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="faq-body">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 offset-lg-1 mt-4 mt-md-0 ps-lg-5">
                <div className="faq-img">
                  <Image
                    width={900}
                    height={900}
                    className="img-fluid"
                    src="/img/faq/illustration.png"
                    alt="faq-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-area pt-60">
          <div className="container">
            <div className="row">
              <div className="col-md-12 position-relative">
                <div className="cta cta-bg-primary">
                  <div className="shapes">
                    <Image
                      width={50}
                      height={50}
                      src="/img/cta/icon-1.png"
                      alt="shape"
                    />
                    <Image
                      width={60}
                      height={30}
                      data-parallax='{"x": 150, "y": 0, "rotateZ":-0}'
                      src="/img/cta/icon-2.png"
                      alt="shape"
                    />
                    <Image
                      width={140}
                      height={100}
                      src="/img/cta/icon-3.png"
                      alt="shape"
                    />
                    <Image
                      width={100}
                      height={100}
                      src="/img/cta/icon-4.png"
                      alt="shape"
                    />
                    <Image
                      width={90}
                      height={100}
                      src="/img/cta/icon-5.png"
                      alt="shape"
                    />
                    <Image
                      width={60}
                      height={40}
                      data-parallax='{"x": 400, "y": 0, "rotateZ":0}'
                      src="/img/cta/icon-6.png"
                      alt="shape"
                    />
                  </div>

                  <div className="row align-items-center">
                    <div className="col-md-7">
                      <div className="cta-content wow fadeInRight">
                        <h2 className="mb-10">Have any question?</h2>
                        <p>
                          Ask us anythisg.Do you have a love question you want
                          us to answer?
                        </p>
                      </div>
                    </div>

                    <div className="col-md-5 text-center text-md-end">
                      <div className="cta-content   text-md-end mt-3 mt-md-0">
                        <Link
                          href="contact.html"
                          className="theme-btn theme-btn-alt wow fadeInLeft m-0"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer footer-3">
        <div className="footer-top  pt-200 pb-lg-115 pb-120">
          <div className="container">
            <div className="row gx-0 pt-45 ">
              <div className="col-lg-4 col-sm-6 text-center text-sm-start ms-0 ">
                <div className="footer-widget wow fadeInLeft mb-30">
                  <div className="footer-text mb-20">
                    <p>
                      Banca is a leading bank in the worldzone and a prominent
                      international banking institution
                    </p>
                  </div>

                  <span className="overline">COTATION</span>

                  <div className="footer-bold">
                    <span className="counter">
                      $<span>35.105</span>{' '}
                    </span>
                    <span className="counter">
                      -<span>0.46</span>%{' '}
                    </span>
                  </div>
                  <p className="time">2021-01-05 14:00 (INTERNATIONAL TIME)</p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 text-center text-sm-start ms-lg-5 ">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="f-widget-title">
                    <h5>Banca at a Glance</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#"> Our core Businesses</Link>
                      </li>
                      <li>
                        <Link href="#"> Our company purpose</Link>
                      </li>
                      <li>
                        <Link href="#"> Jobs & Careers</Link>
                      </li>
                      <li>
                        <Link href="#"> Our Responsibility</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2  col-sm-6 text-center text-sm-start ms-lg-5">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="f-widget-title">
                    <h5>Publications</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#"> Compliance Publications</Link>
                      </li>
                      <li>
                        <Link href="#"> Annual Reports</Link>
                      </li>
                      <li>
                        <Link href="#"> CSR Reports</Link>
                      </li>
                      <li>
                        <Link href="#"> Financial documentation</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 text-center text-sm-start me-0 ms-lg-5">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="f-widget-title">
                    <h5>Direct Access</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#">Our news</Link>
                      </li>
                      <li>
                        <Link href="#">Our press releases</Link>
                      </li>
                      <li>
                        <Link href="#">Our job offers</Link>
                      </li>
                      <li>
                        <Link href="#">Our websites</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright pt-25 pb-25">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 text-center text-lg-start">
                <Link href="index.html" className="p-0 m-0">
                  <Image
                    width={90}
                    height={35}
                    src="/img/logo/Logo.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-lg-5 text-center my-3 my-sm-0">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; Banca 2025. <br className="d-sm-none" />{' '}
                    <Link className="ms-2" href="#">
                      Privacy
                    </Link>{' '}
                    |
                    <Link className="ms-0" href="#">
                      Term of Use
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-center text-lg-end ">
                <div className="social-button">
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoanSteps;
