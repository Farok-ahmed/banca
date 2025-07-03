import Image from 'next/image';
import React from 'react';

const FeatureSteps = () => {
  return (
    <section id="feature" className="steps-area pt-115 pb-105 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto pb-55">
            <div className="section-title">
              <span className="short-title-2">_OUR PROCESS</span>
              <h1 className="wow fadeInUp">
                3 <span className="underline-shape">steps</span> to follow
              </h1>
              <p className="wow fadeInUp" data-wow-delay="0.3s">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form,
              </p>
            </div>
          </div>
        </div>

        <div className="row gy-xl-0 gy-4">
          {/* Step 1 */}
          <div className="col-xl-4 col-md-6">
            <div className="feature-card-widget-8 wow fadeInUp" data-wow-delay="0.1s">
              <div className="card-img">
                <Image
                  src="/img/home-4/step-icon-01.svg"
                  alt="Apply for loan"
                  width={80}
                  height={80}
                />
              </div>
              <h4>Apply for loan</h4>
              <p>
                Quis dapibus volutpat condimentum
                quam sed non elit sed magna lectus dui interdum facilisi justo
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-xl-4 col-md-6">
            <div className="feature-card-widget-8 wow fadeInUp" data-wow-delay="0.3s">
              <div className="card-img">
                <Image
                  src="/img/home-4/step-icon-02.svg"
                  alt="Get approved"
                  width={80}
                  height={80}
                />
              </div>
              <h4>Get approved</h4>
              <p>
                Quis dapibus volutpat condimentum
                quam sed non elit sed magna lectus dui interdum facilisi justo
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-xl-4 col-md-6 mx-auto">
            <div className="feature-card-widget-8 wow fadeInUp" data-wow-delay="0.5s">
              <div className="card-img">
                <Image
                  src="/img/home-4/step-icon-03.svg"
                  alt="Get your money"
                  width={80}
                  height={80}
                />
              </div>
              <h4>Get your money</h4>
              <p>
                Quis dapibus volutpat condimentum
                quam sed non elit sed magna lectus dui interdum facilisi justo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSteps;
