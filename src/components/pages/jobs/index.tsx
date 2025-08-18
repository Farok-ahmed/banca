/* eslint-disable react/no-unescaped-entities */
"use client";

import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/nice-select.css";
import "@/styles/css/jquery-editable-select.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import Link from "next/link";
import DefaultLayout from "@/components/Layout";
import JobSort from "./JobSort";

const JobsPage = () => {
  

  // Check if current route is active

  return (
    <>
      <DefaultLayout>
        <main>
          <section className="breadcrumb-area">
            <div
              className="breadcrumb-widget  pt-145 pb-125"
              style={{ backgroundImage: `url(img/breadcrumb/bg-2.png)` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="breadcrumb-content pt-170">
                      <h1>Job Posts</h1>
                      <ul>
                        <li>
                          <Link href="index.html">home</Link>
                        </li>
                        <li>
                          <Link href="index.html">pages</Link>
                        </li>
                        <li>Careers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-110 pb-130 bg_disable">
            <div className="container">
              <div className="row">
                <div className="col-lg-4  pr-lg-55">
                  <div className="left-sidebar-widget">
                    <div className="sidebar-header">
                      <div className="sidebar-title">
                        <h4>Search for jobs</h4>
                      </div>
                    </div>
                    <div className="single-sidebar-widget mt-35 widget-shadow">
                      <div className="input-search-field input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Job title or keywords..."
                        />
                        <div className="input-group-append">
                          <button className="btn">
                            <i className="icon_search"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="single-sidebar-widget mt-30 widget-shadow">
                      <div className="select-location">
                        <span className="arrow-icon">
                          <i className="arrow_carrot-down"></i>
                        </span>
                        <select id="locationSelect" className="form-control">
                          <option value="Bagerhat" selected>
                            Bagerhat
                          </option>
                          <option value="Bandarban">Bandarban</option>
                          <option value="Barguna">Barguna</option>
                          <option value="Barisal">Barisal</option>
                          <option value="Bhola">Bhola</option>
                          <option value="Barishal Metro">Barishal Metro</option>
                          <option value="Bogra">Bogra</option>
                          <option value="Brahmmanbaria">Brahmmanbaria</option>
                          <option value="Chandpur">Chandpur</option>
                          <option value="Chapai Nawabganj">
                            Chapai Nawabganj
                          </option>
                          <option value="Chittagong">Chittagong</option>
                          <option value="Chuadanga">Chuadanga</option>
                          <option value="Chottogram Metro">
                            Chottogram Metro
                          </option>
                          <option value="Cox&#039;s Bazar">
                            Cox&#039;s Bazar
                          </option>
                          <option value="Coxsbazar">Coxsbazar</option>
                          <option value="Cumilla">Cumilla</option>
                          <option value="Dhaka">Dhaka</option>
                          <option value="Dinajpur">Dinajpur</option>
                          <option value="Dhaka Metro">Dhaka Metro</option>
                          <option value="Faridpur">Faridpur</option>
                          <option value="Feni">Feni</option>
                          <option value="Gaibandha">Gaibandha</option>
                          <option value="Gazipur">Gazipur</option>
                          <option value="Gazipur Metro">Gazipur Metro</option>
                          <option value="Gopalgonj">Gopalgonj</option>
                          <option value="Habigonj">Habigonj</option>
                          <option value="Jaflong">Jaflong</option>
                          <option value="Jamalpur">Jamalpur</option>
                          <option value="Jessore">Jessore</option>
                          <option value="Jhalokathi">Jhalokathi</option>
                          <option value="Jhenaidah">Jhenaidah</option>
                          <option value="Joypurhat">Joypurhat</option>
                          <option value="Khagrachari">Khagrachari</option>
                          <option value="Khulna">Khulna</option>
                          <option value="Kishoregonj">Kishoregonj</option>
                          <option value="Khulna Metro">Khulna Metro</option>
                          <option value="Kurigram">Kurigram</option>
                          <option value="Kustia">Kustia</option>
                          <option value="Lalmonirhat">Lalmonirhat</option>
                          <option value="Laxmipur">Laxmipur</option>
                          <option value="Madaripur">Madaripur</option>
                          <option value="Magura">Magura</option>
                          <option value="Manikgonj">Manikgonj</option>
                          <option value="Meherpur">Meherpur</option>
                          <option value="Moulabhibazar">Moulabhibazar</option>
                          <option value="Munshigonj">Munshigonj</option>
                          <option value="Mymensingh">Mymensingh</option>
                          <option value="Naogaon">Naogaon</option>
                          <option value="Narail">Narail</option>
                          <option value="Narayangonj">Narayangonj</option>
                          <option value="Narsingdi">Narsingdi</option>
                          <option value="Natore">Natore</option>
                          <option value="Netrokona">Netrokona</option>
                          <option value="Nilphamari">Nilphamari</option>
                          <option value="Noakhali">Noakhali</option>
                          <option value="Pabna">Pabna</option>
                          <option value="Panchagarh">Panchagarh</option>
                          <option value="Patuakhali">Patuakhali</option>
                          <option value="Pirojpur">Pirojpur</option>
                          <option value="Rajbari">Rajbari</option>
                          <option value="Rajshahi">Rajshahi</option>
                          <option value="Rangamati">Rangamati</option>
                          <option value="Rangpur">Rangpur</option>
                          <option value="Rajshahi Metro ">
                            Rajshahi Metro{" "}
                          </option>
                          <option value="Rangpur Metro ">Rangpur Metro </option>
                          <option value="Saint Martin">Saint Martin</option>
                          <option value="Satkhira">Satkhira</option>
                          <option value="Shariatpur">Shariatpur</option>
                          <option value="Sherpur">Sherpur</option>
                          <option value="Sirajgonj">Sirajgonj</option>
                          <option value="Sylhet Metro">Sylhet Metro</option>
                          <option value="Srimangal">Srimangal</option>
                          <option value="Sunamgonj">Sunamgonj</option>
                          <option value="Sylhet">Sylhet</option>
                          <option value="Tangail">Tangail</option>
                          <option value="Teknaf">Teknaf</option>
                          <option value="Thakurgaon">Thakurgaon</option>
                        </select>
                      </div>
                    </div>

                    <div className="single-sidebar-widget mt-60 widget-border">
                      <div className="catagory-list-widget">
                        <div className="widget-title">
                          <h5>Job Category</h5>
                        </div>
                        <div className="widget-content ">
                          <ul className="catagory-list py-3">
                            <li className="catagory-item ">
                              <Link href="#" className="catagory-link active">
                                <span className="text">All Category</span>
                                <span className="number">(25)</span>
                              </Link>
                            </li>
                            <li className="catagory-item">
                              <Link href="#" className="catagory-link">
                                <span className="text">Administration</span>
                                <span className="number">(05)</span>
                              </Link>
                            </li>
                            <li className="catagory-item">
                              <Link href="#" className="catagory-link">
                                <span className="text">Asset Management</span>
                                <span className="number">(03)</span>
                              </Link>
                            </li>
                            <li className="catagory-item">
                              <Link href="#" className="catagory-link">
                                <span className="text">Accounts Officer</span>
                                <span className="number">(04)</span>
                              </Link>
                            </li>
                            <li className="catagory-item">
                              <Link href="#" className="catagory-link">
                                <span className="text">Branch Banking</span>
                                <span className="number">(10)</span>
                              </Link>
                            </li>
                            <li className="catagory-item ">
                              <Link href="#" className="catagory-link ">
                                <span className="text">Technology</span>
                                <span className="number">(03)</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="single-sidebar-widget mt-60 widget-border">
                      <div className="widget-title">
                        <h5>Job Schedule</h5>
                      </div>
                      <div className="widget-content pt-20 pb-20 pr-20 pl-20">
                        <div className="form-check form-check-inline mr-30">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="fulltime"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fulltime"
                          >
                            Full-time
                          </label>
                        </div>
                        <div className="form-check form-check-inline mr-30">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="parttime"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="parttime"
                          >
                            Part Time
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="job-post-widget">
                    <div className="sidebar-header d-flex justify-content-between align-items-center mt-4 mt-lg-0">
                      <div className="sidebar-title">
                        <h4 className="wow fadeInRight">25 job offers</h4>
                      </div>

                      <div className="sorting-select wow fadeInLeft me-1">
                        <JobSort />
                      </div>
                    </div>

                    <div className="single-job-post me-1 wow fadeInUp mt-25">
                      <div className="post-header">
                        <div>
                          <h6 className="job-title">
                            <Link href="job-application.html">
                              Manager- Products & Marketing
                            </Link>{" "}
                          </h6>
                          <div className="d-flex flex-wrap">
                            <div className="job-location me-lg-3 me-2">
                              {" "}
                              <i className="icon_pin_alt"></i>NY, United States
                            </div>
                            <div className="job-catagory">
                              {" "}
                              <span>Branch Banking</span> | Full-time
                            </div>
                          </div>
                        </div>
                        <div className="timestamp">Jan 30, 2021</div>
                      </div>
                      <div className="post-content">
                        <p>
                          As a Teller at Capital you are the face of the credit
                          union. It's more than just processing financial
                          transactions. It's building lasting relationships and
                          helping others to ...
                        </p>
                      </div>
                    </div>
                    <div
                      className="single-job-post me-1 wow fadeInUp mt-25"
                      data-wow-delay="0.1s"
                    >
                      <div className="post-header">
                        <div>
                          <h6 className="job-title">
                            <Link href="/job-application">
                              Officer Admin and Finance (LRS Position)
                            </Link>
                          </h6>
                          <div className="d-flex flex-wrap">
                            <div className="job-location me-lg-3 me-2">
                              {" "}
                              <i className="icon_pin_alt"></i>NY, United States
                            </div>
                            <div className="job-catagory">
                              {" "}
                              <span>Administration</span> | Full-time
                            </div>
                          </div>
                        </div>
                        <div className="timestamp">Jan 30, 2021</div>
                      </div>
                      <div className="post-content">
                        <p>
                          As a Teller at Capital you are the face of the credit
                          union. It's more than just processing financial
                          transactions. It's building lasting relationships and
                          helping others to ...
                        </p>
                      </div>
                    </div>

                    <div
                      className="single-job-post me-1 wow fadeInUp mt-25"
                      data-wow-delay="0.3s"
                    >
                      <div className="post-header">
                        <div>
                          <h6 className="job-title">
                            <Link href="/job-application">
                              Head of Information and Technology
                            </Link>{" "}
                          </h6>
                          <div className="d-flex flex-wrap">
                            <div className="job-location me-lg-3 me-2">
                              {" "}
                              <i className="icon_pin_alt"></i>NY, United States
                            </div>
                            <div className="job-catagory">
                              {" "}
                              <span>Technology</span> | Full-time
                            </div>
                          </div>
                        </div>
                        <div className="timestamp">Jan 30, 2021</div>
                      </div>
                      <div className="post-content">
                        <p>
                          As a Teller at Capital you are the face of the credit
                          union. It's more than just processing financial
                          transactions. It's building lasting relationships and
                          helping others to ...
                        </p>
                      </div>
                    </div>
                    <div
                      className="single-job-post me-1 wow fadeInUp mt-25"
                      data-wow-delay="0.5s"
                    >
                      <div className="post-header">
                        <div>
                          <h6 className="job-title">
                            <Link href="/job-application">
                              Assistant Accounts Officer
                            </Link>{" "}
                          </h6>
                          <div className="d-flex flex-wrap">
                            <div className="job-location me-lg-3 me-2">
                              {" "}
                              <i className="icon_pin_alt"></i>NY, United States
                            </div>
                            <div className="job-catagory">
                              {" "}
                              <span>Accounts Officer</span> | Full-time
                            </div>
                          </div>
                        </div>
                        <div className="timestamp">Jan 30, 2021</div>
                      </div>
                      <div className="post-content">
                        <p>
                          As a Teller at Capital you are the face of the credit
                          union. It's more than just processing financial
                          transactions. It's building lasting relationships and
                          helping others to ...
                        </p>
                      </div>
                    </div>
                    <div
                      className="single-job-post me-1 wow fadeInUp mt-25"
                      data-wow-delay="0.6s"
                    >
                      <div className="post-header">
                        <div>
                          <h6 className="job-title">
                            <Link href="/job-application">
                              Manager- Products & Marketing, Retail Business
                            </Link>{" "}
                          </h6>
                          <div className="d-flex flex-wrap">
                            <div className="job-location me-lg-3 me-2">
                              {" "}
                              <i className="icon_pin_alt"></i>NY, United States
                            </div>
                            <div className="job-catagory">
                              {" "}
                              <span>Administration</span> | Full-time
                            </div>
                          </div>
                        </div>
                        <div className="timestamp">Jan 30, 2021</div>
                      </div>
                      <div className="post-content">
                        <p>
                          As a Teller at Capital you are the face of the credit
                          union. It's more than just processing financial
                          transactions. It's building lasting relationships and
                          helping others to ...
                        </p>
                      </div>
                    </div>
                    <div
                      className="single-job-post me-1 wow fadeInUp mt-25"
                      data-wow-delay="0.7s"
                    >
                      <div className="post-header">
                        <div>
                          <h6 className="job-title">
                            <Link href="/job-application">
                              Assistant Branch Manager II (Senior)
                            </Link>{" "}
                          </h6>
                          <div className="d-flex flex-wrap">
                            <div className="job-location me-lg-3 me-2">
                              {" "}
                              <i className="icon_pin_alt"></i>NY, United States
                            </div>
                            <div className="job-catagory">
                              {" "}
                              <span>Branch Banking</span> | Full-time
                            </div>
                          </div>
                        </div>
                        <div className="timestamp">Jan 30, 2021</div>
                      </div>
                      <div className="post-content">
                        <p>
                          As a Teller at Capital you are the face of the credit
                          union. It's more than just processing financial
                          transactions. It's building lasting relationships and
                          helping others to ...
                        </p>
                      </div>
                    </div>
                    <div
                      className="single-job-post me-1 wow fadeInUp mt-25"
                      data-wow-delay="0.8s"
                    >
                      <div className="post-header">
                        <div>
                          <h6 className="job-title">
                            <Link href="/job-application">
                              Manager- Products & Marketing, Retail Business
                            </Link>{" "}
                          </h6>
                          <div className="d-flex flex-wrap">
                            <div className="job-location me-lg-3 me-2">
                              {" "}
                              <i className="icon_pin_alt"></i>NY, United States
                            </div>
                            <div className="job-catagory">
                              {" "}
                              <span>Branch Banking</span> | Full-time
                            </div>
                          </div>
                        </div>
                        <div className="timestamp">Jan 30, 2021</div>
                      </div>
                      <div className="post-content">
                        <p>
                          As a Teller at Capital you are the face of the credit
                          union. It's more than just processing financial
                          transactions. It's building lasting relationships and
                          helping others to ...
                        </p>
                      </div>
                    </div>
                    <div
                      className="single-job-post me-1 wow fadeInUp mt-25"
                      data-wow-delay="0.9s"
                    >
                      <div className="post-header">
                        <div>
                          <h6 className="job-title">
                            <Link href="/job-application">
                              Accounts Payable/Receivable Manager
                            </Link>{" "}
                          </h6>
                          <div className="d-flex flex-wrap">
                            <div className="job-location me-lg-3 me-2">
                              {" "}
                              <i className="icon_pin_alt"></i>NY, United States
                            </div>
                            <div className="job-catagory">
                              {" "}
                              <span>Accounts Officer</span> | Full-time
                            </div>
                          </div>
                        </div>
                        <div className="timestamp">Jan 30, 2021</div>
                      </div>
                      <div className="post-content">
                        <p>
                          As a Teller at Capital you are the face of the credit
                          union. It's more than just processing financial
                          transactions. It's building lasting relationships and
                          helping others to ...
                        </p>
                      </div>
                    </div>

                    <div className="text-center mt-70 wow fadeInUp">
                      {" "}
                      <Link href="#" className="theme-btn theme-btn-outlined">
                        More jobs
                      </Link>
                    </div>
                  </div>

                  <div className="email-alert-widget mt-100 wow fadeInUp">
                    <h4>Get email alerts for the latest Jobs in Bangladesh</h4>
                    <p>You can cancel email alerts at any time.</p>

                    <div className="input-group mt-40">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type in your email..."
                      />
                      <div className="input-group-append">
                        <Link href="#" className="theme-btn theme-btn-lg">
                          Set Up Alert
                        </Link>
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

export default JobsPage;
