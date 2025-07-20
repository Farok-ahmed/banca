'use client';

import { useEffect, useRef, useState } from 'react';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import Link from 'next/link';

const LoanCalculator = () => {
  const sliderRefs = {
    loan: useRef<HTMLDivElement>(null),
    roi: useRef<HTMLDivElement>(null),
    year: useRef<HTMLDivElement>(null),
    month: useRef<HTMLDivElement>(null),
    week: useRef<HTMLDivElement>(null),
  };

  const [startDate, setStartDate] = useState<Date[] | undefined>();
  const [endDate, setEndDate] = useState<Date[] | undefined>();
  const [activeTab, setActiveTab] = useState<'year' | 'month' | 'week'>('year');

  // noUiSlider Setup
  useEffect(() => {
    const sliders = [
      { ref: sliderRefs.loan, min: 5000, max: 150000, step: 1000 },
      { ref: sliderRefs.roi, min: 1, max: 50, step: 0.1 },
      { ref: sliderRefs.year, min: 1, max: 30, step: 1 },
      { ref: sliderRefs.month, min: 1, max: 360, step: 1 },
      { ref: sliderRefs.week, min: 1, max: 520, step: 1 },
    ];

    sliders.forEach(({ ref, min, max, step }) => {
      if (ref.current && !ref.current.classList.contains('noUi-target')) {
        noUiSlider.create(ref.current, {
          start: [min],
          connect: [true, false],
          step,
          range: { min, max },
          tooltips: true,
          format: {
            to: (value: number) => Math.round(value),
            from: (value: string) => Number(value),
          },
        });
      }
    });

    return () => {
      sliders.forEach(({ ref }) => {
        if (ref.current && ref.current.noUiSlider) {
          ref.current.noUiSlider.destroy();
        }
      });
    };
  }, [];

  return (
    <div className="calculator-widget-2 mt-50">
      <div className="row gy-lg-0 gy-3">
        <div className="col-lg-7">
          <div className="single-calculator-widget wow fadeInUp" data-wow-delay="0.1s">
            <h4>Loan Calculator</h4>

            {/* Loan Term Tabs */}
            <div className="range-label mt-40">Loan Term</div>
            <nav>
              <div className="nav nav-tabs loan-type-select" role="tablist">
                {['year', 'month', 'week'].map((type) => (
                  <button
                    key={type}
                    className={`nav-link ${activeTab === type ? 'active' : ''}`}
                    onClick={() => setActiveTab(type as 'year' | 'month' | 'week')}
                    type="button"
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}ly
                  </button>
                ))}
              </div>
            </nav>

            {/* Loan Amount */}
            <div className="range-label">Loan Amount</div>
            <div className="single-range">
              <div id="RangeSlider" ref={sliderRefs.loan}></div>
              <div className="input-group">
                <input className="noTextMerge" type="text" id="SetRange" readOnly />
                <span className="input-group-text">$</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="range-label">Interest Rate</div>
            <div className="single-range">
              <div id="RoiRangeSlider" ref={sliderRefs.roi}></div>
              <div className="input-group">
                <input type="text" id="SetRoiRange" readOnly />
                <span className="input-group-text">%</span>
              </div>
            </div>

            {/* Loan Duration */}
            <div className="range-label">Loan Duration</div>
            <div className="single-range">
              <div className="tab-content">
                {activeTab === 'year' && <div ref={sliderRefs.year}></div>}
                {activeTab === 'month' && <div ref={sliderRefs.month}></div>}
                {activeTab === 'week' && <div ref={sliderRefs.week}></div>}
              </div>
              <div className="input-group">
                <input className="noTextMerge" type="text" id="SetMonthRange" readOnly />
                <span className="input-group-text loanTermIndicator">@example.com</span>
              </div>
            </div>

            {/* Date Pickers */}
            <div className="d-flex loan-start-date" style={{ gap: '20px' }}>
              <div>
                <div className="range-label">Start Date</div>
                <div className="inp-container">
                  <Flatpickr
                    id="loanStartDate"
                    placeholder="Select Date"
                    className="form-control"
                    value={startDate}
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
                    value={endDate}
                    onChange={(date) => setEndDate(date)}
                    options={{ dateFormat: 'd F Y', position: 'above' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Graph */}
        <div className="col-lg-5 pl-lg-35">
          <div className="calculator-result-widget wow fadeInUp" data-wow-delay="0.3s">
            <div className="pie-wrapper mt-25" id="loan_graph_circle">
              <div className="label">
                Total Amount<h2 className="LoanTotalAmount"></h2>
              </div>
              <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
              </div>
              <div className="circle-border"></div>
            </div>

            <div className="graph-indicator">
              <div><span className="blue-dot"></span> EMI Amount</div>
              <div><span className="orange-dot"></span> Interest Payable</div>
            </div>

            <ul className="loan-calculation list-unstyled">
              <li><span className="label">EMI Amount (Principal + Interest)</span><span className="amount LoanTotalAmount"></span></li>
              <li><span className="label">Interest Payable</span><span className="amount" id="InterestPayable"></span></li>
              <li><span className="label">Loan Duration</span><span className="amount LoanTotalDuration"></span></li>
              <li><span className="label">Your EMI Amount</span><span className="amount" id="emiAmount"></span></li>
            </ul>

            <Link href="personal-details.html" className="theme-btn theme-btn-lg mt-20 w-100">
              Apply Now <i className="arrow_right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
