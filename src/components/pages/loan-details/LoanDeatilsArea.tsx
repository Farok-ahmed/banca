"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import icon41 from '@/assets/img/apply-loan/icon-4.1.png';
import icon42 from '@/assets/img/apply-loan/icon-4.2.png';
import icon51 from '@/assets/img/apply-loan/icon-5.1.png';
import icon52 from '@/assets/img/apply-loan/icon-5.2.png';
import icon61 from '@/assets/img/apply-loan/icon-6.1.png';
import icon62 from '@/assets/img/apply-loan/icon-6.2.png';
import icon71 from '@/assets/img/apply-loan/icon-7.1.png';
import icon72 from '@/assets/img/apply-loan/icon-7.2.png';

const LoanDeatilsArea = () => {
    const [financingType, setFinancingType] = useState("Debt-Financing");
  const [bankService, setBankService] = useState("Individual-Banking");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFinancingType(e.target.value);
  };

  const handleChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBankService(e.target.value);
  };
  return    (
    <>
     <section className="loan-deatils-area bg_disable pt-130 pb-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="stepper-widget mt-sm-5 px-3 px-sm-0">
                    <ul>
                      <li className="active mt-0">
                        <Link href="/loan-details">
                          <div className="number">
                            <i className="icon_check"></i> <span>1</span>
                          </div>{" "}
                          Loan Details
                        </Link>
                      </li>
                      <li className="">
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
                    <form action="/personal-details">
                      <div className="row mb-35 gy-4">
                        <div className="col-lg-3 col-md-6">
                          <input
                            className="select-loan-type-radio"
                            name="select-loan-type"
                            type="radio"
                            id="Personal_loan"
                          />
                          <label htmlFor="Personal_loan" className="loan-type">
                            <Image src={icon41} alt="icon" />
                            <Image src={icon42} alt="icon" />
                            <span>Personal Loan</span>
                          </label>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <input
                            className="select-loan-type-radio"
                            name="select-loan-type"
                            type="radio"
                            id="Home_loan"
                          />
                          <label htmlFor="Home_loan" className="loan-type">
                            <Image src={icon51} alt="icon" />
                            <Image src={icon52} alt="icon" />
                            <span>home Loan</span>
                          </label>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <input
                            className="select-loan-type-radio"
                            name="select-loan-type"
                            type="radio"
                            id="Buisness_loan"
                          />
                          <label htmlFor="Buisness_loan" className="loan-type">
                            <Image src={icon61} alt="icon" />
                            <Image src={icon62} alt="icon" />
                            <span>Buisness Loan</span>
                          </label>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <input
                            className="select-loan-type-radio"
                            name="select-loan-type"
                            type="radio"
                            id="Car_loan"
                          />
                          <label htmlFor="Car_loan" className="loan-type">
                            <Image src={icon71} alt="icon" />
                            <Image src={icon72} alt="icon" />
                            <span>car Loan</span>
                          </label>
                        </div>
                      </div>
                      <div className="row gy-4">
                        <div className="col-md-6">
                          <label className="label" htmlFor="loandetails01">
                            Choose your financing type
                          </label>
                          <select
                            className="form-select w-100"
                            id="loandetails01"
                            value={financingType}
                            onChange={handleChange}
                          >
                            <option value="Debt-Financing">
                              Debt Financing
                            </option>
                            <option value="Equity-Finance">
                              Equity Finance
                            </option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="label" htmlFor="loandetails02">
                            Choose your preferred bank service
                          </label>
                          <select
                            className="form-select w-100"
                            id="loandetails02"
                            value={bankService}
                            onChange={handleChanges}
                          >
                            <option value="Individual-Banking">
                              Individual Banking
                            </option>
                            <option value="Business-Banking">
                              Business Banking
                            </option>
                            <option value="Digital-Banking">
                              Digital Banking
                            </option>
                            <option value="Loans">Loans</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="label" htmlFor="loan-amount">
                            Yout loan amount
                          </label>
                          <div className="input-field">
                            <span>$</span>
                            <input
                              type="number"
                              id="loan-amount"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <label className="label mb-4">Laon duration</label>

                          <div className="form-check form-check-inline mr-30">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              value="option1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio1"
                            >
                              12 months
                            </label>
                          </div>
                          <div className="form-check form-check-inline mr-30">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio2"
                            >
                              18 months
                            </label>
                          </div>

                          <div className="form-check form-check-inline mr-30">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio3"
                              value="option3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio3"
                            >
                              24 months
                            </label>
                          </div>

                          <div className="form-check form-check-inline mr-30">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio4"
                              value="option4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio4"
                            >
                              36 months
                            </label>
                          </div>
                          <div className="form-check form-check-inline mr-30">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio5"
                              value="option5"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio5"
                            >
                              48 months
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row  mt-60">
                        <div className="col-md-12">
                          <div className="nav-btn d-flex justify-content-end">
                            <button
                              className=" theme-btn-primary_alt theme-btn next-btn"
                              type="submit"
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
    </>
  )
}

export default LoanDeatilsArea