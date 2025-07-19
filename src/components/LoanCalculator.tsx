'use client'; // if using Next.js 13 app router

import React, { useEffect, useRef, useState } from 'react';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import Link from 'next/link';

const LoanCalculator = () => {
  // Date states for Flatpickr
  const [startDate, setStartDate] = useState<Date[]>([]);
  const [endDate, setEndDate] = useState<Date[]>([]);

  // Refs for slider containers
  const loanAmountRef = useRef<HTMLDivElement>(null);
  const roiRef = useRef<HTMLDivElement>(null);
  const yearRangeRef = useRef<HTMLDivElement>(null);
  const monthRangeRef = useRef<HTMLDivElement>(null);
  const weekRangeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loanAmountRef.current) {
      noUiSlider.create(loanAmountRef.current, {
        start: [5000],
        range: {
          min: 1000,
          max: 100000,
        },
        connect: [true, false],
        tooltips: true,
        format: {
          to: (value) => Math.round(value).toString(),
          from: (value) => Number(value),
        },
      });
      loanAmountRef.current.noUiSlider?.on('update', (values) => {
        const input = document.getElementById('SetRange') as HTMLInputElement;
        if (input) input.value = values[0].toString();
      });
    }

    if (roiRef.current) {
      noUiSlider.create(roiRef.current, {
        start: [5],
        range: {
          min: 0,
          max: 20,
        },
        connect: [true, false],
        tooltips: true,
        format: {
          to: (value) => value.toFixed(2),
          from: (value) => Number(value),
        },
      });
      roiRef.current.noUiSlider?.on('update', (values) => {
        const input = document.getElementById('SetRoiRange') as HTMLInputElement;
        if (input) input.value = values[0].toString();
      });
    }

    if (yearRangeRef.current) {
      noUiSlider.create(yearRangeRef.current, {
        start: [1],
        range: {
          min: 1,
          max: 30,
        },
        connect: [true, false],
        tooltips: true,
        format: {
          to: (value) => Math.round(value).toString(),
          from: (value) => Number(value),
        },
      });
      yearRangeRef.current.noUiSlider?.on('update', (values) => {
        const input = document.getElementById('SetMonthRange') as HTMLInputElement;
        if (input) input.value = values[0].toString();
      });
    }

    if (monthRangeRef.current) {
      noUiSlider.create(monthRangeRef.current, {
        start: [12],
        range: {
          min: 1,
          max: 360,
        },
        connect: [true, false],
        tooltips: true,
        format: {
          to: (value) => Math.round(value).toString(),
          from: (value) => Number(value),
        },
      });
      monthRangeRef.current.noUiSlider?.on('update', (values) => {
        const input = document.getElementById('SetMonthRange') as HTMLInputElement;
        if (input) input.value = values[0].toString();
      });
    }

    if (weekRangeRef.current) {
      noUiSlider.create(weekRangeRef.current, {
        start: [52],
        range: {
          min: 1,
          max: 1560,
        },
        connect: [true, false],
        tooltips: true,
        format: {
          to: (value) => Math.round(value).toString(),
          from: (value) => Number(value),
        },
      });
      weekRangeRef.current.noUiSlider?.on('update', (values) => {
        const input = document.getElementById('SetMonthRange') as HTMLInputElement;
        if (input) input.value = values[0].toString();
      });
    }

    // Cleanup on unmount
    return () => {
      [
        loanAmountRef,
        roiRef,
        yearRangeRef,
        monthRangeRef,
        weekRangeRef,
      ].forEach((ref) => {
        if (ref.current?.noUiSlider) {
          ref.current.noUiSlider.destroy();
        }
      });
    };
  }, []);

  return (
    <section className="calculator-area-2">
      <div className="container">
        <div className="section-title">
          <span className="short-title-2">Loan calculator</span>
          <h1 className="wow fadeInUp text-white">
            Calculate and confirm your loans
          </h1>
        </div>

        <div className="calculator-widget-2 mt-50">
          <div className="row gy-lg-0 gy-3">
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
                  <div id="RangeSlider" ref={loanAmountRef}></div>
                  <div className="input-group">
                    <input
                      className="noTextMerge"
                      type="text"
                      id="SetRange"
                      readOnly
                    />
                    <span className="input-group-text">$</span>
                  </div>
                </div>

                <div className="range-label">Interest Rate</div>
                <div className="single-range">
                  <div id="RoiRangeSlider" ref={roiRef}></div>
                  <div className="input-group">
                    <input type="text" id="SetRoiRange" readOnly />
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
                      <div id="YearRangeSlider" ref={yearRangeRef}></div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="monthTab"
                      role="tabpanel"
                      aria-labelledby="monthTab"
                    >
                      <div id="MonthRangeSlider" ref={monthRangeRef}></div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="weekTab"
                      role="tabpanel"
                      aria-labelledby="weekTab"
                    >
                      <div id="WeekRangeSlider" ref={weekRangeRef}></div>
                    </div>
                  </div>
                  <div className="input-group">
                    <input
                      className="noTextMerge"
                      type="text"
                      id="SetMonthRange"
                      readOnly
                    />
                    <span className="input-group-text loanTermIndicator">
                      @example.com
                    </span>
                  </div>
                </div>

                <div
                  className="d-flex loan-start-date"
                  style={{ gap: '20px' }}
                >
                  <div>
                    <div className="range-label">Start Date</div>
                    <div className="inp-container">
                      <Flatpickr
                        id="loanStartDate"
                        placeholder="Select Date"
                        className="form-control"
                        value={startDate}
                        onChange={(date) => setStartDate(date)}
                        options={{
                          dateFormat: 'd F Y',
                          position: 'above',
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="range-label">End Date</div>
                    <div className="inp-container">
                      <Flatpickr
                        id="loanEndDate"
                        placeholder="Select Date"
                        className="form-control"
                        value={endDate}
                        onChange={(date) => setEndDate(date)}
                        options={{
                          dateFormat: 'd F Y',
                          position: 'above',
                        }}
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
                    Total Amount
                    <h2 className="LoanTotalAmount"></h2>
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
                <Link
                  href="personal-details.html"
                  className="theme-btn theme-btn-lg mt-20 w-100"
                >
                  Apply Now
                  <i className="arrow_right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;
