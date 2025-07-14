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
                                <div className="col-lg-6">
                                    <div className="cta-content wow fadeInRight">
                                        <h2 className="mb-10">Start your free trial !</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                                        <div className="d-flex flex-column flex-sm-row mt-40">
                                            <input type="email" className="form-control" placeholder="Enter Email address"/>
                                            <a href="#"
                                                className="input-append theme-btn theme-btn-lg ms-sm-3">Subscribe</a>
                                        </div>
                                        <ul className="list-unstyled feature-list">
                                            <li><i className="fas fa-check-circle"></i> Get 30 day free trial</li>
                                            <li><i className="fas fa-check-circle"></i> No Spamming</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <Image className="cta-img wow fadeInUp img-fluid" width={500} height={800} src="/img/home-4/cta-Img.png" alt=""/>
                                    <Image className="shape img-fluid" width={500} height={400} src="/img/home-4/cta-shape.png" alt=""/>
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
