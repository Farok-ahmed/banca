import Image from "next/image"

const SmallBank = () => {
  return <div>
    <main>
        <section className="bank-banner-area">
            <Image width={200} height={200} className="wave_img" src="/img/bank/wave.png" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bank-banner-content">
                            <h5 className="wow fadeInUp" data-wow-delay="0.2s">Manage your Finance</h5>
                            <h1 className="wow fadeInUp" data-wow-delay="0.3s">Your <span
                                    className="underline-shape">banking</span> made easier.</h1>
                            <p className="wow fadeInUp" data-wow-delay="0.4s">Inventore veritatis et architecto beatae
                                vitaie dicta explicab
                                nemo ipsam volupetateme voluptashte aspernatur.</p>
                            <div className="d-flex flex-column flex-sm-row mt-25 subscribe-field wow fadeInUp"
                                data-wow-delay="0.6s">
                                <input type="email" className="form-control me-sm-1" placeholder="Enter Email address"/>
                                <button className="input-append theme-btn theme-btn-lg ms-sm-2">Subscribe</button>
                            </div>
                            <ul className="list-unstyled feature-list wow fadeInUp" data-wow-delay="0.7s">
                                <li><i className="fas fa-check-circle"></i> Get 30 day free trial</li>
                                <li><i className="fas fa-check-circle"></i> No Spamming</li>
                            </ul>
                            <div className="active-user d-flex align-items-center wow fadeInUp" data-wow-delay="0.8s">
                                <div className="user-img-inner">
                                    <Image width={200} height={200} src="/img/bank/active-user1.jpg" alt=""/>
                                    <Image width={200} height={200} src="/img/bank/active-user2.jpg" alt=""/>
                                    <Image width={200} height={200} src="/img/bank/active-user3.jpg" alt=""/>
                                </div>
                                5K+ ⭐ Active users
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bank-card-img">
                            <div className="bank-card wow fadeInUp" data-wow-delay="0.8s">
                                <Image width={200} height={200} data-parallax='{"x": 0, "y": 90}' src="/img/bank/card-3.png" alt=""/>
                            </div>
                            <div className="bank-card wow fadeInUp" data-wow-delay="0.5s">
                                <Image width={200} height={200} data-parallax='{"x": 0, "y": 50}' src="/img/bank/card-2.png" alt=""/>
                            </div>
                            <div className="bank-card wow fadeInUp" data-wow-delay="0.3s">
                                <Image width={200} height={200} src="/img/bank/card-1.png" alt=""/>
                            </div>
                            <Image width={200} height={200} className="shap one" src="/img/bank/line.png" alt=""/>
                            <Image width={200} height={200} data-parallax='{"x": 0, "y": 50, "rotateZ": 305}' className="shap two"
                                src="/img/bank/Star-2.png" alt=""/>
                            <Image width={200} height={200} data-parallax='{"x": 0, "y": 0, "rotateZ": 305}' className="shap three"
                                src="/img/bank/Star-3.png" alt=""/>
                            <Image width={200} height={200} data-parallax='{"x":20, "y": 0, "rotateZ": 305}' className="shap four"
                                src="/img/bank/Star-4.png" alt=""/>
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
                                <Image width={40} height={40} src="/img/bank/single-icon.png" alt=""/>
                            </div>
                            <h3>Single term fees</h3>
                            <p>Realtime problem solving is not just about time, it is about time this allows you to solve
                                within a specified time problem than you would.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="fact-item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="icon">
                                <Image width={40} height={40} src="/img/bank/world-icon.png" alt=""/>
                            </div>
                            <h3>Worldwide Locations</h3>
                            <p>Realtime problem solving is not just about time, it is about time this allows you to solve
                                within a specified time problem than you would.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="fact-item wow fadeInUp" data-wow-delay="0.4s">
                            <div className="icon">
                                <Image width={40} height={40} src="/img/bank/sheld-icon.png" alt=""/>
                            </div>
                            <h3>Safe and protected</h3>
                            <p>Realtime problem solving is not just about time, it is about time this allows you to solve
                                within a specified time problem than you would.</p>
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
                            <span className="short-title-2 wow fadeInUp">OUR PROCESS</span>
                            <h1 className="wow fadeInUp">Get loan from 4
                                simple <span className="underline-shape">process</span>
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay="0.3s">Choose your training and register for free. If
                                you are a freelancer, the courses are entirely taken care of you have nothing to pay and
                                no money to advance.</p>
                            <a className="read-more wow fadeInUp" data-wow-delay="0.3s" href="#">Learn more about it <i
                                    className="arrow_right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-7 ps-lg-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="feature-card-widget-8 saas-feature-card wow fadeInUp" data-wow-delay="0.1s">
                                    <h2 className="number">01</h2>
                                    <h4>Check Eligibility</h4>
                                    <p>Choose your training and register for free if you are a freelancer the courses
                                        are entirely taken care.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-card-widget-8 saas-feature-card wow fadeInUp" data-wow-delay="0.3s">
                                    <h2 className="number">02</h2>
                                    <h4>Apply for loan</h4>
                                    <p>Choose your training and register for free if you are a freelancer the courses
                                        are entirely taken care.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-card-widget-8 saas-feature-card wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="number">03</h2>
                                    <h4>Get Approved</h4>
                                    <p>Choose your training and register for free if you are a freelancer the courses
                                        are entirely taken care.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-card-widget-8 saas-feature-card wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="number">04</h2>
                                    <h4>Get your money</h4>
                                    <p>Choose your training and register for free if you are a freelancer the courses
                                        are entirely taken care.
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
                                <span className="short-title-2 wow fadeInUp">Our Application</span>
                                <h1 className="wow fadeInUp">All your <span className="underline-shape">financials</span>
                                    in one single app.
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay="0.3s">It is a long established fact that a
                                    reader will be distracted by there readable content of a page when looking at its
                                    layout point .</p>
                                <ul className="list-unstyled feature-list wow fadeInUp" data-wow-delay="0.4s">
                                    <li> <i className="fas fa-check-circle"></i> It is long established fact that reader
                                        will be. </li>
                                    <li> <i className="fas fa-check-circle"></i> It is long established fact distracted the
                                        readable.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <Image width={200} height={200} className="wow fadeInUp" data-wow-delay="0.4s" src="/img/bank/mobile.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>


        <section className="bank-card-area">
            <div className="container">
                <div className="section-title bank-section-title mb-80">
                    <span className="short-title-2 wow fadeInUp">Cards</span>
                    <h1 className="wow fadeInUp text-white">We offer variety of <br/><span
                            className="underline-shape">cards</span> with
                        features
                    </h1>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <ul className="nav nav-tabs bank-card-tab" id="myTab" role="tablist">
                            <li className="nav-item wow fadeInUp" role="presentation">
                                <button className="nav-link bank-card-item active" id="freelancer-tab" data-bs-toggle="tab"
                                    data-bs-target="#freelancer" type="button" role="tab" aria-controls="freelancer"
                                    aria-selected="true">
                                    <h5>Standard Card</h5>
                                    <p>Choose your training and register for free. If you are a freelancer, the courses
                                        are
                                        entirely taken care you.</p>
                                </button>
                            </li>
                            <li className="nav-item wow fadeInUp" data-wow-delay="0.2s" role="presentation">
                                <button className="nav-link bank-card-item" id="startup-tab" data-bs-toggle="tab"
                                    data-bs-target="#startup" type="button" role="tab" aria-controls="startup"
                                    aria-selected="false">
                                    <h5>Premium Card</h5>
                                    <p>Choose your training and register for free. If you are a freelancer, the courses
                                        are
                                        entirely taken care you.</p>
                                </button>
                            </li>
                            <li className="nav-item wow fadeInUp" data-wow-delay="0.3s" role="presentation">
                                <button className="nav-link bank-card-item" id="business-tab" data-bs-toggle="tab"
                                    data-bs-target="#business" type="button" role="tab" aria-controls="business"
                                    aria-selected="false">
                                    <h5>Business Card</h5>
                                    <p>Choose your training and register for free. If you are a freelancer, the courses
                                        are
                                        entirely taken care you.</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="tab-content bank-card-content wow fadeInUp" id="myTabContent">
                            <div className="tab-pane fade show active" id="freelancer" role="tabpanel"
                                aria-labelledby="freelancer-tab">
                                <div className="card-img">
                                    <Image width={200} height={200} className="card_one" src="/img/bank/f-card1.png" alt=""/>
                                    <Image width={200} height={200} className="card_two" src="/img/bank/f-card2.png" alt=""/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="startup" role="tabpanel" aria-labelledby="startup-tab">
                                <div className="card-img">
                                    <Image width={200} height={200} className="card_one" src="/img/bank/f_card3.png" alt=""/>
                                    <Image width={200} height={200} className="card_two" src="/img/bank/f_card4.png" alt=""/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="business" role="tabpanel" aria-labelledby="business-tab">
                                <div className="card-img">
                                    <Image width={200} height={200} className="card_one" src="/img/bank/f_card5.png" alt=""/>
                                    <Image width={200} height={200} className="card_two" src="/img/bank/f_card6.png" alt=""/>
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
                    <h1 className="wow fadeInUp">A variety of tools you<br/>
                        can <span className="underline-shape">integrate</span> with
                    </h1>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="feature-card-widget-8 saas-feature-card wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card-img">
                                <Image width={200} height={200} src="/img/bank/slack.png" alt="feature svg"/>
                            </div>
                            <h4>Slack</h4>
                            <p>Choose your training and register for free if you are a freelancer the courses are entire
                                taken care about the way to.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="feature-card-widget-8 saas-feature-card wow fadeInUp" data-wow-delay="0.3s">
                            <div className="card-img">
                                <Image width={200} height={200} src="/img/bank/dropbox.png" alt="feature svg"/>
                            </div>
                            <h4>Dropbox</h4>
                            <p>Choose your training and register for free if you are a freelancer the courses are entire
                                taken care about the way to.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="feature-card-widget-8 saas-feature-card wow fadeInUp" data-wow-delay="0.6s">
                            <div className="card-img">
                                <Image width={200} height={200} src="/img/bank/google_drive.png" alt="feature svg"/>
                            </div>
                            <h4>Google Drive</h4>
                            <p>Choose your training and register for free if you are a freelancer the courses are entire
                                taken care about the way to.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="feature-card-widget-8 saas-feature-card wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card-img">
                                <Image width={200} height={200} src="/img/bank/jira.png" alt="feature svg"/>
                            </div>
                            <h4>Jira</h4>
                            <p>Choose your training and register for free if you are a freelancer the courses are entire
                                taken care about the way to.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="feature-card-widget-8 saas-feature-card wow fadeInUp" data-wow-delay="0.3s">
                            <div className="card-img">
                                <Image width={200} height={200} src="/img/bank/zendesk.png" alt="feature svg"/>
                            </div>
                            <h4>Zendesk</h4>
                            <p>Choose your training and register for free if you are a freelancer the courses are entire
                                taken care about the way to.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="feature-card-widget-8 saas-feature-card wow fadeInUp" data-wow-delay="0.6s">
                            <div className="card-img">
                                <Image width={200} height={200} src="/img/bank/mailchimp.png" alt="feature svg"/>
                            </div>
                            <h4>Mailchimp</h4>
                            <p>Choose your training and register for free if you are a freelancer the courses are entire
                                taken care about the way to.
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
                    <h1>Our customer base<br/> reaches <span className="underline-shape">worldwide</span></h1>
                </div>
                <div className="map_inner">
                    <Image width={200} height={200} src="/img/bank/map.png" alt=""/>
                    <ul className="list-unstyled map_list">
                        <li className="active wow zoomIn" data-wow-delay="0.2s"><Image width={200} height={200} src="/img/bank/flag-1.png" alt=""/>
                        </li>
                        <li className="wow zoomIn" data-wow-delay="0.4s"><Image width={200} height={200} src="/img/bank/flag-2.png" alt=""/></li>
                        <li className="wow zoomIn" data-wow-delay="0.5s"><Image width={200} height={200} src="/img/bank/flag-3.png" alt=""/></li>
                        <li className="wow zoomIn" data-wow-delay="0.6s"><Image width={200} height={200} src="/img/bank/flag-4.png" alt=""/></li>
                        <li className="wow zoomIn" data-wow-delay="0.7s"><Image width={200} height={200} src="/img/bank/flag-5.png" alt=""/></li>
                        <li className="wow zoomIn" data-wow-delay="0.8s"><Image width={200} height={200} src="/img/bank/flag-6.png" alt=""/></li>
                        <li className="wow zoomIn" data-wow-delay="0.9s"><Image width={200} height={200} src="/img/bank/flag-7.png" alt=""/></li>
                        <li className="wow zoomIn" data-wow-delay="0.95s"><Image width={200} height={200} src="/img/bank/flag-8.png" alt=""/></li>
                    </ul>
                </div>
            </div>
        </section>



        <section className="calculator-area-three">
            <div className="container">
                <div className="section-title bank-section-title mb-80">
                    <span className="short-title-2">Loan Calculator</span>
                    <h1 className="wow fadeInUp"><span className="underline-shape">Calculate</span> your loan<br/>
                        & get loan details
                    </h1>
                </div>

                <div className="calculator-widget-2 mt-50">
                    <div className="row  gy-lg-0 gy-3">
                        <div className="col-lg-7">
                            <div className="single-calculator-widget wow fadeInUp" data-wow-delay="0.1s">
                                <h4>Loan Calculator</h4>
                                <div className="range-label mt-40">Loan Term</div>
                                <nav>
                                    <div className="nav nav-tabs loan-type-select" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="yearTab-tab" data-bs-toggle="tab"
                                            data-bs-target="#yearTab" type="button" role="tab" aria-controls="yearTab"
                                            aria-selected="false">Yearly
                                        </button>
                                        <button className="nav-link " id="monthTab-tab" data-bs-toggle="tab"
                                            data-bs-target="#monthTab" type="button" role="tab" aria-controls="monthTab"
                                            aria-selected="false">Monthly</button>
                                        <button className="nav-link" id="weekTab-tab" data-bs-toggle="tab"
                                            data-bs-target="#weekTab" type="button" role="tab" aria-controls="weekTab"
                                            aria-selected="false">Weekly</button>
                                    </div>
                                </nav>

                                <div className="range-label">Loan Amount</div>
                                <div className="single-range">
                                    <div id="RangeSlider"></div>
                                    <div className="input-group">
                                        <input className="noTextMerge" type="text" id="SetRange"/>
                                        <span className="input-group-text">$</span>
                                    </div>
                                </div>
                                <div className="range-label">Interest Rate</div>
                                <div className="single-range">
                                    <div id="RoiRangeSlider"></div>
                                    <div className="input-group">
                                        <input type="text" id="SetRoiRange"/>
                                        <span className="input-group-text">%</span>
                                    </div>
                                </div>
                                <div className="range-label">Loan Duration</div>
                                <div className="single-range">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="yearTab" role="tabpanel"
                                            aria-labelledby="yearTab">
                                            <div id="YearRangeSlider"></div>
                                        </div>
                                        <div className="tab-pane fade " id="monthTab" role="tabpanel"
                                            aria-labelledby="monthTab">
                                            <div id="MonthRangeSlider"></div>
                                        </div>
                                        <div className="tab-pane fade" id="weekTab" role="tabpanel"
                                            aria-labelledby="weekTab">
                                            <div id="WeekRangeSlider"></div>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <input className="noTextMerge" type="text" id="SetMonthRange"/>
                                        <span className="input-group-text loanTermIndicator">@example.com</span>
                                    </div>
                                </div>
                                <div className="d-flex loan-start-date">
                                    <div>
                                        <div className="range-label">Start Date</div>
                                        <div className="inp-container">
                                            <input type="text" id="loanStartDate" placeholder="Select Date"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="range-label">End Date</div>
                                        <div className="inp-container">
                                            <input type="text" id="loanEndDate" placeholder="Select Date"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 pl-lg-35">
                            <div className="calculator-result-widget wow fadeInUp" data-wow-delay="0.3s">
                                <div className="pie-wrapper mt-25" id="loan_graph_circle">
                                    <div className="label">Total Amount<h2 className="LoanTotalAmount"></h2>
                                    </div>
                                    <div className="pie">
                                        <div className="left-side half-circle"></div>
                                        <div className="right-side half-circle"></div>
                                    </div>
                                    <div className="circle-border"></div>
                                </div>
                                <div className="graph-indicator">
                                    <div><span className="blue-dot"></span> EMI Amount</div>
                                    <div><span className="orange-dot"></span> Interest Payable</div>
                                </div>
                                <ul className="loan-calculation list-unstyled">
                                    <li>
                                        <span className="label">EMI Amount (Principal + Interest)</span>
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
                                <a href="personal-details.html" className="theme-btn theme-btn-lg mt-20 w-100">Apply Now
                                    <i className="arrow_right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="saas-clients-logo bg-white pt-100">
            <div className="container">
                <p className="wow fadeInUp clients-logo-title" data-wow-delay="0.3s">Trust
                    Trusted by over <span>10,000+</span> customers wordwide</p>
                <div className="row gy-md-0 gy-4 align-items-center h-100">
                    <div className="col">
                        <a href="#"><Image width={200} height={200} className="clients-logo img-fluid wow fadeInRight" data-wow-delay="0.1s"
                                src="/img/saas-app/c_logo_1.png" alt="logo"/></a>
                    </div>
                    <div className="col">
                        <a href="#"><Image width={200} height={200} className="clients-logo img-fluid wow fadeInRight" data-wow-delay="0.3s"
                                src="/img/saas-app/c_logo_2.png" alt="logo"/></a>
                    </div>
                    <div className="col">
                        <a href="#"><Image width={200} height={200} className="clients-logo img-fluid wow fadeInRight" data-wow-delay="0.5s"
                                src="/img/saas-app/c_logo_3.png" alt="logo"/></a>
                    </div>
                    <div className="col">
                        <a href="#"><Image width={200} height={200} className="clients-logo img-fluid wow fadeInRight" data-wow-delay="0.7s"
                                src="/img/saas-app/c_logo_4.png" alt="logo"/></a>
                    </div>
                    <div className="col">
                        <a href="#"><Image width={200} height={200} className="clients-logo img-fluid wow fadeInRight" data-wow-delay="0.7s"
                                src="/img/saas-app/c_logo_5.png" alt="logo"/></a>
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
                                <p>Choose your training and register for free. If you are a freelancer, the courses are
                                    entirely taken care.</p>
                                <a href="#" className="wow fadeInUp theme-btn theme-btn-lg">Get started now <i
                                        className="arrow_right-up"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-end">
                            <Image width={200} height={200} className="wow fadeInUp" data-wow-delay="0.2s" src="/img/bank/mobile-two.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer className="bank-footer-area">
            <div className="container">
                <div className="footer_top">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="f-widget about-widget">
                                <a href="index.html" className="p-0 m-0"><Image width={200} height={200} src="/img/logo/Logo.png" alt="logo"/></a>
                                <p>It is difficult to find examples of lorem ipsum in use before Letrase.</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="f-widget link-widget">
                                <h4 className="f-widget-title">Company</h4>
                                <ul className="footer-link">
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Account Information</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="f-widget link-widget">
                                <h4 className="f-widget-title">Resources</h4>
                                <ul className="footer-link">
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Help Center</a></li>
                                    <li><a href="#">Tutorials</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="f-widget link-widget">
                                <h4 className="f-widget-title">Design Online</h4>
                                <ul className="footer-link">
                                    <li><a href="#">Logo Maker</a></li>
                                    <li><a href="#">Cover Photo Maker</a></li>
                                    <li><a href="#">Banner Maker</a></li>
                                    <li><a href="#">Branded Templates</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="f-widget link-widget">
                                <h4 className="f-widget-title">Tools</h4>
                                <ul className="footer-link">
                                    <li><a href="#">Templates</a></li>
                                    <li><a href="#">PDF Editor</a></li>
                                    <li><a href="#">Animator</a></li>
                                    <li><a href="#">Image Resizer</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6">
                        <div className="d-flex">
                            <p className="copyright-text"><a href="#">Terms of Service</a><a href="#">Privacy Policy</a><a
                                    href="#">Cookies Policy</a></p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 text-end">
                        <div className="f-social">
                            <a href="#"><i className="social_facebook"></i></a>
                            <a href="#"><i className="social_youtube"></i></a>
                            <a href="#"><i className="social_instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  </div>;
};

export default SmallBank;
