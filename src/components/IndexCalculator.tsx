'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import Link from 'next/link';

const IndexCalculator = () => {
  const [termType, setTermType] = useState<'yearly' | 'monthly' | 'weekly'>(
    'yearly'
  );
  const [amount, setAmount] = useState(5000);
  const [rate, setRate] = useState(5);
  const [duration, setDuration] = useState(1);
  const [startDate, setStartDate] = useState<Date[] | null>(null);
  const [endDate, setEndDate] = useState<Date[] | null>(null);

  const amountSliderRef = useRef<HTMLDivElement>(null);
  const rateSliderRef = useRef<HTMLDivElement>(null);
  const yearSliderRef = useRef<HTMLDivElement>(null);
  const monthSliderRef = useRef<HTMLDivElement>(null);
  const weekSliderRef = useRef<HTMLDivElement>(null);

  const durationOptions = {
    yearly: { min: 1, max: 5 },
    monthly: { min: 6, max: 60 },
    weekly: { min: 4, max: 260 },
  };

  const result = useMemo(() => {
    const r =
      rate /
      100 /
      (termType === 'yearly' ? 12 : termType === 'monthly' ? 1 : 0.25);
    const n =
      duration *
      (termType === 'yearly' ? 12 : termType === 'monthly' ? 1 : 0.25);
    const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = emi * n;
    const interest = total - amount;
    return {
      emi: emi.toFixed(2),
      total: total.toFixed(2),
      interest: interest.toFixed(2),
      duration: `${duration} ${
        termType === 'yearly'
          ? 'Years'
          : termType === 'monthly'
            ? 'Months'
            : 'Weeks'
      }`,
    };
  }, [amount, rate, duration, termType]);

  useEffect(() => {
    if (amountSliderRef.current && !amountSliderRef.current.noUiSlider) {
      noUiSlider.create(amountSliderRef.current, {
        start: amount,
        range: { min: 1000, max: 100000 },
        step: 100,
        connect: 'lower',
      });
      amountSliderRef.current.noUiSlider?.on('update', (values) => {
        setAmount(parseFloat(values[0]));
      });
    }
    if (rateSliderRef.current && !rateSliderRef.current.noUiSlider) {
      noUiSlider.create(rateSliderRef.current, {
        start: rate,
        range: { min: 1, max: 20 },
        step: 0.1,
        connect: 'lower',
      });
      rateSliderRef.current.noUiSlider?.on('update', (values) => {
        setRate(parseFloat(values[0]));
      });
    }
    return () => {
      amountSliderRef.current?.noUiSlider?.destroy();
      rateSliderRef.current?.noUiSlider?.destroy();
    };
  }, []);

  useEffect(() => {
    const refMap = {
      yearly: yearSliderRef,
      monthly: monthSliderRef,
      weekly: weekSliderRef,
    };
    const sliderRef = refMap[termType];
    const { min, max } = durationOptions[termType];

    if (sliderRef.current) {
      if (sliderRef.current.noUiSlider) {
        sliderRef.current.noUiSlider.destroy();
      }
      noUiSlider.create(sliderRef.current, {
        start: duration,
        range: { min, max },
        step: 1,
        connect: 'lower',
      });
      sliderRef.current.noUiSlider?.on('update', (values) => {
        setDuration(parseInt(values[0]));
      });
    }

    return () => {
      sliderRef.current?.noUiSlider?.destroy();
    };
  }, [termType]);

  return (
    <div className="container">
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
                <div className="nav nav-tabs loan-type-select" role="tablist">
                  {['yearly', 'monthly', 'weekly'].map((type) => (
                    <button
                      key={type}
                      className={`nav-link ${
                        termType === type ? 'active' : ''
                      }`}
                      onClick={() => setTermType(type as any)}
                      type="button"
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </nav>

              <div className="range-label">Loan Amount</div>
              <div className="single-range">
                <div id="RangeSlider" ref={amountSliderRef}></div>
                <div className="input-group">
                  <input
                    className="noTextMerge"
                    type="text"
                    value={amount}
                    readOnly
                  />
                  <span className="input-group-text">$</span>
                </div>
              </div>

              <div className="range-label">Interest Rate</div>
              <div className="single-range">
                <div id="RoiRangeSlider" ref={rateSliderRef}></div>
                <div className="input-group">
                  <input type="text" value={rate} readOnly />
                  <span className="input-group-text">%</span>
                </div>
              </div>

              <div className="range-label">Loan Duration</div>
              <div className="single-range">
                <div className="tab-content">
                  <div
                    className={`tab-pane fade ${
                      termType === 'yearly' ? 'show active' : ''
                    }`}
                  >
                    <div id="YearRangeSlider" ref={yearSliderRef}></div>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      termType === 'monthly' ? 'show active' : ''
                    }`}
                  >
                    <div id="MonthRangeSlider" ref={monthSliderRef}></div>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      termType === 'weekly' ? 'show active' : ''
                    }`}
                  >
                    <div id="WeekRangeSlider" ref={weekSliderRef}></div>
                  </div>
                </div>
                <div className="input-group">
                  <input
                    className="noTextMerge"
                    type="text"
                    value={duration}
                    readOnly
                  />
                  <span className="input-group-text loanTermIndicator">
                    {termType === 'yearly'
                      ? 'Years'
                      : termType === 'monthly'
                        ? 'Months'
                        : 'Weeks'}
                  </span>
                </div>
              </div>

              <div className="d-flex loan-start-date" style={{ gap: '20px' }}>
                <div>
                  <div className="range-label">Start Date</div>
                  <div className="inp-container">
                    <Flatpickr
                      id="loanStartDate"
                      placeholder="Select Date"
                      className="form-control"
                      value={startDate as Date[]}
                      onChange={(date) => setStartDate(date)}
                      options={{ dateFormat: 'd F Y', position: 'above' }}
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
                      value={endDate as Date[]}
                      onChange={(date) => setEndDate(date)}
                      options={{ dateFormat: 'd F Y', position: 'above' }}
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
                  <h2 className="LoanTotalAmount">${result.total}</h2>
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
                  <span className="amount">${result.total}</span>
                </li>
                <li>
                  <span className="label">Interest Payable</span>
                  <span className="amount">${result.interest}</span>
                </li>
                <li>
                  <span className="label">Loan Duration</span>
                  <span className="amount">{result.duration}</span>
                </li>
                <li>
                  <span className="label">Your EMI Amount</span>
                  <span className="amount">${result.emi}</span>
                </li>
              </ul>
              <Link
                href="/personal-details"
                className="theme-btn theme-btn-lg mt-20 w-100"
              >
                Apply Now <i className="arrow_right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexCalculator;
