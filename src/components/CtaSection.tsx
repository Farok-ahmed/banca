import Image from 'next/image';
import React from 'react';

const CtaSection = () => {
  return (
    <section className="cta-area-3 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 position-relative">
            <div className="cta-4 cta-bg-primary">
              <div className="row align-items-center">
                {/* Left Side - Text Content */}
                <div className="col-lg-6">
                  <div className="cta-content wow fadeInRight">
                    <h2 className="mb-10">Start your free trial !</h2>
                    <p>There are many variations of passages of Lorem Ipsum available.</p>
                    <div className="d-flex flex-column flex-sm-row mt-40">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email address"
                      />
                      <a
                        href="#"
                        className="input-append theme-btn theme-btn-lg ms-sm-3"
                      >
                        Subscribe
                      </a>
                    </div>
                    <ul className="list-unstyled feature-list mt-3">
                      <li>
                        <i className="fas fa-check-circle"></i> Get 30 day free trial
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> No Spamming
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Side - Images */}
                <div className="col-lg-6 position-relative">
                  <Image
                    src="/img/home-4/cta-Img.png"
                    alt="cta-img"
                    width={500}
                    height={400}
                    className="img-fluid wow fadeInUp"
                  />
                  <Image
                    src="/img/home-4/cta-shape.png"
                    alt="cta-shape"
                    width={100}
                    height={100}
                    className="img-fluid shape position-absolute top-0 end-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
