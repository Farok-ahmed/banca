import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/nice-select.css";
import "@/styles/css/jquery-editable-select.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";

import JobApplicationSection from "@/components/JobForm";
import DefaultLayout from "@/components/Layout";

const JobApplicationPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section className="breadcrumb-area">
            <div
              className="breadcrumb-widget  pt-145"
              style={{ backgroundImage: `url(img/breadcrumb/bg-2.png)` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="breadcrumb-content pt-135 pb-180">
                      <h1>Officer Admin and Finance (LRS Position)</h1>
                      <div className="breadcrumb-job-info d-flex justify-content-center mt-20">
                        <div className="job-location me-3">
                          {" "}
                          <i className="icon_pin_alt"></i>NY, United States
                        </div>
                        <div className="job-catagory">
                          {" "}
                          <span>Administration</span> | Full-time
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="job-application-area pt-110 pb-120 bg_white">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 order-2 order-lg-1">
                <div className="job-description-widget">
                  <div className="single-description-para">
                    <h6>Position Purpose</h6>
                    <p>
                      As a Teller at Capital you are the face of the credit
                      union. It's more than just processing financial
                      transactions. It's building lasting relationships and
                      helping others to improve their financial well-being. If a
                      philosophy of "people helping people" fits with your
                      personal philosophy, we're the place for you!{' '}
                    </p>
                  </div>
                  <div className="single-description-para">
                    <h6>Job Responsibilities</h6>
                    <ul>
                      <li>
                        Achieve individual target on daily, weekly & monthly
                        basis set by respective Department
                      </li>
                      <li>
                        Ensure smooth business operation at Agent Banking Centre
                        maintaining compliance
                      </li>
                      <li>
                        Follow up day to day activities of Agent Banking Centre
                        and being in touch with Head office regarding any
                        instruction/circular/guideline
                      </li>
                      <li>
                        Rapport build up with local potential customers to
                        promote financial literacy
                      </li>
                      <li>
                        Ensure proper service provided to each and every
                        customers as par bank policy
                      </li>
                      <li>
                        Collect and complete applications with all required
                        documents from good and prospective Agent
                      </li>
                    </ul>
                  </div>
                  <div className="single-description-para">
                    <h6>Educational Requirements</h6>
                    <ul>
                      <li>
                        Bachelor's degree in Public Relations, Journalism or
                        related field.
                      </li>
                    </ul>
                  </div>
                  <div className="single-description-para">
                    <h6>Experience Requirements</h6>
                    <ul>
                      <li>At least 1 year(s)</li>
                      <li>Freshers are also encouraged to apply.</li>
                    </ul>
                  </div>
                  <div className="single-description-para">
                    <h6>Additional Requirements</h6>
                    <ul>
                      <li>Age at most 28 years</li>
                      <li>Both males and females are allowed to apply</li>
                      <li>
                        The applicants should have experience in Banks or
                        Financial Institutions
                      </li>
                    </ul>
                  </div>
                  <div className="single-description-para pb-2">
                    <h6>Compensation & Other Benefits</h6>
                    <ul>
                      <li>Festival Bonus: 2</li>
                      <li>As per policy of the Bank</li>
                    </ul>
                  </div>

                  <div className="single-description-para border-top pt-30 ">
                    <h6>
                      Application Process<span>*</span>
                    </h6>
                    <p className="text_body_color">
                      Applications must be submitted through the mentioned link
                      on the page by clicking on Apply Button.
                    </p>
                    <ul className="mt-3 text_body_color">
                      <li>
                        All applicants must send a cover letter along with an
                        updated CV (we encourage CV no longer than four pages)
                        in English.
                      </li>
                      <li>
                        Mentioning three referees' details of your present
                        supervisor and HR along with past employment's
                        supervisor with CV.
                      </li>
                    </ul>
                  </div>

                  <div className="note-text mt-4 mb-35">
                    <p>
                      {' '}
                      <span>Note: </span> Application s sent by email will not
                      be considered. In addition, DRC doesn't charge any fee for
                      any of its recruitment process & believes in equal
                      opportunity in employment regardless.
                    </p>
                  </div>

                  <div className="d-flex justify-content-between border-top pt-40">
                    <button
                      className="theme-btn theme-btn-lg"
                      data-bs-toggle="modal"
                      data-bs-target="#applyModal"
                    >
                      apply now <i className="arrow_right"></i>{' '}
                    </button>
                    <button className="theme-btn theme-btn-primary_alt theme-btn-lg custom-btn">
                      <i className="icon_ribbon_alt t"></i> Save{' '}
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 pl-lg-55 order-1 order-lg-2">
                <div className="right-sidebar-widget sticky_sidebar_widget">
                  <div className="single-sidebar-widget mt-25 widget-border ">
                    <div className="widget-title">
                      <h5>Job Summary</h5>
                    </div>
                    <div className="widget-content pt-15 pb-25 pr-25 pl-25">
                      <ul>
                        <li>
                          <span className="name">Published on:</span>
                          <span className="value">31 Jan 2024</span>
                        </li>
                        <li>
                          <span className="name">Vacancy:</span>
                          <span className="value">Not specific</span>
                        </li>
                        <li>
                          <span className="name">Employment Status:</span>
                          <span className="value">Full-time</span>
                        </li>
                        <li>
                          <span className="name">Experience:</span>
                          <span className="value">2 to 3 year(s)</span>
                        </li>
                        <li>
                          <span className="name">Age:</span>
                          <span className="value">Age at most 28 years</span>
                        </li>
                        <li>
                          <span className="name">Job Location:</span>
                          <span className="value">Dhaka</span>
                        </li>
                        <li>
                          <span className="name">Salary:</span>
                          <span className="value">Negotiable</span>
                        </li>
                        <li>
                          <span className="name">Application Deadline:</span>
                          <span className="value">17 Feb 2024</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="modal job-application-modal fade"
          id="applyModal"
          tabIndex={-1}
          aria-labelledby="applyModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div>
                  <h4 className="job-title">
                    Officer Admin and Finance (LRS Position)
                  </h4>
                  <div className="d-flex flex-wrap">
                    <div className="job-location me-3">
                      {' '}
                      <i className="icon_pin_alt"></i>NY, United States
                    </div>
                    <div className="job-catagory">
                      {' '}
                      <span>Administration</span> | Full-time
                    </div>
                  </div>
                </div>

                <form action="#">
                  <div className="row gy-4 mt-4">
                    <div className="col-md-6">
                      <label className="label" htmlFor="modalName">
                        First Name<span>*</span>
                      </label>
                      <input
                        id="modalName"
                        className="form-control"
                        type="text"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="label" htmlFor="modallName">
                        Last Name<span>*</span>
                      </label>
                      <input
                        id="modallName"
                        className="form-control"
                        type="text"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="label" htmlFor="modalemail">
                        Email<span>*</span>
                      </label>
                      <input
                        id="modalemail"
                        className="form-control"
                        type="email"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="label" htmlFor="inputPhoneNumber">
                        Phone Number<span>*</span>
                      </label>
                      <input
                        className="form-control"
                        type="tel"
                        id="inputPhoneNumber"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="label" htmlFor="modalMsg">
                        Message to the recruiter:
                      </label>
                      <textarea
                        className="form-control"
                        id="modalMsg"
                        cols={30}
                        rows={4}
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <label className="label mb-0">Attach Your Resume</label>
                      <p className="support mb-2">
                        Files Supported : (.doc, .docx, .pdf, .rtf, .txt. Max
                        size 10MB)
                      </p>

                      <div id="dropzone" className="dropzone">
                        <div className="dz-message">
                          <Image width={50} height={50} src="/img/icon_upload.svg" alt="upload" />
                          <h4 className="dz-button">
                            Drag and Drop files here
                          </h4>
                          <p className="dz-custom-upload-text">or browse to</p>
                          <div className="theme-btn theme-btn-primary_alt mt-3">
                            Chosse File
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="theme-btn theme-btn-primary_alt"
                          data-bs-dismiss="modal"
                        >
                          {' '}
                          <i className="arrow_left"></i> back
                        </button>
                        <button
                          type="submit"
                          className="theme-btn theme-btn-primary_alt"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}
          <JobApplicationSection />
        </main>
      </DefaultLayout>
    </>
  );
};

export default JobApplicationPage;
