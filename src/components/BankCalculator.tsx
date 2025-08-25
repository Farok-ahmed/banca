'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import Link from 'next/link';

type HTMLDivElementWithSlider = HTMLDivElement & {
  noUiSlider: noUiSlider.API;
};

type EMIResult = {
  emi: number;
  total: number;
  interest: number;
};

const CalculatorSection = () => {
  const amountRef = useRef<HTMLDivElementWithSlider | null>(null);
  const yearRef = useRef<HTMLDivElementWithSlider | null>(null);
  const monthRef = useRef<HTMLDivElementWithSlider | null>(null);

  const [amount, setAmount] = useState(50000);
  const [duration, setDuration] = useState(5);
  const [type, setType] = useState<'year' | 'month'>('year');
  const [interestRate] = useState(6.5);

  const calculateEMI = (): EMIResult => {
    const principal = amount;
    const months = type === 'year' ? duration * 12 : duration;
    const r = interestRate / 12 / 100;
    const emi =
      (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
    const total = emi * months;
    const interest = total - principal;
    return {
      emi: Math.round(emi),
      total: Math.round(total),
      interest: Math.round(interest),
    };
  };

  // Loan Amount Slider
  useEffect(() => {
    const slider = amountRef.current;
    if (slider?.noUiSlider) slider.noUiSlider.destroy();

    if (slider) {
      noUiSlider.create(slider, {
        start: amount,
        connect: [true, false],
        step: 1000,
        range: { min: 5000, max: 150000 },
        format: {
          to: (value) => Math.round(value),
          from: (value) => Number(value),
        },
        pips: {
          mode: noUiSlider.PipsMode.Values,
          values: [5000, 25000, 50000, 75000, 100000, 125000, 150000],
          density: 4,
          format: {
            to: (value) => `${value / 1000}k`,
            from: (value) => Number(value.replace('k', '')) * 1000,
          },
        },
      });

      slider.noUiSlider.on('update', (values) => {
        setAmount(parseInt(values[0].toString()));
      });
    }
    return () => {
      if (slider?.noUiSlider) slider.noUiSlider.destroy();
    };
  }, [amount]);

  // Year or Month Slider
  useEffect(() => {
    const ref = type === 'year' ? yearRef.current : monthRef.current;
    if (ref?.noUiSlider) ref.noUiSlider.destroy();

    const values =
      type === 'year' ? [2, 3, 4, 5, 6, 7, 8] : [12, 18, 24, 30, 36, 42, 48];
    const min = values[0];
    const max = values[values.length - 1];
    const valid = Math.max(min, Math.min(max, duration));
    if (valid !== duration) setDuration(valid);

    if (ref) {
      noUiSlider.create(ref, {
        start: valid,
        connect: [true, false],
        step: 1,
        range: { min, max },
        format: {
          to: (value) => Math.round(value),
          from: (value) => Number(value),
        },
        pips: {
          mode: noUiSlider.PipsMode.Values,
          values,
          density: 5,
        },
      });

      ref.noUiSlider.on('update', (values) => {
        setDuration(parseInt(values[0].toString()));
      });
    }

    return () => {
      if (ref?.noUiSlider) ref.noUiSlider.destroy();
    };
  }, [type, duration]);

  const { emi, total, interest } = calculateEMI();

  // Updated Half Circle Calculation
  const scaleFactor = 1.0;

  // percentage calculation
  const principalPercent = total > 0 ? (amount / total) * 100 : 0;
  const interestPercent = 100 - principalPercent;

  // Total 360 degrees, but we're using half circles (180 degrees each)
  const totalRotation = (interestPercent / 100) * 180;

  // Left half circle (0-90 degrees from top-right)
  const leftRotation = Math.min(totalRotation, 90) * scaleFactor;

  // Right half circle (90-180 degrees from top-right)
  const rightRotation = Math.max(0, totalRotation - 90) * scaleFactor;

  // Styles - top-right clockwise
  const leftStyle = {
    transform: `rotate(${leftRotation}deg)`,
    transformOrigin: 'center center',
  };

  const rightStyle = {
    transform: `rotate(${rightRotation}deg)`,
    transformOrigin: 'center center',
  };

  return (
    <section className="pt-125 pb-140 bg_white">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 mx-auto">
            <div className="section-title">
              <h2 className="wow fadeInUp">Calculator</h2>
              <p className="wow fadeInUp" data-wow-delay="0.3s">
                Get an approximate figure for the total monthly instalment
                payments along with a complete break-up of the home loan.
              </p>
            </div>
          </div>
        </div>

        <div className="calculator-widget mt-50">
          <div className="row gy-lg-0 gy-3">
            <div className="col-lg-7">
              <div
                className="single-calculator-widget wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="single-range">
                  <div className="range-header d-flex justify-content-between align-items-center mb-25">
                    <h6>Loan Amount</h6>
                    <input
                      type="text"
                      id="SetRange"
                      value={`$${amount.toLocaleString()}`}
                      readOnly
                    />
                  </div>
                  <div id="RangeSlider" ref={amountRef}></div>
                </div>

                <div className="single-range mt-85 mb-95">
                  <div className="range-header d-flex flex-wrap justify-content-between align-items-center mb-25">
                    <h6>Loan Duration</h6>

                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li>
                        <span className="active_bar"></span>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link month-tab ${
                            type === 'month' ? 'active' : ''
                          }`}
                          onClick={() => setType('month')}
                        >
                          Month
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link year-tab ${
                            type === 'year' ? 'active' : ''
                          }`}
                          onClick={() => setType('year')}
                        >
                          Year
                        </button>
                      </li>
                    </ul>

                    <input
                      type="text"
                      id="SetMonthRange"
                      value={`${duration} ${type}`}
                      readOnly
                    />
                  </div>

                  <div className="tab-content">
                    <div
                      className={`tab-pane fade ${
                        type === 'month' ? 'show active' : ''
                      }`}
                      id="monthTab"
                    >
                      <div id="MonthRangeSlider" ref={monthRef}></div>
                    </div>
                    <div
                      className={`tab-pane fade ${
                        type === 'year' ? 'show active' : ''
                      }`}
                      id="yearTab"
                    >
                      <div id="YearRangeSlider" ref={yearRef}></div>
                    </div>
                  </div>
                </div>

                <div className="bg_disable px-4 py-2 mb-5 interestBox">
                  <p>Rate of Interest</p>
                  <span id="InterestAmount">{interestRate.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="calculator-result-widget bg_disable wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-8 col-sm-7">
                    <div className="emi-amount">
                      <h6>EMI Amount</h6>
                      <span>Principal + Interest</span>
                      <p className="mt-10 LoanTotalAmount">
                        ${total.toLocaleString()}
                      </p>
                    </div>
                    <div className="interest-payable mt-20">
                      <h6>Interest Payable</h6>
                      <p className="mt-10" id="InterestPayable">
                        ${interest.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-4 col-sm-5 col-7 mx-auto">
                    <div className="pie-wrapper" id="loan_graph_circle">
                      <div className="pie">
                        <div
                          className="left-side half-circle"
                          style={leftStyle}
                        ></div>
                        <div
                          className="right-side half-circle"
                          style={rightStyle}
                        ></div>
                      </div>
                      <div className="circle-border"></div>
                    </div>
                  </div>
                </div>

                <div className="row mt-lg-60 mt-25 text-center">
                  <div className="col-12">
                    <h4 className="mb-1">Your EMI Amount</h4>
                    <h1 className="m-0" id="emiAmount">
                      ${emi.toLocaleString()}*
                    </h1>

                    <Link
                      href="/personal-details"
                      className="theme-btn theme-btn-lg mt-40"
                    >
                      Apply Now <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
