/* eslint-disable react/no-unescaped-entities */
'use client';
import "@/styles/css/intlTelInput.css";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import intlTelInput from 'intl-tel-input';

const JobApplicationSection = () => {
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      intlTelInput(inputRef.current, {
        initialCountry: 'bd',
        nationalMode: false,
        formatOnDisplay: true,
      });
    }
  }, []);

  const handleModalToggle = () => setShowModal(!showModal);

  return (
    <>
      <section className="job-application-area pt-110 pb-120 bg_white">
        <div className="container">
          <div className="row">
            {/* Job Description */}
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="job-description-widget">
                {/* Position Purpose */}
                <div className="single-description-para">
                  <h6>Position Purpose</h6>
                  <p>
                    As a Teller at Capital you are the face of the credit union. It's more than just processing financial transactions. It's building lasting relationships and helping others to improve their financial well-being...
                  </p>
                </div>

                {/* Job Responsibilities */}
                <div className="single-description-para">
                  <h6>Job Responsibilities</h6>
                  <ul>
                    <li>Achieve individual target on daily, weekly & monthly basis set by respective Department</li>
                    <li>Ensure smooth business operation at Agent Banking Centre maintaining compliance</li>
                    <li>Follow up day to day activities of Agent Banking Centre...</li>
                    <li>Rapport build up with local potential customers to promote financial literacy</li>
                    <li>Ensure proper service provided to each and every customer as per bank policy</li>
                    <li>Collect and complete applications from prospective Agents</li>
                  </ul>
                </div>

                {/* Other Sections */}
                <div className="single-description-para"><h6>Educational Requirements</h6><ul><li>Bachelor's degree in Public Relations, Journalism or related field.</li></ul></div>
                <div className="single-description-para"><h6>Experience Requirements</h6><ul><li>At least 1 year(s)</li><li>Freshers are also encouraged to apply.</li></ul></div>
                <div className="single-description-para"><h6>Additional Requirements</h6><ul><li>Age at most 28 years</li><li>Both males and females are allowed to apply</li><li>Experience in Banks or Financial Institutions</li></ul></div>
                <div className="single-description-para pb-2"><h6>Compensation & Other Benefits</h6><ul><li>Festival Bonus: 2</li><li>As per policy of the Bank</li></ul></div>

                {/* Application Process */}
                <div className="single-description-para border-top pt-30">
                  <h6>Application Process<span>*</span></h6>
                  <p className="text_body_color">Applications must be submitted through the mentioned link...</p>
                  <ul className="mt-3 text_body_color">
                    <li>Send a cover letter and updated CV (max 4 pages)</li>
                    <li>Include referees of present/past supervisors</li>
                  </ul>
                </div>

                {/* Note */}
                <div className="note-text mt-4 mb-35">
                  <p><span>Note:</span> Applications sent by email will not be considered...</p>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between border-top pt-40">
                  <button className="theme-btn theme-btn-lg" onClick={handleModalToggle}>
                    Apply Now <i className="arrow_right"></i>
                  </button>
                  <button className="theme-btn theme-btn-primary_alt theme-btn-lg custom-btn">
                    <i className="icon_ribbon_alt t"></i> Save
                  </button>
                </div>
              </div>
            </div>

            {/* Job Sidebar */}
            <div className="col-lg-4 pl-lg-55 order-1 order-lg-2">
              <div className="right-sidebar-widget sticky_sidebar_widget">
                <div className="single-sidebar-widget mt-25 widget-border">
                  <div className="widget-title"><h5>Job Summary</h5></div>
                  <div className="widget-content pt-15 pb-25 pr-25 pl-25">
                    <ul>
                      <li><span className="name">Published on:</span><span className="value">31 Jan 2024</span></li>
                      <li><span className="name">Vacancy:</span><span className="value">Not specific</span></li>
                      <li><span className="name">Employment Status:</span><span className="value">Full-time</span></li>
                      <li><span className="name">Experience:</span><span className="value">2 to 3 year(s)</span></li>
                      <li><span className="name">Age:</span><span className="value">Age at most 28 years</span></li>
                      <li><span className="name">Job Location:</span><span className="value">Dhaka</span></li>
                      <li><span className="name">Salary:</span><span className="value">Negotiable</span></li>
                      <li><span className="name">Application Deadline:</span><span className="value">17 Feb 2024</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal job-application-modal fade show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <h4 className="job-title">Officer Admin and Finance (LRS Position)</h4>
                <div className="d-flex flex-wrap">
                  <div className="job-location me-3"><i className="icon_pin_alt"></i> NY, United States</div>
                  <div className="job-catagory"><span>Administration</span> | Full-time</div>
                </div>

                <form action="#">
                  <div className="row gy-4 mt-4">
                    <div className="col-md-6">
                      <label className="label" htmlFor="modalName">First Name<span>*</span></label>
                      <input id="modalName" className="form-control" type="text" required />
                    </div>
                    <div className="col-md-6">
                      <label className="label" htmlFor="modallName">Last Name<span>*</span></label>
                      <input id="modallName" className="form-control" type="text" required />
                    </div>
                    <div className="col-md-6">
                      <label className="label" htmlFor="modalemail">Email<span>*</span></label>
                      <input id="modalemail" className="form-control" type="email" required />
                    </div>
                    <div className="col-md-6">
                        <label className="label" htmlFor="inputPhoneNumber">
                          Phone Number*
                        </label>
                        <input
                          id="inputPhoneNumber"
                          ref={inputRef}
                          className="form-control w-100"
                          type="number" // use "tel" instead of "number" for better intl support
                        />
                      </div>
                    <div className="col-12">
                      <label className="label" htmlFor="modalMsg">Message to the recruiter:</label>
                      <textarea id="modalMsg" className="form-control" cols={30} rows={4}></textarea>
                    </div>

                    <div className="col-12">
                      <label className="label mb-0">Attach Your Resume</label>
                      <p className="support mb-2">Files Supported: .doc, .pdf, .txt (Max size 10MB)</p>
                      <div className="dropzone" id="dropzone">
                        <div className="dz-message">
                          <Image width={50} height={50} src="/img/icon_upload.svg" alt="upload" />
                          <h4 className="dz-button">Drag and Drop files here</h4>
                          <p className="dz-custom-upload-text">or browse to</p>
                          <div className="theme-btn theme-btn-primary_alt mt-3">Choose File</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="d-flex justify-content-between">
                        <button type="button" className="theme-btn theme-btn-primary_alt" onClick={handleModalToggle}>
                          <i className="arrow_left"></i> Back
                        </button>
                        <button type="submit" className="theme-btn theme-btn-primary_alt">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobApplicationSection;
