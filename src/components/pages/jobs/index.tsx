/* eslint-disable react/no-unescaped-entities */
"use client";

import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import Link from "next/link";
import DefaultLayout from "@/components/Layout";
import JobSort from "./JobSort";
import breadcrumbBg2 from "@/assets/img/breadcrumb/bg-2.png";
import FormSelect from "@/components/common-section/FormSelect";
import { OptionType } from "@/components/common-section/type";

const bangladeshDistricts:OptionType[] = [
  { value: "Bagerhat", label: "Bagerhat" },
  { value: "Bandarban", label: "Bandarban" },
  { value: "Barguna", label: "Barguna" },
  { value: "Barisal", label: "Barisal" },
  { value: "Bhola", label: "Bhola" },
  { value: "Barishal Metro", label: "Barishal Metro" },
  { value: "Bogra", label: "Bogra" },
  { value: "Brahmmanbaria", label: "Brahmmanbaria" },
  { value: "Chandpur", label: "Chandpur" },
  { value: "Chapai Nawabganj", label: "Chapai Nawabganj" },
  { value: "Chittagong", label: "Chittagong" },
  { value: "Chuadanga", label: "Chuadanga" },
  { value: "Chottogram Metro", label: "Chottogram Metro" },
  { value: "Cox's Bazar", label: "Cox's Bazar" },
  { value: "Coxsbazar", label: "Coxsbazar" },
  { value: "Cumilla", label: "Cumilla" },
  { value: "Dhaka", label: "Dhaka" },
  { value: "Dinajpur", label: "Dinajpur" },
  { value: "Dhaka Metro", label: "Dhaka Metro" },
  { value: "Faridpur", label: "Faridpur" },
  { value: "Feni", label: "Feni" },
  { value: "Gaibandha", label: "Gaibandha" },
  { value: "Gazipur", label: "Gazipur" },
  { value: "Gazipur Metro", label: "Gazipur Metro" },
  { value: "Gopalgonj", label: "Gopalgonj" },
  { value: "Habigonj", label: "Habigonj" },
  { value: "Jaflong", label: "Jaflong" },
  { value: "Jamalpur", label: "Jamalpur" },
  { value: "Jessore", label: "Jessore" },
  { value: "Jhalokathi", label: "Jhalokathi" },
  { value: "Jhenaidah", label: "Jhenaidah" },
  { value: "Joypurhat", label: "Joypurhat" },
  { value: "Khagrachari", label: "Khagrachari" },
  { value: "Khulna", label: "Khulna" },
  { value: "Kishoregonj", label: "Kishoregonj" },
  { value: "Khulna Metro", label: "Khulna Metro" },
  { value: "Kurigram", label: "Kurigram" },
  { value: "Kustia", label: "Kustia" },
  { value: "Lalmonirhat", label: "Lalmonirhat" },
  { value: "Laxmipur", label: "Laxmipur" },
  { value: "Madaripur", label: "Madaripur" },
  { value: "Magura", label: "Magura" },
  { value: "Manikgonj", label: "Manikgonj" },
  { value: "Meherpur", label: "Meherpur" },
  { value: "Moulabhibazar", label: "Moulabhibazar" },
  { value: "Munshigonj", label: "Munshigonj" },
  { value: "Mymensingh", label: "Mymensingh" },
  { value: "Naogaon", label: "Naogaon" },
  { value: "Narail", label: "Narail" },
  { value: "Narayangonj", label: "Narayangonj" },
  { value: "Narsingdi", label: "Narsingdi" },
  { value: "Natore", label: "Natore" },
  { value: "Netrokona", label: "Netrokona" },
  { value: "Nilphamari", label: "Nilphamari" },
  { value: "Noakhali", label: "Noakhali" },
  { value: "Pabna", label: "Pabna" },
  { value: "Panchagarh", label: "Panchagarh" },
  { value: "Patuakhali", label: "Patuakhali" },
  { value: "Pirojpur", label: "Pirojpur" },
  { value: "Rajbari", label: "Rajbari" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Rangamati", label: "Rangamati" },
  { value: "Rangpur", label: "Rangpur" },
  { value: "Rajshahi Metro", label: "Rajshahi Metro" },
  { value: "Rangpur Metro", label: "Rangpur Metro" },
  { value: "Saint Martin", label: "Saint Martin" },
  { value: "Satkhira", label: "Satkhira" },
  { value: "Shariatpur", label: "Shariatpur" },
  { value: "Sherpur", label: "Sherpur" },
  { value: "Sirajgonj", label: "Sirajgonj" },
  { value: "Sylhet Metro", label: "Sylhet Metro" },
  { value: "Srimangal", label: "Srimangal" },
  { value: "Sunamgonj", label: "Sunamgonj" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Tangail", label: "Tangail" },
  { value: "Teknaf", label: "Teknaf" },
  { value: "Thakurgaon", label: "Thakurgaon" }
];


const JobsPage = () => {

  return (
    <>
      <DefaultLayout>
        <main>
          <section className="breadcrumb-area">
            <div
              className="breadcrumb-widget  pt-145 pb-125"
              style={{ backgroundImage: `url(${breadcrumbBg2.src})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="breadcrumb-content pt-170">
                      <h1>Job Posts</h1>
                      <ul>
                        <li>
                          <Link href="/">home</Link>
                        </li>
                        <li>
                          <Link href="/">pages</Link>
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
                        <FormSelect options={bangladeshDistricts} />
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
                            <Link href="/job-application">
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
