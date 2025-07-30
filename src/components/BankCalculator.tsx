'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as noUiSlider from 'nouislider';
import Link from 'next/link';
import 'nouislider/dist/nouislider.css';

// Define extended HTML type for slider references
type HTMLDivElementWithSlider = HTMLDivElement & {
  noUiSlider: noUiSlider.API;
};

// Define EMI result structure
type EMIResult = {
  emi: number;
  total: number;
  interest: number;
};

const BankCalculator = () => {
  const amountRef = useRef<HTMLDivElementWithSlider | null>(null);
  const durationRef = useRef<HTMLDivElementWithSlider | null>(null);

  const [amount, setAmount] = useState<number>(15000);
  const [duration, setDuration] = useState<number>(5);
  const [type, setType] = useState<'month' | 'year'>('year');
  const [interestRate] = useState<number>(6.5);

  const calculateEMI = (): EMIResult => {
    const principal = amount;
    const n = type === 'year' ? duration * 12 : duration;
    const r = interestRate / 12 / 100;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = emi * n;
    const interest = total - principal;
    return {
      emi: Math.round(emi),
      total: Math.round(total),
      interest: Math.round(interest),
    };
  };

  // Loan Amount Slider
  useEffect(() => {
    const amountSlider = amountRef.current;
    if (amountSlider && !amountSlider.noUiSlider) {
      noUiSlider.create(amountSlider, {
        start: amount,
        connect: [true, false],
        step: 1000,
        range: { min: 5000, max: 150000 },
        pips: {
          mode: 'values',
          values: [5000, 25000, 50000, 75000, 100000, 125000, 150000],
          density: 5,
          stepped: true,
          format: {
            to: (value) => `$${(value / 1000).toFixed(0)}k`,
          },
        } as CustomPips,
        format: {
          to: (value) => Math.round(value),
          from: (value) => Number(value),
        },
      });
      amountSlider.noUiSlider.on('update', (values: string) => {
        setAmount(parseInt(values[0].toString()));
      });
    }

    return () => {
      amountSlider?.noUiSlider?.destroy();
    };
  }, [amount]);

  type CustomPips = {
    mode: 'range' | 'steps' | 'count' | 'positions' | 'values';
    values?: number[];
    stepped?: boolean;
    density?: number;
    format?: {
      to: (value: number) => string;
    };
  };

  // Duration Slider
  useEffect(() => {
    const durationSlider = durationRef.current;
    if (durationSlider?.noUiSlider) {
      durationSlider.noUiSlider.destroy();
    }
    if (durationSlider) {
      const pipValues =
        type === 'year' ? [2, 3, 4, 5, 6, 7, 8] : [12, 18, 24, 30, 36, 42, 48];
      const rangeMin = type === 'year' ? 2 : 12;
      const rangeMax = type === 'year' ? 8 : 48;

      noUiSlider.create(durationSlider, {
        start: duration,
        connect: [true, false],
        step: 1,
        range: { min: rangeMin, max: rangeMax },
        pips: {
          mode: 'values',
          values: pipValues,
          density: 10,
          stepped: true,
        } as CustomPips,
        format: {
          to: (value) => Math.round(value),
          from: (value) => Number(value),
        },
      });
      durationSlider.noUiSlider.on('update', (values) => {
        setDuration(parseInt(values[0].toString()));
      });
    }
    return () => {
      durationSlider?.noUiSlider?.destroy();
    };
  }, [type, duration]);

  const { emi, total, interest } = calculateEMI();

  return (
    <section className="pt-125 pb-140 bg_white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <h2>Calculator</h2>
            <p>
              Get an approximate figure for the total monthly instalment
              payments along with a complete break-up of the home loan.
            </p>
          </div>
        </div>

        <div className="calculator-widget mt-50">
          <div className="row gy-lg-0 gy-3">
            {/* Left Side Inputs */}
            <div className="col-lg-7">
              <div className="single-calculator-widget">
                <div className="single-range">
                  <div className="range-header d-flex justify-content-between align-items-center mb-25">
                    <h6>Loan Amount</h6>
                    <input
                      type="text"
                      value={`$${amount.toLocaleString()}`}
                      readOnly
                      className="form-control w-25 text-center"
                    />
                  </div>
                  <div ref={amountRef} id="RangeSlider"></div>
                </div>

                <div className="single-range mt-85 mb-95">
                  <div className="range-header d-flex flex-wrap justify-content-between align-items-center mb-25">
                    <h6>Loan Duration</h6>
                    <ul className="nav nav-tabs border-0 gap-2 text-center">
                      <li className="nav-item">
                        <button
                          className={`nav-link rounded-pill px-3 fw-medium ${
                            type === 'month'
                              ? 'bg-primary text-white'
                              : 'bg-light text-dark'
                          }`}
                          onClick={() => setType('month')}
                        >
                          Month
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link rounded-pill px-3 fw-medium ${
                            type === 'year'
                              ? 'bg-primary text-white'
                              : 'bg-light text-dark'
                          }`}
                          onClick={() => setType('year')}
                        >
                          Year
                        </button>
                      </li>
                    </ul>
                    <input
                      type="text"
                      value={`${duration} ${
                        type === 'year' ? 'year' : 'month'
                      }`}
                      readOnly
                      className="form-control w-25 text-center"
                    />
                  </div>
                  <div ref={durationRef}></div>
                </div>

                <div className="bg_disable px-4 py-2 mb-5 interestBox rounded">
                  <p className="mb-1">Rate of Interest</p>
                  <span className="fw-bold text-primary fs-5">
                    {interestRate.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side Results */}
            <div className="col-lg-5">
              <div className="calculator-result-widget bg_disable rounded p-4">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-8 col-sm-7">
                    <div className="emi-amount mb-3">
                      <h6 className="mb-0 text-primary">EMI Amount</h6>
                      <small>Principal + Interest</small>
                      <p className="mt-10 fw-semibold text-dark">
                        ${total.toLocaleString()}*
                      </p>
                    </div>
                    <div className="interest-payable">
                      <h6 className="mb-0 text-purple">Interest Payable</h6>
                      <p className="mt-10 fw-semibold text-purple">
                        ${interest.toLocaleString()}*
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-4 col-sm-5 col-7 mx-auto">
                    <div className="pie-wrapper">
                      <div className="pie"></div>
                      <div className="circle-border"></div>
                    </div>
                  </div>
                </div>

                <div className="row mt-lg-60 mt-25 text-center">
                  <div className="col-12">
                    <h4 className="mb-1">Your EMI Amount</h4>
                    <h1 className="m-0 fw-bold">${emi.toLocaleString()}*</h1>
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

export default BankCalculator;
