'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import Link from 'next/link';

type HTMLDivElementWithSlider = HTMLDivElement & {
  noUiSlider: noUiSlider.API;
};


const IndexCalculator = () => {
  const [termType, setTermType] = useState<'yearly' | 'monthly' | 'weekly'>(
    'yearly'
  );

  const [amount, setAmount] = useState(5000);
  const [rate, setRate] = useState(5);
  const [duration, setDuration] = useState(1);
  const [startDate, setStartDate] = useState<Date[] | null>(null);
  const [endDate, setEndDate] = useState<Date[] | null>(null);

  const amountSliderRef = useRef<HTMLDivElementWithSlider>(null);
  const rateSliderRef = useRef<HTMLDivElementWithSlider>(null);
  const yearSliderRef = useRef<HTMLDivElementWithSlider>(null);
  const monthSliderRef = useRef<HTMLDivElementWithSlider>(null);
  const weekSliderRef = useRef<HTMLDivElementWithSlider>(null);

  const durationOptions = useMemo(
    () => ({
      yearly: { min: 1, max: 5 },
      monthly: { min: 6, max: 60 },
      weekly: { min: 4, max: 260 },
    }),
    []
  );

  const result = useMemo(() => {
    // Fix: Correct calculation for different term types
    let periodicRate: number;
    let totalPeriods: number;

    if (termType === 'yearly') {
      periodicRate = rate / 100 / 12; // Monthly rate
      totalPeriods = duration * 12; // Total months
    } else if (termType === 'monthly') {
      periodicRate = rate / 100 / 12; // Monthly rate
      totalPeriods = duration; // Already in months
    } else { // weekly
      periodicRate = rate / 100 / 52; // Weekly rate
      totalPeriods = duration; // Already in weeks
    }

    if (periodicRate === 0) {
      // If no interest, simple division
      const emi = amount / totalPeriods;
      return {
        emi: emi.toFixed(2),
        total: amount.toFixed(2),
        interest: '0.00',
        duration: `${duration} ${
          termType === 'yearly'
            ? 'Years'
            : termType === 'monthly'
              ? 'Months'
              : 'Weeks'
        }`,
      };
    }

    const emi = (amount * periodicRate * Math.pow(1 + periodicRate, totalPeriods)) / 
                (Math.pow(1 + periodicRate, totalPeriods) - 1);
    const total = emi * totalPeriods;
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

  // Amount and Rate sliders - initialize once
  useEffect(() => {
    const amountSlider = amountSliderRef.current;
    const rateSlider = rateSliderRef.current;

    // Cleanup existing sliders
    if (amountSlider?.noUiSlider) {
      amountSlider.noUiSlider.destroy();
    }
    if (rateSlider?.noUiSlider) {
      rateSlider.noUiSlider.destroy();
    }

    if (amountSlider) {
      noUiSlider.create(amountSlider, {
        start: amount,
        range: { min: 1000, max: 100000 },
        step: 100,
        connect: [true, false],
      });
      amountSlider.noUiSlider.on('update', (values: (string|number)[]) => {
        setAmount(parseFloat(values[0].toString()));
      });
    }

    if (rateSlider) {
      noUiSlider.create(rateSlider, {
        start: rate,
        range: { min: 1, max: 20 },
        step: 0.1,
        connect: [true, false],
      });
      rateSlider.noUiSlider.on('update', (values: (string|number)[]) => {
        setRate(parseFloat(values[0].toString()));
      });
    }

    return () => {
      amountSlider?.noUiSlider?.destroy();
      rateSlider?.noUiSlider?.destroy();
    };
  }, [amount, rate]); 

  // Duration slider - recreate when term type changes
  useEffect(() => {
    const refMap = {
      yearly: yearSliderRef,
      monthly: monthSliderRef,
      weekly: weekSliderRef,
    };
    
    // Clean up all duration sliders first
    Object.values(refMap).forEach(ref => {
      if (ref.current?.noUiSlider) {
        ref.current.noUiSlider.destroy();
      }
    });

    const sliderRef = refMap[termType];
    const { min, max } = durationOptions[termType];

    // Reset duration to valid range for the new term type
    const validDuration = Math.max(min, Math.min(max, duration));
    if (validDuration !== duration) {
      setDuration(validDuration);
    }

    if (sliderRef.current) {
      noUiSlider.create(sliderRef.current, {
        start: validDuration,
        range: { min, max },
        step: 1,
        connect: [true, false],
      });

      sliderRef.current.noUiSlider.on('update', (values: (string|number)[]) => {
        setDuration(parseInt(values[0].toString()));
      });
    }

    return () => {
      Object.values(refMap).forEach(ref => {
        if (ref.current?.noUiSlider) {
          ref.current.noUiSlider.destroy();
        }
      });
    };
  }, [termType, duration, durationOptions]);

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
                  {(['yearly', 'monthly', 'weekly'] as const).map((type) => (
                    <button
                      key={type}
                      className={`nav-link ${
                        termType === type ? 'active' : ''
                      }`}
                      onClick={() => setTermType(type)}
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
                    value={amount.toLocaleString()}
                    readOnly
                  />
                  <span className="input-group-text">$</span>
                </div>
              </div>

              <div className="range-label">Interest Rate</div>
              <div className="single-range">
                <div id="RoiRangeSlider" ref={rateSliderRef}></div>
                <div className="input-group">
                  <input type="text" value={rate.toFixed(1)} readOnly />
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
                  <h2 className="LoanTotalAmount">${parseFloat(result.total).toLocaleString()}</h2>
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
                    Total Amount (Principal + Interest)
                  </span>
                  <span className="amount">${parseFloat(result.total).toLocaleString()}</span>
                </li>
                <li>
                  <span className="label">Interest Payable</span>
                  <span className="amount">${parseFloat(result.interest).toLocaleString()}</span>
                </li>
                <li>
                  <span className="label">Loan Duration</span>
                  <span className="amount">{result.duration}</span>
                </li>
                <li>
                  <span className="label">Your EMI Amount</span>
                  <span className="amount">${parseFloat(result.emi).toLocaleString()}</span>
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