import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer footer-3">
      {/* Footer Top */}
      <div className="footer-top pt-200 pb-lg-115 pb-120">
        <div className="container">
          <div className="row gx-0 pt-60">
            {/* About */}
            <div className="col-lg-4 col-sm-6 text-center text-sm-start">
              <div className="footer-widget wow fadeInLeft mb-30">
                <div className="footer-text mb-20">
                  <p>
                    Banca is a leading bank in the worldzone and a prominent
                    international banking institution
                  </p>
                </div>

                <span className="overline">COTATION</span>

                <div className="footer-bold">
                  <span className="counter">
                    $<span>22.818</span>
                  </span>
                  <span className="counter">
                    -<span>0.22</span>%
                  </span>
                </div>
                <p className="time">2021-01-05 14:00 (INTERNATIONAL TIME)</p>
              </div>
            </div>

            {/* Link Columns */}
            {[
              {
                title: 'Banca at a Glance',
                links: [
                  'Our core Businesses',
                  "Our 'company purpose'",
                  'Jobs & Careers',
                  'Our Responsibility',
                ],
              },
              {
                title: 'Publications',
                links: [
                  'Compliance Publications',
                  'Annual Reports',
                  'CSR Reports',
                  'Financial documentation',
                ],
              },
              {
                title: 'Direct Access',
                links: [
                  'Our news',
                  'Our press releases',
                  'Our job offers',
                  'Our websites',
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className={`col-lg-2 col-sm-6 text-center text-sm-start ${
                  index === 0 ? 'ms-lg-5' : ''
                }`}
              >
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay={`${0.1 + index * 0.2}s`}
                >
                  <div className="f-widget-title">
                    <h5>{section.title}</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link href="#">{link}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Area */}
      <div className="copyright pt-25 pb-25">
        <div className="container">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-lg-3 text-center text-lg-start">
              <Link href="/" className="p-0 m-0">
                <Image
                  src="/img/logo/Logo.png"
                  alt="logo"
                  width={130}
                  height={40}
                />
              </Link>
            </div>

            {/* Text */}
            <div className="col-lg-5 text-center my-3 my-sm-0">
              <div className="copyright-text">
                <p>
                  Copyright &copy; Banca 2025. <br className="d-sm-none" />
                  <Link className="ms-2" href="#">
                    Privacy
                  </Link>{' '}
                  |{' '}
                  <Link className="ms-0" href="#">
                    Term of Use
                  </Link>
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="col-lg-4 text-center text-lg-end">
              <div className="social-button">
                <Link href="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-pinterest-p"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
