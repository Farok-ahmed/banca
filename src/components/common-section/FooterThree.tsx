import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Logo from '@/assets/img/logo/Logo.png'
const FooterThree = () => {
    const patheName = usePathname()
    const mobile = patheName === '/mobile-app'
    if (!mobile) return null
  return (
    <>
    <footer className="footer footer-1">
          <div className="footer-top  pt-115 pb-90">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-3 col-6 pr-lg-90">
                  <div className="footer-widget mb-30 wow fadeInLeft">
                    <div className="flog mb-35">
                      <Link href="index.html">
                        <Image
                          src={Logo}
                          alt="logo"
                        />
                      </Link>
                    </div>
                    <div className="footer-text mb-20">
                      <p>
                        Follow us on social media to find out the latest updates
                        on our progress.
                      </p>
                    </div>
                    <div className="social-icon mt-5">
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-google"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-2 col-6">
                  <div
                    className="footer-widget mb-30 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="f-widget-title">
                      <h5>product</h5>
                    </div>
                    <div className="footer-link">
                      <ul>
                        <li>
                          <Link href="#"> Download</Link>
                        </li>
                        <li>
                          <Link href="#"> Payments</Link>
                        </li>
                        <li>
                          <Link href="#"> Online Banking</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-2 col-6">
                  <div
                    className="footer-widget mb-30 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="f-widget-title">
                      <h5>Company</h5>
                    </div>
                    <div className="footer-link">
                      <ul>
                        <li>
                          <Link href="#"> About Us</Link>
                        </li>
                        <li>
                          <Link href="#"> Contact us</Link>
                        </li>
                        <li>
                          <Link href="#"> Roadmap</Link>
                        </li>
                        <li>
                          <Link href="#"> Blog</Link>
                        </li>
                        <li>
                          <Link href="#"> Careers</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-6">
                  <div
                    className="footer-widget mb-30 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="f-widget-title">
                      <h5>Services</h5>
                    </div>
                    <div className="footer-link">
                      <ul>
                        <li>
                          <Link href="#">Borrow money</Link>
                        </li>
                        <li>
                          <Link href="#">Collective loans</Link>
                        </li>
                        <li>
                          <Link href="#">Budget schedule</Link>
                        </li>
                        <li>
                          <Link href="#">Debt calculator</Link>
                        </li>
                        <li>
                          <Link href="#">Student scholarship</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright py-4">
            <div className="container-lg container-fluid">
              <div className="row align-items-center ">
                <div className="col-lg-3">
                  <div
                    className="language-list position-relative"
                    style={{ width: "130px" }}
                  >
                    <select
                      className="form-select border-0 shadow-none pe-4"
                      aria-label="Language select"
                      style={{
                        appearance: "none",
                        backgroundColor: "#171d24",
                        color: "#ffffff",
                        cursor: "pointer",
                        border: "none",
                        boxShadow: "none",
                        width: "100%",
                        padding: "6px 12px",
                      }}
                    >
                      <option value="English">English</option>
                      <option value="Bangla">Bangla</option>
                      <option value="French">French</option>
                      <option value="Hindi">Hindi</option>
                    </select>

                    <span className="position-absolute top-50 end-0 translate-middle-y me-2">
                      <i className="bi bi-chevron-down text-white"></i>
                    </span>
                  </div>
                </div>
                <div className="col-lg-5  text-center short-text">
                  <Link href="#">Terms & Conditions </Link>
                  <Link href="#">Privacy Policy</Link>
                  <Link href="#">Legal Notice</Link>
                </div>
                <div className="col-lg-4 text-center text-lg-end ">
                  <div className="copyright-text short-text">
                    <p>Copyright&copy; 2021, All Rights Reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default FooterThree