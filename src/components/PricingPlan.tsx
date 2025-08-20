'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const PricingPlan = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePricing = () => {
    setIsMonthly((prev) => !prev);
  };

  return (
    <section className="saas-pricing-area bg-white">
      <div className="container">
        <div className="saas-section-title text-center mb-60">
          <h2>
            The perfect <span>pricings</span> plans
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="pricing_tab_btn text-center">
          <span
            // onClick={() => setIsMonthly(true)}
            className={`tab-btn ${isMonthly ? 'active' : ''}`}
          >
            Monthly
          </span>
          <span className={`toggle ${isMonthly ? "clicked" : ""}`} onClick={togglePricing}></span>
          <span
            // onClick={() => setIsMonthly(false)}
            className={`tab-btn ${!isMonthly ? 'active' : ''}`}
          >
            Yearly
          </span>
        </div>

        <div className="pricing_inner">
          {/* Monthly Pricing */}
          <div className="price_items" style={{ display: isMonthly ? 'block' : 'none' }}>
            <div className="row justify-content-center">
              {/* Monthly Plans */}
              {[
                { title: 'Basic', price: '$15', period: 'month' },
                { title: 'Premium', price: '$25', period: 'month' },
                { title: 'Business', price: '$45', period: 'month' }
              ].map((plan, i) => (
                <div className="col-xl-4 col-md-6" key={i}>
                  <div className="price_item">
                    <div className="price_header">
                      <h6>{plan.title} Plan</h6>
                      <p>There are many variations of passages of Lorem Ipsum available but the word.</p>
                    </div>
                    <div className="price">
                      {plan.price}
                      <sub>/ {plan.period}</sub>
                    </div>
                    <ul className="service_list list-unstyled">
                      <li><i className="icon_check_alt"></i> Non ipsum metus vulputate</li>
                      <li><i className="icon_check_alt"></i> Variations of passages</li>
                      <li><i className="icon_check_alt"></i> Alteration some form injected</li>
                    </ul>
                    <Link href="/contact" className="price_btn theme-btn theme-btn-alt">Choose Plan</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Yearly Pricing */}
          <div className="price_items" style={{ display: !isMonthly ? 'block' : 'none' }}>
            <div className="row justify-content-center">
              {/* Yearly Plans */}
              {[
                { title: 'Basic', price: '$25', period: 'year' },
                { title: 'Premium', price: '$35', period: 'year' },
                { title: 'Business', price: '$55', period: 'year' }
              ].map((plan, i) => (
                <div className="col-xl-4 col-md-6" key={i}>
                  <div className="price_item">
                    <div className="price_header">
                      <h6>{plan.title} Plan</h6>
                      <p>There are many variations of passages of Lorem Ipsum available but the word.</p>
                    </div>
                    <div className="price">
                      {plan.price}
                      <sub>/ {plan.period}</sub>
                    </div>
                    <ul className="service_list list-unstyled">
                      <li><i className="icon_check_alt"></i> Non ipsum metus vulputate</li>
                      <li><i className="icon_check_alt"></i> Variations of passages</li>
                      <li><i className="icon_check_alt"></i> Alteration some form injected</li>
                    </ul>
                    <Link href="/contact" className="price_btn theme-btn theme-btn-alt">Choose Plan</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
