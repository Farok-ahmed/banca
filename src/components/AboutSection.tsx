import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-area bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-lg-7">
            <div className="cash-img position-relative">
              <Image
                className="img-fluid"
                src="/img/home-4/manage-cash-img.png"
                alt="Manage cash"
                width={600}
                height={400}
              />
              <Image
                className="msg-1 wow fadeInRight"
                data-wow-delay="0.1s"
                src="/img/home-4/basic-info-2.png"
                alt="Info 2"
                width={180}
                height={95}
              />
              <Image
                className="msg-2 wow fadeInRight"
                data-wow-delay="0.3s"
                src="/img/home-4/basic-info-3.png"
                alt="Info 3"
                width={200}
                height={60}
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="col-lg-5 wow fadeInLeft">
            <div className="section-title text-start">
              <span className="short-title-2">_WHY BANCA ?</span>
              <h1 className="mb-3">
                Manage your cash <span className="underline-shape">easily</span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and the
                typesetting industry. Lorem Ipsum has been industrys
              </p>
              <ul className="list-unstyled feature-list">
                <li>
                  <i className="fas fa-check-circle"></i> Inventore veritatis et architecto beatae
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Tempor egestas morbi pulvinar amet
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
