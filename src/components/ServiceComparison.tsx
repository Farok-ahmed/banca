import Image from 'next/image';
import React from 'react';
import logo2 from '@/assets/img/logo/Logo-2.png';

const ServiceComparison = () => {
  return (
    <section className="services-area bg-white pt-120 pb-120 wow fadeInUp">
      <div className="container">
        <div className="section-title mb-45 text-center">
          <span className="short-title-2">_SERVICE COMPARISONS</span>
          <h1>
            Our better <span className="underline-shape">services</span>
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration in some form,
          </p>
        </div>

        <div className="table-responsive">
          <table className="table table-borderless mb-0">
            <thead>
              <tr>
                <th className="feature-head" scope="col"></th>
                <th className="text-center" scope="col">
                  <Image src={logo2} alt="Logo" />
                </th>
                <th className="text-center" scope="col">
                  Other Companies
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="feature-head">Payment Per Transaction</th>
                <td className="feature-item">0.50/per transaction</td>
                <td className="feature-item">1.50/per transaction</td>
              </tr>
              <tr>
                <th className="feature-head">Bank account limitations</th>
                <td className="feature-item">up to 10 bank accounts</td>
                <td className="feature-item">Only 3 bank accounts</td>
              </tr>
              <tr>
                <th className="feature-head">Local fees capped at NGN 2,000</th>
                <td className="feature-item">
                  <i className="fas fa-check-circle text-success"></i>
                </td>
                <td className="feature-item">
                  <i className="fas fa-times-circle text-danger"></i>
                </td>
              </tr>
              <tr>
                <th className="feature-head">Loan Purchase</th>
                <td className="feature-item">easy to follow steps</td>
                <td className="feature-item">complicated steps</td>
              </tr>
              <tr>
                <th className="feature-head">Debt Financing</th>
                <td className="feature-item">
                  <i className="fas fa-check-circle text-success"></i>
                </td>
                <td className="feature-item">
                  <i className="fas fa-times-circle text-danger"></i>
                </td>
              </tr>
              <tr>
                <th className="feature-head">No hidden fees or charges</th>
                <td className="feature-item">
                  <i className="fas fa-check-circle text-success"></i>
                </td>
                <td className="feature-item">
                  <i className="fas fa-times-circle text-danger"></i>
                </td>
              </tr>
              <tr>
                <th className="feature-head">Local fees capped</th>
                <td className="feature-item">
                  <i className="fas fa-check-circle text-success"></i>
                </td>
                <td className="feature-item">
                  <i className="fas fa-times-circle text-danger"></i>
                </td>
              </tr>
              <tr>
                <th className="feature-head bg-transparent"></th>
                <td className="feature-item p-0 bg-transparent">
                  <a href="#" className="theme-btn">
                    <span>Get started now</span> <i className="arrow_right"></i>
                  </a>
                </td>
                <td className="feature-item bg-transparent"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pt-120 stat-view">
          <div className="row gy-md-0 gy-4 text-center">
            <div className="col-md-4 border-end">
              <h1 className="counter">
                <span>400</span> K
              </h1>
              <p>Total active customers</p>
            </div>
            <div className="col-md-4">
              <h1 className="counter">
                <span>100</span>M+
              </h1>
              <p>Order success rate</p>
            </div>
            <div className="col-md-4 border-start">
              <h1 className="counter">
                <span>95.87</span>%
              </h1>
              <p>Avg. new projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;
