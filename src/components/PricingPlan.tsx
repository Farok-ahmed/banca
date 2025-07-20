'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const PricingPlan = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleMonthlyClick = () => {
    if (!isMonthly) setIsMonthly(true);
  };

  const handleYearlyClick = () => {
    if (isMonthly) setIsMonthly(false);
  };

  const togglePricing = () => {
    setIsMonthly((prev) => !prev);
  };

  return (
    <section className="saas-pricing-area bg-white">
      <div className="container">
        <div
          className="saas-section-title text-center mb-60 wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <h2>
            The perfect <span>pricings</span> plans
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available
            but them
            <br /> majority have suffered alteration form injected.
          </p>
        </div>

        {/* Toggle Button */}
        <div className="pricing_tab_btn active text-center" style={{ cursor: 'pointer' }}>
          <span
            onClick={handleMonthlyClick}
            className={!isMonthly ? 'text-muted' : ''}
          >
            Monthly
          </span>
          <span className="toggle" onClick={togglePricing}></span>
          <span
            onClick={handleYearlyClick}
            className={isMonthly ? 'text-muted' : ''}
          >
            Yearly
          </span>
        </div>

        <div className="pricing_inner">
          {/* Monthly Pricing */}
          <div className={`price_items month ${!isMonthly ? 'd-none' : ''}`}>
            <div className="row justify-content-center">
              {/* Monthly Basic Plan */}
              <div className="col-xl-4 col-md-6">
                <div className="price_item wow fadeInUp">
                  <div className="price_header">
                    <h6>Basic Plan</h6>
                    <p>There are many variations of passages of Lorem Ipsum available but the word.</p>
                  </div>
                  <div className="price">
                    $15<sub>/month</sub>
                  </div>
                  <ul className="service_list list-unstyled">
                    <li><i className="icon_check_alt"></i>Non ipsum metus vulputate</li>
                    <li><i className="icon_check_alt"></i>There are variations of passages</li>
                    <li><i className="icon_check_alt"></i>Alteration some form injected</li>
                  </ul>
                  <Link href="contact.html" className="price_btn theme-btn theme-btn-alt">Choose Plan</Link>
                </div>
              </div>

              {/* Monthly Premium Plan */}
              <div className="col-xl-4 col-md-6">
                <div className="price_item wow fadeInUp">
                  <div className="price_header">
                    <h6>Premium Plan</h6>
                    <p>There are many variations of passages of Lorem Ipsum available but the word.</p>
                  </div>
                  <div className="price">
                    $25<sub>/month</sub>
                  </div>
                  <ul className="service_list list-unstyled">
                    <li><i className="icon_check_alt"></i>Non ipsum metus vulputate</li>
                    <li><i className="icon_check_alt"></i>There are variations of passages</li>
                    <li><i className="icon_check_alt"></i>Alteration some form injected</li>
                  </ul>
                  <Link href="contact.html" className="price_btn theme-btn theme-btn-alt">Choose Plan</Link>
                </div>
              </div>

              {/* Monthly Business Plan */}
              <div className="col-xl-4 col-md-6">
                <div className="price_item wow fadeInUp">
                  <div className="price_header">
                    <h6>Business Plan</h6>
                    <p>There are many variations of passages of Lorem Ipsum available but the word.</p>
                  </div>
                  <div className="price">
                    $45<sub>/month</sub>
                  </div>
                  <ul className="service_list list-unstyled">
                    <li><i className="icon_check_alt"></i>Non ipsum metus vulputate</li>
                    <li><i className="icon_check_alt"></i>There are variations of passages</li>
                    <li><i className="icon_check_alt"></i>Alteration some form injected</li>
                  </ul>
                  <Link href="contact.html" className="price_btn theme-btn theme-btn-alt">Choose Plan</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Yearly Pricing */}
          <div className={`price_items year ${isMonthly ? 'd-none' : ''}`}>
            <div className="row justify-content-center">
              {/* Yearly Basic Plan */}
              <div className="col-xl-4 col-md-6">
                <div className="price_item wow fadeInUp">
                  <div className="price_header">
                    <h6>Basic Plan</h6>
                    <p>There are many variations of passages of Lorem Ipsum available but the word.</p>
                  </div>
                  <div className="price">
                    $25<sub>/ Year</sub>
                  </div>
                  <ul className="service_list list-unstyled">
                    <li><i className="icon_check_alt"></i>Non ipsum metus vulputate</li>
                    <li><i className="icon_check_alt"></i>There are variations of passages</li>
                    <li><i className="icon_check_alt"></i>Alteration some form injected</li>
                  </ul>
                  <Link href="contact.html" className="price_btn theme-btn theme-btn-alt">Choose Plan</Link>
                </div>
              </div>

              {/* Yearly Premium Plan */}
              <div className="col-xl-4 col-md-6">
                <div className="price_item wow fadeInUp">
                  <div className="price_header">
                    <h6>Premium Plan</h6>
                    <p>There are many variations of passages of Lorem Ipsum available but the word.</p>
                  </div>
                  <div className="price">
                    $35<sub>/ Year</sub>
                  </div>
                  <ul className="service_list list-unstyled">
                    <li><i className="icon_check_alt"></i>Non ipsum metus vulputate</li>
                    <li><i className="icon_check_alt"></i>There are variations of passages</li>
                    <li><i className="icon_check_alt"></i>Alteration some form injected</li>
                  </ul>
                  <Link href="contact.html" className="price_btn theme-btn theme-btn-alt">Choose Plan</Link>
                </div>
              </div>

              {/* Yearly Business Plan */}
              <div className="col-xl-4 col-md-6">
                <div className="price_item wow fadeInUp">
                  <div className="price_header">
                    <h6>Business Plan</h6>
                    <p>There are many variations of passages of Lorem Ipsum available but the word.</p>
                  </div>
                  <div className="price">
                    $55<sub>/ Year</sub>
                  </div>
                  <ul className="service_list list-unstyled">
                    <li><i className="icon_check_alt"></i>Non ipsum metus vulputate</li>
                    <li><i className="icon_check_alt"></i>There are variations of passages</li>
                    <li><i className="icon_check_alt"></i>Alteration some form injected</li>
                  </ul>
                  <Link href="contact.html" className="price_btn theme-btn theme-btn-alt">Choose Plan</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
