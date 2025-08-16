import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/assets/img/logo/Logo.png'
const FooterTwo = () => {
  return (
    <>
     <footer
        className="footer footer-2 pt-lg-130 pt-110 pb-100 pb-lg-125"
        style={{
          backgroundImage: "url('/img/footer/footer-bg-2.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {/* Column 1 */}
              <div className="col-lg-3 col-sm-6 text-center text-sm-start">
                <div className="footer-widget mb-30 wow fadeInLeft">
                  <h4 className="mb-20">We are on a mission.</h4>
                  <div className="footer-text mb-20">
                    <p>
                      At Banca, we are using cutting-edge technology to
                      transform the industry and deliver financial services that
                      actually work for you.
                    </p>
                  </div>
                  <div className="truspilot mt-40">
                    <Image
                      src="/img/footer/Trustpilot.png"
                      alt="Trustpilot"
                      width={130}
                      height={60}
                    />
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="col-lg-3 col-sm-6 text-center text-sm-start offset-lg-1">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="f-widget-title">
                    <h5>Company</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#">About Us</Link>
                      </li>
                      <li>
                        <Link href="#">Recognition</Link>
                      </li>
                      <li>
                        <Link href="#">Executive Team</Link>
                      </li>
                      <li>
                        <Link href="#">Careers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="col-lg-3 col-sm-6 text-center text-sm-start">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="f-widget-title">
                    <h5>Product</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#">Business Loans | Main</Link>
                      </li>
                      <li>
                        <Link href="#">Loan Calculator</Link>
                      </li>
                      <li>
                        <Link href="#">Refer a Friend</Link>
                      </li>
                      <li>
                        <Link href="#">Partner Program</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 4 */}
              <div className="col-lg-2 col-sm-6 text-center text-sm-start">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="f-widget-title">
                    <h5>Help</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#">Customer Care</Link>
                      </li>
                      <li>
                        <Link href="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="#">Security Center</Link>
                      </li>
                      <li>
                        <Link href="#">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright pt-45">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-4">
                <div className="row align-items-center gy-lg-0 gy-3 gx-0">
                  <div className="col-md-2 text-md-start text-center">
                    <Link href="/">
                      <Image
                        src={Logo}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <div className="line"></div>
                  </div>
                  <div className="col-md-4">
                    <div className="social-button text-center">
                      <Link className="ms-0" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>
                      <Link className="me-0" href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="copyright-text text-md-start text-center">
                    <p>
                      Copyright &copy; Banca 2025.
                      <br className="d-sm-none" />
                      <Link className="ms-3" href="#">
                        Privacy
                      </Link>{' '}
                      |{' '}
                      <Link className="ms-0" href="#">
                        Terms of Use
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterTwo