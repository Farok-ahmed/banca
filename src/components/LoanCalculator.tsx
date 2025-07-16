'use client';

import React, { useState, useEffect } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(10);
  const [duration, setDuration] = useState(1);
  const [durationType, setDurationType] = useState<'year' | 'month' | 'week'>('year');
  const [startDate, setStartDate] = useState<Date | unknown>(null);
  const [endDate, setEndDate] = useState<Date | unknown>(null);

  const [emi, setEmi] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);
  const [interestPayable, setInterestPayable] = useState(0);

  useEffect(() => {
    calculateLoan();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loanAmount, interestRate, duration, durationType]);

  const calculateLoan = () => {
    let months = duration;

    if (durationType === 'year') months *= 12;
    else if (durationType === 'week') months = Math.floor(duration * 4.33); // approx

    const monthlyRate = interestRate / (12 * 100);
    const emiCalc =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const total = emiCalc * months;
    const interest = total - loanAmount;

    setEmi(emiCalc);
    setTotalPayable(total);
    setInterestPayable(interest);
  };

  const handleTermTab = (type: 'year' | 'month' | 'week') => {
    setDurationType(type);
    setDuration(1);
  };

  return (
    <section className="calculator-area-2">
      <div className="container">
        <div className="section-title">
          <span className="short-title-2">Loan calculator</span>
          <h1 className="wow fadeInUp text-white">Calculate and confirm your loans</h1>
        </div>

        <div className="calculator-widget-2 mt-50">
          <div className="row gy-lg-0 gy-3">
            <div className="col-lg-7">
              <div className="single-calculator-widget wow fadeInUp" data-wow-delay="0.1s">
                <h4>Loan Calculator</h4>

                <div className="range-label mt-40">Loan Term</div>
                <nav>
                  <div className="nav nav-tabs loan-type-select" role="tablist">
                    <button
                      className={`nav-link ${durationType === 'year' ? 'active' : ''}`}
                      onClick={() => handleTermTab('year')}
                    >
                      Yearly
                    </button>
                    <button
                      className={`nav-link ${durationType === 'month' ? 'active' : ''}`}
                      onClick={() => handleTermTab('month')}
                    >
                      Monthly
                    </button>
                    <button
                      className={`nav-link ${durationType === 'week' ? 'active' : ''}`}
                      onClick={() => handleTermTab('week')}
                    >
                      Weekly
                    </button>
                  </div>
                </nav>

                <div className="range-label">Loan Amount</div>
                <div className="single-range">
                  <div className="input-group">
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="form-control"
                    />
                    <span className="input-group-text">$</span>
                  </div>
                </div>

                <div className="range-label">Interest Rate</div>
                <div className="single-range">
                  <div className="input-group">
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="form-control"
                    />
                    <span className="input-group-text">%</span>
                  </div>
                </div>

                <div className="range-label">Loan Duration</div>
                <div className="single-range">
                  <div className="input-group">
                    <input
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                      className="form-control"
                    />
                    <span className="input-group-text">{durationType}</span>
                  </div>
                </div>

                <div className="d-flex loan-start-date" style={{ gap: '20px' }}>
                  <div>
                    <div className="range-label">Start Date</div>
                    <div className="inp-container">
                      <Flatpickr
                        placeholder="Select Date"
                        className="form-control"
                        value={startDate as Date[]}
                        onChange={(date) => setStartDate(date[0])}
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
                        placeholder="Select Date"
                        className="form-control"
                        value={endDate as Date[]}
                        onChange={(date) => setEndDate(date[0])}
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

            {/* Result Side */}
            <div className="col-lg-5 pl-lg-35">
              <div className="calculator-result-widget wow fadeInUp" data-wow-delay="0.3s">
                <div className="pie-wrapper mt-25" id="loan_graph_circle">
                  <div className="label">
                    Total Amount
                    <h2 className="LoanTotalAmount">${totalPayable.toFixed(2)}</h2>
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
                    <span className="label">EMI Amount (Principal + Interest)</span>
                    <span className="amount">${(emi * (durationType === 'year' ? duration * 12 : durationType === 'month' ? duration : duration * 4.33)).toFixed(2)}</span>
                  </li>
                  <li>
                    <span className="label">Interest Payable</span>
                    <span className="amount">${interestPayable.toFixed(2)}</span>
                  </li>
                  <li>
                    <span className="label">Loan Duration</span>
                    <span className="amount">
                      {duration} {durationType}(s)
                    </span>
                  </li>
                  <li>
                    <span className="label">Your EMI Amount</span>
                    <span className="amount">${emi.toFixed(2)}</span>
                  </li>
                </ul>

                <a href="personal-details.html" className="theme-btn theme-btn-lg mt-20 w-100">
                  Apply Now
                  <i className="arrow_right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;
