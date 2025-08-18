"use client";
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/nice-select.css";
import "@/styles/css/intlTelInput.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import DefaultLayout from "@/components/Layout";

const PersonalDetailsPage = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      intlTelInput(inputRef.current, {
        initialCountry: "bd",
        nationalMode: false,
        formatOnDisplay: true,
      });
    }
  }, []);

  const [dob, setDob] = useState({ day: "", month: "", year: "" });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDob({ ...dob, [e.target.name]: e.target.value });
  };

  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 2022 - 1970 + 1 }, (_, i) => 1970 + i);

  return (
    <>
      <DefaultLayout>
        <main>
        <section className="breadcrumb-area">
          <div
            className="breadcrumb-widget  pt-200 pb-100"
            style={{ backgroundImage: `url(img/breadcrumb/bg-1.png)` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="breadcrumb-content pt-95">
                    <h1>Personal Details</h1>
                    <ul>
                      <li>
                        <Link href="/">home</Link>
                      </li>
                      <li>
                        <Link href="/">pages</Link>
                      </li>
                      <li>loan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="loan-deatils-area bg_disable pt-130 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="stepper-widget mt-sm-5 px-3 px-sm-0">
                  <ul>
                    <li className=" complete  mt-0">
                      <a href="loan-details.html">
                        <div className="number">
                          <i className="icon_check"></i> <span>1</span>
                        </div>{" "}
                        Loan Details
                      </a>
                    </li>
                    <li className="active">
                      <Link href="/personal-details">
                        <div className="number">
                          <i className="icon_check"></i> <span>2</span>
                        </div>
                        Personal Details
                      </Link>
                    </li>
                    <li>
                      <Link href="/document-upload">
                        <div className="number">
                          <i className="icon_check"></i> <span>3</span>
                        </div>
                        Documants Upload
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="loan-details-widget">
                  <form action="document-upload.html">
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <label className="label" htmlFor="fName">
                          First Name*
                        </label>
                        <input
                          id="fName"
                          className="form-control"
                          type="text"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="label" htmlFor="lName">
                          Last Name*
                        </label>
                        <input
                          id="lName"
                          className="form-control"
                          type="text"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="label mb-2" htmlFor="dob-d">
                          Date of Birth*
                        </label>

                        <div className="dob d-flex gap-2">
                          {/* Day */}
                          <select
                            id="dob-d"
                            name="day"
                            className="form-select"
                            value={dob.day}
                            onChange={handleChange}
                          >
                            <option value="">Day</option>
                            {days.map((day) => (
                              <option key={day} value={day}>
                                {day}
                              </option>
                            ))}
                          </select>

                          {/* Month */}
                          <select
                            id="dob-m"
                            name="month"
                            className="form-select"
                            value={dob.month}
                            onChange={handleChange}
                          >
                            <option value="">Month</option>
                            {months.map((month, i) => (
                              <option
                                key={i}
                                value={String(i + 1).padStart(2, "0")}
                              >
                                {month}
                              </option>
                            ))}
                          </select>

                          {/* Year */}
                          <select
                            id="dob-y"
                            name="year"
                            className="form-select"
                            value={dob.year}
                            onChange={handleChange}
                          >
                            <option value="">Year</option>
                            {years.map((year) => (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label className="label mb-4">Marital Statas*</label>

                        <div className="form-check form-check-inline me-5">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="MaritalStatas"
                            id="single"
                            value="single"
                          />
                          <label className="form-check-label" htmlFor="single">
                            Single
                          </label>
                        </div>
                        <div className="form-check form-check-inline me-5">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="MaritalStatas"
                            id="married"
                            value="married"
                          />
                          <label className="form-check-label" htmlFor="married">
                            Married
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="label" htmlFor="emailName">
                          Email
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          id="emailName"
                          placeholder="examplename@example.com"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="label" htmlFor="inputPhoneNumber">
                          Mobile Number*
                        </label>
                        <input
                          id="inputPhoneNumber"
                          ref={inputRef}
                          className="form-control w-100"
                          type="number" // use "tel" instead of "number" for better intl support
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="label" htmlFor="pAddress">
                          Present Address*
                        </label>
                        <input
                          id="pAddress"
                          className="form-control"
                          type="text"
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="label" htmlFor="stateName">
                          State*
                        </label>
                        <input
                          id="stateName"
                          className="form-control"
                          type="text"
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="label" htmlFor="cityName">
                          City*
                        </label>
                        <input
                          id="cityName"
                          className="form-control"
                          type="text"
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="label" htmlFor="zipCode">
                          Postal / Zip Code*
                        </label>
                        <input
                          id="zipCode"
                          className="form-control"
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="row mt-60">
                      <div className="col-md-12">
                        <div className="nav-btn d-flex flex-wrap justify-content-between">
                          <Link
                            href="/loan-details"
                            className=" prev-btn theme-btn-primary_alt theme-btn"
                          >
                            <i className="arrow_left"></i>previous
                          </Link>
                          <button
                            type="submit"
                            className=" next-btn theme-btn-primary_alt theme-btn "
                          >
                            next<i className="arrow_right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
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

export default PersonalDetailsPage;
