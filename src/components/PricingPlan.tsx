'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const PricingPlan = () => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');

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
            There are many variations of passages of Lorem Ipsum available but them
            <br />
            majority have suffered alteration form injected.
          </p>
        </div>

        {/* ==== Toggle Switch === */}
        <div className="pricing_tab_btn text-center mb-4">
          <span
            className={activeTab === 'monthly' ? 'fw-bold text-dark' : 'text-muted'}
            style={{ cursor: 'pointer', marginRight: '10px' }}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly
          </span>
          <span className="toggle"></span>
          <span
            className={activeTab === 'yearly' ? 'fw-bold text-dark' : 'text-muted'}
            style={{ cursor: 'pointer', marginLeft: '10px' }}
            onClick={() => setActiveTab('yearly')}
          >
            Yearly
          </span>
        </div>

        {/* ==== Pricing Content ==== */}
        <div className="pricing_inner">
          {/* Monthly Pricing */}
          {activeTab === 'monthly' && (
            <div className="price_items month">
              <div className="row justify-content-center">
                {/* Repeat this for all plans */}
                <PricingCard
                  title="Basic Plan"
                  price="$15"
                  duration="/month"
                />
                <PricingCard
                  title="Premium Plan"
                  price="$25"
                  duration="/month"
                />
                <PricingCard
                  title="Business Plan"
                  price="$45"
                  duration="/month"
                />
              </div>
            </div>
          )}

          {/* Yearly Pricing */}
          {activeTab === 'yearly' && (
            <div className="price_items year">
              <div className="row justify-content-center">
                <PricingCard
                  title="Basic Plan"
                  price="$25"
                  duration="/year"
                />
                <PricingCard
                  title="Premium Plan"
                  price="$35"
                  duration="/year"
                />
                <PricingCard
                  title="Business Plan"
                  price="$55"
                  duration="/year"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// === PricingCard component for reusability ===
const PricingCard = ({
  title,
  price,
  duration,
}: {
  title: string;
  price: string;
  duration: string;
}) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="price_item wow fadeInUp">
        <div className="price_header">
          <h6>{title}</h6>
          <p>
            There are many variations of passages of Lorem Ipsum available but the word.
          </p>
        </div>
        <div className="price">
          {price}
          <sub>{duration}</sub>
        </div>
        <ul className="service_list list-unstyled">
          <li>
            <i className="icon_check_alt"></i>Non ipsum metus vulputate
          </li>
          <li>
            <i className="icon_check_alt"></i>There are variations of passages
          </li>
          <li>
            <i className="icon_check_alt"></i>Alteration some form injected
          </li>
        </ul>
        <Link href="contact.html" className="price_btn theme-btn theme-btn-alt">
          Choose Plan
        </Link>
      </div>
    </div>
  );
};

export default PricingPlan;
