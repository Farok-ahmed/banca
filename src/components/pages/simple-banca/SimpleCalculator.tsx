"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as noUiSlider from "nouislider";
interface HTMLDivElementWithSlider extends HTMLDivElement {
  noUiSlider?: noUiSlider.API;
}
const SimpleCalculator = () => {
  const amountSliderRef = useRef<HTMLDivElementWithSlider>(null);
  const periodSliderRef = useRef<HTMLDivElementWithSlider>(null);

  const [amount, setAmount] = useState(5000);
  const [period, setPeriod] = useState(3);

  useEffect(() => {
    const amountSlider = amountSliderRef.current as HTMLDivElementWithSlider;
    const periodSlider = periodSliderRef.current as HTMLDivElementWithSlider;

    if (amountSlider && !amountSlider.noUiSlider) {
      noUiSlider.create(amountSlider, {
        start: [amount],
        connect: [true, false],
        range: { min: 5000, max: 250000 },
        step: 1000,
        tooltips: false,
        format: {
          to: (value: number) => `$${Math.round(value)}`,
          from: (value: string) => Number(value.replace(/\$/g, "")),
        },
      });

      (amountSlider.noUiSlider as unknown as noUiSlider.API).on(
        "update",
        (values: (string | number)[], handle: number) => {
          const val = Number(values[handle].toString().replace(/\$/g, ""));
          setAmount(val);
        }
      );
    }

    if (periodSlider && !periodSlider.noUiSlider) {
      noUiSlider.create(periodSlider, {
        start: [period],
        connect: [true, false],
        range: { min: 1, max: 5 },
        step: 1,
        tooltips: false,
        format: {
          to: (value: number) => `${Math.round(value)}y`,
          from: (value: string) => Number(value.replace(/y/g, "")),
        },
      });

      (periodSlider.noUiSlider as unknown as noUiSlider.API).on(
        "update",
        (values: (string | number)[], handle: number) => {
          const val = Number(values[handle].toString().replace(/y/g, ""));
          setPeriod(val);
        }
      );
    }

    return () => {
      amountSlider?.noUiSlider?.destroy();
      periodSlider?.noUiSlider?.destroy();
    };
  }, [amount, period]);
  return (
    <>
      <div className="calculator mt-60">
        <div className="steps d-flex flex-wrap justify-content-between mt-50 mr-30 ml-30">
          <div className="single-step mt-2 mt-sm-0">
            <span>1</span>Apply for free in 2 min.
          </div>
          <div className="single-step mt-2 mt-sm-0">
            <span>2</span>Compare offers
          </div>
          <div className="single-step mt-2 mt-sm-0">
            <span>3</span>Choose the best offer
          </div>
        </div>

        <div className="row border-bottom gx-0 px-4">
          {/* Loan Amount */}
          <div className="col-lg-6 border-end">
            <div className="calculator-slider pt-40 pb-5 ps-md-4 pe-md-5 px-1">
              <label>Loan Amount</label>
              <div className="d-flex align-items-center">
                <div
                  className="range-slider me-3 w-100"
                  ref={amountSliderRef}
                ></div>
                <input
                  className="range-input form-control w-auto"
                  type="text"
                  value={`$${amount.toLocaleString()}`}
                  readOnly
                />
              </div>
              <span className="range">Min $5,000 - Max $250,000</span>
            </div>
          </div>

          {/* Loan Period */}
          <div className="col-lg-6">
            <div className="calculator-slider pt-40 pb-5 ps-md-4 ps-lg-5 pe-md-4 px-1">
              <label className="label-2">Loan Period</label>
              <div className="d-flex align-items-center">
                <div
                  className="range-slider me-3 w-100"
                  ref={periodSliderRef}
                ></div>
                <input
                  className="range-input form-control w-auto"
                  type="text"
                  value={`${period} year${period > 1 ? "s" : ""}`}
                  readOnly
                />
              </div>
              <span className="range">Min 1 year - Max 5 years</span>
            </div>
          </div>
        </div>

        <div className="expected-payment mt-50 mr-30 ml-30 mb-50">
          <div className="bg_disable d-flex justify-content-between flex-wrap sec-head align-items-center">
            <div>
              <h5>Expected monthly payment</h5>
              <p>Based on 7% borrowing rate</p>
            </div>
            <h4 className="mb-0">$1,162 / month</h4>
          </div>
          <p className="text mx-sm-4 mt-20">
            Price example: Total credit amount USD $100,000 - Maturity 120
            months - Variable borrowing rate 7% - APR 7.24% - Etb. USD $1,000 -
            Total repayment: USD $140,190 - Total credit costs: USD $40,190 -
            14-day right of withdrawal
          </p>

          <div className="text-center mt-45">
            <Link href="/loan-details" className="theme-btn theme-btn-rounded">
              {" "}
              Next <i className="arrow_right"></i>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleCalculator;
